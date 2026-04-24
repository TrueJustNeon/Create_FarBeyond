StartupEvents.registry('item', event => {

    let mechanism = (name) => {
        let id = name.toLowerCase()
        event.create(
            id + '_mechanism'
        )
        event.create(
            'incomplete_' + id + '_mechanism',
             'create:sequenced_assembly'
            )

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
