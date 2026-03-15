ServerEvents.recipes(event => {
event.smithing(
  'create:content_observer',                     // arg 1: output
  'create:electron_tube', // arg 2: the smithing template
  'kubejs:brass_machine',                          // arg 3: the item to be upgraded
  'minecraft:observer'                            // arg 4: the upgrade item
)
})