function solution(maps) {
    var answer = [];
    const stack = [];
        const m = maps.length //x
        const n = maps[0].length //y

    
   const visited = Array.from({ length: m }, () => Array(n).fill(0));

    

    
    const move = [[1,0],[-1,0],[0,1],[0,-1]]
    //상하좌우가 다막혀있으면 무인도로 식량을 계산한다.
    //dfs
    const validate =(x,y)=>{
 
        
        return x<0||y<0||x>=m||y>=n
    }    
    
    
    const dfs = (a,b) =>{
        // const 
    
        let count = 0;
        count = count + parseInt(maps[a][b])
       
        visited[a][b] =1
        
        stack.push([a,b])
        
        while(stack.length){
            const [curX,curY] = stack.shift()
            // console.log(curX,curY)
            
            for(let k=0;k<4;k++){
                
                const moveX  = curX+ move[k][0]
                const moveY = curY + move[k][1]
                
                // console.log(moveX,moveY)
                //map밖을 벗어나지 않는경우, x가 아닌경우,방문한곳이 아닌경우
               
                //
              
                if(validate(moveX,moveY)){
                   continue
                   }
           
                  else  if(
                   visited[moveX][moveY]===0&&
                     maps[moveX][moveY]!=='X'
                    )  {
                                         
               count =count+parseInt(maps[moveX][moveY])
                    visited[moveX][moveY] =1
                    //방문한곳에서 다시출발
                    stack.push([moveX,moveY])
                    
                        
                    }
       
     
                   
                    
            
            }
            
        }
        answer.push(count)
    }
    //start end가 딱히 없음으로 00~ m,n까지 순서대로 살펴본다
    
    for(let i = 0 ; i<m ; i++){
        for(let j=0 ; j<n ; j++){
            //x가 아닌곳에서 출발,방문한곳 제외
            if(maps[i][j]!=='X'&&!visited[i][j]){
            dfs(i,j)
            }
        }
        
    }
    

      if (answer.length === 0) return [-1];
    return answer.sort((a, b) => a - b);
}