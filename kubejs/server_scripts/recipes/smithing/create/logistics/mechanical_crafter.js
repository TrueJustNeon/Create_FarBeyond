ServerEvents.recipes(event => {
event.smithing(
  Item.of('create:mechanical_crafter', 3),                     // arg 1: output
  'create:electron_tube', // arg 2: the smithing template
  'kubejs:brass_machine',                          // arg 3: the item to be upgraded
  'minecraft:crafting_table'                            // arg 4: the upgrade item
)
})