class Car{
  constructor(number,name){
    this.number=number
    this.name=name
  }
}

class Kuaiche extends Car{
  constructor(number,name){
    super(number,name)
    this.price=1.5
  }
}

class Zhuanche extends Car{
  constructor(number,name){
    super(number,name)
    this.price=2.5
  }
}

class Trip{
  constructor(car){
    this.car=car
  }

  start(){
    console.log(`行程开始，名称${this.car.name},车牌号${this.car.number}`)
  }

  end(){
    console.log(`行程结束，价格`+this.car.price*5)
  }
}

let car=new Kuaiche(100,'奔驰')
let trip =new Trip(car)

trip.start()
trip.end()