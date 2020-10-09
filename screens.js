let process = require('process');
let readlineSync = require('readline-sync');

let userResponses = {};

let allScreens = {
  'start_screen': {
    type: 'multiple_choice',
    text: 'Ahoy weary traveler! Who are you?',
    prompts: [
      { label: 'Continue', nextScreen: 'character_screen' },
    ]
  },
  'character_screen': {
    type: 'multiple_choice',
    text: 'Choose your character!',
    prompts: [
      { label: 'Malena', nextScreen: 'malena_intro' },
      { label: 'Jesse', nextScreen: 'jesse_intro' },
      { label: 'Terra', nextScreen: 'terra_intro' },
    ]
  },

  // MALENA
  'malena_intro': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Morgan', nextScreen: 'morgan_screen' },
      { label: 'Mackenzie', nextScreen: 'makenzie_screen' },
    ]
  },
  'morgan_screen': {
    type: 'multiple_choice',
    text: 'You picked Morgan! Nice.',
    prompts: [
      { label: 'TCBSR', nextScreen: 'morgan_TCBSR' },
      { label: 'DDA', nextScreen: 'morgan_DDA' },
      { label: 'STUDD', nextScreen: 'morgan_STUDD' },
    ]
  },
  'makenzie_screen': {
    type: 'multiple_choice',
    text: 'You picked Makenzie! Nice.',
    prompts: [
      { label: 'TCBSR', nextScreen: 'makenzie_TCBSR' },
      { label: 'DDA', nextScreen: 'makenzie_DDA' },
      { label: 'STUDD', nextScreen: 'makenzie_STUDD' },
    ]
  },
  'morgan_TCBSR': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'morgan_DDA': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'morgan_STUDD': {
    isEndingScreen: true,
    text: 'Win!',
    prompts: []
  },
  'makenzie_TCBSR': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'makenzie_DDA': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'makenzie_STUDD': {
    isEndingScreen: true,
    text: 'Win!',
    prompts: []
  },


  // JESSE
  'jesse_intro': {
    type: 'multiple_choice',
    text: 'You picked Jesse! Nice.',
    prompts: [
      { label: 'JL bat', nextScreen: 'JL_screen' },
      { label: 'TLS bat', nextScreen: 'TLS_screen' },
      { label: 'MC bat', nextScreen: 'MC_screen' },
    ]
  },
  'JL_screen': {
    type: 'multiple_choice',
    text: 'You picked JL bat! Nice.',
    prompts: [
      { label: 'Big League Chew', nextScreen: 'JL_BLC' },
      { label: 'Sunflower Seeds', nextScreen: 'JL_SS' },
    ]
  },
  'TLS_screen': {
    type: 'multiple_choice',
    text: 'You picked TLS bat! Nice.',
    prompts: [
      { label: 'Big League Chew', nextScreen: 'TLS_BLC' },
      { label: 'Sunflower Seeds', nextScreen: 'TLS_SS' },
    ]
  },
  'MC_screen': {
    type: 'multiple_choice',
    text: 'You picked MC bat! Nice.',
    prompts: [
      { label: 'Big League Chew', nextScreen: 'MC_BLC' },
      { label: 'Sunflower Seeds', nextScreen: 'MC_SS' },
    ]
  },
  'JL_BLC': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'JL_SS': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'TLS_BLC': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'TLS_SS': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },
  'MC_BLC': {
    isEndingScreen: true,
    text: 'Win!',
    prompts: []
  },
  'MC_SS': {
    isEndingScreen: true,
    text: 'Lose!',
    prompts: []
  },









  'terra_intro': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
  },




















  'game_over': {
    isEndingScreen: true,
    text: 'All done!',
    prompts: []
  },
  'game_over': {
    isEndingScreen: true,
    text: 'All done!',
    prompts: []
  }
};

function displayScreen(screenName) {
  console.log('----- DEBUG INFO -----');
  console.log('screenName is:', screenName);
  console.log('userResponses is:', userResponses);
  console.log('----- DEBUG INFO -----');
  console.log('');

  let screen = allScreens[screenName];

  if (screen.isEndingScreen) {
    console.log(screen.text);
    return;
  }

  if (screen.type === 'multiple_choice') {
    console.log(screen.text);

    for (let i = 0; i < screen.prompts.length; i += 1) {
      let prompt = screen.prompts[i];
      let position = i + 1;
      console.log(`[${position}] ${prompt.label}`)
    }

    let choice = readlineSync.question('What is your choice? ');

    // TODO: Handle bad user input (not a number, out of range, etc.)
    let index = parseInt(choice) - 1;
    let chosenPrompt = screen.prompts[index];

    userResponses[screenName] = chosenPrompt.label;

    console.log(`You chose '${chosenPrompt.label}'`);
    displayScreen(chosenPrompt.nextScreen);

  } else if (screen.type === 'free_entry') {
    console.log(screen.text);

    let choice = readlineSync.question(screen.prompt.label + ' ');

    userResponses[screenName] = choice;
    console.log(`You entered: '${choice}'`);

    displayScreen(screen.prompt.nextScreen);
  } else {
    console.error(`Error: Unknown screen type: '${screen.type}'`);
    process.exit(1);
  }
}

displayScreen('start_screen');
