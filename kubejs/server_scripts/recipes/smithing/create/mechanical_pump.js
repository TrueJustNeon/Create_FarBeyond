ServerEvents.recipes(event => {
event.smithing(
  'create:mechanical_pump',                     // arg 1: output
  'minecraft:copper_ingot', // arg 2: the smithing template
  'create:fluid_pipe',                          // arg 3: the item to be upgraded
  'create:cogwheel'                            // arg 4: the upgrade item
)
})