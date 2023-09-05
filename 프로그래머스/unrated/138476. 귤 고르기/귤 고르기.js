function solution(k, tangerine) {
    var answer = 0;
    const countTangerine = {}
    tangerine.forEach(tan=>{
        if(countTangerine[tan] === undefined){
            countTangerine[tan] = 1
        }
        else{
            countTangerine[tan]++
        }
    })

    const tangerineGroup = Object.entries(countTangerine).map(([key,value])=>({key,value}))

    tangerineGroup.sort((a,b)=>b.value - a.value)
    for(let i=0;i<tangerineGroup.length;i++){
        if(k - tangerineGroup[i].value <= 0){
           answer++
            break;
        }
        else{
            k -= tangerineGroup[i].value
            answer++
        }
    }
    return answer;
}