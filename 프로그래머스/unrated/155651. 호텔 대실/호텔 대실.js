function solution(book_time) {
    var answer = 1;
    const cleanTime = 10;

    
 
    

    //예약 시간이 겹칠때마다 방이 1개더 필요하다 이예약시간엔 청소시간 10분이 필요
    
    
    //시분 -> 분으로환산
    book_time.forEach((el,idx)=>{
        const [start,end] = el
        // const []
        
        const Stime =start.split(':')
        const Etime = end.split(':')
        console.log(Stime)
        book_time[idx][0] = Number(Stime[0]*60)+Number(Stime[1])
        book_time[idx][1] = Number(Etime[0]*60)+Number(Etime[1])
   
        
    })
    // 가장 짧은 시간 순서대로 오름차순
    
    book_time.sort((a,b)=>a[0]-b[0])
    
    
    //첫번째방에 14시~19시 다음예약이 14시 20분 ~
    //2번째 방에 14시20~ 15시 20 ~ 다음에약이 15시
    //3번째 방에 15시 다음예약이 16 40 첫번째 아직 진행중 2번째 끝
    // 2번째방에 16시 40분 ~18시 20분 다음 18시 20분 청소시간고려
    // 3번째방에 18시 20분
    
    //방을 만들고 방을계속확인해서 비었다면 집어넣는식으로
    //end 시간 만따져보면된다.
    
    console.log(book_time)
    
       const roomInUse = [book_time[0][1]+cleanTime]

//        book_time.forEach((time,idx)=>{
//       idx
          
//            const [curS,curE] =  [book_time[idx][0],book_time[idx][1]]
           
//            if(roomInUse[idx]){
//                console.log('s')
//            }
           
//        })

       for(let i =1 ; i<book_time.length;i++){
           
             const [curS,curE] =  [book_time[i][0],book_time[i][1]]
                 let book =true;
             //예약방을 항상 순회하면서 비어있는지확인
             
            for(let j = 0 ;j<roomInUse.length;j++){
                
            
                 //예약방이 비어있는경우 기존껄 지우고 넣는다.
                 if(roomInUse[j]<=curS){
                     
                     roomInUse.splice(j,1);
                     roomInUse.push(curE+cleanTime)
                     book=false;
         break;
               
                     }
                     
                 }
              
                            if(book){
                 
                       answer+=1
                     roomInUse.push(curE+cleanTime)
                 
                     
                 }

       }
                               
       
       
    return answer;
}