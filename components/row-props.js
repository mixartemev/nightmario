customElements.define('row-props', class extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
                    <div class="row">
                        <span><slot name="propName"></slot></span>
                        <span><slot name="isBool"></slot></span>
                        <span><slot name="isNegative"></slot></span>
                        <input name="propRemove" type="button" value="-">
                    </div>
                `;
    }
});
