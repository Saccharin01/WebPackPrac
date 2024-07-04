const root = document.getElementById('root')!

const anchorTag = (link : string, textNode : string) : string => {
  let result = `<a href = "#${link}">${textNode}</a>`
  return result
}
const litag = (children : string) : string => {
  let result = `<li>${children}</li>`
  return result
}

interface BasicData {
  jaemin : "재민",
  hoyoung : "호영",
  yugin : "유진",
  jiyoon : "지윤"
}

const basicData : BasicData = {
  jaemin : "재민",
  hoyoung : "호영",
  yugin : "유진",
  jiyoon : "지윤"
}



const assembley = (object : BasicData) : string => {
  let result = ''
  for(let key in object){
    const value = object[key as keyof BasicData] // ? keyOf가 뭐지..?
    result += litag(anchorTag(`${key}`, value))
  }


  // for(let key in object){
  //   result += litag(anchorTag(`#${key}`,object[key]))
  // }
  // litag(anchorTag(`#${object.jaemin}`, object.jaemin))
  return result
}


root.innerHTML = `
<ul>
  ${assembley(basicData)}
</ul>
`
/**
 * * =============================================
 * * html 을 대신해서 만든 html 작성 코드
 * * React, CSR
 */