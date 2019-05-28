 describe('mostProfitableDepartment', function(){
     it('finding the most profitable department, expected answer is hardware', function(){
        assert.deepEqual(mostProfitableDepartment([{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},]), 'hardware' );
     
})
it('finding the most profitable department, expected answer is carpentry ', function(){
    assert.deepEqual(mostProfitableDepartment([{department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},]), 'hardware' );
 
 });
});