// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:sap', [
    'LLL',
    'LWL',
    'LLL'
  ], {
    W: 'minecraft:water_bucket',
    L: '#minecraft:logs'
})
})