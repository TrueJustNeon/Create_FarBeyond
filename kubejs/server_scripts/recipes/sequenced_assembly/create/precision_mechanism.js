let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  const t = CR('incomplete_precision_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('create:precision_mechanism') // Main output, will appear in JEI as the result
  ], KJ('andesite_mechanism'), [
    event.recipes.createDeploying(t, [t, 'create:brass_sheet']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:cogwheel']), // Deploying
    event.recipes.createDeploying(t, [t, 'minecraft:gold_nugget']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:electron_tube']), // Deploying
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']), // Deploying
    event.recipes.create.pressing(t, t), // Press
  ]).transitionalItem(t).loops(1)
})