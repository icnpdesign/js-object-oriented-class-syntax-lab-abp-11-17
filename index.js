class BoardMember {
  constructor(name, email) {
    this.name = name;
    this.homeState = homeState;
    this.training = training
  }

  veto() {
    return "No, I must disagree";
  }
  
  approve() {
    return "You can do that!";
  }

  doCharity() {
    return "I like to help people.";
  }

  releasePressStatement() {
    return "You will see great things from Scuber.";
  }

  sayHi() {
    return `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`;
  }
}
 

class CEO extends BoardMember {
  hireEmployee(){
    return "Welcome aboard!";
  }
}


