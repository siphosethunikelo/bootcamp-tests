describe('countAllPaarl' , function(){
    it('check if registration numbers is starsWith CJ Paarl is true ',function(){
        assert.equal(countAllPaarl("CJ"), true)


    }); 
    it('check if registration numbers of paarl is endWith CA is false ',function(){
        assert.equal(countAllPaarl("CA"),false )

});

});