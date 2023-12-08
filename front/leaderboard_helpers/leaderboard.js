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
                const leaderboardItem = document.createElement('tr');
                leaderboardItem.classList.add('leaderboard-item');
                leaderboard.appendChild(leaderboardItem);

                const usernameH2= document.createElement('h2');
                thUsername.innerText = user.username;
                leaderboard.appendChild(thUsername);

                const thMoney = document.createElement('h2');
                thMoney.innerText = user.totalMoney;
                leaderboard.appendChild(thMoney);

                const thTemperature= document.createElement('h2');
                thTemperature.innerText = user.temperature;
                leaderboard.appendChild(thTemperature);
            });
        });
}