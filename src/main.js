let books = [
    {id: 1, name: 'HTML 5 для профессионалов', category: 'HTML', link:'http://flibusta.site/b/571757/download'},
    {id: 2, name: 'HTML: Популярный самоучитель', category: 'HTML', link:'http://flibusta.site/b/170142/fb2'},
    {id: 3, name: 'Справочник HTML. Кратко, быстро, под рукой', category: 'HTML', link:'http://flibusta.site/b/678394/download'},
    {id: 4, name: 'HTML5 для веб-дизайнеров', category: 'HTML', link:'http://flibusta.site/b/346584/fb2'},
    {id: 5, name: 'CSS для профи', category: 'CSS', link:'http://flibusta.site/b/571756/download'},
    {id: 6, name: 'CSS: полный справочник', category: 'CSS', link:'http://flibusta.site/b/640212/download'},
    {id: 7, name: 'Bootstrap и CSS-препроцессор Sass. Самое необходимое', category: 'CSS', link:'http://flibusta.site/b/668034/download'},
    {id: 8, name: 'Новая большая книга CSS', category: 'CSS', link:'http://flibusta.site/b/450281/download'},
    {id: 9, name: 'Javascript для чайников', category: 'JS', link:'http://flibusta.site/b/640245/download'},
    {id: 10, name: 'JavaScript с нуля', category: 'JS', link:'http://flibusta.site/b/696587/fb2'},
    {id: 11, name: 'JavaScript сильные стороны', category: 'JS', link:'http://flibusta.site/b/567812/download'},
    {id: 12, name: 'JavaScript. Подробное руководство', category: 'JS', link:'http://flibusta.site/b/351495/download'},
];

let category = ['Усі', 'HTML', 'CSS', 'JS'];

const toHTMLCategory = item => `
        <div class="col-md-3 category">
            <button type="button" class="main-btn btn-${item == 'HTML' ? 'html' : item == 'CSS' ? 'css' : item == 'JS' ? 'js' : 'all'}">${item == 'HTML' ? 'HTML' : item == 'CSS' ? 'CSS' : item == 'JS' ? 'JS' : 'Усі Книги'}</button>
        </div>
`

function renderCategory() {
    const html = category.map(toHTMLCategory).join('');
    document.querySelector('#category').innerHTML = html;
}

renderCategory();


const toHTMLBook = book => `
        <div class="col-md-3 book">
            <div class="card">
                <h5 class="card-title book__category ${book.category == 'HTML' ? 'htmlbook' : book.category == 'CSS' ? 'cssbook' : 'jsbook'}">${book.category}</h5>
                <img class="card-img-top" style="height: 385px;" src="${book.img}" alt="${book.name}">
                <div class="card-body">
                  <h5 class="card-title">${book.name}</h5>
                  <a href="https://dima-re1vl.github.io/university-project/src/sprites/${book.id}.jpg" class="btn btn-primary" data-btn="price" data-id="${book.id}">Завантажити</a>
                </div>
              </div>
        </div>
        `

function renderBooks(items = books) {
    const html = items.map(toHTMLBook).join('');
    document.querySelector('#books').innerHTML = html;
}

if(!document.querySelector('.find__input')) {
  renderBooks();
}


const btn_category = document.querySelectorAll('#category button');
btn_category.forEach(function(button) {
    button.addEventListener('click', function() {
      if (button.textContent == 'Усі Книги') {
        renderBooks();
      }
      else {
        const items = books.filter(book => book.category == button.textContent);
        renderBooks(items)
      }

    });
});

if(document.querySelector('.find__input')) {
  const find_input = document.querySelector('.find__input');
  find_input.addEventListener('input', e => {
    const items = books.filter(book => book.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    if(e.target.value !== '') {
      renderBooks(items)
    }
    else {
      var container = document.getElementById('books');
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  })
}