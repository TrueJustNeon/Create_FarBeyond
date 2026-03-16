ServerEvents.recipes(event => {
event.smithing(
  'mekanism:pressurized_reaction_chamber',                     // arg 1: output
  'create:precision_mechanism', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanism:dynamic_tank'                            // arg 4: the upgrade item
)
})