ServerEvents.recipes(event => {
event.smithing(
  'ad_astra:space_helmet',                     // arg 1: output
  'kubejs:suit_upgrade', // arg 2: the smithing template
  'create:copper_diving_helmet',                          // arg 3: the item to be upgraded
  'kubejs:compressed_steel_sheet'                            // arg 4: the upgrade item
)
})