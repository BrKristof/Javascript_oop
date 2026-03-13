class View{
    /**
     * @type {}
     */
    #manager

    /**
     * @type {HTMLDivElement}
     */
    #container

    constructor(manager){
        this.#manager = manager
        this.#container = document.createElement('div')
    }

    /**
     * 
     * @param {HTMLElement} parent
     * @returns {void} 
     */
    appendTo(parent){
        this.#container.appendChild(parent)
    }
}