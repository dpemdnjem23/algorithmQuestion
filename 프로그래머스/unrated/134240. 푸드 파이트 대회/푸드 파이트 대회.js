function solution(food) {
    let answer = []
    let i =1
    
    // 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. 중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
    
    //[] 첫번째있는게 첫번째음식이고 안에들어있는 숫자는 갯수 ,칼로리 순서
    // 두선수가 동시에 먹기때문에
    // 3개가 준비되어있는 음식은 1 1
    // 4개가 준비되어있는 음식은 2 2
    //항상 가운데는 물이 존재 0을기준으로 대칭
    //6개가 준비되어있는 음식은 33
    
    //%2 로 나누어떨어지는경우만 1개씩 추가할수있다.
    
for(let i=1;i<food.length;i++){
    
    
                answer.push(String(i).repeat(Math.floor(food[i]/2))
)

    
}   
    //0을 뒤에다넣고 문자열로만들고 0뒤에 0앞에있는숫자를 반복한다.
    
    const str = answer.join('')+'0'
    
    const reverseStr = answer.reverse().join('')
    console.log(reverseStr)
        //0무조건 가운데이므로 무시해도된다.

     
            //result에 한개만 추가한다.
            
        
        
    
    
    
    return str+reverseStr
}