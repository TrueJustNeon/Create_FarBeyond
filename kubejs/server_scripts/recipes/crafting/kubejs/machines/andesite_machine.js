// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:andesite_machine', [
    'LLL',
    'LWL',
    'LLL'
  ], {
    W: 'create:andesite_casing',
    L: 'kubejs:andesite_mechanism'
})
})