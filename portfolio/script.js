function darkModeToggle() {
    var body = document.body;
    var button = document.getElementById('dark-mode-toggle');

    // Toggle dark mode
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        button.innerHTML = 'Dark Mode';
    } else {
        body.classList.add('dark-mode');
        button.innerHTML = 'Light Mode';
    }
}

// Attach click event listener to dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', darkModeToggle);




