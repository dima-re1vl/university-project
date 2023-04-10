let books = [
    {id: 1, name: 'HTML 5 для профессионалов', category: 'HTML', img: 'http://flibusta.site/ib/57/454957/c571757.jpg', link:'http://flibusta.site/b/571757/download'},
    {id: 2, name: 'HTML: Популярный самоучитель', category: 'HTML', img: 'http://flibusta.site/i/42/170142/cover.jpg', link:'http://flibusta.site/b/170142/fb2'},
    {id: 3, name: 'CSS для профи', category: 'CSS', img: 'http://flibusta.site/ib/23/554623/571756.jpg', link:'http://flibusta.site/b/571756/download'},
    {id: 4, name: 'CSS: полный справочник', category: 'CSS', img: 'http://flibusta.site/ib/88/522988/screenshot_at_oct_23_08-04-32.png', link:'http://flibusta.site/b/640212/download'},
    {id: 5, name: 'Javascript для чайников', category: 'JS', img: 'http://flibusta.site/ib/21/523021/screenshot_at_oct_23_19-20-00.png', link:'http://flibusta.site/b/640245/download'},
    {id: 6, name: 'JavaScript с нуля', category: 'JS', img: 'http://flibusta.site/i/87/696587/cover.jpg', link:'http://flibusta.site/b/696587/fb2'},
    {id: 1, name: 'HTML 5 для профессионалов', category: 'HTML', img: 'http://flibusta.site/ib/57/454957/c571757.jpg', link:'http://flibusta.site/b/571757/download'},
    {id: 2, name: 'HTML: Популярный самоучитель', category: 'HTML', img: 'http://flibusta.site/i/42/170142/cover.jpg', link:'http://flibusta.site/b/170142/fb2'},
    {id: 3, name: 'CSS для профи', category: 'CSS', img: 'http://flibusta.site/ib/23/554623/571756.jpg', link:'http://flibusta.site/b/571756/download'},
    {id: 4, name: 'CSS: полный справочник', category: 'CSS', img: 'http://flibusta.site/ib/88/522988/screenshot_at_oct_23_08-04-32.png', link:'http://flibusta.site/b/640212/download'},
    {id: 5, name: 'Javascript для чайников', category: 'JS', img: 'http://flibusta.site/ib/21/523021/screenshot_at_oct_23_19-20-00.png', link:'http://flibusta.site/b/640245/download'},
    {id: 6, name: 'JavaScript с нуля', category: 'JS', img: 'http://flibusta.site/i/87/696587/cover.jpg', link:'http://flibusta.site/b/696587/fb2'},
    {id: 1, name: 'HTML 5 для профессионалов', category: 'HTML', img: 'http://flibusta.site/ib/57/454957/c571757.jpg', link:'http://flibusta.site/b/571757/download'},
    {id: 2, name: 'HTML: Популярный самоучитель', category: 'HTML', img: 'http://flibusta.site/i/42/170142/cover.jpg', link:'http://flibusta.site/b/170142/fb2'},
    {id: 3, name: 'CSS для профи', category: 'CSS', img: 'http://flibusta.site/ib/23/554623/571756.jpg', link:'http://flibusta.site/b/571756/download'},
    {id: 4, name: 'CSS: полный справочник', category: 'CSS', img: 'http://flibusta.site/ib/88/522988/screenshot_at_oct_23_08-04-32.png', link:'http://flibusta.site/b/640212/download'},
    {id: 5, name: 'Javascript для чайников', category: 'JS', img: 'http://flibusta.site/ib/21/523021/screenshot_at_oct_23_19-20-00.png', link:'http://flibusta.site/b/640245/download'},
    {id: 6, name: 'JavaScript с нуля', category: 'JS', img: 'http://flibusta.site/i/87/696587/cover.jpg', link:'http://flibusta.site/b/696587/fb2'},
];

let category = ['HTML', 'CSS', 'JS'];

const toHTMLCategory = item => `
        <div class="col-md-3 category">
            <button type="button" class="main-btn btn-${item == 'HTML' ? 'html' : item == 'CSS' ? 'css' : 'js'}">${item == 'HTML' ? 'HTML' : item == 'CSS' ? 'CSS' : 'JS'}</button>
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
                <img class="card-img-top" style="height: 300px;" src="${book.img}" alt="${book.name}">
                <div class="card-body">
                  <h5 class="card-title">${book.name}</h5>
                  <a href="${book.link}" class="btn btn-primary" data-btn="price" data-id="${book.id}">Завантажити</a>
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
    const items = books.filter(book => book.category == button.textContent);
    renderBooks(items)
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