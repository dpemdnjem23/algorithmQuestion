function solution(weights) {
    var answer = 0;
    const weightObj = {}
    
 
    //2 3 4 22 33 44 1:1인경우, 3:2,4:2,4:3 이 되는지 체크
 //1, 3/2, 2, 4/3
    //weights를 오름차순으로 배열, 
    //길이가 10만이라 이중 반복문, 조합 을사용하긴 어렵다.
    
    //무게의 종류가900개 정도이므로 무게의 종류를 정리한다.
    //그럼 weight 관련된걸 한개더 만들어서, weights랑 한개씩

    weights.forEach((weight)=>{
        
        if(weightObj[weight]===undefined){
           weightObj[weight]=1
        }
        else if(weightObj[weight]!==undefined){
                weightObj[weight]+=1
                }
    })
    
    
    
    weights.sort((a,b)=>{
        return a-b
    })
    
    
    
    weights.forEach((weight)=>{
        
        //같은것이 있는경우
        if(weightObj[weight]>1){
         
            answer+=weightObj[weight]-1
        }
        //비율 3/2
        if(weightObj[weight*3/2]>0){
            answer+=weightObj[weight*3/2]
        }
        //비율이 2
        if(weightObj[weight*2]>0){
           
            answer+=weightObj[weight*2]
        }
        //비율이 4/3
              if(weightObj[weight*(4/3)]>0){
                    
                  answer+=weightObj[weight*(4/3)]
              }
        weightObj[weight]-=1
    })
    
        return answer;

}