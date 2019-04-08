function digitalClock(){
    var date =  new Date ()+"";
    var hours = date.getHours()+'';
    var Minutes = date.getMinutes () + '';
    var seconds = date.getSeconds();
    var Day = date.getDay ();

    if(hours.length < 2){
        hours='0'+ hours;
    }
    if(Minutes.length<2){
        minutes = '0'+minutes;
    }
    if(seconds.length<2){
        seconds = '0'+ seconds;
    }
    var weekDay =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var clock = weekDays[Day]+''+hours+':'+ minutes + ':'+ seconds;

    document.getElementById('clock').lnnerHTML=clock;

    setInterval(digitalClock,1000);
};