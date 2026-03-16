ServerEvents.recipes(event => {
event.smithing(
  'thermal:device_tree_extractor',                     // arg 1: output
  'thermal:redstone_servo', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'thermal:iron_gear'                            // arg 4: the upgrade item
)
})