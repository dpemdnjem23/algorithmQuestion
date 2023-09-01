function solution(m, n, startX, startY, balls) {
    var answer = [];
    
    //가로 m 세로 n
    //점대칭 선대칭
//상, 하, 좌, 우 의 각 거리의 최솟값을 구한 후 answer에 추가한다.
//상, 하, 좌, 우 의 각 거리를 구할때 예외를 제외한다.
    
    const distance =(x1,x2,y1,y2) =>{
        return Math.pow(x1-x2,2)+Math.pow(y1-y2,2)
        
    }    
    balls.forEach((item)=>{
        
        let min = 1000000;
        
        const [targetX,targetY] = item
//x가 같고 윗쿠션
        
        if(startX===targetX){
            //좌측쿠션
             min = Math.min(min,distance(startX,-targetX,startY,targetY))
            //우측쿠션
            min = Math.min(min,distance(2*m-startX,targetX,startY,targetY)) 
            
            if(startY>targetY){ //시작공보다 위쪽에 위치 윗쿠션
                
         min=Math.min(min,distance(startX,targetX,2*n-startY,targetY))  

                
            }
            else if(startY<targetY){//시작공보다 아래쪽 아래쿠션 
                
                min = Math.min(min,distance(startX,targetX,startY,-targetY))
            }
            
        }
        
        //Y좌표에 있는경우
        else if(startY===targetY){
            
          //윗쿠션
          min=Math.min(min,distance(startX,targetX,2*n-startY,targetY))  
          //아래 쿠션
          min=Math.min(min,distance(startX,targetX,startY,-targetY))  

            if(startX>targetX){ //시작공보다 target공이 우측
                //우측 쿠션
                            min = Math.min(min,distance(2*m-startX,targetX,startY,targetY)) 

            }
            
            else if(startX<targetX){
                //좌측 쿠션
min = Math.min(min,distance(startX,-targetX,startY,targetY))           
                


            }
            //좌측쿠션
            
        }
        else if(startY!==targetY){
                  //윗쿠션
          min=Math.min(min,distance(startX,targetX,2*n-startY,targetY))  
          //아래 쿠션
          min=Math.min(min,distance(startX,targetX,startY,-targetY))  
            
                 //좌측쿠션
             min = Math.min(min,distance(startX,-targetX,startY,targetY))
            //우측쿠션
            min = Math.min(min,distance(2*m-startX,targetX,startY,targetY)) 
            
            
            
        }
    answer.push(min)

    
    })
    //2**2+3**2 sqrt(13)
    
    
    return answer;
}