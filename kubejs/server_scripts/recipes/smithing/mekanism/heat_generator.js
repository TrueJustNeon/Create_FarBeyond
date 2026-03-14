ServerEvents.recipes(event => {
event.smithing(
  'mekanismgenerators:heat_generator',                     // arg 1: output
  'kubejs:plastic_mechanism', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'minecraft:blast_furnace'                            // arg 4: the upgrade item
)
})