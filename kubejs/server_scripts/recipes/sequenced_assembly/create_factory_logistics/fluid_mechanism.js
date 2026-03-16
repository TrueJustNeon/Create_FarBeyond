let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)
let FL = (id, x) => MOD("create_factory_logistics", id, x)

ServerEvents.recipes(event => {
  const t = FL('incomplete_fluid_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('create_factory_logistics:fluid_mechanism') // Main output, will appear in JEI as the result
  ], KJ('andesite_mechanism'), [
    event.recipes.createDeploying(t, [t, 'create:copper_sheet']), // Deploying
    event.recipes.createDeploying(t, [t, 'thermal:cured_rubber']), // Deploying
    event.recipes.createDeploying(t, [t, 'thermal:cured_rubber']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'create:copper_sheet']), // Deploying
  ]).transitionalItem(t).loops(1)
})