ServerEvents.recipes(event => {
event.smithing(
  'thermal:dynamo_magmatic',                     // arg 1: output
  'thermal:rf_coil', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'thermal:invar_gear'                            // arg 4: the upgrade item
)
})