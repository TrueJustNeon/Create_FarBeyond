// For items.
ServerEvents.recipes(event => {
  event.shaped(
      Item.of('create:hose_pulley', 1), // arg 1: output
   [
    ' C ',
    ' R ',
    ' S '
  ], {
	  C: 'create:copper_casing',
    R: 'thermal:cured_rubber_block',
    S: 'create:copper_sheet'
  })
})