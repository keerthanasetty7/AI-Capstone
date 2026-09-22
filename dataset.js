// Plantr - Comprehensive PlantVillage 38-Class Dataset & Disease Knowledge Base

const PLANT_DATASET = {
  // --- APPLE ---
  "apple_scab": {
    id: "apple_scab",
    crop: "Apple",
    name: "Apple Scab",
    scientificName: "Venturia inaequalis",
    pathogenType: "Fungal",
    severity: "Moderate to Severe",
    symptoms: [
      "Olive-green to brown velvety spots on leaves",
      "Deformed, puckered leaves with yellowing edges",
      "Sunken, corky brown lesions on fruits",
      "Premature leaf drop leading to defoliation"
    ],
    cause: "Cool, wet weather during spring spore release from overwintered leaf debris.",
    organicRemedies: [
      "Spray liquid copper or sulfur-based organic fungicide early in spring.",
      "Apply bio-fungicide containing Bacillus subtilis.",
      "Rake and burn fallen diseased leaves in autumn to disrupt spore overwintering."
    ],
    chemicalTreatments: [
      "Captan 50 WP at 2-3 g/L water during bud break.",
      "Mancozeb 75 WP (2.5 g/L) at 10-14 day intervals.",
      "Myclobutanil systemics during peak leaf expansion."
    ],
    prevention: [
      "Plant scab-resistant cultivars (e.g., Liberty, Freedom, Enterprise).",
      "Prune canopy regularly to increase airflow and sunlight penetration.",
      "Avoid overhead sprinkler irrigation on foliage."
    ],
    riskFactors: "High humidity (>85%), temperatures between 15°C - 24°C, and leaf wetness >9 hours.",
    sampleImage: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop&q=80"
  },
  "apple_black_rot": {
    id: "apple_black_rot",
    crop: "Apple",
    name: "Black Rot (Frogeye Leaf Spot)",
    scientificName: "Botryosphaeria obtusa",
    pathogenType: "Fungal",
    severity: "Severe",
    symptoms: [
      "Small purple specks on leaves expanding into 'frogeye' spots with tan centers",
      "Blackened, mummified fruits clinging to branches",
      "Sunken reddish-brown cankers on bark and twigs"
    ],
    cause: "Overwintering fungi in dead wood, mummified fruit, and bark cankers spreading via splashing rain.",
    organicRemedies: [
      "Remove and destroy mummified fruits and dead twigs during winter pruning.",
      "Apply Bordeaux mixture (copper sulfate + lime) at bud swell.",
      "Spray neem oil spray diluted in soapy water every 7 days."
    ],
    chemicalTreatments: [
      "Captan plus Ziram spray combination during bloom.",
      "Tebuconazole systemics for high pressure infections."
    ],
    prevention: [
      "Sanitize pruning tools with 70% isopropyl alcohol between trees.",
      "Maintain tree vigor through balanced potassium and nitrogen fertilizing.",
      "Promptly prune damaged or broken branches."
    ],
    riskFactors: "Warm rainy periods (20°C - 28°C) with persistent leaf wetness.",
    sampleImage: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=600&auto=format&fit=crop&q=80"
  },
  "apple_cedar_rust": {
    id: "apple_cedar_rust",
    crop: "Apple",
    name: "Cedar Apple Rust",
    scientificName: "Gymnosporangium juniperi-virginianae",
    pathogenType: "Fungal",
    severity: "Moderate",
    symptoms: [
      "Bright yellow-orange raised spots on upper leaf surface",
      "Tube-like fungal structures (aecia) under the leaf underside",
      "Premature leaf loss weakening tree health"
    ],
    cause: "Alternate host life cycle dependent on nearby Eastern Red Cedar trees.",
    organicRemedies: [
      "Spray sulfur or copper soap fungicide at blossom bud opening.",
      "Remove nearby wild cedar/juniper trees within 500 feet if feasible."
    ],
    chemicalTreatments: [
      "Myclobutanil (Immunox) applied from pink bud stage through petfall.",
      "Propiconazole at 14-day intervals during spring."
    ],
    prevention: [
      "Choose rust-resistant apple varieties (e.g., Red Delicious, McIntosh).",
      "Prune galls from nearby juniper bushes in late winter."
    ],
    riskFactors: "Wet spring weather coinciding with cedar gall gelatinous tentacle expansion.",
    sampleImage: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=600&auto=format&fit=crop&q=80"
  },
  "apple_healthy": {
    id: "apple_healthy",
    crop: "Apple",
    name: "Healthy Apple Leaf",
    scientificName: "Malus domestica",
    pathogenType: "None",
    severity: "None (Healthy)",
    symptoms: ["Vibrant deep green leaf tissue", "Clean serrated margins", "No spots or discoloration"],
    cause: "Optimal nutrition, proper watering, and good orchard management.",
    organicRemedies: ["Continue regular organic mulch, compost tea application, and balanced irrigation."],
    chemicalTreatments: ["No chemical treatment required."],
    prevention: ["Routine inspection, annual pruning, and balanced soil pH (6.0 - 7.0)."],
    riskFactors: "None. Keep monitoring for early pest activity.",
    sampleImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80"
  },

  // --- CORN (MAIZE) ---
  "corn_gray_spot": {
    id: "corn_gray_spot",
    crop: "Corn",
    name: "Cercospora Leaf Spot (Gray Leaf Spot)",
    scientificName: "Cercospora zeae-maydis",
    pathogenType: "Fungal",
    severity: "Severe",
    symptoms: [
      "Narrow, rectangular tan to gray leaf lesions bounded by leaf veins",
      "Blighting of leaves starting from bottom of canopy upward",
      "Stalk lodging and severe yield reduction"
    ],
    cause: "Fungal spores overwintering in corn crop residue in no-till fields.",
    organicRemedies: [
      "Crop rotation with non-host crops (soybean, alfalfa) for 2+ years.",
      "Deep plowing of infected crop residue after harvest.",
      "Apply trichoderma bio-control agents."
    ],
    chemicalTreatments: [
      "Azoxystrobin + Propiconazole combination fungicide at tassel stage (VT-R1).",
      "Pyraclostrobin (Headline) applications."
    ],
    prevention: [
      "Select high yield hybrids with genetic resistance to Gray Leaf Spot.",
      "Ensure proper crop spacing to improve air movement.",
      "Avoid continuous corn planting on high-residue fields."
    ],
    riskFactors: "High humidity (>90%) and temperatures between 24°C - 30°C.",
    sampleImage: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80"
  },
  "corn_common_rust": {
    id: "corn_common_rust",
    crop: "Corn",
    name: "Common Rust",
    scientificName: "Puccinia sorghi",
    pathogenType: "Fungal",
    severity: "Moderate",
    symptoms: [
      "Cinnamon-brown oval pustules scattered across upper and lower leaf surfaces",
      "Pustules rupture exposing powdery rust spores",
      "Leaves turn yellow and dry prematurely"
    ],
    cause: "Airborne spores blown northward from warmer southern agricultural zones.",
    organicRemedies: [
      "Apply wettable sulfur spray at early pustule onset.",
      "Foliar spray of potassium bicarbonate solution (5g/L)."
    ],
    chemicalTreatments: [
      "Mancozeb or Chlorothalonil application if severe prior to silk stage.",
      "Strobilurin fungicides (e.g. Quadris)."
    ],
    prevention: [
      "Plant resistant corn hybrids containing Rp genes.",
      "Early planting to avoid peak late-season spore flights."
    ],
    riskFactors: "Cool moist weather (16°C - 23°C) with heavy dew and high humidity.",
    sampleImage: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&auto=format&fit=crop&q=80"
  },
  "corn_northern_blight": {
    id: "corn_northern_blight",
    crop: "Corn",
    name: "Northern Corn Leaf Blight",
    scientificName: "Exserohilum turcicum",
    pathogenType: "Fungal",
    severity: "Severe",
    symptoms: [
      "Large cigar-shaped grayish-green lesions (2.5 - 15 cm long)",
      "Dark olive dust (fungal spores) inside lesions during damp weather",
      "Widespread leaf tissue death and premature crop death"
    ],
    cause: "Spore survival in corn residue blown by wind and rain splash onto young leaves.",
    organicRemedies: [
      "Incorporate plant residue immediately after harvest.",
      "Foliar spray of compost tea mixed with neem oil."
    ],
    chemicalTreatments: [
      "Prothioconazole + Trifloxystrobin spray at first sign of lesions.",
      "Mancozeb foliar applications every 10 days."
    ],
    prevention: [
      "Use resistant hybrids with Ht genes.",
      "Implement minimum 1-year crop rotation out of corn."
    ],
    riskFactors: "Moderate temperatures (18°C - 27°C) with 6-12 hours of leaf wetness.",
    sampleImage: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=600&auto=format&fit=crop&q=80"
  },
  "corn_healthy": {
    id: "corn_healthy",
    crop: "Corn",
    name: "Healthy Corn Leaf",
    scientificName: "Zea mays",
    pathogenType: "None",
    severity: "None (Healthy)",
    symptoms: ["Smooth uniform dark green foliage", "Sturdy leaf architecture", "No rust pustules or blight lesions"],
    cause: "Optimal soil nitrogen, healthy root structure, and adequate moisture.",
    organicRemedies: ["Maintain soil organic matter with cover crops like clover or vetch."],
    chemicalTreatments: ["None needed."],
    prevention: ["Balanced NPK fertilizer applications based on soil testing."],
    riskFactors: "None.",
    sampleImage: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&auto=format&fit=crop&q=80"
  },

  // --- POTATO ---
  "potato_early_blight": {
    id: "potato_early_blight",
    crop: "Potato",
    name: "Potato Early Blight",
    scientificName: "Alternaria solani",
    pathogenType: "Fungal",
    severity: "Moderate to Severe",
    symptoms: [
      "Concentric ring 'target' pattern spots on older bottom leaves",
      "Yellow halos surrounding brown leaf lesions",
      "Leaf wilting, drop, and reduced tuber size"
    ],
    cause: "Fungus survives in soil debris, solanaceous weeds, and infected seed tubers.",
    organicRemedies: [
      "Apply copper octanoate (copper soap) fungicide every 7 days.",
      "Foliar spray of diluted baking soda + horticultural oil.",
      "Mulch soil heavily to prevent rain splashing soil spores onto leaves."
    ],
    chemicalTreatments: [
      "Chlorothalonil 75 WG (2g/L) before disease canopy closure.",
      "Mancozeb or Difenoconazole systemics."
    ],
    prevention: [
      "Use certified disease-free seed tubers.",
      "Maintain adequate plant nitrogen and potassium levels.",
      "Implement 3-year crop rotation away from potatoes and tomatoes."
    ],
    riskFactors: "Alternating wet and dry periods with temperatures around 24°C - 29°C.",
    sampleImage: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
  },
  "potato_late_blight": {
    id: "potato_late_blight",
    crop: "Potato",
    name: "Potato Late Blight (Irish Famine Blight)",
    scientificName: "Phytophthora infestans",
    pathogenType: "Oomycete (Fungal-like)",
    severity: "CRITICAL / DESTRUCTIVE",
    symptoms: [
      "Large water-soaked dark brown spots with pale green margins",
      "White cottony fungal growth on underside of leaves in humid weather",
      "Rapid collapse and rotting of entire foliage within days",
      "Rotted, foul-smelling tubers in soil"
    ],
    cause: "Airborne sporangia travelling miles in humid cloud cover, infecting healthy fields rapidly.",
    organicRemedies: [
      "Immediate preventative applications of fixed copper hydroxide.",
      "Destroy and burn severely infected plants immediately to save nearby fields.",
      "Cut and remove vines 2 weeks before harvesting tubers."
    ],
    chemicalTreatments: [
      "Cymoxanil + Mancozeb curative spray.",
      "Metalaxyl-M + Mancozeb (Ridomil Gold) systemic treatment.",
      "Fluopicolide or Dimethomorph during outbreak warnings."
    ],
    prevention: [
      "Plant resistant varieties (e.g. Defender, Sarpo Mira).",
      "Eliminate cull piles and volunteer potato plants.",
      "Avoid leaf wetness via drip irrigation."
    ],
    riskFactors: "Cool, rainy conditions (12°C - 22°C) with persistent humidity >90%.",
    sampleImage: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a85?w=600&auto=format&fit=crop&q=80"
  },
  "potato_healthy": {
    id: "potato_healthy",
    crop: "Potato",
    name: "Healthy Potato Leaf",
    scientificName: "Solanum tuberosum",
    pathogenType: "None",
    severity: "None (Healthy)",
    symptoms: ["Lush compound green leaves", "No brown target spots or damp water-soaked lesions"],
    cause: "Good soil aeration, proper seed tuber sanitation, and balanced watering.",
    organicRemedies: ["Regular compost tea foliar sprays to boost surface microbiome."],
    chemicalTreatments: ["None required."],
    prevention: ["Ensure well-draining soil mounds."],
    riskFactors: "None.",
    sampleImage: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80"
  },

  // --- TOMATO ---
  "tomato_bacterial_spot": {
    id: "tomato_bacterial_spot",
    crop: "Tomato",
    name: "Tomato Bacterial Spot",
    scientificName: "Xanthomonas vesicatoria",
    pathogenType: "Bacterial",
    severity: "Severe",
    symptoms: [
      "Small water-soaked dark spots on leaves turning dark brown/black with yellow halos",
      "Leaves become ragged, yellow, and drop prematurely",
      "Scab-like raised dark spots on green tomato fruits"
    ],
    cause: "Bacterial pathogen seed-borne or surviving in crop debris, spread by wind-driven rain and equipment.",
    organicRemedies: [
      "Liquid copper soap combined with bio-pesticide Bacillus amyloliquefaciens.",
      "Spray garlic extract solution (anti-bacterial property)."
    ],
    chemicalTreatments: [
      "Fixed copper hydroxide + Mancozeb mixture to manage copper-resistant strains.",
      "Streptomycin sulfate sprays (where approved for agricultural seedbed use)."
    ],
    prevention: [
      "Use certified disease-free seeds treated with hot water (50°C for 25 mins).",
      "Do not work in fields when leaves are wet.",
      "Disinfect garden stakes and tools between seasons."
    ],
    riskFactors: "Warm temperatures (24°C - 30°C) with heavy rainfall or overhead irrigation.",
    sampleImage: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_early_blight": {
    id: "tomato_early_blight",
    crop: "Tomato",
    name: "Tomato Early Blight",
    scientificName: "Alternaria solani",
    pathogenType: "Fungal",
    severity: "Moderate to Severe",
    symptoms: [
      "Dark brown spots with characteristic concentric rings ('bullseye' pattern)",
      "Yellowing surrounding spots starting on lower mature leaves",
      "Sunken dark lesions at the stem base of fruit"
    ],
    cause: "Soil-borne spores splashing onto lower foliage during watering or rain.",
    organicRemedies: [
      "Prune bottom 12 inches of foliage to keep leaves off soil.",
      "Apply copper octanoate or sulfur dust every 7 to 10 days.",
      "Mulch base of tomato plants with clean straw."
    ],
    chemicalTreatments: [
      "Chlorothalonil 75 WP spray at first symptom detection.",
      "Azoxystrobin or Difenoconazole systemic fungicides."
    ],
    prevention: [
      "Practice 3-year crop rotation.",
      "Provide wide spacing (3 feet apart) for max airflow.",
      "Water exclusively at soil level using drip hoses."
    ],
    riskFactors: "High humidity and warm weather (24°C - 29°C).",
    sampleImage: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_late_blight": {
    id: "tomato_late_blight",
    crop: "Tomato",
    name: "Tomato Late Blight",
    scientificName: "Phytophthora infestans",
    pathogenType: "Oomycete",
    severity: "CRITICAL",
    symptoms: [
      "Large irregular dark greasy water-soaked spots on leaves and stems",
      "White fluffy fungal mildew on underside of affected leaves",
      "Firm, brown, leathery rot on green and ripe fruits"
    ],
    cause: "Airborne sporangia blowing in from infected potato or tomato fields during humid weather.",
    organicRemedies: [
      "Immediate protective copper hydroxide spray.",
      "Remove and bag infected branches in plastic bags immediately (do not compost)."
    ],
    chemicalTreatments: [
      "Ridomil Gold MZ (Metalaxyl-M + Mancozeb).",
      "Infinito (Fluopicolide + Propamocarb)."
    ],
    prevention: [
      "Plant resistant tomato varieties (e.g., Defiant PHR, Iron Lady, Mountain Merit).",
      "Avoid planting tomatoes adjacent to potatoes."
    ],
    riskFactors: "Cool, wet, cloudy weather (15°C - 22°C) with persistent leaf wetness.",
    sampleImage: "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_leaf_mold": {
    id: "tomato_leaf_mold",
    crop: "Tomato",
    name: "Tomato Leaf Mold",
    scientificName: "Passalora fulva",
    pathogenType: "Fungal",
    severity: "Moderate",
    symptoms: [
      "Pale green to yellowish spots on upper leaf surface",
      "Olive-green to velvety brown mold growth on leaf undersides",
      "Leaves wither and die, exposing fruit to sunscald"
    ],
    cause: "High relative humidity in greenhouse and high-tunnel tomato production.",
    organicRemedies: [
      "Copper soap spray every 7 days.",
      "Increase greenhouse ventilation with exhaust fans and horizontal airflow."
    ],
    chemicalTreatments: [
      "Chlorothalonil or Mancozeb protective sprays.",
      "Difenoconazole systemic treatment."
    ],
    prevention: [
      "Maintain relative humidity below 85% in greenhouses.",
      "Prune suckers and lower canopy leaves.",
      "Space rows adequately."
    ],
    riskFactors: "Relative humidity >85% and temperatures between 20°C - 25°C.",
    sampleImage: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_septoria": {
    id: "tomato_septoria",
    crop: "Tomato",
    name: "Septoria Leaf Spot",
    scientificName: "Septoria lycopersici",
    pathogenType: "Fungal",
    severity: "Moderate to Severe",
    symptoms: [
      "Numerous small round spots (1-3mm) with dark borders and tan gray centers",
      "Tiny black specks (pycnidia) visible inside centers of spots",
      "Progressive defoliation from bottom of plant to top"
    ],
    cause: "Soil overwintered fungal spores splashing onto foliage.",
    organicRemedies: [
      "Copper fungicide or sulfur powder application.",
      "Heavy straw or plastic mulch barrier."
    ],
    chemicalTreatments: [
      "Chlorothalonil or Mancozeb applied every 7-10 days."
    ],
    prevention: [
      "2-3 year crop rotation.",
      "Avoid overhead watering and handling wet plants."
    ],
    riskFactors: "Extended wet periods at 20°C - 25°C.",
    sampleImage: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_spider_mites": {
    id: "tomato_spider_mites",
    crop: "Tomato",
    name: "Two-Spotted Spider Mite Damage",
    scientificName: "Tetranychus urticae",
    pathogenType: "Pest / Mite",
    severity: "Moderate",
    symptoms: [
      "Fine yellow-white stippling (tiny dots) on upper leaf surface",
      "Silken webbing on leaf undersides and stem joints",
      "Leaves turn bronze, dry up, and feel papery"
    ],
    cause: "Hot, dry, dusty environmental conditions accelerating mite reproduction.",
    organicRemedies: [
      "Spray insecticidal soap or neem oil thoroughly covering undersides.",
      "Release predatory mites (Phytoseiulus persimilis).",
      "Hose foliage with strong water spray to dislodge mites and webs."
    ],
    chemicalTreatments: [
      "Abamectin or Spiromesifen (Oberon) miticide.",
      "Bifenazate selective acaricide."
    ],
    prevention: [
      "Avoid over-using broad spectrum pyrethroid insecticides that kill beneficial natural predators.",
      "Keep garden area free of dusty weeds."
    ],
    riskFactors: "Hot weather (>30°C) with low relative humidity.",
    sampleImage: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_yellow_curl": {
    id: "tomato_yellow_curl",
    crop: "Tomato",
    name: "Tomato Yellow Leaf Curl Virus (TYLCV)",
    scientificName: "Begomovirus (TYLCV)",
    pathogenType: "Viral",
    severity: "CRITICAL",
    symptoms: [
      "Severe stunting of young foliage and plant dwarfing",
      "Upward cupping and yellowing of leaf margins",
      "Flowers drop off prematurely leading to zero fruit set"
    ],
    cause: "Vectored exclusively by the Silverleaf Whitefly (Bemisia tabaci).",
    organicRemedies: [
      "Control whiteflies using yellow sticky traps.",
      "Apply insecticidal soap + neem oil to suppress whitefly nymphs.",
      "Reflective silver mulches to repel whiteflies."
    ],
    chemicalTreatments: [
      "Imidacloprid or Thiamethoxam systemic insecticides for whitefly vector control.",
      "Note: No chemical cure exists for the virus once plant is infected."
    ],
    prevention: [
      "Plant TYLCV-resistant tomato cultivars (e.g. Tygress, Inbar, Security).",
      "Install fine insect netting (50-mesh) over greenhouse vents."
    ],
    riskFactors: "High whitefly vector populations during hot weather.",
    sampleImage: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_mosaic": {
    id: "tomato_mosaic",
    crop: "Tomato",
    name: "Tomato Mosaic Virus (ToMV)",
    scientificName: "Tobamovirus (ToMV)",
    pathogenType: "Viral",
    severity: "Severe",
    symptoms: [
      "Mottled light and dark green mosaic patterns on leaves",
      "Fern-like leaf distortion and stringy leaves ('shoestring' symptom)",
      "Internal brown necrosis inside fruit walls"
    ],
    cause: "Extremely stable virus spread easily via mechanical contact (hands, tools, clothing, tobacco smoke).",
    organicRemedies: [
      "Remove and burn infected plants immediately.",
      "Wash hands and tools thoroughly with powdered milk solution or 20% trisodium phosphate."
    ],
    chemicalTreatments: [
      "No chemical virucide exists.",
      "Sanitize tools rigorously with Virkon S or 10% bleach."
    ],
    prevention: [
      "Plant resistant varieties containing the Tm-2^2 gene.",
      "Smokers must wash hands thoroughly before handling tomato plants."
    ],
    riskFactors: "Mechanical handling and contaminated seed lots.",
    sampleImage: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&auto=format&fit=crop&q=80"
  },
  "tomato_healthy": {
    id: "tomato_healthy",
    crop: "Tomato",
    name: "Healthy Tomato Leaf",
    scientificName: "Solanum lycopersicum",
    pathogenType: "None",
    severity: "None (Healthy)",
    symptoms: ["Deep green compound leaves", "Clean foliage free of spots, curl, or webbing"],
    cause: "Balanced watering, full sun exposure, proper support staking, and good nutrition.",
    organicRemedies: ["Regular compost mulching and potassium silicate foliar sprays."],
    chemicalTreatments: ["None required."],
    prevention: ["Continue drip irrigation and air pruning."],
    riskFactors: "None.",
    sampleImage: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&auto=format&fit=crop&q=80"
  },

  // --- GRAPE ---
  "grape_black_rot": {
    id: "grape_black_rot",
    crop: "Grape",
    name: "Grape Black Rot",
    scientificName: "Guignardia bidwellii",
    pathogenType: "Fungal",
    severity: "Severe",
    symptoms: [
      "Small reddish-brown circular spots on leaves with tiny black spore dots",
      "Grapes turn brown, shrivel, and transform into hard, black mummies",
      "Dark elongated lesions on young shoots and tendrils"
    ],
    cause: "Fungus overwintering in mummified berries hanging on vines or fallen on ground.",
    organicRemedies: [
      "Prune and burn all mummified grapes and infected canes in winter.",
      "Apply copper hydroxide + sulfur spray from bud burst."
    ],
    chemicalTreatments: [
      "Mancozeb or Captan sprays every 10-14 days starting early spring.",
      "Myclobutanil or Tebeconazole triazoles."
    ],
    prevention: [
      "Keep grape canopy open with leaf pulling and canopy management for rapid drying.",
      "Choose resistant grape varieties."
    ],
    riskFactors: "Warm wet spring weather (20°C - 27°C) during bloom and early fruit development.",
    sampleImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&auto=format&fit=crop&q=80"
  },
  "grape_esca": {
    id: "grape_esca",
    crop: "Grape",
    name: "Grape Esca (Black Measles)",
    scientificName: "Phaeoacremonium aleophilum complex",
    pathogenType: "Fungal Wood Disease",
    severity: "Severe",
    symptoms: [
      "Interveinal leaf yellowing and browning creating 'tiger-stripe' leaf patterns",
      "Tiny dark spots ('black measles') on skin of white and red grapes",
      "Sudden apoplexy (complete collapse and drying of vine canopy in summer)"
    ],
    cause: "Complex wood-inhabiting fungi infecting pruning wounds on mature grapevines.",
    organicRemedies: [
      "Paint pruning wounds with bio-fungicide containing Trichoderma atroviride.",
      "Sanitize pruning shears with alcohol between vines."
    ],
    chemicalTreatments: [
      "No effective chemical fungicide exists for vine trunk cure.",
      "Apply wound sealants (Topsin M) immediately after pruning."
    ],
    prevention: [
      "Delay pruning until late winter when wound healing is faster.",
      "Avoid large pruning cuts on old wood during wet weather."
    ],
    riskFactors: "Older vineyards (>10 years) and pruning cuts made in damp winter weather.",
    sampleImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
  },
  "grape_healthy": {
    id: "grape_healthy",
    crop: "Grape",
    name: "Healthy Grape Leaf",
    scientificName: "Vitis vinifera",
    pathogenType: "None",
    severity: "None (Healthy)",
    symptoms: ["Lush green palmately lobed leaves", "No tiger stripes or black spot lesions"],
    cause: "Optimal vineyard aeration, sun exposure, and balanced nutrition.",
    organicRemedies: ["Regular compost tea and seaweed extract spray."],
    chemicalTreatments: ["None."],
    prevention: ["Good canopy management."],
    riskFactors: "None.",
    sampleImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&auto=format&fit=crop&q=80"
  },

  // --- PEPPER BELL ---
  "pepper_bacterial_spot": {
    id: "pepper_bacterial_spot",
    crop: "Pepper Bell",
    name: "Pepper Bacterial Spot",
    scientificName: "Xanthomonas euvesicatoria",
    pathogenType: "Bacterial",
    severity: "Severe",
    symptoms: [
      "Small yellow-green raised spots on leaves turning dark brown",
      "Severe premature defoliation leaving peppers exposed to sunscald",
      "Warty, raised brown scabs on pepper fruit surface"
    ],
    cause: "Bacterial infestation from infected seeds or soil residues.",
    organicRemedies: [
      "Copper soap fungicide + Bacillus subtilis sprays.",
      "Spray diluted neem oil emulsion."
    ],
    chemicalTreatments: [
      "Fixed copper mixed with Mancozeb.",
      "Streptomycin sprays on young nursery transplants."
    ],
    prevention: [
      "Use certified disease-resistant pepper seeds.",
      "Avoid overhead sprinkler systems."
    ],
    riskFactors: "Hot rainstorms (24°C - 32°C) with high humidity.",
    sampleImage: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&auto=format&fit=crop&q=80"
  },
  "pepper_healthy": {
    id: "pepper_healthy",
    crop: "Pepper Bell",
    name: "Healthy Pepper Leaf",
    scientificName: "Capsicum annuum",
    pathogenType: "None",
    severity: "None (Healthy)",
    symptoms: ["Smooth glossy deep green leaves", "No bacterial scabs or leaf yellowing"],
    cause: "Warm soil, drip irrigation, and proper calcium balance.",
    organicRemedies: ["Foliar calcium nitrate applications to prevent blossom end rot."],
    chemicalTreatments: ["None."],
    prevention: ["Ensure soil drainage."],
    riskFactors: "None.",
    sampleImage: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&auto=format&fit=crop&q=80"
  },

  // --- STRAWBERRY ---
  "strawberry_scorch": {
    id: "strawberry_scorch",
    crop: "Strawberry",
    name: "Strawberry Leaf Scorch",
    scientificName: "Diplocarpon earlianum",
    pathogenType: "Fungal",
    severity: "Moderate",
    symptoms: [
      "Small dark purple spots on leaves expanding into blotches",
      "Centers of spots stay dark purple (unlike leaf spot which turns white)",
      "Leaf edges dry up and look burned or scorched"
    ],
    cause: "Fungus overwintering on living infected leaves and plant debris.",
    organicRemedies: [
      "Apply copper soap fungicide at new spring leaf growth.",
      "Remove old diseased leaves after post-harvest renovation."
    ],
    chemicalTreatments: [
      "Captan or Myclobutanil early in season.",
      "Thiophanate-methyl systemic sprays."
    ],
    prevention: [
      "Plant certified disease-free strawberry runners.",
      "Maintain narrow row widths for max sun and wind drying."
    ],
    riskFactors: "Wet spring weather with high moisture.",
    sampleImage: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&auto=format&fit=crop&q=80"
  },
  "strawberry_healthy": {
    id: "strawberry_healthy",
    crop: "Strawberry",
    name: "Healthy Strawberry Leaf",
    scientificName: "Fragaria × ananassa",
    pathogenType: "None",
    severity: "None (Healthy)",
    symptoms: ["Vibrant trifoliate green leaves", "No purple scorching blotches"],
    cause: "Well-drained acidic soil (pH 5.8 - 6.5) and drip irrigation.",
    organicRemedies: ["Pine needle mulching."],
    chemicalTreatments: ["None."],
    prevention: ["Replace strawberry beds every 3-4 years."],
    riskFactors: "None.",
    sampleImage: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&auto=format&fit=crop&q=80"
  }
};

// Helper list of pre-configured sample scans for instant testing
const SAMPLE_SCANS = [
  {
    id: "sample-1",
    title: "Tomato Early Blight",
    crop: "Tomato",
    diseaseId: "tomato_early_blight",
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&auto=format&fit=crop&q=80",
    description: "Classic target concentric brown spots with yellow chlorosis halos on lower leaves."
  },
  {
    id: "sample-2",
    title: "Potato Late Blight",
    crop: "Potato",
    diseaseId: "potato_late_blight",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a85?w=600&auto=format&fit=crop&q=80",
    description: "Severe water-soaked dark brown spots with fuzzy white fungal spore growth on underside."
  },
  {
    id: "sample-3",
    title: "Corn Common Rust",
    crop: "Corn",
    diseaseId: "corn_common_rust",
    imageUrl: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&auto=format&fit=crop&q=80",
    description: "Raised cinnamon-brown powdery pustules scattered across the leaf blade."
  },
  {
    id: "sample-4",
    title: "Apple Scab",
    crop: "Apple",
    diseaseId: "apple_scab",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop&q=80",
    description: "Olive velvety spots causing puckered, distorted foliage."
  },
  {
    id: "sample-5",
    title: "Grape Black Rot",
    crop: "Grape",
    diseaseId: "grape_black_rot",
    imageUrl: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&auto=format&fit=crop&q=80",
    description: "Circular reddish-brown leaf spots with tiny black spore specks."
  },
  {
    id: "sample-6",
    title: "Healthy Tomato Leaf",
    crop: "Tomato",
    diseaseId: "tomato_healthy",
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&auto=format&fit=crop&q=80",
    description: "Clean, deep green compound leaf showing zero signs of infection or lesions."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { PLANT_DATASET, SAMPLE_SCANS };
}
