// This is a placeholder for your JavaScript. 
// You can add interactivity here if needed, such as toggling sections, fetching posts dynamically, etc.

function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
});