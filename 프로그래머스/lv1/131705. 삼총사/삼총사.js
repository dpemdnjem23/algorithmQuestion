function solution(number) {
    var answer = 0;
    
    
    //number들의 합이 0이면 삼총사
    //즉 number에 있는 숫자들 로 3개로 이루어진쌍(합이 0이되는)이 몇개인지
    //조합문제
    // -2를 고정하고 2 0 2 -5 중에서 2개씩 조합
    // 3을 고정하고 0 2 -5 중에서 2개씩
    // 0을 고정하고 2 -5 중에서 2개 조합
    
    //무조건 3개로만 조합해야한다.
    
    const getCombination=(arr,num)=>{
            const result = [];

  
   if (num === 1) return arr.map((el) => [el]);      
        
        
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
        
      // 해당하는 fixed를 제외한 나머지 뒤
   const combinations =  getCombination(rest, num - 1); 
        
        
         const attached = combinations.map((el) => [fixed, ...el]);
      result.push(...attached); 
    });            
        
        // if(result.length===3){
                return result; 

        
  }
   const resultArr =  getCombination(number,3)
   

         
  resultArr.forEach((arr)=>{

       const sum =    arr.reduce((acc,cru)=>{
              return acc+cru
          },0)
       
       if(sum===0){
           answer++
       }
      
      
  })
   
   console.log(resultArr,'sdfadfas')
    
    
    
    
    return answer;
}