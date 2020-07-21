import 'package:tft_analytics_mobile/models/Match.dart';
import 'package:tft_analytics_mobile/models/Trait.dart';
import 'package:tft_analytics_mobile/models/Unit.dart';


final t1 = Trait(
  name: 'chrono',
  numUnits: 2,
  style: 1,
  tierCurrent: 1,
  tierTotal: 3
);

final t2 = Trait(
  name: 'mercenary',
  numUnits: 1,
  style: 3,
  tierCurrent: 1,
  tierTotal: 1
);

final t3 = Trait(
  name: 'brawler',
  numUnits: 4,
  style: 3,
  tierCurrent: 2,
  tierTotal: 2
);

final t4 = Trait(
  name: 'celestial',
  numUnits: 2,
  style: 1,
  tierCurrent: 1,
  tierTotal: 3
);

final t5 = Trait(
  name: 'valkyrie',
  numUnits: 2,
  style: 3,
  tierCurrent: 1,
  tierTotal: 1
);

final u1 = Unit(
  name:"",
  characterID: 'malphite',
  items: [77,36],
  rarity: 0,
  tier: 2 
);

final u2 = Unit(
  name:"",
  characterID: 'malphite',
  items: [],
  rarity: 0,
  tier: 2 
);

final u3 = Unit(
  name:"",
  characterID: 'blitzcrank',
  items: [],
  rarity: 1,
  tier: 1 
);

final u4 = Unit(
  name:"",
  characterID: 'shen',
  items: [ ],
  rarity: 1,
  tier: 2 
);

final u5 = Unit(
  name:"",
  characterID: 'vi',
  items: [ ],
  rarity: 2,
  tier: 1 
);

final u6 = Unit(
  name:"",
  characterID: 'vi',
  items: [88,9],
  rarity: 2,
  tier: 2 
);

final u7 = Unit(
  name:"",
  characterID: 'chogath',
  items: [68],
  rarity: 3,
  tier: 1 
);

final u8 = Unit(
  name:"",
  characterID: 'kayle',
  items: [22,69,25],
  rarity: 3,
  tier: 3 
);

final u9 = Unit(
  name:"",
  characterID: 'missfortune',
  items: [99,45,45],
  rarity: 4,
  tier: 2 
);

final u10 = Unit(
  name:"",
  characterID: 'lulu',
  items: [14,14,59],
  rarity: 4,
  tier: 1 
);

final m1 = Match(
  level: 9,
  position: 1,
  queue: 1090,
  traits: [t1,t2,t3,t4,t5,],
  units: [u1,u2,u3,u4,u5,u6,u7,u8,u9,u10]
);