ServerEvents.recipes(event => {
  event.recipes.create.mixing('thermal:invar_ingot', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'thermal:nickel_ingot'])-heated()
})