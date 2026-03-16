// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:backpack_upgrade', [
    'SLH',
    'LAL',
    'CCC'
  ], {
    H: 'kubejs:hammer',
    S: 'kubejs:screwdriver',
    C: 'sophisticatedbackpacks:upgrade_base',
    A: 'kubejs:kelp_compound',
    L: 'create:brass_sheet'
})
})