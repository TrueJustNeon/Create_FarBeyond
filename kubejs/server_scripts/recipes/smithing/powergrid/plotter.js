ServerEvents.recipes(event => {
event.smithing(
  'powergrid:plotter',                     // arg 1: output
  'kubejs:andesite_mechanism', // arg 2: the smithing template
  'kubejs:zinc_machine',                          // arg 3: the item to be upgraded
  'powergrid:voltage_gauge'                            // arg 4: the upgrade item
)
})