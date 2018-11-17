
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function () {
      // Inserts seed entries
      return knex('collections').insert([
        {
          id: 1,
          user_id: 1,
          name: "All Collectible Cards",
          collection: `{"Elven Archer":2,"Goldshire Footman":2,"Grimscale Oracle":2,"Murloc Raider":2,"Stonetusk Boar":2,"Voodoo Doctor":2,"Acidic Swamp Ooze":2,"Bloodfen Raptor":2,"Bluegill Warrior":2,"Frostwolf Grunt":2,"Kobold Geomancer":2,"Murloc Tidehunter":2,"Novice Engineer":2,"River Crocolisk":2,"Dalaran Mage":2,"Ironforge Rifleman":2,"Ironfur Grizzly":2,"Magma Rager":2,"Raid Leader":2,"Razorfen Hunter":2,"Shattered Sun Cleric":2,"Silverback Patriarch":2,"Wolfrider":2,"Chillwind Yeti":2,"Dragonling Mechanic":2,"Gnomish Inventor":2,"Oasis Snapjaw":2,"Ogre Magi":2,"Sen'jin Shieldmasta":2,"Stormwind Knight":2,"Booty Bay Bodyguard":2,"Darkscale Healer":2,"Frostwolf Warlord":2,"Gurubashi Berserker":2,"Nightblade":2,"Stormpike Commando":2,"Archmage":2,"Boulderfist Ogre":2,"Lord of the Arena":2,"Reckless Rocketeer":2,"Core Hound":2,"Stormwind Champion":2,"War Golem":2,"Murloc Tinyfin":2,"Snowflipper Penguin":2,"Wisp":2,"Abusive Sergeant":2,"Acherus Veteran":2,"Arcane Anomaly":2,"Argent Squire":2,"Clockwork Gnome":2,"Cogmaster":2,"Deadscale Knight":2,"Dire Mole":2,"Emerald Reaver":2,"Faithful Lumi":2,"Fire Fly":2,"Gadgetzan Jouster":2,"Glacial Shard":2,"Goblin Bomb":2,"Leper Gnome":2,"Lowly Squire":2,"Mecharoo":2,"Mistress of Mixtures":2,"Runic Egg":2,"Shieldbearer":2,"Skaterbot":2,"Southsea Deckhand":2,"Swamp Dragon Egg":2,"Swamp Leech":2,"Tentacle of N'Zoth":2,"Tournament Attendee":2,"Undertaker":2,"Wax Elemental":2,"Worgen Infiltrator":2,"Wretched Tiller":2,"Young Dragonhawk":2,"Zealous Initiate":2,"Zombie Chow":2,"Amani Berserker":2,"Annoy-o-Tron":2,"Beckoner of Evil":2,"Bilefin Tidehunter":2,"Bloodsail Raider":2,"Blowgill Sniper":2,"Boneguard Lieutenant":2,"Cloakscale Chemist":2,"Dire Wolf Alpha":2,"Duskboar":2,"Explosive Sheep":2,"Faerie Dragon":2,"Fallen Sun Cleric":2,"Flame Juggler":2,"Friendly Bartender":2,"Gadgetzan Socialite":2,"Gilblin Stalker":2,"Haunted Creeper":2,"Huge Toad":2,"Jeweled Scarab":2,"Lance Carrier":2,"Loot Hoarder":2,"Lost Spirit":2,"Mad Bomber":2,"Mad Scientist":2,"Mechwarper":2,"Micro Machine":2,"Nerub'ar Weblord":2,"Netherspite Historian":2,"Plated Beetle":2,"Pompous Thespian":2,"Puddlestomper":2,"Ravasaur Runt":2,"Rockpool Hunter":2,"Ship's Cannon":2,"Spellshifter":2,"Stonesplinter Trogg":2,"Stubborn Gastropod":2,"Tainted Zealot":2,"Toxicologist":2,"Tuskarr Fisherman":2,"Twilight Geomancer":2,"Twisted Worgen":2,"Unstable Ghoul":2,"Upgradeable Framebot":2,"Vicious Scalehide":2,"Volatile Elemental":2,"Whirliglider":2,"Youthful Brewmaster":2,"Acolyte of Pain":2,"Am'gam Rager":2,"Argent Horserider":2,"Backstreet Leper":2,"Blackwald Pixie":2,"Blackwing Technician":2,"Boisterous Bard":2,"Brainstormer":2,"Bronze Gatekeeper":2,"Dancing Swords":2,"Deathspeaker":2,"Dragonhawk Rider":2,"Dragonslayer":2,"Earthen Ring Farseer":2,"Eggnapper":2,"Electrowright":2,"Flesheating Ghoul":2,"Flying Machine":2,"Fungal Enchanter":2,"Giant Wasp":2,"Gnomeregan Infantry":2,"Grimestreet Smuggler":2,"Harvest Golem":2,"Hench-Clan Thug":2,"Hired Gun":2,"Hyldnir Frostrider":2,"Ice Rager":2,"Igneous Elemental":2,"Ironbeak Owl":2,"Jungle Panther":2,"Kaboom Bot":2,"Kobold Apprentice":2,"Marsh Drake":2,"Microtech Controller":2,"Ogre Brute":2,"Pantry Spider":2,"Primalfin Lookout":2,"Pterrordax Hatchling":2,"Pumpkin Peasant":2,"Raging Worgen":2,"Ravencaller":2,"Scarlet Crusader":2,"Sewer Crawler":2,"Silent Knight":2,"Silver Hand Regent":2,"Spawn of N'Zoth":2,"Spider Tank":2,"Spring Rocket":2,"Squirming Tentacle":2,"Stoneskin Basilisk":2,"Stoneskin Gargoyle":2,"Street Trickster":2,"Tanglefur Mystic":2,"Tar Creeper":2,"Tauren Warrior":2,"Thrallmar Farseer":2,"Thunder Lizard":2,"Tinkertown Technician":2,"Toothy Chest":2,"Toxic Sewer Ooze":2,"Twilight Elder":2,"Violet Illusionist":2,"Vryghoul":2,"Walnut Sprite":2,"Zoobot":2,"Aberrant Berserker":2,"Ancient Brewmaster":2,"Arcanosmith":2,"Burly Rockjaw Trogg":2,"C'Thun's Chosen":2,"Coppertail Imposter":2,"Cult Master":2,"Cursed Disciple":2,"Daring Reporter":2,"Dark Iron Dwarf":2,"Dragonkin Sorcerer":2,"Dread Corsair":2,"Evil Heckler":2,"Evolved Kobold":2,"Explodinator":2,"Felsoul Inquisitor":2,"Fire Plume Phoenix":2,"Frigid Snobold":2,"Gorillabot A-3":2,"Grave Shambler":2,"Grim Necromancer":2,"Hoarding Dragon":2,"Hozen Healer":2,"Hungry Dragon":2,"Infested Tauren":2,"Jade Spirit":2,"Kabal Chemist":2,"Kooky Chemist":2,"Lost Tallstrider":2,"Maiden of the Lake":2,"Mechanical Yeti":2,"Mogu'shan Warden":2,"Naga Corsair":2,"Night Howler":2,"Piloted Reaper":2,"Piloted Shredder":2,"Polluted Hoarder":2,"Refreshment Vendor":2,"Shroom Brewer":2,"Silvermoon Guardian":2,"Sneaky Devil":2,"Spellbreaker":2,"Steel Rager":2,"Stegodon":2,"Swift Messenger":2,"Tanaris Hogchopper":2,"Tomb Spider":2,"Tournament Medic":2,"Unpowered Steambot":2,"Wicked Skeleton":2,"Worgen Greaser":2,"Antique Healbot":2,"Anubisath Sentinel":2,"Blackwing Corruptor":2,"Bloodworm":2,"Clockwork Automaton":2,"Clockwork Knight":2,"Cobalt Scalebane":2,"Corrosive Sludge":2,"Cult Apothecary":2,"Fen Creeper":2,"Fungalmancer":2,"Green Jelly":2,"Grook Fu Master":2,"Guild Recruiter":2,"Kvaldir Raider":2,"Menagerie Magician":2,"Mukla's Champion":2,"Nesting Roc":2,"Pit Fighter":2,"Psych-o-Tron":2,"Red Mana Wyrm":2,"Rotten Applebaum":2,"Rusty Recycler":2,"Salty Dog":2,"Silver Hand Knight":2,"Skelemancer":2,"Spectral Knight":2,"Spiteful Smith":2,"Stranglethorn Tiger":2,"Streetwise Investigator":2,"Sunborne Val'kyr":2,"Trogg Gloomeater":2,"Venomancer":2,"Venture Co. Mercenary":2,"Wargear":2,"Ancient of Blossoms":2,"Big-Time Racketeer":2,"Damaged Stegotron":2,"Drakonid Crusher":2,"Frost Elemental":2,"Necrotic Geist":2,"Nerubian Prophet":2,"Priestess of Elune":2,"Sabretooth Stalker":2,"Spellweaver":2,"Volcanic Drake":2,"Windfury Harpy":2,"Bog Creeper":2,"Captured Jormungar":2,"Darkmire Moonkin":2,"Furious Ettin":2,"Grotesque Dragonhawk":2,"Sated Threshadon":2,"Silver Vanguard":2,"Stormwatcher":2,"Wyrmguard":2,"Bonemare":2,"Cauldron Elemental":2,"Deranged Doctor":2,"Eldritch Horror":2,"Force-Tank MAX":2,"Fossilized Devilsaur":2,"Violet Wurm":2,"Bull Dozer":2,"Giant Mastodon":2,"North Sea Kraken":2,"Sleepy Dragon":2,"Faceless Behemoth":2,"Ultrasaur":2,"Target Dummy":2,"Angry Chicken":2,"Bloodsail Corsair":2,"Dragon Egg":2,"Feral Gibberer":2,"Gravelsnout Knight":2,"Injured Kvaldir":2,"Lightwarden":2,"Murloc Tidecaller":2,"Secretkeeper":2,"Small-Time Buccaneer":2,"Young Priestess":2,"Ancient Watcher":2,"Argent Watchman":2,"Crazed Alchemist":2,"Galvanizer":2,"Golakka Crawler":2,"Grimestreet Informant":2,"Knife Juggler":2,"Mana Addict":2,"Mana Wraith":2,"Master Swordsmith":2,"Nerubian Egg":2,"Pint-Sized Summoner":2,"Scorp-o-matic":2,"Spark Engine":2,"Sunfury Protector":2,"Unpowered Mauler":2,"Wild Pyromancer":2,"Alarm-o-Bot":2,"Arcane Golem":2,"Coldlight Oracle":2,"Coldlight Seer":2,"Coliseum Manager":2,"Deathlord":2,"Demolisher":2,"Devilsaur Egg":2,"Disciple of C'Thun":2,"Emperor Cobra":2,"Fencing Coach":2,"Gnomish Experimenter":2,"Goblin Sapper":2,"Happy Ghoul":2,"Humongous Razorleaf":2,"Illuminator":2,"Imp Master":2,"Injured Blademaster":2,"Kabal Courier":2,"Light's Champion":2,"Lil' Exorcist":2,"Lone Champion":2,"Mind Control Tech":2,"Mindbreaker":2,"Phantom Militia":2,"Questing Adventurer":2,"Saboteur":2,"Shallow Gravedigger":2,"Shrieking Shroom":2,"Silithid Swarmer":2,"Stonehill Defender":2,"Vicious Fledgling":2,"Ancient Mage":2,"Ancient Shade":2,"Arcane Nullifier X-21":2,"Armored Warhorse":2,"Backroom Bouncer":2,"Blackwater Pirate":2,"Defender of Argus":2,"Eater of Secrets":2,"Ebon Dragonsmith":2,"Eerie Statue":2,"Jeeves":2,"Keening Banshee":2,"Kezan Mystic":2,"Kobold Monk":2,"Lifedrinker":2,"Mad Hatter":2,"Midnight Drake":2,"Night Prowler":2,"Phantom Freebooter":2,"Replicating Menace":2,"Saronite Chain Gang":2,"Scaleworm":2,"Ticking Abomination":2,"Tol'vir Stoneshaper":2,"Twilight Drake":2,"Violet Teacher":2,"Wailing Soul":2,"Witchwood Piper":2,"Abomination":2,"Avian Watcher":2,"Azure Drake":2,"Bomb Lobber":2,"Bomb Squad":2,"Chief Inspector":2,"Corpse Raiser":2,"Corrupted Healbot":2,"Doppelgangster":2,"Furbolg Mossbinder":2,"Grim Patron":2,"Lotus Agents":2,"Madder Bomber":2,"Second-Rate Bruiser":2,"Servant of Kalimos":2,"Sludge Belcher":2,"Spiked Hogrider":2,"Stampeding Kodo":2,"Summoning Stone":2,"Witchwood Grizzly":2,"Arcane Dynamo":2,"Argent Commander":2,"Bone Drake":2,"Book Wyrm":2,"Corrupted Seer":2,"Frozen Crusher":2,"Gadgetzan Auctioneer":2,"Hungry Ettin":2,"Master Jouster":2,"Mechanical Whelp":2,"Missile Launcher":2,"Moat Lurker":2,"Mogor's Champion":2,"Skeram Cultist":2,"Spark Drill":2,"Sunwalker":2,"Wobbling Runts":2,"Giggling Inventor":2,"Ravenholdt Assassin":2,"Volcanosaur":2,"Doomcaller":2,"Gilnean Royal Guard":2,"Crystallizer":2,"Emerald Hive Queen":2,"Hungry Crab":2,"Weasel Tunneler":2,"Baleful Banker":2,"Captain's Parrot":2,"Dirty Rat":2,"Doomsayer":2,"Echoing Ooze":2,"Garrison Commander":2,"Recombobulator":2,"Augmented Elekk":2,"Blood Knight":2,"Blubber Baron":2,"Drakkari Enchanter":2,"Fel Orc Soulfiend":2,"Gluttonous Ooze":2,"Hobgoblin":2,"Master of Ceremonies":2,"Murloc Warleader":2,"Nightmare Amalgam":2,"Rummaging Kobold":2,"Shade of Naxxramas":2,"Southsea Captain":2,"Void Ripper":2,"Voodoo Doll":2,"Witch's Cauldron":2,"Bright-Eyed Scout":2,"Corpsetaker":2,"Crowd Favorite":2,"Cyclopian Horror":2,"Deathaxe Punisher":2,"Enhance-o Mechano":2,"Faceless Shambler":2,"Gentle Megasaur":2,"Meat Wagon":2,"Mini-Mage":2,"Omega Defender":2,"Rattling Rascal":2,"Sandbinder":2,"Shimmering Courser":2,"Twilight Guardian":2,"Twilight Summoner":2,"Weaponized Piñata":2,"Arcane Tyrant":2,"Big Game Hunter":2,"Bittertide Hydra":2,"Burgly Bully":2,"Carnivorous Cube":2,"Crazed Worshipper":2,"Darkspeaker":2,"Djinni of Zephyrs":2,"E.M.P. Operative":2,"Faceless Manipulator":2,"Fel Reaver":2,"Holomancer":2,"Junkbot":2,"Loose Specimen":2,"Muck Hunter":2,"Recruiter":2,"Seaforium Bomber":2,"Tomb Lurker":2,"Validated Doomsayer":2,"Ancient Harbinger":2,"Defias Cleaner":2,"Fight Promoter":2,"Furnacefire Colossus":2,"Grand Crusader":2,"Kodorider":2,"Leatherclad Hogleader":2,"Mossy Horror":2,"Nerubian Unraveler":2,"Piloted Sky Golem":2,"Scaled Nightmare":2,"Sideshow Spelleater":2,"Skulking Geist":2,"Wind-up Burglebot":2,"Blazecaller":2,"Corridor Creeper":2,"Spiteful Summoner":2,"Star Aligner":2,"Worgen Abomination":2,"Charged Devilsaur":2,"Grand Archivist":2,"Naga Sea Witch":2,"Primordial Drake":2,"Splitting Festeroot":2,"Tortollan Primalist":2,"Blood of The Ancient One":2,"Dragonhatcher":2,"Frost Giant":2,"Sea Giant":2,"Arcane Giant":2,"Clockwork Giant":2,"Mountain Giant":2,"Molten Giant":2,"Patches the Pirate":1,"Shifter Zerus":1,"Sir Finley Mrrgglton":1,"Bloodmage Thalnos":1,"Lorewalker Cho":1,"Millhouse Manastorm":1,"Nat Pagle":1,"Nat, the Darkfisher":1,"Prince Keleseth":1,"Auctionmaster Beardo":1,"Brann Bronzebeard":1,"Eydis Darkbane":1,"Fjola Lightbane":1,"King Mukla":1,"Moroes":1,"Prince Taldaram":1,"Sergeant Sally":1,"Tinkmaster Overspark":1,"Zola the Gorgon":1,"Arfus":1,"Barnes":1,"Baron Rivendare":1,"Elise Starseeker":1,"Genzo, the Shark":1,"Gormok the Impaler":1,"Harbinger Celestia":1,"Kazakus":1,"Old Murk-Eye":1,"Prince Valanar":1,"Spiritsinger Umbra":1,"The Darkness":1,"The Voraxx":1,"Whizbang the Wonderful":1,"Blingtron 3000":1,"Captain Greenskin":1,"Dollmaster Dorian":1,"Elise the Trailblazer":1,"Elite Tauren Chieftain":1,"Feugen":1,"Finja, the Flying Star":1,"Harrison Jones":1,"Hemet Nesingwary":1,"Leeroy Jenkins":1,"Loatheb":1,"Mimiron's Head":1,"Nexus-Champion Saraad":1,"Prince Malchezaar":1,"Stalagg":1,"Subject 9":1,"Zilliax":1,"Aya Blackpaw":1,"Bolf Ramshield":1,"Cairne Bloodhoof":1,"Emperor Thaurissan":1,"Gazlowe":1,"Gelbin Mekkatorque":1,"Genn Greymane":1,"Hemet, Jungle Hunter":1,"Hogger":1,"Illidan Stormrage":1,"Justicar Trueheart":1,"Madam Goya":1,"Maexxna":1,"Mogor the Ogre":1,"Mukla, Tyrant of the Vale":1,"Reno Jackson":1,"Sylvanas Windrunner":1,"The Beast":1,"The Black Knight":1,"The Skeleton Knight":1,"Toshley":1,"Wrathion":1,"Azalina Soulthief":1,"Baron Geddon":1,"Chillmaw":1,"Countess Ashmore":1,"Don Han'Cho":1,"Dr. Boom":1,"Hogger, Doom of Elwynn":1,"Rend Blackhand":1,"Skycap'n Kragg":1,"The Curator":1,"Troggzor the Earthinator":1,"Twin Emperor Vek'lor":1,"Chromaggus":1,"Foe Reaper 4000":1,"Gruul":1,"Kel'Thuzad":1,"King Togwaggle":1,"Marin the Fox":1,"Medivh, the Guardian":1,"Ragnaros the Firelord":1,"Sneed's Old Shredder":1,"The Boogeymonster":1,"The Lich King":1,"Alexstrasza":1,"Arch-Thief Rafaam":1,"Baku the Mooneater":1,"Icehowl":1,"Majordomo Executus":1,"Malygos":1,"Master Oakheart":1,"Mayor Noggenfogger":1,"Mekgineer Thermaplugg":1,"Nefarian":1,"Nozdormu":1,"Onyxia":1,"Ozruk":1,"Soggoth the Slitherer":1,"Ysera":1,"C'Thun":1,"Deathwing":1,"Deathwing, Dragonlord":1,"Mecha'thun":1,"N'Zoth, the Corruptor":1,"Y'Shaarj, Rage Unbound":1,"Yogg-Saron, Hope's End":1,"Innervate":2,"Moonfire":2,"Claw":2,"Mark of the Wild":2,"Wild Growth":2,"Healing Touch":2,"Savage Roar":2,"Swipe":2,"Starfire":2,"Ironbark Protector":2,"Barkskin":2,"Biology Project":2,"Enchanted Raven":2,"Living Roots":2,"Mark of the Lotus":2,"Naturalize":2,"Raven Idol":2,"Anodized Robo Cub":2,"Druid of the Saber":2,"Mark of Y'Shaarj":2,"Power of the Wild":2,"Tortollan Forager":2,"Witchwood Apple":2,"Wrath":2,"Crypt Lord":2,"Druid of the Flame":2,"Druid of the Scythe":2,"Elder Longneck":2,"Feral Rage":2,"Ferocious Howl":2,"Gnash":2,"Jade Blossom":2,"Landscaping":2,"Mark of Nature":2,"Mounted Raptor":2,"Ironwood Golem":2,"Oaken Summons":2,"Poison Seeds":2,"Soul of the Forest":2,"Wildwalker":2,"Druid of the Claw":2,"Druid of the Fang":2,"Verdant Longneck":2,"Webweave":2,"Dark Arakkoa":2,"Jade Behemoth":2,"Menagerie Warden":2,"Gloop Sprayer":2,"Earthen Scales":2,"Jade Idol":2,"Lesser Jasper Spellstone":2,"Savagery":2,"Darnassus Aspirant":2,"Dendrologist":2,"Druid of the Swarm":2,"Addled Grizzly":2,"Celestial Dreamer":2,"Greedy Sprite":2,"Grove Tender":2,"Witching Hour":2,"Bite":2,"Evolving Spores":2,"Forest Guide":2,"Jungle Moonkin":2,"Keeper of the Grove":2,"Klaxxi Amber-Weaver":2,"Mire Keeper":2,"Savage Combatant":2,"Shellshifter":2,"Strongshell Scavenger":2,"Bewitched Guardian":2,"Nourish":2,"Starfall":2,"Virmen Sensei":2,"Mech-Bear-Cat":2,"Moonglade Portal":2,"Recycle":2,"Spreading Plague":2,"Tending Tauren":2,"Knight of the Wild":2,"Grizzled Guardian":2,"Volcanic Lumberer":2,"Mulchmuncher":2,"Forbidden Ancient":2,"Mulch":2,"Pilfered Power":2,"Astral Communion":2,"Astral Tiger":2,"Branching Paths":2,"Juicy Psychmelon":2,"Wispering Woods":2,"Fatespinner":2,"Force of Nature":2,"Gloom Stag":2,"Living Mana":2,"Lunar Visions":2,"Dark Wispers":2,"Ancient of Lore":2,"Ancient of War":2,"Dreampetal Florist":2,"Giant Anaconda":2,"Wisps of the Old Gods":2,"Tree of Life":2,"Ultimate Infestation":2,"Floop's Glorious Gloop":1,"Jungle Giants":1,"Fandral Staghelm":1,"Flobbidinous Floop":1,"Twig of the World Tree":1,"Duskfallen Aviana":1,"Ixlid, Fungal Lord":1,"Malfurion the Pestilent":1,"Malorne":1,"Splintergraft":1,"Cenarius":1,"Hadronox":1,"Aviana":1,"Kun the Forgotten King":1,"Tyrantus":1,"Arcane Shot":2,"Hunter's Mark":2,"Timber Wolf":2,"Tracking":2,"Animal Companion":2,"Kill Command":2,"Houndmaster":2,"Multi-Shot":2,"Starving Buzzard":2,"Tundra Rhino":2,"Alleycat":2,"Brave Archer":2,"Candleshot":2,"Fiery Bat":2,"Jeweled Macaw":2,"On the Hunt":2,"Play Dead":2,"Secret Plan":2,"Smuggler's Crate":2,"Webspinner":2,"Bear Trap":2,"Bomb Toss":2,"Crackling Razormaw":2,"Dart Trap":2,"Explosive Trap":2,"Freezing Trap":2,"Glaivezooka":2,"Grievous Bite":2,"Hunting Mastiff":2,"Kindly Grandmother":2,"King's Elekk":2,"Quick Shot":2,"Scavenging Hyena":2,"Snipe":2,"Venomizer":2,"Bearshark":2,"Carrion Grub":2,"Cave Hydra":2,"Cloaked Huntress":2,"Deadly Shot":2,"Desert Camel":2,"Shaky Zipgunner":2,"Stitched Tracker":2,"Unleash the Hounds":2,"Dire Frenzy":2,"Flanking Strike":2,"Cobra Shot":2,"Vilebrood Skitterer":2,"Raptor Hatchling":2,"Call Pet":2,"Cat Trick":2,"Cybertech Chip":2,"Explorer's Hat":2,"Fireworks Tech":2,"Flare":2,"Hidden Cache":2,"Misdirection":2,"Trogg Beastrager":2,"Venomstrike Trap":2,"Wandering Monster":2,"Duskhaven Hunter":2,"Eaglehorn Bow":2,"Forlorn Stalker":2,"Infest":2,"Metaltooth Leaper":2,"Powershot":2,"Spider Bomb":2,"Terrorscale Stalker":2,"Core Rager":2,"Dispatch Kodo":2,"Exploding Bloatbat":2,"Infested Wolf":2,"Wing Blast":2,"Carrion Drake":2,"Corpse Widow":2,"Explosive Shot":2,"King of Beasts":2,"Lesser Emerald Spellstone":2,"Ram Wrangler":2,"Tol'vir Warden":2,"Ball of Spiders":2,"Savannah Highmane":2,"Seeping Oozeling":2,"Bestial Wrath":2,"Stampede":2,"Dinomancy":2,"Feign Death":2,"Goblin Prank":2,"Lock and Load":2,"Rat Trap":2,"Snake Trap":2,"Steamwheedle Sniper":2,"Toxic Arrow":2,"Rat Pack":2,"Stablemaster":2,"Toxmonger":2,"Necromechanic":2,"Piranha Launcher":2,"To My Side!":2,"Abominable Bowman":2,"Crushing Walls":2,"Gladiator's Longbow":2,"Giant Sand Worm":2,"Call of the Wild":2,"The Marsh Queen":1,"Dreadscale":1,"Houndmaster Shaw":1,"Professor Putricide":1,"Knuckles":1,"Princess Huhuran":1,"Deathstalker Rexxar":1,"Acidmaw":1,"Boommaster Flark":1,"Gahz'rilla":1,"Rhok'delar":1,"Swamp King Dred":1,"Flark's Boom-Zooka":1,"Kathrena Winterwisp":1,"King Krush":1,"Emeriss":1,"Arcane Missiles":2,"Mirror Image":2,"Arcane Explosion":2,"Frostbolt":2,"Arcane Intellect":2,"Frost Nova":2,"Fireball":2,"Polymorph":2,"Water Elemental":2,"Flamestrike":2,"Freezing Potion":2,"Shifting Scroll":2,"Arcane Artificer":2,"Breath of Sindragosa":2,"Ice Lance":2,"Kabal Lackey":2,"Shooting Star":2,"Tome of Intellect":2,"Arcanologist":2,"Flame Geyser":2,"Flamecannon":2,"Mana Wyrm":2,"Medivh's Valet":2,"Raven Familiar":2,"Research Project":2,"Shatter":2,"Shimmering Tempest":2,"Snap Freeze":2,"Snowchugger":2,"Sorcerer's Apprentice":2,"Black Cat":2,"Coldwraith":2,"Duplicate":2,"Forgotten Torch":2,"Frozen Clone":2,"Ice Barrier":2,"Mirror Entity":2,"Spellslinger":2,"Twilight Flamecaller":2,"Cone of Cold":2,"Cosmic Anomaly":2,"Dalaran Aspirant":2,"Vex Crow":2,"Cryomancer":2,"Dragon's Breath":2,"Ethereal Conjurer":2,"Flame Lance":2,"Faceless Summoner":2,"Firelands Portal":2,"Babbling Book":2,"Astral Rift":2,"Celestial Emissary":2,"Cult Sorcerer":2,"Fallen Hero":2,"Ice Walker":2,"Lesser Ruby Spellstone":2,"Unstable Portal":2,"Cinderstorm":2,"Counterspell":2,"Doomed Apprentice":2,"Effigy":2,"Explosive Runes":2,"Flamewaker":2,"Kirin Tor Mage":2,"Mana Bind":2,"Polymorph: Boar":2,"Potion of Polymorph":2,"Soot Spewer":2,"Vaporize":2,"Volcanic Potion":2,"Animated Armor":2,"Demented Frostcaller":2,"Ethereal Arcanist":2,"Ghastly Conjurer":2,"Goblin Blastmage":2,"Leyline Manipulator":2,"Molten Reflection":2,"Steam Surger":2,"Bonfire Elemental":2,"Curio Collector":2,"Servant of Yogg-Saron":2,"Blizzard":2,"Kabal Crystal Runner":2,"Meteorologist":2,"Forbidden Flame":2,"Arcane Blast":2,"Book of Specters":2,"Icicle":2,"Primordial Glyph":2,"Ice Block":2,"Manic Soulcaster":2,"Simulacrum":2,"Spellbender":2,"Arcane Keysmith":2,"Echo of Medivh":2,"Unexpected Results":2,"Wee Spellstopper":2,"Cabalist's Tome":2,"Deck of Wonders":2,"Dragon's Fury":2,"Coldarra Drake":2,"Meteor":2,"Astromancer":2,"Greater Arcane Missiles":2,"Glacial Mysteries":2,"Pyroblast":2,"Open the Waygate":1,"Archmage Arugal":1,"Pyros":1,"Stargazer Luna":1,"Aluneth":1,"Toki, Time-Tinker":1,"Archmage Antonidas":1,"Flame Leviathan":1,"Inkmaster Solia":1,"Luna's Pocket Galaxy":1,"Anomalus":1,"Rhonin":1,"Sindragosa":1,"Dragoncaller Alanna":1,"Frost Lich Jaina":1,"Blessing of Might":2,"Hand of Protection":2,"Humility":2,"Light's Justice":2,"Holy Light":2,"Blessing of Kings":2,"Consecration":2,"Hammer of Wrath":2,"Truesilver Champion":2,"Guardian of Kings":2,"Adaptation":2,"Autodefense Matrix":2,"Avenge":2,"Blessing of Wisdom":2,"Divine Strength":2,"Eye for an Eye":2,"Glow-Tron":2,"Grimscale Chum":2,"Lost in the Jungle":2,"Noble Sacrifice":2,"Redemption":2,"Repentance":2,"Righteous Protector":2,"Sacred Trial":2,"Smuggler's Run":2,"A Light in the Darkness":2,"Argent Protector":2,"Dark Conviction":2,"Drygulch Jailor":2,"Grimestreet Outfitter":2,"Hydrologist":2,"Potion of Heroism":2,"Rebuke":2,"Seal of Light":2,"Shielded Minibot":2,"Sound the Bells!":2,"Benevolent Djinn":2,"Nightbane Templar":2,"Seal of Champions":2,"Warhorse Trainer":2,"Chillblade Champion":2,"Keeper of Uldaman":2,"Murloc Knight":2,"Silvermoon Portal":2,"Ghostly Charger":2,"Mechano-Egg":2,"Solemn Vigil":2,"Stand Against Darkness":2,"Competitive Spirit":2,"Getaway Kodo":2,"Selfless Hero":2,"Argent Lance":2,"Crystology":2,"Desperate Stand":2,"Equality":2,"Lesser Pearl Spellstone":2,"Aldor Peacekeeper":2,"Divine Favor":2,"Howling Commander":2,"Muster for Battle":2,"Paragon of Light":2,"Rallying Blade":2,"Scarlet Purifier":2,"Steward of Darkshire":2,"Unidentified Maul":2,"Annoy-o-Module":2,"Arrogant Crusader":2,"Bellringer Sentry":2,"Lightfused Stegodon":2,"Blessed Champion":2,"Cobalt Guardian":2,"Dragon Consort":2,"Grimestreet Enforcer":2,"Holy Wrath":2,"Shrink Ray":2,"Tuskarr Jouster":2,"Crystal Lion":2,"Ivory Knight":2,"Spikeridged Steed":2,"Grimestreet Protector":2,"Vinecleaver":2,"Silver Sword":2,"Anyfin Can Happen":2,"Forbidden Healing":2,"Hidden Wisdom":2,"Meanstreet Marshal":2,"Vilefin Inquisitor":2,"Cathedral Gargoyle":2,"Primalfin Champion":2,"Coghammer":2,"Small-Time Recruits":2,"Sword of Justice":2,"Light's Sorrow":2,"Prismatic Lens":2,"Call to Arms":2,"Level Up!":2,"Quartermaster":2,"Avenging Wrath":2,"Blackguard":2,"Enter the Coliseum":2,"Glowstone Technician":2,"Mysterious Challenger":2,"Dinosize":2,"Lay on Hands":2,"The Last Kaleidosaur":1,"Crystalsmith Kangor":1,"Wickerflame Burnbristle":1,"The Glass Knight":1,"Bolvar Fordragon":1,"Bolvar, Fireblood":1,"Prince Liam":1,"Sunkeeper Tarim":1,"Val'anyr":1,"Eadric the Pure":1,"Kangor's Endless Army":1,"Lynessa Sunsorrow":1,"Ragnaros, Lightlord":1,"Tirion Fordring":1,"Uther of the Ebon Blade":1,"Holy Smite":2,"Mind Vision":2,"Northshire Cleric":2,"Power Word: Shield":2,"Divine Spirit":2,"Mind Blast":2,"Shadow Word: Pain":2,"Shadow Word: Death":2,"Holy Nova":2,"Mind Control":2,"Circle of Healing":2,"Silence":2,"Topsy Turvy":2,"Binding Heal":2,"Flash Heal":2,"Inner Fire":2,"Potion of Madness":2,"Power Word: Glory":2,"Psionic Probe":2,"Twilight Whelp":2,"Cloning Device":2,"Dead Ringer":2,"Divine Hymn":2,"Museum Curator":2,"Purify":2,"Radiant Elemental":2,"Shadow Ascendant":2,"Shrinkmeister":2,"Spirit Lash":2,"Squashling":2,"Acolyte of Agony":2,"Dark Cultist":2,"Gilded Gargoyle":2,"Kabal Talonpriest":2,"Thoughtsteal":2,"Unidentified Elixir":2,"Velen's Chosen":2,"Holy Champion":2,"Hooded Acolyte":2,"Lightspawn":2,"Priest of the Feast":2,"Tortollan Shellraiser":2,"Darkshire Alchemist":2,"Kabal Songstealer":2,"Power Word: Tentacles":2,"Quartz Elemental":2,"Entomb":2,"Temple Enforcer":2,"Crystalline Oracle":2,"Light of the Naaru":2,"Pint-Size Potion":2,"Test Subject":2,"Convert":2,"Lightwell":2,"Resurrect":2,"Shadowboxer":2,"Wyrmrest Agent":2,"Extra Arms":2,"Mirage Caller":2,"Omega Medic":2,"Twilight's Call":2,"Auchenai Soulpriest":2,"Duskbreaker":2,"Eternal Servitude":2,"Greater Healing Potion":2,"Mass Dispel":2,"Shadow Madness":2,"Shadow Word: Horror":2,"Shifting Shade":2,"Spawn of Shadows":2,"Devour Mind":2,"Drakonid Operative":2,"Excavated Evil":2,"Holy Water":2,"Onyx Bishop":2,"Twilight Darkmender":2,"Upgraded Repair Bot":2,"Coffin Crasher":2,"Holy Fire":2,"Shadow Essence":2,"Lesser Diamond Spellstone":2,"Nightscale Matriarch":2,"Free From Amber":2,"Forbidden Shaping":2,"Shadowbomber":2,"Confuse":2,"Embrace the Shadow":2,"Mana Geode":2,"Shadow Visions":2,"Curious Glimmerroot":2,"Shadowfiend":2,"Shadowform":2,"Twilight Acolyte":2,"Vivid Nightmare":2,"Mindgames":2,"Glitter Moth":2,"Power Word: Replicate":2,"Reckless Experimenter":2,"Cabal Shadow Priest":2,"Dragonfire Potion":2,"Embrace Darkness":2,"Lightbomb":2,"Psychic Scream":2,"Obsidian Statue":2,"Awaken the Makers":1,"Chameleos":1,"Dragon Soul":1,"Lyra the Sunshard":1,"Raza the Chained":1,"Vol'jin":1,"Herald Volazj":1,"Lady in White":1,"Zerek, Master Cloner":1,"Archbishop Benedictus":1,"Confessor Paletress":1,"Prophet Velen":1,"Temporus":1,"Shadowreaper Anduin":1,"Zerek's Cloning Gallery":1,"Backstab":2,"Deadly Poison":2,"Sinister Strike":2,"Sap":2,"Shiv":2,"Fan of Knives":2,"Assassin's Blade":2,"Assassinate":2,"Vanish":2,"Sprint":2,"Shadowstep":2,"Bladed Cultist":2,"Buccaneer":2,"Cold Blood":2,"Conceal":2,"Hallucination":2,"Pilfer":2,"Pit Snake":2,"Swashburglar":2,"Betrayal":2,"Cavern Shinyfinder":2,"Cheap Shot":2,"Cheat Death":2,"Defias Ringleader":2,"Eviscerate":2,"Gang Up":2,"Goblin Auto-Barber":2,"Jade Shuriken":2,"Jade Swarmer":2,"Lab Recruiter":2,"Leeching Poison":2,"Razorpetal Lasher":2,"Razorpetal Volley":2,"Sudden Betrayal":2,"Undercity Valiant":2,"Blink Fox":2,"Cutthroat Buccaneer":2,"Deadly Fork":2,"Plague Scientist":2,"Shadow Rager":2,"Shadow Strike":2,"Violet Haze":2,"Anub'ar Ambusher":2,"Southsea Squidface":2,"Tinker's Sharpsword Oil":2,"Tomb Pillager":2,"Bone Baron":2,"Crazed Chemist":2,"Shado-Pan Rider":2,"Counterfeit Coin":2,"Journey Below":2,"Cutpurse":2,"Gadgetzan Ferryman":2,"One-eyed Cheat":2,"Pick Pocket":2,"Pogo-Hopper":2,"Roll the Bones":2,"Undercity Huckster":2,"Burgle":2,"Envenom Weapon":2,"Headcrack":2,"Iron Sensei":2,"Mimic Pod":2,"Necrium Blade":2,"Perdition's Blade":2,"Shadowblade":2,"Shady Dealer":2,"SI:7 Agent":2,"Unearthed Raptor":2,"Blade Flurry":2,"Blightnozzle Crawler":2,"Elven Minstrel":2,"Kobold Illusionist":2,"Master of Disguise":2,"Mistwraith":2,"Obsidian Shard":2,"Runeforge Haunter":2,"Shadow Sensei":2,"Dark Iron Skulker":2,"Ethereal Peddler":2,"Lesser Onyx Spellstone":2,"Ogre Ninja":2,"Cursed Castaway":2,"Thistle Tea":2,"Preparation":2,"Doomerang":2,"Biteweed":2,"Evasion":2,"Patient Assassin":2,"Beneath the Grounds":2,"Cogmaster's Wrench":2,"Academic Espionage":2,"Fal'dorei Strider":2,"Poisoned Blade":2,"Sabotage":2,"Spectral Cutlass":2,"WANTED!":2,"Lotus Assassin":2,"Necrium Vial":2,"Shadowcaster":2,"Vilespine Slayer":2,"Kidnapper":2,"Luckydo Buccaneer":2,"Spectral Pillager":2,"Blade of C'Thun":2,"Kingsbane":1,"The Caverns Below":1,"Edwin VanCleef":1,"Face Collector":1,"Shaku, the Collector":1,"Sonya Shadowdancer":1,"Lilian Voss":1,"Sherazin, Corpse Flower":1,"Xaril, Poisoned Mind":1,"Myra Rotspring":1,"Myra's Unstable Element":1,"Trade Prince Gallywix":1,"Tess Greymane":1,"Anub'arak":1,"Valeera the Hollow":1,"Ancestral Healing":2,"Totemic Might":2,"Frost Shock":2,"Flametongue Totem":2,"Rockbiter Weapon":2,"Windfury":2,"Hex":2,"Windspeaker":2,"Bloodlust":2,"Fire Elemental":2,"Beakered Lightning":2,"Zap!":2,"Air Elemental":2,"Dust Devil":2,"Earth Shock":2,"Forked Lightning":2,"Lightning Bolt":2,"Primal Fusion":2,"Tunnel Trogg":2,"Witch's Apprentice":2,"Ancestral Knowledge":2,"Brrrloc":2,"Crackle":2,"Crushing Hand":2,"Elementary Reaction":2,"Ghost Light Angler":2,"Ice Fishing":2,"Kobold Hermit":2,"Menacing Nimbus":2,"Reincarnate":2,"Spirit Claws":2,"Stormcrack":2,"Stormforged Axe":2,"Totem Golem":2,"Whirling Zap-o-matic":2,"Drakkari Defender":2,"Healing Rain":2,"Hot Spring Guardian":2,"Tuskarr Totemic":2,"Unbound Elemental":2,"Call in the Finishers":2,"Fireguard Destroyer":2,"Flamewreathed Faceless":2,"Jade Lightning":2,"Rumbling Elemental":2,"Tidal Surge":2,"Wicked Witchdoctor":2,"Jade Chieftain":2,"Blazing Invocation":2,"Evolve":2,"Voltaic Burst":2,"Ancestral Spirit":2,"Devolve":2,"Earthen Might":2,"Fire Plume Harbinger":2,"Jade Claws":2,"Lava Shock":2,"Maelstrom Portal":2,"Murkspark Eel":2,"Murmuring Elemental":2,"Primalfin Totem":2,"Vitality Totem":2,"Feral Spirit":2,"Healing Wave":2,"Ice Breaker":2,"Lava Burst":2,"Lightning Storm":2,"Mana Tide Totem":2,"Powermace":2,"Primal Talismans":2,"Avalanche":2,"Draenei Totemcarver":2,"Dunemaul Shaman":2,"Jinyu Waterspeaker":2,"Master of Evolution":2,"Storm Chaser":2,"Thunder Bluff Valiant":2,"Volcano":2,"Voodoo Hexxer":2,"Eureka!":2,"Thing from Below":2,"Everyfin is Awesome":2,"Lesser Sapphire Spellstone":2,"Finders Keepers":2,"Unstable Evolution":2,"Cryostasis":2,"Eternal Sentinel":2,"Omega Mind":2,"Elemental Destruction":2,"Far Sight":2,"Spirit Echo":2,"Ancestor's Call":2,"Charged Hammer":2,"Lotus Illusionist":2,"Siltfin Spiritwalker":2,"Thunderhead":2,"Totem Cruncher":2,"Doomhammer":2,"Earth Elemental":2,"Hammer of Twilight":2,"Windshear Stormcaller":2,"Bogshaper":2,"Stone Sentinel":2,"Snowfury Giant":2,"Unite the Murlocs":1,"Electra Stormsurge":1,"Hallazeal the Ascended":1,"Thrall, Deathseer":1,"White Eyes":1,"Grumble, Worldshaker":1,"Moorabi":1,"The Mistcaller":1,"Neptulon":1,"The Storm Bringer":1,"Al'Akir the Windlord":1,"Hagatha the Witch":1,"Kalimos, Primal Lord":1,"The Runespear":1,"Shudderwock":1,"Sacrificial Pact":2,"Corruption":2,"Mortal Coil":2,"Soulfire":2,"Voidwalker":2,"Succubus":2,"Drain Life":2,"Shadow Bolt":2,"Hellfire":2,"Dread Infernal":2,"Blood Imp":2,"Call of the Void":2,"Dark Pact":2,"Flame Imp":2,"Kobold Librarian":2,"Malchezaar's Imp":2,"Possessed Villager":2,"Power Overwhelming":2,"Sanguine Reveler":2,"Witchwood Imp":2,"Curse of Rafaam":2,"Dark Peddler":2,"Darkbomb":2,"Demonfire":2,"Demonfuse":2,"Demonic Project":2,"Drain Soul":2,"Spirit Bomb":2,"Vulgar Homunculus":2,"Wrathguard":2,"Darkshire Councilman":2,"Doubling Imp":2,"Duskbat":2,"Howlfiend":2,"Imp Gang Boss":2,"Sense Demons":2,"Blastcrystal Potion":2,"Crystalweaver":2,"Fiendish Circle":2,"Lakkari Felhound":2,"Ravenous Pterrordax":2,"Summoning Portal":2,"Voidcaller":2,"Floating Watcher":2,"Kara Kazham!":2,"Tar Lurker":2,"Usher of Souls":2,"Abyssal Enforcer":2,"Fearsome Doomguard":2,"Forbidden Ritual":2,"Dark Possession":2,"Reliquary Seeker":2,"Soul Infusion":2,"Corrupting Mist":2,"Curse of Weakness":2,"Darkshire Librarian":2,"Defile":2,"Mistress of Pain":2,"Tiny Knight of Evil":2,"Void Analyst":2,"Bloodfury Potion":2,"Demonwrath":2,"Felguard":2,"Nethersoul Buster":2,"Silverware Golem":2,"Spreading Madness":2,"Unwilling Sacrifice":2,"Void Terror":2,"Blood Witch":2,"Fel Cannon":2,"Fist of Jaraxxus":2,"Hooked Reaver":2,"Imp-losion":2,"Lesser Amethyst Spellstone":2,"Seadevil Stinger":2,"Shadowflame":2,"Despicable Dreadlord":2,"Doomguard":2,"Feeding Time":2,"Cruel Dinomancer":2,"Felfire Potion":2,"Possessed Lackey":2,"Siphon Soul":2,"Void Crusher":2,"Bloodbloom":2,"Gnomeferatu":2,"Renounce Darkness":2,"Chittering Tunneler":2,"Ratcatcher":2,"Treachery":2,"Unlicensed Apothecary":2,"Cataclysm":2,"Dreadsteed":2,"Pit Lord":2,"Bane of Doom":2,"Deathweb Spider":2,"Demonheart":2,"Omega Agent":2,"Anima Golem":2,"Dark Bargain":2,"Ectomancy":2,"Kabal Trafficker":2,"Twisting Nether":2,"Voidlord":2,"DOOM!":2,"Lakkari Sacrifice":1,"The Soularium":1,"Clutchmother Zavas":1,"Blood-Queen Lana'thel":1,"Skull of the Man'ari":1,"Glinda Crowskin":1,"Rin, the First Disciple":1,"Wilfred Fizzlebang":1,"Cho'gall":1,"Lord Godfrey":1,"Dr. Morrigan":1,"Krul the Unshackled":1,"Lord Jaraxxus":1,"Mal'Ganis":1,"Bloodreaver Gul'dan":1,"Charge":2,"Whirlwind":2,"Cleave":2,"Execute":2,"Heroic Strike":2,"Fiery War Axe":2,"Shield Block":2,"Warsong Commander":2,"Kor'kron Elite":2,"Arcanite Reaper":2,"Inner Rage":2,"Animated Berserker":2,"Eternium Rover":2,"I Know a Guy":2,"Iron Hide":2,"N'Zoth's First Mate":2,"Warbot":2,"Battle Rage":2,"Bolster":2,"Cruel Taskmaster":2,"Drywhisker Armorer":2,"Forge of Souls":2,"Public Defender":2,"Rampage":2,"Rocket Boots":2,"Slam":2,"Warpath":2,"Weapons Project":2,"Woodcutter's Axe":2,"Bash":2,"Fierce Monkey":2,"Ogre Warmaul":2,"Orgrimmar Aspirant":2,"Rabid Worgen":2,"Ravaging Ghoul":2,"Arathi Weaponsmith":2,"Axe Flinger":2,"Blood Razor":2,"Bloodhoof Brave":2,"Death's Bite":2,"Grimy Gadgeteer":2,"Fool's Bane":2,"Ironforge Portal":2,"Gemstudded Golem":2,"Ornery Direhorn":2,"Unidentified Shield":2,"Obsidian Destroyer":2,"Tar Lord":2,"Blood To Ichor":2,"Cursed Blade":2,"Molten Blade":2,"Omega Assembly":2,"Upgrade!":2,"Alexstrasza's Champion":2,"Armorsmith":2,"Commanding Shout":2,"Cornered Sentry":2,"Redband Wasp":2,"Revenge":2,"Sparring Partner":2,"Stolen Goods":2,"Bloodsail Cultist":2,"Frothing Berserker":2,"Grimestreet Pawnbroker":2,"King's Defender":2,"Kobold Barbarian":2,"Mountainfire Armor":2,"Protect the King!":2,"Val'kyr Soulclaimer":2,"Militia Commander":2,"Mortal Strike":2,"Screwjank Clunker":2,"Alley Armorsmith":2,"Death Revenant":2,"Direhorn Hatchling":2,"Dyn-o-matic":2,"Festeroot Hulk":2,"Siege Engine":2,"Gather Your Party":2,"Security Rover":2,"Shieldmaiden":2,"Ancient Shieldbearer":2,"Lesser Mithril Spellstone":2,"Shield Slam":2,"Town Crier":2,"Bladed Gauntlet":2,"Bring It On!":2,"Dead Man's Hand":2,"Explore Un'Goro":2,"Sleep with the Fishes":2,"Blood Warriors":2,"Bouncing Blade":2,"Reckless Flurry":2,"Brass Knuckles":2,"Magnataur Alpha":2,"Brawl":2,"Sudden Genesis":2,"Supercollider":2,"Tentacles for Arms":2,"Deadly Arsenal":2,"Sea Reaver":2,"Beryllium Nullifier":2,"Crush":2,"Gorehowl":2,"Fire Plume's Heart":1,"Hobart Grapplehammer":1,"Darius Crowley":1,"Iron Juggernaut":1,"Blackhowl Gunspire":1,"Dr. Boom, Mad Genius":1,"Malkorok":1,"Geosculptor Yip":1,"Grommash Hellscream":1,"Rotface":1,"Scourgelord Garrosh":1,"Woecleaver":1,"King Mosh":1,"The Boomship":1,"Varian Wrynn":1}`
        }
      ]);
    });
};