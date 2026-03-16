let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  const t = KJ('incomplete_plastic_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('kubejs:plastic_mechanism') // Main output, will appear in JEI as the result
  ], CR('precision_mechanism'), [
    event.recipes.createDeploying(t, [t, 'mekanism:hdpe_sheet']), // Deploying
    event.recipes.createDeploying(t, [t, 'mekanism:alloy_atomic']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:electron_tube']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'mekanism:hdpe_sheet']), // Deploying
  ]).transitionalItem(t).loops(2)
})