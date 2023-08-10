// function solution(number, limit, power) {
//     let powers= 0
//     const divisor = []
    
//     //number => 5 1~5 까지 약수의 갯수를 정리
//     //
    
//     for(let i= 1 ; i<=Math.sqrt(number);i++){
//         console.log(i)
//         let answer=0
//         //1의약수부터 number의 약수
//         for(let j=1;j<=number;j++){
//                 //약수구하기 나누었을때 나머지가 0
//             if(i%j ===0){
//                 answer++
              
//             }
//         }
//         divisor.push(answer)
        

//     }
//     console.log(divisor)
    

// divisor.forEach((num)=>{
    
//     if(num<=limit){
//      // 2   3
//         powers=powers+num
        
        
//     }
//     else{
//             powers=powers+power

//     }
// })    

 
    
//     return powers
// }


//효율성 개선

function solution(number, limit, power) {
    let powers= 0
    const divisor = []
    
    //number => 5 1~5 까지 약수의 갯수를 정리
    //
    const Divisor = (n)=>{
      let count =0
    for(let i= 1 ; i<=Math.sqrt(n);i++){
        
     
        if(n%i===0){

            if(n/i==i){
                count++
            }
            else{
                count=count+2
            }
        }
    }
    
     return count   
    }
    
    
    
    
    for(let i=1;i<=number;i++){
        divisor.push(Divisor(i))
    }


divisor.forEach((num)=>{
    
    if(num<=limit){
     // 2   3
        powers=powers+num
        
        
    }
    else{
            powers=powers+power

    }
})    

 
    
    return powers
}


