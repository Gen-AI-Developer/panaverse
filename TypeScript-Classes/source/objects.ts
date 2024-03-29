let teacher: {
    name: string,
    experience: string,
} = {
    name: "Safdar Ali Shah",
    experience: "Python Programmer",
}
console.log(teacher.name)
console.log(teacher['experience'])

type Student = {
    name: string,
    experience: string
}

let s: Student = {
    name: 'Safdar',
    experience: 'Programming'
}

interface Manager {
    name: string,
    suboridinates: string,
}
