// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:andesite_compound', [
    'KA ',
    'AK ',
    '   '
  ], {
    K: 'kubejs:kelp_brick',
    A: 'minecraft:andesite'
})
})