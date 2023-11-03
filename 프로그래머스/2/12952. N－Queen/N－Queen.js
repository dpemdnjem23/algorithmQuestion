function solution(n) {
    var answer = 0;
    //임의의 배열 만들기 체스판
    const board = new Array(n+1).fill(0)
    //[0,0,0,0] 이존재했을때
    //제시된 체스판을 1차원배열로 옮겨보면
    //[2,4,1,3]이된다. 각각을 행으로보고 몇번째 열인지 체크한것이다.
    
    
    
    //queen 이 있는 자리에 행렬엔 queen이 올수 없다.
    //1행 2열 자리에 퀸이 있다면 적어도 다음퀸은 1행 2열엔 올수없다.
    // 대각선까지 고려한다면2행 3열 등의 자리에도 올수 없게된다.
    
    //n개를 배치할때 최대한 많은 방법의 수를 return -> dfs
    //queen이 놓여진 자리에 가로 세로 줄 전체에 다 놓을수 없으니 1차원 배열을 사용해도된다.
    
    

    
    const dfs = (board,row) =>{
        if(n===row){
            
            answer++
        }
        else{
            
            for (let i= 1 ;i<=n;i++){
                board[row+1]=i;
                if(isValid(board,row+1)) dfs(board,row+1)
            }
        }
        
        
    }
    
    
        //유효성 검사
    const isValid = (board,row) =>{
        //같은 라인(가로 세로) 배치 불가
    //1차원 배열로치면[1,1] <-불가능
        for(let i=1 ; i<row;i++){
            if(board[i]===board[row])return false;
                //[1,2]<-- 1개차이 나면 대각선에 위치하므로 불가능
        //대각 라인 배치 불가
            if(Math.abs(i-row)===Math.abs(board[i]-board[row])) return false
            
        }
              //배치 가능
    return true
        
  
        
    }
    
    
    
    for (let i= 1 ; i<=n ; i++){
        
        board[1]=i
        dfs(board,1)
    }
    
    return answer;
}