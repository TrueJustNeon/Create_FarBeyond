ServerEvents.recipes(event => {
event.smithing(
  'thermal:device_potion_diffuser',                     // arg 1: output
  'thermal:redstone_servo', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'thermal:silver_gear'                            // arg 4: the upgrade item
)
})