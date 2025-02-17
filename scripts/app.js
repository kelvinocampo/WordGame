document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.querySelector('header p');
    const letterDisplay = document.getElementById('letter');
    const playerDisplay = document.getElementById('player');
    const wordForm = document.querySelector('form');
    const wordInput = document.getElementById('introducedWords');
    const wordsList = document.querySelector('.wordsList ul');

    let players = [];
    let currentPlayerIndex = 0;
    let currentLetter = '';
    let timeLeft = 3;
    let timerInterval = null;
    let currentWords = [];

    function initGame(numPlayers) {
        players = Array.from({ length: numPlayers }, (_, i) => ({
            name: `${i + 1}`,
            background: generatePlayerColor(i, numPlayers),
            words: [],
            score: 0
        }));
        startTurn();
    }


    function generatePlayerColor(i, totalPlayers) {
        const hue = (360 / totalPlayers) * i;
        return `hsl(${hue}deg, 70%, 50%)`;
    }

    function startTurn() {
        currentLetter = generateRandomLetter();
        currentWords = [];
        updateUI();
        startTimer();
    }

    function generateRandomLetter() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }



    function startTimer() {
        timeLeft = 3;
        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}s`;

            if (timeLeft <= 0) {
                endTurn();
            }
        }, 1000);
    }

    function savePlayerWords() {
        players[currentPlayerIndex].words = [...currentWords];
        players[currentPlayerIndex].score += currentWords.length;
    }

    function showResults() {
        localStorage.setItem('playersData', JSON.stringify(players));
        window.location.href = 'winnerScreen.html';
    }

    function endTurn() {
        clearInterval(timerInterval);
        savePlayerWords();
        if (currentPlayerIndex === players.length - 1) {
            showResults();
        } else {
            nextPlayer();
        }
    }



    function validateWord(word) {
        const cleanWord = word.trim().toUpperCase();
        return (
            cleanWord !== '' &&
            cleanWord.startsWith(currentLetter) &&
            !currentWords.includes(cleanWord)
        );
    }

    wordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newWord = wordInput.value.toUpperCase();

        if (validateWord(newWord)) {
            currentWords.push(newWord);
            wordInput.value = '';
            updateWordList();
        }
    });

    function nextPlayer() {
        currentPlayerIndex++;
        startTurn();
    }

    function updateUI() {
        letterDisplay.textContent = currentLetter;
        playerDisplay.textContent = players[currentPlayerIndex].name;
        playerDisplay.style.background = players[currentPlayerIndex].background;
        playerDisplay.style.border = players[currentPlayerIndex].background;
        updateWordList();
    }

    function updateWordList() {
        wordsList.innerHTML = currentWords
            .map(word => `
                <li title="${word}"style="color: ${players[currentPlayerIndex].background}">
                ${word} </li>`)
            .join('');
    }


    const urlParams = new URLSearchParams(window.location.search);
    const numPlayers = parseInt(urlParams.get('players')) || 4;


    initGame(numPlayers);
});