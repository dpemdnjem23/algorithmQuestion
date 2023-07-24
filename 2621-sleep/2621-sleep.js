/**
 * @param {number} millis
 */
async function sleep(millis) {

//1.비동기로 작성하라.
//2. setTimeOut 을이용하여 millis 이후에 실행되도록
 await new Promise(res =>setTimeout(res,millis))
  
    
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */