import config from "../../Config"
import DomFn from "../DomEvent"

export default class Detictive {
    static[config.actionPrefix + "model"](node, val) {
        this._update("model", node, val)
    }
    static[config.actionPrefix + "text"](node, text) {
        this._update("text", node, text)
    }
    static[config.actionPrefix + "html"](node, html) {
        this._update("html", node, html)
    }
    //:
    static bind(node, attrName, attrVal) {
        DomFn.bind(node, attrName, attrVal)
    }
    //@
    static addEvt(node, attrName, fn) {
        DomFn.addEvt(node, attrName, attrVal)
    }
    _update(detictive, node, val) {
        var cb = DomFn[detictive];
        cb(node, val);
        new Listener(cb);
    }
}