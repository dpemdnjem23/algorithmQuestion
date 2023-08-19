function solution(sizes) {
    var answer = 0;
    //명함을 수납할만한 최대한 작은 지갑만들기
    //가로 세로 최댓값을 구하고
    //각 명함의 가로세로를 바꾼다음에 성립하면 다시 최댓값 갱신
    //
    let maxWidth=0, maxHeight=0;
    
    sizes.forEach((size)=>{
      const [row,column] = size
      // 가장긴 가로 길이 구하기
        
        const maxLength = Math.max(row,column)
        const minLength = Math.min(row,column)
      
       //60 50 -> 60 
       //30 70  -> 30은 건너뛴다
        maxWidth= Math.max(maxLength,maxWidth)
            maxHeight = Math.max(minLength,maxHeight)
    })
    
    
    
    return maxWidth*maxHeight
}