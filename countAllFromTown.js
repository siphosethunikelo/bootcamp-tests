function countAllFromTown(town,location){
    var reg = [];
  //console.log(town)
  var reglist = town.split(',')
  var car = reglist
  console.log(reglist)
  for(var i=0;i<reglist.length;i++){
   //console.log(reglist + ' ' + location)
    var plate = reglist[i].trim()
  if(plate.startsWith(location)){
    //console.log('iuytre')
    reg.push(reglist[i])
  }
  
  }
    //console.log(reg)
    return (reg.length);
  } 
  