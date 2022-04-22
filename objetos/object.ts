( () => {

    type Hero = {
        name: string
        age: number
        powers: string[]
        getName?: () => string
    }

    let flash: (string | number | Hero) = 'Barry'

    flash = 20

    flash = {
        age: 10,
        name: 'Barry Alen',
        powers: [],
    }

    console.log(flash);

    // console.log(flash?.getName!());

})()