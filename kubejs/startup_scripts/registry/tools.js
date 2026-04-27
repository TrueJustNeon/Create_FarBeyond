ItemEvents.toolTierRegistry(event => {
    event.add('modpack_steel_tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/steel'
    })
});

StartupEvents.registry('item', event => {

    // Functions

    let tool_3d = (name, type) => {
        let id = name.toLowerCase()
        event.create(id, type)
        .tier('modpack_steel_tool')
        .model("kubejs:item/tool/" + id)
        // .texture("kubejs:item/tool/3d/" + id) // Should be specified in the models/item/tool.json!!!
    }
    
    let tool_2d = (name, type) => {
        let id = name.toLowerCase()
        event.create(id, type)
        .tier('modpack_steel_tool')
        .texture("kubejs:item/tool/" + id)
        
    }

// 2d tools
tool_2d('Screwdriver', 'axe')

// 3d tools
tool_3d('Hammer', 'pickaxe')

})
