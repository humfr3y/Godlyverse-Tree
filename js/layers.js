addLayer("n", {
    name: "NPS Shop", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "NPS", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#1AA7EC",
    requires: new Decimal(1e9999999999), // Can be a function that takes requirement increases into account
    resource: "NPS", // Name of prestige currency
    baseResource: "Number", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for number per second", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    buyables: {
        11: {
            title: "Insanely small number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            cost(x) { 
                let rex = (new Decimal(10).mul(x).pow(1.2))
                if (x.lt(1)) {rex=10}
                return rex
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 3 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    player.n.points=player.n.points.add(3)
                    if (player.p.unlocked) {player.n.points=player.n.points.mul(player.p.points.mul(1.1).pow(1.025)).add(1)}
                    if (player.r.unlocked) {player.n.points=player.n.points.mul(player.r.points.mul(1.15).pow(1.01)).add(1)}
                  },
                effect (x){

                    return player.n.points
                },
        },
        12: {
            title: "Small number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            cost(x) { 
                let rexe = (new Decimal(25).mul(x).pow(1.23))
                if (x.lt(1)) {rexe=25}
                return rexe
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 5 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    player.n.points=player.n.points.add(5)
                    if (player.p.unlocked) {player.n.points=player.n.points.mul(player.p.points.mul(1.8).pow(1.025))}
                  },
                effect (x){
                    return player.n.points
                },
        },
        13: {
            title: "Small golden number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            cost(x) { 
                let rexq = (new Decimal(60).mul(x).pow(1.25))
                if (x.lt(1)) {rexq=60}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 10 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    player.n.points=player.n.points.add(10)
                    if (player.p.unlocked) {player.n.points=player.n.points.mul(player.p.points.mul(1.1).pow(1.025))}
                  },
                effect (x){
                    return player.n.points
                },
        },
        21: {
            title: "God",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            cost(x) { 
                let rexq = (new Decimal(1).mul(x).pow(1.14))
                if (x.lt(1)) {rexq=1}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 10 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    player.n.points=player.n.points.add(500)
                    if (player.p.unlocked) {player.n.points=player.n.points.add((player.p.points.mul(1.1).pow(1.025)))}
                  },
                effect (x){
                    return player.n.points
                },
        },
    },
},),
addLayer("p", {
    name: "Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#11FF22",
    requires: new Decimal(500), // Can be a function that takes requirement increases into account
    resource: "Prestige Points", // Name of prestige currency
    baseResource: "NPS", // Name of resource prestige is based on
    baseAmount() {return player.n.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["n"],
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (buyableEffect('p', 11)) {return (tmp['p'].buyables[11].effect)}
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1.2)
        return exp;
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    buyables: {
        11: {
            title: "Prestige Factor X beta",
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "Prestige Points",
            cost(x) { 
                let pfx = (new Decimal(2).mul(x.add(1)).pow(0.7))
                if (x.lt(1)) {pfx=2}
                return pfx
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Prestige Points\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Increase PPs gain by 15%"
            },
            canAfford() {
                return player.p.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.p.points = player.p.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                  },
                effect (x){
                    return mult = mult.add(mult.mul(x).mul(0.15))
                },
        },
    }
})
addLayer("r", {
    name: "Reincarnation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#7DF9FF",
    requires: new Decimal(3e3), // Can be a function that takes requirement increases into account
    resource: "Reincarnation Points", // Name of prestige currency
    baseResource: "PPs", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (buyableEffect('r', 11)) {return (tmp['r'].buyables[11].effect)}
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(2.21)
        return exp;
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for reincarnation points", onPress(){if (canReset(p)) doReset(p)}},
    ],
    layerShown(){return true},
    buyables: {
        11: {
            title: "Reincarnation Factor Y beta",
            currencyDisplayName: "Reincarnation Points",
            currencyInternalName: "RP",
            cost(x) { 
                let pfx = (new Decimal(2).mul(x.add(1)).pow(0.75))
                if (x.lt(1)) {pfx=2}
                return pfx
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Reincarnation Points\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Increase RPs gain by 15%"
            },
            canAfford() {
                return player.r.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.r.points = player.r.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                  },
                effect (x){
                    return mult = mult.add(mult.mul(x).mul(0.15))
                },
        },
    }
})
