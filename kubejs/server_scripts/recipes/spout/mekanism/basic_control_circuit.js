ServerEvents.recipes(event => {
  event.recipes.create.filling(
    'mekanism:basic_control_circuit', // Result
     [
      Fluid.of(
        'thermal:redstone', // Liquid
         250 // Amount
        ),
       'mekanism:hdpe_sheet' // Item to be infused 
      ])
})