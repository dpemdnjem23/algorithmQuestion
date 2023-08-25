function solution(survey, choices) {
    var answer = '';

    //성격유형 정의
    const arr = ['R','T','C','F','J','M','A','N']
    //성격 유형 점수 choice에 맞춰서 점수를 나타낸다
    const score = {1:3,2:2,3:1,4:0,5:1,6:2,7:3}

    //지표순서대로 뽑으면된다.
const obj ={}
  
arr.map((t)=>
       obj[t]=0)
    
    

    //choice는 7개의 성격 유형 점수 매우 비동의~ 매우 동의 1~7
    
    //survey에서 'AN'이면 4번 지표고 어퍼치(비동의) 네오형(동의) 순으로 간다.
    //123 4 567
    
    survey.forEach((personality,idx)=>{
        //'AN' =>'A' 'N'분리
        const [disagree,agree] = personality.split('')
        const personalityScore = score[choices[idx]]
        
        // console.log(personalityScore)
        //score에서 3이하인경우는 disagree, 5이상인경우는 agree 4는 중립
        
  
        if(choices[idx]<=3){
       
            
            
            obj[disagree]+=personalityScore
            
        }
        else if(choices[idx]>=5){
                   

            
                        obj[agree]+=personalityScore

        }
     
        
        
        
    })
    
    //점수순으로 배열 => object
    
    
    //, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단한다.
    
 
     if(obj['R']>=obj['T']){
        delete obj['T']
    }
    else{
        
                delete obj['R']

    }
    

         if(obj['C']>=obj['F']){
        delete obj['F']
    }
    else{
        
                delete obj['C']

    }
    
         if(obj['J']>=obj['M']){
        delete obj['M']
    }
    else{
        
                delete obj['J']

    }
    
    
   //N과 A과 동일하다면 사전순으로 A가빠르므로 N은 삭제

    if(obj['A']>=obj['N']){
        //N은 삭제

        delete obj['N']

    }
    else{
        delete obj['A']
    }
    //object value로 정렬
//  const sortObj = Object.fromEntries(
//     Object.entries(obj).sort(([,a],[,b]) => a > b? -1: 1 )
// );

                                    console.log(obj)

    
    

    
    return Object.keys(obj).join('')
}