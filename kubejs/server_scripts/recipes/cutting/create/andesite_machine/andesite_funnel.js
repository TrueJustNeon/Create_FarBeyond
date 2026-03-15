ServerEvents.recipes(event => {
    event.stonecutting(
        Item.of('create:andesite_funnel', 2), // Input
        Item.of('kubejs:andesite_machine') // Output

    )
})