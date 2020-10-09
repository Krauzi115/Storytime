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
  'malena_intro': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
  },
  'morgan': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
  },  
  'makenzie': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
  },
  'makenzie_TCBSR': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
  },
  'makenzie_DDA': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
  },
  'makenzie_STUDD': {
    type: 'multiple_choice',
    text: 'You picked Malena! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
  },



  'jesse_intro': {
    type: 'multiple_choice',
    text: 'You picked Jesse! Nice.',
    prompts: [
      { label: 'Continue', nextScreen: 'motto_screen' }
    ]
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