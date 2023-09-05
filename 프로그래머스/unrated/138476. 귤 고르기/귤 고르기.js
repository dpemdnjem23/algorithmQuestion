function solution(k, tangerine) {
    var answer = 0;
    let sum = 0
    
    
    //상자안에 담으려는 귤의 개수 , 귤의 크기
    // 크기별로 분류 했을때 서로 다른 종류의 수를 최소화
    // 같은 크기를 가진 귤이 가장 많은걸 사용

    // 1. 같은 종류 개수 파악
    const countSameType ={}
   
    const arr =[]
   tangerine.forEach((size)=>{
       
           if(countSameType[size]===undefined){
            countSameType[size]=1
        }
        else if(countSameType[size]!==undefined){
          countSameType[size]++
        }
       
       
   })
    
        
    
    
    //2. 개수가 많은 종류부터 내림차순
    
    //sort 로사용하기 위해선 {key:x,value:x}
    
   for (var key in countSameType) {
   const typeObj = {};
  typeObj.key = key;
  typeObj.value = countSameType[key];
  arr.push(typeObj);
}
    
   arr.sort((a,b)=>{
        if (a.value < b.value) {
    return 1;
  }
  if (a.value > b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
        
    })
    //순서대로 더한값이 6이되도록

    for(let i=0;i<arr.length;i++){
       sum=sum+ arr[i]['value']
        answer++
        if(sum>=k){
            return answer
        }
    }
    
    
    
    return answer;
}