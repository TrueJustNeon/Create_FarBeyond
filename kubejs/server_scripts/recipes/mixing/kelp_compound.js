ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    'kubejs:kelp_compound', // RESULT
     [
      'minecraft:clay',
      'minecraft:clay',
      'minecraft:kelp',
      'minecraft:kelp',
      '#forge:nuggets/tin',
      '#forge:nuggets/tin'
     ] // Recipe, any order is fine.
    )
})