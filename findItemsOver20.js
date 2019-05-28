function findItemsOver20(shop){
    var pull = [];
    for (var i =0; i<shop.length;i++){
    if(shop[i].qty > 20){
        pull.push(shop[i])
    }
}
console.log(pull)
return pull;
};

  var shop = [{name:"apples",qty:10}, {name:"bananas",qty:30}];

  findItemsOver20(shop);