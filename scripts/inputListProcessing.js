function change() {
    let list = document.getElementById('listed')
    let list_elements = list.getElementsByTagName('li')

    for (let i = 0; i < list_elements.length; i++) {
        let number_list = document.getElementById('input_number');
        let change_list = document.getElementById('input_change');
        if (number_list.value !== '' && change_list.value !== '') {
            let temp = Number(number_list.value)
            if (temp === (i + 1)) {
                list_elements[i].innerHTML = change_list.value;
            }
        }

    }
}