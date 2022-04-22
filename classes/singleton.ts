( () => {

    class Mutant {
        
        static instance: Mutant

        private constructor(
            public name:string,
            public real_name: string
        ){

        }

        static getInstance(){

            if( !Mutant.instance )
            {
                Mutant.instance = new Mutant('Wolverine' , 'Logan')   
            }

            return Mutant.instance

        }

    }

    class X {

    }


    const mutant1 = Mutant.getInstance();
    const mutant2 = Mutant.getInstance();
    const mutant3 = Mutant.getInstance();
    
    const x1 = new X()
    const x2 = new X()
    const x3 = new X()

    console.log(mutant1);
    console.log(mutant2);
    
    console.log( mutant1 === mutant2 );
    console.log( mutant2 === mutant3 );
    console.log( mutant3 === mutant1 );
    
    console.log( x1 === x2 );
    console.log( x2 === x3 );
    console.log( x3 === x1 );
    

})()