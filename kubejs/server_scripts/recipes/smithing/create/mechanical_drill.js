ServerEvents.recipes(event => {
event.smithing(
  'create:mechanical_drill',                     // arg 1: output
  'kubejs:andesite_mechanism', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'thermal:drill_head'                            // arg 4: the upgrade item
)
})