class Car {
    modal;
    brand;
    color;
    constructor(modal, brand, color) {
        this.modal = modal;
        this.brand = brand
        this.color = color;
    }

    car_details() {
        console.log("Car Id :", this.modal);
        console.log("Brand :", this.brand);
        console.log("Color :", this.color);
    }
}

class CarInfo extends Car {
    price;
    constructor(modal, brand, color, price) {
        super(modal, brand, color);
        this.price = price;
    }
    car_info() {
        this.car_details();
        console.log("Price :" , this.price);
    }
}

let car_res = new CarInfo('GlA 450', 'Mercedes', 'Black', 11000000);
car_res.car_info();