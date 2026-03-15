ServerEvents.recipes(event => {

  event.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "template": { "item": "kubejs:backpack_upgrade" },
    "base": { "item": "sophisticatedbackpacks:gold_backpack" },
    "addition": { "item": "minecraft:diamond_block" },
    "result": { "item": "sophisticatedbackpacks:diamond_backpack" }
  })

})