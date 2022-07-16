class Student {
    static count = 0;
    constructor(name, age, phone_number, board_marks){
      this.name = name;
      this.age = age;
      this.phone_number = phone_number;
      this.board_marks = board_marks;
      Student.count++;
    }
    studentDetails(){
      console.log(`${this.name} is ${this.age} year old his phone number is ${this.phone_number} and got ${this.board_marks} marks in board exam`);
    }
    studentCreated(){
      console.log(`${Student.count} students is created`);
    }
    checkEligiblity(){
      if(this.board_marks>40){
        console.log(`${this.name} is eligible for collage`);
      }
      else{
        console.log(`${this.name} is not eligible for collage`)
      }
    }
  
      placementEligiblity(minboardmarks){
       const eligible = (minAge) =>{
        if(`${this.age}`> `${minAge}` && `${this.board_marks}`> `${minboardmarks}`){
          console.log(`${this.name} is eligible for placement`);
          return true;
        }
        else{
          return false;
        }
     }
     return eligible;
    }
  }
  const Student1 = new Student('ganesh', 30, 8962418325, 55);
  const Student2 = new Student('Shyam', 18, 1234567890, 23);
  const Student3 = new Student('ram', 25, 1234456464, 44);
  const Student4 = new Student('krishna', 21, 9826524321, 99);
  const Student5 = new Student('rahul', 45, 7823123456, 91);
  const Student6 = new Student('dhiraj', 12, 12876567890, 39.99);
  Student1.studentCreated();
  Student6.studentCreated();
  Student1.studentDetails();
  Student2.studentDetails();
  Student1.checkEligiblity();
  Student2.checkEligiblity();
  console.log(Student1.placementEligiblity(40)(18));
  console.log(Student2.placementEligiblity(40)(18));
  console.log(Student3.placementEligiblity(40)(18));
  console.log(Student4.placementEligiblity(40)(18));
  console.log(Student5.placementEligiblity(40)(18));
  console.log(Student6.placementEligiblity(40)(18));