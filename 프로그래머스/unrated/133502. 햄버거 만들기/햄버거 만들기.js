function solution(ingredient) {
    var answer = 0;
    const stack=[];
    let i =0;
//1 빵 2 야채 3 고기
    // stack
    
    
    //1.빵 -> 야채 -> 고기 순으로 쌓아야하기때문에
    // 빵 야채 고기 빵 -> 1개완성 (포장) [2,1,2,3,1]
    // 1231을 찾고 제거 한다.
    
    //1.
    
    while(i!==ingredient.length){
        stack.push(ingredient[i])
        
        //1231 4개씩 잘라서 검사, 확인되면 삭제
        
        if(stack.slice(-4).join('')==='1231'){

            stack.splice(-4)

            answer++

                    // console.log(stack)

            // i=i-3
        }
        // if(stack.slice(4))
        i++
        
        //[2,1,1,2,3,1,2,3,1]
    }
    
    
    
    return answer;
}