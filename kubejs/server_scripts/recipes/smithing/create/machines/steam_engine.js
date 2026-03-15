ServerEvents.recipes(event => {
event.smithing(
  'create:steam_engine',                     // arg 1: output
  'create_factory_logistics:fluid_mechanism', // arg 2: the smithing template
  'kubejs:copper_machine',                          // arg 3: the item to be upgraded
  'create:golden_sheet'                            // arg 4: the upgrade item
)
})