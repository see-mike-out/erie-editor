import { get, writable } from "svelte/store";

export let cites = {
	"sonification:zhao2008": {
		index: 61,
		title: "Data Sonification for Users with Visual Impairment: A Case Study with Georeferenced Data",
		author: "Zhao, Haixia and Plaisant, Catherine and Shneiderman, Ben and Lazar, Jonathan",
		year: 2008,
		journal: "ACM Trans. Comput.-Hum. Interact.",
		publisher: "ACM",
		volume: 15,
		number: 1,
		doi: "10.1145/1352782.1352786",
		issn: "1073-0516"
	}
	, "audioNarrative:siu2022": {
		index: 45,
		title: "Supporting Accessible Data Visualization Through Audio Data Narratives",
		author: "Siu, Alexa and S-H Kim, Gene and O'Modhrain, Sile and Follmer, Sean",
		year: 2022,
		booktitle: "Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems",
		location: "New Orleans, LA, USA",
		publisher: "ACM",
		series: "CHI '22",
		doi: "10.1145/3491102.3517678"
	}
	, "nonVisual:choi2019": {
		title: "Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization",
		author: "Choi, Jinho and Jung, Sanghun and Park, Deok Gun and Choo, Jaegul and Elmqvist, Niklas",
		year: 2019,
		journal: "Computer Graphics Forum",
		volume: 38,
		number: 3,
		pages: "249--260",
		doi: "10.1111/cgf.13686"
	}
	, "iGraphLite:ferres2013": {
		index: 21,
		title: "Evaluating a Tool for Improving Accessibility to Charts and Graphs",
		author: "Ferres, Leo and Lindgaard, Gitte and Sumegi, Livia and Tsuji, Bruce",
		year: 2013,
		journal: "ACM Trans. Comput.-Hum. Interact.",
		publisher: "ACM",
		volume: 20,
		number: 5,
		doi: "10.1145/2533682.2533683"
	}
	, "wang2022:intuitiveness": {
		index: 56,
		title: "Seeing Through Sounds: Mapping Auditory Dimensions to Data and Charts for People with Visual Impairments",
		author: "Wang, R. and Jung, C. and Kim, Y.",
		year: 2022,
		journal: "Computer Graphics Forum",
		volume: 41,
		number: 3,
		pages: "71--83",
		doi: "https://doi.org/10.1111/cgf.14523"
	}
	, "hoque2023:naturalsound": {
		index: 25,
		title: "Accessible Data Representation with Natural Sound",
		author: "Hoque, Md Naimul and Ehtesham-Ul-Haque, Md and Elmqvist, Niklas and Billah, Syed Masum",
		year: 2023,
		booktitle: "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
		location: "Hamburg, Germany",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		series: "CHI '23",
		doi: "10.1145/3544548.3581087",
		articleno: 826
	}
	, "thompson2023:chartreader": {
		index: 47,
		title: "Chart Reader: Accessible Visualization Experiences Designed with Screen Reader Users",
		author: "Thompson, John R and Martinez, Jesse J and Sarikaya, Alper and Cutrell, Edward and Lee, Bongshin",
		year: 2023,
		booktitle: "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems",
		location: "Hamburg, Germany",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		series: "CHI '23",
		doi: "10.1145/3544548.3581186",
		articleno: 802
	}
	, "walker2003:sandbox": {
		index: 53,
		title: "Sonification Sandbox: A Graphical Toolkit for Auditory Graphs",
		author: "Walker, Bruce N. and Cothran, Joshua T.",
		year: 2003,
		booktitle: "Proceedings of the 2003 International Conference on Auditory Display",
		location: "Boston, MA, USA",
		publisher: "ICAD",
		series: "ICAD '03",
		pages: "161-163"
	}
	, "hermann2008:taxonomy": {
		index: 24,
		title: "Taxonomy and definitions for sonification and auditory display",
		author: "Hermann, Thomas",
		year: 2008,
		booktitle: "Proceedings of the 2008 International Conference on Auditory Display",
		location: "Paris, France",
		publisher: "ICAD",
		series: "ICAD '08",
		pages: "1-8"
	}
	, "kramer1997:sonification": {
		index: 28,
		title: "Sonification report: Status of the field and research agenda",
		author: "Kramer, Gregory and Walker, Bruce and Bonebright, Terri and Cook, Perry and Flowers, John H and Miner, Nadine and Neuhoff, John",
		year: 1997,
		note: "Report prepared for the National Science Foundation"
	}
	, "scaletti1994:sound": {
		index: 41,
		title: "Sound synthesis algorithms for auditory data representations",
		author: "Scaletti, Carla",
		year: 1994,
		booktitle: "Auditory Display, Sonification: Audification, and Auditory INterfaces",
		pages: "223--251",
		editor: "Kramer, Gregory",
		organization: "Addison-Wesley Publishing Company"
	}
	, "walker2021:highchart": {
		index: 14,
		title: "Highcharts Sonification Studio: An Online, Open-source, extensible, and Accessible Data Sonification Tool",
		author: "Cantrell, Stanley J. and Walker, Bruce N. and Moseng, Øystein",
		year: 2021,
		booktitle: "Proceedings of the 2021 International Conference on Auditory Display",
		publisher: "ICAD",
		series: "ICAD '21",
		pages: "211-216",
		doi: "10.21785/icad2021.005"
	}
	, "playitbyr": {
		index: 11,
		title: "Play It By R",
		author: "Brown, Ethan",
		year: 2011,
		note: `Last accessed July 20, 2023. <a href="http://playitbyr.org/gettingstarted.html" target="_blank">http://playitbyr.org/gettingstarted.html</a>`
	}
	, "datagoboop": {
		index: 42,
		title: "DataGoBoop",
		author: "Seong, Arnold and Seo, Joonyoung",
		year: "2020",
		note: `Last accessed July 20, 2023. <a href="https://github.com/akseong/datagoboop" target="_blank">https://github.com/akseong/datagoboop</a>`
	}
	, "sonifier": {
		index: 43,
		title: "Sonifer.JS",
		author: "Sharif, Ather",
		year: "2022",
		note: `Last accessed July 20, 2023. <a href="https://github.com/athersharif/sonifier" target="_blank">https://github.com/athersharif/sonifier</a>`
	}
	, "tonejs": {
		index: 3,
		title: "Tone.JS",
		year: "n.d.",
		note: `Last accessed Sep 12, 2023. <a href="https://tonejs.github.io/" target="_blank">https://tonejs.github.io/</a>`
	}
	, "joyner2022:challenge": {
		index: 26,
		title: "Visualization Accessibility in the Wild: Challenges Faced by Visualization Designers",
		author: "Joyner, Shakila Cherise S and Riegelhuth, Amalia and Garrity, Kathleen and Kim, Yea-Seul and Kim, Nam Wook",
		year: 2022,
		booktitle: "Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		series: "CHI '22",
		doi: "10.1145/3491102.3517630",
		articleno: 83
	}
	, "dubus2013:review": {
		index: 19,
		title: "A Systematic Review of Mapping Strategies for the Sonification of Physical Quantities",
		author: "Dubus, Gaël AND Bresin, Roberto",
		year: 2013,
		month: 12,
		journal: "PLOS ONE",
		publisher: "Public Library of Science",
		volume: 8,
		number: 12,
		pages: "1--28",
		doi: "10.1371/journal.pone.0082491"
	}

	, "walker2002:magnitude": {
		index: 51,
		title: "Magnitude estimation of conceptual data dimensions for use in sonification.",
		author: "Walker, Bruce N",
		year: 2002,
		journal: "Journal of experimental psychology: Applied",
		publisher: "American Psychological Association",
		volume: 8,
		number: 4,
		pages: 211
	}
	, "walker2007:consistency": {
		index: 52,
		title: "Consistency of magnitude estimations with conceptual data dimensions used for sonification",
		author: "Walker, Bruce N",
		year: 2007,
		journal: "Applied Cognitive Psychology: The Official Journal of the Society for Applied Research in Memory and Cognition",
		publisher: "Wiley Online Library",
		volume: 21,
		number: 5,
		pages: "579--599"
	}

	, "walker2010:universal": {
		index: 55,
		title: "Universal Design of Auditory Graphs: A Comparison of Sonification Mappings for Visually Impaired and Sighted Listeners",
		author: "Walker, B. N. and Mauney, L. M.",
		year: 2010,
		month: "mar",
		journal: "ACM Trans. Access. Comput.",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		volume: 2,
		number: 3,
		doi: "10.1145/1714458.1714459",
		articleno: 12
	}
	, "audibleSpectrum": {
		index: 37,
		title: "The Audible Spectrum",
		year: 2001,
		booktitle: "Neuroscience",
		publisher: "Sinauer Associates",
		note: `<a href="https://www.ncbi.nlm.nih.gov/books/NBK10924/" target="_blank">https://www.ncbi.nlm.nih.gov/books/NBK10924/</a>`,
		author: "Purves, Dale and Augustine, George J. and Fitzpatrick, David and Katz, Lawrence C. and LaMantia, Anthony-Samuel and McNamara, James O. and Williams, S. Mark",
		edition: "2nd"
	}
	, "agarwal:sonify": {
		index: 4,
		title: "Sonify",
		author: "Agarwal, Monali and Alfieri, Felicia and Ali, Safinah and Jorgensen, Jacob and Muralidharan, Laya",
		year: "n.d.",
		note: `<a href="https://hcii.cmu.edu/mhci/capstone/2016/bloomberg/index.html" target="_blank">https://hcii.cmu.edu/mhci/capstone/2016/bloomberg/index.html</a>`
	}
	, "apple:audioGraph": {
		index: 6,
		title: "Audio Graph --- Apple Developer Documentation",
		author: "Apple Inc.",
		year: "n.d.",
		note: `<a href="https://developer.apple.com/documentation/accessibility/audio_graphs" target="_blank">https://developer.apple.com/documentation/accessibility/audio_graphs</a>`
	}
	, "sharif2022:sonifier": {
		index: 44,
		title: "“What Makes Sonification User-Friendly?” Exploring Usability and User-Friendliness of Sonified Responses",
		author: "Sharif, Ather and Wang, Olivia H. and Muongchan, Alida T.",
		year: 2022,
		booktitle: "Proceedings of the 24th International ACM SIGACCESS Conference on Computers and Accessibility",
		location: "Athens, Greece",
		publisher: "Association for Computing Machinery",
		address: "New York, NY, USA",
		series: "ASSETS '22",
		doi: "10.1145/3517428.3550360",
		articleno: 45
	}
	, "wickham:ggplot22010": {
		index: 57,
		title: "A Layered Grammar of Graphics",
		author: "Hadley Wickham",
		year: 2010,
		journal: "Journal of Computational and Graphical Statistics",
		publisher: "American Statistical Association, Taylor & Francis, Ltd., Institute of Mathematical Statistics, Interface Foundation of America",
		volume: 19,
		number: 1,
		pages: "3--28",
		doi: "10.1198/jcgs.2009.07098",
		url: "http://www.jstor.org/stable/25651297"
	}
	, "satyanarayan:vega-lite2017": {
		index: 39,
		title: "Vega-Lite: A Grammar of Interactive Graphics",
		author: "Arvind Satyanarayan AND Dominik Moritz AND Kanit Wongsuphasawat AND Jeffrey Heer",
		year: 2017,
		journal: "IEEE Trans. Visualization & Comp. Graphics (Proc. InfoVis)",
		url: "https://doi.org/10.1109/TVCG.2016.2599030"
	}
	, "satyanarayan:vega2016": {
		index: 40,
		title: "Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization",
		author: "Arvind Satyanarayan AND Ryan Russell AND Jane Hoffswell AND Jeffrey Heer",
		year: 2016,
		booktitle: "IEEE Trans. Visualization & Comp. Graphics (Proc. InfoVis '15)",
		url: "https://doi.org/10.1109/TVCG.2015.2467091"
	}
	, "wilkinson:2012grammar": {
		index: 59,
		title: "The grammar of graphics",
		author: "Wilkinson, Leland",
		year: 2012,
		publisher: "Springer"
	},
	"brms": {
		title: "brms 2.19.0",
		author: "Bürkner, Paul-Christian and Gabry, Jonah and Weber, Sebastian and Johnson, Andrew and Modrak, Martin and Badr, Hamada S. and Weber, Frank and Ben-Shachar, Mattan S. and Rabel, Hayden and Mills, Simon C. and Wild, Stephen",
		year: 2023,
		note: `<a href="https://cloud.r-project.org/web/packages/brms/index.html" target="_blank">https://cloud.r-project.org/web/packages/brms/index.html</a>`
	}
	, "Satyanarayan:lyra2014": {
		title: "Lyra: An Interactive Visualization Design Environment",
		author: "Satyanarayan, Arvind and Heer, Jeffrey",
		year: 2014,
		journal: "Computer Graphics Forum",
		volume: 33,
		number: 3,
		pages: "351--360",
		doi: "10.1111/cgf.12391"
	}
	, "supper2014:sublime": {
		index: 46,
		title: "Sublime frequencies: The construction of sublime listening experiences in          the sonification of scientific data",
		author: "Alexandra Supper",
		year: 2014,
		journal: "Social Studies of Science",
		volume: 44,
		number: 1,
		pages: "34--58",
		doi: "10.1177/0306312713496875"
	}
	, "bostock:d32011": {
		index: 10,
		title: "D³ Data-Driven Documents",
		author: "Michael Bostock and Vadim Ogievetsky and Jeffrey Heer",
		year: 2011,
		journal: "IEEE Trans. Visual Comput. Graphics",
		volume: "17",
		number: "12",
		pages: "2301-2309",
		numpages: "9",
		doi: "10.1109/TVCG.2011.185"
	}
	, "john1999:lifemusic": {
		index: 20,
		title: "Life Music: The Sonification of Proteins",
		author: "Dunn, John and Clark, Mary Anne",
		year: 1999,
		month: "02",
		journal: "Leonardo",
		volume: 32,
		number: 1,
		pages: "25--32",
		doi: "10.1162/002409499552966"
	}
	, "ghosh2010:particle": {
		index: 22,
		title: "God particle signal is simulated as sound",
		author: "Ghosh, Pallab",
		year: 2010,
		publisher: "BBC News",
		note: `Last accessed Aug 2, 2023. <a href="https://www.bbc.co.uk/news/10385675" target="_blank">https://www.bbc.co.uk/news/10385675</a>`
	}
	, "andrea2005:meteorology": {
		index: 35,
		title: "Atmospherics/Weather Works: A Spatialized Meteorological Data Sonification Project",
		author: "Polli, Andrea",
		year: 2005,
		month: "02",
		journal: "Leonardo",
		volume: 38,
		number: 1,
		pages: "31--36",
		doi: "10.1162/leon.2005.38.1.31"
	}
	, "sonificationArt": {
		index: 50,
		title: "Sonification Art",
		author: "Van Ransbeeck, Samuel",
		year: "n.d.",
		note: `Last accessed Aug 2, 2023 <a href="https://sonificationart.wordpress.com/" target="_blank">https://sonificationart.wordpress.com/</a>`
	}
	, "dini2023:museum": {
		index: 17,
		title: "Translating Color: Sonification as a Method of Sensory Substitution within the Museum",
		author: "Dini, Slivia and Ludovico, Luca Andrea and Mascetti, Sergio and Valero Gisbert, Maria Joaquina",
		year: 2023,
		booktitle: "Proceedings of the 20th International Web for All Conference",
		publisher: "Association for Computing Machinery",
		series: "W4A '23",
		pages: "162–163",
		doi: "10.1145/3587281.3587706"
	}
	, "walker2006aquarium": {
		index: 54,
		title: "Aquarium sonification: Soundscapes for accessible dynamic informal learning environments",
		author: "Walker, Bruce N and Godfrey, Mark T and Orlosky, Jason E and Bruce, Carrie and Sanford, Jon",
		year: 2006,
		booktitle: "Proceedings of the 12th International Conference on Auditory Display",
		pages: "238--241",
		note: `<a href="http://www.icad.org/Proceedings/2006/WalkerGodfrey2006.pdf" target="_blank">http://www.icad.org/Proceedings/2006/WalkerGodfrey2006.pdf</a>`
	}
	, "tomlinson2017solar": {
		index: 48,
		title: "Solar system sonification: exploring earth and its neighbors through sound",
		author: "Tomlinson, Brianna J and Winters, R Michael and Latina, Christopher and Bhat, Smruthi and Rane, Milap and Walker, Bruce N",
		year: 2017,
		booktitle: "The 23rd international conference on auditory display (ICAD 2017)",
		pages: "128--134",
		doi: "doi.org/10.21785/icad2017.027"
	}
	, "bcp47": {
		title: "IETF Language Tag",
		year: "n.d.",
		note: `Last accessed Aug 5, 2023. <a href="https://en.wikipedia.org/wiki/IETF_language_tag" target="_blank">https://en.wikipedia.org/wiki/IETF_language_tag</a>`
	}

	, "webAudio": {
		index: 31,
		title: "Web Audio API",
		author: "MDN",
		year: "n.d.",
		note: `Last accessed Aug 5, 2023. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API</a>`
	}
	, "webSpeech": {
		index: 32,
		title: "Web Speech API",
		author: "MDN",
		year: "n.d.",
		note: `Last accessed Aug 5, 2023. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API</a>`
	}
	, "appleEnvelope": {
		index: 5,
		title: "Attack, decay, sustain, and release",
		author: "Apple",
		year: "n.d.",
		note: `Last accessed Aug 5, 2023. <a href="https://support.apple.com/guide/logicpro/attack-decay-sustain-and-release-lgsife419620/mac" target="_blank">https://support.apple.com/guide/logicpro/attack-decay-sustain-and-release-lgsife419620/mac</a>`
	}
	, "jsPromise": {
		title: "Promise - JavaScript",
		author: "MDN",
		year: "n.d.",
		note: `Last accessed Aug 11, 2023. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise</a>`
	}
	, "MDN:audionode": {
		index: 30,
		title: "AudioNode - Web APIs",
		author: "MDN",
		year: "n.d.",
		note: `Last accessed Sep 12, 202. <a href="https://developer.mozilla.org/en-US/docs/Web/API/AudioNode" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/AudioNode</a>`
	}
	, "draco": {
		title: "Formalizing visualization design knowledge as constraints: Actionable and extensible models in Draco",
		author: "Moritz, Dominik and Wang, Chenglong and Nelson, Greg L and Lin, Halden and Smith, Adam M and Howe, Bill and Heer, Jeffrey",
		year: 2018,
		journal: "IEEE Transactions on Visualization and Computer Graphics",
		publisher: "IEEE Computer Society",
		doi: "10.1109/TVCG.2018.2865240"
	}

	, "ossia:poret2023": {
		index: 36,
		title: "Proof of Concept of a Generic Toolkit for Sonification: The Sonification Cell in Ossia Score",
		author: "Poret, Maxime and Celerier, Jean-Michaël and Desainte-Catherine Myriam and Semal Cahterine",
		year: 2023,
		booktitle: "Proceedings of the 2003 International Conference on Auditory Display",
		location: "Norrköping, Sweden",
		publisher: "ICAD",
		series: "ICAD '03"
	}
	, "sonifyer:dombois2008": {
		index: 18,
		title: "SonifYer: A Concept, a Software, a Platform",
		author: "Dombois, Florian and Brodwolf, Oliver and Friedli, Oliver and Rennert, Iris and Koenig, Thomas",
		year: 2008,
		booktitle: "Proceedings of the 2008 International Conference on Auditory Display",
		location: "Paris, France",
		publisher: "ICAD",
		series: "ICAD '08"
	}
	, "xsonify:candey2006": {
		index: 13,
		title: "xSonify Sonification Tool for Space Physics",
		author: "Candey, Robert M. and Schertenleib, Anton M. and Diaz Merced, Wanda L.",
		year: 2006,
		booktitle: "Proceedings of the 2006 International Conference on Auditory Display",
		location: "London, UK",
		publisher: "ICAD",
		series: "ICAD '06"
	}
	, "istk:pauletto": {
		index: 33,
		title: "A Toolkit for Interactive Sonification",
		author: "Pauletto, Sandra and Hunt, Andy",
		year: 2004,
		booktitle: "Proceedings of the 2004 International Conference on Auditory Display",
		publisher: "ICAD",
		series: "ICAD '04"
	}
	, "wss:kondak2017": {
		index: 27,
		title: "Web sonification sandbox-an easy-to-use web application for sonifying data and equations",
		author: "Kondak, Zachary and Liang, Tianchu Alex and Tomlinson, Brianna and Walker, Bruce N",
		year: 2017,
		booktitle: "Web Audio Conference WAC-2017",
		location: "London, UK",
		series: "WAC '17"
	}
	, "listen:wilson1996": {
		index: 60,
		title: "Listen: A data sonification toolkit",
		author: "Wilson, Catherine M and Lodha, Suresh K",
		year: 1996,
		booktitle: "Proceedings of the 1996 International Conference on Auditory Display",
		location: "Palo Alto, CA",
		publisher: "ICAD",
		series: "ICAD '96"
	}
	, "muse:lodha1997": {
		index: 29,
		title: "Muse: A musical data sonification toolkit",
		author: "Lodha, Suresh K and Beahan, John and Heppe, Travis and Joseph, Abigail and Zane-Ulman, Brett",
		year: 1997,
		booktitle: "Proceedings of the 1997 International Conference on Auditory Display",
		publisher: "ICAD",
		series: "ICAD '97"
	}
	, "workstation:phillips2019": {
		index: 34,
		title: "Sonification workstation",
		author: "Phillips, Sean and Cabrera, Andres",
		year: 2019,
		booktitle: "Proceedings of the 1997 International Conference on Auditory Display",
		location: "Newcastle upon Tyne, UK",
		publisher: "ICAD",
		series: "ICAD '19"
	}
	, "sonart:ben2002": {
		index: 9,
		title: "SonART: The sonification application research toolbox",
		author: "Ben-Tal, Oded and Berger, Jonathan and Cook, Bryan and Daniels, Michelle and Scavone, Gary and Cook, Perry",
		year: 2002,
		booktitle: "Proceedings of the 2002 International Conference on Auditory Display",
		location: "Kyoto, Japan",
		publisher: "ICAD",
		series: "ICAD '02",
		pages: "151--153"
	}
	, "personify:barrass2002": {
		index: 7,
		title: "Personify: a Toolkit for Perceptually Meaningful Sonification",
		author: "Barrass, Stephen",
		year: 1995,
		booktitle: "Proceedings of the Australian Computer Music Association Conference"
	}
	, "soda:cibils2020": {
		index: 16,
		title: "SODA: SOnification of DAta for Learning Analytics",
		author: "Cibils, André ",
		year: 2020,
		note: `<a href="https://github.com/AndreCI/Soda4LA" target="_blank">https://github.com/AndreCI/Soda4LA</a>`
	}
	, "strauss:harrison2021": {
		index: 49,
		title: "STRAUSS",
		author: "Trayford, James",
		year: 2021,
		note: `<a href="https://github.com/james-trayford/strauss" target="_blank">https://github.com/james-trayford/strauss</a>`
	}
	, "starsound:hannam2014": {
		index: 23,
		title: "StarSound",
		author: "Hannam, Jeffrey",
		year: 2014,
		note: `<a href="https://www.jeffreyhannam.com/starsound" target="_blank">https://www.jeffreyhannam.com/starsound</a>`
	}
	, "vegadataset": {
		index: 1,
		title: "vega-datasets",
		year: 'n.d.',
		note: `Last accessed Sep. 1, 2023. <a href="https://github.com/vega/vega-datasets" target="_blank">https://github.com/vega/vega-datasets</a>`
	}
	, "vegas": {
		index: 12,
		title: "Nine Rounds a Second: How the Las Vegas Gunman Outfitted a Rifle to Fire Faster",
		author: "Buchanan, Larry and Huang, Jon and Pearce, Adam",
		year: 2017,
		note: `Last accessed Sep. 3, 2023. <a href="https://www.nytimes.com/interactive/2017/10/02/us/vegas-guns.html" target="_blank">https://www.nytimes.com/interactive/2017/10/02/us/vegas-guns.html</a>`
	}
	, "periodicWaveGen": {
		title: "Web Audio API—Waveform Generation",
		author: "W3C",
		year: 2023,
		note: `Last accessed Sep. 4, 2023. <a href="https://webaudio.github.io/web-audio-api/#waveform-generation" target="_blank">https://webaudio.github.io/web-audio-api/#waveform-generation</a>`
	}
	, "csound": {
		index: 2,
		title: "CSound",
		year: "n.d.",
		note: `Last accessed Sep. 5, 2023. <a href="https://csound.com/" target="_blank">https://csound.com/</a>`
	}
	, "pcm": {
		index: 58,
		title: "Pulse-code modulation",
		author: "Wikipedia",
		year: "n.d.",
		note: `Last accessed Sep. 6, 2023. <a href="https://en.wikipedia.org/wiki/Pulse-code_modulation" target="_blank">https://en.wikipedia.org/wiki/Pulse-code_modulation</a>`
	}
	, "battle2022:d3": {
		index: 8,
		title: "Exploring D3 Implementation Challenges on Stack Overflow",
		author: "Battle, Leilani and Feng, Danni and Webber, Kelli",
		year: 2022,
		booktitle: "2022 IEEE Visualization and Visual Analytics (VIS)",
		pages: "1--5",
		doi: "10.1109/VIS54862.2022.00009"
	}


	, "donya:haskell2013": {
		index: 38,
		title: "Grammar-Based Automated Music Composition in Haskell",
		author: "Quick, Donya and Hudak, Paul",
		year: 2013,
		booktitle: "Proceedings of the First ACM SIGPLAN Workshop on Functional Art, Music, Modeling & Design",
		location: "Boston, Massachusetts, USA",
		publisher: "ACM",
		series: "FARM '13",
		pages: "59–70",
		doi: "10.1145/2505341.2505345"
	}
	, "ggdist:kay2023": {
		title: "ggdist: Visualizations of Distributions and Uncertainty in the Grammar of Graphics",
		author: "Kay, Matthew",
		year: 2023,
		journal: "IEEE Transactions on Visualization and Computer Graphics",
		pages: "1--11",
		doi: "10.1109/TVCG.2023.3327195"
	}
	, "chundury2023:tactualplot": {
		index: 15,
		title: "TactualPlot: Spatializing Data as Sound using Sensory Substitution for Touchscreen Accessibility",
		author: "Chundury, Pramod and Reyazuddin, Yasmin and Jordan, J. Bern and Lazar, Jonathan and Elmqvist, Niklas",
		year: 2023,
		journal: "IEEE Transactions on Visualization and Computer Graphics",
		volume: "",
		number: "",
		pages: "1--11",
		doi: "10.1109/TVCG.2023.3326937"
	}
};

Object.keys(cites).forEach((cite) => {
	if (cites[cite].author) {
		let alist = cites[cite].author.split(" and ").map((name) => name.split(", "));
		cites[cite].authorList = alist;
	} else {
		cites[cite].authorList = [];
	}
})

export function findCitation(key) {
	return cites[key];
}

export function registerCitationPosition(key, loc) {
	if (!cites[key].position) cites[key].position = [];
	cites[key].position.push(loc);
}

function commaAuthorName(nameList) {
	return nameList[0] + (nameList[1] ? ", " + nameList[1] : '');
}

export function makeRefAuthorName(authorList) {
	if (authorList.length == 0) {
		return "";
	} else if (authorList.length == 1) {
		return commaAuthorName(authorList[0]);
	} else if (authorList.length == 2) {
		return commaAuthorName(authorList[0]) + " and " + commaAuthorName(authorList[1]);
	} else if (authorList.length > 2) {
		return authorList.map((a, i) => {
			if (i == authorList.length - 1) {
				return "and " + commaAuthorName(a);
			} else {
				return commaAuthorName(a);
			}
		}).join(", ");
	}
}

export let citeCount = writable(0);
export function getCiteCount() {
	citeCount.update((i) => i + 1);
	return get(citeCount);
}