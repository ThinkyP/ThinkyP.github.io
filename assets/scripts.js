function loadHeader(headerPath = 'header.html') {
    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
}

function loadFooter(footerPath = 'footer.html') {
    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

// Example usage: this script is called within the HTML files
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
});