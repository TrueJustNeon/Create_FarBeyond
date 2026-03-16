ServerEvents.recipes(event => {
event.smithing(
  'thermal:machine_pulverizer',                     // arg 1: output
  'thermal:rf_coil', // arg 2: the smithing template
  'thermal:machine_frame',                          // arg 3: the item to be upgraded
  'create:millstone'                            // arg 4: the upgrade item
)
})