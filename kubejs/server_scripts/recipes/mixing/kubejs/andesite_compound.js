ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    'kubejs:andesite_compound', // RESULT
     [
      'minecraft:andesite',
      'kubejs:kelp_brick',
     ] // Recipe, any order is fine.
    )
})