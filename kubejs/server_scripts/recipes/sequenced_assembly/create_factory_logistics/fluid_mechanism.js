let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)
let FL = (id, x) => MOD("create_factory_logistics", id, x)

ServerEvents.recipes(event => {
  const t = FL('incomplete_fluid_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('create_factory_logistics:fluid_mechanism') // Main output, will appear in JEI as the result
  ], CR('copper_casing'), [
    event.recipes.createDeploying(t, [t, 'create:fluid_tank']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:fluid_pipe']), // Deploying
    event.recipes.createDeploying(t, [t, 'create:copper_sheet']), // Deploying
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']), // Deploying
  ]).transitionalItem(t).loops(1)
})