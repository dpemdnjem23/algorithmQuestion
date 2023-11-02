function solution(cards) {
    var answer = 0;
    let count = 0;
    const visited  = new Array(cards.length+1).fill(0)
    let index = cards[0]
    visited[0]=1
    const box = []
    
    console.log(visited)
    
    // 카드를 뽑아 배열에서 숫자에 해당하는 카드를 다시뽑는다. 반복적으로 하다가 이미 뽑힌경우 1번그룹
    // 다시 임의의 카드를뽑아 반복진행하고 2번그룹으로 한다.
    
    // 1번그룹 만 존재한다면 0  1+2 그룹 두개다 존재한다면 *한다.
    
  //카드를 뽑는다.
    

            while(true){
//2가지 한번방문했던걸 다시 방문하는경우 , 모두 방문한경우
                
                
                //모두 방문
                if(visited.indexOf(0)===-1){
                    box.push(count)
                    break;
                    
                }
                //아직 방문하지않은경우
                else if(visited[index]===0){
                        
                    visited[index]=1
                    count++
                    index = cards[index-1]
                    
                        } 
                //이미 방문한경우, 그룹 완성
                else{
                    //임의의 index를 찾아가야한다.
                    index = visited.indexOf(0)
                    box.push(count)
                    count=0
                    
                }//
          
        
    }
    
    //구한 박스가 1개만 존재하면 0 2개이상이면 2개만 구하기
    box.sort((a,b)=>{
        return b-a
    })

    return box.length===1 ? 0 : box[0]*box[1]

}