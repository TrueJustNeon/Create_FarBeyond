StartupEvents.registry('item', event => {
    // Functions
    let compressed_sheet = (name) => {
        let id = name.toLowerCase()
        event.create("compressed_" + id + "_sheet")
    }

    let brick = (name) => {
        let id = name.toLowerCase()
        event.create(id + "_brick")
    }

    let item = (name) => {
        let id = name.toLowerCase()
        event.create(id)
    }

    let upgrade = (name, tooltip) => {
        let id = name.toLowerCase()
        event.create(id + "_upgrade")
        .tooltip(tooltip)
    }
    
    let compound = (name) => {
        let id = name.toLowerCase()
        event.create(id + "_compound")
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
    compressed_sheet("Calorite") // Jet Suits
    compressed_sheet("Ostrum") // Netherite Suits
    compressed_sheet("Steel") // Space Suits

})