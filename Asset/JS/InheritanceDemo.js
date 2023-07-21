//parent class

class student {
    id;
    name;

    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    basic_info(){
        console.log('id: ' + this.id);
        console.log('Name: ' + this.name);
    }

}

//child class

class course extends student{

    course_name;

    constructor(id , name, course_name){
        super(id,name); //pass value to parent
        this.course_name = course_name;

    }

    course_details(){
        console.log('Id: ' + this.id);
        console.log('Name: ' + this.name);
        console.log('Course: ' + this. course_name);
    }
}

let c1 = new course (101,'Het','JavaScript');
c1.course_details();
// c1.basic_info();