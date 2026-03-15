// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('mekanismgenerators:turbine_blade', [
    ' S ',
    'SPS',
    ' S '
  ], {
    P: 'create:propeller',
    S: '#forge:ingots/steel'
})
})