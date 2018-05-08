import Base from './base'

export default class If extends Base {
    constructor(opts) {
        super(opts)
        this.templater = opts.templater
    }
    bind() {
        this.templater.compile(this.node)
        var holderNode = document.createTextNode('')
        var parentNode = this.node.parentNode
        parentNode.insertBefore(holderNode, this.node)
        parentNode.removeChild(this.node)
        const cb = (val) => {
            if (val) {
                parentNode.insertBefore(this.node, holderNode)
            } else {
                parentNode.removeChild(this.node)
            }
        }
        super.bind(cb)
    }
}