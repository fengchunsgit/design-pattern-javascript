class Product{
  constructor(name){
    this.name=name
  }

  init(){
    console.log('init')
  }

  fun1(){
    console.log('fun1')
  }
  fun2(){
    console.log('fun2')
  }
}

class Creator{
  create(name){
    return new Product(name)
  }
}

//test
let creator=new Creator()
let p=creator.create('p1')
p.init()
p.fun1()