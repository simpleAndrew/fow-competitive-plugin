if (window.NodeList && !NodeList.prototype.filter) {
    NodeList.prototype.filter = Array.prototype.filter;
    NodeList.prototype.map = Array.prototype.map;
    NodeList.prototype.flatMap = Array.prototype.flatMap;
}