
function timeConvertor(time) {
    var PM = time.match('PM') ? true : false
    
    time = time.split(':')
    var min = time[1]; 
    if (PM) {
        var hour = 12 + parseInt(time[0],10)
        var sec = time[2].replace('PM', '')
    } else {
        var hour = time[0]
        var sec = time[2].replace('AM', '')       
    }
    if(min<15&&sec<15){
        min=Number(min)+45;
        sec=Number(sec)+45;
    }
    else{
    if(sec>15&&min<15){
      sec=Number(sec)+45;
      min=Number(min)+1;
    }
    else{
        if(min>15&&sec<15){
            hour=Number(hour)+1;
            min=Number(min)-45;
            sec=Number(sec)+45;
        }
        else{
            if(min>15&&sec>15){
                hour=Number(hour)+1;
                min=Number(min)-14;
                sec=Number(sec)-45;
            }
        }
    }
    }
    
    console.log(hour + ':' + min + ':' + sec);
}

timeConvertor('07:03:15PM'); // "19:03:15"

timeConvertor('1:53:55AM'); // "1:53:55"