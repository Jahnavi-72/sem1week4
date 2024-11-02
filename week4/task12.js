let person={
    name:"Alice",
    age:25,
    city:"Gooty",
    introduce:function()
    {
        return "Hi,I'm "+this.name+",I'm" + this.age+"years old, and I live in"+this.city+"!";
    }
};
console.log(person.introduce());