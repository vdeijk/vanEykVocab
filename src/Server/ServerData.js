/*BASIC APP CONSTANTS*/

export const PERCENTAGEPLUSCORRECTANSWER = 50;
export const TOTALMODULES = 5;

/*MASTERY OF EACH MODULE*/

export let verbsForWritersMastered = [];
export let moduleAMastered = [];
export let allModulesMasteredWords = [verbsForWritersMastered, moduleAMastered];

export let modulesMastered = [false, false];

/*PROGRESS ON EACH MODULE*/

let verbsForWritersProgress = {
  name: "Verbs For Writers",
  id: "verbsForWriters",
  wordMastery: 0,
  moduleProgress: 0,
  totalWords: 20,
};

let moduleAProgress = {
  name: "Module A",
  id: "moduleA",
  wordMastery: 0,
  moduleProgress: 0,
  totalWords: 25,
};

let moduleBProgress = {
  name: "Module B",
  id: "moduleB",
  wordMastery: 0,
  moduleProgress: 0,
  totalWords: 20,
};

let moduleCProgress = {
  name: "Module C",
  id: "moduleC",
  wordMastery: 0,
  moduleProgress: 0,
  totalWords: 20,
};

let moduleDProgress = {
  name: "Module D",
  id: "moduleD",
  wordMastery: 0,
  moduleProgress: 0,
  totalWords: 20,
};

export let allModulesProgress = [verbsForWritersProgress, moduleAProgress,
moduleBProgress, moduleCProgress, moduleDProgress];

export const TOTALOVERALLWORDS = (verbsForWritersProgress.totalWords +
  moduleAProgress.totalWords + moduleBProgress.totalWords +
  moduleCProgress.totalWords + moduleDProgress.totalWords);


/*CONTENT MATTER OF EACH MODULE*/

//Verbs for writers

let Sparkle = {
  name: `Sparkle`,
  definition: `Sparkle (with something) to shine brightly
    with small flashes of light`,
  progressTracker: 0,
};

let Shine = {
  name: `Shine`,
  definition: `To produce or reflect light; to be bright
    with small flashes of light`,
  progressTracker: 0,
};

let Brighten = {
  name: `Brighten`,
  definition: `To become or make something lighter or brighter in colour
    with small flashes of light`,
  progressTracker: 0,
};

let Muddle = {
  name: `Muddle`,
  definition: `​To put things in the wrong order or mix them up`,
  progressTracker: 0,
};

let Dazzle = {
  name: `Dazzle`,
  definition: `Dazzle (somebody) if a strong light dazzles you`,
  progressTracker: 0,
};

let Spark = {
  name: `Spark`,
  definition: `To cause something to start or develop, especially suddenly`,
  progressTracker: 0,
};

let Glow = {
  name: `Glow`,
  definition: `(especially of something hot or warm) To produce a steady light
    that is not very bright`,
  progressTracker: 0,
};

let Shimmer = {
  name: `Shimmer`,
  definition: `To shine with a soft light that seems to move slightly`,
  progressTracker: 0,
};

let Glimmer = {
  name: `Glimmer`,
  definition: `To shine with a small unsteady light`,
  progressTracker: 0,
};

let Beam = {
  name: `Beam`,
  definition: `To have a big happy smile on your face`,
  progressTracker: 0,
};

let Ripple = {
  name: `Ripple`,
  definition: `To move or to make something move in very small waves`,
  progressTracker: 0,
};

let Tickle = {
  name: `Tickle`,
  definition: `To move your fingers on a sensitive part of somebody’s body 
    in a way that makes them laugh`,
  progressTracker: 0,
};

let Thrill = {
  name: `Thrill`,
  definition: ` To cause somebody to feel very pleased or excited`,
  progressTracker: 0,
};

let Explode = {
  name: `Explode`,
  definition: `To burst (= break apart) or make something burst loudly and violently, causing damage.`,
  progressTracker: 0,
};

let Burst = {
  name: `Burst`,
  definition: `to break open or apart, especially because of pressure from inside; 
    to make something break in this way`,
  progressTracker: 0,
};

let Guzzle = {
  name: `Guzzle`,
  definition: `To drink something quickly and in large amounts. In British English it also 
    means to eat food quickly and in large amounts.`,
  progressTracker: 0,
};

let GobbleUp = {
  name: `Gobble up`,
  definition: `​To use something very quickly`,
  progressTracker: 0,
};

let BreezeThrough = {
  name: `Breeze through`,
  definition: `(informal) To do something successfully and easily`,
  progressTracker: 0,
};

let Drool = {
  name: `Drool`,
  definition: `To let saliva (= liquid) come out of your mouth`,
  progressTracker: 0,
};

let Spit = {
  name: `Spit`,
  definition: `To force liquid, food, etc. out of your mouth`,
  progressTracker: 0,
};

export let verbsForWriters = [
  Sparkle,
  Shine,
  Brighten,
  Muddle,
  Dazzle,
  Spark,
  Glow,
  Shimmer,
  Glimmer,
  Beam,
  Ripple,
  Tickle,
  Thrill,
  Explode,
  Burst,
  Guzzle,
  GobbleUp,
  BreezeThrough,
  Drool,
  Spit,
];

// Module A

let Abandon = {
  name: `Abandon`,
  definition: `To leave somebody, especially somebody who you are reponsible for, with no intention of returning`,
  progressTracker: 0,
};

let Abandoned = {
  name: `Abandoned`,
  definition: `​left and no longer wanted, used or needed`,
  progressTracker: 0,
};

let Ability = {
  name: `Ability`,
  definition: `The fact that somebody/something is able to do something`,
  progressTracker: 0,
};

let Able = {
  name: `Able`,
  definition: `To have the skill, intelligence, opportunity, etc. needed to do something`,
  progressTracker: 0,
};

let Abroad = {
  name: `Abroad`,
  definition: `In or to a foreign country`,
  progressTracker: 0,
};

let Absence = {
  name: `Absence`,
  definition: `The fact of somebody being away from a place where they are usually expected to be;
    the occasion or period of time when somebody is away`,
  progressTracker: 0,
};

let Absent = {
  name: `Absent`,
  definition: `Not in a place because of illness, etc.`,
  progressTracker: 0,
};

let Absolute = {
  name: `Absolute`,
  definition: `Total and complete`,
  progressTracker: 0,
};

let Absolutely = {
  name: `Absolutely`,
  definition: `Used to emphasize that something is completely true`,
  progressTracker: 0,
};

let Absorb = {
  name: `Absorb`,
  definition: `To take in a liquid, gas or other substance from the surface or space around`,
  progressTracker: 0,
};
let Abuse = {
  name: `Abuse`,
  definition: `The use of something in a way that is wrong or harmful`,
  progressTracker: 0,
};

let Academic = {
  name: `Academic`,
  definition: `Connected with education, especially studying in schools and universities`,
  progressTracker: 0,
};

let Accent = {
  name: `Accent`,
  definition: `A way of pronouncing the words of a language that shows which country, 
    area or social class a person comes from; how well somebody pronounces a particular language`,
  progressTracker: 0,
};

let Accept = {
  name: `Accept`,
  definition: `To take willingly something that is offered; to say ‘yes’ to an offer, invitation, etc.`,
  progressTracker: 0,
};

let Acceptable = {
  name: `Acceptable`,
  definition: `Agreed or approved of by most people in a society`,
  progressTracker: 0,
};

let Accident = {
  name: `Accident`,
  definition: `An unpleasant event, especially in a vehicle, that happens unexpectedly and causes injury or damage`,
  progressTracker: 0,
};

let Accidental = {
  name: `Accidental`,
  definition: `​Happening by chance; not planned`,
  progressTracker: 0,
};

let Accomodation = {
  name: `Accomodation`,
  definition: `A place to live, work or stay in`,
  progressTracker: 0,
};

let Accompany = {
  name: `Accompany`,
  definition: `To travel or go somewhere with somebody/something`,
  progressTracker: 0,
};

let AccordingTo = {
  name: `According to`,
  definition: `As stated or reported by somebody/something`,
  progressTracker: 0,
};

let Account = {
  name: `Account`,
  definition: `To force liquid, food, etc. out of your mouth`,
  progressTracker: 0,
};

let Accurate = {
  name: `Accurate`,
  definition: `Correct and true in every detail`,
  progressTracker: 0,
};

let Accuse = {
  name: `Accuse`,
  definition: `​To say that somebody has done something wrong or is guilty of something`,
  progressTracker: 0,
};

let Achieve = {
  name: `Achieve`,
  definition: `To succeed in reaching a particular goal, status or standard, especially by making an effort for a long time`,
  progressTracker: 0,
};

let Achievement = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

export let moduleA = [
  Abandon,
  Abandoned,
  Ability,
  Able,
  Abroad,
  Absence,
  Absent,
  Absolute,
  Absolutely,
  Absorb,
  Abuse,
  Academic,
  Accent,
  Accept,
  Acceptable,
  Accident,
  Accidental,
  Accomodation,
  Accompany,
  AccordingTo,
  Account,
  Accurate,
  Accuse,
  Achieve,
  Achievement,
];


//Module B

let Baby = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Back = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Background = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Backward = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Bacteria = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Badly = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let BadTempered = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Bag = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Baggage = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Bake = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Balance = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Ball = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Ban = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Bandage = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Bank = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Bar = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Bargain = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Barrier = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Base = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Based = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};


export let moduleB = [
  Abandon,
  Abandoned,
  Ability,
  Able,
  Abroad,
  Absence,
  Absent,
  Absolute,
  Absolutely,
  Absorb,
  Abuse,
  Academic,
  Accent,
  Accept,
  Acceptable,
  Accident,
  Accidental,
  Accomodation,
  Accompany,
  AccordingTo,
  Account,
  Accurate,
  Accuse,
  Achieve,
  Achievement,
];


//Module C

let Cabinet = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Cable = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Cake = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Calculate = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Calculation = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Call = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Called = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Calm = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Camera = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Camp = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Campaign = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Camping = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Can = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let CanTo = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Cancel = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Cancer = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Candidate = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Candy = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Cap = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Capable = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};


export let moduleC = [
  Abandon,
  Abandoned,
  Ability,
  Able,
  Abroad,
  Absence,
  Absent,
  Absolute,
  Absolutely,
  Absorb,
  Abuse,
  Academic,
  Accent,
  Accept,
  Acceptable,
  Accident,
  Accidental,
  Accomodation,
  Accompany,
  AccordingTo,
  Account,
  Accurate,
  Accuse,
  Achieve,
  Achievement,
];


//Module D

let Dad = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Daily = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Damage = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Damp = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dance = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dancer = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dancing = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Danger = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dangerous = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dare = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dark = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Data = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Date = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Daughter = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Day = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dead = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Deaf = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Deal = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Dear = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};

let Death = {
  name: `Achievement`,
  definition: `A thing that somebody has done successfully, especially using their own effort and skill`,
  progressTracker: 0,
};


export let moduleD = [
  Abandon,
  Abandoned,
  Ability,
  Able,
  Abroad,
  Absence,
  Absent,
  Absolute,
  Absolutely,
  Absorb,
  Abuse,
  Academic,
  Accent,
  Accept,
  Acceptable,
  Accident,
  Accidental,
  Accomodation,
  Accompany,
  AccordingTo,
  Account,
  Accurate,
  Accuse,
  Achieve,
  Achievement,
];

export let allModules = [verbsForWriters, moduleA, moduleB, moduleC, moduleD];