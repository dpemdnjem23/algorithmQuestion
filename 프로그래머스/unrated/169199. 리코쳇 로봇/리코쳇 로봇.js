function solution(board) {
    
    
    var answer = 0;
    const n = board.length;
    const m = board[0].length;
    const start = [];
    const goal = [];
    const stack = [];
    let count =1;
    const visited = Array.from(Array(n), () => Array(m).fill(false))
    
    
    const move = [[1,0],[-1,0],[0,1],[0,-1]]
    
//     const validate = (x,y) =>{
//         return x<0&&y<0&&x>=m&&y>=n
//     }
    
// board  = board.map((el)=>el.split(''))
    
    //g가 목표 r은시작
    
    board.forEach((horse,idx)=>{
        
        if(horse.includes('R')){
            
            start.push(idx,horse.indexOf('R'))
            
        }
    })
    
    //최소를 찾으므로 bfs
    
    //한번 이동할때 D에 부딪힐때까지, 끝까지 움직인다
   
        
visited[start[0]][start[1]] = true   
stack.push([start[0]],[start[1]])
       
       
        while(stack.length){
         
              // for(let j=0; j<stack.length; j++) {
                 const [x,y] = stack.shift()
           
     
//상하좌우로 이동        
for(let i=0; i<4;i){


            let moveX = x+move[i][0]
            let moveY = y+move[i][1]
            
            //벗어나지않거나, D를 만나지 않을경우만 미끄러진다
            while(moveX >= 0 &&
                  moveY  >= 0 && 
                  
                  moveX < n && 
                  moveY< m &&
                  board[moveX][moveY]!=='D'){
                
          // return
           // visited[moveX][moveY] = true
                moveX+= move[i][0]
                 moveY +=move[i][1]
                
           
        

}                         
    //만나는경우 한칸뒤로 물러준다.
          moveX-= move[i][0]
                 moveY -=move[i][1]
    
    //만약 도착하면
    if(board[moveX][moveY]==='G'){
        return answer
    }
    
    //방문한적 있어 움직이다 D나 벽에 부딪혀서 뒤로온경우
    if(!visited[moveX][moveY]){
        visited[moveX][moveY]=true 
        stack.push([moveX,moveY])
      // break;
    
    }     
 


}
             answer++               // return
  
        }
  
          return answer;                          
 






         
            
            
            //             if(validate(moveX,moveY)){
//                 continue
//             }
            //부딪히거나 끝에 도달할때까지 미끄러진다.
            //if문사용하니 에러 발생
            
            
            
            
            
//             if(!validate(moveX,moveY)){
               
                
//                count++
//                 moveX=moveX-move[i][0]
//                 moveY= moveY-move[i][1]
//                stack.push([moveX,moveY])
//                 i=0
                
//                 console.log(g,[moveX,moveY],'ggggggggggg')
//                 if(g===[moveX,moveY]){
//                     console.log(answer)
//                    answer= visited[moveX][moveY]
//                     return answer
//                 }
//                 break;
            
                
//             }
//             console.log(board[move][moveY],'asdfasdfsd')
            
//             else if(board[moveX][moveY]==='D'){
//                    count++
//                 moveX=moveX-move[i][0]
//                 moveY = moveY-move[i][1]
//                stack.push([moveX,moveY])
//                 i=0
                
//                 console.log(g,[moveX,moveY],'ggggggggggg')
//                 if(g===[moveX,moveY]){
//                     console.log(answer)
//                    answer= visited[moveX][moveY]
//                     return answer
//                 }
//                 break;
//             }
            
  
//             console.log(moveX,'도착')
            
//                     visited[moveX][moveY]=count
//             stack.push([moveX,moveY])
            
   
        

        
        
    }
    // console.log(start)
    
function canMove(x, y, dx, dy, board) {
  const nx = x + dx;
  const ny = y + dy;

  return (
    0 <= nx &&
    nx < board.length &&
    0 <= ny &&
    ny < board[0].length &&
    board[nx][ny] !== 'D'
  );
}

function solution(board) {
  const N = board.length;
  const M = board[0].length;
  let start;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 'R') start = [i, j];
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  visited[start[0]][start[1]] = true;

  const queue = [[start[0], start[1], 0]];
  let answer = -1;

  while (queue.length) {
    const [x, y, move] = queue.shift();

    if (board[x][y] === 'G') {
      answer = move;
      break;
    }

    for (const [dx, dy] of directions) {
      let nx = x;
      let ny = y;

      while (canMove(nx, ny, dx, dy, board)) {
        nx += dx;
        ny += dy;
      }

      if (!visited[nx][ny]) {
        queue.push([nx, ny, move + 1]);
        visited[nx][ny] = true;
      }
    }
  }

  return answer;
}