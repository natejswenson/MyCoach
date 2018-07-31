'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = ;
const SKILL_NAME = 'My Coach';
var GET_FACT_MESSAGE = 'Welcome to your personal fitness coach. What area of your body can i help you improve?';
const GET_FACT_MESSAGE1 =GET_FACT_MESSAGE;
var HELP_MESSAGE = '';
HELP_MESSAGE+= 'Here is all the phrases I will respond to <break time=".5s"/>';
HELP_MESSAGE+= 'Chest <break time=".5s"/> Legs <break time=".5s"/> Cardio, and Abs';
HELP_MESSAGE+= 'which one would you like to try?';
const HELP_MESSAGE1 = "You can say chest, legs, abs, or, cardio.  You can also say Help, for information about each workout";
const HELP_REPROMPT = "You can say chest, legs, abs, or, cardio.  You can also say Help, for information about each workout";
const STOP_MESSAGE = 'I look forward to our next workout! Please review this skill, which enables us to continually improve your experience';

var x =function getRandomItem(array) {

    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return (i);
};
var Tryme =function getRandomItem2() {

    let i = 0;
    i = Math.floor(Math.random() * 25);
    return (i);
};

var t2='<break time="9s"/>';

//
//
//Lots of Awsomeness for Later Releasees
//
//
//
/*const pushupFact = [
    'Step1: Get into a push-up position with your body in a straight line, feet together, hands wider than shoulder-width apart and your eyes focused on the floor.\n Step 2: Press yourself up to full arm extension, keeping your abs tight and back straight. \n Step 3: Squeeze your arms and chest at the top then lower yourself to the start and repeat',
    'Step 1: Get in the standard pushup position with your hands slightly wider than shoulder-width apart.\n Step 2: Keeping your core tight, slowly lower your body to the ground with your elbows tucked closely to the body. Once your chest is about two inches off the ground, pause and prepare to push back up.\n Step 3:Push back up explosively so that your elbows fully extend and your hands come off of the ground. \nStep 4: Land softly',
    'Step1: Get into a push-up position with your body in a straight line, feet together, hands Much wider than shoulder-width apart and your eyes focused on the floor.\n Step 2: Press yourself up to full arm extension, keeping your abs tight and back straight. \n Step 3: Squeeze your arms and chest at the top then lower yourself to the start and repeat',
    'Step1: Get into a push-up position with your body in a straight line, feet together, hands not quite shoulder-width apart and your eyes focused on the floor.\n Step 2: Press yourself up to full arm extension, keeping your abs tight and back straight. \n Step 3: Squeeze your arms and chest at the top then lower yourself to the start and repeat',
    'Step 1: Get into the standard pushup position with your hands together directly beneath your chest so that index fingers and thumbs are touching to form a triangle or "diamond" shape.\n Step 2: Keeping your core tight, slowly lower your body to the ground. Make sure to keep your elbows tucked in close by your sides so they make a 45-degree angle with your torso. Without altering your hand placement, pause and push yourself back to the starting position',
    'Step 1: Begin kneeling on all fours with hand directly under shoulders and toes on the mat.\nStep 2: Tighten abdominals and raise your body up off the floor, lengthening legs behind you. Hold entire body tight for desired amount of time and breathe',
    'Jumping Jacks',
    'Step 1: Get in the standard pushup position with your feet elevated and hands slightly wider than shoulder-width. Your elbows should be completely locked out.\n Step 2:Keeping your body straight, lower your chest to the floor. Pause and push back to the starting position, keeping core engaged.'

];
const cardioFact = [
    'Tip #5: Use Your Arms!\n maximize your cardio time by focusing on working your arms as well. Swing them while running, get creative.',
    'Tip #6: HIIT Works!\n Switching between moderate pace and burts of intensity will burn more callories, up your endurance, and its proven to reduce belly fat.',
    'Tip #7: Incorporate strength training \n The main focus of cardio workouts is to burn calories through high-intensity movement, but you can also use this time to strengthen your muscles.',
    'Tip #8: Push Yourself\n You need to contiuously challenge yourself if you want to see steady results'
];
const LowerbodyFact = [
    'Tip #9: Straight Head/Neck Position\n I would recommend doing knee push ups (you have to start from somewhere, right?) until you can easily keep your head in line with your torso as you do the push up in a slow and controlled motion.',
    'Tip #10: Keep Shoulders Back & Stable\nKeeping your shoulders down, back, and stable will force your chest to work much harder, which will make the exercise more effective.',
    'Tip #12: Pressure on Outside of Hands\n You can pretend like you are gripping the floor to help keep the pressure off your wrists.',
    'Tip #14: Full Range of Motion \n  Try to get your chest to slightly graze the ground, or come within an inch of the ground.',
];
var SitupFact =['Step 1: Lie on your back on an exercise mat. Bend your knees and plant your feet about hip-distance apart. Place your hands on the back of your head, where it attaches to your neck. Point your elbows to the sides of the room.\n Step 2:Exhale and pull your belly button in toward your spine as you gently raise your torso by bending your hips and waist. Lift up until your torso is just inches from your thighs.\n Step 3: Inhale and control your return to the start position to complete one repetition.',
    'Step 1 : Begin lying on the floor with your forearms flat on the floor, making sure that your elbows are aligned directly under your shoulders.\nStep 2: Engage your core and raise your body up off the floor, keeping your forearms on the floor and your body in a straight line from head to feet. Keep your abdominals engaged and try not to let your hips rise or drop.',
    'Step 1: Begin kneeling on all fours with hand directly under shoulders and toes on the mat.\nStep 2: Tighten abdominals and raise your body up off the floor, lengthening legs behind you. Hold entire body tight for desired amount of time and breathe',
    'Step 1: Lay Flat on your back with legs fully extended.\nStep 2: Tighten your abs and lif boh legs off the ground until they a re pointed straight up then slowly bring them down',
    'Step 1: Lie flat on the floor with your lower back pressed to the ground.\n Step 2: Put your hands behind your head, then bring your knees in towards your chest and lift your shoulder blades off the ground.\n Step 3: Straighten your right leg out to about a 45 degree angle to the ground while turning your upper body to the left, bringing your right elbow towards the left knee.\n Step 4: Switch sides and do the same motion on the other side to complete one rep.',
    'Step 1: Get down on the floor on your hands and knees. \n Step 2: Pull one knee up and in toward your midsection. Lift one foot and begin bending the knee as you pull it up between the front of your body and the floor.\n Step 3: Repeat the action with your other knee.',
    'Step 1: Start in a seated position on the floor, with your legs bent in front of you.\nStep 2: Interlace your fingers in front of your stomach.\nStep 3: Lean back with a straight spine and lift your feet up off the floor. Hold this position and make sure you do not collapse into your lower back. \n Step 4:Rotate your upper body slowly from side to side so that your hands touch the floor either side of your hips during each rep.',
];
var SitUpName = ['Crunches','Forearm Plank','Full Plank','Leg Raiser','Situps','Mountain Climbers','Mason Twist'];
var PushupName  =['Standard Pushup','Isometric Pushup','Wide Grip Pushup','Narrow Grip Pushup','Dimond Pushup','Full Plank','Jumping Jack','Decline Pushup'];


var factODay2 =cardioFact[i];
const factODay3 =LowerbodyFact[0];
var i =x(SitupFact) ;
const factODay4 =SitupFact[i];
const NameODay4 =SitUpName[i];
const factODay = pushupFact[i];
const NameOday = PushupName[i];
*/

//           Sunday                 Monday                   Tuesday                 Wenday             Thursday                Friday                  Saturday
var abs1 =  ['Forearm Plank',       'Full Plank',           'Forearm Plank',        'Full Plank',       'Forearm Plank',        'Full Plank',           'Full Plank'];
var abs2 =  ['Full Plank',           'Situps',              'Full Plank',           'Situps',           'Full Plank',            'Situps',              'Forearm Plank'];
var abs3 =  ['Crunches',            'Forearm Plank',        'Mason Twist',          'Forearm Plank',    'Situps',               'Forearm Plank',        'Bicycle Crunches'];
var abs4=   ['Full Plank',          'Mountain Climers',     'Full Plank',           'Mountain Climers', 'Forearm Plank',        'Mountain Climers',     'Full Plank'];
var abs5=   ['Forearm Plank',        'Full Plank',           'Forearm Plank',       'Bicycle Crunches', 'Full Plank',           'Bicycle crunches',     'Forearm Plank'];

//           Sunday                 Monday                   Tuesday                 Wenday             Thursday                Friday                  Saturday
var chest1 =['Standard Pushups',     'standard pushups',     'Wide Grip Pushups',     'Decline Pushups', 'Standard Pushup',       'Dimond Pushups',       'Standard Pushups'];
var chest2 =['Wide Grip Pushups',    'Jumping Jacks',        'Full Plank',           'Standard Pushups', 'Jumping Jacks',         'Full Plank',          'Standard Pushups',];
var chest3 =['Full Plank',          'Standard Pushups',    'Clap Pushups',         'Standard Pushups', 'Standard Pushup',      'Narrow Grip Pushups',   'Standard Pushups'];
var chest4= ['Narrow Grip Pushups', 'Jumping Jacks',        'Full Plank',           'Decline Pushups', 'Full Plank',            'Full Plank',           'Standard Pushups'];
var chest5= ['Standard Pushup',     'Isometric Pushups',    'Narrow Grip Pushups', 'Standard Pushups', 'Standard Pushups',      'Dimond Pushups',        'Standard Pushups'];

//           Sunday                 Monday                   Tuesday                 Wenday             Thursday                Friday                  Saturday
var legs1 = ['Bodyweight Squats',   'Jump Squats',          'Bodyweight Squats',    'Jump Squats',      'Bodyweight Squats',    'Jump Squats',          'Jumping Jacks'];
var legs2 = ['Calf Raisers',        'Jumping Jacks',        'Side Lunges',          'Jumping Jacks',    'Jumping Jacks',        'Jumping Jacks',        'Frog Hops',];
var legs3 = ['Single Leg Squats ',  'Frog Hopps',            'Lunges',               'Frog Hopps',        'Jump Squats',          'Body Weight Squats',   'Squat Jacks'];
var legs4=  ['Wall Sit',            'Wall Sit',             'Wall Sit',              'Wall Sit',         'Wall Sit',               'Wall Sit',           'Wall SIt'];
var legs5=  ['Lunges',              'Knee Jumps',           'Body Weight Squats',   'Body Weight Squats','Body Weight Squats',       'Jumping Jacks',      'Frog Hops'];

//           Sunday                 Monday                   Tuesday                 Wenday             Thursday                Friday                  Saturday
var heart1 = ['Jogging in Place',  'Jogging in Place',      'Jogging in Place',      'Jogging in Place', 'Jogging in Place',    'Jogging in Place',       'Jogging in Place'];
var heart2 = ['Jumping Jacks',      'Running in Place',      'Jumping Jacks',        'Jumping Jacks',    'Running in Place',    'Jumping Jacks',           'Jumping Jacks',];
var heart3 = ['Jump Squats ',       'Jump Squats',           'Jump Squats',          'Jump Squats',       'Jump Squats',        'Jump Squats',            'Jump Squats'];
var heart4=  ['Jumping Jacks',      'Jumping Jacks',        'Jogging in Place',     'Jogging in Place',  'Jumping Jacks',      'Running in Place',       'Jumping Jacks'];
var heart5=  ['Burrpeas',            'Burrpeas',            'Burrpeas',            'Burrpeas',             'Burrpeas',         'Burrpeas',                 'Burrpeas'];
var heart6 = ['jumping Jacks',       'Jumping Jacks',        'Jumping Jacks',          'Jumping Jacks',    'Jumping Jacks',        'Jumping Jacks',        'Jumping Jacks'];
var heart7=  ['High Knee Jumps',    'High Knee Jumps',       'High Knee Jumps',     'High Knee Jumps',   'High Knee Jumps',    'High Knee Jumps',          'High Knee Jumps'];
var heart8=  ['Jumping Jacks',      'Jogging in Place',       'Jumping Jacks',       'Jogging in Place',   'Jumping Jacks',       'Jumping Jacks',         'Jumping Jacks'];

//Motivational A[rays] of Sunshine
var m =[
    '',
    'You are doing Awsome',
    'Keep going',
    'Focus on your Form',
    'you are doing great',
    '',
    'Intensity is your friend',
    '',
    'Keep it up',
    'Continue the great work',
    'you got this',
    'Dont stop',
    'Keep going , you got this',
    'push yourself',
    'Keep up the intensity',
    '',
    'Dont Stop, You have this',
    '',
    'give it all you got',
    'this is fun, keep going',
    '',
    'This is hard, but it is worth it!',
    'Your hard work will pay off!',
    'Do not give up',
    ''
] ;

//Set day and load variables
var d=new Date();
var day = d.getDay();

//For Tommorrows workouts on cards
if (day<6) {
   var tommorrow = day ++;
} else { 
     tommorrow = 0;
}


var situp1 = abs1[day];
var situp2 = abs2[day];
var situp3 = abs3[day];
var situp4 = abs4[day];
var situp5 = abs5[day];

var TomAbs1 =abs1[tommorrow];
var TomAbs2 =abs2[tommorrow];
var TomAbs3 =abs3[tommorrow];
var TomAbs4 =abs4[tommorrow];
var TomAbs5 =abs5[tommorrow];


var pushup1 = chest1[day]; 
var pushup2 = chest2[day]; 
var pushup3 = chest3[day]; 
var pushup4 = chest4[day]; 
var pushup5 = chest5[day]; 

var TomPushup1 =chest1[tommorrow];
var TomPushup2 =chest2[tommorrow];
var TomPushup3 =chest3[tommorrow];
var TomPushup4 =chest4[tommorrow];
var TomPushup5 =chest5[tommorrow];

var squats1 = legs1[day];
var squats2 = legs2[day];
var squats3 = legs3[day];
var squats4 = legs4[day];
var squats5 = legs5[day];

var TOMsquats1 = legs1[tommorrow];
var TOMsquats2 = legs2[tommorrow];
var TOMsquats3 = legs3[tommorrow];
var TOMsquats4 = legs4[tommorrow];
var TOMsquats5 = legs5[tommorrow];


var run1 = heart1[day];
var run2 = heart2[day];
var run3 = heart3[day];
var run4 = heart4[day];
var run5 = heart5[day];
var run6 = heart6[day];
var run7 = heart7[day];
var run8 = heart8[day];

var Tomrun1 =heart1[tommorrow];
var Tomrun2 =heart2[tommorrow];
var Tomrun3 =heart3[tommorrow];
var Tomrun4 =heart4[tommorrow];
var Tomrun5 =heart5[tommorrow];



//=========================================================================================================================================
//Lets get in shape dudes and dudettes!!
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    //Legs Setup
    'LegsIntroIntent':function () {
        const intentObj = this.event.request.intent;
        if (!intentObj.slots.Ready.value) {
            // slot: Ready
            const slotToElicit = 'Ready';
            const speechOutput = 'Alright, Its a great day to feel the burn! For this workout all you need is water, and a towel. Please say ready when you want to start';
            const repromptSpeech = 'Please say ready when you want to start';
            const updatedIntent = 'LegsIntroIntent'
            return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
        }
        this.emit('LegsWorkoutIntent');
    },

    //Legs Workout
    'LegsWorkoutIntent':function(){
        var data ="";
        var cardTitle =SKILL_NAME;
       var cardContent = 'Awsome Job! Here is a peak at what your leg workout looks like tommorrow:\n\n'+TOMsquats1+ '\n'+TOMsquats2+ '\n'+ TOMsquats3+'\n'+TOMsquats4+'\n'+ TOMsquats5;

        //squat1
        data+= 'First excercise,' + squats1;
        data+='<break time=".5s"/> Begin in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= '30 Seconds, Halfway';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'Great Warm up. Take a twenty second break, then you have ' + squats2;
        data+= t2;
        data+= 'Make sure you are keeping your legs loose';

        //squat2
        data+= '<break time="7s"/> ' + squats2 + 'in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= '30 seconds left';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'Great Job. Take a twenty second break before you begin' + squats3;
        data+= t2;
        data+= 'lightly jog in place to ensure  your legs stay loose ';

        //squat3
        data+= '<break time="7s"/>'+ squats3+',in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= 'Halfway done with'+squats3;
        data += t2;
        data+= m[Tryme()];
        data+= t2;
        data+= '10 seconds<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'Wow, you did wonderful. Take a thirty second break before'+squats4;
        data+= t2;
        data+= '20 seconds';
        data+= t2;
        data+= 'Time to find a wall you can rest your back agaist';

        //squat4 deepwall sits
        data+= '<break time="7s"/>' +squats4+', in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/> with your back flat agaist the wall slowly sit until it feels like you are sitting in a chair';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= 'Halfway';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'Good work. You are working very hard!.  Take a thirty second break before the final excercise,'+squats5;
        data+= t2;
        data+= '20 seconds';
        data+= t2;
        data+= '10 seconds';

        //squats5
        data+= '<break time="7s"/> Home Stretch ' +squats5 +'in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= 'Halfway';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'Impressive workout! I look forward to working with you tommorrow!';
        //output
        var speechOutput =data;
        this.response.speak(speechOutput)
            .cardRenderer(cardTitle, cardContent);
        this.emit(':responseReady');
    },

    //Cardio Setup
    'CardioSetupIntent':function(){
        const intentObj = this.event.request.intent;
        if (!intentObj.slots.Steady.value) {
            // slot: Day
            const slotToElicit = 'Steady';
            const speechOutput = 'Alright! Get ready to improve your cardiovascular health, and melt your fat away. You will need a towel and water for this routine. If you have a heart rate monitor, you should wear it! Once you start, you will not stop moving until the entire workout is complete.  Please say ready when you want to start';
            const repromptSpeech = 'Please say ready when you want to start';
            const updatedIntent = 'CardioSetuIntent';
            return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
        }
        this.emit('CardioWorkoutIntent');
    },
    //Cardio Workout
    'CardioWorkoutIntent':function(){
        var cardTitle = SKILL_NAME;
        var cardContent = 'Awsome Job! Here is a peak at what your cardio workout looks like tommorrow:\n\n'+Tomrun1+ '\n'+Tomrun2+ '\n'+ Tomrun3+'\n'+Tomrun4+'\n'+ Tomrun5;
        var data ="";
        //Job In place (1 minutes)
        data+= ' Begin your warm up by'+ run1 ;
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= '50 seconds';
        data += t2;
        data+= '40 seconds';
        data += t2;
        data+= 'Halfway';
        data += t2;
        data+= '20 seconds';
        data += t2;
        data+= '10 seconds';
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> ';

        //run2
        data+='one <break time="1s"/> Now pickup the pace. Begin '+run2+'<break time="6s"/>';
        data+= 'Faster, More Intense, More Burned Calories! <break time="4s"/> Keep Going, Dont stop, You got this! <break time="4s"/>';
        data+= 'Keep Going, you are here to get in shape! <break time="4s"/>';
        data+= t2;
        data+= 'ten seconds of intensity left! You Got this. <break time="8s"/>';
        data+= 'Transition to a jog and Ensure you are in your target heart rate zone. <break time="9s"/>';

        //run3
        data+= 'We have'+run3+',in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data +=  'Squat, Jump, Repeat. Its that simple.';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= 'How many can you do in 10 seconds?';
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';

        //run4
        data+= 'Great Job! We have'+run4+'<break time=".5s"/> nice easy pace.';
        data+= t2;
        data+= 'Continue'+run4;
        data+= t2;
        data+= '10 seconds until we have,'+run5;

        //Run 5
        data+= '<break time="7s"/>'+run5+' in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= '10 seconds of '+run5+' left';

        //run6
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'Wow, you did wonderful. Grab some water then begin'+run6;
        data+= t2;
        data+= '20 seconds of'+run6+'left';
        data+= t2;
        data+='10 seconds of '+run6+' left.';

        //run7
        data+= '<break time="7s"/>'+run7+', in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= 'Intensity and speed are your friends ';
        data += t2;

        //run1
        data+= 'Switch to '+run1;
        data += t2;
        data+= 'Continue jogging in place';
        data += t2;

        //run7
        data+= 'Switch to'+run7;
        data += t2;
        data+= m[Tryme()];
        data += t2;

        //run8
        data+= 'Switch to'+run8;
        data += t2;
        data+= 'Continue '+run8;
        data += t2;

        //run7
        data+= 'Switch '+run7;
        data += t2;
        data+= m[Tryme()];
        data +=t2;

        //run1
        data+= 'Switch '+run1;
        data += t2;
        //run7
        data+= 'Switch. 10 Seconds of '+run7+' with the most intensity you have';
        data += t2;
        data += 'Cool Down. Slowly Jog in place';
        data+= t2;
        data+= 'gradually decrease your speed until you are just lifting your feet. This will bring your heart rate down slowly';
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'That feeling when you finish a tough workout, AHhh, Thats Success, and You earned it! I look forward to our next workout! Please review this skill, which enables us to continually improve your experience';
        //output
        var speechOutput =data;
        this.response.speak(speechOutput)
            .cardRenderer(cardTitle, cardContent);
        this.emit(':responseReady');
    },

    'AbsSetupIntent':function(){
        const intentObj = this.event.request.intent;
        if (!intentObj.slots.Ready.value) {
            // slot: Day
            const slotToElicit = 'Ready';
            const speechOutput = 'Great Choice, a strong core is key to almost every other excercise!  You will complete five rounds, the goal is to make it through each round without stopping. If you need to take a break, please do. say ready when you would like to start.';
            const repromptSpeech = 'Please say, ready, when you want to start';
            const updatedIntent = 'AbsSetupIntent';
            return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
        }
        this.emit('AbsWorkoutIntent');
    },
    //Abs
    'AbsWorkoutIntent':function() {
        var cardTitle = SKILL_NAME;
        var cardContent ='Awsome Job! Here is a peak at what your Abs workout looks like tommorrow:\n\n'+TomAbs1+ '\n'+TomAbs2+ '\n'+ TomAbs3+'\n'+TomAbs4+'\n'+ TomAbs5;
        var data = "";
        //Situps 1
        data += 'We have';
        data += situp1;
        data += '<break time=".5s"/> Begin in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += '30 seconds';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += 'Great Job. Take a ten second break,  then we have';
        data += situp2;

        //situps 2

        data += '<break time="7s"/> We have';
        data += situp2;
        data += '<break time=".5s"/>in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += '10 seconds';
        data += '<break time="7s"/> 3 <break time="1s"/> 2 <break time="1s"/> 1 <break time="1s"/>';
        data += 'Nicely done. Take ten, and get ready for';
        data += situp3;

        //Situps 3
        data += '<break time="7s"/>';
        data += situp3;
        data += 'in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += 'Halfway done with'+situp3;
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += '<break time="7s"/> 3 <break time="1s"/> 2 <break time="1s"/> 1 <break time="1s"/>';
        data += 'Wow, you did wonderful. Take a short break and then its time for';
        data += situp4;
        data += t2;

        //Situp 4
        data += '<break time="7s"/>';
        data += situp4;
        data += 'in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += 'Halfway, only 30 seconds left';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data += 'Good Job.  Take a quick break then its time for,';
        data += situp5;
        data += '<break time="7s"/>';
        data += 'Begin';

        //situps 5
        data+= situp5;
        data+='in three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'Finish Strong!';
        data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+= m[Tryme()];
        data += t2;
        data+=m[Tryme()];
        data += t2;
        data+= 'last 10 seconds. Give it all you got';
        data+= '<break time="7s"/> three <break time="1s"/> two <break time="1s"/> one <break time="1s"/>';
        data+= 'WooHoo. Workout, DONE. I look forward to our next workout! Please review this skill, which enables us to continually improve your experience';

        //output
        var speechOutput =data;
         this.response.speak(speechOutput)
            .cardRenderer(cardTitle, cardContent);
        this.emit(':responseReady');
    },

//Chest Setup
    'ChestSetupIntent':function(){
        const intentObj = this.event.request.intent;
        if (!intentObj.slots.Ready.value) {
            const slotToElicit = 'Ready';
            var speech= '';
            speech+='Great Choice! You will complete five, 1 minute rounds. do as many repititions as you can, take breaks as needed. You have';
            speech+= pushup1+'first';
            speech+= '<break time=".5s"/> Get into pushup position and say ready, when you want to start';
            const speechOutput =speech;
           const repromptSpeech = 'Please say ready when you want to start';
           return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
        }
       
        this.emit('ChestWorkoutIntent');
    },

//Chest Workout
    'ChestWorkoutIntent': function(){
        if(isSlotValid(this.event.request,'TwoReady')==false) {
            const slotToElicit = 'TwoReady';
            var data = '';
            data += 'Begin'+pushup1+'in three <break time=".5s"/> two <break time=".5s"/> one <break time=".5s"/> begin.';
            data += '<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
            data += t2;
           data += m[Tryme()];
            data +=t2;
            data +=m[Tryme()];
            data +=t2;
            data +='Halfway';
            data +=t2;
            data +=m[Tryme()];
            data +=t2;
            data +=m[Tryme()];
            data +=t2;
            data += 'Great Job. Take a break';
            data +=t2;
            data +='Make Sure you are staying Loose';
            data +=t2;
            data +='please say ready when to begin,'+pushup2;
            const speechOutput =data;
            const repromptSpeech = 'Please say ready when you want to start';
            return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
            
        }
        this.emit('ChestWorkoutTwoIntent');
    },
    //Chest Workout
    'ChestWorkoutTwoIntent': function(){
       
        if(isSlotValid(this.event.request,'ThreeReady')==false) {
            const slotToElicit = 'ThreeReady';
            var data = '';
            data += '<break time=".5s"/>  Begin'+pushup2+'in three <break time=".5s"/> two<break time=".5s"/> one <break time=".5s"/> begin';
            data +='<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
            data += t2;
            data += m[Tryme()];
            data += t2;
            data += m[Tryme()];
            data += t2;
            data += 'Only 30 Seconds left.';
            data += t2;
            data += m[Tryme()];
            data += t2;
            data +=m[Tryme()];
            data += t2;
            data +='good job. take a thirty second rest.';
            data+= t2;
            data+='Stay Loose, and continue moving your arms.';
            data += t2;
            data += 'Next round you have'+pushup3;
            data += 'Please Say ready, when you want to start';
            const speechOutput =data;
            const repromptSpeech = 'Please say ready when you want to start';
            return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
            
        }
        this.emit('ChestThreeWorkoutIntent');
    },

        'ChestThreeWorkoutIntent': function(){
       
        if(isSlotValid(this.event.request,'FourReady')==false) {
            const slotToElicit = 'FourReady';
            var data = '';
            data+='<break time=".5s"/>get into pushup position, Begin in three <break time=".5s"/> two <break time=".5s"/> one <break time=".5s"/> begin.';
            data +='<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
            data += t2;
            data += m[Tryme()];
            data += t2;
            data += m[Tryme()];
            data += t2;
            data += m[Tryme()];
            data += t2;
            data += m[Tryme()];
            data += t2;
            data +='ten seconds, '+m[Tryme()];
            data += t2;
            data +='Nice, air high five.  take a thirty second break.';
            data += t2;

            data+= '20 seconds';
            data += t2;
            data += 'Next excercise,'+pushup4+'Please Say ready, when you want to start';
            const speechOutput =data;
            const repromptSpeech = 'Please say ready when you want to start';
            return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
        }
           this.emit('ChestFourWorkoutIntent');
    },
        
        'ChestFourWorkoutIntent': function(){
           
        if(isSlotValid(this.event.request,'FiveReady')==false) {
            const slotToElicit = 'FiveReady';
            var data = '';  
        data +=  '<break time="4s"/> Begin'+pushup4 +'in three <break time=".5s"/> two<break time=".5s"/> one <break time=".5s"/> begin.';
        data +='<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data +=t2;
        data +=m[Tryme()];
        data += t2;
        data +='That was fun! <break time=".5s"/> Take a thirty second rest before the final round';
        data += t2;
        data += '20 second';
        data += t2;
        data += 'our final round will be';
        data +=pushup5+'Please Say ready, when you want to start';
            const speechOutput =data;
            const repromptSpeech = 'Please say ready when you want to start';
            return this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
        }
           this.emit('ChestFiveWorkoutIntent');
    },
     'ChestFiveWorkoutIntent': function(){
            var data = ''; 
            var cardTitle =SKILL_NAME;
            var cardContent ='Great work! Here is  tommorrow chest workout schedule:\n\n'+TomPushup1+ '\n'+TomPushup2+ '\n'+ TomPushup3+'\n'+TomPushup4+'\n'+ TomPushup5;
        //pushup5
        data += pushup5;
        data +='<break time=".5s"/> Get into pushup position. Begin in three <break time=".5s"/> two<break time=".5s"/> one <break time=".5s"/> begin.';
        data +='<audio src="https://s3.amazonaws.com/ask-soundlibrary/scifi/amzn_sfx_scifi_timer_beep_01.mp3"/>';
        data += t2;
        data += m[Tryme()];
        data += t2;
        data += m[Tryme()];
        data += t2;
        data +='Halfway';
        data += t2;
        data +=m[Tryme()];
        data += t2;
        data += 'The end is so close, how many can you do in ten seconds?';
        data += t2;
        data += 'Great Job!  I look forward to your next workout. Please review this skill so we can continue to improve your experience';
        var speechOutput = data;
        this.response.speak(speechOutput)
            .cardRenderer(cardTitle, cardContent);
        this.emit(':responseReady');

    },

    'GetNewFactIntent': function () {
        var cardTitle = SKILL_NAME;
        var cardContent ="Welcome to your personal fitness coach, how can I assist you?";
        const speechOutput = GET_FACT_MESSAGE;
        this.emit(':askWithCard', speechOutput, HELP_REPROMPT,cardTitle,cardContent);

    },
    'AMAZON.HelpIntent': function () {

        this.emit(':ask',HELP_MESSAGE1,HELP_REPROMPT);
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
 
exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return true;
        } else {
            //we didn't get a value in the slot.
            return false;
        }}
