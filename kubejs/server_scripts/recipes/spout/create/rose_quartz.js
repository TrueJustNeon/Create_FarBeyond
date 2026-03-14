ServerEvents.recipes(event => {
  event.recipes.create.filling('create:rose_quartz', [Fluid.of('thermal:redstone', 500), 'minecraft:quartz'])
})