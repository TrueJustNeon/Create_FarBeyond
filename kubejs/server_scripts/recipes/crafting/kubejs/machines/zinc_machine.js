// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:zinc_machine', [
    'LLL',
    'LWL',
    'LLL'
  ], {
    W: 'thermal:machine_frame',
    L: 'powergrid:electrical_gizmo'
})
})