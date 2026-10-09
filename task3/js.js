class EventCard {
    #title
    #date
    #type
    #isBookmarked = false

    constructor(title, date, type) {
        this.#title = title
        this.#date = date
        this.#type = type 
        this.element = null
    }

    createTemplate() {
        return `
            <article class="event-card">
                <time class="event-card_date"></time>
                <h2 class="event-card_title"></h2>
                <p class="event-card_type">${this.types()}</p>
                <button class="event-card_show">Показать</button>
            </article>
        `
    }

    createElement() {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = this.createTemplate()
        this.element = wrapper.firstElementChild
        return this.element
    }

    types() {
        if (this.#type === 'lecture') {
            return 'лекция'
        } else if (this.#type === 'deadline') {
            return 'дедлайн'
        } else if (this.#type === 'meeting') {
            return 'встреча'
        } else {
            return this.#type
        }
    }

    addEventListeners() {
        const showBtn = this.element.querySelector('.event-card_show')
        const show1 = this.element.querySelector('.event-card_date')
        const show2 = this.element.querySelector('.event-card_title')
        const switchh = this.element.querySelector('.event-card_type')

        switchh.addEventListener('click', () => {
            if (this.#type === 'lecture') {
                this.#type = 'deadline'
            } else if (this.#type === 'deadline') {
                this.#type = 'meeting'
            } else if (this.#type === 'meeting') {
                this.#type = 'lecture'
            } else {
                this.#type = 'lecture'
            }
            switchh.textContent = this.types()
        })
        
        showBtn.addEventListener('click', () => {
            this.#isBookmarked = !this.#isBookmarked
            showBtn.textContent = this.#isBookmarked ? 'Скрыть' : 'Показать'
            show1.textContent = !this.#isBookmarked ? '' : this.#date
            show2.textContent = !this.#isBookmarked ? '' : this.#title
        })
    }

    render(container) {
        this.element = this.createElement()
        this.addEventListeners()
        container.appendChild(this.element)
    }
}

const newContainer = document.getElementById('event')

const card1 = new EventCard(
    'ljkhfdsglkfdsjgd',
    '981723498123',
    'lecture'
)

card1.render(newContainer)