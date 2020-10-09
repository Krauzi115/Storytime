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
    text: 'You picked Terra! Nice. Terra and her family have recently moved from Colorado to Racoon city. However, The Umbrella Corporation is still up to their dirty ways and releases a new starin of zombie virus on the population, causing another zombie outbreak. Now in the midst of all the choas and confucion, a zombie has broken into her house. Terra sees a gun and a fresh banana. What weapon will she choose?' ,
    prompts: [
      { label: 'Banana', nextScreen:'banana_screen'  },
      { label: 'Gun', nextscreen: 'gun_screen' },
    ]
  },

  'banana_screen': {
      isEndingScreen: true,
      text: 'Terra enjoyed her final meal of a fresh banana, but it was not an effective weapon against the zombie. The zombie ate her, game over'
  },


  'gun_screen': {
      type: 'multiple_choice',
      text: 'Terra picks up the gun and kills the zombie, avoiding being eaten alive by the foul creature of the undead. You are now faced with a choice to search for your family in the house or make a run for it. Which will you choose?',
        prompts: [
            { label: 'Search for family', nextScreen: 'search_screen' },
            { label: 'leave family and exit the house', nextScreen: 'leave_screen' }
        ]
    },


    'search_screen': {
        type: 'multiple_choice',
        text: 'You find your family and collect them safely and exit the house, but you are faced with another choice. Walk around on the streets or get in the car and drive?',
        prompts: [
          { label: 'Get in the car and drive', nextScreen: 'familycar_screen' },
          { label: 'Walk down the street', nextScreen: 'familyambush_screen' },
        ]
      },

      'familycar_screen': {
          type: 'multiple_choice',
          text: 'You take your family and drive in the car, making your way to a crossroads. Do you drive into the city or outside of the city limits?',
          prompts: [
              { label: 'Drive into the city to try and get supplies and search for other survivors', nextScreen:'familydeath_screen' },
              { label: 'Get out of the city, with no food or water, and limited gas in your car', nextScreen: 'familylive_screen' }
          ]
      },

        'familylive_screen': {
            isEndingScreen: true,
            text: 'Terra and her family have successfully driven outside of Racoon City escaping the evil horde of the undead and the Umbrealla Corporation',
        },

        'familydeath_screen': {
            isEndingScreen: true, 
            text: 'You drive into the city and are rushed by the entire infected city population, worst of all the Umbrella Corporation has sent in soldiers to clean the scene. You and your family have perished.'
        },

        'familyambush_screen': {
           isEndingScreen: true,
           text: 'You walked into the street with your family and were all attacked by your undead neighbors. You have all perished.'   
        },

        'leave_screen': {
            isEndingScreen: true, 
            text: 'You have escaped the house and but feel guilty about leaving your family, so you rush back inside to save them but it is too late, they have become zombies and eat you'
            
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
