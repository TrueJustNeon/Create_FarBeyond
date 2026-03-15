ServerEvents.recipes(event => {
event.smithing(
  'create_things_and_misc:sprinkler',                     // arg 1: output
  'create_factory_logistics:fluid_mechanism', // arg 2: the smithing template
  'kubejs:copper_machine',                          // arg 3: the item to be upgraded
  'create_things_and_misc:sprinkler_head'                            // arg 4: the upgrade item
)
})