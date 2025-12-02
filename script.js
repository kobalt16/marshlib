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
        author: "Розенталь М.М.",
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
    },
    {
        id: 14,
        title: "Учебник физиологии",
        author: "Быков К.М.",
        category: "history",
        year: 1955,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1tR-8MiXbel7PD_ED-_FWpbFLTfFZpK-U/view?usp=sharing"
    },
    {
        id: 15,
        title: "Антирелигиозный учебник",
        author: "Шейнман М.М.",
        category: "history",
        year: 1938,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1QPcx5jcxm60BERizd3yzAyEVrbOhFWVt/view?usp=sharing"
    },
    {
        id: 16,
        title: "Клиника и лечение наркомании",
        author: "Стрельчук",
        category: "history",
        year: 1956,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/10SsCAQTminV9TGDoVoOQg0xMJ7hC18-w/view?usp=sharing"
    },
    {
        id: 17,
        title: "Диалектический материализм",
        author: "Александров Г.Ф.",
        category: "history",
        year: 1954,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1zegxKBHzZr1xfpzktzxgRfIBHR-E09bs/view?usp=sharing"
    },
    {
        id: 18,
        title: "Исторический материализм",
        author: "Константинов Ф.В.",
        category: "history",
        year: 1954,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1wUdwph2uc3Nrws25h8EkzL_RLqCDVVu7/view?usp=sharing"
    },
    {
        id: 19,
        title: "Список книг, не подлежащих распрастранению в книготорговой сети",
        author: " ",
        category: "history",
        year: 1981,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1lYPmj-6YXEDqTMfIjVkwo4H8GHzRzJ98/view?usp=sharing"
    },
    {
        id: 20,
        title: "Половой вопрос",
        author: "Зеленин В.Ф.",
        category: "history",
        year: 1926,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/13bZBs_E6cojIFM5M_rSR3tzLQ-dlV6dz/view?usp=sharing"
    },
    {
        id: 21,
        title: "Дискуссия 1923 года",
        author: "Попов К.А.",
        category: "history",
        year: 1927,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1mGoIHl5jZPpi0Y8DqlXv2vbgnbGpZkhA/view?usp=sharing"
    },
    {
        id: 22,
        title: "Марксистский диалектический метод",
        author: "Розенталь М.М.",
        category: "history",
        year: 1952,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1L1nMyH0433J5ENN_Z1zbp37sfkoHu1Vc/view?usp=sharing"
    },
    {
        id: 23,
        title: "Логика",
        author: "Строгович М.С.",
        category: "history",
        year: 1949,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1AFPT1seXdZUVotZi3S-SBq6lkjm_8KHy/view?usp=sharing"
    },
    {
        id: 24,
        title: "Алкоголь и мозг",
        author: "Углов Ф.Г.",
        category: "history",
        year: 1983,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1uERPlHmjTDAuVwUvmLJgFgIqkJS4AeDy/view?usp=sharing"
    },
    {
        id: 25,
        title: "Краткий экономический словарь",
        author: "Козлов Г.А.",
        category: "history",
        year: 1958,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1_36W3Nm19XIHThfUelj7RNAXg5xsyq-F/view?usp=sharing"
    },
    {
        id: 26,
        title: "Материя и сознание",
        author: "Хасхачих Ф.И.",
        category: "history",
        year: 1952,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1JWOsVVOMo-l9e1mVtGlDrxkor74iOBPq/view?usp=sharing"
    },
    {
        id: 27,
        title: "Таинственные явления человеческой психики",
        author: "Васильев Л.Л.",
        category: "history",
        year: 1963,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1QCGv2Um-RxjTzPhCQRhi8_yTeWJFMeXo/view?usp=sharing"
    },
    {
        id: 28,
        title: "Политическая экономия",
        author: "Никитин П.",
        category: "history",
        year: 1959,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1dyJvsRXrHyQw1re2sMvnsi3KhCQa3pmT/view?usp=sharing"
    },
    {
        id: 29,
        title: "Логика (стенограммы лекций) выпуск 1",
        author: "Чудов А.А.",
        category: "history",
        year: 1947,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1B8UmVSSMexHVurywWuTSWy9vzmSK0YFQ/view?usp=sharing"
    },
    {
        id: 30,
        title: "Учение И.П. Павлова и философские вопросы психологии",
        author: " ",
        category: "history",
        year: 1952,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1fpaqej3iLUPMQ7I8T_FFD3vl3MC4Z-ur/view?usp=sharing"
    },
    {
        id: 31,
        title: "20 лет Советской власти",
        author: " ",
        category: "history",
        year: 1937,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1LbkwIr01zCkkQn9T7aviqNqZCjgrxp8Q/view?usp=sharing"
    },
    {
        id: 32,
        title: "Курс острых инфекционных болезней",
        author: "Ивашенцов Г.А.",
        category: "history",
        year: 1943,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1e-O4kT1k7JGnLIeMA6YEQDLnKjtOjI8F/view?usp=sharing"
    },
    {
        id: 33,
        title: "Боевые дружины большевиков",
        author: "Гуляев А",
        category: "history",
        year: 1935,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1X9JXJmxMDdbKmad08qxChN--zBkTTKyC/view?usp=sharing"
    },
    {
        id: 34,
        title: "Новое время",
        author: " ",
        category: "history",
        year: 1953,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/14xJJB5issCaSvbgRE-YQp0t0eEGF9Wwj/view?usp=sharing"
    },
    {
        id: 35,
        title: "Из плена иллюзий",
        author: "Углов Ф.Г.",
        category: "history",
        year: 1986,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1Cv3YKO1QZcapJSOFhbW1KqZPiRLJh3WY/view?usp=sharing"
    },
    {
        id: 36,
        title: "Партийная жизнь",
        author: " ",
        category: "history",
        year: 1947,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1mBN3DIoilK2CqTdwoO3LdvkisMObg8sY/view?usp=sharing"
    },
    {
        id: 37,
        title: "Марксизм и ревизионизм",
        author: "Ленин В.И.",
        category: "history",
        year: 1973,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1KkuGffC4u75sqv42NrpJ5eQGlXyjKE4l/view?usp=sharing"
    },
    {
        id: 38,
        title: "Три источника и три состовных части марксизма",
        author: "Ленин В.И.",
        category: "history",
        year: 1977,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1oVSyBMsMzH1KI7pNslf9P6K0bVitSx_x/view?usp=sharing"
    },
    {
        id: 39,
        title: "Лечебные свойства меда и пчелиного яда",
        author: "Иойриш Н.П.",
        category: "history",
        year: 19,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1fzBg5lcelGDnz7IfQ-tWiQn_roc2vNPQ/view?usp=sharing"
    },
    {
        id: 40,
        title: "",
        author: " ",
        category: "history",
        year: 19,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: ""
    },
    {
        id: 41,
        title: "Манифест коммунистической партии",
        author: "Маркс-Энгельс",
        category: "history",
        year: 1950,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1-eODAx1xuZDAs5_hmAiRfaybZDhtRVXc/view?usp=sharing"
    },
    {
        id: 42,
        title: "Стадийное развитие растений",
        author: "Лысенко Т.Д.",
        category: "history",
        year: 1952,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1fk8NkX1d-IsORZ4iC7oWhboaDW7rfynV/view?usp=sharing"
    },
    {
        id: 43,
        title: "Ломехузы",
        author: "Углов Ф.Г.",
        category: "history",
        year: 1991,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1jFLuB8TrUbebrrvR4V3G_UWYjDO9aYPk/view?usp=sharing"
    },
    {
        id: 44,
        title: "Памятка демобилизованным рядовым и сержантам Красной армии",
        author: " ",
        category: "history",
        year: 1946,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1iNAdtIOzWmYI1MmpJ5Nft9k4PA6ZLzED/view?usp=sharing"
    },
    {
        id: 45,
        title: "О положении в биологической науке",
        author: " ",
        category: "history",
        year: 1948,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1WuKNfEi6mvgwol04bR8EvxH9yf1xJJnx/view?usp=sharing"
    },
    {
        id: 46,
        title: "О жизни, старости и долголетии",
        author: "Лепешинская О.Б.",
        category: "history",
        year: 1953,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1aEDgNWgFRZq8HPxmhXvnbioLs_7u-loz/view?usp=sharing"
    },
    {
        id: 47,
        title: "Письмо курящей девушке",
        author: "Углов Ф.Г.",
        category: "history",
        year: 19,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1XSRYrlVeQSZa91N3hauwaYPc-LdyMaZY/view?usp=sharing"
    },
    {
        id: 48,
        title: "Программа и Устав ВКП(б)",
        author: " ",
        category: "history",
        year: 1930,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1ahdd8ZrrIcOwD98D0hKqy2sPyLrp2UdR/view?usp=sharing"
    },
    {
        id: 49,
        title: "Рефлексы головного мозга",
        author: "Сеченов И.М.",
        category: "history",
        year: 1961,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1NZPpE3rrCyPWhedqJt4wr9OlvQj_0Hx3/view?usp=sharing"
    },
    {
        id: 50,
        title: "Психологический анализ изменений личности при алкоголизме",
        author: "Братусь Б.С.",
        category: "history",
        year: 1974,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/11KKaEySXYePskdNfCIAiLI7l6eOAZokK/view?usp=sharing"
    },
    {
        id: 51,
        title: "Марксизм и национальный вопрос",
        author: "Сталин И.В.",
        category: "history",
        year: 1950,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1ObN04c2ZPt0q-DODoJTwpPlOo57R-PB-/view?usp=sharing"
    },
    {
        id: 52,
        title: "Четвертая промышленная революция",
        author: "Клаус Шваб",
        category: "history",
        year: 2016,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/14TUzpkP9Gc-p6uDn6GxhlVZnXnvFzdsd/view?usp=sharing"
    },
    {
        id: 53,
        title: "Вторая сигнальная система и её физиологические механизмы",
        author: " ",
        category: "history",
        year: 1969,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/13IP4-YsNs0UlMwKdVHUjgZohVWtdO8bO/view?usp=sharing"
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