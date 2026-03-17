// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:kelp_compound',
  [
    'NNN',
    'KKK',
    'CCC'
  ], {
    C: 'minecraft:clay',
    K: 'minecraft:kelp',
    N: '#forge:nuggets/tin'
})
})