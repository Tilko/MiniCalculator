module.exports = function calculateTextRect(text, fontSizeCssText, otherCssTextLikeFamilyEtc) { //fontNumber, fontUnit) {
    const div = document.createElement("div");
    div.style.cssText = `
    font-size: ${fontSizeCssText};
    ${otherCssTextLikeFamilyEtc};
    position: absolute;
    height: auto; 
    width: auto; 
    white-space: nowrap; 
    visibility: hidden;
    `
    div.innerHTML = text;
    const body = document.body;
    var theFirstChild = body.firstChild;
    body.insertBefore(div, theFirstChild);
    const width = div.clientWidth;
    const height = div.clientHeight;
    body.removeChild(theFirstChild)
    return { width, height };
}