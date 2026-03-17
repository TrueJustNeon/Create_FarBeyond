// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:steel_machine', [
    'LLL',
    'LWL',
    'LLL'
  ], {
    W: 'mekanism:sps_casing',
    L: 'kubejs:steel_mechanism'
})
})