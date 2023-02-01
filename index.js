const dataInput = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg` // Should be 10

const solotion = (data) => {
  let firstPosIndex = -1;
  let secoundPosIndex = 3
  let isSameElements = true;

  while(isSameElements) {
    firstPosIndex++;
    secoundPosIndex++;

    let arrayTemp = [...data.slice(firstPosIndex, secoundPosIndex)]  // 0 & 4
    console.log('arrayTemp: ', arrayTemp);

    let isSame = false;
    for (let i = 0; i < arrayTemp.length - 1; i++) {
      for (let j = i + 1; j < arrayTemp.length; j++) {
        if (arrayTemp[i] === arrayTemp[j]) {  // While skulle vara bra här
          console.log("Sant");
          isSame = true
        }
      }
    }
    if(isSame === false) {
      console.log("Rätt BREAK!");
      break;
    }
    console.log("HÄÄÄR");
  }
  console.log('secoundPosIndex: ', secoundPosIndex);
}
solotion(dataInput)