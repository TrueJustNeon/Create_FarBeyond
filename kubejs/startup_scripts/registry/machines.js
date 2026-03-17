StartupEvents.registry('block', event => {
	// Main Block
    let machine = (name, layer) => {
        let id = name.toLowerCase()
        event.create(id + '_machine')
        .model('kubejs:block/' + id + '_machine')
        .soundType('lantern')
        .hardness(3.0)
        .displayName(name + ' Machine')
        .notSolid()
        .renderType(layer)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    }

    machine('Andesite', "solid")
    machine('Zinc', "cutout")
    machine('Copper', "cutout")
    machine('Brass', "solid")
    machine('Steel', "solid")    
})