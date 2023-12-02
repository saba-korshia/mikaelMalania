// using this keyword in objects

let firstName = "Keti";

let person = {
    firstName: 'John',
    lastName: 'Doe',
    workedPlaces: [{ name: 'Google', years: 2, profession: 'developer' }, { name: 'Facebook', years: 3, profession: 'developer' }, { name: 'Amazon', years: 1, profession: 'DevOps' }],
    children: [{ name: 'Anna', age: 12 }, { name: 'George', age: 15 }],
    workYearsAsDeveloper: function() {
        let years = 0;
        this.workedPlaces.forEach(place => {
            if (place.profession === 'developer') {
                years += place.years;
            }
        })

        // this.workedPlaces.filter(workedPlace => workedPlace.profession === 'developer')

        return years;
    },
}

console.log(person.workYearsAsDeveloper());