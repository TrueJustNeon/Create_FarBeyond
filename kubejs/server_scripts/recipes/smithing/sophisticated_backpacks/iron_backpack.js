ServerEvents.recipes(event => {
event.smithing(
  'sophisticatedbackpacks:iron_backpack',                     // arg 1: output
  'kubejs:backpack_upgrade', // arg 2: the smithing template
  'sophisticatedbackpacks:copper_backpack',                          // arg 3: the item to be upgraded
  'kubejs:compressed_iron_sheet'                            // arg 4: the upgrade item
)
})