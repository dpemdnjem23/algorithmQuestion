function solution(r1, r2) {
    var answer = 0;
    
    
    //원은 피타고라스 정리를 이용한다.
    //점은 1칸마디찍히므로 3인 선이 있다면 3칸이찍힌것
    // 3^2 > 1^2+2^2 3은 초과가되니깐 2 2개
    // 반지름은 알고있고 y축도 알고있으니 x값을 구할수있다 
    //1 2 3 4 .. 딱떨어져야 점이 찍히므로 작은경우는 그이하로 취급
    //borderline을 지나는 경우와 안지나는 경우 2개를 나눠서 본다.
    //구한 dot 값은 1쪽면만 구한것이므로 *4
    
    
    const DotCount = (r,includeLine) =>{
       let dot = 0;
        for(let i= 1 ; i<=r;i++){  
         const line =Math.sqrt(Math.pow(r,2)-Math.pow(i,2))
         const floorLine =  Math.floor(Math.sqrt(Math.pow(r,2)-Math.pow(i,2)))
         
            
            //테두리 체크
            if(includeLine){
                dot +=floorLine
            
            }
            else if(!includeLine){
                //line이 딱맞아 떨어지는경우
                if(line===floorLine){
                    dot+=(floorLine-1)
                }
                else if(line!==floorLine){
                    dot+=floorLine
                }
                
            }
     
            
            
        }
   dot= dot*4+r*4
      return dot  
        
    }
    //2개의 원사이만 구하면되니 안쪽 원 - 바깥 쪽원
    // return answer;
    

    const r22 = DotCount(r2,true)
    const r11 = DotCount(r1,false)
  console.log(r22,r11)
    return r22 - r11

}
