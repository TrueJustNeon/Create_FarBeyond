ServerEvents.recipes(event => {
event.smithing(
  'ad_astra_giselle_addon:fuel_loader',                     // arg 1: output
  'kubejs:steel_mechanism', // arg 2: the smithing template
  'kubejs:steel_machine',                          // arg 3: the item to be upgraded
  'create:portable_fluid_interface'                            // arg 4: the upgrade item
)
})