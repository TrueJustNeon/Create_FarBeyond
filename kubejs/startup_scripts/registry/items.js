StartupEvents.registry('item', event => {

	// Main Items
    event.create('sap')
    event.create('kelp_compound')
    event.create('kelp_brick')
    event.create('andesite_compound')

    // Smithing Templates
    event.create('backpack_upgrade').tooltip("Used for Backpacks.")
    event.create('suit_upgrade').tooltip("Used for space suits.")

    // Compressed Sheets (Netherite but not really?)
    event.create('compressed_copper_sheet') // Backpack Upgrade Copper
    event.create('compressed_iron_sheet') // Backpack Upgrade Iron
    event.create('compressed_gold_sheet') // Backpack Upgrade Gold
    event.create('compressed_calorite_sheet') // Jet Suits
    event.create('compressed_ostrum_sheet') // Netherite Suits
    event.create('compressed_steel_sheet') // Space Suits
})