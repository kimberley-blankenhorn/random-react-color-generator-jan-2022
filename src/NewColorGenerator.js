export default function NewColorGenerator() {
  return (
    <div
      style={{
        color: 'blue',
        fontSize: '50px',
        padding: '100px',

        border: 'solid 5px',
        width: '100%',
      }}
    >
      Hello
    </div>
  );
}
// import chalk from 'chalk';
// import randomColor from 'randomcolor'; // import the script

// function
// // User input variables for the color and luminosity
// const inputColor = process.argv[2];
// const brightness = process.argv[3];

// // This will put out the random colors
// const color = randomColor({
//   luminosity: brightness,
//   hue: inputColor,
// });

// //  This is the output with the random color being displayed in the middle but influencing the hash as well
// const multiLine = `  ############################
//   ############################
//   ############################
//   #####                 ######
//   #####    ${color}     ######
//   #####                 ######
//   ############################
//   ############################
//   ############################`;

// // Call the function
// console.log(chalk.hex(color).bold(multiLine));
