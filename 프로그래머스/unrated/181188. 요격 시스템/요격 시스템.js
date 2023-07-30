function solution(targets) {
    var answer = 0;
    let cut =  -2; //요격성공

    
    //겹치는 부분을 찾아 최소한으로
    
    //보기좋게 순서대로 정리해보자
    
    //1. 타겟 원소 순회 1~4 을 요격 한다고하면 1~4에 있는 임의의 숫자라고 봤을때 이사이에 있는 숫자인지확인
    //1. 1~4 요격 성공 했으면 이사이 숫자는 전부다 요격한다.
    //2. 1~4 요격 성공후 다음 [4,5] 로 넘어가면 새로운 요격발생4~5 를 포함하는 모든 숫자는 요격
    
targets.sort((a,b)=>a[1]-b[1])
    
    
    for(let i=0 ; i<targets.length;i++){
        //[1,4] 4를저장 이숫자가 첫번째 오는 숫자이상이라면 다음요격
        
        const [a,b] = targets[i]
        
        if(a>=cut){
            cut=b
            answer++ // 요격성공횟수
        }
        
        
    }
    
    
    
    return answer;
}