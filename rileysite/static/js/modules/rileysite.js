// Wait until the page is loaded, then:
window.addEventListener("DOMContentLoaded", () => {
	emailcopysystem();
});

// Email is copied to clipboard in 2 pieces to make it more difficult for scrapers
const emailcopysystem = () => {
    document.querySelectorAll('#titlecontact').forEach((button) => {
        button.addEventListener('mousedown', () => {
            navigator.clipboard.writeText('riley@' + 'riley.com');
            showhidecopiednotif();
        });
    });
}

// Notification underneath the button. This should probably be a browser notif. Change later
let timeout;
const showhidecopiednotif = () => {
    const notif = document.getElementById('emailcopiednotif');
    notif.innerHTML = "✉️ Copied!";
    clearTimeout(timeout);
    timeout = setTimeout(hidenotif, 3000);
}

// This function is called when the timeout triggers
const hidenotif = () => {
    document.getElementById('emailcopiednotif').innerHTML = "";
}