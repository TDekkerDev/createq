fetch("/app/json/index.json")
  .then((response) => response.json())
  .then((data) => {
    // Store the JSON data in a variable
    var json = data;
    // Convert the JSON data to HTML
    var html = json2html(json);
    // Display the HTML data in the cell element
    var cell = document.getElementById("cell");
    cell.innerHTML = html;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
