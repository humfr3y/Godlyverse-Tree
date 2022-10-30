addLayer("n", {
    name: "NPS Shop", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "NPS", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    tabFormat: [
        "main-display",
        ["prestige-button"],
        "blank",
        "blank",
        ["toggle", ["c", "beep"]],
        "buyables",
        "blank",
        "blank",
        "upgrades"
    ],
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
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (10))
                let rexq = (z.mul(x).pow(1.05))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=10}
                return rexq
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
                    i = new Decimal(3)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    
                    return player.n.points
                },
        },
        12: {
            title: "Small number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (25))
                let rexq = (z.mul(x).pow(1.0475))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=25}
                return rexq
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
                    i = new Decimal(5)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    return player.n.points
                },
        },
        13: {
            title: "Small golden number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (60))
                let rexq = (z.mul(x).pow(1.047))
                rexq = rexq.add(z)
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
                    i = new Decimal(10)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    return player.n.points
                },
        },
        21: {
            title: "Big number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (175))
                let rexq = (z.mul(x).pow(1.0465))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=175}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 25 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    i = new Decimal(25)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    return player.n.points
                },
        },
        22: {
            title: "Small transparent number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (400))
                let rexq = (z.mul(x).pow(1.0455))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=400}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 50 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    i = new Decimal(50)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    return player.n.points
                },
        },
        23: {
            title: "Rainbow number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (1000))
                let rexq = (z.mul(x).pow(1.045))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=1000}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 100 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    i = new Decimal(100)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    return player.n.points
                },
        },
        31: {
            title: "Big transparent number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (2750))
                let rexq = (z.mul(x).pow(1.043))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=2750}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 250 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    i = new Decimal(250)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    return player.n.points
                },
        },
        32: {
            title: "Huge number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {"width": "180px", "height": "100px"}
                return style
              },
            cost(x) { 
                let z = (new Decimal (6000))
                let rexq = (z.mul(x).pow(1.0425))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=6000}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 500 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    i = new Decimal(500)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
                  },
                effect (x){
                    return player.n.points
                },
        },
         33: {
            title: "Huge transparent number",
            currencyDisplayName: "Number",
            currencyInternalName: "Number",
            style() {
                const style = {
                "width": "180px",
                "height": "100px",
                                                                                 //"background-color": "#00FF00"
            }
                return style
              },
            cost(x) { 
                let z = (new Decimal (10000))
                let rexq = (z.mul(x).pow(1.04))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=10000}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " Number\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Adds + 1e3 NPS"
            },
            canAfford() {
                return player.points.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() {
                    cost = tmp[this.layer].buyables[this.id].cost
                    player.points = player.points.sub(cost)    
                    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                    i = new Decimal(1e3)
                    k = player.p.points
                    if (player.r.unlocked) {k=k.mul(player.r.points.mul(0.1).add(1))}
                    if (player.p.unlocked) {i=i.mul(k.mul(0.1).add(1))}
                    player.n.points=player.n.points.add(i)
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
    tabFormat: [
        "main-display",
        ["display-text",
        function() { return 'Which boosts your NPS by ' + format(player.p.points.mul(player.r.points.mul(0.1).add(1)).mul(10)) + '%!'},
        { "color": "white", "font-size": "15px", }],
        "blank",
        "prestige-button",
        "blank",
        "blank",
        "blank",
        "buyables"
    ],
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
            style(){
                const style = {
                "width": "250px",
                "height": "250px",
                "background-color": "#000001",
                "border": "3px solid",
                "border-radius": "50px",
                "border-color": "#333333",
                "color": "#11FF22",
                "font-size": "13px",
            }
            if (this.canAfford()) {style["border-color"] = ["#11FF22"]}
                return style
            },
            
            title() { if (this.canAfford()) { return "Prestige Factor X" } },
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "Prestige Points",
            cost(x) { 
                let z = (new Decimal (5))
                let rexq = (z.mul(x).pow(1.1))
                rexq = rexq.add(z)
                if (x.lt(1)) {rexq=5}
                return rexq
                    },
            display() { // Everything else displayed in the buyable button after the title
               
                let data = tmp[this.layer].buyables[this.id]
                if (this.canAfford()) 
                {
                return "Cost: " + format(data.cost) + " Prestige Points\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Increase PPs gain by 15%"}
                else 
                {return "I think you should get "+ format(data.cost) + " Prestige Points for it..."}
                
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
    tabFormat: [
        "main-display",
        ["display-text",
        function() { return 'Which boosts your PPs by ' + format(player.r.points.mul(10)) + '%!' },
        { "color": "white", "font-size": "15px", }],
        "blank",
        "prestige-button",
        "blank",
        "blank",
        "blank",
        "buyables"
    ],
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
        {key: "r", description: "R: Reset for reincarnation points", onPress(){if (canReset(r)) doReset(r)}},
    ],
    layerShown(){return true},
    buyables: {
        11: {
            style(){
                const style = {
                "width": "250px",
                "height": "250px",
                "background-color": "#000001",
                "border": "3px solid",
                "border-radius": "50px",
                "border-color": "#333333",
                "color": "#7DF9FF",
                "font-size": "13px",
            }
            if (this.canAfford()) {style["border-color"] = ["#7DF9FF"]}
                return style
            },
            title() { if (this.canAfford()) { return "Goddess Factor Y" } },
            currencyDisplayName: "Reincarnation Points",
            currencyInternalName: "RP",
            cost(x) { 
                let pfx = (new Decimal(2).mul(x.add(1)).pow(0.75))
                if (x.lt(1)) {pfx=2}
                return pfx
                    },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                if (this.canAfford()) 
                {
                return "Cost: " + format(data.cost) + " Reincarnation Points\n\
                Amount: " + player[this.layer].buyables[this.id] + "\n\
                Increase RPs gain by 15%"}
                else 
                {return "It seems to me that your soul is still not filled with determination for it, try to get " + format(data.cost) + " Reincarnation Points, maybe it will work?"}

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
