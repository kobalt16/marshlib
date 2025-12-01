// Массив книг библиотеки
const books = [
    {
        id: 1,
        title: "Капитал",
        author: "Карл Маркс",
        category: "political-economy",
        year: "1867",
        description: "Фундаментальный труд по политической экономии, содержащий критический анализ капитализма.",
        downloadUrl: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing",
        pages: "832"
    },
    {
        id: 2,
        title: "Манифест Коммунистической партии",
        author: "Карл Маркс, Фридрих Энгельс",
        category: "scientific-socialism",
        year: "1848",
        description: "Программный документ коммунистического движения, излагающий основные идеи марксизма.",
        downloadUrl: "https://drive.google.com/file/d/1K2L3M4N5O6P7Q8R9S0T/view?usp=sharing",
        pages: "48"
    },
    {
        id: 3,
        title: "Государство и революция",
        author: "Владимир Ленин",
        category: "scientific-socialism",
        year: "1917",
        description: "Произведение, посвященное марксистскому учению о государстве и задачах пролетариата в революции.",
        downloadUrl: "https://drive.google.com/file/d/1U2V3W4X5Y6Z7A8B9C0D/view?usp=sharing",
        pages: "144"
    },
    {
        id: 4,
        title: "Анти-Дюринг",
        author: "Фридрих Энгельс",
        category: "philosophy",
        year: "1878",
        description: "Полемическое произведение, излагающее основные положения марксизма в философии, политической экономии и социализме.",
        downloadUrl: "https://drive.google.com/file/d/1E2F3G4H5I6J7K8L9M0N/view?usp=sharing",
        pages: "512"
    },
    {
        id: 5,
        title: "Развитие капитализма в России",
        author: "Владимир Ленин",
        category: "political-economy",
        year: "1899",
        description: "Экономическое исследование процессов развития капитализма в российской экономике конца XIX века.",
        downloadUrl: "https://drive.google.com/file/d/1O2P3Q4R5S6T7U8V9W0X/view?usp=sharing",
        pages: "672"
    },
    {
        id: 6,
        title: "Диалектика природы",
        author: "Фридрих Энгельс",
        category: "philosophy",
        year: "1883",
        description: "Собрание заметок по диалектическому материализму и философским вопросам естествознания.",
        downloadUrl: "https://drive.google.com/file/d/1Y2Z3A4B5C6D7E8F9G0H/view?usp=sharing",
        pages: "384"
    },
    {
        id: 7,
        title: "Что делать?",
        author: "Владимир Ленин",
        category: "scientific-socialism",
        year: "1902",
        description: "Работа о вопросах строительства революционной партии нового типа.",
        downloadUrl: "https://drive.google.com/file/d/1I2J3K4L5M6N7O8P9Q0R/view?usp=sharing",
        pages: "192"
    },
    {
        id: 8,
        title: "К вопросу о развитии монистического взгляда на историю",
        author: "Георгий Плеханов",
        category: "philosophy",
        year: "1895",
        description: "Одна из основных работ Плеханова, посвященная историческому материализму.",
        downloadUrl: "https://drive.google.com/file/d/1S2T3U4V5W6X7Y8Z9A0B/view?usp=sharing",
        pages: "256"
    },
    {
        id: 9,
        title: "Накопление капитала",
        author: "Роза Люксембург",
        category: "political-economy",
        year: "1913",
        description: "Экономический труд, исследующий империализм как высшую стадию капитализма.",
        downloadUrl: "https://drive.google.com/file/d/1C2D3E4F5G6H7I8J9K0L/view?usp=sharing",
        pages: "480"
    },
    {
        id: 10,
        title: "Классовая борьба во Франции с 1848 по 1850 г.",
        author: "Карл Маркс",
        category: "history",
        year: "1850",
        description: "Анализ революционных событий во Франции с точки зрения исторического материализма.",
        downloadUrl: "https://drive.google.com/file/d/1M2N3O4P5Q6R7S8T9U0V/view?usp=sharing",
        pages: "160"
    },
    {
        id: 11,
        title: "Собрание сочинений (том 1-50)",
        author: "Карл Маркс, Фридрих Энгельс",
        category: "collected-works",
        year: "1975-2005",
        description: "Полное собрание сочинений основоположников марксизма.",
        downloadUrl: "https://drive.google.com/drive/folders/1W2X3Y4Z5A6B7C8D9E0F",
        pages: "35000"
    },
    {
        id: 12,
        title: "Полное собрание сочинений (том 1-55)",
        author: "Владимир Ленин",
        category: "collected-works",
        year: "1967-1975",
        description: "Наиболее полное собрание сочинений В.И. Ленина.",
        downloadUrl: "https://drive.google.com/drive/folders/1V2W3X4Y5Z6A7B8C9D0E",
        pages: "42000"
    }
];

// DOM элементы
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');
const authorFilter = document.getElementById('authorFilter');
const booksCount = document.getElementById('booksCount');
const bookModal = document.getElementById('bookModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

// Отображение всех книг
function displayBooks(booksToDisplay) {
    booksGrid.innerHTML = '';
    
    booksToDisplay.forEach(book => {
        const categoryNames = {
            'political-economy': 'Политическая экономия',
            'philosophy': 'Философия',
            'scientific-socialism': 'Научный социализм',
            'history': 'История',
            'collected-works': 'Собрания сочинений'
        };
        
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        // Иконка в зависимости от категории
        let iconClass = 'fa-book';
        if (book.category === 'collected-works') iconClass = 'fa-books';
        if (book.category === 'philosophy') iconClass = 'fa-brain';
        if (book.category === 'history') iconClass = 'fa-landmark';
        
        bookCard.innerHTML = `
            <div class="book-cover">
                <i class="fas ${iconClass}"></i>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <span class="book-category">${categoryNames[book.category] || book.category}</span>
                <p class="book-description">${book.description.substring(0, 100)}...</p>
                <div class="book-actions">
                    <button class="btn btn-download" onclick="window.open('${book.downloadUrl}', '_blank')">
                        <i class="fas fa-download"></i> Скачать
                    </button>
                    <button class="btn btn-info" onclick="openBookModal(${book.id})">
                        <i class="fas fa-info-circle"></i> Подробнее
                    </button>
                </div>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
    
    booksCount.textContent = booksToDisplay.length;
}

// Фильтрация книг
function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedAuthor = authorFilter.value;
    
    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                              book.author.toLowerCase().includes(searchTerm) ||
                              book.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
        
        const matchesAuthor = selectedAuthor === 'all' || book.author.includes(selectedAuthor);
        
        return matchesSearch && matchesCategory && matchesAuthor;
    });
    
    displayBooks(filteredBooks);
}

// Открытие модального окна с информацией о книге
function openBookModal(bookId) {
    const book = books.find(b => b.id === bookId);
    
    if (!book) return;
    
    const categoryNames = {
        'political-economy': 'Политическая экономия',
        'philosophy': 'Философия',
        'scientific-socialism': 'Научный социализм',
        'history': 'История',
        'collected-works': 'Собрания сочинений'
    };
    
    modalBody.innerHTML = `
        <div class="modal-book-info">
            <h2>${book.title}</h2>
            <p class="author">${book.author}</p>
            <div class="details">
                <div class="detail-item"><strong>Год:</strong> ${book.year}</div>
                <div class="detail-item"><strong>Раздел:</strong> ${categoryNames[book.category] || book.category}</div>
                <div class="detail-item"><strong>Страниц:</strong> ${book.pages}</div>
            </div>
            <p class="description">${book.description}</p>
            <a href="${book.downloadUrl}" target="_blank" class="modal-download-btn">
                <i class="fas fa-download"></i> Скачать книгу с Google Drive
            </a>
        </div>
    `;
    
    bookModal.style.display = 'block';
}

// Закрытие модального окна
closeModal.onclick = function() {
    bookModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === bookModal) {
        bookModal.style.display = 'none';
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Заполняем фильтр авторов уникальными значениями
    const authors = [...new Set(books.map(book => {
        // Разделяем соавторов и берем первого для фильтра
        return book.author.split(',')[0].trim();
    }))];
    
    // Оставляем только уникальных авторов
    const uniqueAuthors = [...new Set(authors)];
    
    // Добавляем авторов в фильтр (кроме уже существующих)
    uniqueAuthors.forEach(author => {
        // Проверяем, есть ли уже такой автор в фильтре
        const existingOption = Array.from(authorFilter.options).find(opt => opt.value === author);
        if (!existingOption && author !== 'all') {
            const option = document.createElement('option');
            option.value = author;
            option.textContent = author;
            authorFilter.appendChild(option);
        }
    });
    
    // Показываем все книги при загрузке
    displayBooks(books);
    
    // Добавляем обработчики событий
    searchInput.addEventListener('input', filterBooks);
    categoryFilter.addEventListener('change', filterBooks);
    authorFilter.addEventListener('change', filterBooks);
});