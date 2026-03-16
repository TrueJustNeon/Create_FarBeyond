ServerEvents.recipes(event => {
event.smithing(
  'thermal:machine_insolator',                     // arg 1: output
  'thermal:rf_coil', // arg 2: the smithing template
  'thermal:machine_frame',                          // arg 3: the item to be upgraded
  'thermal:lumium_gear'                            // arg 4: the upgrade item
)
})