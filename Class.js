// declaring the class

class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    showName()
    {
        document.writeln(this.name);
    }

    showAge()
    {
        document.writeln(this.age);
    }
}

var guy = class{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    showName()
    {
        document.writeln(guy.name);
    }
}

//creating the object of Person class
var person = new Person('arun', 27);
person.showName();
person.showAge();

var newguy = new guy();
newguy.showName();