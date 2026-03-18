ServerEvents.recipes(event => {
event.smithing(
  'create:stockpile_switch',                     // arg 1: output
  'create:electron_tube', // arg 2: the smithing template
  'kubejs:brass_machine',                          // arg 3: the item to be upgraded
  'minecraft:comparator'                            // arg 4: the upgrade item
)
})