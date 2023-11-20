function runDarkMode() {
    const style = document.styleSheets;

    if (style[1].disabled) {
        style[0].disabled = true;
        style[1].disabled = false;
    }
    else {
        style[0].disabled = false;
        style[1].disabled = true;
    }
}