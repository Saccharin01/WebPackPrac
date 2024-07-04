const root = document.getElementById('root')!

const anchorTag = () : string => {
  let result = `<a href = "#">메뉴</a>`
  return result
}

const litag = (children : string) : string => {
  let result = `<li>${children}</li>`
  return result
}

root.innerHTML = `
<ul>
  ${litag(anchorTag())}
</ul>
`
