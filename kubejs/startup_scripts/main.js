// Custom mods name (why?) go here
Platform.mods.kubejs.name = 'Far Beyond'
// Custom KubeJS creative tabs go here
StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.icon = 'kubejs:andesite_machine'; 
  event.displayName = Text.lightBlue('Far Beyond'); 
});