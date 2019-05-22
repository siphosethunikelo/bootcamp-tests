describe('greet' , function(){
    it('this will return Hello siphosethu' , function(){
        assert.equal(greet("siphosethu"), "Hello, siphosethu");

     
    });
    it('this will return Hello nikelo' , function(){
        assert.equal(greet("nikelo"), "Hello, nikelo");

     
    });
    it('this will return Hello my number' , function(){
        assert.equal(greet("number"), "Hello, number");

     
    });
});