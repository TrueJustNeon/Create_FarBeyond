ServerEvents.recipes(event => {
event.smithing(
  'create_things_and_misc:brass_speaker',                     // arg 1: output
  'create_things_and_misc:vibration_mechanism', // arg 2: the smithing template
  'kubejs:brass_machine',                          // arg 3: the item to be upgraded
  'minecraft:note_block'                            // arg 4: the upgrade item
)
})