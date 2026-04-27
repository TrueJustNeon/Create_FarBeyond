StartupEvents.registry('block', event => {
	// Main Block
    let machine = (name, layer) => {
        let id = name.toLowerCase()
        let new_id = (id + '_machine')
        event.create(new_id)
        .model('kubejs:block/machines/' + new_id)
        .soundType('lantern')
        .hardness(3.0)
        .notSolid()
        .renderType(layer)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    }

    machine('Andesite', "cutout") // Create
    machine('Zinc', "cutout") // Thermal/Mekanism
    machine('Copper', "cutout") // Create
    machine('Brass', "cutout") // Create
    machine('Sturdy', "cutout") // Create Trains Tier
    machine('Steel', "cutout") // Ad Astra+
})
