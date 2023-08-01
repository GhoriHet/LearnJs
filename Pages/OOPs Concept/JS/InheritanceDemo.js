// class Student {
//     id;
//     name;

//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }

//     basic_Info() {
//         console.log("Id : ", this.id);
//         console.log("Name : ", this.name);
//     }
// }

// class Course extends Student {
//     course_name;
//     duration;
//     fees;

//     constructor(id, name, course_name, duration, fees) {
//         super(id, name);

//         this.course_name = course_name;
//         this.duration = duration;
//         this.fees = fees;
//     }

//     cousre_Info() {
//         this.basic_Info();
//         console.log("Course Name : ", this.course_name);
//         console.log("Course Duration : ", this.duration);
//         console.log("Course Fees : ", this.fees);
//     }
// }

// let c1 = new Course(101, "Het", "JavaScript (OOPs)", "12 Months", 625000);
// c1.cousre_Info();


// ************************************************************************************

class Employee {
    id;
    name;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    basic_Info() {
        console.log("Id : ", this.id);
        console.log("Name : ", this.name);
    }
}

class Professional extends Employee {
    salary;
    work;
    bonus;

    constructor(id, name, salary, work, bonus) {
        super(id, name);

        this.salary = salary;
        this.work = work;
        this.bonus = bonus;
    }

    professional_Info() {
        this.basic_Info();
        console.log("Salary : ", this.salary);
        console.log("Work : ", this.work);
        console.log("Bonus : ", this.salary * 0.10);
    }
}

let e1 = new Professional(102, "Piyush", 45000, "Web Developer");
e1.professional_Info()