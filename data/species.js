/**
 * Catàleg de peixos de la reserva marina de la Masia Blanca.
 *
 * FONT DE VERITAT, escrita a mà. El guió scripts/build-species.mjs hi afegeix,
 * per a cada entrada, la fitxa de la Viquipèdia en català (títol canònic, URL i
 * llista de noms populars) i les imatges de Wikimedia Commons amb l'autoria i la
 * llicència, i escriu el resultat a src/data/species.generated.json.
 *
 * Camps:
 *   slug         URL de la fitxa: /peixos/<slug>
 *   nom          nom català principal, tal com encapçala la fitxa
 *   cientific    nom científic acceptat (WoRMS)
 *   autoria      autoria i any de la descripció
 *   familia      família
 *   habitat      clau de l'hàbitat dominant dins la reserva (vegeu src/lib/site.js)
 *   profunditat  [min, max] en metres DINS la reserva, no en tot el rang mundial
 *   mida         mida màxima habitual
 *   iucn         categoria de la Llista Vermella de la UICN, si és rellevant
 *   resum        una frase per a la targeta del catàleg
 *   text         cos de la fitxa, un element per paràgraf
 *   onTrobar     on buscar-lo concretament dins el grapissar
 *   commons      categoria de Commons, si difereix del nom científic
 *   imatge       fitxer de Commons triat a mà com a imatge principal, si cal
 */

/** @type {Array<Record<string, any>>} */
export const SPECIES = [
  // ─────────────────────────────────────────────────────────────────────────
  // EL GRAPISSAR ROCÓS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'anfos',
    nom: 'Anfós',
    cientific: 'Epinephelus marginatus',
    autoria: '(Lowe, 1834)',
    familia: 'Serranidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 150 cm',
    iucn: 'VU',
    resum:
      'El peix que justifica una reserva marina: creix a poc a poc, viu molts anys i desapareix de seguida allà on es pesca.',
    text: [
      'L’anfós és un peix massís, de cap ample i llavis gruixuts, de color bru amb clapes irregulars més clares que pot encendre o apagar en segons. Ocupa una cova concreta i hi torna cada dia: si el veieu dues vegades al mateix forat, molt probablement és el mateix individu.',
      'Neix femella i, cap als deu o dotze anys, es transforma en mascle. Aquesta biologia el fa extraordinàriament fràgil davant la pesca submarina, perquè els primers a caure sempre són els exemplars grossos, que són justament els mascles reproductors. Recuperar-ne una població demana dècades de protecció efectiva, i és exactament la mena de retorn que una reserva com la Masia Blanca pot donar.',
    ],
    onTrobar:
      'A les cornises i les cavitats més fondes de les barres, sempre amb una sortida de fuita a prop. Rarament es deixa veure a menys de vuit metres.',
  },
  {
    slug: 'anfos-llis',
    nom: 'Anfós llis',
    cientific: 'Epinephelus costae',
    autoria: 'Steindachner, 1878',
    familia: 'Serranidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 140 cm',
    iucn: 'DD',
    resum:
      'Més esvelt i més recelós que l’anfós comú, amb unes ratlles daurades que se li encenen quan està tranquil.',
    text: [
      'De cos més allargat i cap més afuat que el seu cosí, l’anfós llis té un color gris bronzejat travessat per línies longitudinals daurades que només s’aprecien bé amb llum de migdia. Sol nedar una mica separat del fons, cosa que l’anfós comú gairebé mai no fa.',
      'És menys sedentari i més difícil d’observar: fuig abans que l’hàgiu vist. Als fons del Vendrell hi arriba des de les zones rocoses més fondes del voltant i els avistaments són escadussers, però constants.',
    ],
    onTrobar:
      'A la franja exterior del grapissar, on la roca s’acaba i comença la sorra fonda, sovint en parella.',
  },
  {
    slug: 'corball-de-roca',
    nom: 'Corball de roca',
    cientific: 'Sciaena umbra',
    autoria: 'Linnaeus, 1758',
    familia: 'Sciaenidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 70 cm',
    iucn: 'NT',
    resum:
      'Un peix fosc i quiet, amb reflexos de bronze, que se sent abans de veure’s: fa un tabaleig sord amb la bufeta natatòria.',
    text: [
      'El corball és compacte, de dors arquejat i color bru violaci amb un lluentor metàl·lica; les aletes ventrals i l’anal són negres amb el marge blanc. Passa el dia immòbil dins una cova o sota una cornisa, sovint en grups de cinc o sis individus superposats, i surt a caçar de nit.',
      'Els mascles produeixen un so greu i repetit durant l’època de fresa, al començament de l’estiu. És una espècie molt buscada pels pescadors submarins i, com que és fàcil de localitzar i no s’allunya del refugi, cau de seguida allà on no hi ha protecció.',
    ],
    onTrobar:
      'Dins les cavitats grans de les barres centrals, entre vuit i quinze metres. Busqueu ombres immòbils, no peixos que neden.',
  },
  {
    slug: 'reig',
    nom: 'Reig',
    cientific: 'Umbrina cirrosa',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sciaenidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 100 cm',
    iucn: 'VU',
    resum:
      'Cosí clar del corball, ratllat de daurat en obliqua i amb una barbeta curta sota la barbeta inferior.',
    text: [
      'El reig té el cos platejat recorregut per línies obliqües daurades i una barbeta rígida sota la mandíbula que fa servir per remenar el sediment a la recerca de cucs i crustacis. És més gros i més clar que el corball de roca, i sol anar sol o en grups petits.',
      'Freqüenta la frontera entre la roca i la sorra, que a la Masia Blanca és pràcticament tot el perímetre de cada barra. La seva pesca està molt regulada a Catalunya i les poblacions mediterrànies estan clarament per sota del que haurien de ser.',
    ],
    onTrobar:
      'A les llengües de sorra entre barra i barra, sovint fregant el fons amb la barbeta.',
  },
  {
    slug: 'mare-danfos',
    nom: 'Mare d’anfós',
    cientific: 'Apogon imberbis',
    autoria: '(Linnaeus, 1758)',
    familia: 'Apogonidae',
    habitat: 'roca',
    profunditat: [8, 25],
    mida: 'fins a 15 cm',
    resum:
      'Petit, taronja encès i d’ulls enormes: la manera més fàcil de saber que heu trobat una cova de veritat.',
    text: [
      'És un peix nocturn de color taronja o vermell viu, amb dos ulls desproporcionats i una taca fosca a la base de la cua. De dia s’amaga en penombra, sovint de cap per avall sota una cornisa o dins un forat, i sempre en grup.',
      'El mascle incuba els ous dins la boca durant una setmana i, mentre ho fa, no menja. Si en veieu un amb les galtes inflades i la mandíbula entreoberta al començament de l’estiu, és exactament això.',
    ],
    onTrobar:
      'A l’interior de qualsevol cavitat fosca del grapissar. Amb un llum frontal es veuen des de fora, immòbils, com brases.',
  },
  {
    slug: 'congre',
    nom: 'Congre',
    cientific: 'Conger conger',
    autoria: '(Linnaeus, 1758)',
    familia: 'Congridae',
    habitat: 'roca',
    profunditat: [4, 25],
    mida: 'fins a 300 cm',
    resum:
      'El gran depredador nocturn del grapissar. De dia només se’n veu el cap sortint d’una escletxa.',
    text: [
      'De pell llisa i sense escates, gris o bru fosc pel dors i blanquinós pel ventre, el congre té la mandíbula superior més llarga que la inferior, cosa que el distingeix de la morena a primer cop d’ull. Els exemplars grossos de la costa catalana passen fàcilment del metre i mig.',
      'Caça de nit polps, sípies i peixos, i de dia ocupa sempre la mateixa escletxa. No és agressiu, però té una mossegada potent i una tendència molt marcada a defensar el forat: no s’hi ha de ficar la mà mai.',
    ],
    onTrobar:
      'A la base de les barres, on la roca s’enfonsa en la sorra i es formen escletxes horitzontals llargues.',
  },
  {
    slug: 'morena',
    nom: 'Morena',
    cientific: 'Muraena helena',
    autoria: 'Linnaeus, 1758',
    familia: 'Muraenidae',
    habitat: 'roca',
    profunditat: [4, 25],
    mida: 'fins a 150 cm',
    resum:
      'Marbrada de groc i marró fosc, respira amb la boca oberta i per això sembla sempre amenaçadora quan no ho és.',
    text: [
      'La morena té un dibuix de taques grogues sobre fons bru molt fosc que funciona com una empremta digital: cap individu no el té igual. No té aletes pectorals i es mou reptant per les escletxes amb una agilitat sorprenent.',
      'Obre i tanca la boca contínuament perquè és l’única manera que té de fer passar aigua per les brànquies; no és cap gest d’atac. La seva sang conté una toxina que es destrueix amb la cocció, motiu pel qual els romans la criaven en vivers i la consideraven un peix de luxe.',
    ],
    onTrobar:
      'Dins els forats de la roca coral·lígena, entre cinc i quinze metres. Sovint comparteix cavitat amb un congre.',
  },
  {
    slug: 'escorpora-fosca',
    nom: 'Escórpora fosca',
    cientific: 'Scorpaena porcus',
    autoria: 'Linnaeus, 1758',
    familia: 'Scorpaenidae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 25 cm',
    resum:
      'El mestre del camuflatge del grapissar: podeu passar-hi el dit pel costat sense haver-la vist.',
    text: [
      'Bruna, clapejada i coberta d’apèndixs carnosos que imiten les algues, l’escórpora fosca es distingeix per dos tentacles llargs damunt dels ulls. Es queda immòbil damunt la roca esperant que hi passi una gamba o un peix petit i l’engoleix d’una xuclada de mil·lisegons.',
      'Les espines dorsals tenen glàndules de verí. La punxada és molt dolorosa però no perillosa, i el tractament és senzill: aigua tan calenta com es pugui suportar, perquè la toxina és termolàbil. La regla pràctica sota l’aigua és no recolzar mai la mà en una roca sense mirar-la.',
    ],
    onTrobar:
      'Damunt la roca coberta d’algues, a qualsevol fondària. Busqueu la silueta, no el color.',
  },
  {
    slug: 'cap-roig',
    nom: 'Cap-roig',
    cientific: 'Scorpaena scrofa',
    autoria: 'Linnaeus, 1758',
    familia: 'Scorpaenidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 50 cm',
    resum:
      'L’escórpora gran i vermella, la del suquet. Més fonda, més massissa i molt menys freqüent que la fosca.',
    text: [
      'De color vermell o rosat amb clapes fosques, el cap-roig té el cap enorme i espinós i una fossa profunda darrere dels ulls. És l’escórpora de mida gran del Mediterrani i un dels peixos més apreciats de la cuina catalana de peix de roca.',
      'A diferència de l’escórpora fosca, prefereix els fons de roca barrejats amb sorra i grava i baixa molt més. Dins la reserva se’l troba a la part fonda, sovint mig enterrat al detrític del peu de les barres.',
    ],
    onTrobar:
      'A la vora exterior del grapissar, per sota dels quinze metres, damunt fons mixtos de roca i grava.',
  },
  {
    slug: 'escorpora-vermella',
    nom: 'Escórpora vermella',
    cientific: 'Scorpaena notata',
    autoria: 'Rafinesque, 1810',
    familia: 'Scorpaenidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 18 cm',
    resum:
      'La més petita de les tres escórpores, amb una taca negra inconfusible entre les espines dorsals.',
    text: [
      'Vermellosa i menuda, es reconeix per una taca fosca ben definida a la membrana entre les espines vuitena i desena de l’aleta dorsal, i perquè els tentacles supraoculars són molt curts o inexistents.',
      'Comparteix hàbitat amb l’escórpora fosca però tendeix a ocupar les escletxes i els replecs més estrets, i és molt més abundant del que sembla: simplement, no se la veu.',
    ],
    onTrobar: 'Encaixada en petites cavitats de la roca biogènica, a mitja fondària.',
  },
  {
    slug: 'mollera-roquera',
    nom: 'Mòllera roquera',
    cientific: 'Phycis phycis',
    autoria: '(Linnaeus, 1766)',
    familia: 'Phycidae',
    habitat: 'roca',
    profunditat: [12, 25],
    mida: 'fins a 65 cm',
    resum:
      'Un gàdid mediterrani de pell suau i aletes ventrals convertides en dos filaments sensorials.',
    text: [
      'De color bru uniforme i cos tou, la mòllera roquera té les aletes pelvianes reduïdes a dos filaments llargs que arrossega pel fons com un parell de bastons de cec, palpant el substrat a la recerca de crustacis.',
      'És estrictament nocturna i passa el dia al fons d’una cova, sovint tan endins que només se’n veu la cua. La seva presència és un bon indicador que la cavitat és fonda i estable.',
    ],
    onTrobar:
      'Al fons de les cavitats més grans i fosques, a la part exterior i fonda de la reserva.',
  },
  {
    slug: 'vaca-serrana',
    nom: 'Vaca serrana',
    cientific: 'Serranus scriba',
    autoria: '(Linnaeus, 1758)',
    familia: 'Serranidae',
    habitat: 'roca',
    profunditat: [2, 25],
    mida: 'fins a 36 cm',
    resum:
      'Porta escrit al cap un garbuix de línies blaves i vermelles, i una taca blava al ventre. Curiosa fins a la temeritat.',
    text: [
      'És un dels peixos més fàcils de veure del grapissar i un dels més bonics de prop: el cap està cobert d’arabescos blaus i taronges, el cos té cinc o set bandes fosques verticals i al ventre hi llueix una taca blava cel característica.',
      'És hermafrodita simultània — cada individu té alhora teixit ovàric i testicular — i defensa un territori petit del qual no s’allunya. Si us hi atureu, se us acostarà: viu de sorprendre gambes al descobert i qualsevol cosa que remogui el fons li interessa.',
    ],
    onTrobar:
      'Arreu, sobre la roca i a la vora de la posidònia, entre dos i vint metres. És el primer peix que veureu.',
  },
  {
    slug: 'cabrilla',
    nom: 'Cabrilla',
    cientific: 'Serranus cabrilla',
    autoria: '(Linnaeus, 1758)',
    familia: 'Serranidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 40 cm',
    resum:
      'Més esvelta i més pàl·lida que la vaca serrana, amb tres bandes longitudinals grogues i el ventre net.',
    text: [
      'La cabrilla té el cos allargat, de color rosat o bru clar, amb set o nou bandes verticals fosques creuades per dues o tres línies horitzontals groguenques. No té la taca blava ventral de la vaca serrana, que és la manera ràpida de separar-les.',
      'És menys territorial i més mòbil que la seva parenta, i baixa molt més: a la Mediterrània se n’ha trobat a centenars de metres. Dins la reserva ocupa preferentment els fons mixtos del perímetre.',
    ],
    onTrobar: 'A la transició de roca a detrític, per sota dels deu metres.',
  },
  {
    slug: 'castanyola',
    nom: 'Castanyola',
    cientific: 'Chromis chromis',
    autoria: '(Linnaeus, 1758)',
    familia: 'Pomacentridae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 15 cm',
    resum:
      'El núvol fosc que respira damunt de cada barra. Els juvenils són d’un blau elèctric que no sembla mediterrani.',
    text: [
      'Els adults són bruns o gairebé negres, amb la cua profundament forcada i unes escates grans que els donen un aspecte reticulat. Formen bancs de desenes o centenars d’individus que suren un parell de metres per damunt de la roca, capturant plàncton, i que es desfan cap al refugi tots alhora quan passa un depredador.',
      'Els juvenils, en canvi, són d’un blau cobalt fluorescent espectacular i apareixen a finals d’estiu. El mascle prepara un niu damunt la roca, hi atrau diverses femelles i després vigila i venta els ous fins que eclosionen.',
    ],
    onTrobar:
      'Suspesa damunt de qualsevol barra rocosa. És el peix més abundant i visible de la reserva.',
  },
  {
    slug: 'sarg',
    nom: 'Sarg',
    cientific: 'Diplodus sargus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'roca',
    profunditat: [2, 25],
    mida: 'fins a 45 cm',
    resum:
      'Platejat amb vuit o nou bandes fosques verticals i una taca negra a l’arrencada de la cua. El sparid clàssic de roca.',
    text: [
      'Cos alt i comprimit, argentat i molt lluent, amb bandes fosques verticals que s’encenen o s’esvaeixen segons l’estat de l’animal i una taca negra ben marcada al peduncle caudal. Les dents incisives li permeten arrencar musclos i garotes de la roca.',
      'Va en grups i és un dels indicadors clàssics de l’efecte reserva: allà on es deixa de pescar, els sargs es fan grossos i deixen de fugir. Comparar la mida mitjana dels sargs de dins i de fora d’una àrea protegida és una de les mesures més senzilles que fan servir els biòlegs.',
    ],
    onTrobar:
      'Per damunt de les barres, en grups mòbils. A l’estiu, molt a prop de la superfície sobre la roca somera.',
  },
  {
    slug: 'variada',
    nom: 'Variada',
    cientific: 'Diplodus vulgaris',
    autoria: '(Geoffroy Saint-Hilaire, 1817)',
    familia: 'Sparidae',
    habitat: 'roca',
    profunditat: [2, 25],
    mida: 'fins a 45 cm',
    resum:
      'Dues bandes fosques i amples, una al clatell i l’altra a la cua: l’única cosa que cal mirar per no confondre-la amb el sarg.',
    text: [
      'La variada té el mateix perfil que el sarg però només dues bandes fosques, gruixudes, una just darrere del cap i l’altra al peduncle caudal, i unes línies daurades longitudinals molt fines al cos.',
      'És probablement el sparid més abundant del grapissar. Forma agrupacions denses que remenen el fons buscant invertebrats i que segueixen amb interès qualsevol bussejador que aixequi sediment.',
    ],
    onTrobar: 'A tocar del fons, entre les barres i sobre els herbeis del voltant.',
  },
  {
    slug: 'morruda',
    nom: 'Morruda',
    cientific: 'Diplodus puntazzo',
    autoria: '(Walbaum, 1792)',
    familia: 'Sparidae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 60 cm',
    resum: 'El perfil punxegut la delata: té el musell allargat i el front recte.',
    text: [
      'La morruda es reconeix pel cap acabat en punta i pel front gairebé vertical, molt diferent del perfil arrodonit del sarg. Té bandes verticals alternes, amples i estretes, i una taca negra que envolta completament el peduncle caudal.',
      'És més solitària i més esquerpa que els altres Diplodus, i freqüenta les zones on hi ha molt de moviment d’aigua. A l’hivern s’acosta a la costa a fresar.',
    ],
    onTrobar: 'A la part alta de les barres més exposades, sovint sola o en parella.',
  },
  {
    slug: 'sard-imperial',
    nom: 'Sard imperial',
    cientific: 'Diplodus cervinus',
    autoria: '(Lowe, 1838)',
    familia: 'Sparidae',
    habitat: 'roca',
    profunditat: [8, 25],
    mida: 'fins a 55 cm',
    resum:
      'Cinc bandes negres molt amples sobre fons daurat. El més espectacular i el més rar de la família.',
    text: [
      'És inconfundible: cinc franges verticals negres i amplíssimes sobre un cos daurat, i uns llavis gruixuts i carnosos. Els exemplars grossos imposen.',
      'A la costa catalana és escàs i molt sensible a la pesca submarina, perquè és curiós i s’acosta. La seva presència en una zona sol indicar que fa temps que no s’hi pesca gaire.',
    ],
    onTrobar:
      'A les zones rocoses més fondes i menys transitades de la reserva, sovint en petits grups.',
  },
  {
    slug: 'cantera',
    nom: 'Càntera',
    cientific: 'Spondyliosoma cantharus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 60 cm',
    resum:
      'Gris plom amb reflexos irisats i ratlles longitudinals daurades; en època de fresa el mascle es torna gairebé negre.',
    text: [
      'La càntera té el cos oval i comprimit, gris blavós amb línies daurades fines, i un ull relativament gran. Forma bancs a mitja aigua que giren lentament damunt del fons.',
      'És una de les poques espardenyes de la família que fa niu: el mascle neteja una clapa de sorra o grava, hi atrau les femelles i després en defensa els ous. Durant aquest període es tenyeix de fosc i li apareixen unes bandes verticals clares.',
    ],
    onTrobar: 'A mitja aigua sobre les barres, i a les clarianes de sorra durant la primavera.',
  },
  {
    slug: 'dentol',
    nom: 'Dèntol',
    cientific: 'Dentex dentex',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 100 cm',
    iucn: 'VU',
    resum:
      'El caçador ràpid del grapissar: apareix de cop, travessa la barra i desapareix mar endins.',
    text: [
      'Massís, de color blau grisós amb reflexos irisats i puntejat de petites taques fosques quan és jove, el dèntol té uns ullals ben visibles a la part davantera de les mandíbules. Els adults grossos són d’un gris blavós uniforme i el front se’ls fa abrupte.',
      'Caça a l’aguait i a la carrera, sovint a l’alba i al capvespre. És un dels peixos que més se’n beneficia, d’una reserva: necessita superfície, tranquil·litat i temps per arribar a mida adulta, i tot això és exactament el que la pesca intensa no li dona.',
    ],
    onTrobar:
      'A l’aigua lliure just per damunt de les barres exteriors, de pas. Rarament es queda quiet.',
  },
  {
    slug: 'pagre',
    nom: 'Pagre',
    cientific: 'Pagrus pagrus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'roca',
    profunditat: [8, 25],
    mida: 'fins a 90 cm',
    resum: 'Rosat amb tornassols de plata i les puntes de la cua blanques. Elegant i desconfiat.',
    text: [
      'De color rosa argentat amb un puntejat blau molt fi al dors, el pagre es distingeix del dèntol pel perfil més arrodonit i, sobretot, per les puntes blanques dels lòbuls de la cua.',
      'Freqüenta els fons mixtos de roca i sorra i, com el dèntol, és una espècie que la pesca ha rarificat molt al litoral català. Els juvenils entren als herbeis; els adults es queden al perímetre fondo.',
    ],
    onTrobar: 'A la vora exterior del grapissar, sobre fons de roca esquitxada de sorra.',
  },
  {
    slug: 'tord-negre',
    nom: 'Tord negre',
    cientific: 'Labrus merula',
    autoria: 'Linnaeus, 1758',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 45 cm',
    resum:
      'Verd fosc o blau pissarra, amb el rastre d’unes ratlles blavoses a les aletes. Ronda la roca sense presses.',
    text: [
      'És un làbrid gros i robust, de color verd oliva a blau fosc segons la llum i l’edat, amb el marge de les aletes dorsal i anal marcat per una línia blava. Neda amb el moviment característic de la família, remant només amb les pectorals.',
      'S’alimenta de mol·luscs i crustacis que arrenca de la roca. Dorm de nit encaixat en una escletxa i, com molts làbrids, pot cobrir-se d’una capa de mucus mentre ho fa.',
    ],
    onTrobar: 'Vorejant les barres a poca distància del fons, sol.',
  },
  {
    slug: 'llavio',
    nom: 'Llavió',
    cientific: 'Symphodus tinca',
    autoria: '(Linnaeus, 1758)',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [2, 25],
    mida: 'fins a 44 cm',
    resum:
      'El més gros dels tords petits. En època de cria el mascle es cobreix de verd i blau i construeix un niu d’algues.',
    text: [
      'De cos allargat i llavis prominents, el llavió té un dibuix de línies fosques longitudinals sobre fons verdós o marronós. Al maig i al juny el mascle es transforma: se li encén el cap de blau i verd metàl·lics i li apareix una taca fosca darrere l’ull.',
      'Aleshores construeix un niu amb fragments d’alga que enganxa entre les roques, hi atrau successives femelles i el vigila amb una tenacitat notable, escombrant-lo amb les aletes perquè no s’hi acumuli sediment.',
    ],
    onTrobar: 'Sobre la roca coberta d’algues i a la vora de la posidònia, a poca fondària.',
  },
  {
    slug: 'tord-roquer',
    nom: 'Tord roquer',
    cientific: 'Symphodus roissali',
    autoria: '(Risso, 1810)',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [1, 15],
    mida: 'fins a 17 cm',
    resum:
      'Petit, rabassut i clapejat de verd; un dels habitants més constants de la roca somera coberta d’algues.',
    text: [
      'Té el cos curt i alt, de color verd bru amb taques irregulars i cinc bandes fosques poc definides. La femella és discreta; el mascle reproductor s’omple de punts vermells i verds i se li marca un dibuix reticulat.',
      'Fa nius d’algues com el llavió, però més petits i sovint amagats sota una pedra. És molt abundant a la franja de dos a vuit metres, que és precisament la que qualsevol persona pot veure amb un tub.',
    ],
    onTrobar:
      'Entre les algues de la part alta de les barres, molt a prop de la costa. Ideal per veure fent snorkel.',
  },
  {
    slug: 'tord-docels',
    nom: 'Tord d’ocels',
    cientific: 'Symphodus ocellatus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [1, 20],
    mida: 'fins a 12 cm',
    resum:
      'Minúscul i, en el mascle nupcial, d’un blau i taronja que sembla tropical. Té un ocel negre voltat de vermell rere l’ull.',
    text: [
      'Es reconeix per la taca ocel·lada — negra amb anell vermell i groc — situada just darrere de l’opercle. Els mascles en zel, al maig, es cobreixen de línies blaves elèctriques sobre fons taronja i defensen nius diminuts.',
      'És una de les espècies que millor il·lustra que la riquesa d’un fons no es mesura en peixos grossos: en un metre quadrat de roca poblada n’hi pot haver mitja dotzena.',
    ],
    onTrobar: 'Entre les algues i els replecs de la roca somera, sempre en moviment.',
  },
  {
    slug: 'fadri',
    nom: 'Fadrí',
    cientific: 'Thalassoma pavo',
    autoria: '(Linnaeus, 1758)',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [1, 20],
    mida: 'fins a 25 cm',
    resum:
      'El peix més acolorit de la costa catalana i un termòmetre vivent: cada any puja més amunt.',
    text: [
      'El mascle terminal és verd i blau amb una banda vertical taronja darrere les pectorals i el cap ratllat de línies blaves sinuoses; les femelles i els joves són vermellosos amb cinc o sis bandes fosques i una taca blava al dors.',
      'És una espècie d’afinitats càlides que fa dècades era rara al nord de l’Ebre i que ara és habitual fins al cap de Creus. La seva expansió cap al nord és un dels indicadors més citats de l’escalfament del Mediterrani occidental.',
    ],
    onTrobar: 'A la roca somera i assolellada, entre un i deu metres, sobretot a l’estiu.',
  },
  {
    slug: 'bavosa-cornuda',
    nom: 'Bavosa cornuda',
    cientific: 'Parablennius gattorugine',
    autoria: '(Linnaeus, 1758)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 30 cm',
    resum:
      'La bavosa grossa del grapissar, amb dos tentacles ramificats damunt els ulls que semblen plomalls.',
    text: [
      'Té el cos allargat i sense escates, de color bru amb set bandes fosques verticals, i uns apèndixs supraoculars ramificats molt vistosos. Recolza el cap a la vora del forat i us mira amb una expressió que sembla clarament de contrarietat.',
      'No neda gaire: es desplaça a salts pel fons, recolzant-se en les pectorals. Ocupa un forat concret i el defensa, i el mascle vigila la posta enganxada a la paret interior.',
    ],
    onTrobar: 'Al forat més insospitat de la roca. Mireu els forats petits, no l’aigua lliure.',
  },
  {
    slug: 'bavosa-ratllada',
    nom: 'Bavosa ratllada',
    cientific: 'Parablennius rouxi',
    autoria: '(Cocco, 1833)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 8 cm',
    resum:
      'Blanca amb una única ratlla negra que li recorre tot el cos, del morro a la cua. Impossible de confondre.',
    text: [
      'És menuda, translúcida i porta una línia negra perfectament recta de punta a punta. Sol viure dins forats abandonats de dàtils de mar o de cucs, dels quals només treu el cap.',
      'Per veure-la cal aturar-se i mirar la roca a un pam de distància durant una estona. És una de les recompenses de fer snorkel a poc a poc.',
    ],
    onTrobar: 'Als forats cilíndrics de la roca coral·lígena, entre tres i quinze metres.',
  },
  {
    slug: 'gobit-vermell',
    nom: 'Gòbit vermell',
    cientific: 'Gobius cruentatus',
    autoria: 'Gmelin, 1789',
    familia: 'Gobiidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 18 cm',
    resum:
      'Marró marbrat amb unes ratlles d’un vermell sang als llavis i les galtes que semblen pintades.',
    text: [
      'És el gòbit més gros i vistós dels nostres fons: cos bru clapejat i, al cap, un ratllat vermell intens sobre la galta i el llavi superior. Té les aletes pelvianes fusionades en un disc de subjecció, com tots els gòbits.',
      'S’està posat damunt la roca o el detrític, immòbil, i fa salts curts quan se’l molesta. Prefereix els fons mixtos i ombrívols del perímetre de la reserva.',
    ],
    onTrobar: 'Posat sobre la roca a la base de les barres, per sota dels deu metres.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // LES PRADERIES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'salpa',
    nom: 'Salpa',
    cientific: 'Sarpa salpa',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'praderia',
    profunditat: [1, 20],
    mida: 'fins a 50 cm',
    resum:
      'Deu o onze ratlles daurades longitudinals. És l’únic peix herbívor abundant del Mediterrani.',
    text: [
      'Les salpes van en bancs compactes que pasturen la posidònia i les algues amb un mossec incisiu característic: si trobeu fulles de posidònia tallades en diagonal i amb el marge en forma de mitja lluna, hi han estat.',
      'Digereixen les fulles gràcies a un intestí llarguíssim i a una flora microbiana especialitzada. Ocasionalment, si han menjat determinades algues, la seva carn pot provocar al·lucinacions — un efecte documentat des de l’antiguitat i que li ha valgut el sobrenom de «peix somiador».',
    ],
    onTrobar:
      'En bancs sobre l’herbei i la roca somera. Al capvespre pugen cap a la superfície i són molt fàcils de veure.',
  },
  {
    slug: 'oblada',
    nom: 'Oblada',
    cientific: 'Oblada melanura',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'praderia',
    profunditat: [0, 20],
    mida: 'fins a 34 cm',
    resum:
      'Platejada, esvelta i amb una taca negra voltada de blanc a l’arrencada de la cua, com un punt final.',
    text: [
      'L’oblada té el cos fusiforme i molt lluent, amb línies grises longitudinals molt fines i, sobretot, un ocel negre encerclat de blanc al peduncle caudal que la identifica a l’instant.',
      'Neda a mitja aigua en grups laxos, per damunt de l’herbei i de la roca, i s’alimenta de petits invertebrats i d’algues. A la Masia Blanca és una de les espècies més constants al llarg de tot l’any.',
    ],
    onTrobar: 'A mitja aigua sobre la praderia, sovint barrejada amb bancs de castanyoles.',
  },
  {
    slug: 'esparrall',
    nom: 'Esparrall',
    cientific: 'Diplodus annularis',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'praderia',
    profunditat: [1, 20],
    mida: 'fins a 24 cm',
    resum:
      'El sparid petit i daurat de l’herbei, amb un anell negre a la cua i les aletes ventrals grogues.',
    text: [
      'Rodonet, de color daurat pàl·lid, amb una taca negra que forma un anell complet al peduncle caudal i les pelvianes clarament grogues. És el més petit dels Diplodus de casa nostra.',
      'Viu associat a la posidònia i a la cimodocea, on troba menjar i protecció. És una espècie clau del bressol: els herbeis de la reserva n’acullen densitats altíssimes de juvenils.',
    ],
    onTrobar: 'Dins i just damunt l’herbei, en grups nombrosos, entre dos i quinze metres.',
  },
  {
    slug: 'donzella',
    nom: 'Donzella',
    cientific: 'Coris julis',
    autoria: '(Linnaeus, 1758)',
    familia: 'Labridae',
    habitat: 'praderia',
    profunditat: [1, 25],
    mida: 'fins a 25 cm',
    resum:
      'Neda sense parar amb un moviment ondulant. Comença la vida de femella marró i pot acabar-la de mascle multicolor.',
    text: [
      'La fase inicial és bruna pel dors i blanca pel ventre, amb una línia longitudinal clara. La fase terminal — sempre mascle — és espectacular: verd i blau amb una banda taronja en ziga-zaga al costat i una taca negra a la pectoral.',
      'Aquest canvi de sexe i de lliurea es diu hermafroditisme protogínic, i és la norma entre els làbrids. La donzella s’enterra a la sorra per dormir i per fugir del fred, i desapareix del tot de la vista a l’hivern.',
    ],
    onTrobar:
      'Pertot arreu, sempre en moviment, a la vora de l’herbei i sobre la sorra. Segueix els bussejadors.',
  },
  {
    slug: 'cavall-de-mar',
    nom: 'Cavall de mar',
    cientific: 'Hippocampus guttulatus',
    autoria: 'Cuvier, 1829',
    familia: 'Syngnathidae',
    habitat: 'praderia',
    profunditat: [1, 15],
    mida: 'fins a 21 cm',
    iucn: 'DD',
    resum:
      'El cavall de morro llarg, amb filaments a la crinera. Viu agafat amb la cua a una fulla i no es mou.',
    text: [
      'Es distingeix del cavall de morro curt pel musell més llarg — més d’un terç de la longitud del cap — i pels apèndixs cutanis del clatell i el dors, que li donen aspecte de tenir crinera. Sol ser bru o verdós amb puntets clars.',
      'És el mascle qui es queda embarassat: la femella li diposita els ous en una bossa ventral, ell els fecunda, els incuba unes tres setmanes i després «pareix» les cries. Depèn absolutament de la posidònia i de la cimodocea, i és per això que la protecció dels herbeis de la Masia Blanca hi és determinant.',
    ],
    onTrobar:
      'Ancorat a les fulles de l’herbei, sovint a poca fondària. Cal buscar-lo molt a poc a poc i sense tocar-lo mai.',
  },
  {
    slug: 'cavallet-de-morro-curt',
    nom: 'Cavallet de morro curt',
    cientific: 'Hippocampus hippocampus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Syngnathidae',
    habitat: 'praderia',
    profunditat: [2, 20],
    mida: 'fins a 15 cm',
    resum:
      'Més petit, més llis i amb el morro curt. Prefereix la sorra i la cimodocea a la posidònia densa.',
    text: [
      'Té el cos més arrodonit i sense filaments, el musell clarament més curt que el del seu parent, i sovint un color més uniforme, groguenc o negrós.',
      'Ocupa fons més oberts, on hi ha menys estructura on agafar-se, i per això sovint se’l troba enroscat a una tija solitària o a una resta de xarxa. Totes dues espècies de cavall de mar estan protegides i és il·legal capturar-les.',
    ],
    onTrobar: 'A les clarianes de cimodocea i a la vora sorrenca de l’herbei.',
  },
  {
    slug: 'agulleta-de-bosc',
    nom: 'Agulleta de bosc',
    cientific: 'Syngnathus typhle',
    autoria: 'Linnaeus, 1758',
    familia: 'Syngnathidae',
    habitat: 'praderia',
    profunditat: [1, 15],
    mida: 'fins a 35 cm',
    resum:
      'Una fulla de posidònia que de sobte es gira. El morro és aplanat verticalment, com un ganivet.',
    text: [
      'És un peix pipa de cos rígid i prim que es manté vertical entre les fulles per desaparèixer-hi. El musell, comprimit lateralment, és el tret que el separa de les altres agulletes.',
      'Com els cavalls de mar, és el mascle qui incuba els ous en una bossa. S’alimenta xuclant petits crustacis amb un moviment tan ràpid que costa de veure.',
    ],
    onTrobar: 'Immòbil i vertical dins l’herbei dens. És pràcticament invisible si no es mou.',
  },
  {
    slug: 'agulleta-de-mar',
    nom: 'Agulleta de mar',
    cientific: 'Syngnathus acus',
    autoria: 'Linnaeus, 1758',
    familia: 'Syngnathidae',
    habitat: 'praderia',
    profunditat: [3, 25],
    mida: 'fins a 50 cm',
    resum: 'La més llarga de les agulletes, amb un bony ben marcat al davant dels ulls.',
    text: [
      'De cos molt allargat i secció angulosa, bru amb bandes clares, té el morro cilíndric i una protuberància característica just davant dels ulls.',
      'Tolera fons més oberts i més fondos que l’agulleta de bosc, i sovint reposa estirada damunt la sorra a la vora de l’herbei, on es confon amb una branqueta.',
    ],
    onTrobar: 'Damunt la sorra al límit de la praderia, i entre restes vegetals acumulades.',
  },
  {
    slug: 'tord-gris',
    nom: 'Tord gris',
    cientific: 'Symphodus cinereus',
    autoria: '(Bonnaterre, 1788)',
    familia: 'Labridae',
    habitat: 'praderia',
    profunditat: [1, 15],
    mida: 'fins a 16 cm',
    resum:
      'Discret, gris o beix, amb una taca fosca al peduncle caudal. El tord dels fons tous.',
    text: [
      'A diferència dels seus parents, el tord gris viu sobre fons de sorra i herbei més que no pas sobre roca. Té una línia fosca que li travessa l’ull i una taca al naixement de la cua.',
      'El mascle excava un petit clot a la sorra i hi construeix un niu d’algues, que vigila i aireja contínuament. És fàcil de veure fent snorkel a la zona somera de la reserva.',
    ],
    onTrobar: 'Sobre les clapes de sorra entre mates de cimodocea, a poca fondària.',
  },
  {
    slug: 'joell',
    nom: 'Joell',
    cientific: 'Atherina boyeri',
    autoria: 'Risso, 1810',
    familia: 'Atherinidae',
    habitat: 'praderia',
    profunditat: [0, 10],
    mida: 'fins a 20 cm',
    resum:
      'Translúcid, amb una banda de plata al costat. Forma núvols d’alevins a la vora de la platja.',
    text: [
      'Petit i gairebé transparent, amb una franja platejada horitzontal i dues aletes dorsals separades. Els bancs poden ser de milers d’individus i canvien de direcció alhora.',
      'És menjar bàsic per a llobarros, espets i ocells marins, i per tant una peça central de la xarxa tròfica de la reserva. Suporta molt bé les variacions de salinitat i entra a les desembocadures.',
    ],
    onTrobar: 'A la franja de superfície sobre l’herbei i prop de l’escullera del port.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ELS FONS DE SORRA I FANG
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'orada',
    nom: 'Orada',
    cientific: 'Sparus aurata',
    autoria: 'Linnaeus, 1758',
    familia: 'Sparidae',
    habitat: 'sorra',
    profunditat: [1, 25],
    mida: 'fins a 70 cm',
    resum:
      'La franja daurada entre els ulls li dona nom, i la reserva es va crear en bona part per ella.',
    text: [
      'Cos oval, argentat i alt, amb una banda daurada entre els ulls i una taca fosca a l’inici de la línia lateral. Té una dentadura formidable — incisives al davant i molars al darrere — amb què tritura cloïsses, escopinyes i cargols.',
      'La documentació oficial de la reserva cita explícitament l’orada com una de les espècies d’interès pesquer per a les quals el grapissar funciona com a zona de cria. És, juntament amb el moll, el motiu econòmic pel qual la confraria de pescadors va donar suport a la protecció l’any 1999.',
    ],
    onTrobar:
      'Sobre les clapes de sorra entre les barres, buscant mol·luscs. Se sent el cruixit quan els trenca.',
  },
  {
    slug: 'moll-de-roca',
    nom: 'Moll de roca',
    cientific: 'Mullus surmuletus',
    autoria: 'Linnaeus, 1758',
    familia: 'Mullidae',
    habitat: 'sorra',
    profunditat: [3, 25],
    mida: 'fins a 40 cm',
    resum:
      'Dues barbetes llargues que remenen la sorra sense parar. L’altra espècie que va motivar la reserva.',
    text: [
      'Vermellós i ratllat de groc, amb el perfil del cap gairebé vertical i dues barbetes sota la barbeta inferior que fa servir per palpar el sediment i detectar cucs i crustacis enterrats.',
      'La remoguda que fa deixa un núvol de sorra que atrau uns comensals fidels: sovint hi ha un o dos sargs o variades just al darrere, aprofitant el que el moll destapa. És una de les dues espècies que la fitxa oficial de la reserva assenyala com a beneficiàries directes de la protecció.',
    ],
    onTrobar:
      'Sobre les llengües de sorra i grava entre barra i barra, sol o en petits grups, tot el dia.',
  },
  {
    slug: 'moll-de-fang',
    nom: 'Moll de fang',
    cientific: 'Mullus barbatus',
    autoria: 'Linnaeus, 1758',
    familia: 'Mullidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 33 cm',
    resum:
      'Més pàl·lid i de perfil més abrupte que el moll de roca; prefereix els fons tous i fondos.',
    text: [
      'Es distingeix del moll de roca pel front gairebé vertical i per la manca de ratlles grogues longitudinals ben marcades: el seu color és rosat uniforme.',
      'És l’espècie que sosté bona part de la pesca d’arrossegament del litoral català. Dins la reserva, els fons de fang del perímetre li fan de refugi i de zona de creixement.',
    ],
    onTrobar: 'A les zones de fang i sorra fina de la part exterior, per sota dels quinze metres.',
  },
  {
    slug: 'mabre',
    nom: 'Mabre',
    cientific: 'Lithognathus mormyrus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'sorra',
    profunditat: [1, 20],
    mida: 'fins a 55 cm',
    resum:
      'Platejat amb catorze bandes fosques verticals alternades, amples i estretes. El sparid de la platja.',
    text: [
      'De cos allargat i musell punxegut, el mabre té un patró inconfusible de bandes verticals fosques de dues amplades que alternen regularment. Bufa la sorra per desenterrar cucs i petits bivalves.',
      'Freqüenta la franja de rompent i els fons sorrencs somers, i és un dels peixos que es poden veure des de la mateixa platja del Francàs sense necessitat d’anar gaire lluny.',
    ],
    onTrobar: 'A la sorra somera, entre un i vuit metres, sovint a la mateixa vora de la platja.',
  },
  {
    slug: 'pagell',
    nom: 'Pagell',
    cientific: 'Pagellus erythrinus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'sorra',
    profunditat: [8, 25],
    mida: 'fins a 60 cm',
    resum: 'Rosa viu amb l’ull petit i el cap arrodonit; un dels peixos de sorra més comuns.',
    text: [
      'De color rosa argentat amb reflexos blavosos al dors i un puntejat fi, el pagell té l’ull relativament petit i les vores de l’opercle vermelloses.',
      'Neix femella i canvia a mascle a partir dels dos o tres anys. Menja invertebrats del fons i peixets, i s’acosta a la costa a l’estiu.',
    ],
    onTrobar: 'A la sorra i al detrític del perímetre, sovint en grups poc cohesionats.',
  },
  {
    slug: 'besuc-blanc',
    nom: 'Besuc blanc',
    cientific: 'Pagellus acarne',
    autoria: '(Risso, 1827)',
    familia: 'Sparidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 36 cm',
    resum:
      'Rosat pàl·lid amb una taca negra ben visible a l’aixella de la pectoral. Més fondo que el pagell.',
    text: [
      'S’assembla al pagell però té el cos més esvelt, el color més apagat i una taca fosca característica a la base de l’aleta pectoral.',
      'Viu preferentment per sota dels vint metres, de manera que dins la reserva només apareix a la corona exterior, on el fons ja s’ha allunyat de la roca.',
    ],
    onTrobar: 'Al límit fondo de la zona d’amortiment, sobre fons de sorra i fang.',
  },
  {
    slug: 'raor',
    nom: 'Raor',
    cientific: 'Xyrichtys novacula',
    autoria: '(Linnaeus, 1758)',
    familia: 'Labridae',
    habitat: 'sorra',
    profunditat: [3, 25],
    mida: 'fins a 30 cm',
    resum:
      'El front és una fulla d’afaitar: hi entra a la sorra de cap i desapareix en un instant.',
    text: [
      'Rosat o vermellós, amb el cos molt comprimit lateralment i el perfil frontal tallat gairebé en vertical. Aquesta forma li permet capbussar-se dins la sorra fina i quedar-hi enterrat en menys d’un segon, que és el seu recurs habitual davant de qualsevol amenaça.',
      'Dorm enterrat cada nit. És un peix de gran prestigi gastronòmic a les Balears i molt buscat, i necessita fons de sorra neta i fina: la reserva n’hi garanteix.',
    ],
    onTrobar:
      'A les clapes de sorra fina i neta entre les barres. Si en veieu un i s’esfuma, era ell.',
  },
  {
    slug: 'sonso',
    nom: 'Sonso',
    cientific: 'Gymnammodytes cicerelus',
    autoria: '(Rafinesque, 1810)',
    familia: 'Ammodytidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 17 cm',
    resum:
      'Prim com un fideu i platejat. Es fa i es desfà en bancs que entren i surten de la sorra alhora.',
    text: [
      'És un peix llarg, cilíndric i translúcid, amb la mandíbula inferior projectada endavant. Forma bancs densos a mitja aigua que, davant d’un depredador, es llancen tots de cop contra el fons i desapareixen dins la sorra.',
      'Aquest comportament el fa dependre absolutament de fons de sorra neta i ben oxigenada. És una espècie de gran importància tròfica i objecte d’una pesqueria artesanal molt regulada a Catalunya.',
    ],
    onTrobar:
      'Sobre les grans clapes de sorra de la perifèria, en bancs. La vista d’un banc entrant a la sorra és una de les millors coses que ofereix el grapissar.',
  },
  {
    slug: 'rata',
    nom: 'Rata',
    cientific: 'Uranoscopus scaber',
    autoria: 'Linnaeus, 1758',
    familia: 'Uranoscopidae',
    habitat: 'sorra',
    profunditat: [12, 25],
    mida: 'fins a 40 cm',
    resum:
      'Enterrada fins als ulls, amb la boca cap amunt i un filament rosat que fa servir d’esquer viu.',
    text: [
      'El cap és enorme, ossi i aplanat, amb els ulls al capdamunt i la boca vertical. S’enterra deixant només els ulls i la boca a fora i mou un apèndix vermellós de dins la mandíbula per atraure peixos petits, que engoleix d’una revolada.',
      'Té dues espines verinoses darrere l’opercle i, a més, òrgans elèctrics darrere els ulls capaços de descàrregues febles. És un dels animals més estranys de la reserva i un dels que menys es veuen.',
    ],
    onTrobar:
      'Enterrada a la sorra i el fang de la zona fonda. Es delata per dos ulls i una boca que no encaixen amb el fons.',
  },
  {
    slug: 'aranya',
    nom: 'Aranya de cap negre',
    cientific: 'Trachinus draco',
    autoria: 'Linnaeus, 1758',
    familia: 'Trachinidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 45 cm',
    resum:
      'El peix més verinós de la costa catalana. Enterrat a la sorra, amb la primera dorsal negra a l’aguait.',
    text: [
      'Cos allargat i comprimit, groguenc amb línies obliqües blaves i grogues, ulls al capdamunt del cap i una primera aleta dorsal petita i completament negra. Passa el dia enterrat amb només els ulls fora.',
      'Les espines de la dorsal negra i la de l’opercle tenen glàndules de verí i la punxada és extremament dolorosa. Com amb l’escórpora, el remei immediat és submergir la ferida en aigua molt calenta. Pràcticament totes les picades es produeixen trepitjant-la a la vora de la platja.',
    ],
    onTrobar:
      'Enterrada a la sorra, de somer a fondo. És el motiu pel qual convé arrossegar els peus en lloc de fer passes.',
  },
  {
    slug: 'taco',
    nom: 'Tacó',
    cientific: 'Bothus podas',
    autoria: '(Delaroche, 1809)',
    familia: 'Bothidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 25 cm',
    resum:
      'Un plat rodó amb els dos ulls al costat esquerre, capaç de copiar el dibuix de la sorra en segons.',
    text: [
      'És un peix pla dextrògir invertit: neix simètric i, en créixer, l’ull dret li migra cap al costat esquerre, de manera que acaba estirat sobre el costat cec. Els mascles tenen els ulls molt més separats que les femelles.',
      'La seva capacitat de mimetisme és extraordinària: canvia de patró i de to per reproduir la textura del fons on s’acaba de posar. Sovint s’escampa una fina capa de sorra pel damunt amb les aletes.',
    ],
    onTrobar:
      'Damunt la sorra clara entre les barres. Normalment el veureu quan ja us ha vist ell i arrenca a nedar.',
  },
  {
    slug: 'llenguado',
    nom: 'Llenguado',
    cientific: 'Solea solea',
    autoria: '(Linnaeus, 1758)',
    familia: 'Soleidae',
    habitat: 'sorra',
    profunditat: [8, 25],
    mida: 'fins a 70 cm',
    resum:
      'Oval, bru i amb els dos ulls a la dreta. Passa el dia enterrat i surt a caçar quan es fa fosc.',
    text: [
      'De contorn allargat i arrodonit, color bru amb clapes fosques i una taca negra a la punta de la pectoral, el llenguado té la boca petita i corbada situada en posició ventral.',
      'És nocturn i molt sedentari. Els fons tous protegits de la reserva li serveixen de zona de creixement, i el tresmall — un dels dos arts autoritzats a la corona d’amortiment — és precisament l’art tradicional amb què es pesca.',
    ],
    onTrobar: 'Enterrat als fons de sorra i fang de la perifèria. De dia, gairebé mai a la vista.',
  },
  {
    slug: 'lluerna',
    nom: 'Lluerna',
    cientific: 'Chelidonichthys lucerna',
    autoria: '(Linnaeus, 1758)',
    familia: 'Triglidae',
    habitat: 'sorra',
    profunditat: [8, 25],
    mida: 'fins a 75 cm',
    resum:
      'Camina pel fons amb tres radis lliures de cada pectoral i, quan obre les aletes, són blaves elèctriques.',
    text: [
      'Té el cap gros i cuirassat i el cos vermellós que s’aprima cap a la cua. Els tres primers radis de cada aleta pectoral estan separats i s’han convertit en apèndixs tàctils i gustatius amb què tempteja el sediment mentre «camina».',
      'Quan s’espanta, desplega les pectorals com dos ventalls d’un blau intens amb el marge fosc. També produeix sons greus i audibles amb la bufeta natatòria.',
    ],
    onTrobar: 'Sobre la sorra i el fang de la zona exterior, caminant amb els radis lliures.',
  },
  {
    slug: 'remol',
    nom: 'Rèmol',
    cientific: 'Scophthalmus rhombus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Scophthalmidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 75 cm',
    resum:
      'Peix pla gros i sinistre — amb els ulls a l’esquerra — sense els tubercles ossis del rodaballo.',
    text: [
      'De cos ample i romboïdal, bru clapejat, amb els primers radis de la dorsal ramificats i lliures a la vora del cap. La pell és llisa, cosa que el distingeix del turbot, que la té coberta de tubercles.',
      'És un depredador emboscat que caça peixos petits, sobretot sonsos i joells. Els exemplars grossos són poc freqüents al litoral català, precisament perquè la pesca de fons els afecta molt.',
    ],
    onTrobar: 'Mig enterrat a la sorra propera a la roca, on hi ha bancs de peix petit.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // LA COLUMNA D'AIGUA
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'llobarro',
    nom: 'Llobarro',
    cientific: 'Dicentrarchus labrax',
    autoria: '(Linnaeus, 1758)',
    familia: 'Moronidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 100 cm',
    resum:
      'Plata pura, ràpid i intel·ligent. Entra al grapissar a caçar amb mala mar i marxa quan s’asserena.',
    text: [
      'Cos fusiforme i completament argentat, amb dues aletes dorsals separades i una taca fosca a l’opercle en els exemplars joves. És un depredador de primer ordre que persegueix joells, sonsos i sardines.',
      'La fitxa oficial de la reserva l’esmenta entre els peixos bentònics que caracteritzen el grapissar. Prefereix les aigües remogudes de la rompent i els dies de temporal, quan les preses queden desorientades.',
    ],
    onTrobar:
      'A la franja de rompent i sobre les barres someres, sobretot a l’alba i amb mar arrissada.',
  },
  {
    slug: 'boga',
    nom: 'Boga',
    cientific: 'Boops boops',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sparidae',
    habitat: 'columna',
    profunditat: [2, 25],
    mida: 'fins a 36 cm',
    resum:
      'Ull enorme, cos cilíndric i tres o quatre ratlles daurades. Forma els bancs més nombrosos de la reserva.',
    text: [
      'La boga és esvelta, de dors blau verdós i costats argentats amb línies daurades longitudinals fines, i té un ull desproporcionadament gran per a la seva mida.',
      'S’alimenta de plàncton i puja cap a la superfície de nit seguint la migració vertical del zooplàncton. Els seus bancs són la base de l’alimentació de dèntols, llobarros i espets.',
    ],
    onTrobar: 'A mitja aigua per damunt de tot el grapissar, en bancs de centenars d’individus.',
  },
  {
    slug: 'sardina',
    nom: 'Sardina',
    cientific: 'Sardina pilchardus',
    autoria: '(Walbaum, 1792)',
    familia: 'Clupeidae',
    habitat: 'columna',
    profunditat: [5, 25],
    mida: 'fins a 25 cm',
    resum:
      'El peix blau que ha sostingut la costa. Els bancs entren a la reserva en hivern i primavera.',
    text: [
      'Blava verdosa pel dors i argentada pels costats, amb una filera de taques fosques al llarg del flanc i les escates de la línia ventral esmolades. Filtra plàncton nedant amb la boca oberta.',
      'La sardina i el seitó són les dues espècies sobre les quals s’ha construït la pesca d’encerclament del litoral català. Dins la reserva no s’hi pesquen, però hi entren i en surten lliurement: cap reserva marina no protegeix un peix pelàgic, només l’hàbitat on s’alimenta.',
    ],
    onTrobar: 'En bancs a mitja aigua, sobretot entre desembre i abril.',
  },
  {
    slug: 'seito',
    nom: 'Seitó',
    cientific: 'Engraulis encrasicolus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Engraulidae',
    habitat: 'columna',
    profunditat: [2, 25],
    mida: 'fins a 20 cm',
    resum:
      'Es distingeix de la sardina pel morro que sobresurt i la boca enorme que li arriba darrere l’ull.',
    text: [
      'Cos prim i translúcid amb una banda platejada brillant, musell cònic projectat i una obertura bucal desmesurada. Els bancs són molt densos i canvien de forma constantment.',
      'Fresa a l’estiu en aigües costaneres com aquestes. La proximitat de la desembocadura de rieres i el fons ric del grapissar fan que la zona sigui bona per als seus alevins.',
    ],
    onTrobar: 'A mitja aigua i prop de la superfície, entre maig i setembre.',
  },
  {
    slug: 'sorell',
    nom: 'Sorell',
    cientific: 'Trachurus mediterraneus',
    autoria: '(Steindachner, 1868)',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [3, 25],
    mida: 'fins a 60 cm',
    resum:
      'Té una filera d’escuts ossis al llarg de la línia lateral que el fan rasposa al tacte.',
    text: [
      'Cos fusiforme i argentat amb el dors blau grisós, una taca fosca a l’opercle i, sobretot, una línia lateral molt marcada i coberta d’escates modificades en forma d’escut.',
      'Va en bancs mixtos amb bogues i sardines i persegueix peix petit i crustacis. Els juvenils es refugien sovint sota objectes flotants.',
    ],
    onTrobar: 'A mitja aigua sobre les barres, sovint barrejat amb bancs de boga.',
  },
  {
    slug: 'agulla',
    nom: 'Agulla',
    cientific: 'Belone belone',
    autoria: '(Linnaeus, 1760)',
    familia: 'Belonidae',
    habitat: 'columna',
    profunditat: [0, 10],
    mida: 'fins a 90 cm',
    resum:
      'Llarguíssima, verda per damunt i amb un bec ple de dents. Té els ossos verds, i és perfectament normal.',
    text: [
      'Neda just sota la superfície, sovint en petits grups, i quan s’espanta salta i llisca damunt l’aigua. Els dos maxil·lars, allargats en forma de bec, estan armats de dents fines.',
      'Els seus ossos són d’un verd blavós intens a causa d’un pigment biliar anomenat biliverdina. És inofensiu, però la coloració ha alimentat sempre la sospita popular que el peix no és bo.',
    ],
    onTrobar:
      'A la superfície, sobre qualsevol punt de la reserva. Es veu millor des de la barca que des de sota.',
  },
  {
    slug: 'espet',
    nom: 'Espet',
    cientific: 'Sphyraena sphyraena',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sphyraenidae',
    habitat: 'columna',
    profunditat: [1, 25],
    mida: 'fins a 100 cm',
    resum:
      'La barracuda mediterrània. Es queda immòbil a mitja aigua, mirant, i després entra al banc com un ganivet.',
    text: [
      'Cos cilíndric i allargat, plata amb bandes fosques verticals al dors i la mandíbula inferior projectada, plena de dents. Els juvenils formen bancs molt cohesionats; els adults grossos van sols.',
      'Caça bogues, joells i sardines. La imatge d’un banc d’espets girant lentament damunt d’una barra rocosa és una de les postals que la Masia Blanca ofereix a l’estiu.',
    ],
    onTrobar: 'A mitja aigua sobre les barres, en bancs, sobretot de juliol a octubre.',
  },
  {
    slug: 'palomida',
    nom: 'Palomida',
    cientific: 'Lichia amia',
    autoria: '(Linnaeus, 1758)',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 200 cm',
    resum:
      'Un caràngid enorme i comprimit, amb la línia lateral fent una ondulació molt marcada.',
    text: [
      'Platejada, alta i molt aplanada lateralment, amb la línia lateral dibuixant una S pronunciada. Els exemplars adults poden superar els cinquanta quilos.',
      'Caça en aigües someres i entra a la rompent perseguint llisses i joells. Les seves incursions són breus i violentes, i la resta de peixos hi reaccionen abans que vosaltres l’hàgiu vist.',
    ],
    onTrobar: 'A la zona somera i a la vora de la platja, de manera imprevisible.',
  },
  {
    slug: 'cirvia',
    nom: 'Círvia',
    cientific: 'Seriola dumerili',
    autoria: '(Risso, 1810)',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [5, 25],
    mida: 'fins a 190 cm',
    resum:
      'Torpede daurat amb una banda fosca obliqua que li travessa l’ull. Ràpida i curiosa.',
    text: [
      'Cos fusiforme i potent, dors blau bronzejat i una franja daurada longitudinal, amb una banda fosca que va del morro fins a l’inici de la dorsal passant per l’ull.',
      'Sol aparèixer en grups de tres o quatre exemplars que fan una passada d’inspecció al voltant dels bussejadors i marxen. És una de les visites més impressionants del grapissar.',
    ],
    onTrobar: 'A l’aigua lliure sobre les barres exteriors, a l’estiu i la tardor.',
  },
  {
    slug: 'llissa-llobarrera',
    nom: 'Llissa llobarrera',
    cientific: 'Chelon labrosus',
    autoria: '(Risso, 1827)',
    familia: 'Mugilidae',
    habitat: 'columna',
    profunditat: [0, 10],
    mida: 'fins a 75 cm',
    resum:
      'El llavi superior gruixut i granulós la distingeix de les altres llisses. Pastura el biofilm de qualsevol superfície.',
    text: [
      'Cos cilíndric i argentat amb línies grises longitudinals, cap aplanat i un llavi superior notablement gruixut i cobert de papil·les.',
      'Menja detritus i microalgues que rasca de les roques, els pantalans i el buc de les barques. És l’espècie que veureu des del moll del port de Coma-ruga sense necessitat de mullar-vos.',
    ],
    onTrobar: 'A la superfície prop de l’escullera i de la platja, en grups.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // RAJADES I TAURONS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'vaca-tremolosa',
    nom: 'Vaca tremolosa',
    cientific: 'Torpedo marmorata',
    autoria: 'Risso, 1810',
    familia: 'Torpedinidae',
    habitat: 'elasmo',
    profunditat: [5, 25],
    mida: 'fins a 60 cm',
    resum:
      'Un disc marbrat mig enterrat a la sorra que pot descarregar més de cinquanta volts. No s’ha de tocar mai.',
    text: [
      'De contorn gairebé circular i color bru marmorat, té dos òrgans elèctrics als costats del cap formats per columnes de cèl·lules musculars modificades. Els fa servir per atordir preses i per defensar-se.',
      'La descàrrega no és mortal per a una persona, però és desagradable i pot provocar una reacció brusca sota l’aigua, que és el risc real. Passa el dia enterrada amb només els ulls i els espiracles a fora.',
    ],
    onTrobar:
      'Enterrada a la sorra a la base de les barres. Mireu abans de recolzar res al fons.',
  },
  {
    slug: 'gatvaire',
    nom: 'Gatvaire',
    cientific: 'Scyliorhinus canicula',
    autoria: '(Linnaeus, 1758)',
    familia: 'Scyliorhinidae',
    habitat: 'elasmo',
    profunditat: [12, 25],
    mida: 'fins a 100 cm',
    resum:
      'El tauró petit i clapejat de la costa catalana. Inofensiu, nocturn i molt més abundant del que sembla.',
    text: [
      'Cos esvelt i clapejat de punts foscos sobre fons ocre, amb les dues dorsals molt endarrerides. Té una pell aspra com paper de vidre a causa dels dentículs dèrmics.',
      'Pon uns ous rectangulars i corniformes — les anomenades «bosses de sirena» — que enganxa amb filaments a algues i gorgònies i que sovint apareixen a la platja després d’un temporal. És l’escuall més comú del Mediterrani occidental.',
    ],
    onTrobar:
      'Reposant sobre la sorra i el fang de la part exterior, sobretot de nit. De dia, mig enterrat.',
  },
  {
    slug: 'escursana',
    nom: 'Escurçana',
    cientific: 'Dasyatis pastinaca',
    autoria: '(Linnaeus, 1758)',
    familia: 'Dasyatidae',
    habitat: 'elasmo',
    profunditat: [5, 25],
    mida: '60 cm d’amplada de disc',
    iucn: 'VU',
    resum:
      'Disc romboïdal i llis, amb una cua llarga de fuet armada amb un fibló verinós serrat.',
    text: [
      'De color bru o oliva uniforme pel dors i blanca pel ventre, l’escurçana no té aleta caudal: la cua és un fuet prim que porta una o dues espines serrades connectades a glàndules de verí.',
      'És un animal tranquil que només fibla si el trepitgen o l’acorralen. Es passa el dia enterrat a la sorra i s’alimenta de crustacis i mol·luscs que desenterra bufant aigua.',
    ],
    onTrobar:
      'Enterrada a les clapes de sorra, delatada pel contorn del disc i pels dos ulls sortints.',
  },
  {
    slug: 'rajada-de-clavells',
    nom: 'Rajada de clavells',
    cientific: 'Raja clavata',
    autoria: 'Linnaeus, 1758',
    familia: 'Rajidae',
    habitat: 'elasmo',
    profunditat: [12, 25],
    mida: 'fins a 105 cm',
    iucn: 'NT',
    resum:
      'Coberta d’espines robustes amb base en forma de botó — els «clavells» — repartides pel dors i la cua.',
    text: [
      'Disc romboïdal, bru clapejat de clar i fosc, amb una filera d’espines grosses al llarg de la línia mitjana del dors i la cua. Els mascles i les femelles adultes les tenen molt desenvolupades.',
      'És l’espècie de rajada més freqüent del litoral català i, alhora, una de les més castigades per la pesca d’arrossegament: creix a poc a poc i pon pocs ous. Les seves càpsules d’ou negres i rectangulars són molt fàcils de trobar a la platja.',
    ],
    onTrobar: 'Sobre els fons de sorra i fang del límit exterior de la reserva.',
  },
  {
    slug: 'rajada-estrellada',
    nom: 'Rajada estrellada',
    cientific: 'Raja asterias',
    autoria: 'Delaroche, 1809',
    familia: 'Rajidae',
    habitat: 'elasmo',
    profunditat: [10, 25],
    mida: 'fins a 70 cm',
    resum:
      'Endèmica del Mediterrani, amb un dors sembrat de petites taques fosques envoltades d’un halo clar.',
    text: [
      'Té el disc més arrodonit que la rajada de clavells i un patró de puntets foscos amb aurèola clara que li ha donat el nom. Les espines dorsals són molt més fines.',
      'És exclusiva del Mediterrani i prefereix fons tous poc profunds, exactament els que envolten el grapissar. Això la fa especialment dependent d’espais protegits com aquest.',
    ],
    onTrobar: 'Sobre la sorra i el fang de la corona d’amortiment.',
  },
  {
    slug: 'mila',
    nom: 'Milà',
    cientific: 'Myliobatis aquila',
    autoria: '(Linnaeus, 1758)',
    familia: 'Myliobatidae',
    habitat: 'elasmo',
    profunditat: [5, 25],
    mida: '150 cm d’amplada de disc',
    iucn: 'CR',
    resum:
      'No repta pel fons: vola. Les ales punxegudes i el cap sobresortint el fan inconfusible.',
    text: [
      'A diferència de les rajades, el milà neda batent les aletes pectorals com si fossin ales i es desplaça a mitja aigua. Té el cap ben diferenciat del disc, els ulls als costats i una cua molt llarga amb un fibló.',
      'Menja bivalves i crustacis que tritura amb unes plaques dentals en forma de mosaic. Al Mediterrani està catalogat en perill crític i veure’n un és excepcional; els avistaments solen ser d’individus de pas.',
    ],
    onTrobar:
      'A mitja aigua sobre les zones obertes, batent les ales lentament. Una trobada rara i memorable.',
  },
];

export default SPECIES;
