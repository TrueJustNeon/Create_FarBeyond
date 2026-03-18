StartupEvents.registry('item', event => {

	// Main Items
    event.create('sap').displayName('Sap')
    event.create('kelp_compound').displayName('Kelp Compound')
    event.create('kelp_brick').displayName('Kelp Brick')
    event.create('andesite_compound').displayName('Andesite Compound')

    // Smithing Templates
    event.create('backpack_upgrade').displayName('Backpack Upgrader').tooltip("Used for Sophisticated Backpacks.")
    event.create('suit_upgrade').displayName('Suit Upgrader').tooltip("Used for Ad Astra's space suits.")

    // Compressed Sheets
    event.create('compressed_copper_sheet').displayName('Copper Mega-Sheet') // Backpack Upgrade Copper
    event.create('compressed_iron_sheet').displayName('Iron Mega-Sheet') // Backpack Upgrade Iron
    event.create('compressed_gold_sheet').displayName('Gold Mega-Sheet') // Backpack Upgrade Gold
    
    event.create('compressed_calorite_sheet').displayName('Calorite Mega-Sheet') // Jet Suits
    event.create('compressed_ostrum_sheet').displayName('Ostrum Mega-Sheet') // Netherite Suits
    event.create('compressed_steel_sheet').displayName('Steel Mega-Sheet') // Space Suits
})