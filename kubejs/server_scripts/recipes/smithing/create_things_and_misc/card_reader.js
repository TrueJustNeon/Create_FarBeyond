ServerEvents.recipes(event => {
event.smithing(
  'create_things_and_misc:card_reader',                     // arg 1: output
  'create:brass_sheet', // arg 2: the smithing template
  'kubejs:brass_machine',                          // arg 3: the item to be upgraded
  'minecraft:redstone'                            // arg 4: the upgrade item
)
})