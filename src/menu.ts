const root = document.getElementById('root')!

const anchorTag = (link : string, textNode : string) : string => {
  let result = `<a href = "${link}">${textNode}}</a>`
  return result
}

const litag = (children : string) : string => {
  let result = `<li>${children}</li>`
  return result
}

root.innerHTML = `
<ul>
  ${litag(anchorTag("#123", "asdfqwer"))}
</ul>
`
