let questions = [
    ["Which element has the atomic number 1?", "Helium", "Oxygen", "Hydrogen", "Nitrogen", 3],
    ["What is the smallest prime number?", "1", "2", "3", "5", 2],
    ["What is the capital of France?", "Paris", "Berlin", "Madrid", "Rome", 1],
    ["What is the chemical symbol for gold?", "Au", "Ag", "Pb", "Fe", 1],
    ["Which planet is known as the Red Planet?", "Venus", "Mars", "Jupiter", "Saturn", 2],
    ["Who invented Python?", "Mark Zuckerberg", "Guido Van Rossum", "Elon Musk", "None", 2],
    ["Who painted the Mona Lisa?", "Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet", 3],
    ["In which year did World War II end?", "1942", "1945", "1948", "1950", 2],
    ["What is the largest ocean on Earth?", "Atlantic", "Indian", "Pacific", "Arctic", 3],
    ["Which year was the first iPhone released?", "2005", "2007", "2009", "2010", 2],
    ["What is the name of the first artificial satellite launched into space?", "Apollo 11", "Sputnik 1", "Voyager 1", "Hubble", 2],
    ["Which language is primarily spoken in Brazil?", "Spanish", "Portuguese", "French", "Italian", 2],
    ["Who is known as the father of modern computing?", "Bill Gates", "Steve Jobs", "Alan Turing", "Charles Babbage", 4],
    ["In which year did humans first land on the moon?", "1967", "1968", "1969", "1970", 3],
    ["Which programming language is known as the 'mother of all languages'?", "C", "Python", "Java", "Fortran", 1]
]

let levels = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000,640000,1250000,2500000,5000000,10000000];
let currentQuestion = 0;
let money = 0;

// Function to start the game and hide the start screen
function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('quit').style.display = 'block';
    loadQuestion();
}

// Function to load the next question
function loadQuestion() {
    if (currentQuestion < questions.length) {
        let ques = questions[currentQuestion];
        document.getElementById('question-text').innerText = `Question for Rs. ${levels[currentQuestion]}: \n\n${ques[0]}`;
        document.getElementById('option1').innerText = ` ${ques[1]}`;
        document.getElementById('option2').innerText = ` ${ques[2]}`;
        document.getElementById('option3').innerText = ` ${ques[3]}`;
        document.getElementById('option4').innerText = ` ${ques[4]}`;
        document.getElementById('message').innerText = '';
        resetButtonColors();
    } else {
        document.getElementById('message').innerText = "Congratulations...You are CROREPATHI!\n You won 1 Crore Rupees...";
        document.getElementById('question-section').style.display = 'none';
        document.getElementById('quit').style.display = 'none'; // Hide quit button
    }
}

function resetButtonColors() {
    document.getElementById('option1').classList.remove('correct', 'wrong');
    document.getElementById('option2').classList.remove('correct', 'wrong');
    document.getElementById('option3').classList.remove('correct', 'wrong');
    document.getElementById('option4').classList.remove('correct', 'wrong');
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    let correctAnswer = questions[currentQuestion][5];
    let correctOptionText = questions[currentQuestion][correctAnswer];

    if (selectedOption === correctAnswer) {
        document.getElementById(`option${selectedOption}`).classList.add('correct');
        document.getElementById('message').innerText = "Correct answer! Going to next question...";

        money = levels[currentQuestion];
        document.getElementById('money-won').innerText = `Total Prize Money Won: Rs. ${money}`;
        
        // Move to the next question after 2 seconds
        setTimeout(() => {
            currentQuestion++;
            loadQuestion();
        }, 2000);

    } else {
        document.getElementById(`option${selectedOption}`).classList.add('wrong');
        document.getElementById(`option${correctAnswer}`).classList.add('correct');
        document.getElementById('message').innerText = `Wrong answer! \nThe correct answer was: ${correctOptionText}.\n\n---------------------------------Game Over-------------------------------------`;
        endGame(); // End the game
    }
}

// Function to quit the game
function quitGame() {
    document.getElementById('message').innerText = `You have quit the game.`;
    endGame(); // End the game
}

// Function to handle ending the game
function endGame() {
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('quit').style.display = 'none'; // Hide quit button
    
}
