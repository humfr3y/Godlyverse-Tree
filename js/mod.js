let modInfo = {
	name: "Godlyverse Tree",
	id: "gt",
	author: "Humfrey",
	pointsName: "Number",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Number update",
}

let changelog = `<h1>Godlyverse Tree changelog:</h1><br>
	<h3>v0.1</h3><br>
	0.1 Number Update<br>
	- NEW 3 REBUYABLE UPGRADES. Each generates NPS (Number pes second)<br>
	- NEW PRESTIGE UPGRADE. It boosts prestige point gain by 25%<br>
	- NOW PP BOOSTS NPC GAIN.<br> 
	- Prestige costs 500 NPC instead of 4.<br>
	- Fixed some minor text bugs.<br>
	- Added line between layers.<br>
	- You cannot reset NPC.<br>
	- Changed id to gt<br>
	0.2 will have new NPC generators and probably new layer.<br>
	 <br>
	0.0 Null update<br>
	- First update of the fork based on mobile incremental game Godlyverse!<br>
	- Added new layers: <br>
	- NPS (Numbers per sec), every point increase Number per sec (main currency) by one.<br>
	- Prestige which now doing nothing.<br>
	- New upgrade for NPS which will make sense little later.<br>
	- 0.1 has a big plans.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["doReset", "buy", "onPurchase", "blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true;
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0);

	let gain = new Decimal(0)
	gain = player.n.points.plus(0);
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}