var overlay = document.getElementById("overlay");
var openList = document.getElementById('open-list');
var closeList = document.getElementById('close-list');
var list = document.getElementById("list-of-false-accounts");
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
