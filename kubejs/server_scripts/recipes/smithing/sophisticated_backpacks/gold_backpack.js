ServerEvents.recipes(event => {
event.smithing(
  'sophisticatedbackpacks:gold_backpack',                     // arg 1: output
  'kubejs:backpack_upgrade', // arg 2: the smithing template
  'sophisticatedbackpacks:iron_backpack',                          // arg 3: the item to be upgraded
  'minecraft:gold_block'                            // arg 4: the upgrade item
)
})