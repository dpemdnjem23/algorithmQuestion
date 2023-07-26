/**
 * @param {Function} fn
 */
function memoize(fn) {
    

    //sum, fib, factorial을 파악
    //input된 sum , fib , fcatorial이 memoize(fn) => fn= sum, fib, fac
    //배열에 다시 넣는다.
        const memo = {}
        
    return function(...args) {
            //...args =>[[1,2]] 풀어서 1,2 / 2,2 / 없음 /1,2 / 없음
        //call은 함수 호출해서 계산 , getCallCount 호출한 call이 몇갠지 중복x
   
        
 //fn(...args) =>[4,4,2,3,3] =>call은 문제없음, getCallCount문제
// 함수실행시 call count되게끔
// 한개씩 더하게끔 되어있다. 4 4 call할때마다 callcount가 1개씩 올라간다.
//[] 아무것도 없을경우 => getcallcount 하도록함.
        
//중복된값은 memo 해놓고 넘어가고, 새로운값만 계산하도록
// 배열, 객체를 만들고 값을 확인해가는것
        // console.log(memo[args])
        
        if (memo[args]===undefined){
            //args는 undefined,1,2로 구성되어있다. {}를 이용하여 key,value 짝을지어 중복된값을 방지한다.
            //undefined => call값 
            
            memo[args]=fn(...args)
        }
        
        //return을 한다면 배열에 자동으로 값이 삽입 
        return memo[args] 
        
        
// return fn(...args)

        
    
    }
    
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */