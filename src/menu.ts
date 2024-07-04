// const root = document.getElementById('root')!

// const anchorTag = (link : string, textNode : string) : string => {
//   let result = `<a href = "#${link}">${textNode}</a>`
//   return result
// }
// const litag = (children : string) : string => {
//   let result = `<li>${children}</li>`
//   return result
// }
// interface property{
//   name : string,
//   backgroundColor : string
// }

// interface BasicData {
//   jaemin : property
//   hoyoung : property
//   yugin : property
//   jiyoon : property
//   ukjae : property
// }

// const basicData : BasicData = {
//   jaemin : {
//     name : "재민",
//     backgroundColor : "red"
//   },
//   hoyoung : {
//     name : "호영",
//     backgroundColor : "green"
//   },
//   yugin : {
//     name : "유진",
//     backgroundColor : "purple"
//   },
//   jiyoon : {
//     name : "지윤",
//     backgroundColor : "bisque"
//   },

//   ukjae : {
//     name : "욱재",
//     backgroundColor: "blue"
//   }

// }



// const assembley = (object : BasicData) : string => {
//   let result = ''
//   for(let key in object){
//     const value = object[key as keyof BasicData] // ? keyOf가 뭐지..?
//     result += litag(anchorTag(`${key}`, value.name))
//   }


//   // for(let key in object){
//   //   result += litag(anchorTag(`#${key}`,object[key]))
//   // }
//   // litag(anchorTag(`#${object.jaemin}`, object.jaemin))
//   return result
// }


// root.innerHTML = `
// <ul id = "menu">
//   ${assembley(basicData)}
// </ul>
// <main id="main-target"></main>
// `
// /**
//  * * =============================================
//  * * html 을 대신해서 만든 html 작성 코드
//  * * React, CSR
//  */
// const mainTarget = document.getElementById("main-target") as HTMLDivElement;
// console.log(window.location.hash)

// window.addEventListener("hashchange", ()=>{
//   const hash = window.location.hash
//   console.log(hash.slice(1))
//   mainTarget.innerHTML = basicData[hash.slice(1) as keyof BasicData]
// })