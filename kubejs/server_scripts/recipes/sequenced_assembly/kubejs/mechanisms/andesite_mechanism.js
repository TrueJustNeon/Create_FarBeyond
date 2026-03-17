let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  const t = KJ('incomplete_andesite_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('kubejs:andesite_mechanism') // Main output, will appear in JEI as the result
  ], CR('andesite_casing'), [
    event.recipes.createDeploying(t, [t, 'create:large_cogwheel']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:cogwheel']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:andesite_alloy']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']), // Deploying
  ]).transitionalItem(t).loops(1)
})