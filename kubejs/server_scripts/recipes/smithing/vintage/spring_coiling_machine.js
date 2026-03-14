ServerEvents.recipes(event => {
event.smithing(
  'vintage:spring_coiling_machine',                     // arg 1: output
  'kubejs:andesite_mechanism', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'vintage:spring_coiling_machine_wheel'                            // arg 4: the upgrade item
)
})