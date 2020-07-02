const calculateTextRect = require("./textMesureTool");

class TextAndScreenMatcher {
    /** 
     * textMaxWidth argument to match screenWidth
     * **/
    constructor(minFontSizeInPixel, textMaxWidth,
        otherCssTextLikeFamilyEtc, maxDigitNumber = -1) {
        this.minFontSizeInPixel = minFontSizeInPixel
        this.textMaxWidth = textMaxWidth
        this.otherCssTextLikeFamilyEtc = otherCssTextLikeFamilyEtc
        this.maxDigitNumber = maxDigitNumber
    }

    adaptTextAndFont(text, preferedFontSize) {
        text = this.maxDigitNumber === -1 ?
            text : text.substr(0, this.maxDigitNumber);

        const dims = calculateTextRect(text, preferedFontSize + "px", this.otherCssTextLikeFamilyEtc);
        const textWidth = dims.width;
        let rightFont = preferedFontSize;
        if (textWidth > this.textMaxWidth) {
            rightFont = preferedFontSize * this.textMaxWidth / textWidth;
        }
        if (rightFont < this.minFontSizeInPixel) {
            rightFont = this.minFontSizeInPixel;
        }
        rightFont = Math.trunc(rightFont);
        // console.log("recalc:" + calculateTextRect(text, "" + rightFont + "px").width)
        return { text, adaptedFont: rightFont };
    }
}

module.exports = TextAndScreenMatcher;