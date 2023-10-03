function solution(arr) {
 const answer = [0, 0];
    
    
    //같은 숫자가 나오면 그숫자로 압축한다.
    //4개로 쪼개고 4개로 쪼개는 과정을 반복 ->재귀
    
    
    
    //병합가능한지 체크
    //row col 좌표와 정사각형의크기 n
    const check=(x,y,n)=>{
         if (n === 1) return answer[arr[x][y]]++;
        
        let flag = false;
        for(let i=x;i<x+n;i++){
            for(let j = y;j<y+n;j++){
                
                if(arr[x][y]!==arr[i][j]){
                    flag = true;
                    break;
                }
            }
        }
     
      //1,0 을 각각 더한다
        if(!flag){
            return answer[arr[x][y]]++
        }
        n/=2
        
        check(x,y,n)
        check(x+n,y,n)
        check(x,y+n,n)
        check(x+n,y+n,n)
    }
    
    check(0,0,arr.length)
 
    //압축
    
       //4개로 쪼개는 과정이 필요하다. 1

return answer
//q1 q2 a3 a4 
}


//     const len = arr.length
// // 1사 2사 분면에 쓸 요소만 가져온다.
//     const q1 = arr.splice(0,len/2)
//     //splice는 arr자체를 삭제하므로 map을 통해서 절반을 삭제하면
//     //q2엔 삭제한 요소가 남고 q1엔 삭제되고 남은것
//     const  q2= arr.map(row=>row.splice(len/2, len/2))
//     //나머지 34분면요소
//     const   q3= arr
//     //마찬가지로 삭제
//     const   q4=q3.map(row=>row.splice(len/2, len/2))
//           // q4=
    
    