
// Basic Program

// function pyramid(n) {
//     for(let i=1; i<= n; i++){
//       let str = ' '.repeat(n-i);
//       let str2 = '*'. repeat(i*2 -1)
//       console.log(str + str2 + str);
//     }
//   }
  
  
  const pyramid = (n)=>{
    let b = n - 1
    for(let i=1; i <= n; i++){
      let s = "*"
      console.log(" ".repeat(b) + s.repeat(i*2-1));
      b--;
    }
  }

pyramid(5)