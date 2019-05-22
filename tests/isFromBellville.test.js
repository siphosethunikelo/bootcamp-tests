describe('isFromBellville' , function(){
    it('returns true if a registration number is from Bellville' , function(){
        assert.equal( isFromBellville ('CY123'), true )

     
    });
    it('returns false if a registration number is not from Bellville' , function(){
        assert.equal( isFromBellville ('CA123'), false)

     
    });
});