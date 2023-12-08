// Récupérer les éléments
const modal = document.getElementById('myModal');
const btnOpenModal = document.getElementById('openModal');
const spanClose = document.getElementsByClassName('close')[0];

// Ouvrir la modal lorsque l'utilisateur clique sur le bouton
btnOpenModal.onclick = function() {
    modal.style.display = 'block';
};

// Fermer la modal lorsque l'utilisateur clique sur la croix
spanClose.onclick = function() {
    modal.style.display = 'none';
};

// Fermer la modal lorsque l'utilisateur clique en dehors de la modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
