ServerEvents.recipes(event => {
event.smithing(
  'mekanism:chemical_infuser',                     // arg 1: output
  'kubejs:plastic_mechanism', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanism:basic_chemical_tank'                            // arg 4: the upgrade item
)
})