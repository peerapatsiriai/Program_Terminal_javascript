

// number
const arr = [ 7, 5, 3, 6, 1, 8, 2, 4]

// range of arr = 8

const bubbleSort = ()=> {
    console.log(arr);
    for(let i = 0; i < 8; i++){
        let p = i + 1
        while( p <= 8){
            // swap
            if(arr[i] > arr[p]){
                let temp = arr[i]
                arr[i] = arr[p]
                arr[p] = temp
            }
            p++
        }
    }
}

bubbleSort()

console.log(arr);

