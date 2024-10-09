/**
 * Elements & variables
*/
const addInp = document.getElementById('addInput');
const addBtn = document.getElementById('addBtn');
const listEl = document.querySelector('ul.list');

let data = '{"text":"Finire esercizio","checked":false}';

// Button enable
const validateInput = () => {
    let value = addInp.value;
    console.log(value);

    if (value.length < 10 || value.length > 100) {
        addBtn.classList.add('disabled');
        addBtn.setAttribute('disabled', '');
    } else {
        addBtn.classList.remove('disabled');
        addBtn.removeAttribute('disabled');
    }
}

// Create list node
const createListNode = (text, checked = false) => {
    // <li class="listItem ?checked?">
    let item = document.createElement('li');
    (checked) ? item.classList.add("listItem", "checked") : item.classList.add("listItem");
    // <p>
    let a = document.createElement('a');
    a.setAttribute('href', 'javascript:void(0)');
    a.setAttribute('title', 'Segna come completato');
    a.classList.add('text');
    a.textContent = text;
    // <i class="material-icons edit-item">
    let iEdit = document.createElement('i');
    iEdit.classList.add("material-icons", "edit-item");
    iEdit.textContent = "mode_edit";
    // <i class="material-icons delete-item">
    let iDelete = document.createElement('i');
    iDelete.classList.add("material-icons", "delete-item");
    iDelete.textContent = "delete_forever";

    // Append childs
    item.append(a, iEdit, iDelete);

    // Append list item
    return listEl.appendChild(item);
}

// Add item
const addItem = () => {
    let text = addInp.value;
    let newList = createListNode(text);
    newList.addEventListener('click', checkItem);
    addInp.value = '';
}

// Check list item
const checkItem = (e) => {
    let item = e.target.parentNode;
    item.classList.toggle('checked');

    // Insert check mark
    if (item.classList.contains('checked')) {
        let mark = document.createElement('i');
        mark.classList.add("material-icons", "checkmark");
        mark.textContent = "check";
        let a = document.querySelector('a.text');
        item.insertBefore(mark, a);
    } else {
        let mark = document.querySelector('i.checkmark');
        item.removeChild(mark);
    }
}

/**
 * Funzioni da implementare:
 * - Modifica list item
 * - Eliminazione list item
 * - Salvataggio in JSON obj
*/

window.addEventListener('load', () => {
    validateInput();
    addInp.addEventListener('keyup', validateInput);
    addBtn.addEventListener('click', addItem);
})