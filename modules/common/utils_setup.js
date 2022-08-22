if (window.NodeList && !NodeList.prototype.filter) {
    NodeList.prototype.filter = Array.prototype.filter;
    NodeList.prototype.map = Array.prototype.map;
    NodeList.prototype.flatMap = Array.prototype.flatMap;
}

function log(msg) {
    console.log(msg)
}

function writeAsPoints(adjustedOptionPoints) {
    return `${adjustedOptionPoints > 0 ? "+" : ""}${adjustedOptionPoints}<sup>*</sup> point${(adjustedOptionPoints === 1 || adjustedOptionPoints === -1) ? "" : "s"}`
}