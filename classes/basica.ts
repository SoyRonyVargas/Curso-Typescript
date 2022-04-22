( () => {

    class Avenger {
        
        static avgAge: number = 15;

        // static getAvg(){
        //     return this.name
        // }

        constructor( 
            private name: string , 
            private team : string 
        ){
            
        }

        public bio(){
            return ``
        }

    }

    const antman = new Avenger('Prueba' , 'sexo')

    console.log(antman);
    // console.log(Avenger.getAvg());

})()