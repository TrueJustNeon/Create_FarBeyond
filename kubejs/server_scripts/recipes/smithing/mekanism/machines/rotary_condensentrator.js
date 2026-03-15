ServerEvents.recipes(event => {
event.smithing(
  'mekanism:rotary_condensentrator',                     // arg 1: output
  'mekanism:energy_tablet', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanism:basic_chemical_tank'                            // arg 4: the upgrade item
)
})