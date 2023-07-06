const generateRandomColorCode = () => {
  const myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return myRandomColor;
}


export default generateRandomColorCode