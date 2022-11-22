let lastRenderTime = 0;

const main = (currentTime) => {
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;
}
window.requestAnimationFrame(main);