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
            const tbody = document.getElementById("tbody");
            
            data.forEach(user => {
                const leaderboardItem = document.createElement('tr');
                leaderboardItem.classList.add('leaderboard-item');
                tbody.appendChild(tr);

                const thUsername = document.createElement('th');
                thUsername.innerText = user.username;
                tr.appendChild(thUsername);

                const thMoney = document.createElement('th');
                thMoney.innerText = user.totalMoney;
                tr.appendChild(thMoney);

                const thTemperature= document.createElement('th');
                thTemperature.innerText = user.temperature;
                tr.appendChild(thTemperature);
            });
        });
}