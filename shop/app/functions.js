
/**
 * Alert function 
 */
 const setAlert = ( msg , type = 'danger') =>  {
    return `<p class="alert alert-${type} d-flex justify-content-between">${ msg } <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}


/**
 * get all LS data 
 * @param {*} key 
 */
const readLSData  = (key) => {

    if( localStorage.getItem(key) ){
        return JSON.parse(localStorage.getItem(key));
    } else {
        return false;
    }

}


/**
 * Set value LS
 */
const createLSData = (key, value) => {

    // init val 
    let data = []; 

    // check key exists or not 
    if( localStorage.getItem(key) ){
        data = JSON.parse(localStorage.getItem(key));
    }
    // now push data to LS 
    data.push(value);
    // set data 
    localStorage.setItem(key, JSON.stringify(data)); 
    

}

/**
 * Update our LS Data
 */
const updateLSData = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array))
}


/**
 * Time counter 
 */
const futureTimeCoundown = (date, time, counter, interval = null, alerm = null) => { 



     // get timestamps 
     let start_time = Date.now();
     let end_time = new Date(date + ' ' + time);
     let order_time = Math.floor(Math.abs(end_time.getTime() -  start_time));

     // get val form time 
     let total_sec = Math.floor(order_time / 1000);
     let total_min = Math.floor(total_sec / 60 );
     let total_hour = Math.floor(total_min / 60 );
     let total_day = Math.floor(total_hour / 24 );


     let hours = total_hour - ( total_day * 24 );
     let min = total_min - ( total_day * 24 * 60 ) - ( hours * 60 );
     let sec = total_sec - ( total_day * 24 * 60 * 60 ) - ( hours * 60 * 60 ) - (min * 60);


     if(total_sec <= 0){
         console.log('sesss');
         alerm.play();
         clearInterval(interval);
     }

     counter.innerHTML = `<h1>${ total_day } Days : ${ hours } Hours : ${ min } Min : ${ sec } Sec</h1>`;





}

/**
 * Counter per
 */
const counterPer = (start_time, end_time) => {

    let time_diff = end_time - start_time;
    let time_change = end_time - Date.now();

    return Math.floor((100 * time_change ) / time_diff);
}


