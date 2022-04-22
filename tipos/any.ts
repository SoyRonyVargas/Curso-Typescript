( () => {

    let avenger: any = 123

    avenger = 'Avengers end game'

    /* ---------------------------- CASTEO O CASTING ---------------------------- */

    console.log((avenger as string).charAt(0));

    avenger = 3.1416

    console.log((<number>avenger).toFixed(2));
    console.log(<number>avenger.toFixed(2));

})()