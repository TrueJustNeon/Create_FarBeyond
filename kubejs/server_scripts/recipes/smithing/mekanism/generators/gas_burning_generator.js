ServerEvents.recipes(event => {
event.smithing(
  'mekanismgenerators:gas_burning_generator',                     // arg 1: output
  'mekanism:energy_tablet', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'mekanism:electrolytic_core'                            // arg 4: the upgrade item
)
})