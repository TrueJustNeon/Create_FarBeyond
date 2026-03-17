let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  const t = KJ('incomplete_ostrum_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('kubejs:ostrum_mechanism') // Main output, will appear in JEI as the result
  ], KJ('desh_mechanism'), [
    event.recipes.createDeploying(t, [t, 'ad_astra:ostrum_plate']), // Deploying
    event.recipes.createDeploying(t, [t, 'vintage:ostrum_wire']), // Deploying
    event.recipes.createDeploying(t, [t, 'vintage:ostrum_wire']), // Deploying
    event.recipes.createDeploying(t, [t, 'vintage:ostrum_spring']), // Deploying
    event.recipes.createDeploying(t, [t, 'ad_astra:ostrum_plate']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'create:electron_tube']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'ad_astra:ostrum_plate']), // Deploying
    event.recipes.createDeploying(t, [t, 'powergrid:integrated_circuit']), // Deploying
  ]).transitionalItem(t).loops(2)
})