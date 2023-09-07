function solution(k, d) {
    var answer = 0;
    //좌표를 찍는데 k만큼 찍는다.
    //몇몇좌표가 빈다 좌표를 그려 계산해보면 피타고라스정리 활용했을때 d^2보다 큰수는 제외되었다.
    //x^2 + y^2 = 5^2 =>   x^2 = 5^2-y^2
    //
    
    
    for(let i=0;i<=d;i=i+k){
        //x가 0부터 시작해서 +i만큼 올라갈때 y값이 어디까지 가능한지
        //x좌표가 0일때 y는 4까지 0,0 0,2 0,4 => 4까지 가능 , 3개 0,0을 제외하면 2개 4/2
        //x좌표가 2일때 y는 3까지 2,0 2,2 까지 2개 3/2 0포함 +1
        // 
        

    const maxX = Math.sqrt(Math.pow(d,2)-Math.pow(i,2))
    const xCount= Math.floor(maxX/k)+1
    
    answer=answer+xCount
        
        
        
    }
    
    return answer;
}