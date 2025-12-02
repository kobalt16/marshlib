// Массив книг библиотеки
const books = [
    {
        id: 1,
        title: "Алкоголь и человек",
        author: "Попов Л.Е.",
        category: "other",
        year: 2012,
        description: "Об алкоголе",
        format: "DOC",
        downloadUrl: "https://docs.google.com/document/d/10SvFZQg-s7mwzUtLGp8tHg57-LKMJ2sd/edit?usp=sharing&ouid=113850773003115433714&rtpof=true&sd=true"
    },
    {
        id: 2,
        title: "В защиту философии",
        author: "Корнфорт Морис",
        category: "scientific-socialism",
        year: 1951,
        description: "Программный документ коммунистического движения",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1_vMrkzBlyiG4bskisygNKvXyiseGpJju/view?usp=sharing"
    },
    {
        id: 3,
        title: "Программа по курсу 'Диалектический и исторический материализм'",
        author: " ",
        category: "scientific-socialism",
        year: 1950,
        description: "Марксистское учение о государстве",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1nu4K0hp3AiN-OipXemmn9PPQLo3tXCCj/view?usp=sharing"
    },
    {
        id: 4,
        title: "Учебный план политшкол и кружков по изучению истории ВКП(б)",
        author: " ",
        category: "philosophy",
        year: 1951,
        description: "Основные положения марксизма в философии",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/17O3ThIiEPF8o40x3O5HheQZin1BTBZ2U/view?usp=sharing"
    },
    {
        id: 5,
        title: "Сводный список книг, подлежащих исключению из библиотек и книготорговых сетей Часть II",
        author: " ",
        category: "political-economy",
        year: 1961,
        description: "Экономическое исследование России конца XIX века",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1gresZu17U2WXUCzmzbZKsG3kpKV7Q99p/view?usp=sharing"
    },
    {
        id: 6,
        title: "История медицины Том I",
        author: "Петров Б.Д.",
        category: "philosophy",
        year: 1954,
        description: "Диалектический материализм и естествознание",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/19HZ53MUxjujvDHvlFoOBBfXgLTjFJzHK/view?usp=sharing"
    },
    {
        id: 7,
        title: "О положении в биологической науке. Стенографический отчет сессии ВАСХНИЛ",
        author: " ",
        category: "scientific-socialism",
        year: 1948,
        description: "Вопросы строительства революционной партии",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1WuKNfEi6mvgwol04bR8EvxH9yf1xJJnx/view?usp=sharing"
    },
    {
        id: 8,
        title: "Слово как физиологический и лечебный фактор",
        author: "Платонов К.И.",
        category: "philosophy",
        year: 1957,
        description: "Исторический материализм",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1TZ-DyUgjB9G5vS6TAL6Nu-ZpP_5eNpvp/view?usp=sharing"
    },
    {
        id: 9,
        title: "Научная сессия посвященная проблемам физиологического учения академика И.П. Павлова",
        author: " ",
        category: "political-economy",
        year: 1950,
        description: "Исследование империализма",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1ZivqQo7pf_gbCuRqJmAG-G46cqcHGB6F/view?usp=sharing"
    },
    {
        id: 10,
        title: "Листовки петроградских большевиков 1917-1920",
        author: " ",
        category: "history",
        year: 1957,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1A1jrHiKbQ90MdKAp4s3KZzaVDAfBaZaT/view?usp=sharing"
    },
    {
        id: 11,
        title: "Кора головного мозга и внутренние органы",
        author: "Быков К.М.",
        category: "history",
        year: 1947,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1CblxS7Y3sBtFL3JbgG63V9VXm5YNgHWe/view?usp=sharing"
    },
    {
        id: 12,
        title: "Краткий философский словарь",
        author: "Розенталь М",
        category: "history",
        year: 1951,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1D5FrGPQ_U9U1RVMl34t47y4K0LP0VNZY/view?usp=sharing"
    },
    {
        id: 13,
        title: "Политическая экономия",
        author: "Островитянов К.В.",
        category: "history",
        year: 1954,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1YGoXUcozOjo475MEMyLkIpMNCfhgru7Q/view?usp=sharing"
    }
];

// DOM элементы
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('search');
const authorFilter = document.getElementById('authorFilter');
const sortBy = document.getElementById('sortBy');
const totalBooks = document.getElementById('totalBooks');
const foundBooks = document.getElementById('foundBooks');
const resetFiltersBtn = document.getElementById('resetFilters');
const downloadNotification = document.getElementById('downloadNotification');
const notificationText = document.getElementById('notificationText');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Показываем общее количество книг
    totalBooks.textContent = books.length;
    
    // Заполняем фильтр авторов
    populateAuthorFilter();
    
    // Отображаем все книги
    displayBooks(books);
    
    // Добавляем обработчики событий
    searchInput.addEventListener('input', filterAndSortBooks);
    authorFilter.addEventListener('change', filterAndSortBooks);
    sortBy.addEventListener('change', filterAndSortBooks);
    resetFiltersBtn.addEventListener('click', resetFilters);
});

// Заполнение фильтра авторами
function populateAuthorFilter() {
    // Получаем уникальных авторов
    const authors = [...new Set(books.map(book => book.author))];
    
    // Сортируем по алфавиту
    authors.sort((a, b) => a.localeCompare(b, 'ru'));
    
    // Добавляем в фильтр
    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorFilter.appendChild(option);
    });
}

// Функция скачивания книги
function downloadBook(book) {
    // Показываем уведомление
    notificationText.textContent = `Скачивание: ${book.title}`;
    downloadNotification.classList.add('show');
    
    // Создаем скрытую ссылку для скачивания
    const link = document.createElement('a');
    link.href = book.downloadUrl;
    link.download = `${book.title}.${book.format.toLowerCase()}`;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Кликаем по ссылке
    link.click();
    
    // Удаляем ссылку
    setTimeout(() => {
        document.body.removeChild(link);
    }, 100);
    
    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
        downloadNotification.classList.remove('show');
    }, 3000);
}

// Фильтрация и сортировка книг
function filterAndSortBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedAuthor = authorFilter.value;
    const sortOption = sortBy.value;
    
    // Фильтрация
    let filteredBooks = books.filter(book => {
        const matchesSearch = searchTerm === '' || 
                            book.title.toLowerCase().includes(searchTerm) || 
                            book.author.toLowerCase().includes(searchTerm);
        
        const matchesAuthor = selectedAuthor === 'all' || book.author === selectedAuthor;
        
        return matchesSearch && matchesAuthor;
    });
    
    // Сортировка
    filteredBooks = sortBooks(filteredBooks, sortOption);
    
    // Отображение
    displayBooks(filteredBooks);
    
    // Обновляем статистику
    foundBooks.textContent = filteredBooks.length;
}

// Сортировка книг
function sortBooks(booksArray, sortOption) {
    const sortedBooks = [...booksArray];
    
    switch(sortOption) {
        case 'title-asc':
            return sortedBooks.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
        
        case 'title-desc':
            return sortedBooks.sort((a, b) => b.title.localeCompare(a.title, 'ru'));
        
        case 'year-asc':
            return sortedBooks.sort((a, b) => a.year - b.year);
        
        case 'year-desc':
            return sortedBooks.sort((a, b) => b.year - a.year);
        
        case 'author-asc':
            return sortedBooks.sort((a, b) => a.author.localeCompare(b.author, 'ru'));
        
        default:
            return sortedBooks;
    }
}

// Отображение книг
function displayBooks(booksToDisplay) {
    booksGrid.innerHTML = '';
    
    if (booksToDisplay.length === 0) {
        booksGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Книги не найдены</p>
                <button onclick="resetFilters()" class="btn-reset">Сбросить фильтры</button>
            </div>
        `;
        return;
    }
    
    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-header">
                <h3 class="book-title">${book.title}</h3>
                <div class="book-author">
                    <i class="fas fa-user"></i>
                    <span>${book.author}</span>
                </div>
            </div>
            
            <div class="book-meta">
                <div class="book-year">
                    <i class="fas fa-calendar"></i>
                    <span>${book.year}</span>
                </div>
                <span class="book-format">${book.format}</span>
            </div>
            
            <div class="book-download">
                <button class="btn-download" onclick="downloadBook(${JSON.stringify(book).replace(/"/g, '&quot;')})">
                    <i class="fas fa-download"></i> Скачать
                </button>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
}

// Сброс фильтров
function resetFilters() {
    searchInput.value = '';
    authorFilter.value = 'all';
    sortBy.value = 'title-asc';
    filterAndSortBooks();
}

// Добавляем стили для "нет результатов"
const noResultsStyle = document.createElement('style');
noResultsStyle.textContent = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 50px 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.08);
    }
    
    .no-results i {
        font-size: 3rem;
        color: #ddd;
        margin-bottom: 20px;
    }
    
    .no-results p {
        color: #666;
        margin-bottom: 20px;
        font-size: 1.1rem;
    }
    
    .no-results .btn-reset {
        margin: 0 auto;
    }
`;
document.head.appendChild(noResultsStyle);