function solution(phone_book) {
    var answer = true;
    //한 번호가 다른 번호의 접두어 인경우가 있는지
    //119 가 다른번호의 접두어인지.
    //97674223이 다른번호의 접두어 인지.
    
    //phone_book에서 하나를 꺼내서 다른 요소와 전부 비교
        phone_book.sort()
    for(let i = 0 ; i<phone_book.length - 1; i++){
        
        //접두어 판별법
        if(phone_book[i]===phone_book[i+1].substring(0, phone_book[i].length)){
                console.log(phone_book[i])

            return false}
    }


 
    
    return true
    
}