ServerEvents.recipes(event=> {
  const backpack1 = 'sophisticatedbackpacks:gold_backpack' // Backpack to Upgrade
event.shapeless("sophisticatedbackpacks:diamond_backpack",  // Backpack Upgraded
  [ // Items
  backpack1,
  "kubejs:backpack_upgrade",
  "minecraft:diamond_block"
]).modifyResult((inventory, itemstack) =>{
  let backpack = inventory.find(Item.of(backpack1).ignoreNBT())
  if (backpack.nbt == null) return itemstack
  let nbt = backpack.nbt
  nbt.inventorySlots += 9
  nbt.upgradeSlots += 1
return itemstack.withNBT(nbt)
})

})