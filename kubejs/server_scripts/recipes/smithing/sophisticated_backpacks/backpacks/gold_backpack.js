ServerEvents.recipes(event => {

  event.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "template": { "item": "kubejs:backpack_upgrade" },
    "base": { "item": "sophisticatedbackpacks:iron_backpack" },
    "addition": { "item": "kubejs:compressed_gold_sheet" },
    "result": { "item": "sophisticatedbackpacks:gold_backpack" }
  })

})