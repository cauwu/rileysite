window.addEventListener("DOMContentLoaded", () => {
	emailcopysystem();
});

const emailcopysystem = () => {
    document.querySelectorAll('#titlecontact').forEach((button) => {
        button.addEventListener('mousedown', () => {
            navigator.clipboard.writeText('riley@' + 'riley.com');
            showhidecopiednotif();
        });
    });
}

let timeout;
const showhidecopiednotif = () => {
    const notif = document.getElementById('emailcopiednotif');
    notif.innerHTML = "✉️ Copied!";
    clearTimeout(timeout);
    timeout = setTimeout(hidenotif, 3000);
}

const hidenotif = () => {
    document.getElementById('emailcopiednotif').innerHTML = "";
}