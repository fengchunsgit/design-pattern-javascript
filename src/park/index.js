//camera
class Camera{
  shot(car){
    return {
      num:car.num,
      inTime:Date.now()
    }
  }
}

//screen
class Screen{
  show(car,inTime){
    console.log('num:',car.num)
    console.log('time:',Date.now()-inTime)
  }
}

//park
class Park{
  constructor(floors){
    this.floors=floors || []
    this.carList={}
    this.camera=new Camera()
    this.screen=new Screen()
  }

  in(car){
    //通过camera获取信息
    const info=this.camera.shot(car)
    //某个停车位
    const i=parseInt(Math.random()*100%100)
    const place=this.floors[0].places[i]
    place.in()
    info.place=place

    //记录信息
    this.carList[car.num]=info

  }

  out(car){
    //get info
    const info=this.carList[car.num]
    //
    const place=info.place
    place.out()

    this.screen.show(car,info.inTime)
    //清空记录
    delete this.carList[car.num]
  }

  emptyNum(){
    return this.floors.map(floor=>{
      return `${floor.index} 层还有 ${floor.emptyPlaceNum()}个车位`
    }).join('\n')
  }
}

//car
class Car{
  constructor(num){
    this.num=num
  }
}

//floor

class Floor{
  constructor(index,places){
    this.index=index
    this.places=places || []
  }

  emptyPlaceNum(){
    let num=0
    this.places.forEach(p=>{
      if(p.empty){
        num=num+1
      }
    })
    return num
  }
}

//place
class Place{
  constructor(){
    this.empty=true
  }

  in(){
    this.empty=false
  }

  out(){
    this.empty=true
  }
}

//test
const floors=[]
for(let i=0;i<3;i++){
  const places=[]
  for(let j=0;j<100;j++){
    places[j]=new Place()
  }
  floors[i]=new Floor(i+1,places)
}

const park=new Park(floors)
const car1=new Car(100)
const car2=new Car(200)

console.log('车位数量:')
console.log(park.emptyNum());
console.log("进入");
park.in(car1)
console.log('车位数量:')
console.log(park.emptyNum());
console.log("进入");
park.in(car2)
console.log('车位数量:')
console.log(park.emptyNum());
console.log("离开");
park.out(car1)
console.log('车位数量:')
console.log(park.emptyNum());







