StartupEvents.registry('item', event => {

    let mechanism = (name) => {
        let id = name.toLowerCase()
        event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism')
        event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism')

    }

mechanism('Andesite') // Create Tier
// Between = Copper Mechanism (fluid_mechanism)
mechanism('Plastic') // Mekanism Tier
// Between = Brass Mechanism (precision_mechanism)
})