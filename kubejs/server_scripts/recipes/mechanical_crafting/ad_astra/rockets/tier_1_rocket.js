ServerEvents.recipes(event => {
    event.recipes.createMechanicalCrafting('ad_astra:tier_1_rocket', [
        '   N   ',
        '  BBB  ',
        '  BCB  ',
        '  BGB  ',
        '  BSB  ',
        '  BWB  ',
        ' FTBTF ',
        ' F E F '
    ], {
        F: 'ad_astra:rocket_fin',
        E: 'ad_astra:steel_engine',
        T: 'ad_astra:steel_tank',
        B: 'kubejs:compressed_steel_sheet',
        C: 'ad_astra:vent',
        S: '#create:seats',
        G: '#forge:glass',
        W: 'kubejs:steel_machine',
        N: 'ad_astra:rocket_nose_cone'
    })
})