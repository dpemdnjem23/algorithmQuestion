function solution(today, terms, privacies) {
    var answer = [];
    const termsObj ={}
    //날짜계산
    
    const calculate = (year,month,day) =>{
        console.log(year,month,day)
        
        return year*12*28 + month *28 + day
    }
    
    //약관 종류에 따라서 유효기간을 계산
    // 오늘날짜 < 개인정보 수집일자+약관 유효기간
    // 그러면 파기해야하는 개인정보이다.
    
    const todays = today.split('.')
    console.log(todays[0])
    const todayCal = calculate(Number(todays[0]),Number(todays[1]),Number(todays[2]))
    console.log(todayCal)
    
    //terms를 쓰기쉽게 obj로
    //terms =>{}
    terms.forEach((item)=>{
        const [type,month] =item.split(' ')
        
        termsObj[type]=Number(month)
        
        
    })
    console.log(termsObj)
    //
   	privacies.forEach((privacy,idx)=>{
        
          const [date,type] =privacy.split(' ')
        //type은 typeobjectm, date는 다시 나눠서 calculate
        const[year,month,day] =  date.split('.').map((el)=>Number(el))
          
        const privacyDate = calculate(year,month+ termsObj[type],day)-1
        
        console.log(privacyDate,todayCal)
        if(privacyDate<todayCal){
            answer.push(idx+1)
        }
        
        
        
    })
    
    return answer;
}