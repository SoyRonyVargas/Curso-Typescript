( () => {

    abstract class Mutant {

        constructor(
            public name: string,
            public real_name: string,
        ){

        }

    }

    class Xmen extends Mutant {

    }

    const wolverine : Mutant = new Xmen('W' , 'Logan')

    console.log(wolverine);

})()