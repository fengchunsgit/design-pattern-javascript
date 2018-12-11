//开放封闭原则演示

function loadImg(src){
  let promise=new Promise(function (resolve,reject) {
    let img=document.createElement('img')
    img.onload=function(){
      resolve(img)
    }

    img.onerror=function(){
      reject('图片加载失败')
    }
    img.src=src
  })
  return promise
}

let src="https://img13.360buyimg.com/n5/18112/f8071866-80f0-4456-a83e-bb7bf20ab0c0.jpg"
let result=loadImg(src)

result.then(function(img){
  console.log(`width ${img.width}`)
  return img
}).then(function(img){
  console.log(`height ${img.height}`)
}).catch(function(ex){
  console.log('error')
})