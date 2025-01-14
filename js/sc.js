const SOFTCAPS = {
	ppb: { //айдишник, его нужно будет вписать в оператор
		title: "PP Boost Nerf I", // название
		type: "power", //тип, не ебу важен ли он
		start: new Decimal("1e3"), // со скольки начинается
		mag: new Decimal(0.5), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return ((player.p.points).gte("500")) }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" PP, 0.7 powered" }, //сам текст
	},
	rpb: { //айдишник, его нужно будет вписать в оператор
		title: "RP Boost Nerf I", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("1e3"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return ((player.r.points).gte("750")) }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" RP, 1.3th rooted" }, //сам текст
	},
	ppg: { //айдишник, его нужно будет вписать в оператор
		title: "PP Gain Nerf I", // название
		type: "power", //тип, не ебу важен ли он
		start: new Decimal("2e4"), // со скольки начинается
		mag: new Decimal(0.9), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return ((player.r.points).gte("1e4")) }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" PP, 0.9 powered" }, //сам текст
	},
	pfx: { //айдишник, его нужно будет вписать в оператор
		title: "Scaled Prestige Factor X", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("30"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.p.buyables[11]).gte("25") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" level, x/30 powered" }, //сам текст
	},
	pfx2: { //айдишник, его нужно будет вписать в оператор
		title: "Further Prestige Factor X", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("50"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.p.buyables[11]).gte("45") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" level, x/29 powered instead of x/30" }, //сам текст
	},
	gfy1: { //айдишник, его нужно будет вписать в оператор
		title: "Scaled Goddess Factor Y", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("30"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.r.buyables[11]).gte("25") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" level, x/29.5 powered" }, //сам текст
	},
	gfy2: { //айдишник, его нужно будет вписать в оператор
		title: "Further Goddess Factor Y", // название
		type: "root", //тип, не ебу важен ли он
		start: new Decimal("50"), // со скольки начинается
		mag: new Decimal(1.3), //насколько снизили доход (в квадратный корень - 2, в кубический - 3)
		display() { return (player.r.buyables[11]).gte("45") }, //наверное это когда появляется данный текст
		info() { return "Starts at "+format(this.start)+" level, x/28.5 powered instead of x/29.5" }, //сам текст
	},
	
}