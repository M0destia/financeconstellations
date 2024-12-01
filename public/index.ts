const overlay = document.getElementById("overlay");

const openList = document.getElementById('open-list');
const closeList = document.getElementById('close-list');

const list = document.getElementById("list-of-false-accounts");

function handleOpenListClick() {
    if (list && overlay) {        
        list.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function handleCloseListClick() {
    if (list && overlay) {        
        list.style.display = 'none';
        overlay.style.display = 'none';
    }
}