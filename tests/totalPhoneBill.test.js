describe('totalPhoneBill' , function(){
    it('Calculate the total bill for the data provided when you make a call',function(){
        assert.equal(totalPhoneBill("call"),"R2.75")
    });
    it('Calculate the total bill for the data provided when you want to sent sms',function(){
        assert.equal(totalPhoneBill("sms"),"R0.65")
});

});
