// Wait until the page is loaded, then:
window.addEventListener("DOMContentLoaded", () => {
	portfoliotablesystem();
});

// Select all the buttons in the table on the portfolio page,
// Use the `name` of the button to select which element to show/hide by ID,
// Then change the innerHTML of the button to remember whether the button has been clicked
const portfoliotablesystem = () => {
    document.querySelectorAll('table tr td button').forEach((button) => {
        button.addEventListener('mousedown', () => {
            if (button.innerHTML === "▼") {
                const dropdown = document.getElementById(button.name);
                dropdown.style.display = "block";
                button.innerHTML = "▲"
            } else {
                const dropdown = document.getElementById(button.name);
                dropdown.style.display = "none";
                button.innerHTML = "▼"
            }
        });
    });
}