

// number
const arr = [ 7, 5, 3, 6, 1, 8, 2, 4, 16, 11, 20 ,19 , 2]
const n = arr.length


const bubbleSort = ()=> {
    console.log("Befor:  " + arr);
    for(let i = 0; i < n; i++){
        let p = i + 1
        while( p <= n){
            // swap
            if(arr[i] > arr[p]){
                let temp = arr[i]
                arr[i] = arr[p]
                arr[p] = temp
            }
            p++
        }
    }
    console.log("Sorted: " + arr);
}

bubbleSort()



