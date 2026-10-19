type DayOfWeek = 'пн' | 'вт' | 'ср' | 'чт' | 'пт'

type LessonType = 'lecture' | 'practice' | 'lab'

interface Teacher {
    id: number
    name: string
    subject: string
}

interface Lesson {
    id: number
    title: string 
    type: LessonType
    teacher: Teacher
    dayOfWeek: DayOfWeek
    startTime: string
    endTime: string
    room?: string | number
}

interface Schedule {
    groupName: string
    lessons: Lesson[]
}

const mathTeach: Teacher = {
    id: 101,
    name: 'Извините',
    subject: 'Математика' 
}

const fizTeach: Teacher = {
    id: 102,
    name: 'Извините2',
    subject: 'Физика' 
}

const les1: Lesson = {
    id: 1,
    title: 'Математика', 
    type: 'lecture',
    teacher: mathTeach,
    dayOfWeek: 'пн',
    startTime: '09:00',
    endTime: '10:30',
    room: 'ауд. 301'
}

const les2: Lesson = {
    id: 2,
    title: 'Физика', 
    type: 'practice',
    teacher: fizTeach,
    dayOfWeek: 'вт',
    startTime: '10:40',
    endTime: '12:10',
    room: 'ауд. 303'
}

const shch: Schedule = {
    groupName: 'uiaeuifgi123123',
    lessons: [les1, les2]
}

const getLessonsByDay = (schedule: Schedule, day: DayOfWeek): Lesson[] => {
    return schedule.lessons.filter(el => el.dayOfWeek === day)
}

const getLessonsByType = (schedule: Schedule, type: LessonType): Lesson[] => {
    return schedule.lessons.filter(el => el.type === type)
}

const getTeacherLessons = (schedule: Schedule, teacherId: number): Lesson[] => {
    return schedule.lessons.filter(el => el.teacher.id === teacherId)
}

const formatLesson = (lesson: Lesson): string => {
    return `${lesson.startTime}-${lesson.endTime} | ${lesson.title} (${lesson.type}) | ${lesson.room}`
}

const form = formatLesson(les1)

const mond = getLessonsByDay(shch, 'вт')

const pract = getLessonsByType(shch, 'lecture')

const teach = getTeacherLessons(shch, 102)

console.log(mond)

console.log(pract)

console.log(teach)

console.log(form)
