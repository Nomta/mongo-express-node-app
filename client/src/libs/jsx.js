function jsx(tag, props, ...children) {
    if (typeof tag === "function") {
        return tag(props, children);
    }

    const element = document.createElement(tag);

    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.toLowerCase() === "classname") {
            name = "class";
        }
        element.setAttribute(name, value.toString());
    });

    children.forEach((child) => {
        appendChild(element, child);
    });

    return element;
}

function appendChild(parent, child) {
    if (Array.isArray(child))
        child.forEach((nestedChild) => appendChild(parent, nestedChild));
    else
        parent.appendChild(
            child.nodeType ? child : document.createTextNode(child)
        );
}

module.exports = jsx;
