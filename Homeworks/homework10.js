/*       1. Create an Author class and a Book class.      */

class Author {
  constructor(name, gender) {
    this.name = name;
    this.email = `${this.name}@gmail.com`;
    this.gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    return (this._name = value);
  }
  get email() {
    return this._email;
  }
  set email(value) {
    return (this._email = value);
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    if (value !== "female" || value !== "male") {
      value = "gender is not assign";
    }
    return (this._gender = value);
  }
  toString() {
    return `Author is ${this._name}, email address: ${this._email} and gender is ${this._gender}`;
  }
}
const authorMark = new Author("Mark", "Mark@gmail.com", "male");
authorMark.toString();

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
  get title() {
    return this._title;
  }
  set title(str) {
    return (this._title = str);
  }
  get author() {
    return this._author;
  }
  set author(value) {
    return (this._author = value);
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      value = 5000;
    }
    return (this._price = value);
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (value <= 0 || value > 1000) {
      value = 100;
    }
    return (this._quantity = value);
  }
  getProfit() {
    return this._price * this._quantity;
  }
  toString() {
    return `This book author is ${this._author}, price is ${this._price}AMD and was pushlished ${this._quantity} example`;
  }
}
const myBook = new Book("My Book", "Hasmik", 4000, 1200);
myBook.toString();
myBook.getProfit();

/*       2. Create an Account class. Account should have: id, name, balance.     */

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this._id = `${Math.trunc(Math.random() * 10000)}`;
    //this._id = "2525";
  }
  get name() {
    return this._name;
  }
  set name(value) {
    return (this._name = value);
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (typeof value !== "number") {
      value = 0;
    }
    return (this._balance = value);
  }
  get id() {
    return this._id;
  }
  credit(amount) {
    return (this.balance += amount);
  }
  debit(amount) {
    if (amount > this.balance) {
      return `Amount exceeded balance`;
    } else {
      this.balance -= amount;
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount > this.balance) {
      return `Amount exceeded balance`;
    } else {
      this.balance -= amount;

      return (anotherAccount.balance += amount);
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    for (let prop in accountFirst) {
      if (accountFirst[prop] !== accountSecond[prop]) {
        return false;
      }
    }
    return true;
  }
  toString() {
    return `This account name is ${this._name}, balance:${this._balance}$, id:${this._id}`;
  }
}
const account1 = new Account("John", 2000);
const account2 = new Account("John", 5000);

Account.identifyAccounts(account1, account2); //false
// account2.transferTo(account1, 2000); //balance1 = 4000;
// account1.debit(4000);
// account1.balance; //balance1= 0
// account1.credit(2500);
// account1.balance; ///balance1 = 2500
// account2.toString();

/*      3. Write classes: Person, Student, Staff.        */
/*      Student is inherited from Person. It should have programs (array of strings), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.                     */

class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    return (this._firstName = value);
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    return (this._lastName = value);
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    return (this._gender = value);
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (value <= 0) {
      value = 18;
    }
    return (this._age = value);
  }
  toString() {
    return `Person - ${this._firstName} ${this._lastName} is ${this._age} years old ${this._gender}`;
  }
}
class Student extends Person {
  constructor(firstName, lastName, gender, age, programs, year, fee) {
    super(firstName, lastName, gender, age);
    this.programs = programs;
    this.year = year;
    this.fee = fee;
    this.exam = 0;
    this.examNote = {};
  }

  get programs() {
    return this._programs;
  }
  set programs(value) {
    return (this._programs = value);
  }
  get year() {
    return this._year;
  }
  set year(value) {
    return (this._year = value);
  }
  get fee() {
    return this._fee;
  }
  set fee(value) {
    return (this._fee = value);
  }
  passExam(program, grade) {
    this.examNote[program] = grade;
    if (grade >= 50) {
      this.exam += 1;
    }
    console.log(this.examNote);
    if (this.exam === this.programs.length) {
      this.year += 1;
    }
    // if (this.programs.includes(program)) {
    //   if (grade >= 50) {
    //     this.exam += 1;
    //   }
    //   if (this.exam === this.programs.length) {
    //     this.year += 1;
    //   }
    // }
  }
  toString() {
    return `Student ${this._firstName} ${this._lastName} ${this._age} years old,studying class ${this._year}  and pay for it ${this._fee}$ for year`;
  }
}

student = new Student(
  "Hasmik",
  "Ter-Khachatryan",
  "famale",
  34,
  ["Arm", "Rus", "Eng"],
  2020,
  1000
);
student.toString();
student.passExam("Arm", 90);
student.passExam("Rus", 50);
student.passExam("Eng", 60);
student.year; //2021
console.log(student.year);

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }
  get program() {
    return this._program;
  }
  set program(string) {
    return (this._program = string);
  }
  get pay() {
    return this._pay;
  }
  set pay(value) {
    return (this._pay = value);
  }
  toString() {
    return `Teacher ${this._firstName} ${this._lastName} for ${this._program} program will payed ${this.pay}$ `;
  }
}
teacher = new Teacher("Carmen", "Simonyan", "female", 40, "English", 1000);
teacher.pay = 2000;
teacher.toString();
