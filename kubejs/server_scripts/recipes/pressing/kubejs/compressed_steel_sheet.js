ServerEvents.recipes(event => {
  event.recipes.create.pressing(
    'kubejs:compressed_steel_sheet', // Output
     '#forge:storage_blocks/steel' // Input
    )
})