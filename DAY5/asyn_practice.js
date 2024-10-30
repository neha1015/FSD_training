function roll(num, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Roll. No. is",+ num);
        reject();
      }, delay);
    })
  }

  roll(12131,1000).then(()=>{
    roll(12132,2000).then(()=>{
      roll(12133,3000).then(()=>{
        console.log("all rolls are done");
      }).catch(()=>{
        console.log("error");
      })
    })
  })

  async function getRoll() {
    let roll1=await roll(41,1000);  
    let roll2=await roll(42,2000);  
  }