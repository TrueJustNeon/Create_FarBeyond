ServerEvents.recipes(event => {

		// THERMAL RECIPES
	    event.remove({id: 'thermal:rubber_from_vine'})
	    event.remove({id: 'thermal:rubber_from_dandelion'})
		event.remove({id: 'thermal:rubber_3'})
	    event.remove({id: 'thermal:devices/tree_extractor/tree_extractor_jungle'})
	    event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
	    event.remove({id: 'thermal:enderium_dust_2'})
	    event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
	    event.remove({id: 'thermal:electrum_dust_2'})
	    event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
	    event.remove({id: 'thermal:bronze_dust_4'})
	    event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
	    event.remove({id: 'thermal:signalum_dust_4'})
	    event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
		event.remove({ input: 'thermal:press_coin_die' });
	    event.remove({id: 'thermal:lumium_dust_4'})
	    event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
	    event.remove({id: 'thermal:invar_dust_3'})
	    event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
	    event.remove({id: 'thermal:constantan_dust_4'})

		// BACKPACKS
	    event.remove({id: 'sophisticatedbackpacks:backpack'})
	    event.remove({id: 'sophisticatedbackpacks:iron_backpack_from_copper'})
	    event.remove({id: 'sophisticatedbackpacks:copper_backpack'})
	    event.remove({id: 'sophisticatedbackpacks:iron_backpack'})
	    event.remove({id: 'sophisticatedbackpacks:gold_backpack'})		
	    event.remove({id: 'sophisticatedbackpacks:diamond_backpack'})

		// CREATE ITEMS
	    event.remove({id: 'create:crafting/materials/andesite_alloy'}) // These are just in case ^^
	    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	    event.remove({id: 'create:crafting/kinetics/brass_hand'})
	    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	    event.remove({id: 'create:crafting/kinetics/belt_connector'})
		event.remove({id: 'create:crafting/materials/rose_quartz'})
	    event.remove({id: 'create_things_and_misc:radar_craft'})
	    event.remove({id: 'powergrid:crafting/insulated_copper_wire'})
	    event.remove({id: 'powergrid:crafting/copper_cord'})
	    event.remove({id: 'create_things_and_misc:sprinklerheadcraft'})

		// CREATE MACHINES
  	    event.remove({id: 'create:crafting/kinetics/deployer'})
 	    event.remove({id: 'create:crafting/kinetics/mechanical_press'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
	    event.remove({id: 'create:crafting/kinetics/encased_fan'})
	    event.remove({id: 'create:crafting/kinetics/spout'})
	    event.remove({id: 'create:crafting/kinetics/steam_engine'}) 
	    event.remove({id: 'create:crafting/kinetics/elevator_pulley'}) 
	    event.remove({id: 'create:crafting/kinetics/rope_pulley'}) 
	    event.remove({id: 'create:crafting/kinetics/weighted_ejector'}) 
		event.remove({id: 'create:crafting/kinetics/mechanical_roller'})
	    event.remove({id: 'create:crafting/kinetics/rotation_speed_controller'}) 
	    event.remove({id: 'create:crafting/kinetics/mechanical_arm'}) 
		event.remove({id: 'sliceanddice:slicer'})
		event.remove({id: 'create:crafting/kinetics/mechanical_crafter'})
	    event.remove({id: 'vintage:craft/belt_grinder'})
	    event.remove({id: 'vintage:craft/spring_coiling_machine'})
	    event.remove({id: 'powergrid:crafting/plotter'})
	    event.remove({id: 'create_things_and_misc:card_reader_craft_2'})
	    event.remove({id: 'create_things_and_misc:cardpress_craft'})
	    event.remove({id: 'create_things_and_misc:brass_speaker_craft'})

		// CREATE TOOLS
		event.remove({id: 'create:crafting/kinetics/super_glue'})

		// CREATE LOGISTICS
 	    event.remove({id: 'create:crafting/logistics/andesite_funnel'})
	    event.remove({id: 'create:crafting/logistics/andesite_tunnel'})
 	    event.remove({id: 'create:crafting/logistics/package_frogport'})
 	    event.remove({id: 'create:crafting/logistics/brass_tunnel'})
	    event.remove({id: 'create:crafting/logistics/brass_funnel'})
 	    event.remove({id: 'create:crafting/logistics/stockpile_switch'})
 	    event.remove({id: 'create:crafting/logistics/content_observer'})
		event.remove({id: 'create:crafting/kinetics/smart_chute'})
		event.remove({id: 'create:crafting/kinetics/chain_conveyor'})
		event.remove({id: 'create:crafting/kinetics/speedometer'})
		event.remove({id: 'create:crafting/kinetics/contraption_controls'})
		event.remove({id: 'createaddition:crafting/portable_energy_interface'})
		event.remove({id: 'createaddition:crafting/rolling_mill'})
		event.remove({id: 'create:crafting/kinetics/portable_storage_interface'})
		event.remove({id: 'create:crafting/logistics/packager'})

		// CREATE FLUIDS
	    event.remove({id: 'create:crafting/kinetics/fluid_pipe_vertical'})
	    event.remove({id: 'create:crafting/kinetics/fluid_pipe'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_pump'})
	    event.remove({id: 'create:crafting/kinetics/hose_pulley'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_pump'})
		event.remove({id: 'create:crafting/kinetics/portable_fluid_interface'})
		event.remove({id: 'create:crafting/kinetics/item_drain'})
	    event.remove({id: 'create_things_and_misc:sprinkler_craft'})
	    event.remove({id: 'create_factory_logistics:jar_packager'})

		// CREATE RECIPES - WASHING
  	    event.remove({id: 'create:splashing/sand'})

		// CREATE RECIPES - MIXING
	    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	    event.remove({id: 'create:mixing/andesite_alloy'})

		// CREATE RECIPES - ASSEMBLY
	    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
	    event.remove({id: 'create_factory_logistics:sequenced_assembly/fluid_mechanism'})

		// MEKANISM MACHINES 
		event.remove({id: 'mekanism:metallurgic_infuser'})
		event.remove({id: 'mekanism:electrolytic_separator'})
		event.remove({id: 'mekanism:pressurized_reaction_chamber'})
		event.remove({id: 'mekanism:precision_sawmill'})
		event.remove({id: 'mekanism:enrichment_chamber'})
		event.remove({id: 'mekanism:purification_chamber'})
		event.remove({id: 'mekanism:chemical_infuser'})
		event.remove({id: 'mekanism:chemical_oxidizer'})
		event.remove({id: 'mekanism:rotary_condensentrator'})
		event.remove({id: 'mekanism:crusher'})
		event.remove({id: 'mekanism:combiner'})
		event.remove({id: 'mekanism:osmium_compressor'})

		// MEKANISM GENERATORS
		event.remove({id: 'mekanismgenerators:generator/heat'})
		event.remove({id: 'mekanismgenerators:generator/gas_burning'})
		event.remove({id: 'mekanismgenerators:generator/solar'})
		event.remove({id: 'mekanismgenerators:generator/advanced_solar'})
		event.remove({id: 'mekanismgenerators:generator/wind'})
		event.remove({id: 'mekanismgenerators:generator/bio'})

		// MEKANISM ITEMS
		event.remove({id: 'mekanismgenerators:turbine/blade'})
	    event.remove({id: 'mekanism:control_circuit/ultimate'})
	    event.remove({id: 'mekanism:control_circuit/elite'})
	    event.remove({id: 'mekanism:control_circuit/advanced'})
	    event.remove({id: 'mekanism:control_circuit/basic'})
	    event.remove({id: 'mekanism:metallurgic_infusing/alloy/infused'})

		// THERMAL DYNAMOS
		event.remove({id: 'thermal:dynamo_stirling' })
		event.remove({id: 'thermal:dynamo_compression' })
		event.remove({id: 'thermal:dynamo_magmatic' })
		event.remove({id: 'thermal:dynamo_numismatic' })
		event.remove({id: 'thermal:dynamo_gourmand' })
		event.remove({id: 'thermal:dynamo_lapidary' })
		event.remove({id: 'thermal:dynamo_disenchantment' })

		// THERMAL MACHINES
		event.remove({id: 'thermal:machine_smelter' })
		event.remove({id: 'thermal:machine_furnace' })
		event.remove({id: 'thermal:machine_sawmill' })
		event.remove({id: 'thermal:machine_pulverizer' })
		event.remove({id: 'thermal:machine_smelter' })
		event.remove({id: 'thermal:machine_insolator'})
		event.remove({id: 'thermal:machine_centrifuge'})
		event.remove({id: 'thermal:machine_press'})
		event.remove({id: 'thermal:machine_crucible'})
		event.remove({id: 'thermal:machine_chiller'})
		event.remove({id: 'thermal:machine_refinery'})
		event.remove({id: 'thermal:machine_pyrolyzer'})
		event.remove({id: 'thermal:machine_bottler'})
		event.remove({id: 'thermal:machine_brewer'})
		event.remove({id: 'thermal:machine_crystallizer'})
		event.remove({id: 'thermal:machine_crafter'})

		// THERMAL DEVICES
		event.remove({id: 'thermal:device_tree_extractor' })
		event.remove({id: 'thermal:device_fisher' })
		event.remove({id: 'thermal:device_composter' })
		event.remove({id: 'thermal:device_water_gen' })
		event.remove({id: 'thermal:device_rock_gen' })
		event.remove({id: 'thermal:device_collector' })
		event.remove({id: 'thermal:device_xp_condenser' })
		event.remove({id: 'thermal:device_nullifier' })
		event.remove({id: 'thermal:device_potion_diffuser' })
		event.remove({id: 'thermal:tinker_bench' })

		// AD ASTRA ITEMS
		event.remove({id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals'})
		event.remove({id: 'ad_astra:photovoltaic_etrium_cell'})

		// AD ASTRA MACHINES
		event.remove({id: 'ad_astra:etrionic_blast_furnace'})
		event.remove({id: 'ad_astra:oxygen_loader'})
		event.remove({id: 'ad_astra:fuel_refinery'})
		event.remove({id: 'ad_astra:compressor'})
		event.remove({id: 'ad_astra:water_pump'})
		event.remove({id: 'ad_astra:oxygen_distributor'})
		event.remove({id: 'ad_astra_giselle_addon:crafting/fuel_loader'})
		event.remove({id: 'ad_astra_giselle_addon:crafting/rocket_sensor'})
		event.remove({id: 'ad_astra:cryo_freezer'})
		event.remove({id: 'ad_astra:oxygen_sensor'})
		event.remove({id: 'ad_astra:nasa_workbench'})

		// AD ASTRA GENERATORS
		event.remove({id: 'ad_astra:solar_panel'})
		event.remove({id: 'ad_astra:coal_generator'})

		// AD ASTRA MOUNTS
		event.remove({id: 'ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench'})
		event.remove({id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench'})
		event.remove({id: 'ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench'})
		event.remove({id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench'})
		event.remove({id: 'ad_astra:tier_1_rover'})

		// AD ASTRA NETHERITE SPACE SUIT
		event.remove({id: 'ad_astra:netherite_space_helmet'})
		event.remove({id: 'ad_astra:netherite_space_suit'})
		event.remove({id: 'ad_astra:netherite_space_pants'})
		event.remove({id: 'ad_astra:netherite_space_boots'})
		
		// AD ASTRA SPACE SUIT
		event.remove({id: 'ad_astra:space_helmet'})
		event.remove({id: 'ad_astra:space_suit'})
		event.remove({id: 'ad_astra:space_pants'})
		event.remove({id: 'ad_astra:space_boots'})
		
})