function test(){
    var value1=1;
    let value2 = 2;
    const value3 = 3;

    {
        var value1=40;
        let value2 = 50;
        const value3 = 60;
    
        console.log('Block variables ');
        console.log('value1 : ', value1);
        console.log('value2 : ', value2);
        console.log('value3 : ', value3);
    }

        console.log('function variables ');
        console.log('value1 : ', value1);
        console.log('value2 : ', value2);
        console.log('value3 : ', value3);

}

test();
