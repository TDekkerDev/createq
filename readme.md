


Ik heb buttons gemaakt waar je kan tekst, grootte, kleur, achtergrondafbeelding en shape kan toevoegen.

De style van de html pagina aangepast. 

 Binnen de <div id="editable"> wordt een lege container gemaakt waarin de buttons worden weergegeven. Dit gebeurt met de volgende regel


<div id="buttonContainer"></div>


Javascript begint de code met het bepalen van variabelen en het selecteren van de benodigde HTML elementen


const addButton = document.getElementById("addButton");
const buttonCounter = document.getElementById("counter");


Er zijn twee belangrijke functies voor het maken de buttons, dat zijn createButton() en showForm().

createButton() wordt aangeroepen wanneer er op de knop Create Button(s) wordt geklikt in de legenda. Deze functie creëert een nieuwe button, voegt deze toe aan de buttonContainer en voegt ook een eventlistener toe voor het bewerken van de button.
showForm() wordt aangeroepen wanneer er op een button wordt geklikt. Deze functie opent een popup waarin de eigenschappen van de button kunnen worden bewerkt.

