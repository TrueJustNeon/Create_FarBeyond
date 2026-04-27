StartupEvents.registry('item', event => {

    let mechanism = (name) => {
        let id = name.toLowerCase()
        let complete_id = (id + "_mechanism")
        let incomplete_id = ("incomplete_" + id + "_mechanism")

        event.create(complete_id)
        .texture("kubejs:item/mechanism/" + complete_id)
        
        event.create(incomplete_id, 'create:sequenced_assembly')
        .texture("kubejs:item/mechanism/incomplete/" + incomplete_id)

    }

mechanism('Andesite') // Create Tier
// Between = Copper Mechanism (create_factory_logistics:fluid_mechanism)
mechanism('Plastic') // Mekanism Tier
// Between = Brass Mechanism (create:precision_mechanism)
mechanism('Steel') // Ad Astra tier (if rocket then 1 tier)
mechanism('Desh') // Ad Astra Rockets 2 tier
mechanism('Ostrum') // Ad Astra Rockets 3 tier
mechanism('Calorite') // Ad Astra Rockets 4 tier
})
