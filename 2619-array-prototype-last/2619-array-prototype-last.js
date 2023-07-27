Array.prototype.last = function() {
    
    //arr.last 만들기 배열에서 마지막을찍어라
  
    //this -> input으로 들어오는 배열
    
    
    //배열에 아무것도 없다면 -1
    if(this.length===0){
        return-1
    }
    else{
          //배열의 마지막 => 배열의 크기-1
        
        return this[this.length-1]
        
        
    }
    
    
    
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */