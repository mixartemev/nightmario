class ButtonFix extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => {
            alert("Fix")
        });
    }
}
customElements.define('button-fix', ButtonFix, {extends: 'button'});
