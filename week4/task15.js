class Animal{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    speaks(){
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal{
    constructor(name){
        super(name,"dog");
    }
    barks(){
        console.log( `${this.name} says Bow`);
    }
}
const dog =new Dog("Buddy");
dog.speaks();
dog.barks();