const draggable = document.getElementById('draggable');
const droppable = document.getElementById('droppable');

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', draggable.textContent);
});

droppable.addEventListener('dragover', (event) => {
    event.preventDefault();
});

droppable.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    droppable.textContent = data;
});
