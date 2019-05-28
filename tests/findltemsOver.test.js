describe('findItemsOver' , function(){
    it('should return tems that have a high quality ', function(){
      assert.deepEqual(findItemsOver(threshould),[{name:"john",age:30}])
    })
})