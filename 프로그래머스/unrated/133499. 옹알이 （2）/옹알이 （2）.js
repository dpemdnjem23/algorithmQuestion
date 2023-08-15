function solution(babbling) {
    var answer = 0;
    const arr = ["aya", "ye", "woo", "ma"]
    let index = 0
    
    //주어진 aya ye woo ma 를 조합하면 babbling을 만들수 있는지 검사
    //aya~ ma까지 babbling에 들어가는지
    //만약 포함이 되었다면 문자열을 짜른뒤 다시 반복
    //연속된 ayaaya yeye 등은 금지
    
    babbling.forEach((word)=>{
            let count =0

        for(let i=0;i<arr.length;i++){
        //babbling이 ayaaya 연속인경우
            
            if(word.includes(arr[i].repeat(2))){
                
                break;
            }
            
            //["ayayeayayeaya"]
                        //babbling이 포함되어 있다면 해당되는 단어를 지워라

            //'' 사용시 단어가 합쳐지는 현상 발생
            else if(word.includes(arr[i])){
                // console.log(arr[i])
                
                word=word.replaceAll(arr[i],'0')
            }
    
            
            
            //	["aye"] ye가사라진다
            
            
            //발음이 되었다면 count
         
        }           
        
          for(let i=0; i<word.length;i++){
            if(Number(word[i])%1===0){
                 console.log(word,'word')

                count++
            }
            if(count ===word.length){
                answer++
            }
      
        }
        
    })
    
    
    
    return answer;
}