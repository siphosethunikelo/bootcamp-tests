describe('findltemsOver' , function(){
    it('should return tems that is over', function(){
        var threshould = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]
        var expectted = [{"name":"pears","qty":37}];
        assert.deepEqual( findItemsOver(threshould, 30), expectted)
    })

    it('should if an invalid input', function(){
       
        assert.equal( findItemsOver("23222425", 30),  false)
    })
//     it('should if return  the tems  high quality', function(){
//     //   var expectted = [{"name":"pears","qty":37}]; false
//         assert.equal( findItemsOver("threshould", 30),false )
// })

})