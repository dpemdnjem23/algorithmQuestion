function solution(name, yearning, photo) {
    var answer = [];
    //name과 yaerning 그리움 점수를 매칭 시킨다
    // photo는 이중 배열 이고 배열을 꺼내서 계산하고 새로운 배열에 넣기
    //photo의 배열[may,kein] 을 가져와서 name이 일치하는 indexOf점수 넣기
    
   for(let i=0;i<photo.length;i++){
           let sum=0

       for(let j=0;j<photo[i].length;j++){
      const nameMatch = name.indexOf(photo[i][j])
      console.log(nameMatch,yearning[nameMatch])
           //일치하지 않는경우도 발생
           if(nameMatch===-1){
               continue
           }
      sum=sum+yearning[nameMatch]
      
      
                    
           
           
       }
       answer.push(sum)
       
       console.log(answer)
   }
    return answer;
}