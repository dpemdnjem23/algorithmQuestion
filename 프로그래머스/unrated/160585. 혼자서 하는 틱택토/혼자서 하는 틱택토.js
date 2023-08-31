function solution(board) {
    var answer = -1;
 let Xcnt = 0 // O X의 갯수를 센다.
 let Ocnt =0
    //틱택토 게임 O나 X가 1줄로 만들어지면 되는게임
    
    //선공이 O 후공이 x를 번갈아 진행할수 있는 상황이면 1 아니면 0
    //실수로 x
    //9칸이 모두차서 더이상 표시를 할수 없는경우 무승부
    // 0가먼저 3칸이 만들어졋는데 x가 3칸인경우는 진행할수없는 게임     
   

   //빙고여부를 판단
   //빙고 여부를 판단하기 위해선 가로 세로 대각선 각각이 O와 X 3개로 이루어졌는지 확인
 const over = (arr,el) =>{
     
     
 //가로
 for(let x=0;x<3;x++){
     if(arr[x][0]===el&&arr[x][1]===el&&arr[x][2]===el){
         return true
     }
     
 }
     //세로
      for(let y=0;y<3;y++){
     if(arr[0][y]===el&&arr[1][y]===el&&arr[2][y]===el){
         return true
     }
     
 }
     //대각선
     if(arr[0][0]===el&&arr[1][1]===el&&arr[2][2]===el){
         return true
     }
             if(arr[0][2]===el&&arr[1][1]===el&&arr[2][0]===el){
         return true
     }
     
 return false
  }
 
 //2차원 배열
 board = board.map((el)=>{
     return el.split('')
 })
 
    board.forEach((arr)=>{
        arr.forEach((sign)=>{
                if(sign==='X'){
            Xcnt++
        }
        else if(sign==='O'){
            
            Ocnt++
        }
        
            
        })
        
    
    })
   //나올수 없는경우
   //1. O와X둘다 승리하는경우 ooo xxx
   //2. O가 승리햇는데 x를 더 놓는경우
   //3. O와 X의 갯수가 올바르지 않은경우(O없는데 x x가 o보다 많은경우 어쨋든 o보다 많은경우거나 o가 2개더많은경우)
  
    //후공이 더많은경우 
    if(Xcnt>Ocnt){
        return 0
    }
    
    //ox가 같을때 o가먼저 승리 
    
    if(Xcnt===Ocnt){
        if(over(board,'O')===true){
            return 0
        }
        else if(over(board,'O')===false){
            return 1;
        }
    }
    //O랑 X랑 1개차이 x가 더많은경우
        if(Xcnt+1===Ocnt){
            if(over(board,'X')===false){
                return 1
            }
            
        }
    
    
    
    return 0
}