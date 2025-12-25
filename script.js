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
        title: "Принципы коммунизма",
        author: "Энгельс Фридрих",
        category: "history",
        year: 19,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1nLPiRt4pkYKGt1rVrzDjfAvzs_NmyghJ/view?usp=sharing"
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
    },
    {
        id: 54,
        title: "Вопросы ленинизма",
        author: "Сталин И.В.",
        category: "history",
        year: 1953,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1Zrc98egzl6VnFC0HH6XqZZnKmbGwTxIN/view?usp=sharing"
    },
    {
        id: 55,
        title: "История ВКП(б) краткий курс",
        author: "Сталин И.В.",
        category: "history",
        year: 1953,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1-DC0s8wp2mHyjeDlC0d_kNKF7i5sBzVA/view?usp=sharing"
    },
    {
        id: 56,
        title: "Диалектика природы",
        author: "Энгельс Фридрих",
        category: "history",
        year: 1941,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1nqdSUwdNQqhRBMkPnu81kCNwrzYjN8_s/view?usp=sharing"
    },
    {
        id: 57,
        title: "О диалектическом и историческом материализме",
        author: "Сталин И.В.",
        category: "history",
        year: 1945,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1VvtjEf1ZcW1qMU7LOB-UVl9V-G3G0qS2/view?usp=sharing"
    },
    {
        id: 58,
        title: "Государство и революция",
        author: "Ленин В.И.",
        category: "history",
        year: 1953,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1TUk1GdNFx70d_p0tgGx7Mt2RrQ1ywPaB/view?usp=sharing"
    },
    {
        id: 59,
        title: "Империализм как высшая стадия капитализма",
        author: "Ленин В.И.",
        category: "history",
        year: 19,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1l13yLQ8stFukrlugJ3a6xECdm1ENEhCJ/view?usp=sharing"
    },
    {
        id: 60,
        title: "Марксизм и вопросы языкознания",
        author: "Сталин И.В.",
        category: "history",
        year: 1950,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/13Pr-mRi-EaZmOVwISOojIwBX7naXavW5/view?usp=sharing"
    },
    {
        id: 61,
        title: "Физиологические основы обучения и воспитания",
        author: "Мурский Л.И.",
        category: "history",
        year: 1972,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1KLH-nzSKjbtYOGuHT4lwnqhNEYxAoVFb/view?usp=sharing"
    },
    {
        id: 62,
        title: "Учебник анатомии и физиологии человека",
        author: "Кабанов А.Н.",
        category: "history",
        year: 1954,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/10uQZVoxWWHJ5J4bMmlSkUyYgKM-Px-Mb/view?usp=sharing"
    },
    {
        id: 63,
        title: "Тито - глава предателей",
        author: "Рено де Жувенель",
        category: "history",
        year: 1951,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1RanN_4iZdNnR0aYygbl8kUgfIfh6ZL8l/view?usp=sharing"
    },
    {
        id: 64,
        title: "Лекции по физиологии",
        author: "Павлов И.П.",
        category: "history",
        year: 1952,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1GUF_K9hSDyG-dIx-dfbgWFUIop_7P7Um/view?usp=sharing"
    },
    {
        id: 65,
        title: "Экономические проблемы социализма в СССР",
        author: "Сталин И.В.",
        category: "history",
        year: 1952,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/1t5Vyx1wq8l4EfJ4CIbyXzES2z3Z8uAKW/view?usp=sharing"
    },
    {
        id: 66,
        title: "О недостатках партийной работы и мерах ликвидации троцкистских и иных двурушников",
        author: "Сталин И.В.",
        category: "history",
        year: 1937,
        description: "Анализ революционных событий во Франции",
        format: "PDF",
        downloadUrl: "https://drive.google.com/file/d/14LfV8_jQuZjT7XCb0Ezpi1kuGS1NKdd1/view?usp=sharing"
    }

];

// Учебная программа
const studyProgram = {
    main: [
        {
            number: 1,
            title: "Манифест Коммунистической партии",
            authors: "Маркс",
            hours: 4,
            bookId: 41,
            format: "PDF"
        },
        {
            number: 2,
            title: "Три источника и три составных части марксизма + Марксизм и ревизионизм",
            authors: "Ленин",
            hours: 2,
            bookIds: [38, 37],
            format: "PDF"
        },
        {
            number: 3,
            title: "Учебник политической экономии 54 г + отдельные моменты учебника политэкономии 58 г и популярного учебника политэкономии Никитина 59 г",
            authors: "Островитянов К.В., Никитин П.",
            hours: "60-70",
            bookIds: [13, 28],
            format: "PDF"
        },
        {
            number: 4,
            title: "Краткий курс истории ВКП(б)",
            authors: "Комиссия ЦК ВКП(б)",
            hours: 30,
            bookId: 55,
            format: "PDF"
        },
        {
            number: "5а",
            title: "ДИАМАТ Александрова 54 г",
            authors: "Александров Г.Ф.",
            hours: "40-50",
            bookId: 17,
            format: "PDF"
        },
        {
            number: "5б",
            title: "Или ДИАМАТ М. Розенталь",
            authors: "Розенталь М.М.",
            hours: "30-40",
            bookId: 22,
            format: "PDF"
        },
        {
            number: 6,
            title: "Исторический материализм 54 г",
            authors: "Константинов Ф.В.",
            hours: "20-40",
            bookId: 18,
            format: "PDF"
        },
        {
            number: 7,
            title: "Принципы коммунизма",
            authors: "Энгельс",
            hours: "в процессе",
            bookId: 40,
            format: "PDF"
        },
        {
            number: 8,
            title: "Марксизм и национальный вопрос",
            authors: "Сталин",
            hours: "в процессе", 
            bookId: 51,
            format: "PDF"
        },
        {
            number: 9,
            title: "Марксизм и вопросы языкознания",
            authors: "Сталин",
            hours: "в процессе",
            bookId: 60,
            format: "PDF"
        },
        {
            number: 10,
            title: "Логика для ВУЗ 1949г",
            authors: "Строгович М.С.",
            hours: "в процессе",
            bookId: 23,
            format: "PDF"
        },
        {
            number: 11,
            title: "Анатомия и физиология человека. Учебник 8 кл средней школы: Кабанова 53 г",
            authors: "Кабанова",
            hours: "в процессе",
            bookId: 62,
            format: "PDF"
        }
    ],
    
    selfStudy: [
        {
            number: 1,
            title: "Вопросы ленинизма",
            authors: "Сталин",
            hours: "во 2-м году",
            bookId: 54,
            format: "PDF"
        },
        {
            number: 2,
            title: "История медицины. 1954 г изд под ред Петрова",
            authors: "Петров Б.Д.",
            hours: "20-30",
            bookId: 6,
            format: "PDF"
        },
        {
            number: 3,
            title: "Дискуссия 23 г изд 1924г",
            authors: "Попов К.А.",
            hours: "во 2-м году",
            bookId: 21,
            format: "PDF"
        },
        {
            number: 4,
            title: "О недостатках партийной работы и мерах ликвидации троцкистских и иных двурушников. 1937 г.",
            authors: "Сталин",
            hours: "4-5",
            bookId: 66,
            format: "PDF"
        },
        {
            number: "5а",
            title: "Лекции по физиологии 1952г Павлов И.П.",
            authors: "Павлов И.П.",
            hours: 40,
            bookId: 64,
            format: "PDF"
        },
        {
            number: "5б",
            title: "или учебник физиологии 1955 г Быков К.М.",
            authors: "Быков К.М.",
            hours: 40,
            bookId: 14,
            format: "PDF"
        },
        {
            number: 6,
            title: "Государство и революция. Империализм, как высшая стадия капитализма",
            authors: "Ленин",
            hours: "во 2-м году",
            bookIds: [58, 59],
            format: "PDF"
        },
        {
            number: 7,
            title: "Теория стадийного развития",
            authors: "Лысенко Т.Д.",
            hours: "8-12",
            bookId: 42,
            format: "PDF"
        },
        {
            number: 8,
            title: "Четвертая промышленная революция (Для проверки полученных знаний)",
            authors: "Клаус Шваб",
            hours: "12-14",
            bookId: 52,
            format: "PDF"
        },
        {
            number: 9,
            title: "Экономические проблемы социализма в СССР",
            authors: "Сталин",
            hours: "10-12",
            bookId: 65,
            format: "PDF"
        },
        {
            number: 10,
            title: "Диалектика природы",
            authors: "Энгельс",
            hours: "во 2-м году",
            bookId: 56,
            format: "PDF"
        }
    ]
};

// DOM элементы
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('search');
const titleFilter = document.getElementById('titleFilter');
const authorFilter = document.getElementById('authorFilter');
const sortBy = document.getElementById('sortBy');
const totalBooks = document.getElementById('totalBooks');
const foundBooks = document.getElementById('foundBooks');
const resetFiltersBtn = document.getElementById('resetFilters');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Показываем общее количество книг
    totalBooks.textContent = books.length;
    
    // Заполняем фильтры
    populateAuthorFilter();
    populateTitleFilter();
    
    // Отображаем все книги
    displayBooks(books);
    
    // Инициализируем учебную программу
    initStudyProgram();
    
    // Инициализируем переключение вкладок
    initTabs();
    
    // Добавляем обработчики событий
    searchInput.addEventListener('input', filterAndSortBooks);
    titleFilter.addEventListener('change', filterAndSortBooks);
    authorFilter.addEventListener('change', filterAndSortBooks);
    sortBy.addEventListener('change', filterAndSortBooks);
    resetFiltersBtn.addEventListener('click', resetFilters);
});

// Заполнение фильтра названиями
function populateTitleFilter() {
    // Получаем уникальные названия (исключаем пустые и дубликаты)
    const titles = [...new Set(books
        .map(book => book.title ? book.title.trim() : "")
        .filter(title => title !== "")
    )];
    
    // Сортируем по алфавиту
    titles.sort((a, b) => a.localeCompare(b, 'ru'));
    
    // Добавляем в фильтр
    titles.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        
        // Обрезаем слишком длинные названия
        const displayTitle = title.length > 50 ? title.substring(0, 50) + '...' : title;
        option.textContent = displayTitle;
        titleFilter.appendChild(option);
    });
}

// Заполнение фильтра авторами
function populateAuthorFilter() {
    // Получаем уникальных авторов (исключаем пустые строки)
    const authors = [...new Set(books
        .map(book => book.author.trim())
        .filter(author => author !== "" && author !== " ")
    )];
    
    // Сортируем по алфавиту
    authors.sort((a, b) => a.localeCompare(b, 'ru'));
    
    // Добавляем в фильтр
    authors.forEach(author => {
        const option = document.createElement('option');
        option.value = author;
        option.textContent = author;
        authorFilter.appendChild(option);
    });
    
    // Добавляем опцию "Автор не указан" если есть такие книги
    const hasEmptyAuthors = books.some(book => !book.author || book.author.trim() === "");
    if (hasEmptyAuthors) {
        const emptyOption = document.createElement('option');
        emptyOption.value = "not-specified";
        emptyOption.textContent = "Автор не указан";
        authorFilter.appendChild(emptyOption);
    }
}

// Функция открытия книги в новой вкладке
function openBook(book) {
    if (book.downloadUrl && book.downloadUrl.trim() !== "") {
        window.open(book.downloadUrl, '_blank');
    }
}

// Создание карточки книги
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    // Проверяем, указан ли автор
    const authorName = book.author && book.author.trim() !== "" ? book.author : "Автор не указан";
    const authorClass = book.author && book.author.trim() !== "" ? "" : "author-not-specified";
    
    bookCard.innerHTML = `
        <div class="book-header">
            <h3 class="book-title">${book.title || "Без названия"}</h3>
            <div class="book-author ${authorClass}">
                <i class="fas fa-user"></i>
                <span>${authorName}</span>
            </div>
        </div>
        
        <div class="book-meta">
            <div class="book-year">
                <i class="fas fa-calendar"></i>
                <span>${book.year || "Год не указан"}</span>
            </div>
            <span class="book-format">${book.format || "Формат не указан"}</span>
        </div>
        
        <div class="book-download">
            <button class="btn-download" onclick="openBook(${JSON.stringify(book).replace(/"/g, '&quot;')})" ${!book.downloadUrl || book.downloadUrl.trim() === "" ? 'disabled' : ''}>
                <i class="fas fa-download"></i> ${book.downloadUrl && book.downloadUrl.trim() !== "" ? 'Открыть' : 'Недоступно'}
            </button>
        </div>
    `;
    
    return bookCard;
}

// Фильтрация и сортировка книг
function filterAndSortBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedTitle = titleFilter.value;
    const selectedAuthor = authorFilter.value;
    const sortOption = sortBy.value;
    
    // Фильтрация
    let filteredBooks = books.filter(book => {
        const matchesSearch = searchTerm === '' || 
                            (book.title && book.title.toLowerCase().includes(searchTerm)) || 
                            (book.author && book.author.toLowerCase().includes(searchTerm));
        
        const matchesTitle = selectedTitle === 'all' || book.title === selectedTitle;
        
        // Обновляем проверку для опции "Автор не указан"
        const matchesAuthor = selectedAuthor === 'all' || 
                             (selectedAuthor === 'not-specified' && (!book.author || book.author.trim() === "")) ||
                             book.author === selectedAuthor;
        
        return matchesSearch && matchesTitle && matchesAuthor;
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
            return sortedBooks.sort((a, b) => (a.title || "").localeCompare(b.title || "", 'ru'));
        
        case 'title-desc':
            return sortedBooks.sort((a, b) => (b.title || "").localeCompare(a.title || "", 'ru'));
        
        case 'year-asc':
            return sortedBooks.sort((a, b) => (a.year || 0) - (b.year || 0));
        
        case 'year-desc':
            return sortedBooks.sort((a, b) => (b.year || 0) - (a.year || 0));
        
        case 'author-asc':
            return sortedBooks.sort((a, b) => (a.author || "").localeCompare(b.author || "", 'ru'));
        
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
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

// Сброс фильтров
function resetFilters() {
    searchInput.value = '';
    titleFilter.value = 'all';
    authorFilter.value = 'all';
    sortBy.value = 'title-asc';
    filterAndSortBooks();
}

// Инициализация вкладок
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок и контента
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            btn.classList.add('active');
            
            // Показываем соответствующий контент
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Инициализация учебной программы
function initStudyProgram() {
    // Основная программа
    const mainProgramList = document.getElementById('mainProgram');
    studyProgram.main.forEach(item => {
        mainProgramList.appendChild(createProgramItem(item));
    });
    
    // Самостоятельное изучение
    const selfStudyList = document.getElementById('selfStudyProgram');
    studyProgram.selfStudy.forEach(item => {
        selfStudyList.appendChild(createProgramItem(item));
    });
}

// Создание элемента программы
function createProgramItem(item) {
    const div = document.createElement('div');
    div.className = 'program-item';
    
    // Проверяем, есть ли книга в библиотеке
    let downloadButtons = '';
    
    if (item.bookId) {
        const book = books.find(b => b.id === item.bookId);
        if (book && book.downloadUrl && book.downloadUrl.trim() !== "") {
            downloadButtons = `
                <button class="program-download-btn" onclick="openBook(${JSON.stringify(book).replace(/"/g, '&quot;')})">
                    <i class="fas fa-download"></i> Открыть
                </button>
            `;
        }
    } else if (item.bookIds) {
        // Для нескольких книг
        downloadButtons = item.bookIds.map(bookId => {
            if (!bookId) return '';
            const book = books.find(b => b.id === bookId);
            if (book && book.downloadUrl && book.downloadUrl.trim() !== "") {
                return `
                    <button class="program-download-btn" onclick="openBook(${JSON.stringify(book).replace(/"/g, '&quot;')})">
                        <i class="fas fa-download"></i> ${book.title.split(' ')[0] || 'Открыть'}
                    </button>
                `;
            }
            return '';
        }).join('');
    }
    
    div.innerHTML = `
        <div class="program-info">
            <div>
                <span class="program-number">${item.number}</span>
                <span class="program-title">${item.title}</span>
            </div>
            <div class="program-authors">${item.authors}</div>
            <div class="program-details">
                <span class="program-detail">
                    <i class="fas fa-clock"></i> ${item.hours} час.
                </span>
                <span class="program-detail">
                    <i class="fas fa-file"></i> ${item.format}
                </span>
            </div>
        </div>
        <div class="program-actions">
            ${downloadButtons || '<span class="no-book">Книга будет добавлена позже</span>'}
        </div>
    `;
    
    return div;
}