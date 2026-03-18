ServerEvents.recipes(event => {
    event.recipes.createMechanicalCrafting('ad_astra:tier_3_rocket', [
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
        E: 'ad_astra:ostrum_engine',
        T: 'ad_astra:ostrum_tank',
        B: 'ad_astra:ostrum_block',
        C: 'ad_astra:vent',
        S: '#create:seats',
        G: '#forge:glass',
        W: 'kubejs:ostrum_mechanism',
        N: 'ad_astra:rocket_nose_cone'
    })
})