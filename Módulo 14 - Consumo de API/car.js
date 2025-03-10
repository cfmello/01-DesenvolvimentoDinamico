class Shape {
    constructor(name) {
    this.name = name;
    }
    
    getName() {
    return this.name;
    }
    }
    
    class Rectangle extends Shape {
    constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
    }
    
    getArea() {
    return this.width * this.height;
    }
    }
    
    const myRectangle = new Rectangle('Rectangle', 5, 10);
    console.log(myRectangle.getName());
    console.log(myRectangle.getArea());