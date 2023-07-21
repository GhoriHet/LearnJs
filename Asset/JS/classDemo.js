// class Building {
//     cost = 500;

//     // Intialize the class.
//     constructor(l, w) {
//         this.length = l;
//         this.width = w;
//     }

//     area() {
//         let ans = this.length * this.width;
//         console.log("Area Is : " + ans);
//         console.log("Cost Is : " + this.cost);
//     }
// }

// let b1 = new Building(100, 200);
// b1.area()

// let b2 = new Building(50, 40);
// b2.area();


// **********************************************************

// class companyEmployee {
//     id;
//     name;
//     salary = 10000;

//     constructor(i, n) {
//         this.id = i;
//         this.name = n;
//     }
//     basic_info() {
//         console.log("Name Is :" + this.name);
//         console.log("Id Is :" + this.id);
//     }
//     companySalary() {
//         let answer = this.salary  + (this.salary * 0.10)
//         console.log(("Salary Is: " + answer));
//     }
// }

// let s1 = new companyEmployee(101, 'Het')
// s1.companySalary();
// s1.basic_info()

// **********************************************************

// class car {
//     name;
//     company;
//     year;
//     price;

//     constructor(name, company) {
//         this.name = name;
//         this.company = company;
//     }

//     price_Info(y, p) {
//         this.year = y;
//         this.price = p;
//     }
//     Log_info() {
//         console.log("Car Name : " ,this.name);
//         console.log("Company Name : " ,this.company);
//         console.log("Year Is : " ,this.year);
//         console.log("Price Is : " ,this.price);
//     }
// }
// let c1 = new car("Harrier", "Tata");
// c1.price_Info(2014, 1100000);
// c1.Log_info();

// **********************************************************

class Computer {
    type;
    price;
    company;

    constructor(type, company) {
        this.type = type;
        this.company = company; 
    }

    configraturation(processor, ram , storage) {
        console.log("Processor :",processor);
        console.log("RAM :", ram);
        console.log("Storage :",storage);
    }
    basic_info(price) {
        this.price = price;
        console.log("Pc Type :", this.type);
        console.log("Company : ", this.company);
        console.log("Price :", this.price);
    }
}

let c1 = new Computer("Laptop", "HP");
c1.configraturation("i7", "8GB", "512GB")
c1.basic_info("45000");