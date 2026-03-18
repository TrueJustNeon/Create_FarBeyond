ServerEvents.recipes(event => {
    event.recipes.createMechanicalCrafting('ad_astra:tier_4_rocket', [
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
        E: 'ad_astra:calorite_engine',
        T: 'ad_astra:calorite_tank',
        B: 'ad_astra:calorite_block',
        C: 'ad_astra:vent',
        S: '#create:seats',
        G: '#forge:glass',
        W: 'kubejs:calorite_mechanism',
        N: 'ad_astra:rocket_nose_cone'
    })
})