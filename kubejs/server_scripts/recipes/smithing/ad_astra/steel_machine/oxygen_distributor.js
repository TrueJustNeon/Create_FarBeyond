ServerEvents.recipes(event => {
event.smithing(
  'ad_astra:oxygen_distributor',                     // arg 1: output
  'kubejs:steel_mechanism', // arg 2: the smithing template
  'ad_astra:oxygen_loader',                          // arg 3: the item to be upgraded
  'mekanismgenerators:turbine_blade'                            // arg 4: the upgrade item
)
})