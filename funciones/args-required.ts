( () => {

    const fullName = ( firstname: string , subname : ( string | number ) ) : string => `${ firstname } - ${ subname }`

    const name = fullName('Tony', 1)

    console.log({ name });
    

})()