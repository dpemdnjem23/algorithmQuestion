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

//테스트 3 〉	통과 (61.66ms, 60MB)
// 테스트 4 〉	통과 (132.67ms, 82.2MB)
// 테스트 5 〉	통과 (174.62ms, 87MB)
// 테스트 6 〉	통과 (97.27ms, 69.4MB)
// 테스트 7 〉	통과 (117.30ms, 80.5MB)
// 테스트 8 〉	통과 (101.24ms, 69.4MB)
// 테스트 9 〉	통과 (72.52ms, 65.1MB)
// 테스트 10 〉	통과 (6.20ms, 38MB)
// 테스트 11 〉	통과 (57.93ms, 58.4MB)
// 테스트 12 〉	통과 (196.99ms, 97.9MB)

// 성능 개선 해보기