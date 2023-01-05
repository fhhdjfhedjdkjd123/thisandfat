class student{
    constructor(name,age,boardMarks){
        this.name=name;
        this.age=age;
        this.boardMarks=boardMarks;
    }
    eligibleForPlacements(minAge){
        return (minMarks)=>{
            //console.log(this);
            if(this.boardMarks > minMarks && this.age > minAge){   
                console.log(this.name + " is aligible for Placements");
            }else{
               console.log(this.name + " is not aligible for Placements");
            }
        }
    }

}
const Madhuri = new student("Madhuri",22,  41);
const Madhu = new student("Madhu",18, 30);
const Anil = new student("Anil",19, 45);
const Ramadevi = new student("Ramadevi",23,30);
const Sharanya = new student("Sharanya",24,55);

Madhuri.eligibleForPlacements(18)(30);
Madhu.eligibleForPlacements(18)(30);
Anil.eligibleForPlacements(18)(30);
Ramadevi.eligibleForPlacements(18)(30);
Sharanya.eligibleForPlacements(18)(30);