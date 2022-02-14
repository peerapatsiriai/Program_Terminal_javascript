
// Basic Program

// function pyramid(n) {
//     for(let i=1; i<= n; i++){
//       let str = ' '.repeat(n-i);
//       let str2 = '*'. repeat(i*2 -1)
//       console.log(str + str2 + str);
//     }
//   }
  
  
const pyramid = (n)=>{
    let blank = n - 1
    for(let i=1; i <= n; i++){
        let star = "*"
        console.log(" ".repeat(blank) + star.repeat(i*2-1));
        blank--;
    }
}

pyramid(10)