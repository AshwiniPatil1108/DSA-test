const cl = console.log;

//remove duplicate without using new Set method
//using forEach

let num = [10, 20, ,60, 70,50, 30, 20, 50, 40, 10, 30, 40, 60, 70];

const removeDuplicate = (ele)=>{
    let uniqueArr = [];

        ele.forEach(num=>{
            if(!uniqueArr.includes(num)){
                uniqueArr.push(num)
            }
        })
        return uniqueArr
}

cl(removeDuplicate(num))



//using Indexof method

const remoevDup =(ele)=>{
        let arr =[];

        ele.forEach(num =>{
            if(arr.indexOf(num) === -1){
                arr.push(num)
            }
        })
        return arr

}
cl(remoevDup(num))

//reduce

const revdup = (num)=>{
    let result = num.reduce((acc, cv)=>{
        if(!acc.includes(cv)){
            acc.push(cv)
        }
        return acc
    },[])
    return result
}

cl(revdup(num))
   
//___________________________________________________________________________________________

//reverse integer without using method
 

 let number = -123;

// const reverseInt = (num)=>{
//     let num1 = Math.abs(num);
//     let result = +num1.toString().split("").reverse().join("");
//     return result*Math.sign(num);
// }
// cl(reverseInt(int));


const reverseNum =(str)=>{
    let result = ``;
    let int = Math.sign(str)
    str = str.toString();
    for(let i = str.length-1; i >= 0; i--){
        result+= str[i]
    }
    return  parseInt(result)*int
}
cl(reverseNum(number))


//_________________________________________________

//chunked array 
let array = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const chunkedArr = (arr, targetlength) =>{
    let chunkArr = [];
    for(let i =0; i< arr.length; i+= targetlength){
        let chunk = arr.slice(i, i+targetlength)
        chunkArr.push(chunk)
    }
    return chunkArr;
}
cl(chunkedArr(array, 2))









