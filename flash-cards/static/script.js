const modal = document.getElementById("modal");
const submit = document.querySelector('.submit');

let flashCards = []; // Array to store created flash cards


function toggleAnswer(btn) {
    let card = btn.parentElement;
    card.classList.toggle('open');
    btn.innerText = card.classList.contains('open') ? 'Hide Answer' : 'Show Answer';
}

// Function to load saved flash cards from localStorage
function loadFlashCards() {
    // Check if flash cards exist in localStorage
    if (localStorage.getItem('flashCards')) {
        // Parse saved flash cards from JSON
        let savedCards = JSON.parse(localStorage.getItem('flashCards'));

        // Iterate over saved flash cards and recreate them
        savedCards.forEach(function(card) {
            createCard(card.id, card.question, card.answer); // Pass ID when creating cards
        });
    }
}

// Create a new flash card
function createCard(id, question, answer) {
    // Create card element
    let card = document.createElement('div');
    card.classList.add('card');

    // Set question and answer
    card.innerHTML = `
        <div class="question">${question}</div>
        <div class="answer">${answer}</div>
        <button class="btn" onclick="toggleAnswer(this)">Show Answer</button>
        <br>
        <button class="edit" onclick="editCard(this)">Edit</button>
        <button class="delete" onclick="deleteCard(this)">Delete</button>
    `;

    // Use the provided ID for the card
    card.id = id;

    // Append card to container
    document.querySelector('.container').appendChild(card);

    // Add the card to the array of flash cards
    flashCards.push({ id: id, question: question, answer: answer });

}

function saveFlashCards() {
    // Convert the flashCards array to JSON
    let flashCardsJson = JSON.stringify(flashCards);
    // Overwrite the 'flashCards' item in localStorage with the updated array
    localStorage.setItem('flashCards', flashCardsJson);
}

function editCard(btn) {
    let card = btn.parentElement;
    let question = card.querySelector('.question').innerHTML;
    let answer = card.querySelector('.answer').innerHTML;
    let modquestion = document.querySelector('#modquestion');
    let modanswer = document.querySelector('#modanswer');
    modquestion.value = question;
    modanswer.value = answer;
    modal.style.display = "block";

    // Store a reference to the card being edited
    modal.dataset.cardId = card.id;
}

// Function to save edited flash card
function saveEdit() {
    let modquestion = document.querySelector('#modquestion').value;
    let modanswer = document.querySelector('#modanswer').value;

    // Retrieve the card being edited using the stored cardId
    let editedCard = document.getElementById(modal.dataset.cardId);

    // If the card being edited is found, update its content
    if (editedCard) {
        editedCard.querySelector('.question').innerHTML = modquestion;
        editedCard.querySelector('.answer').innerHTML = modanswer;
    } else {
        // If the card being edited is not found, create a new card
        let newId = 'card' + (flashCards.length + 1); // Generate new ID
        createCard(newId, modquestion, modanswer); // Pass new ID when creating a new card
    }

    // Save the flash cards to localStorage
    saveFlashCards();

    // Close the modal
    modal.style.display = "none";
}

// Function to delete a flash card
function deleteCard(btn) {
    let cardId = btn.parentElement.id;
    let index = flashCards.findIndex(card => card.id === cardId);
    if (index !== -1) {
        flashCards.splice(index, 1);
    }
    btn.parentElement.remove();

    // Save the flash cards to localStorage
    saveFlashCards();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// Attach event listener to modal submit button
submit.addEventListener("click", function() {
    saveEdit();
});


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        loadFlashCards();
    }, 100); // Adjust the timeout as necessary
});
