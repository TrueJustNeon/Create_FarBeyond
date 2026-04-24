ItemEvents.toolTierRegistry(event => {
    event.add('modpack_steel_tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/steel'
    })
});

StartupEvents.registry('item', event => {
    // Functions

    let hammer_3d = (name) => {
        let id = name.toLowerCase()
        event.create(id, 'pickaxe')
        .tier('modpack_steel_tool')
        .model("kubejs:item/" + id)
    }
    
    let axe_type = (name) => {
        let id = name.toLowerCase()
        event.create(id, 'axe')
        .tier('modpack_steel_tool')
        
    }

axe_type('Screwdriver')
hammer_3d('Hammer')

})
