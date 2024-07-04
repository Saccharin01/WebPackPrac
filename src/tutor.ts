const rootTutor = document.getElementById('root') as HTMLDivElement;


const anchorTags = (href:string, textNode:string):string => {
  let result = `<a href="#${href}">${textNode}</a>`;
  return result;
}

const liTags = (children:string):string => {
  let result = `<li>${children}</li>`;
  return result;
}


interface BasicDataTutor {
  jeamin: {
    name: '재민',
    backgroundColor: 'red',
  },
  hoyoung: {
    name: "호영",
    backgroundColor: "green",
  },
  ujin: {
    name: "유진",
    backgroundColor: "yellow",
  
  },
  jiyoon: {
    name: "지윤",
    backgroundColor: "purple",
  },
  ukjae: {
    name: "욱재",
    backgroundColor: "blue",
  }
}

const basicDataTutor:BasicDataTutor = {
  jeamin: {
    name: '재민',
    backgroundColor: 'red',
  },
  hoyoung: {
    name: "호영",
    backgroundColor: "green",
  },
  ujin: {
    name: "유진",
    backgroundColor: "yellow",
  
  },
  jiyoon: {
    name: "지윤",
    backgroundColor: "purple",
  },
  ukjae: {
    name: "욱재",
    backgroundColor: "blue",
  }
}

const totalElement = (object:BasicDataTutor):string => {
  let result = '';

  for (let key in object) {
    const value = object[key as keyof BasicDataTutor];
    result += liTags(anchorTags(key, value.name));
  }
  return result;
}

rootTutor.innerHTML = `
<ul id="menu">
  ${totalElement(basicDataTutor)}
</ul>
<main id="main-target"></main>
`;

// ------------------------------------------------------------------
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR

const mainTargetTutor = document.getElementById('main-target')!;
console.log(window.location.hash);

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  console.log(hash.slice(1));
  let test = basicDataTutor[hash.slice(1) as keyof BasicDataTutor];
  let div = document.createElement('div');
  div.style.backgroundColor = test.backgroundColor;
  div.textContent = test.name;
  if(mainTargetTutor.hasChildNodes()) {
    mainTargetTutor.removeChild(mainTargetTutor.childNodes[0]);
  }
  mainTargetTutor.appendChild(div);

});