// номер 1

// class Book {
//     #title
//     #author
//     #year

//     constructor(title, author, year) {
//         this.title = title
//         this.author = author
//         this.year = year
//     }

//     get title() {
//         return this.#title[0].toUpperCase() + this.#title.slice(1)
//     }

//     set title(value) {
//         if (typeof value !== 'string' || value.trim().length < 2 ) {
//             throw new Error ('Название должно быть строкой длиной от 2 символов')
//         }
//         this.#title = value.trim().toLowerCase()
//     }

//     get author() {
//         return this.#author[0].toUpperCase() + this.#author.slice(1)
//     }

//     set author(value) {
//         if (typeof value !== 'string' || value.trim().length < 2 ) {
//             throw new Error ('Название должно быть строкой длиной от 2 символов')
//         }
//         this.#author = value.trim().toLowerCase()
//     }

//     get year() {
//         return this.#year
//     }

//     set year(value) {
//         if (!Number.isInteger(value) || value < 1000 || value > 2026) {
//             throw new Error ('Ошибка, йоу')
//         }
//         this.#year = value
//     }

//     get age() {
//         return `${2026 - this.year}`
//     }
// }

// const book = new Book('мастер и маргарита', 'Булгаков', 1967)

// console.log(book.title)
// console.log(book.age)

// book.year = 3000


//-----------------------------------------------------

// Номер 2

class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
}

class BookFactory {
    static create(genre, title, author, year) {
        let a = ''
        switch (genre) {
            case 'fiction':
                a = '[Худ. лит.] '
                break
            case 'science':
                a = '[Науч.] '
                break
            case 'children':
                a = '[Дет.] '
                break
            default:
                throw new Error(`Неизвестный жанр: ${genre}`)
        }
        const format = a + title[0].toUpperCase() + title.slice(1)
        return new Book(format, author, year)
    }
}

const book = BookFactory.create('science', 'Краткая история времени', 'Хокинг', 1988)
console.log(book.title)