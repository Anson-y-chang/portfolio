const last12Month = () => {
  const today = new Date().toDateString()
  const year = today.split(" ")[3]
  const lastYear = ((today.split(" ")[3]*1)-1).toString()
  const monthArray = [lastYear+" Jan", lastYear+" Feb", lastYear+" Mar", lastYear+" Apr", lastYear+" May", lastYear+" Jun", lastYear+" Jul", lastYear+" Aug", lastYear+" Sep", lastYear+" Oct", lastYear+" Nov", lastYear+" Dec",year+" Jan", year+" Feb", year+" Mar", year+" Apr", year+" May", year+" Jun", year+" Jul", year+" Aug", year+" Sep", year+" Oct", year+" Nov", year+" Dec"]

  const todayIndex = monthArray.findIndex( i => i === today.split(" ")[3]+" "+(today.split(" ")[1]))

  return monthArray.slice(todayIndex-11, todayIndex+1).reverse()
}


export default last12Month;