ServerEvents.recipes(event => {
event.smithing(
  'thermal:device_composter',                     // arg 1: output
  'thermal:redstone_servo', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'minecraft:composter'                            // arg 4: the upgrade item
)
})