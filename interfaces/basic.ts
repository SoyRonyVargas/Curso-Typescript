( () => {

    interface Hero {
        name: string
        age: number
        powers: string[]
        getName: ( id: string ) => string
    }

    let flash: Hero

    flash = {
        age: 10,
        name: 'Barry Alen',
        powers: [],
        getName(){
            return this.name
        }
    }

    console.log(flash.getName("s"));

})()