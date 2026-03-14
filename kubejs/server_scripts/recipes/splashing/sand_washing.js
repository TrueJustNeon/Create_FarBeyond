
ServerEvents.recipes(event => {
  event.recipes.create.splashing(
    [ // Outputs, allows chance based
        Item.of('minecraft:clay_ball').withChance(0.25),
        Item.of('mekanism:nugget_tin').withChance(0.10),
        Item.of('thermal:silver_nugget').withChance(0.05),
    ],
     'minecraft:sand' // Input
    )
})