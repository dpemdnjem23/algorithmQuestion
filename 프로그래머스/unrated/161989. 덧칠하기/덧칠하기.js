function solution(n, m, section) {
    var answer = 0;
    
    //section은 다시칠해야하는 부분
    //칠할때마다 answer ++
    let max =-1000001
    section.forEach((v)=>{
        
        //answer
        if(max<v){
answer++
            max=v+m-1
        
        }
        
    })
    
    
    
    return answer;
}