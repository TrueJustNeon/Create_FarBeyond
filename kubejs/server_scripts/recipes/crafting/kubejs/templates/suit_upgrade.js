// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:backpack_upgrade', [
    'SLH',
    'LAL',
    'CCC'
  ], {
    H: 'kubejs:hammer',
    S: 'kubejs:screwdriver',
    C: 'kubejs:compressed_iron_sheet',
    A: 'thermal:cured_rubber',
    L: 'mekanism:hdpe_sheet'
})
})