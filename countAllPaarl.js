function countAllPaarl(location){
    var reg = [];
   // console.log(location)
  var reglist = location.split(', ')
  var motor = reglist
    for(var i =0;i < reglist.length;i++){
     // console.log(location)
      if(reglist[i].startsWith('CJ')){
        reg.push(reglist[i]);
        
      }
      
    }
    return reg.length;
  }
      
    