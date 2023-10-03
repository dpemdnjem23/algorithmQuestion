function solution(prices) {
 
    const answer = Array(prices.length).fill(0).map((el,idx)=>idx).reverse()
    console.log(answer)
    const stack= [];    
    const visited =Array(prices.length).fill(false)
    
    //[1 2 3 2 3]  1 2 3 4 5 초
    
    //1초 시점 일때 떨어지지않는다.4
    //2초 시점 일때 끝까지 떨어지지 않는다. 3
    //3초 시점 1초뒤에 가격이 떨어진다. 1
    //4초 시점 가격이 떨어지지 않는다. 1
    //5초시점 떨어지지 않는다. 0
    
//처음 부터 끝까지 계산하고 떨어진 시점에서 멈춘다.
// 결과 값이 4 3 1 1 0 내려가니 결과값을 4 3 2 1 0 으로 저장해놓고 해당되는 값들을 수정한다.
    
    prices.forEach((item,idx)=>{
   const last = stack.length-1
        
        
        //스택의 값이 더 큰경우 즉, 하락장이 찾아온경우
        if(item <stack[last]){
               //뒤에서부터 앞으로 추적해가면서 비싼 주식들
         let index = 0
      // item보다 작은 stack값이 나온다면 빠져나온다.
         while(item<stack[last-index]){
             //줄어들었다는건 item보다 큰값인 경우
           
             if(!visited[last-index]){
                     answer[last-index] -= (prices.length-1-idx) 
             visited[last-index]=true
             }
         
 index++ 
             
             
         }
            
        }

        
        //stack에 주식 정보를 미리 담는다.
        stack.push(item)
        
    })
    
    
    
    return answer;
}