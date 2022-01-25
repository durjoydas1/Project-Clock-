setInterval(mytime, 1000);
function mytime(){
    let fulltime = new Date();
    let H = fulltime.getHours();
    let M = fulltime.getMinutes();
    let S = fulltime.getSeconds();
    let D = fulltime.getDay();
    let P = "";
    let date = fulltime.getDate();
    let month = fulltime.getMonth() + 1;
    let year = fulltime.getFullYear();
    (0<=H<=12)? P = 'AM' : P = 'PM';
    (H>12)? H = H -12 : H = H; 
    (H<10)? document.getElementById('hour').innerHTML = "0" + H: document.getElementById('hour').innerHTML = H;
    (M<10)? document.getElementById('minute').innerHTML = "0" + M: document.getElementById('minute').innerHTML = M;
    (S<10)? document.getElementById('second').innerHTML = "0" + S: document.getElementById('second').innerHTML = S;
    document.getElementById('period').innerHTML = P;
    (date<10)? date = '0'+date: date = date;
    (month<10)? month = '0'+month: month = month;
    document.getElementById('date').innerHTML = `${date}/${month}/${year}`;
    switch(D){
        case 0:
            document.getElementById('bar').innerHTML = 'Sunday';
            break;
        case 1:
            document.getElementById('bar').innerHTML = 'Monday';
            break;
        case 2:
            document.getElementById('bar').innerHTML = 'Tuesday';
            break;
        case 3:
            document.getElementById('bar').innerHTML = 'Wednessday';
            break;
        case 4:
            document.getElementById('bar').innerHTML = 'Thursday';
            break;
        case 5:
            document.getElementById('bar').innerHTML = 'Friday';
            break;
        case 6:
            document.getElementById('bar').innerHTML = 'Satarday';
            break;
    }
    
    
}

