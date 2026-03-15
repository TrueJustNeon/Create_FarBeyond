ServerEvents.recipes(event => {
event.smithing(
  'create:packager',                     // arg 1: output
  'create:cardboard_block', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'minecraft:redstone'                            // arg 4: the upgrade item
)
})