ServerEvents.recipes(event => {
event.smithing(
  'mekanism:osmium_compressor',                     // arg 1: output
  'kubejs:plastic_mechanism', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanism:advanced_control_circuit'                            // arg 4: the upgrade item
)
})