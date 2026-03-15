ServerEvents.recipes(event => {
event.smithing(
  'create_factory_logistics:jar_packager',                     // arg 1: output
  'create_factory_logistics:fluid_mechanism', // arg 2: the smithing template
  'kubejs:copper_machine',                          // arg 3: the item to be upgraded
  'mekanism:basic_fluid_tank'                            // arg 4: the upgrade item
)
})