const express = require("express");
const app = express();
const { SerialPort } = require("serialport");

const port = new SerialPort({
  path: "COM5",
  baudRate: 9600,
});

var Q0110 = 0;
var Q0120 = 0;
var Q0130 = 0;

// Function to send a command
function sendCommand(command) {
  port.write(command);
}

const command = "[Q01F0>INDBREATH]";
sendCommand(command);

function listenSerial() {
  let receivedMessage = "";
  port.on("data", (data) => {
    const receivedData = data.toString().trim();
    receivedMessage += receivedData;
    if (receivedMessage.includes("]")) {
      const startIndex = receivedMessage.indexOf("[") + 1;
      const endIndex = receivedMessage.indexOf("]");
      const extractedData = receivedMessage.substring(startIndex, endIndex);
      const cleanedData = extractedData.replace("<PUSH", "");
      receivedMessage = "";
      if (cleanedData === "Q0110") {
        if (Q0110 === 0) {
          Q0110 = 1;
          const command1 = "[Q01F0>INDOFF]";
          sendCommand(command1);
          const command = "[Q0110>INDON]";
          sendCommand(command);
        } else {
          Q0110 = 0;
          const command = "[Q01F0>INDBREATH]";
          sendCommand(command);
        }
      }
      if (cleanedData === "Q0120") {
        if (Q0120 === 0) {
          Q0120 = 1;
          const command1 = "[Q01F0>INDOFF]";
          sendCommand(command1);
          const command = "[Q0120>INDON]";
          sendCommand(command);
        } else {
          Q0120 = 0;
          const command = "[Q01F0>INDBREATH]";
          sendCommand(command);
        }
      }
      if (cleanedData === "Q0130") {
        if (Q0130 === 0) {
          Q0130 = 1;
          const command1 = "[Q01F0>INDOFF]";
          sendCommand(command1);
          const command = "[Q0130>INDON]";
          sendCommand(command);
        } else {
          Q0130 = 0;
          const command = "[Q01F0>INDBREATH]";
          sendCommand(command);
        }
      }
    }
  });
}

// Define API endpoints
app.post("/turn-on-lights", (req, res) => {
  const command = "[Q01F0>INDON]";
  sendCommand(command);
  res.send("Lights turned on");
});

app.post("/turn-off-lights", (req, res) => {
  const command = "[Q01F0>INDOFF]";
  sendCommand(command);
  res.send("Lights turned off");
});

// Start the server
app.listen(3000, () => {
  console.log("API server listening on port 3000");
  listenSerial();
});
