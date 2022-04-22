( () => {

    const fullName = ( firstname: string , subname?:string ) : string => `${ firstname } - ${ subname || 'NO NAME' }`

    const name = fullName('Tony')

    console.log({ name });
    

})()