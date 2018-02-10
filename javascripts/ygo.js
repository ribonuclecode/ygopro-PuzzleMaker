
var types_zh = [
  ' Monster ',' magic ',' trap ',null,' Normal ',' effect ',' Fusion ',' ceremony ',' trap  Monster ',' soul ',' alliance ',' Double ',' Adjustment ',' homology ', null,' derivative ',
  ' Haste ',' Sustainable ',' equipment ',' site ',' Counterattack ',' Flip ',' Cartoon ',' Excess '
];
var attributes_zh = [
  ' Ground ',' water ',' inflammation ',' wind ',' Light ',' dark ',' God '
];	  
var races_zh = [
  ' Warrior family ',' Magician family ',' Angel family ',' Devil ',' Undead ',' Mechanical family ',' Aquarium ',' Inflammation ',' Rock family ',' Orc ',' Flora ',' Insect family ',' Thunder ',
  ' Dragon ',' Orcs ',' Beast warrior family ','恐 Dragon ',' Fish family ','海 Dragon ',' Reptile family ',' Read dynamic family ','幻神 Orcs ',' Create god clan '
];

var counters = [
{"code" : "0x3001" ,"str" : " Magic indicator "},
{"code" : "0x2" ,	"str" : " Wedge indication "},
{"code" : "0x3003" ,"str" : " Bushido counters "},
{"code" : "0x3004" ,"str" : " Attention indicator "},
{"code" : "0x5" ,	"str" : " Light pointer "},
{"code" : "0x6" ,	"str" : " Gem counters "},
{"code" : "0x7" ,	"str" : " Indicator （ Sword fighting beast's threshold ）"},
{"code" : "0x8" ,	"str" : "D Indicator "},
{"code" : "0x9" ,	"str" : " Poison indicator "},
{"code" : "0xa" ,	"str" : " Next generation indicator "},
{"code" : "0x300b" ,"str" : " Indicator （ Ancient Machinery City ）"},
{"code" : "0xc" ,	"str" : " Thunder indicator "},
{"code" : "0xd" ,	"str" : " Power indicator "},
{"code" : "0xe" ,	"str" : "A Indicator "},
{"code" : "0xf" ,	"str" : " Insect indicator "},
{"code" : "0x10" ,	"str" : " Black feather counters "},
{"code" : "0x11" ,	"str" : " Poison indicator "},
{"code" : "0x12" ,	"str" : " Clever pointers "},
{"code" : "0x13" ,	"str" : " Chaos indicator "},
{"code" : "0x14" ,	"str" : " Indicator （ Miraculous Jurassic eggs ）"},
{"code" : "0x15" ,	"str" : " Ice indicator "},
{"code" : "0x16" ,	"str" : " Stones indicator "},
{"code" : "0x17" ,	"str" : " Acorn indicator "},
{"code" : "0x18" ,	"str" : " Flower indicator "},
{"code" : "0x19" ,	"str" : " Fog indicator "},
{"code" : "0x1a" ,	"str" : " Double the indicator "},
{"code" : "0x1b" ,	"str" : " Chronometer counter "},
{"code" : "0x1c" ,	"str" : "D Indicator "},
{"code" : "0x1d" ,	"str" : " Waste indicator "},
{"code" : "0x1e" ,	"str" : " Door indicator "},
{"code" : "0x1f" ,	"str" : " Indicator （ Great battleship ）"},
{"code" : "0x20" ,	"str" : " Plant indicator "},
{"code" : "0x21" ,	"str" : " Guard instructions "},
{"code" : "0x22" ,	"str" : " Dragon God instructions "},
{"code" : "0x23" ,	"str" : " Marine indicator "},
{"code" : "0x24" ,	"str" : " Chord indicator "},
{"code" : "0x25" ,	"str" : " Chronology indicator "},
{"code" : "0x26" ,	"str" : " Indicator （ Metal shooter ）"},
{"code" : "0x27" ,	"str" : " Indicator （ Dead mosquito ）"},
{"code" : "0x3028" ,"str" : " Indicator （ Dark projection hand ）"},
{"code" : "0x29" ,	"str" : " Indicator （ Balloon lizard ）"},
{"code" : "0x2a" ,	"str" : " Indicator （ Magic protector ）"},
{"code" : "0x302b" ,"str" : " Destiny indicator "},
{"code" : "0x2c" ,	"str" : " Compliance counters "}
];
function getType(card){
	var result='';
	var type = card.type;
	for(var i in types_zh){
		if(type & (0x1<<i)){
			if(result=='')
				result = types_zh[i];
			else 
				result = result + "|" + types_zh[i];
		}
	}
	return result;
}
function getRace(card){
	var result;
	var race = card.race;
	for(var i in races_zh){
		if(race & (1<<i)){
			return races_zh[i];
		}
	}
}
function getAttribute(card){
	var result;
	var attribute = card.attribute;
	for(var i in races_zh){
		if(attribute & (1<<i)){
			return attributes_zh[i];
		}
	}
}