//OFULLSTÄNDING FÖR ATT JAG INTE FÖRSTÅR


//1 och 2

// for (let i = 0; i < 6; i++) {
//     let text = '';
//     for (let j = 0; j < 8; j++) {
//       if (j === 0) {
//         text = `${text}#`;
//       } else {
//         text = `${text}.`;
//       }
//     }
//     console.log(text);
//   }


//3

// import { getQuestion } from './readline.js'

// const [question, close] = getQuestion()

// let input = ''
// while( input !== 'q' ) {
// 	console.log();
// 	console.log('Huvudmeny. Välj ett alternativ:');
// 	console.log('1. Figur a');
// 	console.log('Q. Avsluta');
// 	input = await question('> ')
// 	input = input.toLowerCase()

// 	if( input == 'q' ) {
// 		console.log('Avslutar...');
// 	}
// 	else if( input === '1' ) {
// 		figurA()
// 	}
// }

// function figurA() {
// 	console.log('Visar figur A...');
// 	console.log();
// }




// close()



// //4

import { getQuestion } from './readline.js'

const [question, close] = getQuestion()

let input = ''
while( input !== 'q' ) {
	console.log();
	console.log('Huvudmeny. Välj ett alternativ:');
	console.log('1. Figur a');
	console.log('2. Figur b');
	console.log('Q. Avsluta');
	input = await question('> ')
	input = input.toLowerCase()

	if( input == 'q' ) {
		console.log('Avslutar...');
	}
	else if( input === '1' ) {
		figurA()
	}
	else if( input === '2' ) {
		figurB()
	}
}

function figurA() {
	console.log('Visar figur A...');
	console.log();
}

function figurB() {
	console.log('Visar figur B...');
	console.log();
}




close()

