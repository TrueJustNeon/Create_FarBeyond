ServerEvents.recipes(event => {

  event.custom({
    type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
    template: { item: 'kubejs:backpack_upgrade' },
    base: { item: 'sophisticatedbackpacks:backpack' },
    addition: { item: 'kubejs:compressed_copper_sheet' },
    result: {
      count: 1,
      id: 'sophisticatedbackpacks:copper_backpack'
    }
  })

})