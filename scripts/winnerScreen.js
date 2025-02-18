import { playerColors } from './playersColors.js';

document.addEventListener('DOMContentLoaded', () => {
    const playersData = JSON.parse(localStorage.getItem('playersData'));
    const sortedPlayers = playersData.sort((a, b) => b.score - a.score);
    const maxScore = sortedPlayers[0].score;
    const winners = sortedPlayers.filter(player => player.score === maxScore);
    const rankingList = document.querySelector('.ranking ul');
    const playersPoints = document.querySelector('.playersPoints ul');
    const playersPointsTable = document.querySelector('.playersPoints');
    const playersPointsWords = document.querySelector('.playersPoints span');
    const totalWords = document.querySelector('.playersPoints h2 span');

    rankingList.innerHTML = '';
    playersPoints.innerHTML = '';

    sortedPlayers.forEach((player, index) => {
        const isWinner = winners.includes(player);

        const rankItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = `${player.name}`;
        link.style.background = playerColors[index].backgroundColor;
        link.style.border = playerColors[index].border;
        link.style.color = playerColors[index].color;

        if (isWinner) {
            link.classList.add('winner');
        }
        link.addEventListener('click', () => {
            playersPoints.innerHTML = '';
            playersPointsWords.textContent = player.words.length;
            playersPointsTable.style.display = 'flex';
            playersPointsTable.style.background = playerColors[index].backgroundColor;
            playersPointsTable.style.border = playerColors[index].border;
            playersPointsTable.style.color = playerColors[index].color;

            player.words.forEach(word => {
                const wordItem = document.createElement('li');
                wordItem.textContent = `- ` + word.slice(0, 10);
                wordItem.style.display = 'block';
                playersPoints.appendChild(wordItem);
            });
        });

        rankItem.appendChild(link);
        rankingList.appendChild(rankItem);
    });

    const total = sortedPlayers.reduce((sum, player) => sum + player.score, 0);
    totalWords.textContent = total;
});