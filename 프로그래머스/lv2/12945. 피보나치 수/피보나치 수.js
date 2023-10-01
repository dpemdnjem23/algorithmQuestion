function solution(n) {
    var answer = 0;
    const dp = [0,1,1]
    
    //sum과 n
    //시간초과 -> DP
    //재귀호출 문제 -> for문으로 풀기
    
    
    const fibo = (num) =>{
        
      
        for(let i=3;i<=n;i++){
 dp[i] =  (dp[i-2]+dp[i -1])%1234567
 
            
        }
      return dp[num]

    } 
    
    return fibo(n)%1234567
    

}