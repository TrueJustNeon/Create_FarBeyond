StartupEvents.registry('block', event => {
	// Main Block
    let machine = (name, layer) => {
        let id = name.toLowerCase()
        event.create(id + '_machine')
        .model('kubejs:block/' + id + '_machine')
        .material('lantern')
        .hardness(3.0)
        .displayName(name + ' Machine')
        .notSolid()
        .renderType(layer)
    }

    machine('Andesite', "solid")
    machine('Zinc', "cutout")
    machine('Copper', "cutout")
    machine('Brass', "solid")
})