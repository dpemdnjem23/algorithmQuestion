function solution(n, wires) {
    var answer = 100000;
    //13 23 3이랑 연결 34 [left, right] 라고하면 이전의 right가 이후의 left와 동일하다면 연결된것
    //right가 같아도 연결된것
    
    //연결을 끊는다는건 배열 한개를 삭제 한다는것
    
    //1이랑 뭐가 연결됐는지 2랑 뭐가 연결됐는지 .....
    
    //{1:[2],2:[7],3:[4],4:[3,5],5:[4],6:[7]:7:[2,6]}
    // 3->4 4는 또 key를 찾아가서 연결확인 3은 햇으니까 5를 찾아가 4 총 3개 반대편은 4개 이런차으이 최솟값을구해라

    //최솟값을 찾는거니 bfs고려해볼필요, n의 최대갯수 100
    
    const treeObj = {}
    
    //wires를 이용해서 treeObj를 만든다. 모든 edge를 저장
    //어디랑 어디가 연결되어있는지 확인가능
    wires.map((el)=>{
        const [left,right] = el
        
        if(!treeObj[left]){
            treeObj[left]=[]
        }
        else if(treeObj[left]){
          
        }
        if(!treeObj[right]){
            treeObj[right]=[]
        }
        else if(treeObj[right]){
                
        }
          treeObj[left].push(right)
        treeObj[right].push(left)
    })
    
    
   
    console.log(treeObj)

    //
    const dfs = (root,exception) =>{
    let count =0
        const queue = [root]
        
        const visited = [];
        
        visited[root] = true
        
        while(queue.length){
            
          const cur = queue.pop()
            
          //배열이 존재
            treeObj[cur].map((el)=>{
                // 연결되지도 않고
                // 방문한적이 없는경우
                if(el!==exception&&!visited[el]){
                    
                    visited[el]=true;
                    queue.push(el)
                }
            }) 
            count++
        }
        return count
    }
    //양쪽으로 나눠서 가장 적은 차이가 나는 경우를 구하기
    
    //edge를 제거 [1,3]이 제거되었다고 가정 3의 연결, 1의 연결 모두 완전 탐색 하여
    // 노드의 갯수를 세서 그갯수의 차이를 구한다.
    wires.map((el,index)=>{
        const [a,b] = el
        
     const diff = Math.abs(dfs(a,b)-dfs(b,a))
        answer = answer>diff ? diff:answer;
    })
    
    
    return answer;
}