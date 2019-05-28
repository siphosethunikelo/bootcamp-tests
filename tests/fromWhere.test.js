describe('fromWhere' , function(){
    it(' should returns the car that is from town',function(){
        assert.equal(fromWhere("CY"),"Bellville")
    });
    it(' should returns the car that is from town called CPT',function(){
        assert.equal(fromWhere("CA"),"Cape Town")

});
it(' should returns the car that is from the town near',function(){
    assert.equal(fromWhere("CJ"),"Paarl")

});

});
