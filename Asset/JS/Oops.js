// Spreading

// let obj1 = {
//     id: 101,
//     name: 'Het',
//     age: 17
// }
// copy
// let obj2 = {...obj1};
// console.log(obj2);

// merging 
// let obj3 = {
//     city: 'surat',
//     ...obj1,
//     age: 40
// }
// console.log(obj3);

// //destructuring
// let {id, name, age} = obj3;
// console.log(id, name, age);

// ***************************************************

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);

// document.getElementById("demo").innerHTML = myCar1.name + " " + myCar1.year + " " + myCar2.name + " " + myCar2.year;

// ***************************************************

//parent class

class student {
    id;
    name;

    constructor(i,n){
        this.id = i;
        this.name = n;
    }

    basic_info(){
        console.log('id: ' + this.id);
        console.log('Name: ' + this.name);
    }

}

class course extends student{
    course_name;

    constructor(i , n, cn){
        super(i,n); //pass value to parent
        this.course_name = cn;
    }

    course_details(){
        console.log('id: ' + this.id);
        console.log('name: ' + this.name);
        console.log('course: ' + this. course_name);
    }
}

let c1 = new course (101,'Het','JavaScript');
c1.course_details();