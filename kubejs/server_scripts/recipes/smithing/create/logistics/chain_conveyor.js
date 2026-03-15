ServerEvents.recipes(event => {
event.smithing(
  'create:chain_conveyor',                     // arg 1: output
  'kubejs:andesite_mechanism', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'minecraft:chain'                            // arg 4: the upgrade item
)
})