( () => {

    interface Xmen {
        name: string
        real_name: string
    }

    class Mutant implements Xmen {
        constructor(
            public name: string,
            public real_name: string
        ){

        }
        
    }

})()