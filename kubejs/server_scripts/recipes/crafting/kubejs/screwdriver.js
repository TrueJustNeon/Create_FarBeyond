// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:screwdriver', [
    'L  ',
    ' L ',
    '  W'
  ], {
    W: 'create:andesite_alloy',
    L: 'minecraft:iron_ingot'
})
})