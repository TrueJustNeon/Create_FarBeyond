ServerEvents.recipes(event => {
event.smithing(
  'ad_astra:netherite_space_suit',                     // arg 1: output
  'kubejs:compressed_ostrum_sheet', // arg 2: the smithing template
  'ad_astra:space_suit',                          // arg 3: the item to be upgraded
  'minecraft:netherite_ingot'                            // arg 4: the upgrade item
)
})