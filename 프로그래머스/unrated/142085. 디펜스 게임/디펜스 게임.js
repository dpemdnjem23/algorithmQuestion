// function solution(n, k, enemy) {
//     var answer = 0;
//     const  arr =[]
//     //가장 많은 라운드를 막아내는 법 찾기
//     // 방어권횟수가 enemy 같다면 k출력
    
//     // 4 2 n이끝 뒤에는 전부다 방어권
//     //  2 4 5 무적권  4 3 방어
//    // 1 ≤ enemy의 길이 ≤ 1,000,000
    
    
//     //방어권은 가장많은 적에서 사용되어야 한다.
//    const sortedEnemy= enemy.sort((a,b)=>b-a).slice(0,k).sort((a,b)=>a-b)
//     // console.log (sortedEnemy)
//     enemy.some((enemyNum)=>{
        
//         //n<enemyNum 탈출
        
//         //무적권을 사용하는경우
//         const useDefence = sortedEnemy.indexOf(enemyNum)
//         if(useDefence>-1){
//             sortedEnemy.splice(useDefence,1)
//             k--
//         }
 
        
//         //병사를 막는경우
//         else if(n>=enemyNum){
//             n=n-enemyNum
            
//         }
           
        
        
//   else if(n<enemyNum&&k===0){
//             return true
//         }
  
     
//         answer++
//     })
    
//        if(k===enemy.length){
//             answer =k
//         }
    
//     return answer;
// }

// 실패 및 test 6에서 시간초과 발생

class PriorityQueue {
  constructor() {
      this.heap = [];
  }
  
  push(value) {
      const heap = this.heap;
      heap.push(value);
      let index = heap.length - 1;
      let parent = Math.floor((index - 1) / 2);
      
      while (index > 0 && heap[index] < heap[parent]) {
          [heap[index], heap[parent]] = [heap[parent], heap[index]];
          index = parent;
          parent = Math.floor((index - 1) / 2);
      }
  }
  
  pop() {
      const heap = this.heap;
      if (heap.length <= 1) {
          return heap.pop();
      }
      
      const output = heap[0];
      heap[0] = heap.pop();
      let index = 0;
      
      while (index * 2 + 1 < heap.length) {
          let left = index * 2 + 1, right = index * 2 + 2, next = index;
          
          if (heap[next] > heap[left]) {
              next = left;
          }
          
          if (right < heap.length && heap[next] > heap[right]) {
              next = right;
          }
          
          if (next === index) {
              break;
          }
          
          [heap[index], heap[next]] = [heap[next], heap[index]];
          index = next;
      }
      
      return output;
  }
}

function solution(n, k, enemy) {
  
  let arr = new PriorityQueue();
  var capacity = 0;
 

  //k번째까지는 일단 무적권 쓰면 capacity의 고려 대상에서 제외
  enemy.slice(0,k).forEach((element)=>arr.push(element));
  for(var i  =k;i<enemy.length;i++){
    arr.push(enemy[i]);
    var popNum = arr.pop();
    if(popNum+capacity>n){
      return i;
    }
    capacity+=popNum;
  }

  return enemy.length;
}

