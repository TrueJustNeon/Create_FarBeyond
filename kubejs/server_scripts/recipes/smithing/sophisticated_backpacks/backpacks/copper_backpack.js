ServerEvents.recipes(event => {

  event.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "template": { "item": "kubejs:backpack_upgrade" },
    "base": { "item": "sophisticatedbackpacks:backpack" },
    "addition": { "item": "kubejs:compressed_copper_sheet" },
    "result": { "item": "sophisticatedbackpacks:copper_backpack" }
  })

})