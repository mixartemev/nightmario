let index = 0;
let props = [];
newRow.onsubmit = e => {
    e.preventDefault();
    props[index] = ({"name": this.objectName.value, "isBool": this.isBool.checked, "isNegative": this.isNegative.checked});
    e.target.reset();
    console.log(props);
    let rp = document.createElement('row-p', );
    document.getElementById('props').insertAdjacentHTML('beforebegin', '<row-p id="p-'+index+'"><i>'
        +props[index].name+'</i><i>'
        +(props[index].isNegative?'V':'')+'</i><i>'
        +(props[index].isBool?'V':'')+'</i></row-p>');
    index++;
};
