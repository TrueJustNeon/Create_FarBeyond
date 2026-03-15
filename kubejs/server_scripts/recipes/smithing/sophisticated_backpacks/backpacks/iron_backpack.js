ServerEvents.recipes(event => {

  event.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "template": { "item": "kubejs:backpack_upgrade" },
    "base": { "item": "sophisticatedbackpacks:copper_backpack" },
    "addition": { "item": "kubejs:compressed_iron_sheet" },
    "result": { "item": "sophisticatedbackpacks:iron_backpack" }
  })

})