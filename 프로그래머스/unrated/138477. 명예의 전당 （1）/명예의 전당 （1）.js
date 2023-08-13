function solution(k, score) {
    var answer = [];
    const honor = [];
    //k일 까지는 모든 출연 가수의 점수가 명예의 전당
    
    //k일 다음 부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순의 가수 
    //점수보다 높으면 출연 가수의 점수가 명예의 전당, 기존의 k번째 순위의 점수는 내려오게 된다.
    
    score.forEach((el,idx)=>{
        
        
        honor.push(el) //명예의 전당에 socre를 푸쉬
        honor.sort((a,b)=>{ //명예의 전당은 내림차순으로 업데이트
            return b-a
        })
        // console.log(honor)
    //명예의 전당이 k를 넘어간다면 기존의 최하위랑 교체
        if(honor.length>k){
            honor.pop()
            // console.log(honor)
            
            
        }
        answer.push(honor[honor.length-1])
        
        
    })
    
    
    return answer;
}