// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:andesite_mechanism', [
    'SKH',
    'LAL',
    'CCC'
  ], {
    H: 'kubejs:hammer',
    S: 'kubejs:screwdriver',
    C: 'create:andesite_casing',
    A: 'create:andesite_alloy',
    K: 'create:cogwheel',
    L: 'create:large_cogwheel'
})
})