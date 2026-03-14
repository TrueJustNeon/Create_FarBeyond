// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:andesite_compound', [
    'KKK',
    'AAA',
    '   '
  ], {
    K: 'kubejs:kelp_brick',
    A: 'minecraft:andesite'
})
})