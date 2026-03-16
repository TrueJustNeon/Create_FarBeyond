ServerEvents.recipes(event => {

  event.custom({
    type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
    template: { item: 'kubejs:backpack_upgrade' },
    base: { item: 'sophisticatedbackpacks:gold_backpack' },
    addition: { item: 'minecraft:diamond_block' },
    result: {
      count: 1,
      id: 'sophisticatedbackpacks:diamond_backpack'
    }
  })

})