//u,v로 분리하는과정
const balancedBracket = (string) =>{
 
    const stack = []
    let leftCount =0, rightCount = 0
    
    for(let i = 0; i<string.length;i++){
        
        if(string[i]==='('){
            
            stack.push('(')
            leftCount++
        }
        else if(string[i]===')'){
            stack.push(')')
            rightCount++
        }
        //두개가 같으면 균형잡힌 괄호 문자열이다.
        
        if(leftCount===rightCount){
            break
        }
        
    }
// [u,v]  -> u는 무조건 균형잡힌 괄호 문자열 이어야한다. 나머지가 v
//결과에 따르면 stack은 () 균형이 딱맞으면 멈추기 때문에 이것을 u로 사용한다.
//u를 제외한 나머지 v는 string.slice()
    return [stack.join(''),string.slice(stack.length)]
}

//u,v 분리하고 "올바른 괄호 문자열" 체크

const correctBracket  = (string) =>{
    //올바른 괄호 문자열은 '()' 짝도맞아야함 '()','(())'
    const stack = []
    
    for(let i = 0 ;i<string.length-1;i++){
    
        //'(),)(' , '()()',
        //( ()() )   
        //( ( )) (( ) ) ( 1개남는다.
        //'()))((()' 일치할때 추가 삭제를 통해 () 이러한 구조가 반복이된다면
        //끝에있는 ) 를 제외하고 계산하기때문에 ( <- 1개가 남는다면 올바른 괄호 문자열이라한다.
        if(string[i]==='('&&string[string.length-1]===')'){
            console.log(string[i],'string')
            stack.push(string[i])
        }
        else{

            stack.pop()
        }

        
        

        
    }
    return stack.length===1
    
    
    
}


function solution(p) {
    var answer = '';
  
//w는 균형잡힌 괄호 문자열 u, v로 분리 u는 분리x v는 빈문자열도 가능
    
    //문자열 u가 올바른 괄호 문자열 이라면 => '()' 문자열 v에대해 1단계 부터
    
    //균형잡힌 괄호 문자열 '(' ')' -> 짝이맞는경우    
    
    
    //1.
    if(p===''){
        return ''
    }
    //2.
    const [u,v] = balancedBracket(p)
    
    //3. u가 올바른 괄호 문자열 이라면 1번부터 다시 시작
    if(correctBracket(u)){
        console.log('시작')
        //수행한 결과 3.1
        const result = u + solution(v)
        return result
        
        
    }
//4.
    else {
        
        
        // const result = +'('
        //4-4 첫번째 마지막 문자 제거, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙인다.
        
        // console.log(u,'uuuuuuuu')
        const convert = u.substr(1, u.length - 2).split('').map(v=>v===')' ? '(' :')').join('')
    
                // console.log(convert,'c')

        
                //4-1~3
        const result = '('+solution(v)+')' + convert
        
        // console.log(result)
         return result

        
        
        
        
    //4-5
        
        
        
        
        
    }
    
        console.log(u,v,'stack')

    
    // return a
}