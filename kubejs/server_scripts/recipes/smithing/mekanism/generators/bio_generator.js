ServerEvents.recipes(event => {
event.smithing(
  'mekanismgenerators:bio_generator',                     // arg 1: output
  'mekanism:energy_table', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  '#forge:fuels'                            // arg 4: the upgrade item
)
})