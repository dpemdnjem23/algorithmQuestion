function solution(s) {
    var answer = [];
    let zeroCount =  0
    let binaryCount =  0
    
    
    //x에 01110 -> 1111 ->이진법
    
    //제거한 0의갯수 ,  이진변환 횟수 각각 저장
    
    //0을제거한후 길이 6을 이진법 변환 110 0제거 길이 2 2를 2진법 변환 1이나올때까지 반복 

    
    while(s!=='1'){
     

      let count = s.split(0).length-1
      zeroCount +=count
       let binary = s.replace(/0/g,'').length
        console.log(count,s,'count')
       s= binary.toString(2)
        binaryCount++
        
   
        console.log(s,'s')
        
    }
    
    
    
    return answer = [binaryCount,zeroCount]
}