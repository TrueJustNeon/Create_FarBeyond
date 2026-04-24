// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:hammer', [
    'LLL',
    'LLL',
    ' W '
  ], {
    W: 'minecraft:stick',
    L: '#forge:ingots/steel'
})
})