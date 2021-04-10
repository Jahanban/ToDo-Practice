document.querySelector('form').addEventListener('submit', handleSubmitForm)

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '') {
        addTodo(input.value);
        input.value = "";
    }
}