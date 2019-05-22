function totalPhoneBill(call){
    console.log(call)
  var cellPhone = call.split(', ');
    console.log(cellPhone)
    var callList = [];
    var smsList = [];
    for(var i =0; i <cellPhone.length;i++) {
              var nokia = cellPhone[i];
         //	 console.log(nokia)
                if (nokia.startsWith('s')) {
                  smsList.push(nokia);
                  //console.log(smsList)
      
                    }	else if(nokia.startsWith('c')) {
                          callList.push(nokia);
                          //console.log(callList.length)
                  }
    
              }
                
      var costCall = callList.length * 2.75;
      var costSms = smsList.length * 0.65;
   // console.log(costCall)
    var totalcost = costCall + costSms;
    console.log(totalcost)
    return('R' + totalcost.toFixed(2));
  }