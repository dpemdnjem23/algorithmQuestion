function solution(d, budget) {
    var answer = 0;
    //최대한 많은 부서에 지원해주기 위해선 적은 부서부터 오름차순
    
    d.sort((a,b)=>{
       return a-b
    })
    //합이 budget 보다 크지않도록한다.
    
    for(let i = 0 ; i<d.length;i++){
        
        if(d[i]>budget){
           break;
        }
 budget = budget - d[i]
            answer++
    }
    
    return answer;
}