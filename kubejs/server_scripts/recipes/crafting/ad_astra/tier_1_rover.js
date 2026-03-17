// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('ad_astr:tier_1_rover', [
    'BRS',
    'OME',
    'WPW'
  ], {
    M: 'kubejs:desh_engine',
    W: 'ad_astra:wheel',
    O: 'ad_astra:large_gas_tank',
    S: '#ad_astra:steel_rods',
    S: 'ad_astra:desh_block',
    E: 'ad_astra:desh_engine',
    R: 'ad_astra:radio'

})
})