var character = {index: "haze", fName: "Sienna", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#9c66c4", author: "CryptoGreek", artist: "Purple Haze", textHistory: "", unreadText: false,};

var logbook = {
	index: "haze", 
	desc: "A shapeshifting dream-eater that has a preference for people within hypnotic trances. She likes to take the forms of famous and attractive fictional characters.",
	body: "Her most-used form is that of a wet-dream-granting succubus from a recent anime with a curvaceous body with incredible flexibility.",
	clothes: "She usually wears a pink maid-headdress and and lewd lingerie, though she likes to change outfits when changing forms.",
	home: "She lives in a world sitting on the border between dream and reality, most easily accessed by hypnotic trance.",
	tags: "Cosplay, Shapeshifting, Succubus",
	artist: "Purple Haze",
	author: "CryptoGreek",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "haze1", name: "You still feel tired, despite just waking up. You could always go back to sleep...", location: 'playerHouse', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "Lingering Drowsiness", altImage: "images/none.png",},
	{index: "haze0A", name: "You're feeling a bit tired again. If you went back to sleep, you might have that dream again...", location: 'playerHouse', time: "Morning", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "Lingering Drowsiness", altImage: "images/none.png",},
	{index: "haze0B", name: "You're feeling a bit tired again. If you went back to sleep, you might have that dream about haze again...", location: 'playerHouse', time: "Morning", itemReq: "", trustMin: 20, trustMax: 20, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "haze2", name: "If you laid back down in bed, you could probably visit haze again.", location: 'playerHouse', time: "Morning", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "haze1": {
			writeText("Laying back down, the drowsiness spreads through your body more and more, your eyelids feeling almost absurdly heavy.");
			writeText("You didn't realize how cold the room felt until you slid back under the covers, curling up as the gentle press of sleep weighs your mind down...");
			writeText("...");
			writeText("Your eyes snap open sharply, your hypnotist senses tingling from the suspiciously potent urge to sleep.");
			writeText("Sure, getting out of bed can be hard, but you can't go skipping work!");
			writeText("...Or so you'd think, but looking around shows that you are <b>clearly</b> not in your room right now.");
			writeText("It's closer to a wide, expansive void than anything else, lightly violet in color.");
			writeText("And standing suggestively in front of you, her hands casually roaming her body, is a pink-haired woman.");
			writeBig("images/haze/profile.jpg","Art by Purple Haze");
			writeSpeech("haze","","HIDDENHah~! Wasn't expecting to see <i>you</i> down here, playerF.");
			if(checkTrust('succubus' >= 60)){
				writeSpeech("player","","...I attracted another succubus...?");
				writeText("You can't say you're entirely surprised, given what succubusF mentioned about you having a lot of power, but still...");
				writeSpeech("haze","","HIDDENEh?");
				writeText("The woman pauses, tilting her head.");
				writeSpeech("haze","","HIDDENYou've already...?");
				writeText("She stops, shaking her head a bit... and pretty much every other part of herself in the process.");
				writeSpeech("haze","","HIDDENSorry, forgot that we haven't <i>actually</i> met.");
			}
			else{
				writeSpeech("player","","Sorry, but do I know you? And where, exactly, <i>is</i> here? And... why am I naked?");
				writeText("You look around the formless void, frowning a bit.");
				writeSpeech("player","","I'm way more lucid than I should be for a dream...");
			}
			writeSpeech("haze","","HIDDENSorry, I honestly forgot that we haven't <i>actually</i> met!");
			writeText("She approaches you, leaning forward and running a finger up your neck...");
			writeText("-before pressing her mouth against yours, moaning gently as her tongue drags against yours.");
			writeText("A moment later, she pulls back, grinning.");
			writeSpeech("haze","","I go by Lucille. A <i>wonderful</i> little snack suggested the name a few centuries ago when I was looking for something new, and it stuck. And as for where you are...");
			writeText("She gestures vaguely at your head.");
			writeSpeech("haze","","You're in here~! You're having a pleasantly lucid dream right now, with me!");
			writeSpeech("player","","Okay. So you're a figment of my imagination, tossed into the dream?");
			writeSpeech("haze","","Ah, that's not...<br>Hm, how do I put this...?");
			writeText("She pauses to think.");
			writeFunction("writeEncounter('haze1A')", "Politely give her a moment to collect her thoughts");
			writeFunction("writeEvent('haze1B')", "If you dreamed such a lewd woman, it was for a reason - fuck her");
			writeFunction("writeEncounter('haze1Quit')", "Doesn't matter, you're not interested - time to wake up");
			break;
		}
		case "haze1A" : {
			writeText("She seems to need a moment to figure out how to explain the situation and, being the polite person you are, you oblige.");
			writeText("It isn't long before she nods firmly, refocusing on you.");
			writeSpeech("haze","","This place is your dream. However, I'm a visitor here - I popped in since I noticed a nice, deep dream on my... radar? It's not <i>actually</i> a <i><b>radar,</b></i> but you probably get what I mean.");
			if(checkTrust('succubus' >= 60)){
				writeSpeech("haze","","And I'm not a succubus, by the way. Not technically, anyway. I am a creature that subsists off the sexual energies of humans, but...");
				writeText("She thinks for another few moments.");
				writeSpeech("haze","","...I guess I'm like a cousin? I'm a dream-eating demon, so we're kinda similar, but the fact that I eat sexual dreams is just personal preference. For example, I know this one guy that only eats dreams that have whales in them.");
				writeSpeech("player","","...Okay. Let's say that that all makes sense. That doesn't explain why you know me.");
			}
			else{
				writeSpeech("haze","","Anyway, I'm a dream-eating demon, and I like to eat sexy dreams.");
				writeSpeech("player","","...A demon.");
				writeSpeech("haze","","Yup! That eats dreams.");
				writeSpeech("player","","Sexy ones specifically.");
				writeSpeech("haze","","Yup again!");
				writeText("She grins widely.");
				writeSpeech("haze","","Though, sex-dreams being my favorite is more of a personal-taste thing - I'm kinda the local weirdo for liking it. Or, at least I am <i>now,</i> seeing as the guy that exclusively ate dreams with whales in them went to linger around a sea park or something.");
				writeSpeech("player","","...Okay. I suppose that makes sense, but it doesn't explain why you know me.");
			}
			writeText("hazeF scoffs, shaking her head.");
			writeSpeech("haze","","I can only eat the dreams of people that are either sleeping deeply... or who are basically in the same <i>state</i> as sleeping. And if I like my dreams sexually-charged...");
			writeSpeech("player","","...then you'd want to hang around a sexual hypnotist.");
			writeSpeech("haze","","Bingo-bongo! I've been making sure those victims of yours end up in my neck of the dream-woods when you put them under - you have <i>excellent</i> taste by the way - but in all the time I've been around you, this is the first you've popped in here. So...");
			writeText("She grins widely again, spreading her arms out wide.");
			writeSpeech("haze","","Welcome to my place! Don't worry about, like, having your dreams and aspirations for the future eaten by the way - you taking over the town with hypnosis would <i>literally</i> be the best thing that could happen to me, so I support you ten billion percent!");
			if(checkTrust('succubus' >= 60)){
				writeSpeech("player","","...Neat. So I guess that makes you like my familiar or something?");
				writeSpeech("haze","","Definitely the 'something'. I don't do the whole 'contracting' thing - I don't like being tied down, y'know? I'll leave that to the cum-drunk subby-succys. I'd rather just flit about and enjoy dreams from all over the world, free to enjoy whatever I'm feeling into that year.");
				writeText("She chuckles softly.");
				writeSpeech("haze","","You'd be amazed how helpful shapeshifting is for that sort of thing. The 1790s were absolutely <i>delicious</i> when it came to hate-fucking if you were in France, assuming you knew what face to wear. Had to dip once a few guys started to dream about getting a <i>different</i> kind of head, though.");
				writeText("She shudders.");
				writeSpeech("haze","","Anyway, I kinda thought you'd be harder to convince about me being real and stuff, but I guess it makes sense if you've already plowed another succer's fields. So I guess we could always just have a bit of fun in here, before you wake up and all.");
				writeText("She rolls her shoulders back a bit.");
				writeBig("images/haze/1-1.jpg","Art by Purple Haze");
				writeSpeech("haze","","I know I'd enjoy it, and I'm sure I could have you moaning too~");
				writeFunction("writeEvent('haze1A')", "Roll with it and grab her tits");
				writeFunction("writeEncounter('haze1AA')", "Not today");
			}
			else{
				writeSpeech("player","","Okay, just... hold up. I have no actual guarantee you're anything but a dream, since I could just be dreaming that you're telling me you're a demon, which would imply some weird things about my own perception of how I use my abilities by the way. Not to be the asshole skeptic, but can you prove that you're real?");
				writeSpeech("haze","","Uh... Not really?");
				writeText("She stops to think for a moment.");
				writeSpeech("haze","","I guess... I'm real, but... So, like, I stick to the Dreamlands, meaning I can't exactly pop in through your window and suck your dick in the real world. But I <i>could</i> probably do some stuff if you <i>really</i> need convincing, but... isn't that a whole lotta effort?");
				writeText("She smiles seductively, running a hand down your chest.");
				writeSpeech("haze","","It'd be <i>way</i> more fun to just play around in here, wouldn't it? Feeding off of the sexual dreams of your prey is nice and all, but I'd be lying if I said playing with your toys is enough to <i>completely</i> satisfy me~");
				writeFunction("writeEvent('haze1A')", "Just have some sexual fun");
				writeFunction("writeEncounter('haze1AB')", "Convince me");
			}
			break;
		}
		case "haze1AA" : {
			writeSpeech("player","","Some other time, sure. But I wasn't exactly planning on spending the day in bed.");
			writeSpeech("haze","","Ah, good point. Gotta keep hypnotizing folk, and all that!");
			writeText("She grins, one hand going down and lightly pressing against her panties.");
			writeSpeech("haze","","I can pull you back down here in the mornings - daydreams are a bit easier to mold. See ya around~!");
			writeSpeech("player","","Yeah, see you later.");
			writeText("Taking a deep breath, you close your eyes for a moment...");
			writeText("Before sharply snapping them open, the dream disappearing entirely as you get a good look at your room again.");
			writeText("And it looks like you were only asleep for a minute or so.");
			writeText("...Neat.");
			if(data.player.location != "gallery"){
				if(checkTrust('haze') < 20)
					setTrust('haze',20);
			}
			writeFunction("changeLocation(data.player.location)", "Get up");
			break;
		}
		case "haze1AB" : {
			writeSpeech("player","","If there's something you can convince me with, I say go for it.");
			writeText("hazeF frowns, sighing as she scratches the back of her head.");
			writeSpeech("haze","","...Fine. But only because you've been helping me out a whole bunch, okay?");
			writeText("Stepping right up to you, she presses her finger against her lips for a moment, a faint, glittery glow about them as she leans forward.");
			writeText("Lightly grasping your chin, she gently kisses your neck once before standing back up and muttering,");
			writeSpeech("haze","","Jeez... I'll need a refill later...");
			writeText("Then, with a snap of her fingers, your own eyes snap open sharply.");
			writeText("You're awake now, feeling less tired as you sit up, the dream far more memorable than it should be.");
			writeSpeech("player","","...Huh.");
			writeText("Bringing your hand to your neck, you can feel the light sensation of glitter. Taking a look at your fingers, it's obvious that it's the same stuff from hazeF's lips.");
			writeSpeech("player","","Well, she's real... but fucking glitter?");
			writeText("You look down at your sheets, seeing the abominable stuff on it.");
			writeSpeech("player","","...That's not gonna wash off, is it...?");
			writeText("Might as well try and wash it before getting on with your day.");
			writeText("At least you were only asleep for a few minutes...");
			if(data.player.location != "gallery"){
				if(checkTrust('haze') < 20)
					setTrust('haze',20);
			}
			writeFunction("changeLocation(data.player.location)", "Wash your sheets and head out");
			break;
		}
		case "haze1Quit" : {
			writeSpeech("player","","Yeah, lemme just stop you right there.");
			writeText("She pauses.");
			writeSpeech("player","","I've got things I need to do, and I don't plan on dreaming the day away.");
			writeSpeech("haze","","O-Oh.");
			writeSpeech("player","","Yup.");
			writeSpeech("haze","","Well, in that case, you... should probably get going. If you want, I can bring you back here some other time?");
			writeFunction("writeEncounter('haze1QuitA')", "Some other time, sure");
			writeFunction("writeEncounter('haze1QuitB')", "No");
			break;
		}
		case "haze1QuitA" : {
			setTrust('haze',1);
			writeSpeech("player","","Not exactly sure how all of this works, but sure.");
			writeText("hazeF visibly perks up, nodding energetically.");
			writeSpeech("haze","","Then you'd better get up! Can't take over the town in bed - pun not intended. Good luck out there!");
			writeSpeech("player","","Er, thanks?");
			writeText("Shaking your head a bit, you take a deep breath and close your eyes for a moment...");
			writeText("Before sharply snapping them open, the dream disappearing entirely as you get a good look at your room again.");
			writeText("And it looks like you were only asleep for a minute or so.");
			writeText("Neat.");
			writeFunction("changeLocation(data.player.location)", "Get up");
			break;
		}
		case "haze1QuitB" : {
			writeSpeech("player","","Nope.");
			writeText("Taking a deep breath, you close your eyes for a moment...");
			writeText("Before sharply snapping them open, the dream disappearing entirely as you get a good look at your room again.");
			writeText("And it looks like you were only asleep for a minute or so.");
			writeText("Neat.");
			setTrust('haze',-1);
			writeFunction("changeLocation(data.player.location)", "Get up");
			break;
		}
		case "hazeEvent1A" : {
			writeText("You grasp her chest firmly, guiding her body down until her chest is just above your cock, leaning your own body back onto the immaterial ground.");
			writeText("The angle is a bit too awkward to keep a good hold on her tits, but she quickly makes up for it as she fills in the gaps, pressing the head of your cock between her breasts and grasping your shaft.");
			writeBig("images/haze/1-4.jpg","Art by Purple Haze");
			writeSpeech("player","","Put those tits to good use, hazeF.");
			writeSpeech("haze","","Nnf~ Yes, <i>*Master~</i>");
			writeText("Your slick cock slides between her tits, her unrealistic bra keeping them together enough to squeeze around your head as she starts stroking up and down, her other hand languidly tracing circles along your thigh.");
			writeText("Breathing heavily, she heaves her chest up and down by just a bit, the head of your cock going from the warm squeeze of her chest to the cool air above it every second.");
			writeText("Meanwhile, she keeps changing her grip as she strokes you up and down, her arm bouncing against her breast as she bounces up and down, squeezing tightest at the base of your cock before relaxing and dropping back down.");
			writeSpeech("player","","F-Fuck...!");
			writeText("She smiles as you groan, pushing her body against yours.");
			writeSpeech("haze","","God yes...~! Moan for me, darling! I want to know <i>exactly</i> how good you're feeling~!");
			writeText("She presses forward a bit more, your balls against her stomach as she speeds up her hand, bouncing her entire body with every stroke.");
			writeSpeech("player","","Crap, I'm already...!");
			writeSpeech("haze","","Yes, yes, <i>yes...!</i> Come on, paint this body with your tasty cum, darling~!");
			writeText("The slick gloves have a completely different feeling compared to skin, and with her tits stimulating your head so much, it's pushing you over...!");
			writeSpeech("player","","I'm cumming!");
			writeBig("images/haze/1-5.jpg","Art by Purple Haze");
			writeSpeech("haze","","Oh my~!");
			writeText("Your hips buck forward as you start to jizz, hazeF's eyes going wide as you spatter her chest.");
			writeText("But she doesn't slow down, her body still bouncing and her hand still stroking as you realize the pleasure isn't getting weaker.");
			writeSpeech("haze","","Keep going~! Empty those thick, beautiful balls all over me~!");
			writeSpeech("player","","I can't stop...!");
			writeText("More and more cum spurts out, your body tensing up as cum rope after rope, covering her hair and hand for what feels like minutes before she finally lets out a gentle giggle.");
			writeSpeech("haze","","Haah~ Jeez, you really are something, aren't you playerF?");
			writeBig("images/1-6.jpg","Art by Purple Haze");
			writeSpeech("haze","","This is totally my favorite part~");
			writeText("Pulling away from you, your breathing heavy, she uses her hands to pick up as much cum as she can with one hand, and starts licking it up.");
			writeSpeech("haze","","Mmn~!");
			writeText("While she laps her tongue along one hand, the other presses against the cum she missed, rubbing it all around her tits with a nearly orgasmic expression.");
			writeSpeech("haze","","Haah~... A sinner's cum is my favorite after all~");
			writeText("She grins down at you, your mind still swimming from the overload of pleasure as you sit up.");
			writeText("As you do, though, a soft light starts to shine in the center of your vision, a slight tinge of sadness appearing in hazeF's voice as she speaks.");
			writeSpeech("haze","","But it looks like our time's up... What a shame, hm? Come back later though, and maybe we can play around with another sexy body of mine~! Oh, and one more thing...");
			writeText("You can't see her anymore, but you can feel her breath on your ear...");
			writeSpeech("haze","","Slip a condom on next time~ It'll help~!");
			writeText("You open your mouth to respond, but your eyes end up flickering open instead.");
			writeSpeech("player","","...Well, fuck.");
			writeText("Sitting up, you can see your familiar room, the clock saying you were asleep for a couple hours... and your crotch is absolutely <b>soaked.</b>");
			writeSpeech("player","","...Which is the reason for the condom.");
			writeText("Sighing and scratching the back of your head, you get up to change your pants and wash your sheets, glad that you don't have regular hours at the university. Otherwise, principalF would be on your ass for not showing up today...");
			if(data.player.location != "gallery"){
				if(checkTrust('haze') < 40)
					setTrust('haze',40);
			}
			writeFunction("changeLocation(data.player.location)", "Wash your sheets and head out");
			break;
		}
		case "hazeEvent1B" : {
			writeText("You pull your hands off her tits, instead grabbing the top of her head and pushing her down as you stand.");
			writeText("Your cock brushes against her chin as she squats, dragging the slick shaft across her face as she moans, her smooth skin gliding pleasantly against your cock.");
			writeSpeech("haze","","F-Fuck, you smell <i><b>wonderful...!</b></i>");
			writeText("She rubs your cock across her face, grinning at it as she grasps the base, slapping it against her cheek with a moan.");
			writeSpeech("player","","You seem to be having fun.");
			writeSpeech("haze","","With a cock like this, how could I <i>not?</i>");
			writeText("Her free hand moves up to grasp her chest, fondling it roughly as she extends her tongue, wasting no time dragging it against your shaft.");
			if(checkTrust('meji') > 20 && checkTrust('tomgirl') > 1)
				writeSpeech("haze","","F-Fuck, I haven't had a real cock in <i><b>ages...!</b></i> Those boys you brought in before were <i>total</i> subs...!");
			else if(checkTrust('meji') > 20 || checkTrust('tomgirl') > 1)
				writeSpeech("haze","","F-Fuck, I haven't had a real cock in <i><b>ages...!</b></i> That boy you brought last time was a <i><b>total</b></i> sub...!");
			else
				writeSpeech("haze","","F-Fuck, I haven't had a real cock in <i><b>ages...!</b></i>");
			writeText("She takes a moment to hungrily look up at you.");
			writeSpeech("haze","","M-May I...?");
			writeSpeech("player","","I didn't exactly push you down there to talk.");
			writeText("Her face lights up as she slides forward.");
			writeBig("images/haze/1-7.jpg","Art by Purple Haze");
			writeText("Her tongue extends out, the underside of your head dragging against it for a moment before she pushes her head forward, sealing her lips around your shaft.");
			writeText("You can feel her tongue press your cockhead against the roof of her warm, slick mouth as she sways a bit, teasing at every inch with her tongue.");
			writeText("The hand that isn't busy squeezing her tit grasps your cock by the base, slowly jerking you off into her mouth with slow, methodical movements.");
			writeText("Squeezing tightly as she goes up, and relaxing on the way back up... It's almost like she's trying to milk your cock, while sliding your head against every surface in her mouth that she can.");
			writeText("And from her moaning...");
			writeSpeech("haze","","<i>Mmf~...</i>");
			writeText("...you can guess that she's enjoying it as much as you.");
			writeSpeech("player","","Fuck... Deeper, slut.");
			writeText("Her fingers dig sharply into her breast as she pulls her hand away from your cock, loyally starting to bob down your length.");
			writeText("She doesn't dip much lower than halfway at first, slowly getting a taste of each inch of your cock, but after a few moments...");
			writeSpeech("player","","C-Crap...!");
			writeText("She thrusts her head forward, taking you into her throat with a low, throaty moan that turns into a gag.");
			writeText("She keeps herself there for another few moments before pulling back up, her spit spilling past her lips and onto her chest as she takes a deep breath.");
			writeText("Looking up at you, swallowing firmly, she smiles.");
			writeSpeech("haze","","Sorry about this darling, but it's been so long that I don't think I can hold back~");
			writeText("She pushes her head back down, her tongue moving carefully along your shaft as your cock starts to feel warmer and more sensitive than before.");
			writeText("Her spit makes every slick surface in her mouth feel incredible as she shoves herself forward, your cockhead stretching out her throat as she keeps moaning.");
			writeText("You can barely hold on for a minute before the sensations start to overwhelm you.");
			writeText("She even pulls her head back, keeping only your head in her mouth, but you can still feel the sensation of her throat like she didn't stop as her hand joins in.");
			writeSpeech("haze","","Come on, give me that thick, hot cum...! I haven't tasted jizz in <i>so long~!</i>");
			writeText("Her begging, her hand, and the sensation of her throat is finally enough to finish you off, your cock throbbing hard as you feel it.");
			writeSpeech("player","","F-Fucking take it...!");
			writeText("She quickly takes your head back in her mouth, the ecstatic gleam in her eyes shifting to an orgasmic one as your start to spurt.");
			writeText("Each rope blasts to the back of her mouth, her hand milking every drop as she starts moaning, her body shaking.");
			writeText("The taste of your cum pushes her over the edge too, her eyes shutting tightly, a low moan shaking out of her as she squeezes her tit and starts to swallow.");
			writeBig("images/haze/1-8.jpg","Art by Purple Haze");
			writeText("Despite that, though, you feel yourself cumming more and more, the pleasure of the orgasm not fading in the least as she keeps milking your length with her hand, your entire body going tense and your vision getting shaky.");
			writeText("You're not sure how long you're standing there, cumming more than should be possible into her mouth, but you're sure it's a least a full minute before you finally stop.");
			writeText("Even with her swallowing so much, cum spilled down out of her mouth and onto her chest, spattering and covering her and sliding between her tits.");
			writeBig("images/haze/1-9.jpg","Art by Purple Haze");
			writeText("When she finally pulls her mouth off of your cock, it's with a gasping moan as she shoves a hand down her panties.");
			writeSpeech("haze","","F-Fuck...~! I forgot how <i>addictive</i> a sinner's cum can be~...!");
			writeText("Grinning widely, she looks up at you, but you feel a bit drained, and a small light seems to appear in your vision.");
			writeText("hazeF seems to notice this, letting out a small whine of disappointment.");
			writeSpeech("haze","","It's been that long already...? But we only came once...!");
			writeText("She sighs, standing up as the white takes up more of your vision, though you can still hear her fingering herself.");
			writeSpeech("haze","","Make sure to come back again, and maybe we can play around with another sexy body of mine~! And one more thing...");
			writeText("You can't see her anymore, but you can feel her breath on your ear...");
			writeSpeech("haze","","Slip a condom on next time~ It'll help~!");
			writeText("You open your mouth to respond, but your eyes end up flickering open instead.");
			writeSpeech("player","","...Well, fuck.");
			writeText("Sitting up, you can see your familiar room, the clock saying you were asleep for a couple hours... and your crotch is <b>soaked.</b>.");
			writeSpeech("player","","...Which is the reason for the condom.");
			writeText("Sighing and scratching the back of your head, you get up to change your pants and wash your sheets, glad that you don't have regular hours at the university. Otherwise, principalF would be on your ass for not showing up today...");
			writeFunction("changeLocation(data.player.location)", "Wash your sheets and head out");
			break;
		}
		case "haze0A" : {
			writeText("You did mention in the dream that you'd be back later... And honestly, now's as good a time as any.");
			writeText("You lay back down in bed, breathing deeply for a few seconds. Counting backwards down from ten, you hear some movement around the count of 3.");
			writeSpeech("haze","","Ah, you're back!");
			writeText("Opening your eyes, you can see hazeF standing in front of you again.");
			writeSpeech("haze","","So, did you come 'cause you were looking for some fun, or...?");
			writeFunction("writeEncounter('haze0AA')", "Ask her for the full explanation");
			writeFunction("writeEvent('haze1B')", "You came here for sex, not conversation");
			break;
		}
		case "haze0AA" : {
			setTrust('haze',40);
			writeSpeech("player","","Actually, I wanted to know what's up with this place. ");
			writeSpeech("haze","","Ah, okay. Can't blame you - it's probably a bit of a weird place to a human.");
			if(checkTrust('succubus') >= 60){
				writeSpeech("player","","You're some sort of a demon, then? That makes two, I guess.");
				writeText("She stops in place, looking at you in surprise.");
				writeSpeech("haze","","...Huh. If you already met one, then I guess that makes things easier.");
				writeText("She scratches the back of her head, shifting in place.");
				writeSpeech("haze","","I'm a type of dream-eating demon. Kinda like a... cousin, I guess, to succubi. We can subsist off of just dreams, and any type will do, really. I know one guy who'd only eat dreams that involved whales - last I heard, he went to go linger around a sea park or something.");
				writeText("She taps her chin thoughtfully.");
				writeSpeech("haze","","I just happen to like sexually-charged dreams. They've got a specific flavor to 'em that I just really dig. So when I stumbled across a certain perverted hypnotist, I decided to stick around and see if you'd be a good source for dreams.");
				writeSpeech("player","","And... does that affect them?");
				writeSpeech("haze","","Only if I take too much, and I'm not exactly strapped for food nowadays. I mean, even if you weren't a hypnotist, we <i>are</i> kinda right next to a university, which is, like, the number one place for sexually frustrated dreamers and nymphos.");
				writeText("Harsh, but not entirely untrue...");
				writeSpeech("haze","","Anyway...");
				writeText("hazeF smirks.");
				writeSpeech("haze","","Choosing to linger around your taste paid off pretty quick. And that brings us to the now!");
			}
			else{
				writeText("...Human?");
				writeSpeech("player","","The way you phrased that makes it sound like you're distinctly <i>not</i> human.");
				writeSpeech("haze","","How many humans do you know that can mess with people's dreams?");
				if(checkTrust('scarf') >= 62){
					writeSpeech("player","","Just the one, but it was pretty memorable.");
					writeSpeech("haze","","...Right, forgot about her. Point is, I'm a demon - a dream-eating one, specifically. I'm kinda like a, uh... a cousin, I guess, to succubi. I can subsist off of just dreams, and any type will do, really. I know one guy who'd only eat dreams that involved whales - last I heard, he went to go linger around a sea park or something.");
				}
				else{
					writeSpeech("player","","Fair point.");
					writeSpeech("haze","","Yup. So basically, I'm a demon. A dream-eating one, to be specific. I'm kinda like a, uh... a cousin, I guess, to succubi. We can subsist off of just dreams, and any type will do, really. I know one guy who'd only eat dreams that involved whales - last I heard, he went to go linger around a sea park or something.");
				}
				writeSpeech("player","","So you eat people's dreams to survive?");
				writeSpeech("haze","","Eeeehhhhh...");
				writeText("She kinda wiggles in place, thinking for a moment.");
				writeSpeech("haze","","Sorta? It's a lot more complicated than that makes it sound, but that's basically it. I like sexually-charged dreams, so I usually stick around really hedonistic places or people.");
				writeText("She pauses.");
				writeSpeech("haze","","Ah, and I don't intend on, like, eating your dreams as in your aspirations. The more people you put under, the more sexually charged dreams I get to snack on.");
				writeSpeech("player","","And... does that affect them?");
				writeSpeech("haze","","Only if I take too much, and I'm not exactly strapped for food nowadays. I mean, even if you weren't a hypnotist, we <i>are</i> kinda right next to a university, which is, like, the number one place for sexually frustrated dreamers and nymphos.");
				writeText("Harsh, but not entirely untrue...");
			}
			writeSpeech("player","","Huh. So I've basically had a demon on my shoulder since coming here?");
			writeSpeech("haze","","Not really...? I stick in the Dreamlands, so it's not like I can really see you. I just wait until I feel someone with your flavor go into a trance and make sure they end up in my neck of the dream-woods.");
			writeSpeech("player","","So... more like a cosmic mooch.");
			writeText("She chuckles, shaking her head.");
			writeSpeech("haze","","Not too far off, actually. I've been a lot more careful about my feeding ever since I got a bit ahead of myself... if you'll forgive the pun.");
			writeText("...What pun?");
			writeSpeech("haze","","I try not to make ripples anymore. If some lower-ranked demon wants to go around, raising their mark to the top of the world to get themselves a sip at corrupted essence, then more power to 'em. But honestly...");
			writeText("She grins, pushing out her chest.");
			writeBig("images/haze/1-1.jpg", "Art by Purple Haze");
			writeSpeech("haze","","I might not get to have fun as <i>often</i> as them, but I've learned to appreciate <i>every single moment.</i> And seeing as you're down here~...");
			writeText("There is absolutely no subtlety to her movements as one of her hands caresses the outside of her panties.");
			writeFunction("writeEvent('haze1A')", "Enjoy the moment with her");
			break;
		}
		case "haze0B" : {
			writeText("You did mention that you'd come back later, and now's as good a time as any, so...");
			writeText("You lay back down in bed, breathing deeply for a few seconds... Though it only takes a moment for you to hear hazeF's voice.");
			writeSpeech("haze","","Hello again!");
			writeText("Sitting up... Standing up? The void is weirdly floaty, which makes sense for a dream, but it's still a bit weird.");
			writeSpeech("player","","Hello hazeF.");
			writeText("You try to focus on standing and, sure enough, you feel the sensation of solid ground beneath your feet a moment later.");
			writeSpeech("haze","","Ooh, nice - fast learner, aren't ya?");
			writeText("She smiles and sits down on the air, though you can still see the shape of ass flatten a bit like she was sitting on an invisible chair.");
			writeSpeech("haze","","Sorry about last time, by the way. I'm usually better with controlling myself, but you don't exactly have a long history of hypnotizing and fucking studs, so I got a little <i>too</i> excited.");
			writeText("She pauses, looking over you.");
			writeSpeech("haze","","I, uh... didn't drain you <i>too</i> hard, right? You were fine after you woke up?");
			writeSpeech("player","","I was out for most of the afternoon, if that's what you mean.");
			writeText("hazeF relaxes a bit, smiling.");
			writeSpeech("haze","","If that's all, then good. Humans can be pretty fragile, so I just wanted to make sure I didn't break you.");
			writeSpeech("player","","...I feel mildly offended that you think I'd break that easily.");
			writeText("hazeF just kinda shrugs, leaning back on the non-existant furniture.");
			writeSpeech("haze","","Sorry, then. Like I said before, I don't get to feed as often as I'd like, and most of the people I <i>do</i> feed on tend to be pretty average - one of many trade-offs, I guess.");
			writeText("At that, her grin quickly returns, a faint shimmer surrounding her body.");
			writeSpeech("haze","","Speaking of, if you're here looking for a quickie, I'd be <i>thrilled</i> to get another taste of you~");

			break;
		}
		case "haze2" : {
			if(checkFlag('haze','Explain')){
				removeFlag('haze','Explain');
				writeSpeech("haze","","");
				break;
			}
			else{
				break;
			}
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "haze1A", name: "Meeting - Getting Handsy with hazeF"},
	{index: "haze1B", name: "Meeting Alt - Impatient and Handsy"},
];

function writeEvent(name) { //Plays the actual event.
	wrapper.scrollTop = 0;
	switch (name) {
		case "haze1A": {
			if(data.player.location != "gallery"){
				if(checkTrust('haze') < 40)
					setTrust('haze',40);
				writeEvent("haze1B");
				if(checkFlag('haze','Explain'))
					removeFlag('haze','Explain');
			}
			document.getElementById('output').innerHTML = '';
			writeText("Might as well have some fun while you're down here, right?");
			writeText("You reach forward, your hands grabbing her tits as she lets out a soft moan.");
			writeText("Smiling at you, she reaches both of her gloved hands down, the first firmly grasping your cock and the other sliding into her panties.");
			writeBig("images/haze/1-2.jpg","Art by Purple Haze");
			writeSpeech("haze","","Good answer, darling~ Feel free to play with these tits all you like~!");
			writeText("You can feel her nipples stiffen under your palms as she uses her hands to get you both off, the sound of her stirring up her wet pussy filling the air as she bites her lip.");
			writeText("A moment later, she pulls both of her hands away, switching them around as you feel her slick hand start to get your shaft wet with her fluids.");
			writeText("Moving you own hands, you give her nipples a sharp squeeze.");
			writeBig("images/haze/1-3.jpg","Art by Purple Haze");
			writeSpeech("haze","","Ahn~!");
			writeText("She seems to enjoy it, her grip tightening a little bit as she starts jerking you off more slowly.");
			writeSpeech("haze","","You must really like these tits, darling~! I've picked up more than a few sexy bodies from all sorts of dreams, but I'd be lying if I said I don't play favorites...~!");
			writeText("She leans into your hands, jerking you off and fingering herself even faster as you feel her breath on your neck.");
			writeSpeech("haze","","Such lewd, <i>sensitive</i> tits, and they're all yours to play with~ This whole body exists for your pleasure, so go right ahead and <i>take what you want~!</i>");
			writeFunction("writeEncounter('hazeEvent1A')", "Titfuck her");
			writeFunction("writeEncounter('hazeEvent1B')", "Have her blow you");
			break;
		}
		case "haze1B" : {
			if(data.player.location != "gallery"){
				writeEvent("haze1A");
				if(checkTrust('haze') < 40)
					setTrust('haze',40);
				if(checkFlag('haze','Explain') != true)
					addFlag('haze','Explain');
			}
			document.getElementById('output').innerHTML = '';
			writeText("You casually reach forward, grasping her tits firmly.");
			writeSpeech("player","","If this is a dream, I think I'll have some fun.");
			writeSpeech("haze","","Oh-ho...?");
			writeBig("images/haze/1-2.jpg","Art by Purple Haze");
			writeText("She curves her back a bit, offering up her chest for you with a wry smile.");
			writeSpeech("haze","","Someone's a little impatient, hm? Not that I mind, of course~ I'll explain later, so for now...");
			writeText("She moves her hands deftly, one reaching forward to your cock, the other moving to her cunt.");
			writeSpeech("haze","","Play with me as much as you like, playerF~");
			writeText("As she does, you can feel her nipples begin to stiffen. The sound of her fingers stirring up her pussy fill the air as she bites her lip.");
			writeText("Moving your own hands, you give her nipples a sharp squeeze.");
			writeBig("images/haze/1-3.jpg","Art by Purple Haze");
			writeSpeech("haze","","Ahn~!");
			writeText("She clearly doesn't seem to mind.");
			writeSpeech("haze","","Do you like them~?");
			writeText("She grins widely, her gloved hand starting to stroke up and down your length.");
			writeSpeech("haze","","I've picked up a nice number of sexy forms from all sorts of dreams, but this one is one of my favorites~ Such lewd, <i>sensitive</i> tits, and they're all yours to play with~!");
			writeText("You keep squeezing, teasing, and playing around with her tits, enjoying each moan as she jerks you off and plays with herself.");
			writeText("Every few seconds, she switches her hands around, getting your shaft slick with her juices as you get rougher with her chest.");
			writeText("After a minute or so of that, though, you both seem ready to move on to something a little more <b>stimulating</b>...");
			writeFunction("writeEncounter('hazeEvent1A')", "Titfuck her");
			writeFunction("writeEncounter('hazeEvent1B')", "Have her blow you");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
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
	{index: "placeholder", trust: 200,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
console.log(character.index+'.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEvent(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			writeFunction("loadEncounter('system', 'gallery')", "Finish");
		}
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
			for (number = 0; number < encounterArray.length; number++) { //start going through encounter array
				var finalLocation = "";
				var finalResult = true;
				if (encounterArray[number].location != null) {
					var finalLocation = encounterArray[number].location;
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map") { //check the location
						if (encounterArray[number].time.includes(data.player.time)) { //check the time
							if (encounterArray[number].trustMin <= checkTrust(character.index) && encounterArray[number].trustMax >= checkTrust(character.index)) { //check the trust requirements
								if (encounterArray[number].day == "even" && data.player.day%2 == 1) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].day == "odd" && data.player.day%2 == 0) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].itemReq != "" && checkItem(encounterArray[number].itemReq) != true) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect item");
								}
							}
							else {
								//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect trust at "+checkTrust(character.index)+". Trustmin: "+encounterArray[number].trustMin);
								finalResult = false;
							}
						}
						else {
							//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect time");
							finalResult = false;
						}
					}
					else {
						//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect location");
						finalResult = false;
					}
				}
				else {
					console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var finalResult = true;
					if (encounterArray[number].requirements.includes("loc") == true) {
						var loc = encounterArray[number].requirements.split(`location `).pop().split(`;`)[0];
						var finalLocation = loc;
						if (data.player.gps != true) {
							if (loc.includes(data.player.location) != true) {
								finalResult = false;
							}
						}
						else {
							if (loc.includes(data.player.location) != true && data.player.location != "map") {
								finalResult = false;
							}
						}
					}
					if (encounterArray[number].requirements.includes("item") == true) {
						var item = encounterArray[number].requirements.split(`item `).pop().split(`;`)[0];
						if (checkItem(item) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("time") == true) {
						var time = encounterArray[number].requirements.split(`time `).pop().split(`;`)[0];
						if (time.includes(data.player.time.toLowerCase()) != true) {
							finalResult = false;
						}
					}
					if (encounterArray[number].requirements.includes("parity") == true) {
						var time = encounterArray[number].requirements.split(`parity `).pop().split(`;`)[0];
						switch (parity) {
							case "even": {
								if (data.player.day%2 == 1) {
									finalResult = false;
								}
							}
							case "odd": {
								if (data.player.day%2 == 0) {
									finalResult = false;
								}
							}
							default: {
								//console.log("Error! Parity defined but an invalid parity used. BE sure to use either even or odd, and make sure you have a semicolon afterwards.");
							}
						}
					}
					for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
						var corruptionTarget = data.story[characterIndex].index;
						if (encounterArray[number].requirements.includes("trust " + corruptionTarget) == true) {
							var trust = encounterArray[number].requirements.split(`trust `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) != trust) {
								finalResult = false;
							}
							//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
							var trustMin = encounterArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) < trustMin) {
								finalResult = false;
							}
							//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
							var trustMax = encounterArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkTrust(corruptionTarget) > trustMax) {
								finalResult = false;
							}
							//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
						}
						if (encounterArray[number].requirements.includes("flag " + corruptionTarget) == true) {
							var flag = encounterArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
							if (checkFlag(corruptionTarget, flag) != true) {
								finalResult = false;
							}
							//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
						}
					}
				}
				if (finalResult == true) {
					//console.log("Final result for "+encounterArray[number].index+" true, location is "+finalLocation);
					if (data.player.location == "map" && finalLocation != "beach" && finalLocation != "casino") {
						var textString = "";
						for (locationIndex = 0; locationIndex < locationArray.length; locationIndex++) { //find the location target
							if (locationArray[locationIndex].index == finalLocation) {
								var textString = locationArray[locationIndex].name + " - ";
							}
						}
						if (textString != "") {
							printEncounterTab(character.index, encounterArray[number].index, textString + encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
						else {
							printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
					}
					else {
						//console.log(number);
						printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
					}
				}
				else {
					//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!final result for "+encounterArray[number].index+" false, location is "+finalLocation);
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
		var finalMessage = "";
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			if (phoneArray[number].trust != null) {
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
			else {
				//console.log("Now examining phone entry "+phoneArray[number].index+phoneArray[number].requirements);
				var finalResult = true;
				if (phoneArray[number].requirements.includes("item") == true) {
					var item = phoneArray[number].requirements.split(`item `).pop().split(`;`)[0];
					if (checkItem(item) != true) {
						finalResult = false;
					}
				}
				for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
					var corruptionTarget = data.story[characterIndex].index;
					if (phoneArray[number].requirements.includes("trust " + corruptionTarget) == true) {
						var trust = phoneArray[number].requirements.split(`trust `+corruptionTarget+`: `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) != trust) {
							finalResult = false;
						}
						//console.log("Index has a trust requirement of "+ trust +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMin " + corruptionTarget) == true) {
						var trustMin = phoneArray[number].requirements.split(`trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) < trustMin) {
							finalResult = false;
						}
						//console.log("Index has a trust minimum of "+ trustMin +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("trustMax " + corruptionTarget) == true) {
						var trustMax = phoneArray[number].requirements.split(`trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkTrust(corruptionTarget) > trustMax) {
							finalResult = false;
						}
						//console.log("Index has a trust maximum of "+ trustMax +" compared to "+checkTrust(corruptionTarget)+", final result is "+finalResult);
					}
					if (phoneArray[number].requirements.includes("flag " + corruptionTarget) == true) {
						var flag = phoneArray[number].requirements.split(`flag `+corruptionTarget+` `).pop().split(`;`)[0];
						if (checkFlag(corruptionTarget, flag) != true) {
							finalResult = false;
						}
						//console.log("Index has a flag requirement of "+ flag +" with character "+corruptionTarget+", final result is "+finalResult);
					}
				}
				if (finalResult == true) {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
						if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
							if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
								finalMessage = phoneArray[number].index;
							}
						}
					}
				}
				if (finalMessage != "") {
					for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) {
						if (data.story[phoneEventCheck].index == character.index) {
							if (
							data.story[phoneEventCheck].unreadText != true &&
							data.story[phoneEventCheck].textEvent.includes(finalMessage)==false &&
							data.story[phoneEventCheck].textHistory.includes(finalMessage)==false
							) {
								notification(character.index);
								data.story[phoneEventCheck].unreadText = true;
								data.story[phoneEventCheck].textEvent = finalMessage;
								data.story[phoneEventCheck].textHistory += finalMessage;
								console.log(data.story[phoneEventCheck].textEvent);
							}
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