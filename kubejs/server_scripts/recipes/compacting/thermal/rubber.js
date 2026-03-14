ServerEvents.recipes(event => {
  event.recipes.create.compacting([Fluid.of('thermal:latex', 250)], ['thermal:rubber'])
})