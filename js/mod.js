let modInfo = {
	name: "Godlyverse Tree",
	id: "gt",
	author: "Humfrey (Humfr3y#9778)",
	pointsName: "Number",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.4",
	name: "Comeback update",
}

let changelog = `<h1>Godlyverse Tree changelog</h1><br>
<br>
	<h2>v0.4 Comeback Update:</h2><br>
	- NEW 6 NPS GENERATORS! They will be last one's.<br>
	- Rebalanced NPS Generators price scaling.<br>
	- Rebalanced PPs and RPs gain. Added/changed softcaps.<br>
	- Removed NPS softcaps.<br>
	- Added two Reincarnation Milestones.<br>
	- Changed a way to multiply NPS gain.<br>
	<br>
	<h2>0.3 Soft Update: </h2><br>
	- NEW REINCARNATION UPGRADE. Double your NPS gain with 1 RP!<br>
	- SOFTCAPS! They're created for no inflation and very high rises.<br>
	- 2 NEW SOFTCAPS: for NPS gain and RP boost to PP.<br>
	- 4 NEW SCALINGS! PFX and GFY has scalings after 30 and 50 buyings both.<br>
	- Changed formula for PFX and GFY.<br>
	- PFX and GFY boost decreased to 10% both.<br>
	- Balanced NPS, PP, RP gain.<br>
	- New button "Softcaps". It'll show when starts scaling or softcap.<br>
	- In 0.4 NPS Generators will be controlled by r-robots?!<br>
	<br>
	<h2>0.2 Reincarnation Update: </h2><br>
	- NEW PRESTIGE LAYER. Reset prestige progress and gain Reincarnation Points! They're boosting your PPs boost!<br>
	- NEW REINCARNATION UPGRADE. Multiply RPs gain by 15%!.<br>
	- NEW 6 NPS GENERATORS. It's even isn't end.<br>
	- A huge rebalance of all things: price, gain, boost, etc.<br>
	- Minor text changes.<br>
	- Changed buttons for NPS Generators and factors.<br>
	- Now Prestige Factor X costs 5 PPs instead of 2. And boosts 15% PPs gain instead of 25%.<br>
	- Each prestige point increases NPS production by 10%.<br>
	- Removed reset button from NPS.<br>
	- Added text that shows how much boost PPs give (RPs also change this value).<br>
	- (0.2.1) fixed that insanely small number gives 10000 nps ainstead of 3.<br>
	- (0.2.2) when you can't buy PFX or RFY there is other text.<br>
	- (0.2.2) added "thanks for the help with the mod".<br>
	- (0.2.2) minor visual changes.<br>
	- 0.3 will save your finger...<br>
	<br>
	
	<h2>0.1 Number Update: </h2><br>
	- NEW 3 REBUYABLE UPGRADES. Each generates NPS (Number pes second).<br>
	- NEW PRESTIGE UPGRADE. It boosts prestige point gain by 25%.<br>
	- NOW PP BOOSTS NPS GAIN.<br> 
	- Prestige costs 500 NPC instead of 4.<br>
	- Fixed some minor text bugs.<br>
	- Added line between layers.<br>
	- You cannot reset NPS.<br>
	- Changed id to gt.<br>
	0.2 will have new NPC generators and probably new layer.<br>
	
	 <br>
	 <h2>0.0 Null Update: </h2><br>
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
	let p = player.p.points
	let rp = player.r.points

	if ((player.r.unlocked)&&(player.r.points.lte(1e3))) {p=p.mul(rp.mul(0.1).add(1))}
	if (player.r.points.gt(1e3)) {p=p.mul(rp.mul(0.05).add(1))}

	if (hasMilestone("r", 0)) {gain = playerNPoints.mul((p).mul(0.1).add(1)).mul(2)} 
	else if (player.p.unlocked) gain = playerNPoints.mul((p).mul(0.1).add(1))
	else gain = playerNPoints

	if (player.p.unlocked) {
		if (hasMilestone("r", 0)) {player.n.points = playerNPoints.mul((p).mul(0.1).add(1)).mul(2)} 
		else {player.n.points=playerNPoints.mul((p).mul(0.1).add(1))}
	}

	else player.n.points=playerNPoints

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