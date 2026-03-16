ServerEvents.recipes(event => {

  event.custom({
    type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
    template: { item: 'kubejs:backpack_upgrade' },
    base: { item: 'sophisticatedbackpacks:iron_backpack' },
    addition: { item: 'kubejs:compressed_gold_sheet' },
    result: {
      count: 1,
      id: 'sophisticatedbackpacks:gold_backpack'
    }
  })

})