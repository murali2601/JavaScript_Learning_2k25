function multiplesOf3Or5(number) {
    const arr = [];
    for(let i=1;i<number;i++)
    {
    if(i % 3 === 0 || i % 5 === 0) arr.push(i);
    // if(i % 5 === 0) arr.push(i);
    }
    console.log(arr);
    // arr.forEach((num) => num*)
    const suming = arr.reduce((acc,initial) => {
      return acc + initial;
    })
    // console.log(arr);
    return suming;
  }
//   multiplesOf3Or5(49);
  console.log(multiplesOf3Or5(49));