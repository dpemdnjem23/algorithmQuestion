function solution(N, stages) {
    var answer = [];
    //1시간
    //실패율 스테이지에 도달했으나 아직 클리어x 플레이어 수 / 스테이지에 도달한 플레이어 수
    
    //전체 스테이지 개수 N 현재 멈춰있는 스테이지 번호 stages
    
    stages.sort((a,b)=>a-b)
    
    
    // 2는 아직 클리어x 1/8 8명 도전  1
    // 2번 스테이지 7명 도전 3명 클리어x 222
    // 3번 4명 도전 2명클 2/4
    // 4번 2명 도전 2명클 1/2
    // 5번 1명도전 0명클 0/1 => 도달한 유저가 없으므로 0
    
    //1. 실패율을 구하고나면 클리어한 사람수 - 전체

    
    for(let i=1;i<=N;i++){
        //1stage~Nstage까지
        
        // const elStages = stages.filter((el)=>)
        
        
        //총 몇명의 사용자가 도전 하는지구한다. 스테이지에 도달하지 못한걸 제외 i가 stage보다 작아질때 제외
        
        const challenger = stages.filter((el)=>el>=i).length
        console.log(challenger)
                        //몇명이 클리어 못했는지 구한다. 1~5 순서대로 스테이지에 해당하는 것들을 stages에서 제외한다 그것이 클리어못한 수 이다.

        const clearStage = stages.filter((el)=>el===i).length
        
        answer.push([i,clearStage/challenger])        
        
    }
    //answer을 순서대로 정비
    
    // 실패율로된 배열값을 작은 순서대로 나열 해야하며, 스테이지로 나타내야한다.
answer.sort((a,b)=>b[1]-a[1])
    
    
    return answer.map((el)=>el[0])
}