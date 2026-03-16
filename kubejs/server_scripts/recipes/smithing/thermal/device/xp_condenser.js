ServerEvents.recipes(event => {
event.smithing(
  'thermal:device_xp_condenser',                     // arg 1: output
  'thermal:redstone_servo', // arg 2: the smithing template
  'kubejs:brass_machine',                          // arg 3: the item to be upgraded
  'thermal:lapis_gear'                            // arg 4: the upgrade item
)
})