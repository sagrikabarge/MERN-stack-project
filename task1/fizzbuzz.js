function fizzbuzz(i) {

    if ((i % 15) == 0){
        return('FIZZ BUZZ');
    }
    

    else if (i % 3 == 0) {
        return('FIZZ');

    }
    
    else if (i % 5 == 0){
        return('BUZZ');

    }
    
    else{
        return (i);
    }
    
    //console.log(i);

}

module.exports = fizzbuzz ;
