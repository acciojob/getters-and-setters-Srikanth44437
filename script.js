//complete this code
class Person {
	constructor(name,age){
		this.__name = name;
		this.__age = age;
	}
	get name(){
		return this.__name;
	}
	set age(){
		return this.__age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.__name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.__name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
