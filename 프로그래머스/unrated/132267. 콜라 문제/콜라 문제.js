function solution(a, b, n) {
    var answer = 0;
      let cola = 0
      let bottle=n
      // let rest =0
    
    //a는 콜라를 받기위한 빈병 갯수
    //b는 콜라
    //n은 총 병의 갯수
    
    //20병 ->20/a *b만큼 받아갈수 있다. 이것을 반복 더이상 나누어지지 않을때까지
    
    
    while(bottle>=a){
    
        cola+=Math.floor(bottle/a)*b //콜라를 가져온다.
        console.log(cola)
       let rest = bottle%a
        console.log(rest)
        bottle = Math.floor(bottle/a)*b+rest              //빈병
        console.log(bottle,'bot')
      
       
        
        
        
        //cola
        //rest
        
     
        
    }
    
    
    
    
    
    return cola
}