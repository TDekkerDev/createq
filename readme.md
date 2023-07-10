Voor de createq fieldlab opdracht heb ik de HTML opgezet, in de html wordt een form laten zien met aan de linkerkant een legenda met een <b>Create button</b> en een <b>Button Count</b> om de hoeveelheid buttons te tonen.

```
//de HTML
<body>
    <div class="container-container" style="display: block; position: absolute; margin: 50px;">
        <div class="legenda-container" style="display: inline-flex; flex-direction: row; align-items: flex-start; width: auto; height: 650px; padding: 5px; border: 2px solid black; justify-content: center; max-width: 1200px; margin: 20px; border-radius: 10px; background-color: var(--primary-color);">
            <div class="legenda" style="display: inline-flex; flex-direction: column; min-height: -webkit-fill-available; margin: 1px; margin-right: 10px; border: 2px solid black; padding: 10px; border-radius: 10px; background-color: #fff;">
                <div class="Legenda-contemt-container" style="display: flex; flex-direction: column; align-items: center; padding: 5px; margin: 10px; border-top: 1px solid black; border-bottom: 1px solid black;">
                    <h3>Add or remove buttons</h3>
                    <button id="mainButton" class="addButton-container" onclick="createButton()" style="padding: 10px 20px; margin-bottom: 5px; background-color: var(--secondary-color); :hover{background-color: #54BD84;}; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Create Button(s)</button>
                    <span id="counter" class="btnCounter">0</span>
                </div>
            </div>

//script
    <script>
        const addButton = document.getElementById("addButton");
        const buttonCounter = document.getElementById("counter");

        let counter = 0;
        let buttonCount = 0
        let currentButton = null;

        // Create a function to update the counter
        function updateCounter(value) {
            counter == value
            buttonCounter.textContent = `Created button(s): ${counter}`;
        }

        // Function to create a new button
        function createButton() {
            buttonCount++;
            counter++;
            const buttonContainer = document.getElementById('buttonContainer');
            const newButton = document.createElement('button');
            const newDiv = document.createElement("div");
            const DivId = `div${buttonCount}`; // generate a unique ID for the new div element
            newDiv.setAttribute("id", DivId);

            const BtnId = `button${buttonCount}`; // generate a unique ID for the new Button element
            newButton.setAttribute("id", BtnId);
            newDiv.appendChild(newButton);
            newButton.classList.add('button');
            newButton.innerText = 'Button ' + buttonCount;
            newButton.addEventListener('click', (event) => {
                event.preventDefault();
                showForm(newButton);
            });

            buttonContainer.appendChild(newButton);
            updateCounter();
        }
```
<br></br>
Voor de rechterkant van de legenda worden de button gegenereerd.
```
//html
            <div class="content-container" id="editable" contenteditable="false" style="display: inline-flex; flex-direction: column; align-items: baseline; min-height: -webkit-fill-available; border: 2px solid black; flex: 2; padding: 10px; border-radius: 10px; background-color: #fff;">
                <h1>CreateQ Button Example!</h1>
                <p>Click on the the "Create Button(s)" in the legenda</p>
                <!--<img src="https://via.placeholder.com/150" alt="placeholder image">-->

                <div id="buttonContainer"></div>

//script
        // Function to create a new button
        function createButton() {
            buttonCount++;
            counter++;
            const buttonContainer = document.getElementById('buttonContainer');
            const newButton = document.createElement('button');
            const newDiv = document.createElement("div");
            const DivId = `div${buttonCount}`; // generate a unique ID for the new div element
            newDiv.setAttribute("id", DivId);

            const BtnId = `button${buttonCount}`; // generate a unique ID for the new Button element
            newButton.setAttribute("id", BtnId);
            newDiv.appendChild(newButton);
            newButton.classList.add('button');
            newButton.innerText = 'Button ' + buttonCount;
            newButton.addEventListener('click', (event) => {
                event.preventDefault();
                showForm(newButton);
            });

            buttonContainer.appendChild(newButton);
            updateCounter();
        }
```
<br></br>
De buttons hebben een onclick() die een form triggerd om die button te kunnen aanpassen: in de vorm van de <b><i>tekst, lengte & breedte, kleur, shape, achtergrondafbeelding en een knop actie(ButtonAction)</i></b>
```
//html
                <!--HTML structure for the modal -->
                <div id="myModal" class="modal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; min-height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); :hover,:focus{color: #000; text-decoration: none; cursor: pointer;}">
                    <div class="modal-content" style="position: relative; background-color: #fefefe; margin: 10%; padding: 0; border: 1px solid #888; width: 80%; min-height: 600px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);">
                        <h2>Edit Button</h2>
                        <form id="buttonForm">
                            <label for="buttonText">Text:</label>
                            <input type="text" id="buttonText" name="buttonText"><br><br>
                            
                            <label for="buttonWidth">Width:</label>
                            <input type="text" id="buttonWidth" name="buttonWidth" placeholder="Input in 'px'"><br><br>
                            
                            <label for="buttonHeight">Height:</label>
                            <input type="text" id="buttonHeight" name="buttonHeight" placeholder="Input in 'px'"><br><br>
                            
                            <label for="buttonColor">Background Color:</label>
                            <input type="color" id="buttonColor" name="buttonColor"><br><br>

                            <label for="buttonShape">Button Shape:</label>
                            <select id="buttonShape" name="buttonShape">
                              <option value="recangle">Recangle</option>
                              <option value="circle">Circle</option>
                            </select><br><br>

                            <label for="buttonAction">Button Action:</label>
                            <select id="buttonAction" name="buttonAction">
                              <option value="switchUp">Switch Up</option>
                              <option value="switchDown">Switch Down</option>
                              <option value="switchOn">Switch On</option>
                              <option value="switchOff">Switch Off</option>
                            </select><br><br>
                            
                            <input type="submit" value="Save">
                            <input type="button" value="Delete" onclick="deleteButton()">
                            <input type="button" value="Cancel" onclick="cancelForm()">
                        </form>
                    </div>
                </div>

//script
        // Function to show the form and populate it with button data
        function showForm(button) {
            const modal = document.getElementById("myModal");
            const form = document.getElementById('buttonForm');
            const buttonText = document.getElementById('buttonText');
            const buttonWidth = document.getElementById('buttonWidth');
            const buttonHeight = document.getElementById('buttonHeight');
            const buttonColor = document.getElementById('buttonColor');
            const buttonShape = document.getElementById('buttonShape');
            const buttonAction = document.getElementById('buttonAction');

            buttonText.value = button.innerText || '';
            buttonWidth.value = button.style.width || '';
            buttonHeight.value = button.style.height || '';
            buttonColor.value = button.style.backgroundColor || '';
            buttonShape.value = button.getAttribute("buttonShape");
            buttonAction.value = button.getAttribute("onclick");

            currentButton = button; // Store the current button reference

            form.onsubmit = function (event) {
                saveChanges(button, buttonText.value, buttonWidth.value, buttonHeight.value, buttonColor.value, buttonShape.value, buttonAction.value);
                event.preventDefault();
                modal.style.display = modal.style.display === "block" ? "none" : "block";
            };

            // Toggle the modal
            modal.style.display = modal.style.display === "block" ? "none" : "block";
        }

        addEventListener("click", (event) => {

        })

        // Custom button action functions
        function switchUp() {
        console.log('Button Action: switchUp');
        }

        function switchDown() {
        console.log('Button Action: switchDown');
        }

        function switchOn() {
        console.log('Button Action: switchOn');
        }

        function switchOff() {
        console.log('Button Action: switchOff');
        }
```
<br></br>

In het form zijn nog 3 button om de knop op te slaan: <b>Save</b>, een knop om de gekozen knop te verwijderen: <b>Delete</b> en een knop om terug te gaan: <b>Cancel</b>.
```
// save script

        // Function to save the changes to a button
        function saveChanges(button, text, width, height, color, shape, doAction) {
            button.innerText = text;
            button.style.width = width;
            button.style.height = height;
            button.style.backgroundColor = color;
            button.setAttribute('buttonShape', shape);
            button.setAttribute('onclick', doAction + "()");

            // Update the innerText color based on background color
            if (!color || color === '#ffffff') {
                button.style.color = 'black';
            } else {
                button.style.color = 'white';
            }

            // Update the button shape inline
            if (shape === 'circle') {
                button.style.borderRadius = '50%';
            } else {
                button.style.borderRadius = '0';
            }

            if (doAction === null) {
                button.setAttribute('onclick')
            }

            if (doAction === null) {
                button.setAttribute('onclick')
            }

            currentButton = null; // Clear the current button reference
        }

// delete script

        // Function to delete the current button
        function deleteButton() {
            if (currentButton) {
                const confirmation = confirm("Are you sure you want to delete this button?");
                if (confirmation) {
                    const buttonContainer = document.getElementById('buttonContainer');
                    buttonContainer.removeChild(currentButton);

                    const modal = document.getElementById("myModal");
                    modal.style.display = "none";

                    updateCounter(counter--);
                }
            }
        }

// cancel script

        // Function to cancel the form and hide it
        function cancelForm() {
            const modal = document.getElementById("myModal");
            modal.style.display = "none"; 
        }

        // add a click event listener to the modal window
        window.addEventListener("click", (event) => {
            // When the user clicks anywhere outside of the modal, close it
            const modal = document.getElementById("myModal");
            if(event.target == modal) {
                modal.style.display = "none";
            }
        });
```
<br></br>
De <b>CSS</b> is inline met de html zo als je kan zien in de html code
https://www.npmjs.com/package/html2json
