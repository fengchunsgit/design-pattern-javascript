class Person {
	constructor(name,age){
		this.name=name
		this.age=age
	}

	eat(){
		alert(`${this.name} eat something`)
	}
	speak() {
		alert(`My name is ${this.name},age ${this.age}`)
	}

}



class Student extends Person{
	constructor(name,age,number){
		super(name,age)
		this.number=number
	}

	study(){
		alert(`${this.name} ,学号：${this.number} study`)
	}
}


let w=new Student("wang",21,'A2')
w.eat()
w.study()