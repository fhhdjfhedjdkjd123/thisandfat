class Student{
    static count = 0;
    constructor(name,age,phoneNumber,boardMarks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.boardMarks=boardMarks;
        Student.countStudent();
    }
    static countStudent(){
        return(Student.count++);
    }
    eligible(){
        if(this.boardMarks>=40){
            console.log("Eligile");
        }else{
            console.log("Not Eligible");
        }
    }
    
}

const obj1 = new Student("madhu",22,9876543213,20);
const obj2 = new Student("anil",20,9876543210,50);
const obj3 = new Student("sweety",23,9876543211,60);
const obj4 = new Student("madhuri",19,9876643210,45);
const obj5 = new Student("annu",21,9876544210,70);
console.log(Student.countStudent());
obj1.eligible();
obj2.eligible();
obj3.eligible();
obj4.eligible();
obj5.eligible();


