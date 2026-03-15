// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('create_factory_logistics:fluid_mechanism', [
    'SKH',
    'LAL',
    'CCC'
  ], {
    H: 'kubejs:hammer',
    S: 'kubejs:screwdriver',
    C: 'create:copper_casing',
    A: 'kubejs:andesite_mechanism',
    K: 'create:fluid_tank',
    L: 'create:fluid_pipe'
})
})