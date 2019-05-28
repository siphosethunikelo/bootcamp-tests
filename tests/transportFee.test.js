describe('transportFee ' , function(){
    it(' returns the right price based on the morning shift that i working at ',function(){
        assert.equal(transportFee("morning"),"R20")

    });
    it(' returns the right price based on the afternoon shift that i working at ',function(){
        assert.equal(transportFee("afternoon"),"R10")
 
});

});

