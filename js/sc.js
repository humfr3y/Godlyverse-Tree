const SOFTCAPS = {
	nps: { //айдишник, его нужно будет вписать в оператор
		title: "NPS Nerf I", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("5e7"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return player.n.points.gte("1e7") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" NPS, 1.3th rooted" }, //сам текст
	},
	rpb: { //айдишник, его нужно будет вписать в оператор
		title: "RP Boost Nerf I", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("1e3"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return ((player.r.points).gte("750")) }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" RP, divided by 2" }, //сам текст
	},
	pfx: { //айдишник, его нужно будет вписать в оператор
		title: "Scaled Prestige Factor X", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("30"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.p.buyables[11]).gte("25") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" amount, x/30 powered" }, //сам текст
	},
	pfx2: { //айдишник, его нужно будет вписать в оператор
		title: "Further Prestige Factor X", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("50"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.p.buyables[11]).gte("45") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" amount, x/29 powered instead of x/30" }, //сам текст
	},
	gfy1: { //айдишник, его нужно будет вписать в оператор
		title: "Scaled Goddess Factor Y", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("30"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.r.buyables[11]).gte("25") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" amount, x/29.5 powered" }, //сам текст
	},
	gfy2: { //айдишник, его нужно будет вписать в оператор
		title: "Further Goddess Factor Y", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("50"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.r.buyables[11]).gte("45") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" amount, x/28.5 powered instead of x/29.5" }, //сам текст
	},
	
}