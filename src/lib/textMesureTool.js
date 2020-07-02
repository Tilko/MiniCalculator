module.exports = function calculateTextRect(text, fontSizeCssText, otherCssTextLikeFamilyEtc) { //fontNumber, fontUnit) {
    const div = document.createElement("div"); //${fontNumber}${fontUnit};
    div.style.cssText = `
    font-size: ${fontSizeCssText};
    ${otherCssTextLikeFamilyEtc};
    position: absolute;
    height: auto; 
    width: auto; 
    white-space: nowrap; 
    visibility: hidden;
    `
        //visibility: hidden;
    div.innerHTML = text;

    var theFirstChild = document.body.firstChild;
    document.body.insertBefore(div, theFirstChild);

    return { width: div.clientWidth, height: div.clientHeight };
}