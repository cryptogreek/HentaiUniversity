var character = {index: "coach", fName: "Amy", lName: "Silver", trust: 0, encountered: false, textEvent: "", met: false, color: "#D7BB2E", author: "Slackersavior", artist: "Himitsu Kessha Vanitas"};

var logbook = {
	index: "coach", 
	desc: "The University's sports Director. From what you know, she's a bitch.",
	body: "A blonde bombshell, she's apparently a former star track athlete brought to the school to try and boost the campus' sports program. She gets results, but her methods and personal conduct leave a lot to be desired.",
	clothes: "While working, she tends to wear a track suit, apparently a hold over from her old days.",
	home: "Usually found lazing about in the teacher's lounge. Usually given a wide berth, given that she refuses to stop smoking in there, no matter how many times she's been chastized for it.",
	tags: "",
	artist: "Himitsu Kessha Vanitas",
	author: "Slackersavior",
};

var newItems = [
	{name: "School Uniform", 				key: true, 		price: 40, 	image: "scripts/gamefiles/items/schooluniform.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "coach1", name: "You see coach smoking at her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach2", name: "coach is staring at her phone as you approach.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 35, trustMax: 39, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach3", name: "coach is playing with her phone, she looks up as you get close to her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 50, trustMax: 55, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach4", name: "coach is waiting for you at her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 75, trustMax: 80, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach5", name: "coach is looking over student files at her desk.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 100, trustMax: 105, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "coach6", name: "coach is working quietly.", location: 'teacherLounge', time: "MorningEvening", itemReq: "", trustMin: 106, trustMax: 110, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "coach1": {
			writeText("You stride up to coachF's desk resolute. You have everything you need, now all you need to do is get her isolated...");
			writeSpeech("player", "", "coachF, I have something I'd like to speak to you about...");
			writeSpeech("coach", "", "Pfft. I'm not going to stop smoking in here. When are you all going to learn?");
			writeBig("images/coach/1a.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She isn't even looking at you.");
			writeSpeech("player", "", "coachF, this is serious. I need you to come with me.");
			if (data.player.counseling > 3) {writeFunction("writeEncounter('coach1a')", "She looks at you quizzically for a moment, but then stands up and walks with you.");}
			writeFunction("writeEncounter('coachfail')", "She barely even registers you as she tells you to piss off.");
			break;
		}
		case "coach1a": {
			setTrust('coach', 30);
			writeText("She walk with you to your office, putting out her cigarette as she moves.");
			writeSpeech("coach", "", "So apparently you're some kind of wonderboy for the University, so I can't ignore you anymore.");
			if (checkFlag("principal", "kuroF")==true){
			writeSpeech("coach", "", "I hear you cleaned up that tramp who hangs around the roof.");}
			if (checkFlag("principal", "neetF")==true){	
			writeSpeech("coach", "", "You dealt with the principal's 'gremlin' problem");}
			if (checkFlag("principal", "starletF")==true){
			writeSpeech("coach", "", "You worked with that crazy girl who wants to be a pornstar? Man, this school is wild.");}
			if (checkFlag("principal", "purpleF")==true){
			writeSpeech("coach", "", "And... you helped out purpleF. Sweet girl, but she needs to toughen up.");}
			if (checkFlag("principal", "scarfF")==true){
			writeSpeech("coach", "", "Though I imagine the reason you're dealing with me is that scarfF now cleans her desk. I'm not going to be as nice, though.");}
			writeSpeech("player", "", "coachF, I have reports that you have been treating the students like workhorses. There have been mutiple cases of students complaining about their treatment, both in and out of practice. You belittling them, berating them, in at least a few cases getting physical. This behavior is unacceptable.");
			writeSpeech("coach", "", "Hah! Is that all? You think this is the first time they've brought me in for a little disciplinary warning? Look here, you punk, my station here is secure. You can put down the fact that you gave me a warning, that you made sure I knew I was being watched, and then you and I can go back to our corners and never speak to each other again.");
			writeText("Well, you knew she was a bitch... Time to play your trump card.");
			writeSpeech("player", "", "That's not the only unaccetable behavior I've been made aware of, coachF. Tell me, do you go to the beach often?");
			writeText("Her expression falters a bit, and her eyes narrow.");
			writeSpeech("coach", "", "... My boyfriend and I go there often. Why? Is that some sort of crime?");
			writeSpeech("player", "", "Well, no, but I have to wonder how the univerity would react if they knew what you and your boyfriend got up to at the beach.");
			writeText("Her expression falters a bit, and her eyes narrow. You flash the photo sportsF sent to you.");
			writeBig("images/coach/sportsphone2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her face drops, before twisting into a scowl.");
			writeSpeech("player", "", "How do you think the University would react to this picture being made public?");
			writeSpeech("coach", "", "You goddamned bastard.");
			writeSpeech("coach", "", "... What do you want?");
			writeText("That... Honestly went smoother than expected. You had a hand on your pendant in your pocket and the other ready to swing if things had gotten violent, but it seems she's willing to play ball, at least for now.");
			writeSpeech("player", "", "It's simple, coachF. I don't really care about what you're doing with your boyfriend, but I do care about this school. I want you to start taking this job seriously. I'm going to give you a series of training and orientation videos, and I want you to watch them and take them to heart. The students and faculty here deserve to be treated better than how you've been acting.");
			writeText("She laughs.");
			writeSpeech("coach", "", "Are you serious? You have a picture of me with my tongue in my boyfriend's asshole, and what you ask for is for me to go through NEO? Fuck it, FINE. But after that, you delete that picture, and if I ever see you anywhere off this campus I'm going to wring your neck until it's narrow enough to use as a straw.");
			writeSpeech("player", "", "Deal, coachF. But I think by the time you're done with the course, you'll practically be a different person. And I think by the end, you'll like the new you a lot more than how you are now.");
			writeFunction("changeLocation(data.player.location)", "She scoffs and leaves you office. Time to get to work preparing some employee training material.");
			passTime();
			break;
		}
		case "coach2": {
			writeText("You approach choachF slowly. The more she looks the the preview you sent, the more effective the total package will be when she walks it. But it looks like your caution was unwarranted, it takes you knocking on her desk to break her focus on the phone's screen.");
			writeSpeech("coach", "", "Gah! Fucking! Goddamn, playerF! Don't sneak up on me like that, next time I'll sock you square in the jaw!.");
			writeText("You flash her your signature smile.");
			writeSpeech("player", "", "Come on, coachF, you knew I was coming, and I walked straight up to your desk. It's not like I was sneaking. Or were you distracted by something?");
			writeSpeech("coach", "", "I... Fucking... Was I? I dunno, my focus has been off all day. I think I slept shitty last night or something.");
			writeText("Your preview is working better than you could have hoped. Here's hoping the rest works even better.");
			writeSpeech("player", "", "Well, I hope you don't fall asleep during your orientation video. If you do, you know I'm going to make you watch it again.");
			writeText("She narrows her gaze, and you can swear as she pulls her lips back you see fangs.");
			writeSpeech("coach", "", "Fuck you, playerF, why should I...");
			writeText("A shake of your phone is all the reminder she needs. You still have the leverage here. And it's not like you're asking for too much.");
			writeText("Or so she thinks right now.");
			writeSpeech("coach", "", "FINE. If I fall asleep, I'll watch it all over again. How long is this fucking thing, anyways?");
			writeSpeech("player", "", "Nope. Not telling you. If I do, you'll set an alarm at the end of it, and you'll just sleep through it anyways.");
			writeText("A scowl forms on her face. Yep, that had been her plan, alright.");
			writeSpeech("player", "", "In fact, I think if that's how it's going to be, I'll need to supervise your orientation myself.");
			writeText("Her eyes practically barrel roll out of her head.");
			writeSpeech("coach", "", "I can watch a damn video myself, fuckhead. But if that gets you off my back, fine. Feel free and enjoy me suffering through your home movies.");
			writeFunction("loadEncounter('coach', 'coach2a')", "You lead her to your office.");
			writeFunction("changeLocation(data.player.location)", "I'm not quite ready yet, I'll be back when I am.");
			break;
		}
		case "coach2a": {
			passTime();
			setTrust('coach', 50)
			writeText("You sit behind your desk and invite coachF to sit in one of the chairs across from you.");
			writeSpeech("coach", "", "Oh, boy, is this where the counselling happens? Oh, playerT playerF, I just can't stand my classes lately. Feh.");
			writeText("You sigh as you get things set up on your laptop.");
			writeSpeech("player", "", "Here's hoping that these videos turn you around. These students really deserve better than the ways you've been treating them.");
			writeSpeech("coach", "", "Oh yeah, and I'm sure you treat them <i>much</i> better than I do. Come on, you never tried to get a little physical with any of the girls with daddy issues?");
			writeText("... She may have hit the nail on the head. You're going to get her back for that one. You make a show of giving an exasperated sigh and a pointed look before continuing.");
			writeSpeech("player", "", "No, coachF. I don't take advantage of the students. What I do is everything in my power to make sure they're happy, healthy, and live a meaningful life.");
			writeText("I mean, it's pretty much the truth. Aside from the 'not taking advantage of the students' thing. You hear her chuckle as you finish your false indignation");
			writeSpeech("coach", "", "Yeah, yeah, Mr. Goody Two Shoes. Just get this video playing so I can get out of here.");
			writeText("Well, she asked. You turn your laptop around, pressing play as the monitor is turned to face coachF.");
			writeText("The video starts up with that spiral logo, and you see her eyes lose focus as she watches. It took a few days work, but between the soundtrack, your homemade voiceover, and the subliminals embbeded in the video itself, you know you've outdone yourself this time.");
			writeText("You spend the next hour just watching as coachF takes in your training program.");
			writeSpeech("player", "", "Remember, you're here to help. Everyone here on campus is counting on you. Make sure to respect your students, and your coworkers.");
			writeText("You couldn't push too hard at first. Too much all at once would cause her to slip out and lead to some probably violent outbursts, given her attitude.");
			writeSpeech("player", "", "And in turn, your coworkers will help you. Trust them. You can count on them. They'll tell you what to do, and following their advice will make your life easier, happier, and more fulfilling.");
			writeSpeech("player", "", "So now, coachF. Sleep. Get some rest.");
			writeText("coachF had been relaxed in the chair before, but upon hearing the video, she rolls her head back. It could have been cute, but about a minute after the video ends, she's snoring louder than a car engine. You let her sleep for a bit, making sure everything seemed to work right, before moving over to her and shaking her.");
			writeSpeech("player", "", "coachF. Hey. coachF. I think I won the bet. You ready to watch another video tomorrow?");
			writeSpeech("coach", "", "Mmm... Fucking... Fine. Just let me sleep a few more minutes. At least while I'm doing this I get paid to nap at work.");
			writeFunction("writeEvent('coach2b')", "Fine, but first, stand up.");
			break;
		}
		case "coach3": {
			writeText("coachF looks up from her phone.");
			writeSpeech("coach", "", "playerF. Here to show me another home movie?");
			writeText("Her tone isn't great, but she isn't actively cursing at you. And while she has a cigarette in her mouth, it isn't lit.");
			writeSpeech("player", "", "Not smoking today?");
			writeSpeech("coach", "", "scarfF asked me to stop, so I put my last one out.");
			writeText("Yep. Video worked like a charm.");
			writeFunction("loadEncounter('coach', 'coach3a')", "Time for the next one.");
			writeFunction("changeLocation(data.player.location)", "You're not quite ready yet. Maybe later.");
			break;
		}
		case "coach3a": {
			passTime();
			setTrust('coach', 70)
			writeText("You move behind coachF's desk, and lean in to whisper in her ear.");
			writeSpeech("player", "", "Are you ready to learn how to be a good little slut now?");
			writeText("coachF smiles, whispering back as she stands up quickly.");
			writeSpeech("coach", "", "Of course, playerH. I'll be anything you want me to be.");
			writeText("You lead her down the hall to your office, shutting and locking the door ");
			writeSpeech("coach", "", "Now let's get...");
			writeText("coachF had been stripping before she turned around and saw you setting up your laptop for another presentation.");
			writeSpeech("coach", "", "Oh you have got to be fucking kidding me.");
			writeSpeech("player", "", "Nope. I told you you'd need to watch another orientation video.");
			writeText("coachF throws up her hands in frustration.");
			writeSpeech("coach", "", "This is not what I meant when I said you need to treat me right, fucker.");
			writeText("She's upset, but she is sitting down. Getting a cigarette lit as you fiddle with the laptop.");
			writeSpeech("player", "", "Tell you what, you make it even halfway, I'll be sure to make it worth your while.");
			writeSpeech("coach", "", "And if I don't 'the pictures'. Yeah, fucking, yeah. Here I was ready to blow your dumb ass, and all you want is showing off your goddamned...");
			writeText("You sigh and hit play. No reason to keep this going longer than it needs to be.");
			writeFunction("writeEvent('coach3b')", "coachF focuses on the screen, as the video starts to run.");
			break;
		}
		case "coach4": {
			writeText("You move to coachF's desk, and she looks up from the papers in front of her. Once again, her cigarette is in her mouth, but unlit.");
			writeSpeech("player", "", "How are you doing today, coachF?");
			writeText("She smiles, it actually seems halfway genuine.");
			writeSpeech("coach", "", "It's going alright. principalF asked me to look through some potential recruits coming to the school, so I've been kind of busy...");
			writeText("She leans forward, and her smile goes from halfway genuine to true as she looks at you.");
			writeSpeech("coach", "", "But if you need me for something, playerH, of course I can help you.");
			writeText("She reaches down as she speaks, feigning an adjustment to her jacket, but clearly giving you a look to her bare chest beneath it.");
			writeSpeech("coach", "", "So did you need me for anything today, playerH? I've been so looking forward to our next lesson...");
			if (checkItem("School Uniform") == true){writeFunction("loadEncounter('coach', 'coach4a')", "In fact, I am ready for your next lesson.");}
			writeFunction("changeLocation(data.player.location)", "You still need to buy her a uniform, another day it is.");
			break;
		}
		case "coach4a": {
			passTime();
			setTrust('coach', 81)
			writeSpeech("player", "", "I am actually ready for your next lesson.");
			writeText("You see her face light up as you lean in.");
			writeSpeech("player", "", "But you, are not, my little slut.");
			writeText("You drop the bag with the school uniform behind her desk.");
			writeSpeech("player", "", "Put that on, I'll meet you in your house, slut. It's time for you to get a proper education.");
			writeText("coachF looks down into the bag, before nodding back up to you.");
			writeSpeech("coach", "", "I can't wait, playerH.");
			writeFunction("writeEvent('coach4b')", "coachF texts you her address quickly, and about half an hour later, you're at her place.");
			break;
		}
		case "coach5": {
			writeText("You call to coachF as she works.");
			writeSpeech("player", "", "coachF, are you ready to get started on that student wellness project?");
			writeText("She smiles up at you as you pull a chair close enough to whisper.");
			writeSpeech("player", "", "I take it those are the student files I sent you?");
			writeText("She fans the files out in front of you, nodding.");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Yes, playerH. I've talked to all of them. They've been told that during practices or classes they'll be asked to see you in an effort to check in on the mental health of the team. They're not super excited about it, but it seems like sportsF has been telling them that you helped her a lot, so they all at least understand.");
			writeText("She looks into your eyes and whispers.");
			writeSpeech("coach", "", "So, sportsF...?");
			writeText("You nod.");
			writeSpeech("player", "", "Another one of mine. She actually got me the picture of you sticking your tongue in your boyfriend's ass.");
			writeSpeech("coach", "", "You cheeky fucker!");
			writeText("She quickly covers her mouth, realizing what she just said, but you laugh it off.");
			writeSpeech("player", "", "That's fair. Besides...");
			writeText("You lean in to her ear, whispering harshly.");
			writeSpeech("player", "", "I'll be sure to make you pay for that later, slut.");
			writeSpeech("coach", "", "I'm sorry, Master. Thank you Master.");
			writeFunction("loadEncounter('coach', 'coach5a')", "You look over the files. Time to make a decision.");
			writeFunction("changeLocation(data.player.location)", "You were just checking in, you'll come back later.");
			break;
		}
		case "coach5a": {
			setTrust('coach', 106)
			writeSpeech("player", "", "So, what should I know about each of these girls?");
			writeText("coachF gets back to business, laying out the files again.");
			writeBig("images/orange/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "orangeF. She's a bit of a firebrand. New to the team. She could probably use some anger management counseling.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "swimmerF. She seems to have trouble keeping focus. She puts in a lot of energy, but her results are always a mess.");
			writeBig("images/cold/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "coldF. She's smart, and she gets along well with people, but she's never really clicked with most of the team. From what I understand, she doesn't spend much time out.");
			writeSpeech("coach", "", "So, playerH, who was it you wanted to meet today?");
			writeFunction("loadEncounter('orange', 'orange1')", "I'll meet with orangeF. Probably best to get her anger issues under control.");
			writeFunction("loadEncounter('swimmer', 'swimmer1')", "swimmerF could use some help. We don't want our students struggling.");
			writeFunction("loadEncounter('cold', 'cold1')", "coldF seems like a good candidate, send her to my office.");
			break;
		}
		case "coach6": {
			writeSpeech("coach", "", "So did your meeting go well, playerH?");
			writeSpeech("player", "", "It did. Things are coming along nicely with them.");
			writeSpeech("coach", "", "So... Did I earn my reward, playerH?");
			writeFunction("loadEncounter('coach', 'coach6a')", "You did, slut. Come with me.");
			writeFunction("changeLocation(data.player.location)", "Not just yet. I still have more work to do.");
			break;
		}
		case "coach6a": {
			setTrust('coach', 111)
			passTime();
			writeText("coachF can barely contain herself as she stands up.");
			writeSpeech("coach", "", "Meet me at my place, then playerH. We'll work out the specifics there.");
			writeFunction("writeEvent('coach6b')", "Not long after, you walk into coachF's home.");
			break;
		}
		case "coachfail": {
			passTime();
			writeText("She doesn't even look up.");
			writeSpeech("coach", "", "Fuck off, newbie. You aren't even worth my time.");
			writeText("She's not budging.");
			writeSpeech("player", "", "coachF, please, my job is the well being of the students and you...");
			writeText("Her scowl now falls on you.");
			writeSpeech("coach", "", "I said fuck off, newbie. You've got no pull here.");
			writeText("This is getting you nowhere. Maybe if you were higher regarded by the staff...");
			writeFunction("changeLocation(data.player.location)", "You storm off. This can wait, and you'd rather not risk a fight in the teacher's lounge.");
			break;
		}
	}	
}

var eventArray = [
	{index: "coach2b", name: "Testing Your Work"},
	{index: "coach3b", name: "Office Sex"},
	{index: "coach4b", name: "Schoolgirl Sex"},
	{index: "coach6b", name: "T-Shirt Sex"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "coach2b": {
			writeText("She doesn't look happy about it, but she stands up.");
			writeSpeech("coach", "", "Couldn't just let me sleep... Uggh.");
			writeSpeech("player", "", "You can sleep more in a bit, but first I need to see what from the training took.");
			writeSpeech("player", "", "How do you feel, coachF?");
			writeSpeech("coach", "", "Tired, playerH.");
			writeSpeech("player", "", "That's normal. What did you think of the video?");
			writeSpeech("coach", "", "It... Wasn't as bad as I thought. And thinking about it... You guys may be right about my attitude. You've been kinda dicks about it, but I can at least see where you guys are coming from.");
			writeSpeech("player", "", "So...?");
			writeSpeech("coach", "", "So...");
			writeText("She lets loose a big sigh as she stands up and smiles at you..");
			writeSpeech("coach", "", "So I guess I'm saying I'm sorry. Just don't let principalF know I caved on that this easy.");
			writeText("And with those words, you're both smiling. The video was a lot of work, but now you'll be able to ramp the next one up and...");
			writeSpeech("coach", "", "And tell you what, since I was such a bitch about it, I think I should make it up to you.");
			writeSpeech("coach", "", "Come here.");
			writeText("She practically yanks you out of your chair by your wrists and shoves your hands onto her breasts.");
			writeBig("images/coach/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "What d'ya think, playerF? Sound like reasonable payback for my shitty attitude?");
			writeText("You start to play with her breasts, hands playing over her tracksuit. Immediately, you realize that she's not wearing anything under her jacket. You feel her nipples hardening as she looks down and notices your own hardening member.");
			writeBig("images/coach/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Not bad. Maybe I have the right idea, then.");
			writeText("coachF slinks down to her knees, unzipping her jacket and freeing her breasts, and you lower your pants, freeing your now erect cock.");
			writeSpeech("coach", "", "Goddamn, playerF! Should have told me you were packing this beast away before. I can think of a lot of ways to show my <i>respect</i> for this thing.");
			writeText("coachF gets to work quickly, wetting her hand with spit before rubbing your length. She's good. Her hands dance around your cock, making sure to get your whole cock slick before wrapping her tits around it.");
			writeSpeech("coach", "", "Oooh, yeah. That feels good.");
			writeBig("images/coach/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She squeezes herself around your cock, and gets to work. You can feel her moaning slightly as she goes, every time she squeezes her breasts a little harder, or when she adjusts her grip and pulls her nipples as she works. Her voice wavers as she keeps going.");
			writeBig("images/coach/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Haaah. Oooh yeah. I think I found a new fuck buddy here, alright.");
			writeText("Not bad, but not quite what you wanted. Time to push your luck. You grab her head and push her down to your cock.");
			writeSpeech("player", "", "I don't think you get to decide that, now do you, slut?");
			writeText("She keeps up her titjob as you push and pull her by the hair into a shallow blowjob. When you pull her up, she answers.");
			writeSpeech("coach", "", "Mmm.. No playerH. I don't. You do.");
			writeText("sportsF was right about her. For all her bitchy exterior, in her heart, she really is a slut.");
			writeSpeech("player", "", "And why should I fuck your bitch ass? Given how you treat me and anyone else you've met, I don't see any reason to see you more than I absolutely have to.");
			writeText("To her credit, she does look hurt when you bring up her attitude.");
			writeSpeech("coach", "", "I... The only reason I was with that guy at the beach is because he knew how to treat me in bed. But even he had things he didn't want. I had to practically beg him to let me lick his ass, and he had the audacity to complain about it later.");
			writeSpeech("coach", "", "You though... You know how to treat a lady right.");
			writeSpeech("coach", "", "If you keep treating me right, playerH... I'll make an effort to treat everyone else right.");
			writeText("She's practically begging you for it. You really thought she'd be harder to convert.");
			writeSpeech("player", "", "Fine, bitch. If that's how you want to be treated. Get to work, make me cum.");
			writeText("coachF smiles wide, and gives you a wink.");
			writeSpeech("coach", "", "Yes, playerH!");
			writeText("You take your hand off her head and let her get to it. She redoubles her efforts, taking it upon herself to suck the top of your cock as she keeps wrapping her tits around you. As she works, she makes sure to vary the pressure, her timing, and makes sure to keep drooling along your length, to make sure you're properly lubricated. It doesn't take long before you're about to cum.");
			writeSpeech("player", "", "Get ready, bitch, here it comes!");
			writeBig("images/coach/2b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF takes your cock and shoves it hard into her own chest. Not trying to use her tits to get you off, but pushing them together around your length as if they're a new hole just for you to fuck. You take the invitation gladly as you thrust in and out, hard and fast, her spit and your precum lubing the hole as you finally let go, covering her chest in your semen.");
			writeText("You pull yourself out slowly, letting your cum spread and run on her.");
			writeBig("images/coach/2b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Holy shit, playerH. That's quite a load. Maybe someone needs to get out and get active more often if you're pent up like that.");
			writeText("You resist the urge to laugh. If she knew just how much you were getting around the school, she'd probably have reported you, even with the blackmail you've got on her.");
			writeSpeech("player", "", "Quiet, slut. Or did you forget the pictures I could still send out? See you soon for your next orientation video. I'm sure you'll find it much more exciting than this last one.");
			writeText("coachF stops her teasing quickly at the mention of the picture. She quickly starts to clean herself up, though the tissue in your office only gets so much cum off of her chest and you can see faint cum stains on her jacket as she moves to the door.");
			writeSpeech("coach", "", "Yeah, yeah. I hope for your sake that's true.");
			writeFunction("changeLocation(data.player.location)", "As she leaves, you get to work cleaning your office.");
			updateMenu();
			break;
		}
		case "coach3b": {
			writeText("coachF stares, semi-focused the whole time as the video plays. You hear your own voice as you run her through some new programming.");
			writeSpeech("player", "", "Remember, coachF, you need to respect your coworkers. And the best way to show your respect is to obey. To be a model teacher when principalF asks it of you. To behave yourself when scarfF demands.");
			writeSpeech("player", "", "A proper teacher shows respect to everyone she works with. Students, tachers, parents. And above all, they respect the one who taught them.");
			writeSpeech("coach", "", "Show respect. And obey when asked.");
			writeSpeech("player", "", "After all, you belong to me now. I'm your coworker. I'm your teacher. I'm your superior.");
			writeSpeech("coach", "", "Yeeah. Respect and obey.");
			writeSpeech("player", "", "I'm your master.");
			writeSpeech("coach", "", "Master...");
			writeText("Seems like the video worked better than you could have hoped. Now... Time to have some fun. You stop this video and prep another before getting into position behind coachF.");
			writeSpeech("player", "", "Strip, and bend over the desk, coachF. I told you if you made it halfway through I'd make it worth your time.");
			writeText("She stands up, slow but steady, and bends herself over the desk, taking off her tracksuit as you put a condom on yourself.");
			writeSpeech("coach", "", "Mmm. You gonna take control, then, playerH?");
			writeBig("images/coach/3b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She smiles and looks back at you as she takes a drag. You feel her begin to rock her hips as you tease her entrance. Her cunt wet and practically begging you to enter.");
			writeSpeech("coach", "", "Try and break me, you fucking animal.");
			writeText("No need for further invitation, you push yourself into her waiting slit. As you do, you press play on the next video in line.");
			writeBig("images/coach/3b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Holy shit, what...");
			writeText("The video begins to play as you settle into a rhythm. Perverted scenes and extreme porn begins to play, including a few choice scenes starring yourself.");
			if(galleryCheck("maid1") ==  true){
				writeBig("images/maid/2-3.jpg", "Art by Oreteki18kin");
				writeSpeech("coach", "", "... A shame to let it go to waste");
			}
			if(galleryCheck("starlet1a") ==  true){
				writeBig("images/starlet/1-3.jpg", "Art by Oreteki18kin");
				writeSpeech("coach", "", "Lana... You... Oooh fuck.");
			}
			if(galleryCheck("starlet2") ==  true){
				writeBig("images/starlet/2-2.jpg", "Art by Oreteki18kin");
				writeSpeech("coach", "", "Such a good little slut.");
			}
			if(galleryCheck("mistress3") ==  true){
				writeBig("images/mistress/3-3.jpg");
				writeSpeech("coach", "", "Be a good whore...");
			}
			if(galleryCheck("sports8b") ==  true){
				writeBig("images/sports/8c3.jpg", "Art by Himitsu Kessha Vanitas");
				writeSpeech("coach", "", "Zoe... I always knew she'd fuck like a beast.");
			}
			writeText("You give her a spank as the video starts to loop.");
			writeSpeech("player", "", "So you understand, slut?");
			writeText("Her eyes stay on the screen as image after image of deprived sex act flashes on screen.");
			writeSpeech("coach", "", "Yes, playerH! Make me your whore!");
			writeText("You slide your cock out of her, and grab her by the hips, pulling a chair so you can sit with her bouncing on your cock while she keeps watching the video.");
			writeBig("images/coach/3b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Get moving, then, bitch.");
			writeText("She gives your cock a few tugs, and rubs her slit against you before lining up your cock and lowering herself.");
			writeSpeech("coach", "", "Yes, playerH!");
			writeText("She moves quickly, bouncing up and down, you feel her sliding herself forwards and back, rocking to try and bottom you out as far as she can manage all while she stares at the screen, transfixed by your 'training program'.");
			writeSpeech("player", "", "Not bad, slut. Keep it up.");
			writeBig("images/coach/3b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As she moves, she puts her breasts on your face. You kiss, lick, and suck as she moves, losing yourself to the carnal pleasure of a newly broken girl.");
			writeSpeech("coach", "", "Fuck, fuck, fuuuck, I'm gonna...");
			writeText("Her wild bucking as she cums on top of you is too much to bear. You cum, thrusting yourself as deep as you can manage.");
			writeBig("images/coach/3b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Pause the video, coachF.");
			writeText("She does so slowly, moving her hand reluctantly to your laptop to stop the cascade of porn.");
			writeSpeech("coach", "", "That was incredible, playerH.");
			writeBig("images/coach/3b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Her smile says so much as she slowly rises off of you and begins to clean herself enough to face the public.");
			writeSpeech("player", "", "You were pretty good, yourself, my little slut.");
			writeText("coachF shudders as you call her that.");
			writeSpeech("coach", "", "Oh yeah, you do know how to treat a woman right. From what I saw in that video, you treat plenty of women right.");
			writeSpeech("coach", "", "... And I'm just another one, huh?");
			writeSpeech("player", "", "Not <i>just</i> another one. But you are one of mine now. And how does that feel?");
			writeSpeech("coach", "", "I... don't know yet. I feel like I should be pissed, but at the same time...");
			writeSpeech("coach", "", "... I think it feels right?");
			writeText("coachF's confusion quickly passes. She's certainly under your control, but you don't know if she's ready for what you want just yet.");
			writeSpeech("player", "", "That's good for now. Don't worry, you have plenty more to learn. And I'm very good at teaching bitches like you.");
			writeText("You give coachF another spank as you say that, and you hear her whimper 'Yes playerH.' as she walks out of your office.");
			writeFunction("changeLocation(data.player.location)", "Almost. Maybe one more lesson, then she'll be ready.");
			updateMenu();
			break;
		}
		case "coach4b": {
			writeText("You don't even knock on the door. You stride into coachF's home as if you own it. Which, in a few hours, you functionally might.");
			writeSpeech("coach", "", "Oh, playerH! Are you here to teach this hopeless little schoolgirl slut?");
			writeBig("images/coach/profileP.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You chuckle to yourself. Sure, you can work with this.");
			writeSpeech("player", "", "Yes. Yes I am. You've been a bitchy little whore, and it's time I put you in your place.");
			writeBig("images/coach/4b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Mmm, playerH... That looks so good. How exactly do you plan to teach me?");
			writeSpeech("player", "", "Move to the edge of the bed, slut. It's time for you to learn your place.");
			writeText("She finishes off the rest of her beer, and puts out her cigarette as she moves. You strip yourself and move above her, putting your sizable cock onto her face. She starts to try and lick you before you pull your cock back and give her a meaty <i>SLAP</i> on the cheek with it.");
			writeBig("images/coach/4b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "What's wrong, slut? Did you want something? Did you expect something? Speak up.");
			writeText("She looks up at you, desperately.");
			writeSpeech("coach", "", "I... I didn't want to speak out of turn, playerH. Please... Please let me suck your perfect cock. Let me properly show you my respect... My devotion.... My talents.");
			writeText("She licks her lips as she speaks. You can see drool dripping from the corner of her mouth as she looks up into your eyes. Waiting for permission before doing anything.");
			writeSpeech("player", "", "You're confident in your skills then, slut? No. That's not what you're here for today. You're not here to impress me. You're here so that I can get off. Open your mouth. Don't move your hands, don't lick me, don't take me in. Just open your mouth and wait.");
			writeText("She nods, opening her mouth wide, as you line yourself up with her mouth. You take a few moments to admire the view, coachF trying desperately to taste you without moving her head, before you line your cock up with her waiting hole.");
			writeSpeech("player", "", "Stick out your tongue as far as you can, slut. Lick me as I use you.");
			writeText("She grunts her acceptance as you slap your cock onto her waiting tongue. Hungrily, she moves her tongue as far up and down on your shaft without moving her own head. As she does, you begin to rock your own hips. Not shoving yourself into her mouth, but letting it slide across her tongue, move up her nose, as you let her lick further and further down. Then back up, slowly. from base to head. Letting her lick along your urethra, letting her spit shine your head before moving yourself back up, sliding your length along her face, smearing spit and precum along her nose and near her eyes. But like the good slut she is, she never breaks eye contact.");
			writeText("And you push further, past the base of your cock, and let her take your now twitching balls into her mouth, and she greedily sucks them. Taking each one into her mouth individually and worshipping your sack around them with her tongue. You keep pushing, letting her lick along the bottom of your ball sack, before shoving her nose into your balls, and her mouth into your taint. Her tongue never stops, touching every inch of you she can possibly get to given her limited movement. You can practically feel her trying to seek out your asshole with her tongue, but you stop her short.");
			writeSpeech("player", "", "You really are an asslicking slut, aren't you, slut?");
			writeText("coachF moans under you, where she's stuck she can't smell anything but your musk as her nose presses into your taint and balls, her eyes, half covered by your sack over her face, are clouded and unfocused, lost in the pleasure of serving you.");
			writeText("You give her what she wants, pushing her into your taint further, and her tongue immediately gets to work, licking around your rim before just barely poking it's way in. You feel her probing and moaning as she tries to find whatever spots set you off the most.");
			writeText("You let her work for a few minutes before slowly moving her back up, and she continues her work the whole way back, slobbering and wetting every inch of your cock before she's back into position, mouth wide open, tongue out, just out of reach of licking your cock.");
			writeSpeech("coach", "", "playerH? Permission to speak?");
			writeSpeech("player", "", "What is it, slut? Because I don't intend to stop.");
			writeSpeech("coach", "", "Thank you playerH. Thank you for treating me like the worthless slut I am. Thank you for taking the time to teach me how to show you the proper respect. And thank you for showing me what I truly am.");
			writeText("And with that, she returns to her position. Mouth open, waiting for your commands.");
			writeSpeech("player", "", "We're not done yet, my little slut. Keep your hands where they are. I'm going to use your face as a toy.");
			writeText("She nods, a small movement, to show she's ready for whatever you ask of her.");
			writeBig("images/coach/4b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You thrust in quickly. She was expecting it, but even then, with how quickly you move, and the size of your cock, you don't get very far before you meet resistance.");
			writeSpeech("player", "", "Open up, slut. You were so confident about your skills. Prove you have them.");
			writeText("You feel her groan as she tries her best to relax. Every grunt and moan sending vibrations up and down you length as you start to use her throat in earnest. She wasn't lying, she is good at this, even without moving her hands, and trying her best to keep her head still, her skilled tongue wrapping around your cock as you use her like an onahole does wonders. You settle into a rhthym quickly, thrusting in and out, finding her limit every time, before holding and letting her gag as you push yourself deeper and deeper in.");
			writeBig("images/coach/4b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("Bit by bit, she finally manages to properly deepthroat you. Once you're there, you redouble your efforts. Every time you move, you feel spit slipping out from her lips, covering her too small uniform in drool, making her white top translucent.");
			writeText("You get as deep as you think you're going to manage today, and stop.");
			writeSpeech("player", "", "Hold it right there, slut. I want to feel you gagging for a bit. Maybe we'll see how long you can hold your breath...");
			writeBig("images/coach/4b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She tries to moan a response, but with you that deep in her throat, it only leads to her gagging on her own spit. She closes her eyes and focuses, trying to stay exactly where she is. Fighting every urge she has to pull back and get air. You feel her desperately trying to tongue your cock, and you feel her throat spasm as her gag reflex- however surpressed- manages to kick in. You leave her there for nearly a full minute before you grab her hair and yank her off you cock.");
			writeBig("images/coach/4b6.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF's face is covered in spit, and she's trying her best to catch her breath, but even after that treatment she maintains her position in case you want to keep using her. Mouth open, tongue out. Waiting for your command.");
			writeFunction("writeEvent('coach4c')", "Not bad, slut. Lie on your back.");
			updateMenu();
			break;
		}
		case "coach4c": {
			writeText("She immediately lets herself fall to her back. It occurs to you that the position you had her in probably wasn't comfortable. Oh well. This one won't be either.");
			writeSpeech("coach", "", "How is it you want to fuck your schoolgirl slut, playerH?");
			writeText("You smile and grab her legs. Pushing them up and out, spreading her legs and exposing her soaking cunt, before putting your cock onto her lips.");
			writeSpeech("player", "", "Quiet, whore. I'm not done using you.");
			writeText("For the first time since you've started you see her falter.");
			writeSpeech("coach", "", "Hey, wait, hang on, you need to put on a con-");
			writeText("Her protests are cut off by a <i>SLAP</i> as you smack her face. <b>Hard.</b>");
			writeSpeech("player", "", "I told you to be <b>quiet.</b> You still don't undertand, do you slut?");
			writeBig("images/coach/4c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "<b>You. Belong. To ME.</b>");
			writeText("She whimpers as you enter her, and as she realizes just what that truly means.");
			writeSpeech("coach", "", "I... I'm sorry, playerH. You're right. Fuck me raw. Use your slut however you please.");
			writeText("Despite her original protest, you feel her trying even harder to please you. coachF truly is a submissive slut deep down. Or if she wasn't before, she is now.");
			writeSpeech("player", "", "Did I tell you to move, bitch? Stay. Still.");
			writeText("Another whimper as she tries to keep herself still. You feel her legs shaking, and back tighten up as you continue mercilessly pumping inside her. This position must be hell on her muscles. But she tries her best to keep herself wide open as you drill her into her own bed.");
			writeBig("images/coach/4c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("As you continue, you feel her cunt tighten even more, and a spray against your thighs as she cums and squirts against you. As her orgasm subsides, you slow yourself down. It's time to put the final nail in the coffin.");
			writeSpeech("player", "", "There's a proper slut. Do you want more?");
			writeText("She barely even acknowledges you speaking, so you reel back and give her another slap across the face.");
			writeSpeech("player", "", "I asked you a question, slut! Do you want more?!");
			writeText("Her eyes snap to attention, and she screams her response.");
			writeSpeech("coach", "", "Yeees! Please, playerH! Give me more!");
			writeSpeech("player", "", "Then tell me what you are, slut! Tell me what you'd do for me.");
			writeSpeech("coach", "", "Anything, playerH! I'd do anything! I'm worthless, nothing but a slut, a toy for you to use however you fucking want! So please, playerH! <b>Use! Your! Slut!</b> ");
			writeText("She screams as you bottom out in her. That's exactly what you wanted to hear. You're not going to last much longer, but in thirty seconds or so of chaotic pumping you lose countof the number of times she cums underneath you.");
			writeBig("images/coach/4c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("A primal grunt leaves your lips as you finally lose control and cum inside your newly converted slave. You feel her body respond in kind, another wave of orgasms racking her body, but she's long since stopped making more noise than whimpers, her eyes a million miles away, her mind giving in to how good it is to finally have found her place.");
			writeBig("images/coach/4c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You say nothing as you pull yourself out quickly. Leaving her empty as your cum spills out of her cunt and onto her bed. You begin to get dressed as you ask her a question");
			writeSpeech("player", "", "So, I asked you before, slut. You weren't completely convinced. Tell me now. How does it feel to be one of mine?");
			writeText("Her breathing steadies as she closes her eyes and really thinks about what you asked her. It's a full three minutes before she opens her eyes to see you fully dressed and ready to leave, and she gives you her answer.");
			writeSpeech("coach", "", "I don't know why I ever wanted anything else... Master?");
			writeText("You smile. She already knows what you expect. Most of the women in the videos had been calling you the same thing.");
			writeSpeech("player", "", "Good, my slut. I'm glad you finally understand.");
			writeFunction("changeLocation(data.player.location)", "Without another word, you leave. Giving her time to adjust to her new outlook on life.");
			updateMenu();
			break;
		}
		case "coach6b": {
			writeBig("images/coach/selfie1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Master. I'm so glad to see you.");
			writeText("You don't even give her time to react, pushing her down to her knees in the entrance of her own home.");
			writeSpeech("coach", "", "Fuck, I love it when you-");
			writeText("No time to waste. You shove your cock into her open mouth as she speaks.");
			writeBig("images/coach/6b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "I'm not here for a chat, slut. Get to work.");
			writeText("She pulls her head off your cock and smiles up to you.");
			writeSpeech("coach", "", "Of course, you're not Master.");
			writeText("And with that she immediately gets back to work. Today you allow her to use her hands, but true to her own nature, she keeps one hand holding a cigarette while the other works the base of your cock, occasionally loosening her grip to let her fingertips lightly brush and graze across your sack, causing your balls to twitch from the light but electric touch. All while she takes the head of your cock into her mouth, licking and drooling, letting her spit leak out and lubricate the bottom of your shaft as she works it.");
			writeText("She pulls off for a second, taking a breath and admiring your now slobber covered cock.");
			writeSpeech("coach", "", "Here, Master, let me show you a trick...");
			writeBig("images/coach/6b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF takes a long drag on her cigarette before getting back on your cock. The feeling is... Bizarre. The smoke makes her mouth hotter, and you can feel her throat is less relaxed and more ready to gag as she goes deeper. And it's not long before you look down and see the smoke from her drag blowing out of her nose as she tries to keep her breath going.");
			writeSpeech("player", "", "Nice trick, slut.");
			writeText("She moans a thank you as she keeps working on your cock. You let her work for a while, until you feel that pressure, and you get ready to blow.");
			writeSpeech("player", "", "Don't you dare stop, slut. Swallow it all!");
			writeBig("images/coach/6b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("coachF pulls back as you cum, letting it flow into her mouth, making sure to keep a tight seal with her lips over your cock head, not letting any cum spill. After you've finished, you feel her tongue licking you clean before she swallows. Once. Gulp. Twice. Gulp. And she pulls off.");
			writeBig("images/coach/6b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck, you taste good.");
			writeSpeech("player", "", "I hope you don't think we're done here, slut.");
			writeText("You drag her by her hair to the bed. She crawls next to you the whole way.");
			writeFunction("writeEvent('coach6c')", "You throw coachF onto the bed roughly, and she lands on her back.");
			updateMenu();
			break;
		}
			case "coach6c": {
			writeText("You practically rip her panties off, as you move to fuck her.");
			writeBig("images/coach/6c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck me, Master. I've been a good slut for you, right? So please... Please fuck me!");
			writeText("You tease her a little longer as she begs, rubbing your cock against her cunt. It's not long, but to her it must feel like an eternity. Her cries getting more and more desperate as you push your head against her lips and slowly enter her.");
			writeBig("images/coach/6c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You start slowly. This is meant to be a reward. Feeling out for her sensitive spots, you thrust and move your hips slowly. Each time she whimpers as you find some new part of her body she never thought would bring her pleasure. It's not long before she's turning to putty underneath you.");
			writeBig("images/coach/6c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Ahh~. That's... I can't... Fuuck!~");
			writeText("There it is. You pick up the pace now that you've got an idea where she's weak, making sure to twist your hips just right at the peak of your thrust. Both of your thighs are soaked with her juices and you feel yourself about to cum again as you thrust in one last time.");
			writeBig("images/coach/6c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeBig("images/coach/6c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Ah~ Master. That was-");
			writeText("You cut her off again, pulling her up and onto her knees, and pointing her away from you. You don't give her time to react before you line your cock up with her plump ass.");
			writeSpeech("player", "", "I'm still not done, slut.");
			writeBig("images/coach/6c6.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "If you're not done, Master, then your slut is here to please.");
			writeSpeech("player", "", "Then please me, slut. Get my cock in your ass.");
			writeSpeech("coach", "", "I've... Never.. But, yes. I will Master. Just let me...");
			writeText("She slowly pushes herself backwards. You cock meeting resistance as it presses up against her tight, puckered hole. Slowly, she relaxes and starts to take you in.");
			writeBig("images/coach/6c7.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "Fuck, fuck fuck, fuck, fuck...");
			writeText("Her curses are no louder than a whisper as she slowly inches your cock into herself. Bit by bit, she moves herself back and forth, trying to go a little deeper each time, and making good progress.");
			writeText("Too bad you're feeling impatient.");
			writeText("She moves to pull herself off your cock again, when you grab her hips and <b>yank</b> her backwards onto your cock, nearly bottoming out before she clenches in surprise and pain.");
			writeSpeech("coach", "", "<b>Fuck!</b> Master I-");
			writeText("You pull back your hand and spank her right across her ass, hard enough to leave a red mark that may become a bruise.");
			writeSpeech("player", "", "Quiet slut! I gave you plenty of time to loosen yourself up for me, now I'm going to fuck. You. Senseless.");
			writeText("And with that you start to pump yourself quickly. With how tight she is, and how much she's clenched down, you can't actually get much movement, but the feeling of her ass trying to hold you in and squeeze you dry is overpowering. You work your way deeper and deeper with each thrust, and you get ready to give your slut one last load.");
			writeSpeech("coach", "", "Cum in me Master! Please! Fill this worthless slut's ass!");
			writeBig("images/coach/6c8.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "Take it you whore!");
			writeText("As you cum, you feel her cum with you, her ass convulsing, tightening and loosening as your cum fills her to the brim.");
			writeBig("images/coach/6c9.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("coach", "", "So full... Thank you Master.");
			writeText("You pull yourself out and take a moment to admire your handiwork before cleaning yourself and getting ready to go. coachF is too worn out to move, and merely stays where she was, kneeled on the bed, cum leaking out of both her holes as you take off.");
			writeFunction("changeLocation(data.player.location)", "Another satisfied slave.");
			updateMenu();
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
			break;
		}
	}
	//Don't touch the rest of this stuff, it has to do with unlocking scenes.
	var unlockedScene = "";
	for (i = 0; i < eventArray.length; i++) {
		if (eventArray[i].index == name) {
			unlockedScene = eventArray[i];
		}
	}
	if (unlockedScene != "" && galleryCheck(name) != true) {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "coachphone1", trust: 30,},
	{index: "coachphone2", trust: 31,},
	{index: "coachphone3", trust: 70,},
	{index: "coachphone4", trust: 81,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "coachphone1": {
			writePhoneSpeech("coach","","So, when am I supposed to watch these 'orientation videos'. Waste of fucking time.");
			writePhoneSpeech("player","","You could at least pretend to take this seriously.");
			writePhoneSpeech("coach","","Trust me shithead, I'm taking it seriously. Just wondering how to cut your brake lines without getting caught by the police.");
			writePhoneSpeech("player","","Well, step one is probably 'don't text your plan to me.'");
			writePhoneSpeech("player","","Besides, I walk to work.");
			writePhoneSpeech("coach","","Hit and run it is.");
			writePhoneSpeech("player","","I'll let you know when I have the course prepared. I get the feeling you'll need some specially made stuff if I want the lessons to sink in.");
			writePhoneSpeech("coach","","Oh, fucking joy. I get to see your home movies.");
			setTrust('coach', 31)
			break;
		}
		case "coachphone2": {
			writePhoneSpeech("coach","","You have those videos yet?");
			if(data.player.hacking > 2){
				writePhoneChoices("Yep, you want a preview?");
			}
			break;
		}
		case "coachphone2A": {
			writePhoneSpeech("coach","","A preview, what the fuck are you talking about?");
			writePhoneSpeech("player","","Oh, just the opening logo. I made it myself, and I'm pretty proud of it.");
			writePhoneSpeech("coach","","Christ you're a nerd.");
			writePhoneImage("images/coach/ribbonball.gif", "spinny");
			writePhoneSpeech("coach","","I... What... What did you just send me?");
			writePhoneSpeech("player","","Neat, right? It works better when paired with the voice over and backing track, but the image itself is pretty good all on it's own.");
			writePhoneSpeech("coach","","I don't... Whatever, you nerd, just meet me in the teacher's lounge so I can watch this shit and be done with it. Then I can go back to figuring out how to kill you.");
			setTrust('coach', 35);
			break;
		}
		case "coachphone3": {
			writePhoneSpeech("coach","","Sooo...?");
			writePhoneSpeech("player","","So what?");
			writePhoneSpeech("coach","","When did you want to see me next?");
			writePhoneSpeech("coach","","I... Damnit. Sorry, playerH! I meant... playerH when is my next lesson?");
			writePhoneSpeech("player","","If that's how you're going to behave, slut, I don't think it's worth my time to teach you.");
			writePhoneSpeech("coach","","No! playerH! I promise, I'll learn. I just... I missed you.");
			writePhoneSpeech("player","","Then prove it, and make up for not showing me the respect I deserve.");
			writePhoneSpeech("coach","","I... I understand, playerH.");
			writePhoneImage("images/coach/selfie1.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("player","","Not good enough, slut. I expect more.");
			writePhoneSpeech("coach","","Shit. Sorry, playerH! I should have known... I... What do you want from me, playerH?");
			writePhoneChoices("Strip, slut. Show me your body.", "Do you have anything appropriate laying around you house?");
			break;
		}
		case "coachphone3A": {
			writePhoneSpeech("coach","","I... Fuck, of course I should have... One second, playerH.");
			writePhoneImage("images/coach/selfienude.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("coach","","I made sure to warm myself up for you, playerH.");
			writePhoneSpeech("player","","What did you think about while you touched yourself, slut?");
			writePhoneSpeech("coach","","I thought about you, playerH. I thought about you teaching me how to be a better teacher. How to be a better slut for you.");
			writePhoneSpeech("player","","That's a good whore. I need to pick something up for your next lesson. You need a proper uniform.");
			writePhoneSpeech("coach","","Thank you, playerH! I'll be ready");
			setTrust('coach', 75);
			break;
		}
		case "coachphone3B": {
			writePhoneSpeech("coach","","I... Shit how could I forget. Give me a second, playerH.");
			writePhoneImage("images/coach/selfiecow.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("coach","","I bought this a while back, but I haven't gotten a chance to wear it for anyone yet. Of course I should have worn this for you, playerH.");
			writePhoneSpeech("player","","A fitting outfit for you, slut.");
			writePhoneSpeech("coach","","Thank you, playerH.");
			writePhoneSpeech("coach","","Wearing it makes me feel like an animal. A pet for you to use, playerH. Would you please use your slut cow's udders?");
			writePhoneSpeech("player","","I will, though not yet. I need to pick something up for your next lesson. You need a proper uniform.");
			writePhoneSpeech("coach","","Whenever you want me, playerH. I'll be ready for you.");
			setTrust('coach', 75);
			break;
		}
		case "coachphone4": {
			writePhoneSpeech("coach","","Master? I... I wanted to ask. What's next?");
			writePhoneSpeech("player","","Next, you're going to help me add to my harem.");
			writePhoneSpeech("coach","","Is your slut not enough for you Master?");
			writePhoneSpeech("player","","I plan to make this whole town mine. You will help me, slut.");
			writePhoneSpeech("coach","","If you want it Master, I'll do anything.");
			writePhoneSpeech("player","","And for each new addition, I promise to reward you, slut.");
			writePhoneSpeech("coach",""," Oh! Thank you Master! Then I'll get right to it.");
			writePhoneSpeech("player","","I already have a few ideas, slut. I'm going to send you some students' files. I'll meet you in the teacher's lounge when I'm ready.");
			setTrust('coach', 100);
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
console.log(character.index+'.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "load": {
		data.story.push(character);
		console.log(character);
		console.log(data.story);
		writeSpecial(character.fName+" has been added to the game!");
		writeSpeech(character.index, "", character.fName+ " " + character.lName + ", written by "+ logbook.author + ", art by "+ logbook.artist+".");
		loadCharacter("sports");
		loadCharacter("orange");
		loadCharacter("cold");
		loadCharacter("swimmer");
		break;
	}
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEvent(eventName);
		break;
	}
	case "unlock": {
		var unlockedScene = "";
		for (i = 0; i < eventArray.length; i++) {
			if (eventArray[i].index == n) {
				unlockedScene = eventArray[i];
			}
		}
		if (unlockedScene != "") {
			data.gallery.push(unlockedScene);
			writeSpecial("You unlocked a new scene in the gallery!");
		}
		else {
			console.log("Error, no scene named "+n+" found to unlock.");
		}
		break;
	}
	case "check": {
		if (encounteredCheck(character.index) != true) {
			for (i = 0; i < encounterArray.length; i++) {
				if (encounterArray[i].altImage == undefined) {
					encounterArray[i].altImage == "";
				}
				if (encounterArray[i].altName == undefined) {
					encounterArray[i].altName == "";
				}
				if (encounterArray[i].location.includes(data.player.location)) { //check the location
					if (encounterArray[i].time.includes(data.player.time)) { //check the time
						if (encounterArray[i].trustMin <= checkTrust(character.index) && encounterArray[i].trustMax >= checkTrust(character.index)) { //check the trust requirements
							if (encounterArray[i].day == "even" && data.player.day%2 == 0) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].reqItem) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
							if (encounterArray[i].day == "odd" && data.player.day%2 == 1) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].itemReq) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
							if (encounterArray[i].day == "both") {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].itemReq) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
									}
									else {
										printEncounterButton(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
									}
								}
							}
						}
					}
				}
			}
		}
		break;
	}
	case "shop": {
		var shopItem = "";
		for (item = 0; item < newItems.length; item++) {
			console.log("generating item "+ item + ": " + newItems[item].name + newItems[item].description + newItems[item].image + newItems[item].price + newItems[item].key);
			if (newItems[item].price != 0) {
				if (newItems[item].key == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
							<p class = "shopName">`+newItems[item].name+`</p>
							<p class = "shopDesc">`+newItems[item].description+`</p>
							<p class = "shopPrice">$`+newItems[item].price+`</p>
							<img class ="shopImage" src="`+newItems[item].image+`">
						</div>
						<br>
					`;
				}
				else {
					if (checkItem(newItems[item].name) == false) {
						document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
								<p class = "shopName">`+newItems[item].name+`</p>
								<p class = "shopDesc">`+newItems[item].description+`</p>
								<p class = "shopPrice">$`+newItems[item].price+`</p>
								<img class ="shopImage" src="`+newItems[item].image+`">
							</div>
						<br>
						`;
					}
				}
			}
		}
		break;
	}
	case "logbook": {
		logbookArray.push(logbook);
		break;
	}
	case "phoneCheck": {
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			if (checkTrust(character.index) == phoneArray[number].trust) { //if the player's trust with the character meets the text requirement
				for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
					if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
						if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
							notification(character.index)
							data.story[phoneEventCheck].textEvent = phoneArray[number].index;
							console.log(data.story[phoneEventCheck].textEvent);
						}
					}
				}
			}
		}
		break;
	}
	case "phoneEvent": {
		writePhoneEvent(eventName);
		break;
	}
}