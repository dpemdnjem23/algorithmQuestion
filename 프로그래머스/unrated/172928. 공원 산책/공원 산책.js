function solution(park, routes) {
    var answer = [0,0];
    let start = [0,0]
    const prepos = [0,0]
    // 공원 가로세로 길이
  const maxRow = park.length - 1; // ->
  const maxCol = park[0].length - 1; 
    
    const dist = {E:[0,1],S:[1,0],W:[0,-1],N:[-1,0]}
    
    //장애물 판별
    const validate = (row,col)=>{
        
        console.log(row,col,maxRow,maxCol)
        return row>maxRow||row<0||col<0||col>maxCol
        
    }
    //지다다니는길 
    //00
    //routes에 따라 이동한다.
    //e 오른쪽 s 아래쪽 w 왼쪽 n 위쪽
    //routes를 통해 park를 순회 한다. 만약ㅌ
    //만약 장애물을 지나거나, 밖으로 나가는경우는 이동하지않는다.
    
    //[0s0
    // 000   
    // 0x0 
    // 000]    
    
    //시작점의 좌표를 잡아야한다.
    park.forEach((el,idx)=>{
        const st = el.indexOf('S')
        if(st>-1){
                    start=[idx,st]

        }
    })
    
    
    routes.forEach((route)=>{
        const [dir,num]= route.split(' ')
      
        let curpos= [...start]
        let next =false;
        
        for(let i=0 ;i<num;i++){
            
            // start\
            curpos[0]+=dist[dir][0]
            curpos[1]+=dist[dir][1]
          
            //장애물 이나 공원을 벗어나면 이동하지 않는다.
            if(validate(curpos[0],curpos[1])){
                console.log('공원')
                next=true
                break;
            }
            
            console.log(curpos,park[curpos[0]][curpos[1]])
            if(park[curpos[0]][curpos[1]]==='X'){
                next=true
                break;
            }
            
            
        }
        if(!next){
        start=curpos
    }
          

        // dist.dir
        
        
    })
    
    return start;
}