ServerEvents.recipes(event => {

  event.custom({
    type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
    template: { item: 'kubejs:backpack_upgrade' },
    base: { item: 'sophisticatedbackpacks:copper_backpack' },
    addition: { item: 'kubejs:compressed_iron_sheet' },
    result: {
      count: 1,
      id: 'sophisticatedbackpacks:iron_backpack'
    }
  })

})