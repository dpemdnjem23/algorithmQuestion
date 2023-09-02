function solution(maps) {
    var answer = 0;
    const size = 101
    const s =[];
    const l = [];
    const e = [];
    
    const n = maps.length
    const m = maps[0].length
    //s에서 출발해서 끝까지 도달
    //중간에 레버를 반드시 당겨야 한다.
    // 레버까지 최소 
    //bfs? dfs? => 최단거리는 bfs로 풀자
    
 const move = [[1,0],[0,1],[-1,0],[0,-1]] //우하좌상
    const visited = new Array(n).fill().map((_)=>new Array(m).fill(0)) //갔단곳은 다시안가기
const visited2= new Array(n).fill().map((_)=>new Array(m).fill(0)) 
Array.from({length:m}, () => 
          Array.from({length:n}, () => 0));         

    maps.forEach((v,i)=>{
        if(v.includes("S")){
            s.push(i,v.indexOf('S'))
        }
        if(v.includes("L")){
            l.push(i,v.indexOf('L'))
        }
        if(v.includes("E")){
            
            e.push(i,v.indexOf('E'))
        }
    
   
        
    })
    //1. 레버를 찾는 맵과 출구를 찾는 맵을 따로 만든다.
    
    //2. 레버를 찾았으면 레버를 찾은 곳에서 출발하여 출구를 찾는다.
    
    //3. 
    
    const bfs =(start,end,vis) =>{
        const [x,y] = start
        
        const queue =[]
        
        vis[x][y] =1

        
        queue.push([x,y])
                
        
while(queue.length){
  const [curX,curY] = queue.shift()
  //start에서 상하좌우로 움직인다. 영역을 벗어나선 안된다.
  for(let i = 0 ;i<4 ;i++){
      //13 y 02 x
      let nx = curX+move[i][0]
      let ny = curY+move[i][1] 

        //x에 해당하는경우 out
      //바깥으로 나가는경우 out
      //방문한곳 out
      if(nx<0||ny<0||nx>=n||ny>=m) continue
      if(maps[nx][ny]==='X'||vis[nx][ny]!==0)continue

      
      if(nx===end[0]&&ny===end[1]){
          console.log(vis)
          return vis[curX][curY]
      }


      vis[nx][ny]=vis[curX][curY]+1
      queue.push([nx,ny])
      
  }
  
  
  
}        
        
    }
 

  let lRoute=  bfs(s,l,visited2)
   let eRoute =  bfs(l,e,visited)

    return eRoute&&lRoute?eRoute+lRoute:-1
}