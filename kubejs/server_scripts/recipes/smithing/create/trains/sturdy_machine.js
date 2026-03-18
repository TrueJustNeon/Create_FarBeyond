ServerEvents.recipes(event => {
event.smithing(
  'kubejs:sturdy_machine',                     // arg 1: output
  'create:precision_mechanism', // arg 2: the smithing template
  'kubejs:brass_machine',                          // arg 3: the item to be upgraded
  'create:railway_casing'                            // arg 4: the upgrade item
)
})