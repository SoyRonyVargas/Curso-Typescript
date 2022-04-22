( () => {

    const hero : string = 'Flash'

    function returnHero () : string {
        return hero
    }
    
    const activateSignal = () : string => hero

    console.log(typeof activateSignal);
    

})()