( () => {

    const getNever = () : never => {

        throw new Error('Error')

    }

    const bucle = () : never => {

        while( true )
        {
            console.log('siempre');
        }

    }

    getNever()

    bucle()

})()