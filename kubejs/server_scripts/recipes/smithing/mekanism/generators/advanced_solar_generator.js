ServerEvents.recipes(event => {
event.smithing(
  'mekanismgenerators:advanced_solar_generator',                     // arg 1: output
  'mekanism:energy_tablet',                                           // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanismgenerators:solar_generator', // arg 4: the upgrade item
)
})