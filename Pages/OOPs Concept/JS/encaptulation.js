// class Employee {
//     id;
//     name;
//     #salary;
//     #insentive;

//     // Intialize Property of class.
//     constructor(i, n, s) {
//         this.id = i;
//         this.name = n;
//         this.#salary = s;
//     }

//     // Setter and Getter Method.
    // set insentive(i) {
    //     this.#insentive = i;
    // }

    // get insentive() {
    //     console.log(this.#insentive);
    // }

//     #calculateBonus() {
//         let ans = this.#salary * 0.10;
//         console.log("Your Bonus is: ", ans);
//     }

//     getInfo() {
//         console.log("Id: ", this.id);
//         console.log("Name: ", this.name);
//         console.log("Salary: ", this.#salary);
//         this.#calculateBonus();
//         console.log("Your Insentive Is: ", this.#insentive);
//     }
// }

// let e1 = new Employee(101, 'Amit', 50000);

// e1.insentive = 25000;
// // console.log(e1.insentive); // 25000

// e1.getInfo()
// // console.log(e1.salary); // Error


class Student {
    id;
    name;
    #adhar_id;

    constructor(id, name, aadhar) {
        this.id = id;
        this.name = name;
        this.#adhar_id = aadhar;
    }
    getInfo() {
        console.log("Id: ", this.id);
        console.log("Name: ", this.name);
        console.log("Aadhar Number: ", this.#adhar_id);
    }

}

class Course extends Student {
    CourseName;
    #CourseFees;
    #Scholarship;

    constructor(id, name, aadhar,CourseName,CourseFees,Scholarship){
        super(id, name, aadhar)
        this.CourseName = CourseName;
        this.#CourseFees = CourseFees;
        this.#Scholarship = Scholarship;
    }

    set Scholarship(s) {
        this.#Scholarship = s;
    }

    get Scholarship() {
        console.log("Your Scholarship Is: ", this.#Scholarship);
    } 

    CourseInfo() {
        this.getInfo()
        console.log("Course Name Is: ", this.CourseName);
        console.log("Course Fees Is: ", this.#CourseFees);
        console.log("Scholarship Is: ", this.#Scholarship);
    }
}

let s1 = new Course(101, "Amit Patel", 850045217896, "Full Stack", 62500);
s1.Scholarship = 2500;
s1.CourseInfo()