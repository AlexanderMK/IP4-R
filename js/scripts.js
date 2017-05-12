window.addEventListener( 'DOMContentLoaded', function () {

		const buttonRoolDice = document.querySelector( '.dice-roll-one' );

    function rollDice () {
      const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
        const status = document.getElementById( 'status' );

        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
        const diceTotal = side1 + side2;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

        status.innerHTML = 'You rolled ' + diceTotal + '.';

        if ( side1 === side2 ) {
            status.innerHTML += ' Doubles! You get a free turn!';
    }
  }
    buttonRoolDice.addEventListener( 'click', rollDice, false );
}, false);


window.addEventListener( 'DOMContentLoaded', function () {

		const buttonRoolDice = document.querySelector( '.dice-roll-two' );

    function rollDice () {
      const diceSide1 = document.getElementById( 'dice-side-3' );
        const diceSide2 = document.getElementById( 'dice-side-4' );
        const status = document.getElementById( 'status' );

        const side3 = Math.floor( Math.random() * 6 ) + 1;
        const side4 = Math.floor( Math.random() * 6 ) + 1;
        const diceTotal = side3 + side4;

        diceSide1.innerHTML = side3;
        diceSide2.innerHTML = side4;

        status.innerHTML = 'You rolled ' + diceTotal + '.';

        if ( side3 === side4 ) {
            status.innerHTML += ' Doubles! You get a free turn!';
    }
  }
    buttonRoolDice.addEventListener( 'click', rollDice, false );
}, false);
