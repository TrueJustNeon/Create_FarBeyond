// For items.
ServerEvents.recipes(event => {
  event.shaped(
      Item.of('create:fluid_pipe', 4), // arg 1: output
   [
    ' R ',
    'SIS',
    ' R '
  ], {
	  I: 'minecraft:copper_ingot',
	  S: 'create:copper_sheet',
    R: 'thermal:cured_rubber'
  })
})