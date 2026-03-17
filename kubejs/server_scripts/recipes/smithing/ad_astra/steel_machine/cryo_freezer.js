ServerEvents.recipes(event => {
event.smithing(
  'ad_astra:cryo_freezer',                     // arg 1: output
  'kubejs:steel_mechanism', // arg 2: the smithing template
  'kubejs:steel_machine',                          // arg 3: the item to be upgraded
  'kubejs:compressed_ostrum_sheet'                            // arg 4: the upgrade item
)
})