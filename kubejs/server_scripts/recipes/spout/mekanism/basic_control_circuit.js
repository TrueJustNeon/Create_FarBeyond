ServerEvents.recipes(event => {
  event.recipes.create.filling('mekanism:basic_control_circuit', [Fluid.of('thermal:redstone', 250), 'mekanism:hdpe_sheet'])
})