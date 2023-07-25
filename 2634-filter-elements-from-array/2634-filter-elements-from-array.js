/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    
    
    //arr 은 배열, fn은 어떤 함수
    //arr과 fn을 적절히 조합하여 output이 나오도록
    
    //1. example1 ->배열에서 한개씩 꺼내서 비교
    //arr[i] 를 가져와서 fn(n) <- n값에 넣어서 출력하기
    //새로운 배열을 만들어 fn에의해서 걸러진 arr 값들을 넣기
    
    
        const newArr = []

    for(let i=0;i<arr.length;i++){
        

        
        if(fn(arr[i],i)){
            //통과된 arr값을 한개씩 넣는다.
            newArr.push(arr[i])
            
        }
           
    }

     return newArr
    
};