ServerEvents.recipes(event => {
event.smithing(
  'thermal:machine_chiller',                     // arg 1: output
  'thermal:rf_coil', // arg 2: the smithing template
  'thermal:machine_frame',                          // arg 3: the item to be upgraded
  'minecraft:blue_ice'                            // arg 4: the upgrade item
)
})