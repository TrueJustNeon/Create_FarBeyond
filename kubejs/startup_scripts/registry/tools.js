ItemEvents.toolTierRegistry(event => {
    event.add('tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/iron'
    })
});

StartupEvents.registry('item', event => {
    let hammer_3d = (name) => {
        let id = name.toLowerCase()
        event.create(id, 'pickaxe')
        .tier('tool')
        .texture("kubejs:item/" + id)
        .model("kubejs:item/" + id)
    }
    
    let misc = (name) => {
        let id = name.toLowerCase()
        event.create(id, 'axe')
        .tier('tool')
        .texture("kubejs:item/" + id)
        
    }
misc('Screwdriver')
hammer_3d('Hammer')

})
