function testData(elements, isTrue = false) {
    for (let i = 0; i < elements.length; i++) {
        isTrue = elements[i].value !== '';
    }
    return isTrue
}

onkeydown = function ScanInput() {
    let elementsCollection = document.getElementsByTagName('input');
    let isEverythingFilled = false;
    isEverythingFilled = testData(elementsCollection, isEverythingFilled);
    if (isEverythingFilled) {
        const button_alert = document.createElement('input');
        button_alert.type = 'button';
        button_alert.value = 'Узнать имя (вдруг забыли) [Alert]'
        button_alert.id = 'nameButtonAlert'
        button_alert.addEventListener('click', findName, false)
        if (document.getElementById('nameButtonAlert') == null) {
            document.getElementById('content').appendChild(button_alert);
        }
        const button_write = document.createElement('input');
        button_write.type = 'button';
        button_write.value = 'Узнать имя (вдруг забыли) [Write]'
        button_write.id = 'nameButtonWrite'
        button_write.addEventListener('click', findNameWrite, false)
        if (document.getElementById('nameButtonWrite') == null) {
            document.getElementById('content').appendChild(button_write);
        }
        const list_page_button = document.createElement('input');
        list_page_button.type = 'button';
        list_page_button.value = 'Перейти на страничку со списком'
        list_page_button.id = 'listPageButton';
        list_page_button.addEventListener('click', goPage, false)
        if (document.getElementById('listPageButton') == null) {
            document.getElementById('content').appendChild(list_page_button);
        }
    }
}

function findName() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    window.alert('Напоминаю: Вас зовут ' + name + ' ' + surname + '.')
}

function findNameWrite() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    document.write('Напоминаю: Вас зовут ' + name + ' ' + surname + '.')
    const back_button = document.createElement('input');
    back_button.type = 'button';
    back_button.value = 'Вернуть всё, как было! Это же мой код!';
    back_button.id = 'back';
    back_button.style.display = 'block';
    back_button.addEventListener('click', codeRepair, false)
    if (document.getElementById('back') == null) {
        document.getElementsByTagName("body")[0].appendChild(back_button)
    }
}

function codeRepair() {
    document.body.innerHTML = '';
    document.getElementsByTagName('html')[0].innerHTML = "";
    document.open();
    document.write("<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <link rel=\"stylesheet\" href=\"styles/index.css\">\n" +
        "    <script src=\"scripts/inputCacheFix.js\"></script>\n" +
        "    <script src=\"inputScanner.js\"></script>\n" +
        "    <title>ЛР 1. Web</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"content-block\" id=\"content\">\n" +
        "    <form action=\"\">\n" +
        "        <input type=\"text\" placeholder=\"Введите сюда Ваше имя...\" size=\"30px\" id=\"name\">\n" +
        "        <input type=\"text\" placeholder=\"А здесь будет Ваша фамилия...\" size=\"30px\" id=\"surname\">\n" +
        "\n" +
        "        <!--    <input type=\"text\" onkeydown=\"this.style.width = ((this.value.length + 1) * 8) + 'px';\" placeholder=\"Введите сюда Ваше имя...\" size=\"30px\" id=\"name\">-->\n" +
        "        <!--    <input type=\"text\" onkeydown=\"this.style.width = ((this.value.length + 1) * 8) + 'px';\" placeholder=\"А здесь будет Ваша фамилия...\" size=\"30px\" id=\"surname\">-->\n" +
        "    </form>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>")
    document.close();
}

function goPage() {
    document.body.innerHTML = '';
    document.getElementsByTagName('html')[0].innerHTML = "";
    document.open();
    document.write("<!doctype html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
        "    <script src=\"scripts/inputListProcessing.js\"></script>\n" +
        "    <title>ЛР 1. Web</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<p>Небольшок список:</p>\n" +
        "<ul id=\"listed\">\n" +
        "  <li class=\"element-list\">Кофе</li>\n" +
        "  <li class=\"element-list\">Чай</li>\n" +
        "  <li class=\"element-list\">Молоко</li>\n" +
        "</ul>\n" +
        "<div class=\"control-block\" style=\"display: inline-block\">\n" +
        "    <form action=\"\">\n" +
        "        <input type=\"button\" value=\"Заменить\" onclick=\"change()\">\n" +
        "        <input type=\"text\" size='1rem' id=\"input_number\">\n" +
        "        <span>-й элемент списка на</span>\n" +
        "        <input type=\"text\" onkeydown=\"this.style.width = ((this.value.length + 1) * 8) + 'px';\" id=\"input_change\">\n" +
        "    </form>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>")
    document.close();
}