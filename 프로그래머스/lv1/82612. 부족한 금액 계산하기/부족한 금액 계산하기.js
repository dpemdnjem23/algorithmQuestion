function solution(price, money, count) {
    var answer = -1;
    let sum =0

    
    for(let i = 1 ; i <=count;i++){
        
        sum=sum+price*i
    }
    // console.log(answer-money)
    //단, 금액이 부족하지 않으면 0을 return 하세요.
     
      if(sum<=money){
        return 0
    }

    answer= sum-money
 
    
    //이용금액 *count <money

    return Math.abs(answer);
}