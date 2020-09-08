var character = 'system';
var eventArray = [
	{index: "paperwork", name: "File Paperwork", location: 'playerOffice', time: "MorningEvening", 
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0,}
];
var newItems = [ //If price is 0 it isn't for sale
	{name: "Butt", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/butt.jpg", description: ""},
	{name: "Ghost AR", 			key: true, 		price: 0, 	image: "scripts/gamefiles/items/ghostAR.jpg", description: "The brand new mobile game Ghost AR! Track ghosts around the city, collect them all and save the world from their ghastly threat!"},
	{name: "Town Map", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/map.jpg", description: "Allows you to navigate around town more easily."},
	{name: "Hypnosis Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/hypnosisTextbook.jpg", description: "A textbook on hypnosis, you can read it at home to improve your skill."},
	{name: "Hacking Textbook", 	key: true, 	price: 50, 	image: "scripts/gamefiles/items/hackingTextbook.jpg", description: "A textbook on hacking, you can read it at home to improve your skill."},
	{name: "Counseling Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/counselingTextbook.jpg", description: "A textbook on counseling, you can read it at home to improve your skill."},
	{name: "Lady", 				key: true, 		price: 0, 	image: "scripts/gamefiles/profiles/lady.jpg", description: "For if you'd like to play as a cute lady. Unlocks the Lady character portrait. Aesthetic change only, art by Nusumenaihxseki"},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default. Tab appears below the map, button appears on the map itself
	{index: "paperwork", 	name: "File some Paperwork", 	location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 65, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "gameConsole", 	name: "Game Console", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 72, day: "both",},
	{index: "wardrobe", 	name: "Wardrobe", 				location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 1, day: "both",},
	{index: "laptop", 		name: "Use the Computer", 		location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 5, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'playerHouse', 		time: "MorningEvening", 			itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "newDay", 		name: "Go to Bed", 				location: 'playerHouse', 		time: "Night", 		itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "shop", 		name: "General Store", 			location: 'shoppingDistrict', 	time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 60, day: "both",},
];

function writeEncounter(scene) {
	console.log('now writing encounter '+scene);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	if (scene.includes("porn") || data.player.location == 'gallery') {
		document.getElementById('output').innerHTML = '';
	}
	switch (scene) {
		case "start" : {
			updateMenu();
			document.getElementById('playerImage').src = "scripts/gamefiles/none.png";
			var bg = "scripts/gamefiles/logo2.png";
			document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
			writeBig("scripts/gamefiles/logo2.png");
			writeText("Hentai University is an adult game created by NoodleJacuuzi and Captain Cryptogreek. You can find and keep up with all NoodleJacuzzi's games, including Human Alteration App, Princess Quest, and Rainy DayZ at the master index here: <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi's Index</a>");
			writeText("You can find more of Captain Cryptogreek's work here: <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek on Reddit</a>");
			writeText("This game is based (loosely) on the design of Hentai High School by Capta1n and the Hentai High School + project. However, there are no elements of school management or system of global corruption. The smaller scale means it will be more feasible to complete than either of those games.");
			writeText("As a content warning, this game features hypnosis and dubious consent between partners, and mostly depicts straight M/F sex. There are several male characters who have scenes depicting undoubtably homosexual content, but they universally have a trap/twink/femboi bodytype and no specific character relationships are ever forced on the player. Finally, all characters are portrayed as being 18 or older. Every single character is a high-school graduate, and we currently don't intend to add any character who looks underage.");
			writeText("If you'd like to avoid any specific fetishes, each character's logbook page lists the fetishes their scenes cover. Keep in mind that, as you are a hypnotist, hypnosis/mind control is so common we won't list it in the tags.");
			writeFunction("loadEncounter('system', 'prologue')", "Start the game as a man");
			writeFunction("loadEncounter('system', 'prologueAlt')", "Start the game as a futanari");
			if (data.player.vegetarian != true) {
				writeFunction("loadEncounter('system', 'vegetarian')", "Enable Vegetarian mode, disabling male / trap / femboi characters from appearing.");
			}
			else {
				writeSpecial("Vegetarian mode is active! Trap characters will no longer appear, restart the game to undo this effect.");
			}
			writeText("<hr>");
			writeText("Other notes:");
			writeText("Are <b>you</b> interested in getting your own character into Hentai University? Well, you're in luck! Hentai University v3 includes <b>Mod Support!</b> Hop over to the game's <a href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'>Modding Tutorial</a> if you're interested.");
			writeText("We're always open to comments or criticism. If you feel like school management would add a lot to the game, you'd like us to consider adding another artist, or you'd like to suggest content of your own, you can shoot us a message anywhere this game is posted. You can find the Patreon here: <a href='https://www.patreon.com/noodlejacuzzi'>Patreon Link</a>");
			writeText("You can also send us a message directly. Noodlejacuzzi is on discord (NoodleJacuzzi#4120) or you can send an email at noodlejacuzzi@gmail.com");
			writeText("Captain Cryptogreek can be messaged on his reddit account where he regularly posts captions. You can also shoot him an email if you'd like him to proofread or you'd like to commission his skills at cryptogreekcaptions@gmail.com");
			// replace [\r\n]+ with , 
			writeText("Thank you to: Swallows999, Iron Diana, Robbie, Joshua Ingram, Elias Errati, ryguy, 4MinuteWarning, Hi There, Carlos, Macarga, 林家豪, Richard, dragoon48, Skyrim mod lvr, Negativatron, Dustin Leichsenring, G, Ramsey Bisher, jack spencer, J_C_L, Filament, XxrobothacksxX, Dkells, Jinouga, Marco Wassmer, Taylor Trout, andres mejia, Colin E, Badaxe, Jesse Greene, Scal, ChronosEdge, 长平 鬣, Culton Niccum, thesingleguy, Kethis Immortalis, cabbage, colt, Anton Schmidt, Geoffrey Munoz, nicholas guerra, david thompson, Jayesonn leleaux, Bleed1ngthunder, Eric Hslew, Don, Vikteren, Dean, Sveny13, Kudon, theoron, AnotherAccount333, Gavin Davis, Lucas, Kaliden, Krose, Tyler Ross, greatred, FrostyTB, Riven Drasek, l, ranchy sanchy, TheRawToast, Limitless, Greg Torres, KVBismarc, Geoff Heimos, liam paterson, ChubbiestThread, Reverberations, ShadowFalls, William Parker, Magnus, Emanuel  Garcia, XaiuX, l1monat, Kieron Kow, Slomberg, henry grobins, ddkre, SmolFish, I'm a Mitch, GirmusCz, Anthony Ewing, Daniel Vivette, Harry Brasch, Daekash, fireballcreations, Markus Hansen, Louis Hayes, Tanman, DarthMalak, Danny Nguyen, yami, Grim2011, Darrell Goodman, Z, John Lewis, Bonelessunknown, Phanes, Scumstango, Aegil, Wei, Dugelle, CaptainMontana, Simon Rencher, dhccpmc, Chaaaanon, Charles Morris, Nutburger, Whynot, William Richardson, mazterlith, Anthony Munso, john smith, Your Husbando, Carlos, Joshua Melzark, Verillia tristari, ItsAllOgreNow, Gwen Yurick, Nils Maier, Blaise Fenn, stratum, Angel, Ariados, Jane, Snaked, Muryu, Debarre Sonny, Drashin, qwerty, murgatroid99, Roy, Wild Bill, and brandon, for funding this work! The patreon funds are split as Captain Cryptogreek has taken over as lead writer for the game.");
			writeSpecial("Special thanks to stiggy752 for the game's CSS, Wild Bill/Master of Puppets for the game's save to file system, and to OrangeMaestro for his orange eyes helping find many of the typos that plagued this game.");
			writeText("I've added the option to start as a futanari. This only changes your character's image and the pronouns used (so that you're ma'am instead of sir). Please let Noodle Jacuzzi know if anyone is still referring to you as 'sir' when inappropriate, thank you.");
			writeText("The game is more freeform and slower paced than my previous works. If you get stuck, please let us know. There isn't currently a guide, but we can easily feature an FAQ here.");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("This game uses art by artists like Enoshima Iki, Nagi Ichi, Oreteki18kin, and Gujira. Hover over an image for the artist who created it. Check it out, and feel free to check out each artist's pixiv as well:");
			listArtists();
			writeText("All of the artists who's works we've used have different styles, and all work is censored due to Japan's censorship laws. We don't ever intend to mix and match within scenes, but it is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider simply avoiding characters by these artists.");
			writeFunction("loadEncounter('system', 'oretekiTest')", "See an Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeFunction("loadEncounter('system', 'nagiTest')", "See a Nagi Ichi example <br>(AT LEAST 90% GAY)");
			writeFunction("loadEncounter('system', 'gujiraTest')", "See a Gujira example <br>(AT LEAST 80% GAY)");
			break;
		}
		case "vegetarian": {
			data.player.vegetarian = true;
			setTrust('tomgirl', -1);
			setTrust('meji', -1);
			setTrust('succubus', -1);
			setTrust('housekeep', -1);
			setTrust('nagatoro', -1);
			loadEncounter('system', 'start');
			break;
		}
		case "listTextbooks": {
			listTextbooks();
			break;
		}
		case "prologue": {
			writeText("Dear <input type='text' id='nameSubmission' value='Thomas'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few men have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			break;
		}
		case "prologueAlt": {
			data.player.gender = "woman";
			data.player.title = "Miss";
			data.player.honorific = "ma'am";
			if (checkBody("basil") != true) {
				var goof = {index: "basil", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			var pepsi = data.bodytypes.length-1;
			changeBody(pepsi);
			writeText("Dear <input type='text' id='nameSubmission' value='Tomara'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few women of your background have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			break;
		}
		case "prologue2": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are " + data.player.name + ", amateur hypnotist.");
			writeText("The time spent collecting and hypnotizing references almost wasn't worth it, especially with how long faking your credentials took. But it paid off in the end.");
			writeText("Today you'll be sliding right into your new position as a school counselor. Your direct supervisor is well under your control, so you have completely free range for as long as you play it safe.");
			writeText("The house is free too, so you could just sleep in all day and get paid every five days like clockwork. But there's a lot more on offer here to enjoy.");
			writeText("This town is a hotspot of beautiful women, and the school it surrounds is often referred to by its nickname.");
			writeText("<b>Hentai University</b>");
			writeFunction("changeLocation('playerHouse')", "Get Started");
			break;
		}
		case "oretekiTest": {
			writeBig("images/porn/5A-3.jpg", "Art by Oreteki18Kin");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "nagiTest": {
			writeBig("images/tomgirl/7-5.jpg", "Art by Nagi Ichi");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "gujiraTest": {
			writeBig("images/succubus/1-5.jpg", "Art by Gujira");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "cheat": {
			writeCenteredText("You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.");
			writeCenteredText("I keep a list of all of these on my patreon, go there, even if you aren't a patron, to find them.");
			writeCenteredText("Enter cheat code: <input type='text' id='cheatSubmission' value=''>");
			writeFunction("diagnostic()", "Submit");
			writeFunction("loadEncounter('system', 'gameConsole')", "Go back");
			break;
		}
		case "load": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Warning: Save before using. Enter the modded character's index EXACTLY or it will cause issues and you'll need to load the game.</p>
				<p class='centeredText'>As of v8 March 27th 2020, The mod characters by SlackerSavior have been fully added into the game. Type in <b>coach</b> below to load them into the game. Please keep in mind though that only Zoe and Amy have content.</p>
				<p class='centeredText'>Enter character's index: <input type="text" id="indexSubmission" value=""></p>
				<p class='choiceText' onclick='modCharacter()'>Submit</p>
			`;
			if (data.player.location == "") {
				writeFunction("writeEncounter('start')", "Finish");
			}
			else {
				writeFunction("writeEncounter('gameConsole')", "Finish");
			}
			break;
		}
		case "newDay": {
			if (data.player.location != scene) {
				randNum = getRandomInt(8);
				randNum += 1;
				data.player.dayID = randNum;
				console.log("Today's day ID is " + data.player.dayID);
				data.player.day += 1;
			}
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			data.player.time = "Morning";
			updateMenu();
			//checkDay();
			var specialEvent = false;
			//Checking for special events
			console.log("Now checking for special events for on day " + data.player.day);
			if (data.player.day == 3) {
				//specialEvent = true;
				//writeFunction("writeEvent('specialDay')", "Go to the special event");
				//writeTransition("playerHouse", "Skip the event");
			}
			if (checkTrust('succubus') > 70) {
				if (checkFlag('succubus', 'breakfast') == false) {
					specialEvent = "breakfast"; 
				}
			}
			if (checkTrust('succubus') > 77) {
				if (checkFlag('succubus', 'mission') == false) {
					specialEvent = "mission"; 
				}
			}
			switch (specialEvent) {
				case "breakfast": 
					loadEncounter('succubus', 'breakfast');
				break;
				case "mission": 
					loadEncounter('succubus', 'missionStart');
				break;
				default: {
					console.log("No events found");
					checkForPhone();
					document.getElementById('output').innerHTML += `
						<div class="playerRoom">
							<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
						</div>
					`;
					printLocationButton(
						"Get out of bed", 
						40, 
						40, 
						"playerHouse", 
					);
				}
			}
			if (data.player.day % 5 === 0) {
				var paybaby = 10 + data.player.counseling;
				writeSpecial("It's payday! $10 has been wired to your account.");
				if (data.player.counseling > 0) {
					writeSpecial("You've received an extra $" + data.player.counseling + " for being so skilled, you sly dog!");
				}
				data.player.money += paybaby;
			}
			if (checkTrust('principal') == 40) {raiseTrust('principal', 1);}
			break;
		}
		case "laptop": {
			writeFunction("loadEncounter('system', 'porn')", "Look up porn");
			writeFunction("loadEncounter('system', 'gallery')", "View the gallery");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
			writeFunction("changeLocation('playerHouse')", "Finish");
			}
			else {
				writePorn();
				writeFunction("loadEncounter('system', 'laptop')", "Go back");
			}
			break;
		}
		case "gallery" : {
			data.player.location = 'gallery';
			generateGalleryNav();
			writeFunction("changeLocation('playerHouse')", "Finish up");
			break;
		}
		case "gameConsole": {
			writeFunction("loadEncounter('system', 'cheat')", "Enter cheat code");
			writeFunction("loadEncounter('system', 'load')", "Load a mod character");
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed("images/"+data.story[i].index+"/profile.jpg");
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
				writeFunction("resetProgress('"+data.story[i].index+"')", "Reset progress with "+data.story[i].fName);
			}
			writeFunction("renameEveryone()", "Rename characters");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "youwillcallme": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are <input type='text' id='nameSubmission' value='"+data.player.name+"'>");
			writeText("Those you've hypnotized call you <input type='text' id='nicknameSubmission' value='*Master'>");
			writeFunction("renameNickname()", "Continue");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "paperwork": {
			writeText("You can do paperwork here, earning some quick overtime cash based on your Counseling skill. Would you like to spend a few hours doing that?");
			writeFunction("loadEncounter('system', 'filing')", "Yes");
			writeFunction("changeLocation('playerOffice')", "No");
			break;
		}
		case "filing": {
			var moneyMade = 10 + data.player.counseling;
			passTime();
			data.player.money += moneyMade;
			updateMenu();
			writeText("You spent some time doing paperwork. It's a slow and boring job, but money is money after all.");
			writeSpecial("You earned $" + moneyMade + "!");
			if (data.player.time != "Night") {
				writeFunction("changeLocation('playerOffice')", "Finish up");
			}
			else {
				writeFunction("changeLocation('playerHouse')", "It's getting late, head home");
			}
			break;
		}
		case "shopLoad": {
			writeFunction("loadEncounter('system','shop')", "test shop");
			break;
		}
		case "shop": {
			changeLocation('store');
			break;
		}
		case "nap": {
			passTime();
			changeLocation(data.player.location);
			break;
		}
		case "credits": {
			writeText("Incredible! Outstanding! You've reached one of Hentai University's endings!");
			writeText("This game was made by <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a> and <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek</a>. Hop on in to our <a href='https://discord.gg/pDht5BZ'>Discord</a> and let us know what you thought, we'd love to hear from you. You can also find a section dedicated to modding in there, maybe check that out? Be sure to show show your support for the members of the modding community of course if you do.");
			writeText("Thank you to: Swallows999, Iron Diana, Robbie, Joshua Ingram, Elias Errati, ryguy, 4MinuteWarning, Hi There, Carlos, Macarga, 林家豪, Richard, dragoon48, Skyrim mod lvr, Negativatron, Dustin Leichsenring, G, Ramsey Bisher, jack spencer, J_C_L, Filament, XxrobothacksxX, Dkells, Jinouga, Marco Wassmer, Taylor Trout, andres mejia, Colin E, Badaxe, Jesse Greene, Scal, ChronosEdge, 长平 鬣, Culton Niccum, thesingleguy, Kethis Immortalis, cabbage, colt, Anton Schmidt, Geoffrey Munoz, nicholas guerra, david thompson, Jayesonn leleaux, Bleed1ngthunder, Eric Hslew, Don, Vikteren, Dean, Sveny13, Kudon, theoron, AnotherAccount333, Gavin Davis, Lucas, Kaliden, Krose, Tyler Ross, greatred, FrostyTB, Riven Drasek, l, ranchy sanchy, TheRawToast, Limitless, Greg Torres, KVBismarc, Geoff Heimos, liam paterson, ChubbiestThread, Reverberations, ShadowFalls, William Parker, Magnus, Emanuel  Garcia, XaiuX, l1monat, Kieron Kow, Slomberg, henry grobins, ddkre, SmolFish, I'm a Mitch, GirmusCz, Anthony Ewing, Daniel Vivette, Harry Brasch, Daekash, fireballcreations, Markus Hansen, Louis Hayes, Tanman, DarthMalak, Danny Nguyen, yami, Grim2011, Darrell Goodman, Z, John Lewis, Bonelessunknown, Phanes, Scumstango, Aegil, Wei, Dugelle, CaptainMontana, Simon Rencher, dhccpmc, Chaaaanon, Charles Morris, Nutburger, Whynot, William Richardson, mazterlith, Anthony Munso, john smith, Your Husbando, Carlos, Joshua Melzark, Verillia tristari, ItsAllOgreNow, Gwen Yurick, Nils Maier, Blaise Fenn, stratum, Angel, Ariados, Jane, Snaked, Muryu, Debarre Sonny, Drashin, qwerty, murgatroid99, Roy, Wild Bill, and brandon, for funding this work!");
			writeSpecial("Special thanks to stiggy752 for the game's CSS, Wild Bill/Master of Puppets for the game's save to file system, and to OrangeMaestro for his orange eyes helping find many of the typos that plagued this game.");
			writeSpecial("Thanks for playing! We hope you'll be seeing more endings in the future!");
			writeFunction("changeLocation('playerHouse')", "Keep playing");
			listArtists();
			break;
		}
		case "porn0A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Lol what a stupid hat<br>Anonymous: Holy shit is that Angelica from Pop Pop girls?<br>Anonymous: Obviously not you fucking idiot, why would she be doing porn?<br>");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: You're living the life bro<br>Anonymous: Cat outfits are stupid (USER WAS BANNED FOR THIS POST)");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Isn't blackmail like this actually illegal?<br>Anonymous: Holy shit guys I think I go to the same school as her<br>Anonymous: Pics or it didn't happen");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-7.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Whoa holy shit is this a mod?<br>Anonymous: Sauce plz<br>Anonymous: Lurk moar dumbass<br>Anonymous: Is this actually programmed into the game?");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeText("Broken! Error code: failed load encounter("+scene+")");
		}
	}
}

console.log('system.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEncounter(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			//writeFunction("changeLocation('playerHouse')", "Finish");
		}
		break;
	}
	case "check": {
		for (i = 0; i < encounterArray.length; i++) {
			if (encounterArray[i].location.includes(data.player.location)) {
				if (encounterArray[i].time.includes(data.player.time)) {
					if (encounterArray[i].type == "tab") {
						printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
					}
					else {
						printEncounterButton('system', encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
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
}

//Needs events for computer, wardrobe, textbooks, napping, and paperwork