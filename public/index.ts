const overlay = document.getElementById("overlay");

const openList = document.getElementById('open-list');
const closeList = document.getElementById('close-list');

const selectVal: HTMLSelectElement = document.getElementById('bg-theme') as HTMLSelectElement;

const list = document.getElementById("list-of-false-accounts");

const root = document.documentElement;

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

if (selectVal) {
    selectVal.addEventListener('input', function () {
        let val = this.value

        if (val === 'light') {
            root.style.setProperty('--bg-def-color', 'rgb(202, 196, 226)');
            root.style.setProperty('--p-text-color', 'rgb(46, 46, 46)');
            root.style.setProperty('--def-footer-bg-color', 'rgb(141, 133, 187)');
            root.style.setProperty('--log-def-color', 'rgb(185, 162, 221)');
            root.style.setProperty('--txt-def-color', 'black');
        } else if (val === 'dark') {
            root.style.setProperty('--bg-def-color', 'rgb(13, 13, 13)');
            root.style.setProperty('--p-text-color', 'rgb(201, 201, 201)');
            root.style.setProperty('--def-footer-bg-color', 'rgb(32, 31, 34)');
            root.style.setProperty('--log-def-color', 'rgb(32, 31, 34)');
            root.style.setProperty('--txt-def-color', 'white');
        } else if (val === 'normal') {
            root.style.setProperty('--bg-def-color', 'rgb(40, 39, 44)');
            root.style.setProperty('--p-text-color', 'rgb(190, 190, 190)');
            root.style.setProperty('--def-footer-bg-color', 'rgb(20, 19, 26)');
            root.style.setProperty('--log-def-color', 'rgb(26, 24, 29)');
            root.style.setProperty('--txt-def-color', 'white');
        }
    })
}