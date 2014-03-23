var photos = [];

for (var i = 1; i <75; i++) {
	var currentPhoto = {
		url: "img/" + i + ".jpeg",
		where: "TBC",
		latlong: [-35.290328,149.117965],
		title: "photo " + i
	}
	photos.push(currentPhoto);
};

function setPhoto (num, label, place, geolocation) {
	var i = num - 1;
	photos[i].title = label;
	photos[i].where = place;
	photos[i].latlong = geolocation;
}

// this is how you label and place a photo:
// number, label, place, geolocation
setPhoto(1, "Al Alam Palace", "Oman", [23.2159086,58.59469]);
setPhoto(2, "Kalbuh Park, Muscat, Oman", "Oman", [23.6234795,58.5856329]);
setPhoto(3, "Sultan Qaboos Grand Mosque", "Oman", [23.5838801,58.3885621]);
setPhoto(4, "Muscat, Oman", "Oman", [23.61000,58.54000]);
setPhoto(5, "Suwadi Al Batha, Oman", "Oman", [23.7745163,57.7828305]);
setPhoto(6, "Ibra", "Oman", [22.72719,58.524040]);
setPhoto(7, "Wahiba Sands, Oman", "Oman", [21.4377736,58.5543821]);
setPhoto(8, "Jebel Shams, Oman", "Oman", [23.2369444,57.2638888]);
setPhoto(9, "Bimma, Oman", "Oman", [22.9887905,59.1371861]);
setPhoto(10, "Jebel Shams, Oman", "Oman", [23.2369444,57.2638888]);
setPhoto(11, "Auckland, New Zealand", "New Zealand", [-36.842042,174.76515]);
setPhoto(12, "Sky Tower, Auckland", "New Zealand", [-36.848684,174.761967]);
setPhoto(13, "Waitemata Harbour", "New Zealand", [-36.836889,174.775340]);
setPhoto(14, "Auckland Harbour Bridge", "New Zealand", [-36.8308764,174.7454829]);
setPhoto(15, "Westhaven Marina", "New Zealand", [-36.838057,174.753785]);
setPhoto(16, "Kauaeranga Valley, Coromandel", "New Zealand", [-37.0929171,175.64280987]);
setPhoto(17, "Coromandel", "New Zealand", [-36.722689,175.728734]);
setPhoto(18, "Cathedral Cove", "New Zealand", [-36.827728,175.7900487]);
setPhoto(19, "Rotarua Museum", "New Zealand", [-38.135589,176.258200]);
setPhoto(20, "Government Gardens, Rotarua", "New Zealand", [-38.135589,176.258200]);
setPhoto(21, "Kaituna River", "New Zealand", [-38.007584,176.342153]);
setPhoto(22, "Torrent Bay", "New Zealand", [-40.949268,173.049603]);
setPhoto(23, "Pancake Rocks", "New Zealand", [-42.114158,171.326802]);
setPhoto(24, "Franz Josef Glacier", "New Zealand", [-43.453686,170.180403]);
setPhoto(25, "Roys Peak, Wanaka", "New Zealand", [-44.697795,169.050401]);
setPhoto(26, "Coronet Peak, Queenstown", "New Zealand", [-44.928582,168.735706]);
setPhoto(27, "Milford Sound", "New Zealand", [-44.662266,167.915707]);
setPhoto(28, "Oamaru", "New Zealand", [-45.109400,170.976821]);
setPhoto(29, "Kaikoura","New Zealand", [-42.450027,173.665315]);
setPhoto(30, "Cape Reinga", "New Zealand", [-34.426728,172.677549]);
setPhoto(31, "Sydney Opera House", "Australia", [-33.857510,157.215071]);
setPhoto(32, "Sydney Harbour Bridge", "Australia", [-33.851543,151.211194]);
setPhoto(33, "Hyde Park", "Australia", [-33.870993,151.212121]);
setPhoto(34, "Bundeena Bay", "Australia", [-34.081015,151.156221]);
setPhoto(35, "Sydney Harbour", "Australia", [-33.862186,151.253905]);
setPhoto(36, "Port Stephens, NSW", "Australia", [-32.777777,152.109999]);
setPhoto(37, "Mount Tomaree Lookout", "Australia", [-32.716859,152.186814]);
setPhoto(38, "Birubi Point", "Australia", [-32.779544,152.062555]);
setPhoto(39, "Birubi Point", "Australia", [-32.779544,152.062555]);
setPhoto(40, "Anzac War Memorial, Sydney", "Australia", [-33.875722,151.210877]);
setPhoto(41, "Circular Quay - Vivid Sydney", "Australia", [-33.861632, 151.210269]);
setPhoto(42, "Sydney CBD", "Australia", [-33.856286, 151.212887]);
setPhoto(43, "Federation Square, Melbourne", "Australia", [-37.817125, 144.969123]);
setPhoto(44, "Graffiti Lane, Melbourne", "Australia", [-37.814900, 144.964879]);
setPhoto(45, "Melbourne CBD", "Australia", [-37.814764, 144.963374]);
setPhoto(46, "Luna Park, Melbourne", "Australia", [-37.867139, 144.976820]);
setPhoto(47, "Melbourne", "Australia", [-37.863855, 144.971070]);
setPhoto(48, "", "Australia", [0, 0]);
setPhoto(49, "Parliament, Canberra", "Australia", [-35.307989, 149.124552]);
setPhoto(50, "Parliament, Canberra", "Australia", [-35.307989, 149.124552]);
setPhoto(51, "", "Australia", [0, 0]);
setPhoto(52, "Royal National Park", "Australia", [-34.137129, 151.114685]);
setPhoto(53, "Royal National Park", "Australia", [-34.137249, 151.114822]);
setPhoto(54, "Royal National Park", "Australia", [-34.137575, 151.115420]);
setPhoto(55, "Royal National Park", "Australia", [-34.168876, 151.070204]);
setPhoto(56, "Featherdale Wildlife Park", "Australia", [-33.766662, 150.884207]);
setPhoto(57, "Featherdale Wildlife Park", "Australia", [-33.766662, 150.884207]);
setPhoto(58, "Featherdale Wildlife Park", "Australia", [-33.766662, 150.884207]);
setPhoto(59, "Featherdale Wildlife Park", "Australia", [-33.766662, 150.884207]);
setPhoto(60, "Auckland Airport", "New Zealand", [-37.005780, 174.782378]);
setPhoto(61, "Monkey Forest, Ubud, Bali", "Indonesia", [-8.518260, 115.258854]);
setPhoto(62, "Monkey Forest, Ubud, Bali", "Indonesia", [-8.518260, 115.258854]);
setPhoto(63, "Monkey Forest, Ubud, Bali", "Indonesia", [-8.518260, 115.258854]);
setPhoto(64, "Monkey Forest, Ubud, Bali", "Indonesia", [-8.518260, 115.258854]);
setPhoto(65, "Ubud, Bali", "Indonesia", [-8.515278, 115.260325]);
setPhoto(66, "Sebatu, Bali", "Indonesia", [-8.392334, 115.295561]);
setPhoto(67, "Sebatu, Bali", "Indonesia", [-8.392334, 115.295561]);
setPhoto(68, "Tirta Gangga, Water Palace", "Indonesia", [-8.424125, 115.593323]);
setPhoto(69, "Gili Air", "Indonesia", [-8.354811, 116.087158]);
setPhoto(70, "Gili Air", "Indonesia", [-8.361787, 116.087371]);
setPhoto(71, "Gili Air", "Indonesia", [-8.354811, 116.087158]);
setPhoto(72, "Gili Air", "Indonesia", [-8.361787, 116.087371]);
setPhoto(73, "Gili Air", "Indonesia", [-8.363770, 116.083507]);
setPhoto(74, "Gili Air", "Indonesia", [-8.363770, 116.083507]);