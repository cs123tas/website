(()=> {

const looksLikeChrome = !!(window.chrome && (chrome.loadTimes || chrome.csi));
// NOTE: Microsoft Edge includes window.chrome.app
// (also this browser detection logic could likely use some more nuance)

window.menus = {
	[localize("&Home")]: [
		{
			item: localize("&View"),
			description: localize("Go Home."),
			action: ()=> {
				window.location.reload();
			},
		},
	],
	[localize("&Hours")]: [
		{
			item: localize("&Show Hours"),
		//	shortcut: "Ctrl+Z",
		/*	speech_recognition: [
				"undo", "undo that",
			],*/
		//	enabled: () => undos.length >= 1,
			action: ()=> { show_window("Hours", "hours.html"); },
			description: localize("View Office Hours."),
		},
	],
	[localize("&Staff")]: [
		{
			item: localize("&Daniel Ritchie"),
			description: localize("Professor"),
		},
		{
			item: localize("&Alex Mina"),
			description: localize("Head TA"),
		},
		{
			item: localize("&Caleb Trotz"),
			description: localize("Head TA"),
		},
		MENU_DIVIDER,
		{
			item: localize("&Aalia Habib"),
			description: localize("UTA"),
		},
		{
			item: localize("&Aparna Natarajan"),
			description: localize("UTA"),
		},
		{
			item: localize("&Adam Pikielny"),
			description: localize("UTA"),
		},
		{
			item: localize("&Alana White"),
			description: localize("UTA"),
		},
		{
			item: localize("&Breese Sherman"),
			description: localize("UTA"),
		},
		{
			item: localize("&Junewoo Park"),
			description: localize("UTA"),
		},
		{
			item: localize("&Megan Gessner"),
			description: localize("UTA"),
		},
		MENU_DIVIDER,
		{
			item: localize("&View All"),
			description: localize("Show staff"),
			action: ()=> { show_window("Staff", "staff.html"); },
		},
	],
	[localize("&Assignments")]: [
		// @TODO: speech recognition: terms that apply to selection
		{
			item: localize("&Brush"),
			//action: ()=> {  },
			enabled: false,
			description: localize("Open Brush Assignment."),
		},
		{
			item: localize("&Shapes"),
			// shortcut: "Ctrl+W", // closes browser tab
			enabled: false,
			description: localize("Open Shapes Assignment."),
		},
		{
			item: localize("&Intersect"),
			//shortcut: "Ctrl+I",
			enabled: false,
			description: localize("Open Intersect Assignment."),
		},
		{
			item: localize("&Ray"),
			//shortcut: "Ctrl+E",
			enabled: false,
			description: localize("Open Ray Assignment."),
		},
		{
			item: localize("&Sceneview"),
			enabled: false,
			description: localize("Open Sceneview Assignment."),
		},
		{
			item: localize("&Filter"),
			enabled: false,
			description: localize("Open Filter Assignment."),
		},
		{
			item: localize("&Final"),
			enabled: false,
			description: localize("Open Final Project."),
		},
		MENU_DIVIDER,
		{
			item: localize("&View All"),
			description: localize("Show all projects"),
			action: ()=> { show_window("Assignments", "asgns.html"); },
		},
	],
	[localize("&Labs")]: [
		{
			item: localize("&Local Setup"),
			enabled: true,
			action: ()=> { window.open("https://github.com/cs123tas/labs/tree/master/lab00"); },
			description: localize("Open Local Setup lab."),
		},
		{
			item: localize("&C++ Programming"),
			enabled: false,
			description: localize("Open C++ Programming lab."),
		},
		{
			item: localize("&Terrain"),
			enabled: false,
			description: localize("Open Terrain lab."),
		},
		{
			item: localize("&Transformations & Scene Graphs"),
			enabled: false,
			description: localize("Open Transformations & Scene Graphs lab."),
		},
		{
			item: localize("&Introduction to Maya"),
			enabled: false,
			description: localize("Open Introduction to Maya lab."),
		},
		{
			item: localize("&2D OpenGL"),
			enabled: false,
			description: localize("Open 2D OpenGL lab."),
		},
		{
			item: localize("&3D OpenGL"),
			enabled: false,
			description: localize("Open 3D OpenGL lab."),
		},
		{
			item: localize("&Camtrans"),
			enabled: false,
			description: localize("Open Camtrans lab."),
		},
		{
			item: localize("&FBOs"),
			enabled: false,
			description: localize("Open FBOs lab."),
		},
		{
			item: localize("&Particles"),
			enabled: false,
			description: localize("Open Particles lab."),
		},
		{
			item: localize("&Filter"),
			enabled: false,
			description: localize("Open Filter lab."),
		},
		{
			item: localize("&Dielectric Materials (Metal & Glass)"),
			enabled: false,
			description: localize("Open Dielectric Materials (Metal & Glass) lab."),
		},
		{
			item: localize("&Ray Marching"),
			enabled: false,
			description: localize("Open Ray Marching lab."),
		},
		MENU_DIVIDER,
		{
			item: localize("&View All"),
			description: localize("Show all labs"),
			action: ()=> { show_window("Labs", "labs.html"); },
		},
	],
	[localize("&Classes")]: [
		{
			item: localize("&View Schedule"),
			action: ()=> { show_window("Schedule", "lectures.html"); },
			description: localize("View course schedule"),
		}
	],
	[localize("&Docs")]: [
		{
			item: localize("&View Docs"),
			action: ()=> { show_window("Documents", "docs.html"); },
			description: localize("View reference documents."),
		},
	],
	[localize("&Demos")]: [
		{
			item: localize("&View Demos"),
			action: ()=> { show_window("Demos", "demos.html"); },
			description: localize("View demos."),
		},
	],
	[localize("&Fun")]: [
		{
			item: localize("&Themes"),
			submenu: [
				{
					item: localize("&Classic"),
					speech_recognition: [
						"reset theme", "revert theme setting",
						"classic theme", "switch to classic theme", "use classic theme", "set theme to classic", "set theme classic", "switch to classic theme", "switch theme to classic", "switch theme classic",
						"retro theme", "switch to retro theme", "use retro theme", "set theme to retro", "set theme retro", "switch to retro theme", "switch theme to retro", "switch theme retro",
						"normal theme", "switch to normal theme", "use normal theme", "set theme to normal", "set theme normal", "switch to normal theme", "switch theme to normal", "switch theme normal",
						"default theme", "switch to default theme", "use default theme", "set theme to default", "set theme default", "switch to default theme", "switch theme to default", "switch theme default",
						"original theme", "switch to original theme", "use original theme", "set theme to original", "set theme original", "switch to original theme", "switch theme to original", "switch theme original",
						"basic theme", "switch to basic theme", "use basic theme", "set theme to basic", "set theme basic", "switch to basic theme", "switch theme to basic", "switch theme basic",
						"90s theme", "switch to 90s theme", "use 90s theme", "set theme to 90s", "set theme 90s", "switch to 90s theme", "switch theme to 90s", "switch theme 90s",
						"windows 98 theme", "switch to windows 98 theme", "use windows 98 theme", "set theme to windows 98", "set theme windows 98", "switch to windows 98 theme", "switch theme to windows 98", "switch theme windows 98",
						"windows 95 theme", "switch to windows 95 theme", "use windows 95 theme", "set theme to windows 95", "set theme windows 95", "switch to windows 95 theme", "switch theme to windows 95", "switch theme windows 95",
						"windows 2000 theme", "switch to windows 2000 theme", "use windows 2000 theme", "set theme to windows 2000", "set theme windows 2000", "switch to windows 2000 theme", "switch theme to windows 2000", "switch theme windows 2000",
						// in contrast to the Dark theme:
						"light theme", "switch to light theme", "use light theme", "set theme to light", "set theme light", "switch to light theme", "switch theme to light", "switch theme light",
						"light mode", "switch to light mode", "use light mode", "set mode to light", "set mode light", "switch to light mode", "switch mode to light", "switch mode light",
						"bright theme", "switch to bright theme", "use bright theme", "set theme to bright", "set theme bright", "switch to bright theme", "switch theme to bright", "switch theme bright",
						"bright mode", "switch to bright mode", "use bright mode", "set mode to bright", "set mode bright", "switch to bright mode", "switch mode to bright", "switch mode bright",
						"day theme", "switch to day theme", "use day theme", "set theme to day", "set theme day", "switch to day theme", "switch theme to day", "switch theme day",
						"day mode", "switch to day mode", "use day mode", "set mode to day", "set mode day", "switch to day mode", "switch mode to day", "switch mode day",
						"go light", "go bright",
					],
					action: ()=> {
						set_theme("classic.css");
					},
					enabled: () => get_theme() != "classic.css",
					description: localize("Makes JS Paint look like MS Paint from Windows 98."),
				},
				{
					item: localize("&Dark"),
					speech_recognition: [
						"dark theme", "switch to dark theme", "use dark theme", "set theme to dark", "set theme dark", "switch to dark theme", "switch theme to dark", "switch theme dark",
						"dark mode", "switch to dark mode", "use dark mode", "set mode to dark", "set mode dark", "switch to dark mode", "switch mode to dark", "switch mode dark",
						"dim theme", "switch to dim theme", "use dim theme", "set theme to dim", "set theme dim", "switch to dim theme", "switch theme to dim", "switch theme dim",
						"dim mode", "switch to dim mode", "use dim mode", "set mode to dim", "set mode dim", "switch to dim mode", "switch mode to dim", "switch mode dim",
						"night theme", "switch to night theme", "use night theme", "set theme to night", "set theme night", "switch to night theme", "switch theme to night", "switch theme night",
						"night mode", "switch to night mode", "use night mode", "set mode to night", "set mode night", "switch to night mode", "switch mode to night", "switch mode night",
						"go dark", "go dim",
					],
					action: ()=> {
						set_theme("dark.css");
					},
					enabled: () => get_theme() != "dark.css",
					description: localize("Makes JS Paint darker."),
				},
				{
					item: localize("&Modern"),
					speech_recognition: [
						"modern theme", "switch to modern theme", "use modern theme", "set theme to modern", "set theme modern", "switch to modern theme", "switch theme to modern", "switch theme modern",
					],
					action: ()=> {
						set_theme("modern.css");
					},
					enabled: () => get_theme() != "modern.css",
					description: localize("Makes JS Paint look a bit more modern."),
				},
				{
					item: localize("&Winter"),
					speech_recognition: [
						"winter theme", "switch to winter theme", "use winter theme", "set theme to winter", "set theme winter", "switch to winter theme", "switch theme to winter", "switch theme winter",
						"holiday theme", "switch to holiday theme", "use holiday theme", "set theme to holiday", "set theme holiday", "switch to holiday theme", "switch theme to holiday", "switch theme holiday",
						"christmas theme", "switch to christmas theme", "use christmas theme", "set theme to christmas", "set theme christmas", "switch to christmas theme", "switch theme to christmas", "switch theme christmas",
						"hanukkah theme", "switch to hanukkah theme", "use hanukkah theme", "set theme to hanukkah", "set theme hanukkah", "switch to hanukkah theme", "switch theme to hanukkah", "switch theme hanukkah",
					],
					action: ()=> {
						set_theme("winter.css");
					},
					enabled: () => get_theme() != "winter.css",
					description: localize("Makes JS Paint look festive for the holidays."),
				},
				{
					item: localize("&Occult"),
					speech_recognition: [
						"occult theme", "switch to occult theme", "use occult theme", "set theme to occult", "set theme occult", "switch to occult theme", "switch theme to occult", "switch theme occult",
						"occultist theme", "switch to occultist theme", "use occultist theme", "set theme to occultist", "set theme occultist", "switch to occultist theme", "switch theme to occultist", "switch theme occultist",
						"occultism theme", "switch to occultism theme", "use occultism theme", "set theme to occultism", "set theme occultism", "switch to occultism theme", "switch theme to occultism", "switch theme occultism",
						"satan theme", "switch to satan theme", "use satan theme", "set theme to satan", "set theme satan", "switch to satan theme", "switch theme to satan", "switch theme satan",
						"satanic theme", "switch to satanic theme", "use satanic theme", "set theme to satanic", "set theme satanic", "switch to satanic theme", "switch theme to satanic", "switch theme satanic",
						"satanist theme", "switch to satanist theme", "use satanist theme", "set theme to satanist", "set theme satanist", "switch to satanist theme", "switch theme to satanist", "switch theme satanist",
						"satanism theme", "switch to satanism theme", "use satanism theme", "set theme to satanism", "set theme satanism", "switch to satanism theme", "switch theme to satanism", "switch theme satanism",
						"demon theme", "switch to demon theme", "use demon theme", "set theme to demon", "set theme demon", "switch to demon theme", "switch theme to demon", "switch theme demon",
						"demonic theme", "switch to demonic theme", "use demonic theme", "set theme to demonic", "set theme demonic", "switch to demonic theme", "switch theme to demonic", "switch theme demonic",
						"daemon theme", "switch to daemon theme", "use daemon theme", "set theme to daemon", "set theme daemon", "switch to daemon theme", "switch theme to daemon", "switch theme daemon",
						"daemonic theme", "switch to daemonic theme", "use daemonic theme", "set theme to daemonic", "set theme daemonic", "switch to daemonic theme", "switch theme to daemonic", "switch theme daemonic",
						"devil theme", "switch to devil theme", "use devil theme", "set theme to devil", "set theme devil", "switch to devil theme", "switch theme to devil", "switch theme devil",
						"devilish theme", "switch to devilish theme", "use devilish theme", "set theme to devilish", "set theme devilish", "switch to devilish theme", "switch theme to devilish", "switch theme devilish",
						"devil worship theme", "switch to devil worship theme", "use devil worship theme", "set theme to devil worship", "set theme devil worship", "switch to devil worship theme", "switch theme to devil worship", "switch theme devil worship",
						"witchcraft theme", "switch to witchcraft theme", "use witchcraft theme", "set theme to witchcraft", "set theme witchcraft", "switch to witchcraft theme", "switch theme to witchcraft", "switch theme witchcraft",
						"witch theme", "switch to witch theme", "use witch theme", "set theme to witch", "set theme witch", "switch to witch theme", "switch theme to witch", "switch theme witch",
						"witchy theme", "switch to witchy theme", "use witchy theme", "set theme to witchy", "set theme witchy", "switch to witchy theme", "switch theme to witchy", "switch theme witchy",
						"witchery theme", "switch to witchery theme", "use witchery theme", "set theme to witchery", "set theme witchery", "switch to witchery theme", "switch theme to witchery", "switch theme witchery",
						"ritual theme", "switch to ritual theme", "use ritual theme", "set theme to ritual", "set theme ritual", "switch to ritual theme", "switch theme to ritual", "switch theme ritual",
						"ritualism theme", "switch to ritualism theme", "use ritualism theme", "set theme to ritualism", "set theme ritualism", "switch to ritualism theme", "switch theme to ritualism", "switch theme ritualism",
						"ritualistic theme", "switch to ritualistic theme", "use ritualistic theme", "set theme to ritualistic", "set theme ritualistic", "switch to ritualistic theme", "switch theme to ritualistic", "switch theme ritualistic",

						"summon demon", "summon daemon", "summon demon theme", "summon daemon theme",
						"summon demons", "summon daemons", "summon demons theme", "summon daemons theme",
						"demon summoning", "daemon summoning", "demon summoning theme", "daemon summoning theme",
						"demons summoning", "daemons summoning", "demons summoning theme", "daemons summoning theme",
						"welcome demon", "welcome daemon", "welcome demon theme", "welcome daemon theme",
						"welcome demons", "welcome daemons", "welcome demons theme", "welcome daemons theme",
						"summon satan", "summon satan theme", "summon daemon theme",
						"satan summoning", "satan summoning theme", "daemon summoning theme",
						"welcome satan", "welcome satan theme",
						"summon devil", "summon the devil", "summon devil theme", "summon the devil theme",
						"welcome devil", "welcome the devil", "welcome devil theme", "welcome the devil theme",

						"I beseach thee", "I entreat thee", "I summon thee", "I call upon thy name", "I call upon thine name", "Lord Satan", "hail Satan", "hail Lord Satan", "O Mighty Satan", "Oh Mighty Satan",
						"In nomine Dei nostri Satanas Luciferi Excelsi", "Rege Satanas", "Ave Satanas",
						"go demonic", "go daemonic", "go occult", "666",
						"begin ritual", "begin the ritual", "begin a ritual",
						"start ritual", "start the ritual", "start a ritual",
					],
					action: ()=> {
						set_theme("occult.css");
					},
					enabled: () => get_theme() != "occult.css",
					description: localize("Starts the ritual."),
				},
			]
		},
		MENU_DIVIDER,
		{
			item: localize("Credits"),
			action: ()=> { window.open("https://github.com/1j01/jspaint"); },
			description: localize("Source code derived from https://github.com/1j01/jspaint, thanks!"),
		}
	],
};

for (const [top_level_menu_key, menu] of Object.entries(menus)) {
	const top_level_menu_name = top_level_menu_key.replace(/&/, "");
	const add_literal_navigation_speech_recognition = (menu, ancestor_names)=> {
		for (const menu_item of menu) {
			if (menu_item !== MENU_DIVIDER) {
				const menu_item_name = menu_item.item.replace(/&|\.\.\.|\(|\)/g, "");
				// console.log(menu_item_name);
				let menu_item_matchers = [menu_item_name];
				if (menu_item_name.match(/\//)) {
					menu_item_matchers = [
						menu_item_name,
						menu_item_name.replace(/\//, " "),
						menu_item_name.replace(/\//, " and "),
						menu_item_name.replace(/\//, " or "),
						menu_item_name.replace(/\//, " slash "),
					];
				}
				menu_item_matchers = menu_item_matchers.map((menu_item_matcher)=> {
					return `${ancestor_names} ${menu_item_matcher}`;
				});
				menu_item.speech_recognition = (menu_item.speech_recognition || []).concat(menu_item_matchers);
				// console.log(menu_item_matchers, menu_item.speech_recognition);

				if (menu_item.submenu) {
					add_literal_navigation_speech_recognition(menu_item.submenu, `${ancestor_names} ${menu_item_name}`);
				}
			}
		}
	};
	add_literal_navigation_speech_recognition(menu, top_level_menu_name);
}

})();
