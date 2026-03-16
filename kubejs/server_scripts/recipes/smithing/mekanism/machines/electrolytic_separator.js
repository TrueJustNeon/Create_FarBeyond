ServerEvents.recipes(event => {
event.smithing(
  'mekanism:electrolytic_separator',                     // arg 1: output
  'create:precision_mechanism', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanism:electrolytic_core'                            // arg 4: the upgrade item
)
})