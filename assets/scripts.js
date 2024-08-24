// This is a placeholder for your JavaScript. 
// You can add interactivity here if needed, such as toggling sections, fetching posts dynamically, etc.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully.');
});

// header.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});
