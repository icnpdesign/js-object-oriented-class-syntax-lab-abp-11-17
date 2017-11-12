class BoardMember {
  constructor(name, email) {
    this.name = name;
    this.homeState = homeState;
    this.training = training
  }
 
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
 
 
class CEO extends BoardMember {
  sayHello(){
    super.sayHello()
    console.log('hello')
  }
}
 
tom.sayHello()