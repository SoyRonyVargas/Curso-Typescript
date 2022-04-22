( () => {

    class Avenger {
        constructor(
            public name: string,
            public real_name: string
        ) {
            console.log('avenger llamado');
        }

        protected getFullName(){
            return this.name.concat(' ' , this.real_name)
        }

    }

    class Xmen extends Avenger {
        
        constructor(
            name: string,
            real_name: string,
            public isMutant: boolean    
        ){
            super( name , real_name )
        }
        
        public getNameDesdeXmen(){
            return super.getFullName()
        }
        
        get fullName(){
            return `${this.name} - ${this.real_name}`
        }

        set fullName( name: string ){
            this.name = name
        }

    }

    const wolverine = new Xmen('Wolverine' , 'Logan', true )

    console.log(wolverine);
    console.log(wolverine.fullName);
    

})()