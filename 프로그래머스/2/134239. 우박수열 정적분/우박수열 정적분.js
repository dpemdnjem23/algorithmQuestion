function solution(k, ranges) {
    var answer = [];
    const collatz = []
    
    //초항으로 우박수열 구하기
    //꺽은선 그래프의 구간은 사다리꼴의 넓이
    //윗변의 길이 + 아랫변의 길이) X높이 ÷ 2 
    
    //[a,-b] x=a , x=n-b y=0
    // x=2, x=3 , y-0
    //윗변이 5, 밑변이 16 높이가 1 윗변과 밑변은 우박수열, 높이는 정적분 범위
    //[a,b] n-b => n은 우박수열의 갯수 
while(k!==1){
    //콜라츠 에는 사다리꼴 넓이가 들어가야 한다. 사다리꼴 넓이는 공식 + 우박수열
            if(k%2===0){
           collatz.push((k+k/2)/2)
                k=k/2
        }
        else if (k%1===0){
           collatz.push((k+k*3+1)/2)
            k=k*3+1
        }
    
    
}
    //사다리꼴 넓이 다 구하면 정적분 범위에따라 합
    
  return  ranges.map(([h,t])=>{
  
        
        //구간의 시작점보다 끝점이 뒤에있는경우
        
        if(collatz.length+t<h){
            return -1
        }
        else{
               let sum = 0;
            for(let i =h; i<collatz.length+t;i++){
                
                sum = sum+collatz[i]
                
            }
   // return  collatz.at(t-1)- collatz[h] 
            return sum
        }
        
        
    })
    
    
    return answer;
}