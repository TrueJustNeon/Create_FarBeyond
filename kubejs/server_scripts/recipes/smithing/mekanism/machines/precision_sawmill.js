ServerEvents.recipes(event => {
event.smithing(
  'mekanism:precision_sawmill',                     // arg 1: output
  'kubejs:plastic_mechanism', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'thermal:saw_blade'                            // arg 4: the upgrade item
)
})