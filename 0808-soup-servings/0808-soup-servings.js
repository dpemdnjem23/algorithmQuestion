/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    

    
    //A 수프와 B수프가 존재한다.
    //처음에 는 각각의 종류의 n ml 만큼갖고 있다. 
    //100 0 ,  75 25 , 50 50, 25 75 4가지 종류의 작업이 있다고 한다면
    // 동적 프로그래밍 -> 큰문제를 작은 문제로 나눠서 => 재귀 , memo
    
    //매턴마다 동일한 확률로 위 4가지 작업중에 선택한다.(0.25)
    //수프를 대접할 때 그것을 누군가에게 주고는 더 이상 그것을 가지고 있지 않습니다
    
    //남은 수프가 작업을 완료하기에 충분하지 않은 경우 가능한 한 많이 제공합니다. 더 이상 두 종류의 수프가 없으면 멈춥니다.


    
    //B 100이 먼저 다사용할일은 없다, A가 먼저 비어있을 확률과 A와 B가 동시에 비어있을확률 절반을 더한값
    
    
    //ex1. 50 50 출발 2인분 2인분
    // 1. 100 과 0을 동시에 제공 => a를 전부다 제공 1
    // 2. 75와 25 -> a를 전부다 제공  1
    // 3. 50과 50 -> 2개다 동시에 제공 0.5
    // 4. 25와 75 -> B제공 0
    //예시 n=50 0.25(기본)*(1+1+0.5+0)
    // A가 비면 1
    // A와 B 동시에비면 0.5
    // B가 빌일은 없으니 0
    
    //
    
    
    //속도 줄이는법 -> n의 크기를 줄인다.
    //1. 25단위로 끊기므로 25 단위로 끊어주고 -1 을적용
    //     1000000000/25 =40000000

    let memo={}

    

    const soupDP = (a,b) =>{
        
        if(a<=0&&b<=0){ //동시
            // console.log('ab')
            return 0.5
        }
        if(a<=0){ // a먼저
                        // console.log('a')

            return 1
        }
           
        if(b<=0){ //b먼저
                        // console.log('b')

            return 0
        }
    
        
        
   //dp최적화로 배열에 넣자memoization
   //중복된 조합은 넣지않는다 =>{}
        let key =`A-${a} B-${b}`
        
        // console.log(memo)
        if(key in memo){
            return memo[key]
        }  
    memo[key]=0.25*(soupDP(a-4,b-0)+soupDP(a-2,b-2)+soupDP(a-3,b-1)+soupDP(a-1,b-3))

    
        return memo[key]
    }
    
    
        if (n > 4800) {
        return 1.0;
    }
    n = Math.floor((n + 24) / 25);
    
return soupDP(n,n) //n,n으로 시작
    

        
// return n
    
    
    
    
    
    //0.25=()
    
    
};