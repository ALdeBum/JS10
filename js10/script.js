// Функция-конструктор HtmlElement
function HtmlElement(tagName, isSelfClosing) {
    this.tagName = tagName;
    this.isSelfClosing = isSelfClosing || false;
    this.textContent = '';
    this.attributes = [];
    this.styles = [];
    this.children = [];

    // Метод для установки атрибута
    this.setAttribute = function(name, value) {
        this.attributes.push({ name: name, value: value });
    };

    // Метод для установки стиля
    this.setStyle = function(property, value) {
        this.styles.push({ property: property, value: value });
    };

    // Метод для добавления вложенного элемента в конец текущего элемента
    this.appendChild = function(childElement) {
        this.children.push(childElement);
    };

    // Метод для добавления вложенного элемента в начало текущего элемента
    this.prependChild = function(childElement) {
        this.children.unshift(childElement);
    };

    // Метод для получения HTML-кода элемента и его дочерних элементов
    this.getHtml = function() {
        let html = `<${this.tagName}`;

        // Добавляем атрибуты
        this.attributes.forEach(attr => {
            html += ` ${attr.name}="${attr.value}"`;
        });

        // Добавляем стили
        if (this.styles.length > 0) {
            html += ` style="`;
            this.styles.forEach(style => {
                html += `${style.property}: ${style.value}; `;
            });
            html += `"`;
        }

        if (this.isSelfClosing) {
            html += ` />`;
        } else {
            html += `>`;

            // Добавляем текстовое содержимое
            html += this.textContent;

            // Добавляем вложенные элементы
            this.children.forEach(child => {
                html += child.getHtml();
            });

            html += `</${this.tagName}>`;
        }

        return html;
    };
}

// Создаем элементы, аналогичные вашему HTML-коду
let wrapper = new HtmlElement('div', false);
wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');

let div1 = new HtmlElement('div', false);
div1.setStyle('width', '300px');
div1.setStyle('margin', '10px');

let h3_1 = new HtmlElement('h3', false);
h3_1.textContent = 'What is Lorem Ipsum?';

let img_1 = new HtmlElement('img', true);
img_1.setAttribute('src', 'lipsum.jpg');
img_1.setAttribute('alt', 'Lorem Ipsum');
img_1.setStyle('width', '100%');

let p_1 = new HtmlElement('p', false);
p_1.setStyle('text-align', 'justify');
p_1.textContent = `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`;

let a_1 = new HtmlElement('a', false);
a_1.setAttribute('href', 'https://www.lipsum.com/');
a_1.setAttribute('target', '_blank');
a_1.textContent = 'More...';

p_1.appendChild(a_1);

div1.appendChild(h3_1);
div1.appendChild(img_1);
div1.appendChild(p_1);

let div2 = new HtmlElement('div', false);
div2.setStyle('width', '300px');
div2.setStyle('margin', '10px');

let h3_2 = new HtmlElement('h3', false);
h3_2.textContent = 'What is Lorem Ipsum?'; // Этот текст будет отображаться один раз

let img_2 = new HtmlElement('img', true);
img_2.setAttribute('src', 'lipsum.jpg');
img_2.setAttribute('alt', 'Lorem Ipsum');
img_2.setStyle('width', '100%');

let p_2 = new HtmlElement('p', false);
p_2.setStyle('text-align', 'justify');
p_2.textContent = `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`;

let a_2 = new HtmlElement('a', false);
a_2.setAttribute('href', 'https://www.lipsum.com/');
a_2.setAttribute('target', '_blank');
a_2.textContent = 'More...';

p_2.appendChild(a_2);

div2.appendChild(h3_2);
div2.appendChild(img_2);
div2.appendChild(p_2);

wrapper.appendChild(div1);
wrapper.appendChild(div2);

// Получаем HTML-код и выводим на страницу с помощью document.write()
let htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HtmlElement Project</title>
</head>
<body>
  ${wrapper.getHtml()}
  <script src="script.js"></script>
</body>
</html>`;

document.write(htmlCode);
