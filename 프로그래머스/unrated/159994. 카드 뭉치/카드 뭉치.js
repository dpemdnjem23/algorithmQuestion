function solution(cards1, cards2, goal) {
    var answer = '';
    let goalIdx = 0

    // 원하는 카드 뭉치에서 카드를 순서대로 사용한다.
    // goal에서 cards1, cards2랑 일치하는걸 순서대로 찾아간다.
    //즉, cards1와 cards2에는 goal을 만들고 나서도 남아있는 단어가 있을 수 있다.
    // while(true){
        
//         goal.forEach((word,idx)=>{
            
//             if(cards1[0]===word){
//                 cards1.shift()
                
//             }
//             else if(cards2[0]===word){
//                 cards2.shift()
//             }
//          //cards는 남아있는데 goal은 완료된경우

//             else{
          
                
//                 break;
//             }
            
            
            
//         })


    
//     return cards1.length===0&&cards2.length===0 ? 'Yes':'No' 
// }
    
    
    while(goalIdx!==goal.length){
        
        if(cards1[0]===goal[goalIdx]){
                 cards1.shift()
            goalIdx++
        }
                     else if(cards2[0]===goal[goalIdx]){
                cards2.shift()
                         goalIdx++
            }
        else{
            break
        }
        
    }
    
    
    
    return  goalIdx ===goal.length ? 'Yes':"No"
    }