
// Pyramid


//   V.1

// function pyramid(n) {
//     for(let i=1; i<= n; i++){
//       let str = ' '.repeat(n-i);
//       let str2 = '*'. repeat(i*2 -1)
//       console.log(str + str2 + str);
//     }
//   }
  
  
//   V.2


const pyramid = (n)=>{
    let blank = n - 1
    for(let i=1; i <= n; i++){
        let star = "*"
        console.log(" ".repeat(blank) + star.repeat(i*2-1));
        blank--;
    }
}

const pyramid_Reverse = (n)=>{

    const star = "*"
    // Pyramid
    let blank = n - 1
    for(let i=1; i <= n; i++){
        console.log(" ".repeat(blank) + star.repeat( i * 2 - 1 ));
        blank--;
    }

    console.log("-".repeat( n * 2 - 1 ));

    // reverse
    let blank1 = 0 
    for(let i = n; i > 0; i--){
        console.log(" ".repeat(blank1) + star.repeat( i * 2 - 1 ));
        blank1++
    }
}


pyramid_Reverse(10)