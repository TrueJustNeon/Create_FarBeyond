ServerEvents.recipes(event => {
event.smithing(
  'create:mechanical_mixer',                     // arg 1: output
  'kubejs:andesite_mechanism', // arg 2: the smithing template
  'kubejs:andesite_machine',                          // arg 3: the item to be upgraded
  'create:whisk'                            // arg 4: the upgrade item
)
})