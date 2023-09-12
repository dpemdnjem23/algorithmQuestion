function solution(numbers) {
    var answer =new Array(numbers.length).fill(-1)

    const stack =[];
  
    //9 1 5 3 6 2 9 1 -1
    // 5보다 3이작음 6은 5 3 보다큼
    //result(355-1) 즉, 큰 값 순서대로 배열되어있다
    //  5 3 2 7 | 5 3 2 의 뒷큰값은 7이되는거지
    
    //stack에 값을 넣는거야 빅num을 그럼 stack값보다큰 값이 나오면 다시 넣어주고
    
    //3보다 큰수가 한참 뒤에 있는경우 [1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8]
    //[2,888888888888888]이 되어야한다.
    //[5,532443242346] 5보다큰게 있다면 나머지를다 6으로 만드는것 어디에있든,
    
    //숫자 하나를 택해서 numbers를 순회하고 큰값이 존재하면 그 값까지 숫자를 채운다. 
    // 가장 가까운 큰수를 선택
    // 만약에 없으면 다음숫자를 선택 다시 순회 반복
    // 근데 이렇게하면 반복문 2개 100만*100만 ?
    // 줄이기위해 뒷 큰수이므로 뒤에서부터 출발

 
    numbers.forEach((num)=>{
        let lastIdx = stack.length-1
        
        //stack보다 값이 큰경우 

        if(num>stack[lastIdx]){
            //역추적 해가면서 더큰수 인경우 그값으로 채워준다
            let idx = 0;
                            

            while(num>stack[lastIdx-idx]){
            
                if(answer[lastIdx-idx]===-1){
                
                    answer[lastIdx-idx]=num
                }
                idx++
            }
            
   
            
        }
 
       stack.push(num)    
  
        
        
    })
    
    
    return answer;
}