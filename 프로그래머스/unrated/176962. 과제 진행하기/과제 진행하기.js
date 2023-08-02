function solution(plans) {
    var answer = [];
    
    
    // 과제를 시작하면 배열에 넣는다.ㄱ
    // 시간을 분으로 바꿔 계산을 용이하게 한다.
    
    //plans를 먼저 바꿔준다.
    
        //converTime으로 계산이 편하게 분으로 변환 함수
        const converTime = (num) =>{
        //[a,b]의 형태
        const [a,b] = num.split(':')
        
        return Number(a)*60+Number(b)

        
    }

    //분으로 변환해서 plans에 삽입
    for(let i =0 ; i<plans.length;i++){
      plans[i][1] =  converTime(plans[i][1]) 
      plans[i][2] = Number(plans[i][2])
    }

    
    //과제는 시작하기 한 시각 이 되면 시작한다 -> 시작시간 순서대로 정렬한다면 배열에서 순서대로 꺼내면된다.
    
    plans.sort((a,b)=>{
        return a[1]-b[1]
    })
    
    //새로운 과제를 시작할 시간되었을때, 기존에 진행 중이던 과제는 멈추고, 새로운 과제 시작
    
    // 사건이 일어날때의 시간만 기록한다.
    
    let currentTime = plans[0][1];
    let stack = []
    let end = 0
            // [["music", "12:20", "40"],["computer", "12:30", "100"], ["science", "12:40", "50"], ["history", "14:00", "30"],  ]
    
    //music 시작 -> stack에 푸쉬 -> 다음 시간 계산 12:30-12:20  ,["music", "12:20", "30"],currentTime = 12:30,        
        

 
    for(let i = 0 ; i<plans.length-1;i++){
        
        const [name,time,remain] = plans[i]
        const [name2,time2,remain2] = plans[i+1]
        
        //AAA가 12:00 에 stack에 들어감
        //['aaa']
        // aaa는 멈추고 bbb시작
        // bbb에서 ccc
        //1. while을 이용해서 stack을 모두 처리해야한다.
        //2. while을 이용하는데 stack이 남아있는데 나머지가 처리되는경우
        // 순서대로 딱딱 떨이지는 경우[["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]
        if(time+remain <= time2){
            answer.push(name)
            
            currentTime =time2-time-remain
                        
            while(stack.length){
                const [Pname,Ptime,Premain] = stack.pop()
                //stack을 달고오는 경우중에 stack이 마지막에 처리 돼야하는경우
                if(Premain<=currentTime){
                    
                   currentTime-=Premain
                answer.push(Pname)
                }
                else{
                    stack.push([Pname,Ptime,Premain-currentTime])
                    break;
                }
                
                
            }
            
            
        }
        else{
            
            stack.push([name,time,remain-(time2-time)])
            
            
            
        }
        
      
    
        
    }

      answer.push(plans[plans.length - 1][0]);

  while (stack.length) {
    answer.push(stack.pop()[0]);
  }

    return answer;
}