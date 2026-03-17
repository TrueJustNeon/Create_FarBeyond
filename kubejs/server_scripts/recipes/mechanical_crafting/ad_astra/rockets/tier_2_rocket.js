ServerEvents.recipes(event => {
    event.recieps.createMechanicalCrafting('ad_astra:tier_2_rocket', [
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
        E: 'ad_astra:desh_engine',
        T: 'ad_astra:desh_tank',
        B: 'ad_astra:desh_block',
        C: 'ad_astra:vent',
        S: '#create:seats',
        G: '#forge:glass',
        W: 'kubejs:desh_mechanism',
        N: 'ad_astra:rocket_nose_cone'
    })
})