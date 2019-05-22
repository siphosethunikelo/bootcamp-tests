describe('countAllFromTown ' , function(){
    it(' registration numbers that is from that town  CL is false ',function(){
        assert.equal(countAllFromTown("CL 124"),false)


    }); 
    it(' registration numbers that is from that town  CY is false ',function(){
        assert.equal(countAllFromTown("CL 345"),false)

});
});