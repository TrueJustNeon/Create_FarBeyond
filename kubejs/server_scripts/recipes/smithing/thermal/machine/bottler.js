ServerEvents.recipes(event => {
event.smithing(
  'thermal:machine_bottler',                     // arg 1: output
  'thermal:rf_coil', // arg 2: the smithing template
  'thermal:machine_frame',                          // arg 3: the item to be upgraded
  'create:spout'                            // arg 4: the upgrade item
)
})