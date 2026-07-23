StartupEvents.registry('item', event => {
    // Functions
    let compressed_sheet = (name) => {
        let id = name.toLowerCase()
        let new_id = ("compressed_" + id + "_sheet")
        event.create(new_id)
        .texture("kubejs:item/compressed_sheet/" + new_id)
    }

    let brick = (name) => {
        let id = name.toLowerCase()
        let new_id = (id + "_brick")
        event.create(new_id)
        
    }

    let item = (name) => {
        let id = name.toLowerCase()
        event.create(id)
    }

    let upgrade = (name, tooltip) => {
        let id = name.toLowerCase()
        let new_id = (id + "_upgrade")
        event.create(new_id)
        .texture("kubejs:item/upgrade/" + new_id)
        .tooltip(tooltip)
    }
    
    let compound = (name) => {
        let id = name.toLowerCase()
        let new_id = (id + "_compound")
        event.create(new_id)
        .texture("kubejs:item/compounds/" + new_id)
    }

	// Main Items
    item("Sap")

    // Bricks
    brick("Kelp")
    
    // Compounds
    compound("Kelp")
    compound("Andesite")

    // Upgrades
    upgrade("Suit", "Used for Space Suits.")
    upgrade("Backpack", "Used for Backpacks.")

    // Compressed Sheets
    compressed_sheet("Copper") // Copper Backpack
    compressed_sheet("Iron") // Iron Backpack
    compressed_sheet("Gold") // Gold Backpack
    compressed_sheet("Desh") // Rocket
    compressed_sheet("Calorite") // Jet Suits
    compressed_sheet("Ostrum") // Netherite Suits
    compressed_sheet("Steel") // Space Suits

})
