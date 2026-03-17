let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  const t = KJ('incomplete_steel_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('kubejs:steel_mechanism') // Main output, will appear in JEI as the result
  ], KJ('plastic_mechanism'), [
    event.recipes.createDeploying(t, [t, 'ad_astra:steel_plate']), // Deploying
    event.recipes.createDeploying(t, [t, '#ad_astra:steel_rods']), // Deploying
    event.recipes.createDeploying(t, [t, 'vintage:small_steel_spring']), // Deploying
    event.recipes.createDeploying(t, [t, 'vintage:steel_wire']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'powergrid:redstone_relay']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:electron_tube']), // Deploying
    event.recipes.createDeploying(t, [t, 'powergrid:integrated_circuit']), // Deploying
    event.recipes.createDeploying(t, [t, 'ad_astra:steel_cable']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'ad_astra:steel_plate']), // Deploying
  ]).transitionalItem(t).loops(2)
})