ServerEvents.recipes(event => {
  event.recipes.create.filling(
    'mekanism:alloy_infused', // Result
     [
      Fluid.of(
        'thermal:redstone', // Liquid
         100 // Amount
        ),
       'create:andesite_alloy' // Item to be infused 
      ])
})