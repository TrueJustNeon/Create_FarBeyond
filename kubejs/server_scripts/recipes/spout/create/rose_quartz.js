ServerEvents.recipes(event => {
  event.recipes.create.filling(
    'create:rose_quartz', // Result
     [
      Fluid.of(
        'thermal:redstone', // Liquid
         800 // Amount
        ),
       'minecraft:quartz' // Item to be infused 
      ])
})