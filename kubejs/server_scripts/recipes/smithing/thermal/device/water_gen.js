ServerEvents.recipes(event => {
event.smithing(
  'thermal:device_water_gen',                     // arg 1: output
  'thermal:redstone_servo', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'minecraft:water_bucket'                            // arg 4: the upgrade item
)
})