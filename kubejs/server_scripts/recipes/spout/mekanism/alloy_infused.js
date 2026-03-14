ServerEvents.recipes(event => {
  event.recipes.create.filling('mekanism:alloy_infused', [Fluid.of('thermal:redstone', 100), 'create:andesite_alloy'])
})