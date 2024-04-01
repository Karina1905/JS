function Person(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;

    this.learn = function (skillName) {
        this.skills.push(skillName);
    };

    this.forget = function(...skillNames) {
        this.skills = this.skills.filter((skill) => !skillNames.includes(skill));
    };
    return this;
}
const person1 = new Person("John", 25, ["JavaScript", "HTML", "CSS"]);

console.log(person1);
person1.learn("Java");
console.log(person1);
person1.forget("HTML");
console.log(person1);

const person2 = new Person("Mary", 32, ["Web Development", "Data Analysis", "Graphic Design", "Project Management"]);
console.log(person2);
person2.forget("Web Development", "Graphic Design");
console.log(person2);