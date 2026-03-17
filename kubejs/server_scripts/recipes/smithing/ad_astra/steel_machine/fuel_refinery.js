ServerEvents.recipes(event => {
event.smithing(
  'ad_astra:fuel_refinery',                     // arg 1: output
  'kubejs:steel_mechanism', // arg 2: the smithing template
  'kubejs:steel_machine',                          // arg 3: the item to be upgraded
  'thermal:electrum_gear'                            // arg 4: the upgrade item
)
})