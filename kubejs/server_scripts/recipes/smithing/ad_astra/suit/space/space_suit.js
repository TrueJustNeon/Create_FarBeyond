ServerEvents.recipes(event => {
event.smithing(
  'ad_astra:space_suit',                     // arg 1: output
  'kubejs:suit_upgrade', // arg 2: the smithing template
  'ad_astra:oxygen_gear',                          // arg 3: the item to be upgraded
  'ad_astra:gas_tank'                            // arg 4: the upgrade item
)
})