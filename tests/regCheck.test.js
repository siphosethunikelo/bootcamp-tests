describe('regCheck' , function(){
    it('check if a registration number is endswith GP is true. ',function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true)


    }); 
    it(' check if a registration number is endswith MP is false',function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false)
  

});

});