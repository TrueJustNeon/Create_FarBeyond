// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:brass_machine', [
    'LLL',
    'LWL',
    'LLL'
  ], {
    W: 'create:brass_casing',
    L: 'create:precision_mechanism'
})
})