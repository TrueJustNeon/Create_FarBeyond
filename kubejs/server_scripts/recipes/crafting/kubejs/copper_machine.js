// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:copper_machine', [
    'LLL',
    'LWL',
    'LLL'
  ], {
    W: 'create:copper_casing',
    L: 'create_factory_logistics:fluid_mechanism'
})
})