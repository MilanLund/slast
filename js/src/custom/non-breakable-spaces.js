$(function () {
    var replaceText = function (node) {
        var current = node.nodeValue;
        var replaced = current.replace(/(\s\w)\s/g, "$1\xA0");
        node.nodeValue = replaced;
    }

    var traverse = function (node) {
        var children = node.childNodes;
        var childLen = children.length;
        for (var i = 0; i < childLen; i++) {
            var child = children.item(i);
            if (child.nodeType == 3) //or if(child instanceof Text)
                replaceText(child);
            else
                traverse(child);
        }
    }

    traverse(document.body);
}());