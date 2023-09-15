function solution(sequence, k) {
    var answer = [];
    let left =0;
    let right = 0;
    
    let sum = sequence[0]

    //연속된 부분수열의 합이 k 한개 이면 해당 수열의 시작~끝 인덱스 반환
    // 연속되 부분수ㅇ열의 합이 k인게 여러개이면 가장 짧은 수열의 인덱스 반환
    // 연속된 부분수열의 합이 여러개인데 똑같은 길이를 가진경우  가장 앞쪽 인덱스를 반환
    
    //[11112345] 5 11112 23 5
    //연속하기만하면된다 123 ok 23, 234 
    //sequence에서 한개를뽑아서 7이되도록 연속으로 구해본다.

    //여러번 반복하면 for문이 다수 n^x 사용안된다
    
    //1뽑고 1+2 확인 +3 확인 +4 k보다큼 멈추고 2시작 234 k 넘음 3시작 34 k도달 45도 k이상
  
    //끝까지 도달하면 출력
    while(right<sequence.length){
        
        //k보다 합이더 큰경우
        // 1234 4까지가면안되고 빠꾸
        //k보다 아직 작으면 계속 움직인다.
        if(sum>k){
          
            sum-=sequence[left]
              left++
        }
      else if(sum < k){
            right++
            sum+=sequence[right]
        }
        else if(sum===k){
            //출력
            answer.push([left,right])
            //출력했으면 다음 배열로 이동
            right++
          
            
            sum+=sequence[right]
            
        }
        
    }
    
    
    //answer값을 정렬해야한다.
    
   
    answer.sort((a,b)=>{
        //가장 짧은수열 [a,b] b-a 
        
        //가장짧은수열대로 배열
        if(Math.abs(a[0]-a[1])< Math.abs(b[0]-b[1])){
            
            return b[0]-b[1]
        }
        
        return a[0]-b[0]
    })
    
    
    return answer[0]
}