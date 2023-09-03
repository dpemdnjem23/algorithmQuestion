function solution(wallpaper) {
    var answer = [];
    //빈칸 . 파일 #
    //드래그의 시작점 lux luy
    //드래그의 끝점 rdx rdy
    
    //가장 가까운 #과 만나는 행렬 즉 최솟값
    // 가장끝에있는 #과 만나는 행렬 즉, 최댓값
    // 5,1 | 3,3
    // 가장가까운 # 행 과 열을 반영한다.
    
    //minRow, minCol,maxRow,maxCol
    
    let minRow = 100,minCol=100,maxRow=-100,maxCol=-100
    
    const wallpaper2 = wallpaper.map((rows)=>  rows.split(''))
    
    wallpaper2.forEach((arr,index)=>{
        
        // arr.forEach((file)=>{
               if(arr.includes('#')){
            console.log(arr.indexOf('#'),index)
            minRow =Math.min(minRow,index)
             minCol =   Math.min(minCol,arr.indexOf('#'))
             maxRow = Math.max(maxRow,index+1) 
             maxCol = Math.max(maxCol,arr.lastIndexOf('#')+1)
          
            
        }
            
            
        // })
     
     
        
        
        
        
    })
    answer.push( minRow,minCol ,maxRow, maxCol )
    return answer
    
}
    
