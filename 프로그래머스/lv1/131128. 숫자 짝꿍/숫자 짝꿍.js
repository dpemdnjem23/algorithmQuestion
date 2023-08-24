// function solution(X, Y) {
//     var answer = [];
//     //짝꿈을 찾아서 result에 넣기
//     //x,y를 배열로 만든다
    
// const Xarr=    X.split('')
// const Yarr=     Y.split('')

// //x가Y
//     Xarr.forEach((x)=>{
        
//         //x가 y에 속하는경우 y에서 x를 제거
//         if(Yarr.includes(x)){
//             Yarr.splice(Yarr.indexOf(x),1)
//             answer.push(x)
            
//         }

     
//     })
       
//     //가장큰 정수를 만들어라
//     answer.sort((a,b)=>b-a)
    
//                  //x가y를 다 체크했음에도 아무것도 존재하지 않는경우 -1

//  if(answer.length===0){
//            return '-1'
            
//         }
 

//     //x,y의 짝꿍이 0으로만 구성되어 있다면 짝꿍은 0
//         if(Number(answer.join(''))===0){
//             return '0'
//         }

    
//     return answer.join('')
// }
//---------------------------------------------------------------시간초과 해결
//300만*300만 까지 해결해야한다 split 0(n)
function solution(X, Y) {

    //시간 초과 해결 -> 300만*300만 다하는게아니라 객체 접근해서 해결
let answer =[]

const Xarr=    X.split('')
const Yarr=     Y.split('')
const obj = {}

//내림차순으로 배치하여 중복된값들을 처리하기 용이하게
Xarr.sort((a,b)=>b-a)
console.log(Xarr)
//0~9까지 몇개가 있는 센다.
Yarr.forEach((y)=>{
    
    if(obj[y]===undefined){
        obj[y]=1
    }
    
    else{
        obj[y]++
    }
})
    
    Xarr.forEach((x)=>{
        //객체에 접근해서 해당되는 값만 선택해준다. 매번 처음부터 끝까지 훑을 필요가없다
        if(obj[x]!==undefined&&obj[x]!==0){
            obj[x]--
            answer.push(x)
            
        }
        
    })

     if(answer.length===0){
           return '-1'
            
        }
 

    //x,y의 짝꿍이 0으로만 구성되어 있다면 짝꿍은 0
        if(Number(answer.join(''))===0){
            return '0'
        }

    
    return answer.join('')
    console.log(obj)


}
    
