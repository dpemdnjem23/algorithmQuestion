function solution(elements) {
    var answer = 0;
    let index = 0;
    const sub = []
    const arr =[];
    
    // 7 9 1 1 4 라고했을때 연속 부분수열의 합을 구해라
    //길이가 2라면 7+9 ,9+1 ,1+1,1+4,4+7
    
    //이중배열 

    
    for(let i = 1 ; i<=elements.length;i++){
        //길이
        for(let j = 0 ;j<elements.length;j++){
            //중복된걸 제외하고 넣는다.
            index = (index+j)
            let sub = 0
            if(i+j>elements.length){
                
                  sub=elements.slice(j,i+j).concat(elements.slice(0,i+j-elements.length))
            }
            else if(i+j<=elements.length){
                
                   sub=elements.slice(j,i+j)
            }
            //subSum의합
            const subSum = sub.reduce((acc,val)=>acc+val
                
            ,0)
            
            arr.push(subSum)
            
        }
        
        
    }
    const set  = new Set(arr)
    
    return [...set].length;
}