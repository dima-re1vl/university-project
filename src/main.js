let books = [
    {id: 1, name: 'HTML 5 для профессионалов', category: 'HTML', img: 'http://flibusta.site/ib/57/454957/c571757.jpg', link:'http://flibusta.site/b/571757/download'},
    {id: 2, name: 'HTML: Популярный самоучитель', category: 'HTML', img: 'http://flibusta.site/i/42/170142/cover.jpg', link:'http://flibusta.site/b/170142/fb2'},
    {id: 3, name: 'CSS для профи', category: 'CSS', img: 'http://flibusta.site/ib/23/554623/571756.jpg', link:'http://flibusta.site/b/571756/download'},
    {id: 1, name: 'HTML 5 для профессионалов', category: 'HTML', img: 'http://flibusta.site/ib/57/454957/c571757.jpg', link:'http://flibusta.site/b/571757/download'},
    {id: 2, name: 'HTML: Популярный самоучитель', category: 'HTML', img: 'http://flibusta.site/i/42/170142/cover.jpg', link:'http://flibusta.site/b/170142/fb2'},
    {id: 3, name: 'CSS для профи', category: 'CSS', img: 'http://flibusta.site/ib/23/554623/571756.jpg', link:'http://flibusta.site/b/571756/download'},
    {id: 1, name: 'HTML 5 для профессионалов', category: 'HTML', img: 'http://flibusta.site/ib/57/454957/c571757.jpg', link:'http://flibusta.site/b/571757/download'},
    {id: 2, name: 'HTML: Популярный самоучитель', category: 'HTML', img: 'http://flibusta.site/i/42/170142/cover.jpg', link:'http://flibusta.site/b/170142/fb2'},
    {id: 3, name: 'CSS для профи', category: 'CSS', img: 'http://flibusta.site/ib/23/554623/571756.jpg', link:'http://flibusta.site/b/571756/download'}
]

const toHTML = book => `
        <div class="col-md-3 book">
            <div class="card">
                <p class="book__category">${book.category}</p>
                <img class="card-img-top" style="height: 300px;" src="${book.img}" alt="${book.name}">
                <div class="card-body">
                  <h5 class="card-title">${book.name}</h5>
                  <a href="${book.link}" class="btn btn-primary" data-btn="price" data-id="${book.id}">Завантажити</a>
                </div>
              </div>
        </div>
        `

function render() {
    const html = books.map(toHTML).join('');
    document.querySelector('#books').innerHTML = html;
}

render();