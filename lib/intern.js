const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, getSchool,) {
        super(name, id, email)
        this.getSchool = getSchool

                    };

        // getName() {
        //     return this.name
        // };

        // getId() {
        //     return this.id 
        // };

        // getEmail() {
            
        //     return this.email

        // };

        getRole() {
            return 'Intern'
        }

        getTheSchool () {
            return this.getSchool
        }

};

module.exports = Intern;