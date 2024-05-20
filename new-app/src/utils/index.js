export const arrColors = ['primary','secondary','warning','error','info','success']
export const arrColors2 = ['primary','info','success']
export const moreColors = ['red','pink','blue','green','gold']

export const randomColor = (arrOfColors, sadasnjaBoja) => {
  const filteredArr = arrOfColors.filter((color) => color !== sadasnjaBoja)
  const randomIndex = Math.floor(Math.random() * filteredArr.length)
  return filteredArr[randomIndex]
}