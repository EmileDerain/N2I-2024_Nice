window.addEventListener('load', onPageLoad);

function onPageLoad() {
    fetch("http://localhost:3008/api/leaderboard")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        return response.json();
        })
        .then(data => {
            const leaderboard = document.getElementById("leaderboard");
            
            data.forEach(user => {
                const leaderboardItem = document.createElement('div');
                leaderboardItem.classList.add('leaderboard-item');
                leaderboard.appendChild(leaderboardItem);

                const usernameH2= document.createElement('h2');
                usernameH2.innerText = user.username;
                leaderboardItem.appendChild(usernameH2);

                const thMoneyH2 = document.createElement('h2');
                thMoneyH2.innerText = user.totalMoney;
                leaderboardItem.appendChild(thMoneyH2);

                const temperatureH2= document.createElement('h2');
                temperatureH2.innerText = user.temperature;
                leaderboardItem.appendChild(temperatureH2);
            });
        });
}