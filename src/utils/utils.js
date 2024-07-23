import { DateTime } from "luxon";

export const strToLowercase = (str) => str.toLowerCase();

export const isEmptyObject = (val) => isNullOrEmpty(val) || (val && Object.keys(val).length === 0);

export const isEmptyArray = (val) => val && !val.length;

export const isNullOrEmpty = (str) => !str;

export const hasText = (str) => !!(str && str.trim() !== '');

export const hasNoText = (str) => !(str && str.trim() !== '');

export const parseStr = (str, replaceStr = '') => isNullOrEmpty(str) ? replaceStr : str;

export const parseArray = (arr, replaceStr = []) => isNullOrEmpty(arr) || isEmptyArray(arr) ? replaceStr : arr;

export const fortmatData = (data) => JSON.stringify(data, null, 2);

export const findIndexInArrayOfObjects = (data, idToCompare, idKeyName) => data.findIndex(x => x[idKeyName] === idToCompare);

export const formattedDateTime = (dateStr, dateFormat) => DateTime.fromISO(dateStr).toFormat(dateFormat);

export const getTodaysDate = () => DateTime.now().toISO();

export const cities = {
  "Afghanistan": ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad", "Lashkar Gah", "Taloqan", "Kunduz", "Asadabad", "Ghazni"],
  "Albania": ["Tirana", "Durres", "Vlore", "Shkoder", "Elbasan", "Fier", "Korce", "Berat", "Lushnje", "Patos Fshat"],
  "Algeria": ["Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Sidi Bel Abbes", "Biskra", "Setif"],
  "Andorra": ["Andorra la Vella", "Encamp", "Escaldes-Engordany", "La Massana", "Santa Coloma", "Sant Julia de Loria", "Canillo"],
  "Angola": ["Luanda", "dalatando", "Huambo", "Lobito", "Benguela", "Kuito", "Lubango", "Malanje", "Namibe", "Soyo"],
  "Antigua and Barbuda": ["Saint Johns"],
  "Argentina": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "San Miguel de Tucuman", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan"],
  "Armenia": ["Yerevan", "Gyumri", "Vanadzor", "Ejmiatsin", "Hrazdan", "Abovyan", "Kapan", "Ararat", "Armavir", "Gavarr"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Cairns", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Sunshine Coast", "Wollongong"],
  "Austria": ["Vienna", "Graz","Wattens", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Polten", "Dornbirn"],
  "Azerbaijan": ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Khirdalan", "Shirvan", "Sheki", "Yevlakh", "Bilasuvar", "Naftalan"],
  "Bahamas": ["Nassau", "Lucaya", "Freeport", "West End", "Cooper's Town", "Marsh Harbour", "High Rock", "Andros Town", "Clarence Town", "Dunmore Town"],
  "Bahrain": ["Manama", "Al Muharraq", "Ar Rifa", "Dar Kulayb", "Madinat Hamad", "Madina Isa", "Sitrah", "Jidhafs", "Al Hadd", "Madinat Isa"],
  "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Comilla", "Narayanganj", "Rangpur", "Mymensingh", "Barisal", "Sylhet"],
  "Barbados": ["Bridgetown", "Speightstown", "Oistins", "Bathsheba", "Holetown", "Crane", "Blackmans", "Greenland", "Flat Rock", "Hillaby"],
  "Belarus": ["Minsk", "Gomel", "Mogilev", "Vitebsk", "Hrodna", "Brest", "Babruysk", "Baranovichi", "Barysaw", "Pinsk"],
  "Belgium": ["Brussels", "Antwerp", "Ghent", "Bruges", "Liege", "Leuven", "Namur", "Mons", "Mechelen", "Aalst"],
  "Belize": ["Belmopan", "Belize City", "San Ignacio", "Orange Walk Town", "Dangriga", "Corozal Town", "Benque Viejo del Carmen", "Punta Gorda", "Stann Creek Town", "Valley of Peace"],
  "Benin": ["Porto-Novo", "Cotonou", "Abomey-Calavi", "Djougou", "Parakou", "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey"],
  "Bhutan": ["Thimphu", "Phuntsholing", "Punakha", "Jakar", "Paro", "Wangdue Phodrang", "Trongsa", "Mongar", "Geylegphug", "Zhemgang"],
  "Bolivia": ["La Paz", "Sucre", "Santa Cruz de la Sierra", "El Alto", "Cochabamba", "Oruro", "Tarija", "Potosi", "Montero", "Trinidad"],
  "Bosnia and Herzegovina": ["Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar", "Bihac", "Bugojno", "Brcko", "Bijeljina", "Prijedor"],
  "Botswana": ["Gaborone", "Francistown", "Molepolole", "Serowe", "Selibe Phikwe", "Maun", "Kanye", "Mahalapye", "Mogoditshane", "Mochudi"],
  "Brazil": ["Sao Paulo", "Rio de Janeiro", "Salvador", "Brasilia", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre"],
  "Brunei": ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong", "Bangar", "Jerudong", "Muara", "Kuala Belait", "Seria", "Tutong"],
  "Bulgaria": ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich", "Shumen"],
  "Burkina Faso": ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora", "Dedougou", "Kaya", "Tenkodogo", "Fada N'gourma", "Hounde"],
  "Burundi": ["Bujumbura", "Muyinga", "Ruyigi", "Gitega", "Ngozi", "Kayanza", "Makamba", "Muramvya", "Cibitoke", "Bubanza"],
  "Cabo Verde": ["Praia", "Mindelo", "Santa Maria", "Cidade Velha", "Assomada", "Pedra Badejo", "Tarrafal", "Espargos", "Porto Novo", "Calheta de Sao Miguel"],
  "Cambodia": ["Phnom Penh", "Battambang", "Siem Reap", "Sihanoukville", "Poipet", "Prey Veng", "Kampong Cham", "Ta Khmau", "Phumi Veal Sre", "Kampong Speu"],
  "Cameroon": ["Douala", "Yaounde", "Bamenda", "Bafoussam", "Garoua", "Maroua", "Ngaoundere", "Kumba", "Buea", "Nkongsamba"],
  "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener"],
  "Central African Republic": ["Bangui", "Bimbo", "Berberati", "Carnot", "Bambari", "Bouar", "Bossangoa", "Bria", "Nola", "Kaga-Bandoro"],
  "Chad": ["Djamena", "Moundou", "Sarh", "Abeche", "Kelo", "Koumra", "Pala", "Am Timan", "Bongor", "Mongo"],
  "Chile": ["Santiago", "Puente Alto", "Concepcion", "Vina del Mar", "Valparaiso", "Talcahuano", "Antofagasta", "San Bernardo", "Temuco", "Iquique"],
  "China": ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Tianjin", "Wuhan", "Dongguan", "Chongqing", "Nanjing", "Chengdu"],
  "Colombia": ["Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena", "Cucuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibague"],
  "Comoros": ["Moroni", "Mutsamudu", "Fomboni", "Domoni", "Sima", "Mirontsi", "Koni-Djodjo", "Koki", "Ouani", "Adda-Doueni"],
  "Congo": ["Brazzaville", "Pointe-Noire", "Dolisie", "Kayes", "Owando", "Nkayi", "Impfondo", "Sibiti", "Madingou", "Brazzaville"],
  "Costa Rica": ["San Jose", "Limón", "San Francisco", "Alajuela", "Liberia", "Paraiso", "Puntarenas", "San Isidro", "Curridabat", "San Vicente"],
  "Croatia": ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar", "Slavonski Brod", "Pula", "Sesvete", "Karlovac", "Varazdin"],
  "Cuba": ["Havana", "Santiago de Cuba", "Camaguey", "Holguin", "Santa Clara", "Guantanamo", "Bayamo", "Manzanillo", "Cienfuegos", "Pinar del Rio"],
  "Cyprus": ["Nicosia", "Limassol", "Larnaca", "Famagusta", "Paphos", "Kyrenia", "Protaras", "Morphou", "Aradippou", "Paralimni"],
  "Czech Republic": ["Prague", "Brno", "Ostrava", "Pilsen", "Olomouc", "Liberec", "Ceske Budejovice", "Hradec Kralove", "Usti nad Labem", "Pardubice"],
  "Denmark": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde"],
  "Djibouti": ["Djibouti", "Ali Sabieh", "Tadjoura", "Obock", "Dikhil", "Arta", "Holhol", "Dorra", "Galafi", "Loyada"],
  "Dominica": ["Roseau", "Portsmouth", "Marigot", "Berekua", "Mahaut", "Saint Joseph", "Plymouth", "Hillsborough", "Wesley", "Salisbury"],
  "Dominican Republic": ["Santo Domingo", "Santiago", "Santo Domingo Oeste", "Santo Domingo Este", "San Pedro de Macoris", "La Romana", "Bella Vista", "San Cristobal", "Puerto Plata", "San Francisco de Macoris"],
  "East Timor (Timor-Leste)": ["Dili", "Dare", "Same", "Aileu", "Ainaro", "Lospalos", "Maliana", "Suai", "Baucau", "Venilale"],
  "Ecuador": ["Quito", "Guayaquil", "Cuenca", "Santo Domingo de los Colorados", "Machala", "Durán", "Portoviejo", "Manta", "Loja", "Ambato"],
  "Egypt": ["Cairo", "Alexandria", "Nile Cruise", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Mansoura", "Tanta", "Asyut"],
  "El Salvador": ["San Salvador", "Santa Ana", "San Miguel", "Apopa", "Soyapango", "Mejicanos", "Santa Tecla", "Ilopango", "Delgado", "Sonsonate"],
  "Equatorial Guinea": ["Malabo", "Bata", "Ebebiyin", "Aconibe", "Anisoc", "Luba", "Evinayong", "Mongomo", "Mikomeseng", "Rebola"],
  "Eritrea": ["Asmara", "Massawa", "Keren", "Assab", "Mendefera", "Barentu", "Adi Keyh", "Edd", "Dekemhare", "Ak'ordat"],
  "Estonia": ["Tallinn", "Tartu", "Narva", "Kohtla-Jarve", "Parnu", "Viljandi", "Rakvere", "Maardu", "Sillamae", "Kuressaare"],
  "Eswatini": ["Mbabane", "Manzini", "Big Bend", "Malkerns", "Mhlume", "Hluti", "Siteki", "Piggs Peak", "Lobamba", "Lavumisa"],
  "Ethiopia": ["Addis Ababa", "Dire Dawa", "Mek'ele", "Adama", "Hawassa", "Jimma", "Bahir Dar", "Gondar", "Dessie", "Bale Robe"],
  "Fiji": ["Suva", "Lautoka", "Nadi", "Labasa", "Ba", "Levuka", "Nausori", "Savusavu", "Savusavu", "Tavua"],
  "Finland": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyvaskyla", "Lahti", "Kuopio", "Pori"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"],
  "Gabon": ["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda", "Mouila", "Lambarene", "Tchibanga", "Koulamoutou", "Makokou"],
  "Gambia": ["Banjul", "Serekunda", "Brikama", "Bakau", "Banjulinding", "Farafenni", "Lamin", "Sukuta", "Basse Santa Su", "Gunjur"],
  "Georgia": ["Tbilisi", "Kutaisi", "Batumi", "Rustavi", "Zugdidi", "Gori", "Poti", "Samtredia", "Khashuri", "Senaki"],
  "Germany": ["Karlsruhe", "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig"],
  "Ghana": ["Accra", "Kumasi", "Tamale", "Takoradi", "Atsiaman", "Tema", "Teshie", "Cape Coast", "Sekondi", "Obuasi"],
  "Greece": ["Athens", "Thessaloniki", "Patras", "Piraeus", "Larissa", "Heraklion", "Kallithea", "Peristeri", "Rhodes", "Ioannina"],
  "Grenada": ["Saint George's", "Grenville", "Victoria", "Sauteurs", "Hillsborough", "Gouyave", "St. David's", "Guav", "Grenville", "Victoria"],
  "Guatemala": ["Guatemala City", "Mixco", "Villa Nueva", "Quetzaltenango", "San Miguel Petapa", "Escuintla", "San Juan Sacatepequez", "Villa Canales", "Chinautla", "Chimaltenango"],
  "Guinea": ["Conakry", "Nzerekore", "Kankan", "Kindia", "Boké", "Gueckedou", "Kamsar", "Kankan", "Kissidougou", "Labe"],
  "Guinea-Bissau": ["Bissau", "Bissora", "Bafata", "Gabu", "Bissor", "Catio", "Bubaque", "Bolama", "Cacheu", "Mansoa"],
  "Guyana": ["Georgetown", "Linden", "New Amsterdam", "Bartica", "Skeldon", "Rosignol", "Mahaica Village", "Parika", "Vreed-en-Hoop", "Mahaicony Village"],
  "Haiti": ["Port-au-Prince", "Carrefour", "Delmas", "Pétion-Ville", "Port-de-Paix", "Jacmel", "Cap-Haïtien", "Léogâne", "Les Cayes", "Saint-Marc"],
  "Honduras": ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso", "Ciudad Choluteca", "Comayagua", "Puerto Cortes", "La Lima", "Danli"],
  "Hungary": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pecs", "Gyor", "Nyiregyhaza", "Kecskemet", "Szekesfehervar", "Szombathely"],
  "Iceland": ["Reykjavik", "Kopavogur", "Hafnarfjordur", "Akureyri", "Reykjanesbær", "Garðabær", "Mosfellsbær", "Akranes", "Selfoss", "Seltjarnarnes"],
  "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Surat", "Jaipur"],
  "Indonesia": ["Bali", "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Depok", "Tangerang", "South Tangerang"],
  "Iran": ["Tehran", "Mashhad", "Isfahan", "Karaj", "Tabriz", "Shiraz", "Ahvaz", "Qom", "Kermanshah", "Urmia"],
  "Iraq": ["Baghdad", "Basra", "Mosul", "Erbil", "Kirkuk", "Sulaymaniyah", "Najaf", "Karbala", "Nasiriyah", "Amara"],
  "Ireland": ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Bray", "Navan"],
  "Israel": ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beersheba", "Holon", "Bnei Brak"],
  "Italy": ["Rome","Padova","Venice","Maranello","Tuscany", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania"],
  "Ivory Coast": ["Abidjan", "Bouake", "Yamoussoukro", "San-Pedro", "Daloa", "Korhogo", "Abobo", "Man", "Divo", "Gagnoa"],
  "Jamaica": ["Kingston", "New Kingston", "Spanish Town", "Portmore", "Montego Bay", "Mandeville", "May Pen", "Old Harbour", "Linstead", "Half Way Tree"],
  "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kawasaki", "Kobe", "Yokosuka", "Kyoto"],
  "Jordan": ["Amman", "Zarqa", "Irbid", "Russeifa", "Wadi as Sir", "Aqaba", "Ar Ramtha", "Madaba", "Mafraq", "Sweileh"],
  "Kazakhstan": ["Almaty", "Nur-Sultan", "Shymkent", "Karaganda", "Aktobe", "Taraz", "Pavlodar", "Ust-Kamenogorsk", "Uralsk", "Kostanay"],
  "Kenya": ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Malindi", "Kitale", "Garissa", "Kakamega"],
  "Kiribati": ["Tarawa", "Betio Village", "Bikenibeu Village", "Teaoraereke", "Bairiki Village", "Bonriki", "Temaraia Village", "Eita Village", "Ambo Village", "Rawannawi Village"],
  "Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Seongnam"],
  "Kosovo": ["Pristina", "Mitrovica", "Prizren", "Gjakova", "Peje", "Ferizaj", "Gjilan", "Podujeva", "Pec", "Suhareka"],
  "Kuwait": ["Kuwait City", "Al Ahmadi", "Hawalli", "As Salimiyah", "Sabah as Salim", "Al Farwaniyah", "Al Fahahil", "Kuwait City", "Ar Rumaythiyah", "Ar Riqqah"],
  "Kyrgyzstan": ["Bishkek", "Osh", "Jalal-Abad", "Karabalta", "Karakol", "Tokmok", "Kyzyl-Kiya", "Balykchy", "Talas", "Kara Suu"],
  "Laos": ["Vientiane", "Pakse", "Savannakhet", "Luang Prabang", "Xam Nua", "Thakhek", "Muang Xay", "Phonsavan", "Pakxan", "Saravan"],
  "Latvia": ["Riga", "Daugavpils", "Liepaja", "Jelgava", "Jurmala", "Ventspils", "Rezekne", "Jekabpils", "Valmiera", "Ogre"],
  "Lebanon": ["Beirut", "Tripoli", "Sidon", "Zahle", "Tyre", "Jounieh", "Batroun", "Aley", "Byblos", "Baabda"],
  "Lesotho": ["Maseru", "Teyateyaneng", "Mafeteng", "Hlotse", "Mohale's Hoek", "Maputsoe", "Quthing", "Butha-Buthe", "Mokhotlong", "Thaba-Tseka"],
  "Liberia": ["Monrovia", "Gbarnga", "Kakata", "Bensonville", "Harper", "Voinjama", "Buchanan", "Zwedru", "New Yekepa", "Greenville"],
  "Libya": ["Tripoli", "Benghazi", "Misrata", "Tarhuna", "Al Khums", "Homs", "Zawiya", "Zliten", "Sabha", "Sirte"],
  "Liechtenstein": ["Vaduz", "Schaan", "Triesen", "Balzers", "Eschen", "Mauren", "Triesenberg", "Ruggell", "Gamprin", "Schellenberg"],
  "Lithuania": ["Vilnius", "Kaunas", "Klaipeda", "Siauliai", "Panevezys", "Alytus", "Marijampole", "Mazeikiai", "Jonava", "Utena"],
  "Luxembourg": ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Grevenmacher"],
  "North Macedonia": ["Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo", "Veles", "Ohrid", "Gostivar", "Strumica", "Kavadarci"],
  "Madagascar": ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Antanifotsy", "Ambovombe", "Ambilobe"],
  "Malawi": ["Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Kasungu", "Mangochi", "Karonga", "Salima", "Nkhotakota", "Liwonde"],
  "Malaysia": ["Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya", "Johor Bahru", "Kota Kinabalu", "Melaka", "Alor Setar", "Kuching"],
  "Maldives": ["Malé", "Addu City", "Fuvahmulah", "Hithadhoo", "Kulhudhuffushi", "Thinadhoo", "Naifaru", "Dhidhdhoo", "Eydhafushi", "Mahibadhoo"],
  "Mali": ["Bamako", "Sikasso", "Mopti", "Koutiala", "Kayes", "Segou", "Gao", "Markala", "Kolokani", "Kati"],
  "Malta": ["Valletta", "Birkirkara", "Mosta", "Qormi", "Zabbar", "Fgura", "Sliema", "Gzira", "San Gwann", "Hamrun"],
  "Marshall Islands": ["Majuro", "Kwajalein", "Arno", "Jabat", "Wotje", "Mile", "Ebon", "Ailuk", "Namorik", "Maloelap"],
  "Mauritania": ["Nouakchott", "Nouadhibou", "Zouerate", "Kiffa", "Bogue", "Rosso", "Adel Bagrou", "Akjoujt", "Atar", "Boutilimit"],
  "Mauritius": ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe", "Quatre Bornes", "Triolet", "Goodlands", "Centre de Flacq", "Bel Air Riviere Seche", "Mahebourg"],
  "Mexico": ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Toluca", "Tijuana", "Leon", "Juarez", "Torreon", "Queretaro"],
  "Micronesia": ["Palikir", "Weno", "Colonia", "Tofol", "Palikir", "Tofol", "Nanpohnmal", "Colonia", "Colonia", "Colonia"],
  "Moldova": ["Chisinau", "Tiraspol", "Balti", "Bender", "Ribnita", "Cahul", "Ungheni", "Soroca", "Orhei", "Dubasari"],
  "Monaco": ["Monaco", "Monte Carlo", "La Condamine", "Fontvieille", "Moneghetti", "Les Revoires", "Larvotto", "Saint-Roman", "La Rousse", "Saint Michel"],
  "Mongolia": ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan", "Khovd", "Mörön", "Ölgii", "Ulaangom", "Hovd", "Zuunmod"],
  "Montenegro": ["Podgorica", "Niksic", "Herceg Novi", "Bar", "Budva", "Cetinje", "Pljevlja", "Ulcinj", "Berane", "Tivat"],
  "Morocco": ["Casablanca", "Rabat", "Fes", "Marrakech", "Agadir", "Tangier", "Meknes", "Oujda", "Kenitra", "Tetouan"],
  "Mozambique": ["Maputo", "Matola", "Beira", "Nampula", "Chimoio", "Nacala", "Quelimane", "Tete", "Xai-Xai", "Maxixe"],
  "Myanmar (Burma)": ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Taunggyi", "Myitkyina", "Bago", "Pathein", "Monywa", "Meiktila"],
  "Namibia": ["Windhoek", "Rundu", "Walvis Bay", "Swakopmund", "Oshakati", "Katima Mulilo", "Grootfontein", "Rehoboth", "Otjiwarongo", "Okahandja"],
  "Nauru": ["Yaren", "Denigomodu", "Meneng", "Baiti", "Buada", "Anabar", "Ijuw", "Anibare", "Ewa", "Uaboe"],
  "Nepal": ["Kathmandu", "Pokhara", "Patan", "Biratnagar", "Birganj", "Dharan", "Bharatpur", "Janakpur", "Butwal", "Itahari"],
  "Netherlands": ["Amsterdam", "Lisse","Zaanse", "Schans", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen"],
  "New Zealand": ["Auckland", "Wellington","Christchurch","Mount Cook","Queenstown","Wanaka","Waitomo","Franz Josef", "Christchurch","Matamata", "Hamilton", "Tauranga", "Napier-Hastings", "Dunedin", "Palmerston North", "Nelson", "Rotorua"],
  "Nicaragua": ["Managua", "Leon", "Masaya", "Matagalpa", "Chinandega", "Esteli", "Granada", "Ciudad Sandino", "Juigalpa", "El Viejo"],
  "Niger": ["Niamey", "Zinder", "Maradi", "Agadez", "Alaghsas", "Tahoua", "Dosso", "Birni N Konni", "Tessaoua", "Gaya"],
  "Nigeria": ["Lagos", "Kano", "Ibadan", "Kaduna", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba", "Jos"],
  "Norway": ["Oslo", "Bergen", "Stavanger", "Trondheim", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromso", "Sarpsborg"],
  "Oman": ["Muscat", "Seeb", "Salalah", "Bawshar", "Sohar", "Suwayq", "Ibri", "Saham", "Barka", "Rustaq"],
  "Pakistan": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Islamabad", "Quetta", "Sialkot", "Bahawalpur"],
  "Palau": ["Melekeok", "Koror", "Airai", "Koror", "Ngerulmud", "Babeldaob", "Ngebel", "Ngardmau", "Koror", "Melekeok"],
  "Panama": ["Panama City", "San Miguelito", "Tocumen", "David", "Arraijan", "Colon", "Las Cumbres", "La Chorrera", "Pacora", "Santiago"],
  "Papua New Guinea": ["Port Moresby", "Lae", "Arawa", "Mount Hagen", "Popayan", "Madang", "Moramanga", "Wewak", "Goroka", "Wewak"],
  "Paraguay": ["Asuncion", "San Lorenzo", "Capiata", "Lambare", "Fernando de la Mora", "Luque", "Ciudad del Este", "San Antonio", "Pedro Juan Caballero", "Itaugua"],
  "Peru": ["Lima", "Arequipa", "Callao", "Trujillo", "Chiclayo", "Iquitos", "Huancayo", "Piura", "Chimbote", "Cusco"],
  "Philippines": ["Quezon City", "Manila", "Caloocan", "Budta", "Davao City", "Malingao", "Cebu City", "General Santos", "Taguig", "Pasig City"],
  "Poland": ["Warsaw", "Krakow", "Lodz", "Wroclaw", "Poznan", "Gdansk", "Szczecin", "Bydgoszcz", "Lublin", "Katowice"],
  "Portugal": ["Lisbon", "Oeiras", "Amadora", "Braga", "Setubal", "Coimbra", "Queluz", "Funchal", "Cacem", "Vila Nova de Gaia"],
  "Qatar": ["Doha", "Ar Rayyan", "Umm Salal Muhammad", "Al Wakrah", "Al Khor", "Ash Shahaniyah", "Dukhan", "Musay'id", "Madinat ash Shamal", "Al Wukayr"],
  "Romania": ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Craiova", "Constanta", "Galati", "Brasov", "Ploiesti", "Oradea"],
  "Russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don"],
  "Rwanda": ["Kigali", "Butare", "Gitarama", "Ruhengeri", "Gisenyi", "Byumba", "Cyangugu", "Kibuye", "Rwamagana", "Kibungo"],
  "Saint Kitts and Nevis": ["Basseterre", "Sandy Point Town", "Charlestown", "Dieppe Bay Town", "Half Way Tree", "Cayon", "Saint Paul’s", "Middle Island", "Nichola Town", "Gingerland"],
  "Saint Lucia": ["Castries", "Bisee", "Vieux Fort", "Micoud", "Soufriere", "Dennery", "Gros Islet", "Anse La Raye", "Canaries", "Castries"],
  "Saint Vincent and the Grenadines": ["Kingstown", "Kingstown Park", "Georgetown", "Byera Village", "Biabou", "Port Elizabeth", "Chateaubelair", "Dovers", "Barrouallie", "Port Elizabeth"],
  "Samoa": ["Apia", "Vaitele", "Faleula", "Siusega", "Malie", "Fasitoouta", "Safotulafai", "Lufilufi", "Safotu", "Leulumoega"],
  "San Marino": ["San Marino", "Serravalle", "Borgo Maggiore", "Domagnano", "San Giovanni", "Fiorentino", "Acquaviva", "Faetano", "Poggio di Chiesanuova", "Montegiardino"],
  "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Sulaymaniyah", "Dammam", "Taif", "Tabuk", "Buraidah", "Khamis Mushait"],
  "Senegal": ["Dakar", "Grand Dakar", "Thies Nones", "Saint-Louis", "Ziguinchor", "Touba", "Kaolack", "Tiébo", "Rufisque", "Fatick"],
  "Serbia": ["Belgrade", "Novi Sad", "Nis", "Zemun", "Kragujevac", "Cacak", "Subotica", "Leskovac", "Pancevo", "Kraljevo"],
  "Seychelles": ["Victoria", "Anse Boileau", "Beau Vallon", "Takamaka", "Anse Royale", "Cascade", "Bel Ombre", "Port Glaud", "Victoria", "Grand Anse Mahe"],
  "Sierra Leone": ["Freetown", "Bo", "Kenema", "Koidu", "Makeni", "Lunsar", "Port Loko", "Kabala", "Segbwema", "Magburaka"],
  "Singapore": ["Singapore", "Woodlands", "Tampines", "Jurong West", "Ang Mo Kio", "Bishan", "Hougang", "Yishun", "Choa Chu Kang", "Toa Payoh"],
  "Slovakia": ["Bratislava", "Kosice", "Presov", "Nitra", "Zilina", "Banska Bystrica", "Trnava", "Martin", "Trencin", "Poprad"],
  "Slovenia": ["Ljubljana", "Maribor", "Celje", "Kranj", "Velenje", "Koper", "Novo Mesto", "Ptuj", "Trbovlje", "Kamnik"],
  "Solomon Islands": ["Honiara", "Lungga", "Victoria", "Gizo", "Auki", "Noro", "Munda", "Tulagi", "Kirakira", "Lata"],
  "Somalia": ["Mogadishu", "Hargeisa", "Berbera", "Kismayo", "Marka", "Baidoa", "Bosaso", "Erigavo", "Gaalkacyo", "Jamaame"],
  "South Africa": ["Johannesburg", "Cape Town","Oudtshoorn","Knysna","Kruger National Park", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "Soweto", "East London", "Newcastle", "Krugersdorp"],
  "South Sudan": ["Juba", "Wau", "Malakal", "Nimule", "Yei", "Aweil", "Gogrial", "Rumbek", "Bor", "Torit"],
  "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas de Gran Canaria", "Bilbao"],
  "Sri Lanka": ["Colombo", "Dehiwala-Mount Lavinia", "Moratuwa", "Jaffna", "Negombo", "Pita Kotte", "Sri Jayewardenepura Kotte", "Kandy", "Trincomalee", "Kalmunai"],
  "Sudan": ["Khartoum", "Omdurman", "Port Sudan", "Kassala", "El Obeid", "Kosti", "Wad Medani", "El Fasher", "Ad-Damazin", "Geneina"],
  "Suriname": ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo", "Nieuw Amsterdam", "Marienburg", "Wageningen", "Albina", "Groningen", "Brownsweg"],
  "Swaziland": ["Mbabane", "Manzini", "Big Bend", "Malkerns", "Mhlume", "Hluti", "Siteki", "Piggs Peak", "Lobamba", "Lavumisa"],
  "Sweden": ["Stockholm", "Gothenburg", "Malmo", "Uppsala", "Vasteras", "Orebro", "Linkoping", "Helsingborg", "Jonkoping", "Norrkoping"],
  "Switzerland": ["Zurich", "Geneva", "Basel", "Bern", "Lausanne", "Lucerne", "St. Gallen", "Lugano", "Biel", "Thun"],
  "Syria": ["Damascus", "Aleppo", "Homs", "Hama", "Latakia", "Palmyra", "Deir ez-Zor", "Raqqa", "Idlib", "Daraa"],
  "Taiwan": ["Taipei", "Kaohsiung", "Taichung", "Tainan", "Banqiao", "Hsinchu", "Taoyuan City", "Keelung", "Chiayi", "Taitung City"],
  "Tajikistan": ["Dushanbe", "Khujand", "Kulob", "Qurghonteppa", "Istaravshan", "Vahdat", "Konibodom", "Tursunzoda", "Isfara", "Panjakent"],
  "Tanzania": ["Dar es Salaam", "Dodoma", "Mwanza", "Zanzibar City", "Arusha", "Mbeya", "Morogoro", "Tanga", "Dodoma", "Kigoma"],
  "Thailand": ["Pattaya", "Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret", "Khon Kaen", "Ubon Ratchathani", "Nakhon Pathom"],
  "Togo": ["Lome", "Sokode", "Kara", "Palime", "Atakpame", "Bassar", "Tsevie", "Aneho", "Sansanne-Mango", "Dapaong"],
  "Tonga": ["Nuku'alofa", "Neiafu", "Haveluliku", "Pangai", "Leimatu'a", "Niuatoputapu", "Fonoti", "Lapaha", "Ohonua", "`Eva Beach"],
  "Trinidad and Tobago": ["Port of Spain", "Chaguanas", "San Fernando", "Arima", "Point Fortin", "Tunapuna", "Scarborough", "Sangre Grande", "Penal", "Princes Town"],
  "Tunisia": ["Tunis", "Sfax", "Sousse", "Ettadhamen", "Kairouan", "Bizerte", "Gabes", "Aryanah", "Gafsa", "El Mourouj"],
  "Turkey": ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Eskisehir", "Diyarbakir"],
  "Turkmenistan": ["Ashgabat", "Turkmenabat", "Dashoguz", "Mary", "Balkanabat", "Bayramaly", "Turkmenbasy", "Tejen", "Buzmeyin", "Kaka"],
  "Tuvalu": ["Funafuti", "Asau", "Nanumea", "Nui", "Nukufetau", "Nukulaelae", "Vaitupu", "Niutao", "Nanumanga", "Nui"],
  "Uganda": ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja", "Bwizibwera", "Mbale", "Mukono", "Kasese", "Masaka"],
  "Ukraine": ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol"],
  "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al-Quwain", "Khor Fakkan", "Dibba Al-Fujairah"],
  "United Kingdom": ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Newcastle upon Tyne", "Sheffield", "Bristol", "Leeds", "Edinburgh"],
  "United States": ["New York City", "Washington Dc", "Hershey, PA", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Buffalo/Niagara Falls", "Las Vegas", "Grand Canyon", "San Francisco", "Orlando", "Miami"],
  "Uruguay": ["Montevideo", "Salto", "Cordoba", "Maldonado", "Rivera", "Paysandu", "Las Piedras", "Tacuarembo", "Melon", "Mercedes"],
  "Uzbekistan": ["Tashkent", "Namangan", "Samarkand", "Andijan", "Bukhara", "Nukus", "Qarshi", "Fergana", "Jizzakh", "Urganch"],
  "Vanuatu": ["Port-Vila", "Luganville", "Norsup", "Port-Olry", "Isangel", "Sola", "Lakatoro", "Saratamata", "Banban", "Longana"],
  "Vatican City": ["Vatican City"],
  "Venezuela": ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Ciudad Guayana", "Barcelona", "Maturin", "Maracay", "Petare", "Turmero"],
  "Vietnam": ["Halong Bay", "Ho Chi Minh City", "Hanoi", "Haiphong", "Can Tho", "Bien Hoa", "Hue", "Nha Trang", "Da Nang", "Buon Ma Thuot", "Hai Phong"],
  "Yemen": ["Sanaa", "Al Hudaydah", "Taiz", "Aden", "Ibb", "Hargeisa", "Sayyan", "Zabid", "Ash Shihr", "Sahar"],
  "Zambia": ["Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola", "Mufulira", "Luanshya", "Livingstone", "Kasama", "Chipata"],
  "Zimbabwe": ["Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Epworth", "Kwekwe", "Kadoma", "Masvingo", "Chinhoyi"]
}

export const formatDate = (inputDate) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const date = new Date(inputDate, "");
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const formatDateToString = (inputDate) => {
  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  const dateParts = inputDate.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Months are zero-based in JavaScript
  const day = parseInt(dateParts[2]);

  const formattedDate = new Date(year, month, day);

  const dayOfWeek = daysOfWeek[formattedDate.getDay()];
  const dayOfMonth = formattedDate.getDate();
  const monthName = formattedDate.toLocaleString('default', { month: 'long' });

  return `${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`;
}



