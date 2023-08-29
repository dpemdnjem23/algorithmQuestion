function solution(data, col, row_begin, row_end) {
    let answer = 0
    
    
    //테이블 해시 함수
    
    //2. 테이블의 튜플을 COL번째 값을 기준으로 오름차순, 그 값이 동일하면, 기본키인 '첫'번째 컬럼의 값을 기준으로 내림차순
    
    //sort를 할때 col값을 기준으로 줄세운다. 없으면 첫번째
    data.sort((a,b)=>{
        if(a[col-1]!==b[col-1]){
            
            return a[col-1]-b[col-1]
        }
        else if(a[col-1]===b[col-1]){
            
            return b[0]-a[0]
        }
        
        
    })
    
    console.log(data)
    
    
    

    //정렬된 데이터에서 S_i를 i번째 행의 튜플에 대해 각 컬엄의 값을 i로 나눈 나머지들의 합
    
    
    for(let i=row_begin-1;i<=row_end-1;i++){
        let rest = 0
        data[i].forEach((cal)=>{
            rest +=cal%(i+1)
            //XOR 연산은 입력값이 같지 않으면 값을 출력합니다. 이는 두 입력 중 하나만이 배타적으로 참일 경우에만 일어납니다. ^= =>xor 연산자
            
        })
                  answer^=rest

    }

    
    

    return answer;
}