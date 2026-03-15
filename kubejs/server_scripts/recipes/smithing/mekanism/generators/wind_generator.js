ServerEvents.recipes(event => {
event.smithing(
  'mekanismgenerators:wind_generator',                     // arg 1: output
  'mekanism:energy_table', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanismgenerators:turbine_blade'                            // arg 4: the upgrade item
)
})