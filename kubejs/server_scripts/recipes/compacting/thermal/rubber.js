ServerEvents.recipes(event => {
  event.recipes.create.compacting([Fluid.of('thermal:latex', 250)], [Item.of('thermal:rubber', 1)])
})