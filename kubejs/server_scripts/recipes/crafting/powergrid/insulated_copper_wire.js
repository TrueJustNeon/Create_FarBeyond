// For items.
ServerEvents.recipes(event => {
event.shaped(
  Item.of('powergrid:insulated_copper_wire', 1), // arg 1: output
  [
    'WR ',
    '   ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    R: 'thermal:cured_rubber',
    W: '#forge:wires/copper'
  }
)
})
