// Architeuthis Dux (Giant Atlantic Squid)
// Dillon et al
// 2AFC verb / pronoun continuation task

// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'intro',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('ARCHITEUTHIS'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"; 
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server."; 

// Controller settings.
// Parameter settings taken from Staub 2009
var defaults = [
    "EPDashedSentence", {
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 1000,
        wordPauseTime: 150
        },
        DS, {randomOrder: false,
        presentHorizontally: true,
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 250,
        wordPauseTime: 150,
        timeout: null,
        hasCorrect: 1,
        q: ''}
];

// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p> Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [

["timeoutSep", Separator, { transfer: 250, normalMessage: "", errorMessage: ""}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv."]
                         ]}],

['shared-intro', Separator, { transfer: 250, normalMessage: "", errorMessage: ""}, "EPDashedSentence", {s:"+"}, DS, {s:"Pisicuţele tigrate",as: [['s','sunt'],['k','este']]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi varianta care vi se pare o continuare mai bună a propoziţiei."],
                           ["p", "Multor vorbitori nativi de limba română li se pare că 'sunt' este o continuare mai firească a fragmentului anterior. Hai să mai exersăm un pic."],
                         ]}],

['shared-intro', Separator, { transfer: 250, normalMessage: "", errorMessage: ""}, "EPDashedSentence", {s:"+"}, DS, {s:"Zambila roz",as: [['s','miros'],['k','miroase']]}],
['shared-intro', Separator, { transfer: 250, normalMessage: "", errorMessage: ""}, "EPDashedSentence", {s:"+"}, DS, {s:"Maria şi Ion",as: [['s','sunt'],['k','este']]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."}],


//// Shared experimental items + fillers
//// 
[["ARCHITEUTHIS-sgmatch",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femeia blondă mereu ",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmismatch",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femeile blonde mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cărţile de lângă femeile blonde mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cărţile de lângă femeiea blondă mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmatch",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreaţa profesionistă mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreţele profesioniste mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",2], "EPDashedSentence", {s:"+"}, DS, {s:"Viorile de lângă cântăreţele profesioniste mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",2], "EPDashedSentence", {s:"+"}, DS, {s:" Viorile de lângă  cântăreaţa profesionistă mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmatch",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitoreasa pricepută uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitoresele pricepute uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochiile de lângă croitoresele pricepute uneori ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",3], "EPDashedSentence", {s:"+"}, DS, {s:" Rochiile de lângă  croitoreasa pricepută uneori ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmatch",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodina veselă uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodinele vesele  uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă gospodinele vesele uneori ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă  gospodina veselă uneori ",as: [['s','au'],['k','are']]}], 


 [["ARCHITEUTHIS-sgmatch",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă fata brunetă mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă fetele brunete mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fetele brunete mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fata brunetă mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmatch",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă eleva harnică adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă elevele harnice adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă elevele harnice adesea ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă eleva harnică adesea ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmatch",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă contabila bogată mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă contabilele bogate mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă contabilele bogate mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",7], "EPDashedSentence", {s:"+"}, DS, {s:" Vânzătoarele de lângă contabila bogată mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmatch",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă ţăranca tânără mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă ţărăncile tinere mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărăncile tinere mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţăranca tânără mereu",as: [['s','au'],['k','are']]}],


[["ARCHITEUTHIS-sgmatch",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organismul viu mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organismele vii mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",9], "EPDashedSentence", {s:"+"}, DS, {s:" Cuţitele de lângă organismele vii mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",9], "EPDashedSentence", {s:"+"}, DS, {s:" Cuţitele de lângă organismul viu mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animalul dungat mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animalele dungate mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă animalele dungate mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă animalul dungat mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustaceul leneş adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustaceele leneşe adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă crustaceele leneşe adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă crustaceul leneş adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macroul picant mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrourile picante mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă macrourile picante mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă macroul picant mereu",as: [['s','au'],['k','are']]}],


[["ARCHITEUTHIS-sgmatch",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismul de lângă microorganismul viu mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismul de lângă microorganismele vii mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismele de lângă microorganismele vii mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismele de lângă microorganismul viu mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă nevertebratul albastru uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă nevertebratele albastre uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebratele albastre uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebratul albastru uneori",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă vertebratul acvatic adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă vertebratele acvatice adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebratele acvatice adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebratul acvatic adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă mamiferul marin uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă mamiferele marine uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamiferele marine uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamiferul marin uneori",as: [['s','au'],['k','are']]}],


[["ARCHITEUTHIS-sgmatch",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copilul înalt adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copiii înalţi adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii de lângă copiii înalţi adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",17], "EPDashedSentence", {s:"+"}, DS, {s:" Câinii de lângă copilul înalt adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacientul depresiv mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacienţii depresivi mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă pacienţii depresivi mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă pacientul depresiv mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugărul creştin mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugării creştini mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă călugării creştini mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă călugărul creştin mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă studentul masterand uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă studenţii masteranzi uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorii de lângă studenţii masteranzi uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",20], "EPDashedSentence", {s:"+"}, DS, {s:" Profesorii de lângă studentul masterand uneori",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă hangiul local mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă hangiii locali mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangiii locali mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangiul local mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă eroul naţional mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă eroii naţionali mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă eroii naţionali mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",23], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă eroul naţional mereu ",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă croitorul gras adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă croitorii graşi adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitori graşi adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitorul gras adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-sgmatch",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă contabilul armean uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-sgmismatch",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă contabili armeni uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmatch",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabili armeni adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-plmismatch",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabilul armean adesea",as: [['s','au'],['k','are']]}],



//// Fillers
["filler-25", "EPDashedSentence", {s:"+"}, DS, {s:"Fata pe care domnii o",as: [['s','iubesc'],['k','iubeşte']]}],
["filler-26", "EPDashedSentence", {s:"+"}, DS, {s:"Cartea pe care fetele o",as: [['s','citesc'],['k','citeşte']]}],
["filler-27", "EPDashedSentence", {s:"+"}, DS, {s:"Pinguinul pe care copiii îl",as: [['s','privesc'],['k','priveşte']]}],
["filler-28", "EPDashedSentence", {s:"+"}, DS, {s:"Pisica pe care băieţii o",as: [['s','lovesc'],['k','loveşte']]}],
["filler-29", "EPDashedSentence", {s:"+"}, DS, {s:"Veveriţa pe care bărbaţii o",as: [['s','prind'],['k','prinde']]}],
["filler-30", "EPDashedSentence", {s:"+"}, DS, {s:"Lumina pe care oamenii o",as: [['s','văd'],['k','vede']]}],
["filler-31", "EPDashedSentence", {s:"+"}, DS, {s:"Casa pe care contabilii o",as: [['s','construiesc'],['k','construieşte']]}],
["filler-32", "EPDashedSentence", {s:"+"}, DS, {s:"Mingea pe care sportivii o",as: [['s','aleg'],['k','alege']]}],
["filler-33", "EPDashedSentence", {s:"+"}, DS, {s:"Vinul pe care bucătarii îl",as: [['s','beau'],['k','bea']]}],
["filler-34", "EPDashedSentence", {s:"+"}, DS, {s:"Câinele pe care doctorii îl",as: [['s','hrănesc'],['k','hrăneşte']]}],
["filler-35", "EPDashedSentence", {s:"+"}, DS, {s:"Poemul pe care tinerii îl",as: [['s','spun'],['k','spune']]}],
["filler-36", "EPDashedSentence", {s:"+"}, DS, {s:"Omul pe care animalele îl",as: [['s','îndrăgesc'],['k','îndrăgeşte']]}], 
["filler-37", "EPDashedSentence", {s:"+"}, DS, {s:"Vinurile pe care domnul le",as: [['s','iubesc'],['k','iubeşte']]}], 
["filler-38", "EPDashedSentence", {s:"+"}, DS, {s:"Scrisorile pe care fata le",as: [['s','citesc'],['k','citeşte']]}], 
["filler-39", "EPDashedSentence", {s:"+"}, DS, {s:"Girafele pe care copilul le",as: [['s','privesc'],['k','priveşte']]}], 
["filler-40", "EPDashedSentence", {s:"+"}, DS, {s:"Motanii pe care bunicul îi",as: [['s','adăpostesc'],['k','adăposteşte']]}], 
["filler-41", "EPDashedSentence", {s:"+"}, DS, {s:"Şerpii pe care bărbatul îi",as: [['s','strivesc'],['k','striveşte']]}], 
["filler-42", "EPDashedSentence", {s:"+"}, DS, {s:"Stelele pe care înţeleptul le",as: [['s','urmăresc'],['k','urmăreşte']]}], 
["filler-43", "EPDashedSentence", {s:"+"}, DS, {s:"Barurile pe care pictorul le",as: [['s','construiesc'],['k','construieşte']]}], 
["filler-44", "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile pe care colecţionarul le",as: [['s','văd'],['k','vede']]}], 
["filler-45", "EPDashedSentence", {s:"+"}, DS, {s:"Sucurile pe care chelnerul le",as: [['s','beau'],['k','bea']]}], 
["filler-46", "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile pe care doamna le",as: [['s','îngrijesc'],['k','îngrijeşte']]}], 
 ["filler-47", "EPDashedSentence", {s:"+"}, DS, {s:"Cuvintele pe care preotul le",as: [['s','rostesc'],['k','rosteşte']]}], 
["filler-48", "EPDashedSentence", {s:"+"}, DS, {s:"Câinii pe care pisica îi",as: [['s','urăsc'],['k','urăşte']]}], 
["filler-49", "EPDashedSentence", {s:"+"}, DS, {s:"Femeia şi copilul",as: [['s','beau'],['k','bea']]}], 
["filler-50", "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul şi bolnavul",as: [['s','plâng'],['k','plânge']]}],
["filler-51", "EPDashedSentence", {s:"+"}, DS, {s:"Vulpoiul şi vulpea",as: [['s','sar'],['k','sare']]}],
["filler-52", "EPDashedSentence", {s:"+"}, DS, {s:"Găina şi puiul",as: [['s','ciugulesc'],['k','ciuguleşte']]}],
["filler-53", "EPDashedSentence", {s:"+"}, DS, {s:"Paharul şi sticla",as: [['s','cad'],['k','cade']]}],
["filler-54", "EPDashedSentence", {s:"+"}, DS, {s:"Oboseala şi plictisul",as: [['s','ucid'],['k','ucide']]}],
["filler-55", "EPDashedSentence", {s:"+"}, DS, {s:"Iubirea şi prietenia",as: [['s','susţin'],['k','susţine']]}],
["filler-56", "EPDashedSentence", {s:"+"}, DS, {s:"Căţelul şi pisica",as: [['s','dorm'],['k','doarme']]}],
["filler-57", "EPDashedSentence", {s:"+"}, DS, {s:"Cafeaua şi ceaiul",as: [['s','au'],['k','are']]}],
["filler-58", "EPDashedSentence", {s:"+"}, DS, {s:"Trandafirul şi zambila",as: [['s','miros'],['k','miroase']]}],
["filler-59", "EPDashedSentence", {s:"+"}, DS, {s:"Cartea şi caietul",as: [['s','sunt'],['k','este']]}],
["filler-60", "EPDashedSentence", {s:"+"}, DS, {s:"Papagalul şi băiatul",as: [['s','vorbesc'],['k','vorbeşte']]}],
["filler-61", "EPDashedSentence", {s:"+"}, DS, {s:"Lampa de pe cartea verde ",as: [['s','se aprinde'],['k','se citeşte']]}],
["filler-62", "EPDashedSentence", {s:"+"}, DS, {s:"Fetiţa din camera albastră",as: [['s','dansează'],['k','luminează']]}],
["filler-63", "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşul de lângă scaunul roşu ",as: [['s','doarme'],['k','se rupe']]}],
["filler-64", "EPDashedSentence", {s:"+"}, DS, {s:"Pasărea de lângă masa neagră",as: [['s','cântă'],['k','se pliază']]}],
["filler-65", "EPDashedSentence", {s:"+"}, DS, {s:"Măgarul de lângă căţelul maro",as: [['s','rage'],['k','latră']]}],
["filler-66", "EPDashedSentence", {s:"+"}, DS, {s:"Papucii de pe copiii bolnavi",as: [['s','alunecă'],['k','strănută']]}],
["filler-67", "EPDashedSentence", {s:"+"}, DS, {s:"Cangurii de lângă femeile zâmbăreţe",as: [['s','sar'],['k','vorbesc']]}],
["filler-68", "EPDashedSentence", {s:"+"}, DS, {s:"Albinele de pe portocalele stricate",as: [['s','bâzâie'],['k','miros']]}],
["filler-69", "EPDashedSentence", {s:"+"}, DS, {s:"Râul de lângă pădurea frumoasă",as: [['s','curge'],['k','arde']]}],
["filler-70", "EPDashedSentence", {s:"+"}, DS, {s:"Urşii de lângă prinţesele minunate ",as: [['s','hibernează'],['k','se căsătoresc']]}],
["filler-71", "EPDashedSentence", {s:"+"}, DS, {s:"Florile din sticlele albastre",as: [['s','se ofilesc'],['k','se sparg']]}],
["filler-72", "EPDashedSentence", {s:"+"}, DS, {s:"Calculatoarele de lângă copiii năzdrăvani",as: [['s','se strică'],['k','se joacă']]}],
["filler-73", "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşii fricoşi",as: [['s','se ascund'],['k','se ascunde']]}],
["filler-74", "EPDashedSentence", {s:"+"}, DS, {s:"Cutremurele mari",as: [['s','distrug'],['k','distruge']]}],
["filler-75", "EPDashedSentence", {s:"+"}, DS, {s:"Grădinile japoneze",as: [['s','au'],['k','are']]}],
["filler-76", "EPDashedSentence", {s:"+"}, DS, {s:"Fetele seducătoare",as: [['s','atrag'],['k','atrage']]}],
["filler-77", "EPDashedSentence", {s:"+"}, DS, {s:"Muzicienii creativi ",as: [['s','compun'],['k','compune']]}],
["filler-78", "EPDashedSentence", {s:"+"}, DS, {s:"Rănile sufleteşti ",as: [['s','dor'],['k','doare']]}],
["filler-79", "EPDashedSentence", {s:"+"}, DS, {s:"Paharele colorate",as: [['s','conţin'],['k','conţine']]}],
["filler-80", "EPDashedSentence", {s:"+"}, DS, {s:"Hamsterii curioşi",as: [['s','apar'],['k','apare']]}],
["filler-81", "EPDashedSentence", {s:"+"}, DS, {s:"Elevii cuminţi",as: [['s','doresc'],['k','doreşte']]}],
["filler-82", "EPDashedSentence", {s:"+"}, DS, {s:"Parfumul franţuzesc",as: [['s','miros'],['k','miroase']]}],
["filler-83", "EPDashedSentence", {s:"+"}, DS, {s:"Bunicii iubitori",as: [['s','dau'],['k','dă']]}],
 ["filler-84", "EPDashedSentence", {s:"+"}, DS, {s:"Cheile verzi",as: [['s','deschid'],['k','deschide']]}],
["filler-85", "EPDashedSentence", {s:"+"}, DS, {s:"Fata şatenă",as: [['s','se ascund'],['k','se ascunde']]}],
["filler-86", "EPDashedSentence", {s:"+"}, DS, {s:"Pisica năzdrăvană",as: [['s','sparg'],['k','sparge']]}],
["filler-87", "EPDashedSentence", {s:"+"}, DS, {s:"Caietul negru",as: [['s','au'],['k','are']]}],
["filler-88", "EPDashedSentence", {s:"+"}, DS, {s:"Magnetul maro",as: [['s','atrag'],['k','atrage']]}],
["filler-89", "EPDashedSentence", {s:"+"}, DS, {s:"Pixul albastru",as: [['s','scriu'],['k','scrie']]}],
["filler-90", "EPDashedSentence", {s:"+"}, DS, {s:"Iepurele alb",as: [['s','sar'],['k','sare']]}],
["filler-91", "EPDashedSentence", {s:"+"}, DS, {s:"Studentul harnic",as: [['s','muncesc'],['k','munceşte']]}],
["filler-92", "EPDashedSentence", {s:"+"}, DS, {s:"Femeia misterioasă",as: [['s','dispar'],['k','dispare']]}],
["filler-93", "EPDashedSentence", {s:"+"}, DS, {s:"Poetul talentat",as: [['s','vorbesc'],['k','vorbeşte']]}],
["filler-94", "EPDashedSentence", {s:"+"}, DS, {s:"Mâncarea gustoasă",as: [['s','miros'],['k','miroase']]}],
["filler-95", "EPDashedSentence", {s:"+"}, DS, {s:"Cursul masteral",as: [['s','cuprind'],['k','cuprinde']]}],
["filler-96", "EPDashedSentence", {s:"+"}, DS, {s:"Bagajul mare",as: [['s','conţin'],['k','conţine']]}]

];



