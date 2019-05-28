describe('countRegNumber' , function(){
    it('returns all the number of registration numbers in the string ',function(){
        assert.equal(countRegNumber("CA 182736"),1)
    }); 

    it('returns all the number of registration the number of the registration in the string',function(){
        assert.equal(countRegNumber("CA 1235, CD 123456, CF 12364"), 3)
});

});
