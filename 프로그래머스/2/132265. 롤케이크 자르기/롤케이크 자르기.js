// function solution(topping) {
//     var answer =0
//     //반으로 잘랏을때 양쪽의 결과가 공평한경우가 몇가지인가?
    
//     //1 2131412 종류만 -> 중복제거
    
//     for(let i = 1 ; i<topping.length;i++){
//         let left = new Set(topping.slice(0,i))
//         let right = new Set(topping.slice(i,topping.length))
        
        
//         if([...left].length===[...right].length){
//             answer++
            
//         }
        
      
//         // console.log([...left],[...right])
        
//         //left 토핑 종류와 right 토핑 종류 동일한지 체크
//         // 토핑 종류를 따진다면 양쪽에 중복 은제거 해서 길이 체크
        
        
//     }
    
//     return answer;
// }

//O(n) 100만개 에러 발생 
//Set 객체는 R-B Tree로 구현되어 있어 연산에 O(logN)*N 오류발생



function solution(topping) {
     
    //반복문을 사용하되 시행횟수를 줄이자.
    // 객체로 만들면 가능하다.
    var answer =0
    //토핑의 종류
    let set = new Set()
    //토핑 객체
    const toppingObj = new Map
    
    console.log(toppingObj)

    //객체에 키 값 으로 저장
    
    for(let i = 0 ;i<topping.length;i++){
          toppingObj.has(topping[i]) ? toppingObj.set(topping[i], toppingObj.get(topping[i])+1) : toppingObj.set(topping[i], 1);
    }
    
    
    for(let i = 0 ;i <topping.length;i++){
    //obj에 담긴 토핑을 빼서 set으로
        
        let count = toppingObj.get(topping[i]) -1
        set.add(topping[i])
        
        //0이된건 제거 객체로 자연스럽게 좌우로 나눌수있다.
        
        count === 0 ? toppingObj.delete(topping[i]) :toppingObj.set(topping[i], count);
                // console.log(set,count,toppingObj)

        // console.log(set.size,Object.keys(toppingObj).length  )
        
        //set이랑 obj랑 크기비교해서 똑같으면 출력
        if(set.size===toppingObj.size){
            
            answer++
        }
    }
    
    
    
    
    
   
    return answer
    
}