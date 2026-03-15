// For items.
ServerEvents.recipes(event => {
event.shaped(
  Item.of('create_things_and_misc:sprinkler_head', 1), // arg 1: output
  [
    ' R ',
    ' C ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    R: 'thermal:cured_rubber',
    C: 'create:fluid_pipe'
  }
)
})
