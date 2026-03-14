// For items.
ServerEvents.recipes(event => {
  event.shaped(
      Item.of('create:spout', 1), // arg 1: output
   [
    '   ',
    ' C ',
    ' R '
  ], {
	  C: 'create:copper_casing',
    R: 'thermal:cured_rubber_block'
  })
})