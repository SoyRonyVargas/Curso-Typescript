( () => {

    const addNumber = ( a : number , b : number ) => a + b 
    const greet = ( name : string ) => `Hola ${name}`
    const sayHello = () => `Hello toast`

    // let myFunction : ( a : number , b : number ) => number;
    let myFunction : Function

    // myFunction = 10

    // console.log({ myFunction });
    
    myFunction = addNumber
    
    myFunction( 1 , 2 )
    
    myFunction = greet
    
    myFunction('Mario')
    
    myFunction = sayHello

    console.log({ myFunction });

})()