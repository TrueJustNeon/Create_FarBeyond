ServerEvents.recipes(event => {
event.smithing(
  'vintage:belt_grinder',                     // arg 1: output
  'kubejs:andesite_mechanism', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'vintage:grinder_belt'                            // arg 4: the upgrade item
)
})