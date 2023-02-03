"use strict";
if (!window.WebHighlightInject) {
    window.WebHighlightInject = class {
        currTimeout = null;
        shouldCheck = false;
        initialize() {
            document.addEventListener("mouseup", (ev) => this.onMouseUp(ev));
        }
        onMouseUp(ev) {
            if (ev.button != 0) {
                return;
            }
            if (this.currTimeout) {
                window.clearTimeout(this.currTimeout);
            }
            this.currTimeout = window.setTimeout(() => {
                this.currTimeout = null;
                this.processSelection();
            }, 100);
        }
        processSelection() {
            const s = document.getSelection();
            if (!s?.toString()) {
                return;
            }
            const r = s.getRangeAt(0);
            const texts = [];
            let el = r.startContainer;
            while (el) {
                if (el.nodeName == "#text") {
                    if (el.textContent?.trim()) {
                        texts.push(el);
                    }
                    if (el == r.endContainer) {
                        break;
                    }
                }
                el = this.findNearestNextNode(el);
            }
            let isFirst = true;
            const lastTextEl = texts[texts.length - 1];
            for (let textEl of texts) {
                const isLast = textEl == lastTextEl;
                let textContent = textEl.textContent;
                if (!textContent) {
                    continue;
                }
                let startContent;
                let endContent;
                if (isFirst && isLast) {
                    startContent = textContent.substring(0, r.startOffset);
                    endContent = textContent.substring(r.endOffset);
                    textContent = textContent.substring(r.startOffset, r.endOffset);
                }
                else {
                    if (isFirst) {
                        startContent = textContent.substring(0, r.startOffset);
                        textContent = textContent.substring(r.startOffset);
                    }
                    if (isLast) {
                        endContent = textContent.substring(r.endOffset);
                        textContent = textContent.substring(0, r.endOffset);
                    }
                }
                const s = document.createElement("span");
                s.style.background = "rgba(0,0,0,.8)";
                const p = textEl.parentNode;
                if (isFirst) {
                    const offsetText = document.createTextNode(startContent);
                    p.insertBefore(offsetText, textEl);
                    isFirst = false;
                }
                p.insertBefore(s, textEl);
                s.appendChild(document.createTextNode(textContent));
                if (isLast) {
                    const offsetText = document.createTextNode(endContent);
                    p.insertBefore(offsetText, textEl);
                }
                textEl.remove();
            }
        }
        findNearestNextNode(el) {
            if (el.firstChild) {
                return el.firstChild;
            }
            else if (el.nextSibling) {
                return el.nextSibling;
            }
            else {
                let currParent = el.parentNode;
                if (!currParent) {
                    return null;
                }
                let currNextSib = currParent.nextSibling;
                while (!currNextSib) {
                    currParent = currParent.parentNode;
                    if (!currParent) {
                        return null;
                    }
                    currNextSib = currParent.nextSibling;
                    if (!currParent) {
                        break;
                    }
                }
                return currNextSib;
            }
        }
    };
    new window.WebHighlightInject().initialize();
}
else {
    console.log("Already injected");
}
