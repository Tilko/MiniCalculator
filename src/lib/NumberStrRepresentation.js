module.exports = function splitNumberForStringRepresentation(number) {
    console.log("lkmkklm:" + number)
    const absNum = Math.abs(number)
    const signum = Math.sign(number) === -1 ? "-" : "";

    const absNumStr = "" + absNum;

    // const [mantissa, exponent] = absNumStr.split("e");
    // exponent = Number(exponent)

    let [integralPart, fractionalPart] = absNumStr.split(".");
    fractionalPart = fractionalPart || 0

    return { signum, integralPart, fractionalPart }
}