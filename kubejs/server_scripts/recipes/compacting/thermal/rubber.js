ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    [
            Item.of('thermal:rubber', 1) // Output
    ],
     [
      Fluid.of('thermal:latex', 250) // input
    ])
})