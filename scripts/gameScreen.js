import { playerColors } from './playersColors.js';

document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.querySelector('.time');
    const timerDisplayWait = document.querySelector('.timeWait');
    const letterDisplay = document.getElementById('letter');
    const playerDisplay = document.querySelector('.player');
    const playerDisplayWait = document.querySelector('.playerWait');
    const wordForm = document.querySelector('form');
    const divWordInput = document.querySelector('.wordInput');
    const wordInput = document.getElementById('introducedWords');
    const wordsList = document.querySelector('.wordsList ul');
    const wordsListTable = document.querySelector('.wordsList');
    const divUiAwait = document.querySelector('.uiWait');
    const btnNextPlayer = document.querySelector('.nextPlayer');
    const labelInput = document.querySelector('.labelInput');
    


    let players = [];
    let currentPlayerIndex = 0;
    let currentLetter = '';
    let timerInterval = null;
    let currentWords = [];
    let timeLeft = 60;
    let timeWait = 3;

    function uiAwait() {
        timeWait = 3;
        playerDisplayWait.textContent = players[currentPlayerIndex].name;
        playerDisplayWait.style.background = playerColors[currentPlayerIndex].backgroundColor;
        playerDisplayWait.style.border = playerColors[currentPlayerIndex].border;
        playerDisplayWait.style.color = playerColors[currentPlayerIndex].color;
        timerInterval = setInterval(() => {
            timeWait--;
            timerDisplayWait.textContent = `${timeWait}s`;

            if (timeWait === 0) {
                clearInterval(timerInterval);
                divUiAwait.style.display = 'none';
                startTurn();
            }
        }, 1000);
    }

    function initGame(numPlayers) {
        players = Array.from({ length: numPlayers }, (_, i) => ({
            name: `${i + 1}`,
            colorClass: playerColors[i],
            words: [],
            score: 0
        }));
        uiAwait();
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
        timeLeft = 60;
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
        divWordInput.style.display = 'none';
        btnNextPlayer.style.display = 'flex';
        labelInput.style.display = 'none';
        savePlayerWords();

        if (currentPlayerIndex === players.length - 1) {
            showResults();
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

        if (currentPlayerIndex >= players.length) {
            currentPlayerIndex = 0;
        }

        btnNextPlayer.style.display = 'none';
        divWordInput.style.display = 'flex';
        labelInput.style.display = 'block';
        wordForm.reset();
        startTurn();
    }

    if (btnNextPlayer) {
        btnNextPlayer.addEventListener('click', nextPlayer);
    }

    function updateUI() {
        letterDisplay.textContent = currentLetter;
        playerDisplay.textContent = players[currentPlayerIndex].name;
        playerDisplay.style.background = playerColors[currentPlayerIndex].backgroundColor;
        playerDisplay.style.border = playerColors[currentPlayerIndex].border;
        playerDisplay.style.color = playerColors[currentPlayerIndex].color;
        updateWordList();
    }

    function updateWordList() {
        const lastThreeWords = currentWords.slice(-3);
        wordsList.innerHTML = lastThreeWords
            .map(word => `
                <li title="${word}">
                    ${word}
                </li>`
            ).join('');
        wordsListTable.style.background = playerColors[currentPlayerIndex].backgroundColor;
        wordsListTable.style.border = playerColors[currentPlayerIndex].border;
        wordsListTable.style.color = playerColors[currentPlayerIndex].color;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const numPlayers = parseInt(urlParams.get('players')) || 4;

    initGame(numPlayers);
});