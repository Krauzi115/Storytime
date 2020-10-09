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
    text: 'You wake up at the NCA Cheer finals in Daytona Florida. You are competing for Navarro College under legend Monica Almada. Gabi Butler is concussed and you are sent in by Monica to compete in her place and must choose a partner.',
    prompts: [
      { label: 'Morgan', nextScreen: 'morgan_screen' },
      { label: 'Mackenzie', nextScreen: 'makenzie_screen' },
    ]
  },
  'morgan_screen': {
    type: 'multiple_choice',
    text: 'You picked Morgan! Decide which move to pull off. Choices are Tripple Canopy Banana Split Reverse, David Decastro Acceleration, and Stunt Tossup Double Destabilizer',
    prompts: [
      { label: 'TCBSR', nextScreen: 'morgan_TCBSR' },
      { label: 'DDA', nextScreen: 'morgan_DDA' },
      { label: 'STUDD', nextScreen: 'morgan_STUDD' },
    ]
  },
  'makenzie_screen': {
    type: 'multiple_choice',
    text: 'You picked Makenzie! Decide which move to pull off. Choices are Tripple Canopy Banana Split Reverse, David Decastro Acceleration, and Stunt Tossup Double Destabilizer',
    prompts: [
      { label: 'TCBSR', nextScreen: 'makenzie_TCBSR' },
      { label: 'DDA', nextScreen: 'makenzie_DDA' },
      { label: 'STUDD', nextScreen: 'makenzie_STUDD' },
    ]
  },
  'morgan_TCBSR': {
    isEndingScreen: true,
    text: 'While performing the TCBSR, the person catching you slips on a banana peel and your back is broken',
    prompts: []
  },
  'morgan_DDA': {
    isEndingScreen: true,
    text: 'The enemy team sabotages the DDA performance by releasing wild jaguars into the NCA facility and you lose and are killed',
    prompts: []
  },
  'morgan_STUDD': {
    isEndingScreen: true,
    text: 'You perform the STUDD flawlessly and win the NCA Championship becoming a friend of Monica for life',
    prompts: []
  },
  'makenzie_TCBSR': {
    isEndingScreen: true,
    text: 'The TCBSR final pyramid structure loses balance and a rainstorm collapses the ceiling at the facility killing everybody',
    prompts: []
  },
  'makenzie_DDA': {
    isEndingScreen: true,
    text: 'You perform the DDA almost perfectly but mess up slightly at the end. Navarro recieves second place and Monica leaves Navarro disgraced',
    prompts: []
  },
  'makenzie_STUDD': {
    isEndingScreen: true,
    text: 'You perfrom the STUDD flawlessly and win the NCA championship',
    prompts: []
  },


  // JESSE
  'jesse_intro': {
    type: 'multiple_choice',
    text: 'Jesse is called to take the place of the last batter in the world series for the Oakland As after Matt Olson has hyper extended his vastus laterals. You must pick a bat blessed by several Oakland As players and use it to defeat the Detroit Tigers.',
    prompts: [
      { label: 'JL bat', nextScreen: 'JL_screen' },
      { label: 'TLS bat', nextScreen: 'TLS_screen' },
      { label: 'MC bat', nextScreen: 'MC_screen' },
    ]
  },
  'JL_screen': {
    type: 'multiple_choice',
    text: 'You picked JL bat! Nice. Choose your MLB power snack',
    prompts: [
      { label: 'Big League Chew', nextScreen: 'JL_BLC' },
      { label: 'Sunflower Seeds', nextScreen: 'JL_SS' },
    ]
  },
  'TLS_screen': {
    type: 'multiple_choice',
    text: 'You picked TLS bat! Nice. Choose your MLB power snack',
    prompts: [
      { label: 'Big League Chew', nextScreen: 'TLS_BLC' },
      { label: 'Sunflower Seeds', nextScreen: 'TLS_SS' },
    ]
  },
  'MC_screen': {
    type: 'multiple_choice',
    text: 'You picked MC bat! Nice. Choose your MLB power snack',
    prompts: [
      { label: 'Big League Chew', nextScreen: 'MC_BLC' },
      { label: 'Sunflower Seeds', nextScreen: 'MC_SS' },
    ]
  },
  'JL_BLC': {
    isEndingScreen: true,
    text: 'You hit a pitch by Daniel Norris but first basemen Miguel Cabrera catches it and the game is over. Failure.',
    prompts: []
  },
  'JL_SS': {
    isEndingScreen: true,
    text: 'You are struck out by pitcher Casey Mize and the Tigers win the World Series. The As terminate your contract, Failure.',
    prompts: []
  },
  'TLS_BLC': {
    isEndingScreen: true,
    text: 'Tarik Skubal throws a fast ball and you hit it to the outer left field but a storm is called and the weather cancels the game leaving it a tie.',
    prompts: []
  },
  'TLS_SS': {
    isEndingScreen: true,
    text: 'You are pitched a curve ball by Tyler Alexander and you slam it into first baseman Prince Fielder. Your coach takes you out of the game and trades you to Seattle, ouch.',
    prompts: []
  },
  'MC_BLC': {
    isEndingScreen: true,
    text: 'Gregory Soto pitches you a weak ball and you knock it out of the park for a homerun and the As win the world Series. You are worshipped by all of Oakland and become a legend, victory',
    prompts: []
  },
  'MC_SS': {
    isEndingScreen: true,
    text: 'The ghost of legendary but controversial Tigers player Ty Cobb retursn from the dead and throws a pitch. You hit the ball to another surprisingly undead player Hank Greenburg. You leave the game disturbed by the rise of dead players coming back to life.',
    prompts: []
  },



  // TERRA
  'terra_intro': {
    type: 'multiple_choice',
    text: 'You picked Terra! Nice. You and your family have recently moved from Colorado to Racoon city. However, The Umbrella Corporation is still up to their dirty ways and releases a new strain of zombie virus on the population, causing another zombie outbreak. Now, in the midst of all the choas and confusion, a zombie has broken into your house. You see a gun and a fresh banana. What weapon will you choose?',
    prompts: [
      { label: 'Banana', nextScreen:'banana_screen'  },
      { label: 'Gun', nextScreen: 'gun_screen' }, // mistake was nextscreen vs nextScreen. It was the lower case s
    ]
  },
  'banana_screen': {
    isEndingScreen: true,
    text: 'You enjoyed your final meal of a fresh banana, but it was not an effective weapon against the zombie. The zombie ate you, game over',
  },
  'gun_screen': {
    type: 'multiple_choice',
    text: 'You pick up the gun and kill the zombie, avoiding being eaten alive by the foul creature of the undead. You are now faced with a choice to search for your family in the house or make a run for it. Which will you choose?',
      prompts: [
        { label: 'Search for family', nextScreen: 'search_screen' },
        { label: 'Leave family and exit the house', nextScreen: 'leave_screen' },
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
  'leave_screen': {
    isEndingScreen: true,
    text: 'You have escaped the house and but feel guilty about leaving your family, so you rush back inside to save them but it is too late, they have become zombies and eat you.'
  },
  'familycar_screen': {
      type: 'multiple_choice',
      text: 'You take your family and drive in the car, making your way to a crossroads. Do you drive into the city or outside of the city limits?',
      prompts: [
          { label: 'Drive into the city to try and get supplies and search for other survivors', nextScreen:'familydeath_screen' },
          { label: 'Get out of the city, with no food or water, and limited gas in your car', nextScreen: 'familylive_screen' }
      ]
  },
  'familyambush_screen': {
    isEndingScreen: true,
    text: 'You walked into the street with your family and were all attacked by your undead neighbors. You have all perished.'
  },
  'familydeath_screen': {
    isEndingScreen: true,
    text: 'You drive into the city and are rushed by the entire infected city population. Worst of all, the Umbrella Corporation has sent in soldiers to clean the scene. You and your family have perished.'
  },
  'familylive_screen': {
    isEndingScreen: true,
    text: 'You and your family have successfully driven outside of Racoon City escaping the evil horde of the undead and the Umbrella Corporation',
  },
  // 'game_over': {
  //   isEndingScreen: true,
  //   text: 'All done!',
  //   prompts: []
  // },
  // 'game_over': {
  //   isEndingScreen: true,
  //   text: 'All done!',
  //   prompts: []
  // }
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
