describe('findltemsOver20' , function(){
    it('should return  items over 20', function(){
        assert.deepEqual(findItemsOver20(shop), [{name:"bananas", qty:30}])
    })

     it('should return  items that is empty', function(){
        assert.deepEqual(findItemsOver20([]), ([]))
 })
})