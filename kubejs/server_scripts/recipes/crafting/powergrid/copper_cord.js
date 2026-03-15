// For items.
ServerEvents.recipes(event => {
event.shaped(
  Item.of('powergrid:copper_cord', 1), // arg 1: output
  [
    'WWR',
    '   ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    R: 'thermal:cured_rubber',
    W: 'powergrid:insulated_copper_wire'
  }
)
})
