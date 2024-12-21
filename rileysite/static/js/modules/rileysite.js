window.addEventListener("DOMContentLoaded", () => {
	cursorSystem();
})

const cursorSystem = () => {
    const cursorPos = document.getElementById('cursorpos');
    window.addEventListener("mousemove", (e) => {
        cursorPos.style.transform = `translate3d(${e.pageX}px, ${e.pageY}px, 0)`
    });
}
