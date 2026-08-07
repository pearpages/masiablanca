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
 *   evidencia    per què l'espècie és al catàleg (vegeu EVIDENCIA a src/lib/species.js):
 *                'oficial'    la documentació del Ministeri o la Viquipèdia la cita
 *                'registrada' té registre a OBIS al litoral tarragoní
 *                'habitat'    és pròpia dels ambients que la reserva té documentats
 *                'visitant'   pelàgica o de pas: no hi resideix
 *   profunditat  [min, max] en metres DINS la reserva, no en tot el rang mundial
 *   mida         mida màxima habitual
 *   iucn         categoria de la Llista Vermella de la UICN, si és rellevant
 *   resum        una frase per a la targeta del catàleg
 *   text         cos de la fitxa, un element per paràgraf
 *   onTrobar     on buscar-lo concretament dins el grapissar
 *   commons      categoria de Commons, si difereix del nom científic
 *   imatge       fitxer de Commons triat a mà com a imatge principal, si cal
 *   excloure     fitxers de Commons vetats a mà, quan cap filtre de text els
 *                pot detectar (una càpsula ovígera buida amb un peu de foto
 *                que només diu el nom científic, per exemple)
 */

/** @type {Array<Record<string, any>>} */
export const SPECIES = [
  // ─────────────────────────────────────────────────────────────────────────
  // EL GRAPISSAR ROCÓS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'anfos',
    evidencia: 'oficial',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    slug: 'corball-de-sorra',
    evidencia: 'registrada',
    nom: 'Corball de sorra',
    cientific: 'Umbrina cirrosa',
    autoria: '(Linnaeus, 1758)',
    familia: 'Sciaenidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 100 cm',
    iucn: 'VU',
    resum:
      'Cosí clar del corball de roca, ratllat de daurat en obliqua i amb una barbeta curta sota la mandíbula.',
    text: [
      'El corball de sorra té el cos platejat recorregut per línies obliqües daurades i una barbeta rígida sota la mandíbula que fa servir per remenar el sediment a la recerca de cucs i crustacis. És més gros i més clar que el corball de roca, i sol anar sol o en grups petits.',
      'Freqüenta la frontera entre la roca i la sorra, que a la Masia Blanca és pràcticament tot el perímetre de cada barra. La seva pesca està molt regulada a Catalunya i les poblacions mediterrànies estan clarament per sota del que haurien de ser.',
      'El nom «reig» se li aplica sovint, però a la Viquipèdia i a bona part de la bibliografia catalana designa una altra espècie, el corb reig, que és molt més gros. Aquí s’ha triat «corball de sorra» per no confondre’ls.',
    ],
    onTrobar:
      'A les llengües de sorra entre barra i barra, sovint fregant el fons amb la barbeta.',
  },
  {
    slug: 'mare-danfos',
    evidencia: 'registrada',
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
    evidencia: 'oficial',
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
    evidencia: 'registrada',
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
    evidencia: 'oficial',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'oficial',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'oficial',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    excloure: [
      'File:Spondyliosoma cantharum.png', // exemplar pescat, a la mà, fora de l’aigua
    ],
  },
  {
    slug: 'dentol',
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    excloure: [
      'File:Pagrus pagrus.jpg', // exemplar dins una cubeta fotogràfica de la NOAA
    ],
  },
  {
    slug: 'tord-negre',
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'habitat',
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
    evidencia: 'habitat',
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
  {
    slug: 'inflaconys',
    evidencia: 'registrada',
    nom: 'Inflaconys',
    cientific: 'Serranus hepatus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Serranidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 15 cm',
    resum:
      'El serrànid menut i panxut del grapissar, amb una taca negra a la dorsal. És el peix més abundant d’aquests fons i el que menys es mira ningú.',
    text: [
      'Rabassut i de cap gros comparat amb el cos, bru amb quatre o cinc bandes fosques verticals i una taca negra inconfusible a la part tova de l’aleta dorsal. No arriba al pam.',
      'És hermafrodita simultani: cada individu té teixit ovàric i testicular alhora i pot fer de mascle o de femella en una mateixa posta. Als fons de grapissar i de maerl del Mediterrani occidental és, en nombre d’individus, un dels peixos dominants, i alhora un dels que menys apareix a les guies.',
    ],
    onTrobar:
      'Posat entre les tofes de Mesophyllum, sobre la roca i a la vora de la sorra. Es deixa acostar molt.',
  },
  {
    slug: 'somera-vermella',
    evidencia: 'registrada',
    nom: 'Somera vermella',
    cientific: 'Anthias anthias',
    autoria: '(Linnaeus, 1758)',
    familia: 'Anthiidae',
    habitat: 'roca',
    profunditat: [15, 25],
    mida: 'fins a 27 cm',
    resum:
      'Rosa encès, amb les ventrals llarguíssimes i la cua molt forcada. Viu de cap per avall sota les cornises.',
    text: [
      'Impossible de confondre: color rosa carmí uniforme, ulls grossos, aletes ventrals filamentoses que sovint li arriben més enllà de l’anal, i una caudal profundament escotada. Els ulls grossos delaten on viu.',
      'Ocupa les cavitats i els extraploms on hi arriba poca llum, i és freqüent veure’n grups nedant capgirats, amb el ventre cap a la volta de la cova. Al grapissar només la trobareu a les esquerdes més fondes de les barres exteriors, perquè aquí la reserva s’acaba just on ella comença a estar còmoda.',
    ],
    onTrobar:
      'A l’interior de les cavitats més fondes, sovint de cap per avall. Cal llanterna.',
    excloure: ['File:Barbier commun (Anthias anthias) (Ifremer 00633-74490).jpg'], // exemplar mort damunt d’una superfície ratllada
  },
  {
    slug: 'anfos-blanc',
    evidencia: 'registrada',
    nom: 'Anfós blanc',
    cientific: 'Epinephelus aeneus',
    autoria: '(Geoffroy Saint-Hilaire, 1817)',
    familia: 'Serranidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 120 cm',
    iucn: 'NT',
    resum:
      'El tercer anfós d’aquesta costa, més clar i més lligat als fons tous que els altres dos.',
    text: [
      'De color gris bronzejat uniforme, sense el clapejat de l’anfós comú, amb dues franges obliqües clares que li baixen de l’ull cap enrere i que es veuen sobretot en els joves. El cos és més esvelt que el de l’anfós comú.',
      'A diferència dels seus parents, no és estrictament rocós: freqüenta els fons de sorra i fang vora la roca, que és exactament la configuració de la Masia Blanca. Els joves entren en aigües molt somes i les llacunes costaneres, i és una de les espècies que més s’ha beneficiat de les reserves marines al sud del Mediterrani.',
    ],
    onTrobar:
      'A la frontera entre l’última barra i la sorra fonda, sovint sobre fons obert.',
    excloure: ['File:Epinephelus aeneus.jpg'], // parada de peixateria, damunt de gel i amb etiqueta
  },
  {
    slug: 'anfos-jueu',
    evidencia: 'habitat',
    nom: 'Anfós jueu',
    cientific: 'Mycteroperca rubra',
    autoria: '(Bloch, 1793)',
    familia: 'Serranidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 145 cm',
    resum:
      'Més esvelt i més nerviós que els anfossos, amb la cua retallada i un dibuix marbrat que canvia d’un moment a l’altre.',
    text: [
      'Es distingeix dels Epinephelus pel cos allargat, el cap punxegut i les aletes anal i caudal amb el marge gairebé recte. El color va del bru vermellós al gris, amb un marbrat clar que pot encendre i apagar en segons.',
      'Neda més separat del fons que els altres anfossos i sovint en grups petits, cosa que cap Epinephelus no fa. És una espècie de distribució meridional que fa dècades que puja cap al nord: la seva presència regular al litoral català és relativament recent.',
    ],
    onTrobar:
      'A mitja aigua sobre les barres exteriors, en grups solts. Fuig abans que la resta.',
  },
  {
    slug: 'canari',
    evidencia: 'habitat',
    nom: 'Canari',
    cientific: 'Symphodus mediterraneus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 18 cm',
    resum:
      'Una taca negra a la base de la cua i una altra darrere l’ull. En zel, el mascle es posa vermell de cap i groc de panxa.',
    text: [
      'De cos ovalat i bru vermellós, es reconeix per dues taques fosques constants: una petita darrere l’ull i una altra, més grossa, al peu de l’aleta caudal. Les femelles i els joves són discrets.',
      'Al maig i al juny el mascle construeix un niu d’algues en una escletxa, s’encén de vermell al cap i de groc al ventre —d’aquí el nom— i el defensa contra tot el que s’hi acosti, inclosos els bussejadors. És un dels espectacles fiables de la primavera al grapissar.',
    ],
    onTrobar:
      'A les esquerdes de les barres, entre cinc i quinze metres. A la primavera, vora el niu.',
  },
  {
    slug: 'tord-de-doderlein',
    evidencia: 'habitat',
    nom: 'Tord de Doderlein',
    cientific: 'Symphodus doderleini',
    autoria: 'Jordan, 1890',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 10 cm',
    resum:
      'El més petit dels tords mediterranis, amb una ratlla fosca que li recorre tot el cos d’un cap a l’altre.',
    text: [
      'Prim i menut, amb una banda longitudinal bruna que va del morro fins a la cua i una taca clara al peduncle caudal. Els mascles hi afegeixen tons blaus i taronges al cap.',
      'Sovint es confon amb els juvenils dels altres Symphodus, i per això és probablement molt més comú del que diuen els censos. Viu enganxat al fons entre les algues, i no fa el niu d’algues espectacular dels seus parents.',
    ],
    onTrobar:
      'Entre les algues de la base de les barres, sempre a menys d’un pam del fons.',
    // Sense nom català documentat: la Viquipèdia el té amb el binomi. «Tord de
    // Doderlein» segueix la fórmula dels altres Symphodus del catàleg.
  },
  {
    slug: 'llambrega',
    evidencia: 'habitat',
    nom: 'Llambrega',
    cientific: 'Symphodus melanocercus',
    autoria: '(Risso, 1810)',
    familia: 'Labridae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 14 cm',
    resum:
      'El netejador del Mediterrani: treu els paràsits de la pell dels altres peixos, que s’aturen i s’hi deixen fer.',
    text: [
      'Fosc, de cos comprimit, amb la cua negra vorejada de clar que li dóna el nom científic. Els mascles en zel es tornen gairebé blau marí amb la gola blanca.',
      'Fa d’estació de neteja: s’instal·la en un punt fix de la roca i hi atén la clientela —anfossos, sargs, oblades— que s’hi presenta, s’immobilitza i obre les brànquies perquè els tregui els paràsits. És l’equivalent mediterrani dels làbrids netejadors dels esculls tropicals, i una de les poques relacions de mutualisme visibles a ull nu en aquesta aigua.',
    ],
    onTrobar:
      'En punts fixos de les barres. Si veieu un peix gros immòbil i amb les aletes obertes, la llambrega hi és a sota.',
  },
  {
    slug: 'rabosa-groga',
    evidencia: 'registrada',
    nom: 'Rabosa groga',
    cientific: 'Tripterygion delaisi',
    autoria: 'Cadenat & Blache, 1970',
    familia: 'Tripterygiidae',
    habitat: 'roca',
    profunditat: [3, 25],
    mida: 'fins a 9 cm',
    resum:
      'Tres aletes dorsals i un mascle groc llimona amb el cap negre com el carbó. Viu de cap per avall sota les cornises.',
    text: [
      'Els tripterígids es distingeixen de les bavoses per les tres aletes dorsals separades, d’aquí el nom. Aquest, en època de cria, té el mascle groc intens amb el cap completament negre; les femelles i els joves són d’un bru jaspiat discret.',
      'Ocupa les parets verticals i els sostres de les cavitats poc il·luminades, sovint amb el ventre cap a la roca, i és territorial: cada mascle vigila un pam de paret. Cal buscar-lo de baix cap a dalt, no de dalt cap a baix.',
    ],
    onTrobar:
      'A les parets i els sostres ombrívols de les esquerdes, entre cinc i quinze metres.',
  },
  {
    slug: 'bavosa-morruda',
    evidencia: 'registrada',
    nom: 'Bavosa morruda',
    cientific: 'Tripterygion tripteronotum',
    autoria: '(Risso, 1810)',
    familia: 'Tripterygiidae',
    habitat: 'roca',
    profunditat: [0, 12],
    mida: 'fins a 8 cm',
    resum:
      'El mascle es torna vermell sang amb el cap negre. És el més somer dels tres tripterígids d’aquesta costa.',
    text: [
      'Molt semblant a la rabosa groga però amb el mascle vermell intens en comptes de groc, també amb el cap negre. Fora de l’època de cria, distingir les femelles de les dues espècies a l’aigua és pràcticament impossible.',
      'Se’n va repartir el terreny amb la rabosa groga per fondària: aquest ocupa els primers metres, ben il·luminats, i aquella baixa cap a l’ombra. És un dels exemples més nets de segregació per fondària que es poden veure amb un tub i unes ulleres.',
    ],
    onTrobar:
      'A la roca somera i a l’escullera, als primers metres, en parets exposades.',
    excloure: ['File:Tripterygion tripteronotum.jpg'], // dibuix de línia sobre fons blanc
  },
  {
    slug: 'cabot-vermell',
    evidencia: 'registrada',
    nom: 'Cabot vermell',
    cientific: 'Tripterygion melanurus',
    autoria: 'Guichenot, 1845',
    familia: 'Tripterygiidae',
    habitat: 'roca',
    profunditat: [3, 20],
    mida: 'fins a 5 cm',
    resum:
      'El tercer tripterígid, i el més petit de tots: cinc centímetres de peix rosat amb la cua negra, dins de les coves.',
    text: [
      'Minúscul i rosat, amb el peduncle caudal fosc i una filera de barres clares als flancs. Els mascles tenen el cap fosc però mai del negre net dels altres dos.',
      'És el més cavernícola de la família: ocupa l’interior de les cavitats i les escletxes on ja no hi arriba gens de llum, sovint acompanyant la somera vermella. La seva mida i el lloc on viu fan que estigui absent de gairebé tots els censos visuals de la costa catalana, cosa que no vol dir que sigui rar.',
    ],
    onTrobar:
      'Al fons de les esquerdes fosques de les barres. Només amb llanterna i paciència.',
  },
  {
    slug: 'bavosa-de-plomall',
    evidencia: 'registrada',
    nom: 'Bavosa de plomall',
    cientific: 'Parablennius pilicornis',
    autoria: '(Cuvier, 1829)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 20],
    mida: 'fins a 13 cm',
    resum:
      'Dues antenes ramificades damunt dels ulls i una línia de punts blaus al llarg del cos. N’hi ha de bruns i n’hi ha de gairebé negres.',
    text: [
      'Es reconeix pels tentacles supraorbitals petits i esfilagarsats, com un plomall, i per una filera de puntets clars, sovint blavosos, al llarg del flanc. És molt variable de color, amb individus del groc ocre al negre gairebé pur.',
      'És una de les bavoses més tolerants que hi ha: aguanta ports, esculleres i aigües amb sediment, i per això és de les primeres espècies que colonitzen qualsevol estructura nova. Al Vendrell la trobareu tant a les barres com als blocs del port.',
    ],
    onTrobar:
      'Damunt de la roca a plena llum, recolzada sobre les aletes ventrals com si s’assegués.',
  },
  {
    slug: 'llepissos',
    evidencia: 'registrada',
    nom: 'Llepissós',
    cientific: 'Parablennius sanguinolentus',
    autoria: '(Pallas, 1814)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 8],
    mida: 'fins a 23 cm',
    resum:
      'La bavosa més grossa d’aquesta costa, i vegetariana: pastura el gespet d’algues de la roca somera com si fos una ovella.',
    text: [
      'Robusta, verd oliva o bruna amb taques vermelloses disperses i uns tentacles supraorbitals curts i poc ramificats. Pot passar dels vint centímetres, cosa que cap altra bavosa d’aquí no fa.',
      'A diferència de la resta de la família, que menja invertebrats, aquesta s’alimenta gairebé només d’algues, i té l’intestí llarguíssim que això requereix. Viu a la franja de rompent, on l’aigua no para mai, i és una de les poques espècies del catàleg que veureu sense submergir-vos.',
    ],
    onTrobar:
      'A la roca de la franja de rompent i a l’escullera, als primers dos metres.',
  },
  {
    slug: 'bavosa-de-bath',
    evidencia: 'registrada',
    nom: 'Bavosa de Bath',
    cientific: 'Parablennius incognitus',
    autoria: '(Bath, 1968)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 10],
    mida: 'fins a 8 cm',
    resum:
      'Va passar desapercebuda fins al 1968, confosa amb les seves parentes. El nom científic ho diu: la desconeguda.',
    text: [
      'Petita i bruna, amb els tentacles supraorbitals ramificats i unes barres fosques verticals als flancs que sovint es trenquen en taques. Se separa de les bavoses veïnes per detalls de la disposició dels tentacles i pel patró del cap.',
      'No es va descriure com a espècie pròpia fins al 1968, tot i ser comuna a tot el Mediterrani: durant dècades els exemplars van anar a parar a la fitxa d’altres Parablennius. És un recordatori que la fauna de peixos petits d’aquesta costa encara no està tancada.',
    ],
    onTrobar:
      'A les escletxes i els forats de la roca somera, sovint dins de closques buides.',
  },
  {
    slug: 'rabosa-petita',
    evidencia: 'registrada',
    nom: 'Rabosa petita',
    cientific: 'Parablennius zvonimiri',
    autoria: '(Kolombatović, 1892)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 15],
    mida: 'fins a 7 cm',
    resum:
      'Una filera de taques blanques al llarg del dors i una corona de tentacles al clatell. Viu dins de forats i no en surt gairebé mai.',
    text: [
      'Bruna fosca, amb una filera característica de taques blanques o groguenques a la base de l’aleta dorsal i un grup de tentacles menuts al clatell, a més dels supraorbitals.',
      'És estrictament cavernícola: ocupa forats d’eriçó, tubs de cucs i escletxes estretes de parets verticals, i en surt només el cap. Al grapissar viu a les mateixes parets ombrívoles que la rabosa groga, un pam més endins.',
    ],
    onTrobar:
      'Amb el cap fora d’un forat, a les parets verticals de les barres. El cos no el veureu.',
    excloure: ['File:P.zvonimiri.jpg'], // exemplar mort damunt d’un regle
  },
  {
    slug: 'banyut',
    evidencia: 'habitat',
    nom: 'Banyut',
    cientific: 'Parablennius tentacularis',
    autoria: '(Brünnich, 1768)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [3, 20],
    mida: 'fins a 15 cm',
    resum:
      'Dues banyes llargues i sense ramificar damunt dels ulls, més llargues que les de cap altra bavosa d’aquí.',
    text: [
      'El tret que el defineix són els tentacles supraorbitals, simples i llargs com dues banyes, sovint amb un parell de branquetes a la base. El cos és clar, amb barres brunes verticals que es dupliquen als flancs.',
      'A diferència de la majoria de bavoses, prefereix el fons tou i barrejat —sorra amb pedres, closques, grapissar— al roquissar net. Aquesta preferència el fa una de les bavoses més pròpies dels fons de la Masia Blanca i no una visitant de la roca.',
    ],
    onTrobar:
      'Sobre el grapissar mateix, entre les tofes d’alga calcària i les closques, mig amagat.',
  },
  {
    slug: 'rabosa-de-roca',
    evidencia: 'registrada',
    nom: 'Rabosa de roca',
    cientific: 'Aidablennius sphynx',
    autoria: '(Valenciennes, 1836)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 6],
    mida: 'fins a 8 cm',
    resum:
      'Barres blaves i taronges al cap i un tentacle en forma de fulla damunt de cada ull. Viu on l’aigua no arriba als tres metres.',
    text: [
      'És de les bavoses més vistoses: el cap porta un dibuix de línies blaves i taronges que sembla pintat, i els tentacles supraorbitals són plans i dentats, com una fulla petita. El cos té sis o set barres brunes.',
      'Viu a la franja més somera, sovint en tolls i cubetes que queden aïllats amb la marea baixa, i el mascle vigila la posta dins d’un forat durant setmanes. Aguanta temperatures i salinitats que la majoria de peixos no suporten.',
    ],
    onTrobar:
      'Als primers metres de l’escullera i de la roca somera, sovint a mig pam d’aigua.',
  },
  {
    slug: 'bavosa-de-casquet',
    evidencia: 'registrada',
    nom: 'Bavosa de casquet',
    cientific: 'Coryphoblennius galerita',
    autoria: '(Linnaeus, 1758)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 3],
    mida: 'fins a 8 cm',
    resum:
      'Porta una cresta de flocs de pell travessada al capdamunt del cap, com un casquet. Viu literalment a la línia de l’aigua.',
    text: [
      'En comptes de dos tentacles sobre els ulls, té una filera transversal de flocs curts al capdamunt del cap —el «casquet» del nom científic, galerita. El cos és bru fosc amb taques clares als flancs.',
      'És el peix més amunt de tot el catàleg: viu a la franja de rompent i als tolls de la roca alta, i s’alimenta en bona part de les plaques de percebes i de les algues incrustants. Suporta quedar-se hores en un toll escalfat pel sol.',
    ],
    onTrobar:
      'Als tolls i les escletxes de la roca de la línia d’aigua, a l’escullera del port.',
    excloure: ['File:Coryphoblennius galerita 189895230.jpg'], // damunt del palmell d’una mà
    // Sense nom català documentat; «casquet» tradueix el galerita del binomi.
  },
  {
    slug: 'bavosa-crestada',
    evidencia: 'registrada',
    nom: 'Bavosa crestada',
    cientific: 'Scartella cristata',
    autoria: '(Linnaeus, 1758)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 8],
    mida: 'fins a 12 cm',
    resum:
      'Una crinera de filaments que li va del front fins a l’aleta dorsal. Verda i clapejada, viu a la roca bruta dels ports.',
    text: [
      'Es reconeix per la cresta de filaments carnosos que li recorre el capdamunt del cap i que continua fins a l’origen de la dorsal, i pel color verd oliva amb taques fosques disposades en files.',
      'És l’espècie que millor tolera l’aigua terbola i eutròfica, i per això abunda als ports, als espigons i a les esculleres, sovint on hi ha poc més que ella. Al Vendrell és fàcil de trobar sense sortir del port de Coma-ruga.',
    ],
    onTrobar:
      'Als blocs i les parets del port, entre les catifes d’algues verdes.',
    excloure: ['File:Scartella cristata (S1317) 0339 (41326368810).jpg'], // exemplar d’estudi sobre fons negre
    // Sense nom català documentat; el nom descriu la cresta del binomi.
  },
  {
    slug: 'futarra',
    evidencia: 'registrada',
    nom: 'Futarra',
    cientific: 'Lipophrys trigloides',
    autoria: '(Valenciennes, 1836)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 5],
    mida: 'fins a 15 cm',
    resum:
      'Sense cap tentacle damunt dels ulls i amb el perfil del cap quasi vertical. Els mascles en zel es tornen negres amb els llavis blancs.',
    text: [
      'Es distingeix de la resta de bavoses perquè no té tentacles supraorbitals i pel front alt i abrupte, gairebé de bulldog. El color habitual és bru oliva amb barres fosques; el mascle reproductor es torna negre carbó amb els llavis i el marge de les aletes blancs.',
      'Viu a la franja de rompent, entre els percebes i les algues fotofíles, i menja sobretot crustacis petits que arrenca de la roca. És més atlàntica que mediterrània i al litoral català es fa a les zones més batudes.',
    ],
    onTrobar:
      'A la roca batuda de la punta de l’escullera, al primer metre.',
    commons: 'Paralipophrys trigloides',
  },
  {
    slug: 'rabosa',
    evidencia: 'registrada',
    nom: 'Rabosa',
    cientific: 'Microlipophrys canevae',
    autoria: '(Vinciguerra, 1880)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 6],
    mida: 'fins a 6 cm',
    resum:
      'Minúscula i sense tentacles, amb una taca negra darrere l’ull i el mascle amb el cap taronja en època de cria.',
    text: [
      'De les bavoses més petites del Mediterrani, sense tentacles supraorbitals, amb el cos bru clar barrat de fosc i una taca negra distintiva just darrere de l’ull. El mascle en zel s’encén de taronja al cap i a la gola.',
      'Ocupa la roca somera i molt exposada, sovint compartint terreny amb la rabosa de roca i la futarra. La seva mida i el fet que no surti mai gaire d’una escletxa fan que passi desapercebuda fins i tot per als qui hi baixen sovint.',
    ],
    onTrobar:
      'Als forats de la roca somera i batuda, amb el cap fora.',
    commons: 'Lipophrys canevae',
  },
  {
    slug: 'rabosa-dalmata',
    evidencia: 'registrada',
    nom: 'Rabosa dàlmata',
    cientific: 'Microlipophrys dalmatinus',
    autoria: '(Steindachner & Kolombatovic, 1883)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 10],
    mida: 'fins a 5 cm',
    resum:
      'La bavosa més menuda d’aquesta aigua. El mascle porta una taca negra amb voraviu blanc a la primera dorsal.',
    text: [
      'Amb prou feines arriba als cinc centímetres. És clara, translúcida a estones, amb barres brunes fines, i el mascle té una taca ocel·lada negra i blanca a la part davantera de l’aleta dorsal que ensenya quan festeja.',
      'Descrita de l’Adriàtic —d’aquí el nom—, és present a tot el Mediterrani però està poc citada, en bona part perquè cal buscar-la expressament. Sol ocupar fons barrejats de sorra i pedres petites més que la roca compacta.',
    ],
    onTrobar:
      'Entre les pedres soltes i les closques de la vora de les barres.',
    commons: 'Lipophrys dalmatinus',
    // Sense nom català documentat; segueix la fórmula de les altres del gènere.
  },
  {
    slug: 'bavosa-de-bassa',
    evidencia: 'habitat',
    nom: 'Bavosa de bassa',
    cientific: 'Salaria pavo',
    autoria: '(Risso, 1810)',
    familia: 'Blenniidae',
    habitat: 'roca',
    profunditat: [0, 5],
    mida: 'fins a 15 cm',
    resum:
      'El mascle adult desenvolupa una gepa carnosa al front. Té un ocel blau vorejat de groc darrere l’ull, com la cua d’un paó.',
    text: [
      'Verda o oliva amb barres blaves verticals i un ocel blau i groc molt aparent darrere de l’ull, que és el que li val el nom científic de paó. Els mascles grossos desenvolupen una cresta carnosa al capdamunt del cap que sembla una gepa.',
      'És l’espècie més tolerant de totes: viu en llacunes salabroses, canals i basses litorals on la salinitat i la temperatura fan el que volen, i és habitual a les esculleres portuàries. Al Vendrell la trobareu tant al port com als aiguamolls de darrere la platja.',
    ],
    onTrobar:
      'A les esculleres i les basses litorals, damunt de pedra i entre les algues verdes.',
  },
  {
    slug: 'cabot-comu',
    evidencia: 'registrada',
    nom: 'Cabot comú',
    cientific: 'Gobius paganellus',
    autoria: 'Linnaeus, 1758',
    familia: 'Gobiidae',
    habitat: 'roca',
    profunditat: [0, 15],
    mida: 'fins a 12 cm',
    resum:
      'El gòbit de sota les pedres. El marge de la primera dorsal se li encén de groc o taronja viu.',
    text: [
      'Robust i bru marbrat, amb el cap ample i les aletes ventrals soldades en una ventosa —el tret de tota la família—, es reconeix per la vora superior de la primera aleta dorsal, groga o ataronjada i clarament delimitada.',
      'Passa el dia sota una pedra o dins d’una escletxa i surt al capvespre. És dels pocs peixos d’aquest catàleg que podeu trobar aixecant una llosa a la vora de l’aigua, i el que gairebé tothom ha vist alguna vegada sense saber-ne el nom.',
    ],
    onTrobar:
      'Sota les pedres soltes i dins les escletxes de la roca somera, de dia immòbil.',
  },
  {
    slug: 'cabot-retxat',
    evidencia: 'habitat',
    nom: 'Cabot retxat',
    cientific: 'Gobius vittatus',
    autoria: 'Vinciguerra, 1883',
    familia: 'Gobiidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 5 cm',
    resum:
      'Blanc amb una ratlla negra recta del morro a la cua. Viu capgirat als sostres de les coves.',
    text: [
      'Inconfusible: cos blanc o rosat travessat per una única banda negra horitzontal, nítida, que va de la punta del morro fins a la base de la caudal. No arriba als cinc centímetres.',
      'Ocupa els extraploms i els sostres de les cavitats, sovint amb el ventre enganxat a la roca i el cos cap per avall, al costat de la somera vermella i del cabot vermell. A Commons no hi ha gaires fotografies bones seves, i a les guies generalistes sovint ni hi surt.',
    ],
    onTrobar:
      'Al sostre de les cavitats fondes de les barres exteriors, immòbil.',
  },
  {
    slug: 'cabot-desconegut',
    evidencia: 'registrada',
    nom: 'Cabot desconegut',
    cientific: 'Gobius incognitus',
    autoria: 'Kovačić & Šanda, 2016',
    familia: 'Gobiidae',
    habitat: 'roca',
    profunditat: [1, 20],
    mida: 'fins a 10 cm',
    resum:
      'Descrit com a espècie nova el 2016. Fins llavors, tots els exemplars s’havien anat arxivant sota el nom d’un altre gòbit.',
    text: [
      'Bru clar amb una filera de taques rectangulars fosques al flanc i unes marques radials sortint de l’ull. Se separa del cabot d’ortiga, amb qui es confonia, pel nombre de radis de les aletes i pel patró del cap.',
      'La seva descripció el 2016 va obligar a repassar totes les cites mediterrànies de l’espècie amb què es confonia. Que un peix de deu centímetres, comú i costaner, es descrigui l’any 2016 diu força sobre com de tancada està la llista de peixos d’aquest mar.',
    ],
    onTrobar:
      'Sobre fons barrejat de sorra i pedra, a la vora de les barres.',
    // Sense nom català: el binomi vol dir exactament això, i el nom el tradueix.
  },
  {
    slug: 'cabot-zebrat',
    evidencia: 'habitat',
    nom: 'Cabot zebrat',
    cientific: 'Zebrus zebrus',
    autoria: '(Risso, 1827)',
    familia: 'Gobiidae',
    habitat: 'roca',
    profunditat: [0, 10],
    mida: 'fins a 5 cm',
    resum:
      'Cinc o sis barres clares verticals sobre fons fosc, i una taca blanca al clatell. Cria dins de closques buides.',
    text: [
      'Petit i rabassut, bru fosc amb barres verticals més clares —les «zebres» del nom— i una taca blanca característica just darrere del cap. Els mascles s’enfosqueixen molt en època de cria.',
      'Fa el niu dins de closques buides de mol·lusc, que neteja i vigila. Depèn, doncs, que al fons hi hagi closques senceres, i és una de les espècies que se’n ressenten quan un fons es rasclona. Al grapissar, on el sediment és ple de closques i de nòduls, hi té terreny de sobres.',
    ],
    onTrobar:
      'Sota closques i pedres petites, a poca fondària, a la vora de les barres.',
    // Sense nom català documentat; el nom tradueix el binomi.
  },
  {
    slug: 'cabot-lleopard',
    evidencia: 'habitat',
    nom: 'Cabot lleopard',
    cientific: 'Thorogobius ephippiatus',
    autoria: '(Lowe, 1839)',
    familia: 'Gobiidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 13 cm',
    resum:
      'Clapes taronges i brunes sobre fons pàl·lid, com un lleopard. És esquerp fins a l’extrem: s’amaga abans que el vegis.',
    text: [
      'Cos clar, gairebé blanc, cobert de clapes grosses i arrodonides de color taronja o bru fosc, amb una taca negra a la part posterior de la primera dorsal. És dels gòbits més vistosos i alhora dels menys vistos.',
      'Viu a l’entrada de les coves i sota els extraploms, sempre a un pam del seu forat, i es fica dins a la mínima vibració. La manera de veure’l és quedar-se quiet un parell de minuts i esperar que torni a sortir.',
    ],
    onTrobar:
      'A l’entrada de les cavitats de les barres exteriors, a partir dels deu metres.',
    // Sense nom català documentat; el nom descriu el clapejat.
  },
  {
    slug: 'escorpora-de-penyal',
    evidencia: 'registrada',
    nom: 'Escórpora de penyal',
    cientific: 'Scorpaena maderensis',
    autoria: 'Valenciennes, 1833',
    familia: 'Scorpaenidae',
    habitat: 'roca',
    profunditat: [3, 20],
    mida: 'fins a 15 cm',
    resum:
      'La més petita de les escórpores d’aquesta costa, amb dues taques fosques ben marcades al peduncle de la cua.',
    text: [
      'Es distingeix de l’escórpora fosca i de la vermella per la mida, que no passa del pam, i per un parell de taques fosques al peduncle caudal. No té l’apèndix carnós sota la mandíbula que porta l’escórpora fosca.',
      'Ocupa la roca ben il·luminada i les parets amb algues, més amunt que les seves parentes, i té les mateixes espines verinoses a la dorsal. Com totes, no ataca mai: el problema és no veure-la i posar-hi la mà a sobre.',
    ],
    onTrobar:
      'Immòbil damunt de la roca coberta d’algues, entre tres i quinze metres.',
  },
  {
    slug: 'bertorella',
    evidencia: 'habitat',
    nom: 'Bertorella',
    cientific: 'Gaidropsarus mediterraneus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Lotidae',
    habitat: 'roca',
    profunditat: [0, 25],
    mida: 'fins a 50 cm',
    resum:
      'Tres barbetes al cap —dues al morro i una a la barbeta— i una aleta dorsal que sembla una franja de flocs.',
    text: [
      'Cos allargat i llis, bru uniforme o lleugerament clapejat, amb tres barbes sensorials i una primera dorsal reduïda a una filera de radis fins dins d’un solc, que va vibrant contínuament.',
      'És nocturna i cavernícola: de dia s’encaixa en una escletxa i no en surt. Pertany a la família dels lòtids, la dels llucets i les mòlleres, i és la representant d’aigües somes d’un grup que en aquest mar viu gairebé tot molt més fondo.',
    ],
    onTrobar:
      'Encaixada en escletxes estretes de dia; caçant per la roca de nit.',
    // Sense nom català a la Viquipèdia; «bertorella» és el nom que fan servir
    // les guies del País Valencià per a aquest gènere.
  },
  {
    slug: 'capella',
    evidencia: 'registrada',
    nom: 'Capellà',
    cientific: 'Trisopterus minutus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Gadidae',
    habitat: 'roca',
    profunditat: [15, 25],
    mida: 'fins a 26 cm',
    resum:
      'Un bacallà en miniatura: tres dorsals, dues anals i una barbeta sota el mentó. Forma bancs a l’ombra de les cornises.',
    text: [
      'Té la silueta inconfusible dels gàdids —tres aletes dorsals i dues anals, ben separades— i una barbeta sensorial sota la mandíbula. El color és bru rosat amb una taca fosca a l’axil·la de la pectoral.',
      'És l’únic representant de la família del bacallà que veureu amb regularitat en aquestes fondàries, i sempre en grups, suspesos a l’ombra d’un extraplom. La major part de la família viu molt més fondo i molt més al nord: aquest és el que ha trobat manera de quedar-se aquí.',
    ],
    onTrobar:
      'En grups quiets sota les cornises de les barres exteriors, a partir dels quinze metres.',
    excloure: [
      'File:Salsa pericana-capellanes.jpg', // un plat de capellans cuinats
      'File:Trisopterus minutus 327495842.jpg', // exemplar a la mà, damunt d’una barca
    ],
  },
  {
    slug: 'surer',
    evidencia: 'habitat',
    nom: 'Surer',
    cientific: 'Balistes capriscus',
    autoria: 'Gmelin, 1789',
    familia: 'Balistidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 60 cm',
    iucn: 'VU',
    resum:
      'Neda ondulant les aletes dorsal i anal, com si remés. Es tanca dins d’un forat encaixant-hi una espina que no es pot abaixar.',
    text: [
      'Cos ovalat i comprimit, gris o oliva amb taques blavoses, ulls molt endarrerits i una boca petita amb dents fortes capaces de trencar closques d’eriçó i de mol·lusc. Es propulsa amb la dorsal i l’anal alhora, sense fer servir gairebé la cua.',
      'La primera espina dorsal es bloqueja en posició vertical amb una segona espina que fa de baldó: un cop encaixat dins d’una escletxa, no hi ha manera d’estirar-lo. Sol ser confiat i curiós amb els bussejadors, i en època de posta el mascle vigila el niu i escomet qui s’hi acosti.',
    ],
    onTrobar:
      'A mitja aigua sobre les barres, sol o en parella. Es deixa acostar més que cap altre peix gros d’aquí.',
    excloure: [
      'File:Balistes capriscus 2.jpg', // aquari, amb el fons pintat
      'File:Balistes capriscus2.jpg', // exemplar mort damunt d’un paper, amb una moneda per escala
      'File:Balistes capriscus 3.jpg', // aquari, amb el fons lila i roques artificials
    ],
  },
  {
    slug: 'angelina',
    evidencia: 'registrada',
    nom: 'Angelina',
    cientific: 'Plectorhinchus mediterraneus',
    autoria: '(Guichenot, 1850)',
    familia: 'Haemulidae',
    habitat: 'roca',
    profunditat: [10, 25],
    mida: 'fins a 60 cm',
    iucn: 'DD',
    resum:
      'Llavis molt gruixuts i un cos gris argentat massís. Els joves porten unes ratlles negres que després perden del tot.',
    text: [
      'Cos alt i comprimit, gris plom o argentat amb reflexos daurats, amb els llavis notablement carnosos. Els juvenils tenen un patró de bandes longitudinals fosques que no s’assembla gens al de l’adult i que fa que sovint es prenguin per una altra espècie.',
      'És l’únic hemúlid de la Mediterrània occidental, una família molt més diversa a l’Atlàntic tropical, i entra aquí per l’Estret. Els adults són sedentaris i solen ocupar el mateix extraplom durant temporades senceres, cosa que els fa un blanc fàcil per a la pesca submarina i explica per què són tan escassos fora de les reserves.',
    ],
    onTrobar:
      'A l’ombra de les cornises més fondes, quiet i sol.',
    excloure: [
      'File:Plectorhinchus mediterraneus.jpg', // exemplar acabat de pescar, a les mans, dins d’una barca
      'File:Fishes - Port of Playa Blanca - Lanzarote -B10.jpg', // parada de peixateria amb el rètol del preu
    ],
  },
  {
    slug: 'xucladits',
    evidencia: 'habitat',
    nom: 'Xucladits',
    cientific: 'Lepadogaster lepadogaster',
    autoria: '(Bonnaterre, 1788)',
    familia: 'Gobiesocidae',
    habitat: 'roca',
    profunditat: [0, 8],
    mida: 'fins a 8 cm',
    resum:
      'Té una ventosa al ventre amb què s’enganxa a la cara inferior de les pedres. El cap és pla i acaba en un bec d’ànec.',
    text: [
      'Cos aplanat i sense escates, vermellós o taronja, amb el cap ample, el morro estirat com un bec i dos ocels blaus vorejats de fosc darrere dels ulls. Les aletes ventrals estan transformades en un disc adhesiu potent.',
      'Viu enganxat a la cara de sota de les lloses, en un dit d’aigua, i hi enganxa també la posta, que el mascle vigila. Si aixequeu una pedra a la vora de l’aigua i hi trobeu una taca taronja que no es mou, és ell; tornar a deixar la pedra tal com estava no és una formalitat, és el que li salva la niuada.',
    ],
    onTrobar:
      'Sota les lloses de la franja somera, sempre a la cara inferior i mai a la de dalt.',
    excloure: [
      'File:Lepadogaster lepadogaster 461317197.jpg', // damunt d’un dit
      'File:Lepadogaster lepadogaster 461317121.jpg', // damunt d’un braç
      'File:Lepadogaster lepadogaster, Kimmeridge Bay (52359537613).jpg', // dins d’un pot blanc
      'File:Lepadogaster lepadogaster, Kimmeridge Bay (52359724965).jpg', // dins d’un pot blanc, mateixa sèrie
    ],
  },
  {
    slug: 'xuclador-de-dues-taques',
    evidencia: 'habitat',
    nom: 'Xuclador de dues taques',
    cientific: 'Diplecogaster bimaculata',
    autoria: '(Bonnaterre, 1788)',
    familia: 'Gobiesocidae',
    habitat: 'roca',
    profunditat: [5, 25],
    mida: 'fins a 5 cm',
    resum:
      'Dos centímetres i mig de peix rosa translúcid amb una taca violeta a cada flanc. Viu enganxat entre les tofes del grapissar.',
    text: [
      'Diminut i gairebé transparent, de color rosat, amb una taca fosca vorejada de groc darrere de cada pectoral —les dues taques del nom, que en els mascles són molt més marcades. Com el xucladits, té el disc adhesiu ventral.',
      'A diferència del seu parent, no viu sota lloses sinó entre la grava biogènica, les closques i els nòduls d’alga calcària: és a dir, dins del grapissar pròpiament dit. És una de les espècies que millor justifiquen protegir un fons que, vist de lluny, sembla només grava.',
    ],
    onTrobar:
      'Entre els nòduls de Mesophyllum i les closques, enganxat a la cara amagada.',
    excloure: ['File:Diplecogaster bimaculata (dorsal).jpg'], // exemplar d’estudi sobre fons negre
    // Sense nom català documentat; el nom tradueix el binomi.
  },

  // ─────────────────────────────────────────────────────────────────────────
  // LES PRADERIES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'salpa',
    evidencia: 'registrada',
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
    evidencia: 'habitat',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'habitat',
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
    evidencia: 'habitat',
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
    evidencia: 'habitat',
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
    evidencia: 'habitat',
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
    evidencia: 'registrada',
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
    excloure: [
      'File:Symphodus cinereus Palamos.jpg', // exemplar a la mà, fora de l’aigua
    ],
  },
  {
    slug: 'joell',
    evidencia: 'habitat',
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
  {
    slug: 'petarc',
    evidencia: 'registrada',
    nom: 'Petarc',
    cientific: 'Symphodus rostratus',
    autoria: '(Bloch, 1791)',
    familia: 'Labridae',
    habitat: 'praderia',
    profunditat: [3, 15],
    mida: 'fins a 13 cm',
    resum:
      'El tord del morro llarg. Neda inclinat entre les fulles de posidònia i sembla, més que un peix, una fulla més.',
    text: [
      'És inconfusible entre els tords per la boca projectada en un morrell tubular que pot allargar i encongir. El color va del verd oliva al bru vermellós segons el fons on viu, i sovint porta una banda clara al llarg del cos.',
      'Aquest mimetisme no és casual: es manté vertical o inclinat entre les fulles i es deixa gronxar amb elles. La posidònia no li fa de refugi, li fa de disfressa, i per això a la Masia Blanca només el veureu dins de l’herbei i pràcticament mai sobre la roca nua.',
    ],
    onTrobar:
      'Entre les fulles de l’herbei, immòbil i de cap avall. Cal buscar el morro, no el cos.',
    excloure: ['File:Symphodus rostratus estaque 14 04 2018.jpg'], // exemplar a la mà, amb la canya de pescar al costat
  },
  {
    slug: 'massot-verd',
    evidencia: 'habitat',
    nom: 'Massot verd',
    cientific: 'Labrus viridis',
    autoria: 'Linnaeus, 1758',
    familia: 'Labridae',
    habitat: 'praderia',
    profunditat: [3, 18],
    mida: 'fins a 47 cm',
    iucn: 'VU',
    resum:
      'El tord gros i verd de les praderies, i un dels peixos mediterranis que més terreny ha perdut sense que ningú se n’adonés.',
    text: [
      'De cos robust i llavis gruixuts, va del verd herba al bru segons l’individu, sovint amb una filera de punts clars al flanc. És el més gros dels làbrids d’aquesta costa juntament amb el tord massot.',
      'Depèn estretament dels herbeis de posidònia per criar i alimentar-se, i la regressió d’aquests herbeis al litoral català l’ha arrossegat: està catalogat com a vulnerable i en molts trams on era corrent ja no hi és. És, dels peixos d’aquest catàleg, el que millor mesura l’estat de la praderia.',
    ],
    onTrobar:
      'A les clarianes de l’herbei i al límit amb la roca, sol i sense pressa.',
    // «France» i «268580150» són la mateixa fotografia pujada dues vegades amb
    // noms diferents; el filtre de duplicats només mira els sufixos (cropped).
    excloure: [
      'File:Labrus viridis ro.jpg', // làmina d’identificació amb l’anatomia retolada en romanès
      'File:Labrus viridis 268580150.jpg',
    ],
  },
  {
    slug: 'cabot-dortiga',
    evidencia: 'registrada',
    nom: 'Cabot d’ortiga',
    cientific: 'Gobius bucchichi',
    autoria: 'Steindachner, 1870',
    familia: 'Gobiidae',
    habitat: 'praderia',
    profunditat: [1, 15],
    mida: 'fins a 10 cm',
    resum:
      'Viu entre els tentacles d’una anemone sense que li facin res. És l’única parella d’aquesta mena que hi ha al Mediterrani.',
    text: [
      'Petit, clar i esquitxat de punts bruns arrenglerats, es distingeix dels altres cabots per les dues fileres de taques fosques als flancs. Res del seu aspecte no fa preveure el que fa.',
      'S’instal·la vora una anemone —sovint Anemonia viridis— i s’hi refugia quan l’espanten, protegit per una capa de mucositat que impedeix que les cèl·lules urticants li disparin. És l’equivalent mediterrani, molt més discret, del peix pallasso tropical.',
    ],
    onTrobar:
      'Al peu de les anemones verdes de la vora de l’herbei, a poca fondària. Espanteu-lo i us dirà on és l’anemone.',
  },
  {
    slug: 'cabot-darena',
    evidencia: 'habitat',
    nom: 'Cabot d’arena',
    cientific: 'Gobius geniporus',
    autoria: 'Valenciennes, 1837',
    familia: 'Gobiidae',
    habitat: 'praderia',
    profunditat: [5, 18],
    mida: 'fins a 16 cm',
    resum:
      'Un cabot llarg i pàl·lid, amb una filera de taques rectangulars, que es posa a les clarianes de sorra entre mata i mata.',
    text: [
      'Més esvelt que la resta de cabots d’aquests fons, de color sorra amb una filera de taques quadrangulars brunes al llarg del flanc i unes ratlles fosques que li baixen de l’ull cap a la galta.',
      'Ocupa la frontera: no viu dins de l’herbei ni a la sorra oberta, sinó a les clapes de sorra que queden entre les mates de posidònia. A la Masia Blanca aquesta frontera és llarguíssima, perquè l’herbei hi creix a claps damunt d’un fons majoritàriament tou.',
    ],
    onTrobar:
      'Immòbil sobre les clapes de sorra de dins de l’herbei, sempre amb una mata a tocar.',
    // La categoria de Commons hi té una escòrpora ben endreçada: cap filtre de
    // text no pot veure que la foto no és d’un gòbit.
    excloure: ['File:Gobio esbelto (Gobius geniporus), Pistol Bay, Pafos, Chipre, 2021-12-12, DD 06.jpg'],
  },
  {
    slug: 'xucla',
    evidencia: 'registrada',
    nom: 'Xucla',
    cientific: 'Spicara maena',
    autoria: '(Linnaeus, 1758)',
    familia: 'Centracanthidae',
    habitat: 'praderia',
    profunditat: [5, 18],
    mida: 'fins a 25 cm',
    resum:
      'Comença la vida femella i acaba mascle, i quan es transforma li surt una taca negra al flanc i es torna blau.',
    text: [
      'De cos comprimit i argentat amb una taca fosca rectangular a mitja alçada del flanc, forma bancs solts a mitja aigua sobre l’herbei. Els mascles en zel es tornen blavosos i els apareixen dibuixos irregulars al cos.',
      'Com el llavió i l’anfós, canvia de sexe: les femelles es transformen en mascles cap als tres anys. El mascle excava un niu circular a la sorra vora l’herbei, hi atrau les femelles i en vigila els ous, i durant aquestes setmanes és territorial i fàcil d’observar.',
    ],
    onTrobar:
      'En bancs solts a mitja aigua per sobre de l’herbei, i al maig i juny sobre els nius de sorra.',
  },
  {
    slug: 'gerret',
    evidencia: 'registrada',
    nom: 'Gerret',
    cientific: 'Spicara smaris',
    autoria: '(Linnaeus, 1758)',
    familia: 'Centracanthidae',
    habitat: 'praderia',
    profunditat: [5, 18],
    mida: 'fins a 20 cm',
    resum:
      'Més prim i més menut que la xucla, amb la taca del flanc més petita. És el peix de fregir de tota la vida.',
    text: [
      'Es distingeix de la xucla perquè és més fusiforme i menys alt, amb el cap més petit i la taca lateral reduïda a un punt. Forma bancs més compactes i més nombrosos.',
      'És una de les espècies que més ha sostingut la pesca artesanal d’arts menors al litoral català, i alhora una de les que menys atenció ha rebut. Dins la reserva té la funció de sempre: convertir plàncton en carn que després es mengen el llobarro, l’espet i el dèntol.',
    ],
    onTrobar:
      'En bancs densos a mitja aigua, sovint barrejats amb xucles i bogues.',
    excloure: [
      'File:Spicara smaris Croatia.jpg', // exemplar a la mà, fora de l’aigua
      'File:Spicara smaris, ro.jpg', // làmina d’identificació retolada
    ],
  },
  {
    slug: 'xucla-blanca',
    evidencia: 'registrada',
    nom: 'Xucla blanca',
    cientific: 'Spicara flexuosum',
    autoria: 'Rafinesque, 1810',
    familia: 'Centracanthidae',
    habitat: 'praderia',
    profunditat: [10, 18],
    mida: 'fins a 21 cm',
    resum:
      'La tercera xucla del Mediterrani, tant de temps confosa amb les altres dues que encara costa de trobar-la anomenada pel seu compte.',
    text: [
      'Intermèdia entre la xucla i el gerret, amb el perfil del cap més recte i la taca lateral difusa. Durant dècades es va considerar una simple forma de la xucla, i el registre mundial d’espècies marines no la va acceptar com a espècie pròpia fins fa relativament poc.',
      'Aquesta confusió té conseqüències pràctiques: les estadístiques de pesca de «xucla» barregen tres espècies amb biologies diferents, i cap sèrie històrica no permet saber què li ha passat a cadascuna. Al grapissar hi és, però ningú no en pot dir la proporció.',
    ],
    onTrobar:
      'Barrejada amb els bancs de xucla, a la part més fonda de l’herbei.',
    excloure: ['File:Spicara flexuosum France.jpg'], // és la mateixa fotografia que File:Spicara flexuosum.jpg
    // No té article a la Viquipèdia en català ni nom català documentat: «xucla
    // blanca» és una traducció del castellà «chucla blanca», feta aquí a falta
    // de res millor. Si algun dia se’n fixa un de normatiu, cal canviar-lo.
  },
  {
    slug: 'agulleta-de-riu',
    evidencia: 'habitat',
    nom: 'Agulleta de riu',
    cientific: 'Syngnathus abaster',
    autoria: 'Risso, 1827',
    familia: 'Syngnathidae',
    habitat: 'praderia',
    profunditat: [0, 8],
    mida: 'fins a 21 cm',
    resum:
      'La més petita i la més tolerant de les agulletes: aguanta l’aigua dolça i entra a les llacunes de darrere la platja.',
    text: [
      'Prima com un fil, bruna o verdosa i amb el morro curt comparat amb les altres agulletes. Com tots els singnàtids, és el mascle qui incuba els ous en una bossa ventral fins que en surten cries ja formades.',
      'Suporta salinitats molt variables, cosa que la fa l’espècie de la família que trobareu més a prop de la costa i als canals i estanys litorals. Al Vendrell això la lliga als aiguamolls de rere la platja tant com al mar.',
    ],
    onTrobar:
      'Als primers metres, entre la cimodocea i les algues de la vora, gairebé sempre sola.',
    excloure: [
      'File:Syngnathus abaster-23.jpg', // damunt d’una roca, fora de l’aigua, subjectada amb els dits
      'File:Syngnathus abaster-22.jpg', // als dits, damunt d’una safata blanca
      'File:Syngnathus abaster head 03.jpg', // damunt de sorra seca
      'File:Syngnathus abaster body B.jpg', // grava i plantes d’aquari
      'File:Syngnathus abaster body.jpg', // grava d’aquari, amb marca d’aigua del fotògraf
      'File:Syngnathus abaster1.jpg', // exemplar damunt d’una post verda, amb etiqueta numerada
      'File:Syngnathus abaster.jpg', // cinc exemplars alineats en una safata
    ],
  },
  {
    slug: 'serpeta',
    evidencia: 'habitat',
    nom: 'Serpeta',
    cientific: 'Nerophis ophidion',
    autoria: '(Linnaeus, 1758)',
    familia: 'Syngnathidae',
    habitat: 'praderia',
    profunditat: [0, 12],
    mida: 'fins a 30 cm',
    resum:
      'Una agulleta sense aletes, llisa com un cordill verd. Aquí les femelles són les vistoses i els mascles, els que crien.',
    text: [
      'Cos cilíndric i llis, verd brillant, sense aletes pectorals ni caudal: només conserva la dorsal, amb la qual es desplaça amb un moviment ondulant lentíssim. Es confon amb una fulla de cimodocea fins que es mou.',
      'Els papers estan invertits respecte del que és habitual: les femelles són més grosses, més verdes i tenen unes crestes de pell blaves al ventre amb què festegen, i són elles les que competeixen pels mascles. Ells s’enganxen els ous directament a la pell del ventre, sense bossa.',
    ],
    onTrobar:
      'Enredada entre les fulles a poca fondària. És dels animals més difícils de veure de tot el catàleg.',
    excloure: [
      'File:BlackSeaNerophis-head.jpg', // dins d’un recipient de vidre
      'File:BlackSeaNerophis-3.jpg', // exemplar estirat damunt d’una taula
      'File:Wężynka.jpg', // grava d’aquari de colors
      'File:Nerophis ophidion2.JPG', // dos exemplars dins d’una safata blanca amb un dit d’aigua
      'File:Nerophis ophidion3.JPG', // subjectada entre els dits
      'File:Nerophis ophidion-11.JPG', // encallada a la sorra molla de la vora de l’aigua
      'File:Nerophis ophidion4.JPG', // subjectada entre els dits
      'File:Nerophis ophidion-10.jpg', // a la mà, damunt de sorra molla
      'File:Nerophis ophidion-1.JPG', // dins d’una safata blanca
      'File:BlackSeaNerophis-1.jpg', // mateixa sèrie: exemplars manipulats fora de l’aigua
      'File:BlackSeaNerophis-2.jpg',
    ],
  },
  {
    slug: 'serpeto',
    evidencia: 'habitat',
    nom: 'Serpetó',
    cientific: 'Nerophis maculatus',
    autoria: 'Rafinesque, 1810',
    familia: 'Syngnathidae',
    habitat: 'praderia',
    profunditat: [1, 15],
    mida: 'fins a 30 cm',
    iucn: 'DD',
    resum:
      'Com la serpeta, però amb una filera d’anelles fosques al llarg del cos. Se sap tan poc d’ell que la UICN no el pot avaluar.',
    text: [
      'Es distingeix de la serpeta per les taques o anelles brunes regularment espaiades al llarg del cos i pel morro una mica més llarg. Igual que ella, no té ni pectorals ni caudal.',
      'La categoria «dades insuficients» de la seva fitxa de la UICN no és cap tecnicisme: és la constatació que ningú no ha comptat mai quants n’hi ha ni on. Val la pena tenir present que en una reserva de 457 hectàrees, estudiada des del 1999, encara hi ha vertebrats dels quals no en sabem això.',
    ],
    onTrobar:
      'A l’herbei i entre les algues del peu de les barres, en posició vertical.',
  },
  {
    slug: 'corneta',
    evidencia: 'visitant',
    nom: 'Corneta',
    cientific: 'Fistularia commersonii',
    autoria: 'Rüppell, 1838',
    familia: 'Fistulariidae',
    habitat: 'praderia',
    profunditat: [1, 18],
    mida: 'fins a 160 cm',
    resum:
      'Un tub prim de metre i mig amb un fil per cua. Va entrar pel canal de Suez i en vint anys ha arribat fins aquí.',
    text: [
      'Sembla una canya: cos aplanat i llarguíssim, morro tubular d’un pam i una cua que acaba en un filament. Sol estar immòbil a mitja aigua, en horitzontal, i quan es decideix xucla la presa d’una revolada com si fos una pipeta.',
      'És una espècie del mar Roig i de l’Indopacífic que va travessar el canal de Suez i es va detectar al Mediterrani el 2000, a Israel. En menys de vint anys ha arribat a tot el Mediterrani occidental. La seva presència al grapissar no és una bona notícia sinó un termòmetre: mesura la velocitat a què s’escalfa i es tropicalitza aquesta aigua.',
    ],
    onTrobar:
      'Immòbil a mitja aigua sobre l’herbei, en horitzontal. De cara costa molt de veure-la.',
    // Fotografiada damunt d’Acropora i de Pocillopora: és la mateixa espècie,
    // però al seu mar d’origen, no en aquest. Mateix criteri que amb el milà.
    excloure: [
      'File:Fistularia commersonii1.jpg',
      'File:Bluespotted Cornetfish, Fistularia commersonii - also known as the Smooth Flutemouth - at Little Brother, Red Sea, Egypt (SCUBA).jpg',
    ],
    // Espècie d'arribada recent i sense nom català fixat. «Corneta» és el que
    // fan servir la premsa i els pescadors, calcat del castellà «pez corneta».
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ELS FONS DE SORRA I FANG
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'orada',
    evidencia: 'oficial',
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
    evidencia: 'oficial',
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
    excloure: ['File:Afbeelding haringkoning.jpg'], // taula votiva pintada del segle XVII
  },
  {
    slug: 'moll-de-fang',
    evidencia: 'oficial',
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
    evidencia: 'registrada',
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
    excloure: [
      'File:Lithognathus mormyrus, Slovenia - 20080420.jpg', // servit en un plat, damunt d’un taulell de granit
    ],
  },
  {
    slug: 'pagell',
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    evidencia: 'habitat',
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
    evidencia: 'habitat',
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
    evidencia: 'registrada',
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
    excloure: [
      'File:Uranoscopus scaber 2914.jpg', // morta damunt d’una post de fusta
      'File:Uranoscopus.jpg', // mort damunt d’unes rajoles, amb regle
      'File:Uranoscopus head.jpg', // el cap del mateix exemplar mort
    ],
  },
  {
    slug: 'aranya-blanca',
    evidencia: 'registrada',
    nom: 'Aranya blanca',
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
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    slug: 'lluerna-rossa',
    evidencia: 'registrada',
    nom: 'Lluerna rossa',
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
    excloure: [
      'File:Chelidonichthys lucerna, Triglidae, Scorpaeniformes (Tub gurnard).JPG', // munt de lluernes damunt del gel, en una parada
    ],
  },
  {
    slug: 'remol',
    evidencia: 'registrada',
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
    excloure: [
      'File:Scophthalmus rhombus1.jpg', // làmina antiga
      'File:34) Brill.jpg', // relleu tallat en una llosa de vorera
    ],
  },

  {
    slug: 'corb-reig',
    evidencia: 'registrada',
    nom: 'Corb reig',
    cientific: 'Argyrosomus regius',
    autoria: '(Asso, 1801)',
    familia: 'Sciaenidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 230 cm',
    resum:
      'El corball gros: pot passar dels dos metres i fa un so de tambor que se sent des de la barca.',
    text: [
      'Cos allargat i argentat amb reflexos bronzejats, la boca gran i, per dins, unes otòlits enormes —les «pedres» del cap— que són les més grosses de tots els peixos d’aquesta costa. La línia lateral és fosca i molt visible.',
      'Com tots els esciènids, fa sonar la bufeta natatòria amb uns músculs especialitzats, i durant la fresa els grups produeixen un batec continu que s’ha fet servir per localitzar-los. És el peix que en català es diu «reig», i el motiu pel qual el corball de sorra d’aquest catàleg va deixar de dir-se’n.',
    ],
    onTrobar:
      'Sobre els fons tous de la franja exterior, sol o en grups petits. Un peix gros, i per tant escàs.',
    // Cap de les quatre candidates no és un corb reig viu: una caixa de
    // llotja, un home carregant-lo en un mercat, un plat i un taulell.
    excloure: [
      'File:Maigre11.jpg',
      'File:CapitaineMauritanie.jpg',
      'File:La Villa (Château-Gaillard) - courbine de Corse et son accompagnement.jpg',
      'File:Ary qerb قرب.jpg',
    ],
  },
  {
    slug: 'lluc',
    evidencia: 'registrada',
    nom: 'Lluç',
    cientific: 'Merluccius merluccius',
    autoria: '(Linnaeus, 1758)',
    familia: 'Merlucciidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 140 cm',
    resum:
      'El peix blanc que ha sostingut la cuina catalana. Els juvenils fan servir aquests fons de bressol; els adults viuen molt més avall.',
    text: [
      'Cos esvelt i gris platejat amb la boca gran i les dents esmolades, dues aletes dorsals i la interior de la boca negra. Els adults viuen entre els cent i els cinc-cents metres.',
      'El que hi ha a la reserva són els juvenils: el llucet fa servir els fons tous costaners com a zona de creixement abans de baixar cap al talús. Protegir un fons de vint-i-cinc metres serveix, doncs, per a una pesqueria que es fa deu vegades més avall, i aquest és un dels arguments menys evidents i més sòlids a favor de les reserves costaneres.',
    ],
    onTrobar:
      'Els juvenils, arran de fons a la part més fonda, sobretot de nit.',
    excloure: [
      'File:Merluccius merluccius head.JPG', // exemplar mort damunt d’una safata, amb un transportador
      'File:Merluccius merluccius 57044526.jpg', // mort damunt la sorra de la platja
      'File:Merluccius merluccius.jpg', // làmina
      'File:Ary pikhoTa پيخوطا.jpg', // caixa de llucs morts en una llotja
    ],
  },
  {
    slug: 'rap',
    evidencia: 'registrada',
    nom: 'Rap',
    cientific: 'Lophius piscatorius',
    autoria: 'Linnaeus, 1758',
    familia: 'Lophiidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 200 cm',
    resum:
      'Tot cap i tota boca. Porta una canya de pescar al front, amb un esquer de pell que fa onejar.',
    text: [
      'El cos és aplanat i el cap ocupa més de la meitat de l’animal, amb una boca immensa vorejada de dents corbades cap endins. El primer radi de la dorsal està transformat en una canya amb un apèndix carnós a la punta que fa moure per atreure la presa.',
      'Es camufla enterrat al sediment fins que la presa és a tocar i llavors obre la boca en sis mil·lisegons: la depressió que genera hi xucla el peix sencer. Pot empassar-se preses de la seva pròpia mida.',
    ],
    onTrobar:
      'Enterrat al fang de la franja exterior, immòbil. Es veu abans la boca que l’animal.',
  },
  {
    slug: 'rap-vermell',
    evidencia: 'registrada',
    nom: 'Rap vermell',
    cientific: 'Lophius budegassa',
    autoria: 'Spinola, 1807',
    familia: 'Lophiidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 100 cm',
    iucn: 'DD',
    resum:
      'Com el rap, però amb el peritoneu negre. És l’única manera fiable de distingir-los, i cal obrir-los.',
    text: [
      'Externament és quasi idèntic al rap comú, una mica més petit i sovint més rogenc. El caràcter que els separa de debò és intern: el peritoneu —la membrana que folra la cavitat abdominal— és negre en aquest i blanc en l’altre.',
      'Aquesta és la mena de distinció que fa que dues espècies es pesquin i es declarin juntes durant dècades. Al Mediterrani occidental és el més abundant dels dos, i la seva fitxa de la UICN encara diu «dades insuficients».',
    ],
    onTrobar:
      'Al mateix terreny que el rap comú, enterrat al fons tou de fora.',
  },
  {
    slug: 'gall',
    evidencia: 'registrada',
    nom: 'Gall',
    cientific: 'Zeus faber',
    autoria: 'Linnaeus, 1758',
    familia: 'Zeidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 90 cm',
    iucn: 'DD',
    resum:
      'Una taca rodona i negra a cada costat, vorejada de groc. Prim com un full vist de cara, per no fer ombra.',
    text: [
      'Cos altíssim i extraordinàriament comprimit, gris daurat, amb els radis de la dorsal allargats en filaments i una taca ocel·lada negra al mig de cada flanc. Vist de cara és pràcticament invisible.',
      'Aquesta forma és una arma de caça: s’acosta a la presa de front, on gairebé no es veu, i quan la té a tocar projecta la mandíbula endavant com un tub. Nada tan a poc a poc que costa de creure que caci res.',
    ],
    onTrobar:
      'A mitja aigua sobre els fons tous exteriors, sol i sense pressa.',
    excloure: ['File:Saint Pierre (Zeus faber) differents stades de maturité sexuelle (Ifremer 00779-89135 - 49023).jpg'], // boca oberta d’un exemplar mort, subjectat amb els dits
  },
  {
    slug: 'goras',
    evidencia: 'registrada',
    nom: 'Goràs',
    cientific: 'Pagellus bogaraveo',
    autoria: '(Brünnich, 1768)',
    familia: 'Sparidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 70 cm',
    iucn: 'NT',
    resum:
      'Ulls enormes i una taca negra a l’espatlla. Els joves viuen a la costa i els adults se’n van a cinc-cents metres.',
    text: [
      'Rosat argentat amb l’ull molt gran i una taca fosca ben marcada a l’inici de la línia lateral, damunt de la pectoral. És el més gros dels pagells d’aquesta costa.',
      'Fa el camí invers de molts peixos: neix i creix a poca fondària i es va desplaçant cap al talús a mesura que es fa gran. Els que hi ha a la reserva són, per tant, joves; els adults ja no hi tornen.',
    ],
    onTrobar:
      'Els joves, prop del fons a la franja exterior, sovint en grups petits.',
    excloure: [
      'File:Pagellus bogaraveo euskera.png', // cartell divulgatiu amb mapa de la FAO i escala de la UICN
      'File:Pagellus bogaraveo castellano.png',
      'File:Pagellus bogaraveo Ligurian sea.jpg', // exemplar mort damunt d’una barca
      'File:Pagellus bogaraveo juvenile.jpg', // juvenil damunt d’un palmell
      'File:Luis Egidio Meléndez - Still-Life - WGA14755.jpg', // natura morta del segle xviii
      'File:Bazuk - blackspot sea bream on sale in Malta.jpg', // parada de peixateria amb el rètol del preu
      'File:Bazuk - blackspot sea bream on sale in Malta 1.jpg',
    ],
  },
  {
    slug: 'codornera',
    evidencia: 'registrada',
    nom: 'Codornera',
    cientific: 'Cepola macrophthalma',
    autoria: 'Linnaeus, 1758',
    familia: 'Cepolidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 80 cm',
    resum:
      'Una cinta taronja que viu dreta dins d’un cau vertical excavat al fang, amb només el cap a fora.',
    text: [
      'Cos llarguíssim i aplanat com una cinta, de color taronja rosat translúcid, amb la dorsal i l’anal contínues fins a la punta de la cua i uns ulls desproporcionadament grossos.',
      'Excava una galeria vertical al sediment tou, de fins a un metre de fondària, i s’hi manté dreta amb el cap fora capturant plàncton. Un camp de codorneres vist des de dalt sembla un prat de tiges taronges que desapareixen totes alhora quan t’hi acostes.',
    ],
    onTrobar:
      'Als fons de fang de fora, en colònies. Cal acostar-s’hi molt a poc a poc.',
  },
  {
    slug: 'verat-volador',
    evidencia: 'registrada',
    nom: 'Verat volador',
    cientific: 'Dactylopterus volitans',
    autoria: '(Linnaeus, 1758)',
    familia: 'Dactylopteridae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 50 cm',
    resum:
      'Desplega unes pectorals immenses tacades de blau elèctric. No vola: camina pel fons amb els primers radis.',
    text: [
      'Cap cuirassat i angulós, cos bru clapejat, i unes aletes pectorals enormes que manté plegades i que desplega de cop, com un ventall, amb un dibuix de taques i vores blau turquesa que apareix del no-res.',
      'El desplegament és una amenaça, no un vol: serveix per semblar el doble de gros. Els primers radis de les pectorals estan separats de la resta i els fa servir per remenar el sediment i per caminar-hi literalment, un pas darrere l’altre.',
    ],
    onTrobar:
      'Damunt de la sorra oberta, caminant. Si el molesteu, obrirà les ales.',
  },
  {
    slug: 'gallineta',
    evidencia: 'registrada',
    nom: 'Gallineta',
    cientific: 'Chelidonichthys lastoviza',
    autoria: '(Bonnaterre, 1788)',
    familia: 'Triglidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 40 cm',
    resum:
      'La lluerna de les barres fosques i les pectorals blaves. Té el cos solcat de línies obliqües, com si fos raspallat.',
    text: [
      'Es distingeix de les altres lluernes per les barres fosques verticals del dors i, sobretot, per unes ranures obliqües ben marcades a tot el flanc. Les pectorals, per dins, són blau fosc amb el marge clar.',
      'Com tots els tríglids, camina pel fons amb els tres primers radis de cada pectoral, que estan separats i són sensibles al tacte i al gust: no palpa el sediment, el tasta.',
    ],
    onTrobar:
      'Damunt de fons barrejat de sorra i grava, caminant amb els radis lliures.',
    commons: 'Trigloporus lastoviza',
  },
  {
    slug: 'lluerna-roja',
    evidencia: 'registrada',
    nom: 'Lluerna roja',
    cientific: 'Chelidonichthys cuculus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Triglidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 50 cm',
    resum:
      'Vermella viva i amb la línia lateral formada per plaques ben visibles, com una filera de rebladures.',
    text: [
      'De color vermell intens pel dors i rosat pel ventre, amb la línia lateral marcada per una filera d’escates modificades en plaques, cosa que la distingeix de la resta de lluernes de la costa.',
      'És la més fonda de les lluernes d’aquests fons i la que més cap al talús es fa. Emet sons greus amb la bufeta natatòria, i un fons amb lluernes és un fons sorollós per a qui hi posi un hidròfon.',
    ],
    onTrobar:
      'Al límit exterior, sobre fang i sorra grossa.',
  },
  {
    slug: 'lluerna-fosca',
    evidencia: 'registrada',
    nom: 'Lluerna fosca',
    cientific: 'Chelidonichthys obscurus',
    autoria: '(Walbaum, 1792)',
    familia: 'Triglidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 30 cm',
    resum:
      'La més petita i la més discreta del gènere, sense el vermell de les altres. La pectoral té una taca fosca amb punts clars.',
    text: [
      'Bru grisenc en comptes de vermell, amb el cap més curt i les pectorals amb una taca fosca esquitxada de punts blancs a la cara interna. Rarament passa dels trenta centímetres.',
      'És la lluerna menys citada de les quatre, en part perquè es confon amb els juvenils de les altres. Al Mediterrani occidental hi és present però amb densitats molt més baixes que la lluerna rossa.',
    ],
    onTrobar:
      'Sobre sorra i fang, arran de fons, sovint immòbil.',
  },
  {
    slug: 'lluerna-verda',
    evidencia: 'registrada',
    nom: 'Lluerna verda',
    cientific: 'Eutrigla gurnardus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Triglidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 60 cm',
    resum:
      'Grisa amb una taca negra a la dorsal i una línia lateral blanca i dentada que sembla una serra.',
    text: [
      'De color gris verdós, sovint esquitxada de puntets blancs, amb una taca negra ben visible a la primera aleta dorsal i una línia lateral formada per escates espinoses que li donen aspecte de serra.',
      'És d’aigües més fredes que les seves parentes i al Mediterrani viu al límit sud de la seva àrea. Quan se la treu de l’aigua ronca de manera audible: aquest so és l’origen del nom anglès de tota la família.',
    ],
    onTrobar:
      'A la part més fonda i freda de la reserva, sobretot a l’hivern.',
    excloure: ['File:Eutrigla gurnardus1.jpg'], // làmina sobre fons blanc
  },
  {
    slug: 'rafel',
    evidencia: 'registrada',
    nom: 'Rafel',
    cientific: 'Trigla lyra',
    autoria: 'Linnaeus, 1758',
    familia: 'Triglidae',
    habitat: 'sorra',
    profunditat: [20, 25],
    mida: 'fins a 60 cm',
    resum:
      'El cap acaba en dos banyots aplanats que li donen la forma d’una lira. Vermell viu i de fons fondos.',
    text: [
      'És la més inconfusible de les lluernes: el musell està dividit en dues projeccions òssies aplanades i dentades, com les branques d’una lira, i el cos és d’un vermell intens amb el ventre blanc.',
      'Viu més fondo que la resta de la família i dins la reserva només arriba al límit exterior. Els juvenils, en canvi, pugen a fondàries menors, de manera que si en veieu un és probable que sigui petit.',
    ],
    onTrobar:
      'Al límit dels 25 m, sobre fang. Rar, i sempre a la vora del llindar.',
  },
  {
    slug: 'capet',
    evidencia: 'registrada',
    nom: 'Capet',
    cientific: 'Lepidotrigla cavillone',
    autoria: '(Lacepède, 1801)',
    familia: 'Triglidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 20 cm',
    resum:
      'La lluerna de butxaca: no passa d’un pam i té els ulls enormes i el cap desproporcionat.',
    text: [
      'Petita i rosada, amb el cap cuirassat molt gros en relació amb el cos i els ulls grans, i les pectorals amb la cara interna fosca vorejada de clar.',
      'És una de les espècies més abundants dels fons tous del Mediterrani occidental i alhora una de les que ningú no anomena, perquè no té mida comercial. En els mostreigs d’arrossegament apareix per milers.',
    ],
    onTrobar:
      'Sobre fang i sorra fina de la franja exterior, sovint en grups.',
  },
  {
    slug: 'peluda-vera',
    evidencia: 'registrada',
    nom: 'Peluda vera',
    cientific: 'Arnoglossus laterna',
    autoria: '(Walbaum, 1792)',
    familia: 'Bothidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 25 cm',
    resum:
      'Tan prima que se li transparenten els òrgans. Té els dos ulls a l’esquerra, com el tacó.',
    text: [
      'Cos oval, molt aplanat i gairebé translúcid, de color sorra clar amb taques difuses. Els ulls són al costat esquerre —és un botídid, com el tacó— i la pell és tan fina que a contrallum s’endevina l’espina.',
      'És una de les espècies més abundants dels fons de sorra i fang de tot el Mediterrani, i una peça bàsica de la dieta del rap, del lluç i de la lluerna. No té cap valor comercial i pràcticament ningú no la coneix pel nom.',
    ],
    onTrobar:
      'Damunt de la sorra fina, mig colgada. Es delata quan es mou.',
  },
  {
    slug: 'peluda-pigallada',
    evidencia: 'registrada',
    nom: 'Peluda pigallada',
    cientific: 'Arnoglossus thori',
    autoria: 'Kyle, 1913',
    familia: 'Bothidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 18 cm',
    iucn: 'DD',
    resum:
      'Com la peluda vera, però amb dos radis del davant de la dorsal allargats i clapes fosques més marcades.',
    text: [
      'Es distingeix de la peluda vera perquè els primers radis de l’aleta dorsal són llargs i lliures, sovint amb els extrems foscos, i perquè el patró de taques del cos és més contrastat.',
      'Comparteix fons amb la seva parenta i és molt menys freqüent. La seva fitxa de la UICN diu «dades insuficients», com passa amb gairebé tots els peixos plans petits d’aquest mar.',
    ],
    onTrobar:
      'Sobre sorra fina i fang, mig colgada, a la franja exterior.',
  },
  {
    slug: 'palaia-guarda-la-vida',
    evidencia: 'registrada',
    nom: 'Palaia-guarda-la-vida',
    cientific: 'Citharus linguatula',
    autoria: '(Linnaeus, 1758)',
    familia: 'Citharidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 30 cm',
    resum:
      'Peix pla amb els ulls a l’esquerra, la boca gran i el nom més llarg i més estrany de tot el catàleg.',
    text: [
      'Cos oval i prim, de color sorra amb la cara cega blanca, la boca clarament més gran que la de les altres palaies i els ulls separats per una cresta òssia. La línia lateral és recta.',
      'És l’única representant de la seva família a la Mediterrània. El nom popular, que sona a advertiment, apareix documentat a les llotges catalanes des de fa segles sense que ningú n’hagi explicat mai l’origen de manera convincent.',
    ],
    onTrobar:
      'Damunt del fang i la sorra fina de la franja exterior.',
  },
  {
    slug: 'palaia-bruixa',
    evidencia: 'registrada',
    nom: 'Palaia bruixa',
    cientific: 'Lepidorhombus boscii',
    autoria: '(Risso, 1810)',
    familia: 'Scophthalmidae',
    habitat: 'sorra',
    profunditat: [20, 25],
    mida: 'fins a 40 cm',
    resum:
      'Translúcida i amb quatre taques negres a la cua. Els ulls, molt junts, ocupen mig cap.',
    text: [
      'Cos oval i prim, de color sorra pàl·lid, amb els ulls al costat esquerre molt propers entre ells i quatre taques fosques ben marcades a la base de les aletes dorsal i anal, prop de la cua.',
      'És una espècie de fons fondos que a la reserva només toca el llindar exterior. Als mercats catalans es ven com a «bruixa» i sovint es confon amb la seva germana atlàntica, que aquí no arriba.',
    ],
    onTrobar:
      'Al límit dels 25 m, sobre fang tou.',
  },
  {
    slug: 'revola',
    evidencia: 'registrada',
    nom: 'Rèvola',
    cientific: 'Scophthalmus maximus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Scophthalmidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 100 cm',
    resum:
      'El turbot: rodó, sense escates i cobert de tubercles ossis. És el peix pla més gros d’aquests fons.',
    text: [
      'Cos gairebé circular, molt més ample que llarg comparat amb els llenguados, sense escates però amb la cara ocular sembrada de tubercles ossis que es noten al tacte. Canvia de color per igualar el fons amb una precisió notable.',
      'És el més gros i el més valorat dels peixos plans europeus, cosa que l’ha convertit en una de les espècies més cultivades en aqüicultura. A Commons això té una conseqüència pràctica: de les seves cent catorze fotografies, la majoria són de cuina i de piscifactoria, no de mar.',
    ],
    onTrobar:
      'Enterrada a la sorra grossa i la grava de la franja exterior.',
    excloure: [
      'File:Scophthalmus maximus (juvenile).jpg', // exemplar d’estudi sobre fons gris
      'File:Scophthalmus maximus.jpg', // exemplar d’estudi sobre fons negre
    ],
  },
  {
    slug: 'llenguado-nassut',
    evidencia: 'registrada',
    nom: 'Llenguado nassut',
    cientific: 'Pegusa lascaris',
    autoria: '(Risso, 1810)',
    familia: 'Soleidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 40 cm',
    resum:
      'Es distingeix del llenguado comú per la narina de la cara cega, eixamplada en forma de roseta.',
    text: [
      'Molt semblant al llenguado comú, del qual se separa perquè la narina anterior de la cara cega està dilatada en una estructura arrodonida i coberta de papil·les, i perquè la taca fosca de la pectoral és menys marcada.',
      'Prefereix la sorra més neta i somera que el llenguado comú, de manera que a la Masia Blanca ocupa la franja de dins mentre aquell es queda a la de fora. Dues espècies gairebé idèntiques repartint-se la platja per gra de sorra.',
    ],
    onTrobar:
      'Enterrat a la sorra fina dels primers metres, amb només els ulls fora.',
    excloure: [
      'File:Pegusa lascaris 02.jpg', // damunt d’una taula de fusta
      'File:Pegusa lascaris 01.jpg', // dins d’un plat de vidre
    ],
  },
  {
    slug: 'palai-xic',
    evidencia: 'habitat',
    nom: 'Palaí xic',
    cientific: 'Buglossidium luteum',
    autoria: '(Risso, 1810)',
    familia: 'Soleidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 15 cm',
    resum:
      'El llenguado més petit d’Europa. Té els radis de les aletes ratllats de fosc a intervals regulars.',
    text: [
      'No passa d’un pam. De color sorra groguenc, amb un patró característic: cada quatre o sis radis de les aletes dorsal i anal n’hi ha un de marcat amb una taca fosca, cosa que dóna a la vora del peix un puntejat regular.',
      'És abundantíssim als fons de sorra fina de tot el litoral i no té cap interès comercial. Menja poliquets i crustacis diminuts, i és aliment de gairebé tot el que caça al fons.',
    ],
    onTrobar:
      'Colgat a la sorra fina, de somer a fondo. Cal buscar el puntejat de la vora.',
  },
  {
    slug: 'llenguado-senegales',
    evidencia: 'registrada',
    nom: 'Llenguado senegalès',
    cientific: 'Solea senegalensis',
    autoria: 'Kaup, 1858',
    familia: 'Soleidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 60 cm',
    iucn: 'DD',
    resum:
      'Germà meridional del llenguado, amb el marge de les aletes fosc i continu. Puja cap al nord amb l’aigua càlida.',
    text: [
      'Es distingeix del llenguado comú perquè la vora de les aletes dorsal i anal és fosca de punta a punta, i perquè la taca negra de la pectoral és difusa en comptes de nítida.',
      'És una espècie d’afinitat africana que al litoral català era rara i que hi ha anat guanyant presència. Com passa amb l’alatxa i el verat d’ull gros, la seva progressió cap al nord és un termòmetre més.',
    ],
    onTrobar:
      'Enterrat a la sorra i el fang, sovint al costat del llenguado comú.',
  },
  {
    slug: 'aranya-fragata',
    evidencia: 'registrada',
    nom: 'Aranya fragata',
    cientific: 'Trachinus araneus',
    autoria: 'Cuvier, 1829',
    familia: 'Trachinidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 45 cm',
    resum:
      'La més grossa de les aranyes, amb clapes fosques rectangulars al flanc. El verí, com el de les altres, és seriós.',
    text: [
      'Es distingeix de l’aranya blanca per les taques fosques grosses i rectangulars alineades al llarg del flanc i pel cos més robust. Té el mateix armament: espines verinoses a la primera dorsal i a l’opercle.',
      'Viu a la sorra més gruixuda i sovint una mica més fondo que l’aranya blanca. El remei davant d’una punxada és sempre el mateix: aigua tan calenta com es pugui suportar, perquè la toxina es desnaturalitza amb la calor.',
    ],
    onTrobar:
      'Enterrada a la sorra grossa, de mitja fondària cap a fora.',
  },
  {
    slug: 'aranya-de-cap-negre',
    evidencia: 'habitat',
    nom: 'Aranya de cap negre',
    cientific: 'Trachinus radiatus',
    autoria: 'Cuvier, 1829',
    familia: 'Trachinidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 50 cm',
    resum:
      'El cap li porta un dibuix de solcs radials, i les taques del cos són rodones i fosques com ulls.',
    text: [
      'Es reconeix pel dibuix de crestes òssies que li irradien des de darrere de l’ull i per les taques rodones i fosques repartides pel cos, més que per cap altre caràcter. És la tercera aranya d’aquests fons.',
      'Aquest és el peix que la Viquipèdia anomena «aranya de cap negre», nom que aquest catàleg havia donat per error a l’aranya blanca fins a l’agost del 2026. Les tres aranyes comparteixen terreny, hàbits i verí, i costa molt de distingir-les enterrades.',
    ],
    onTrobar:
      'Enterrada a la sorra, sovint més fondo que les altres dues.',
  },
  {
    slug: 'aranyo',
    evidencia: 'registrada',
    nom: 'Aranyó',
    cientific: 'Echiichthys vipera',
    autoria: '(Cuvier, 1829)',
    familia: 'Trachinidae',
    habitat: 'sorra',
    profunditat: [0, 15],
    mida: 'fins a 15 cm',
    resum:
      'La més petita i la més perillosa per als banyistes, perquè viu just on la gent es fica a l’aigua.',
    text: [
      'No arriba al pam, té el cos més curt i comprimit que les altres aranyes i la primera dorsal completament negra. Els ulls són al capdamunt del cap, gairebé junts.',
      'Viu a la sorra dels primers metres, més amunt que cap de les seves parentes, i és responsable de la major part de les punxades de banyista de la costa europea. Entrar arrossegant els peus continua sent l’única precaució que funciona.',
    ],
    onTrobar:
      'Enterrat a la sorra de la vora de la platja, amb només els ulls fora.',
  },
  {
    slug: 'ase-mossegaire',
    evidencia: 'registrada',
    nom: 'Ase mossegaire',
    cientific: 'Blennius ocellaris',
    autoria: 'Linnaeus, 1758',
    familia: 'Blenniidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 20 cm',
    resum:
      'La bavosa de les profunditats: aleta dorsal alta com una vela, amb un ocel negre, i un tentacle en forma de ploma sobre cada ull.',
    text: [
      'És l’única bavosa que trobareu lluny de la roca. Té el cos clar amb barres brunes, un tentacle supraorbital llarg i ramificat, i una primera aleta dorsal molt alta amb una taca ocel·lada negra vorejada de blanc.',
      'A diferència de la resta de la família, que viu enganxada a la pedra somera, aquesta ocupa fons de sorra, fang i grava a partir dels deu metres, sovint dins de closques buides i de tubs.',
    ],
    onTrobar:
      'Sobre fons barrejat de la franja exterior, sovint dins d’una closca o un forat.',
  },
  {
    slug: 'cabot-de-fang',
    evidencia: 'registrada',
    nom: 'Cabot de fang',
    cientific: 'Gobius niger',
    autoria: 'Linnaeus, 1758',
    familia: 'Gobiidae',
    habitat: 'sorra',
    profunditat: [1, 25],
    mida: 'fins a 18 cm',
    resum:
      'El gòbit dels fons tous, que s’enfosqueix fins al negre en època de cria. Aguanta l’aigua més bruta.',
    text: [
      'Bru grisenc amb marbrat fosc, amb els primers radis de la dorsal allargats en filaments i una taca fosca al capdamunt de cada aleta dorsal. Els mascles reproductors es tornen gairebé negres, d’aquí el nom científic.',
      'És la més tolerant de les espècies del gènere: viu en ports, canals i llacunes on l’oxigen baixa i el sediment és fi, i és de les poques que suporten l’aigua tèrbola. A la reserva ocupa el fang de fora i el fons del port.',
    ],
    onTrobar:
      'Damunt del fang i la sorra bruta, sovint prop de l’escullera i dins del port.',
  },
  {
    slug: 'gobi-de-quatre-taques',
    evidencia: 'registrada',
    nom: 'Gobi de quatre taques',
    cientific: 'Deltentosteus quadrimaculatus',
    autoria: '(Valenciennes, 1837)',
    familia: 'Gobiidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 8 cm',
    resum:
      'Quatre taques fosques alineades al flanc i una barbeta sota el mentó. Viu sobre el fang de fora.',
    text: [
      'Petit i clar, amb quatre taques brunes ben separades al llarg del costat i un petit apèndix carnós sota la mandíbula inferior, que és un caràcter poc habitual entre els gòbits.',
      'És una de les espècies més abundants dels fons de fang costaners del Mediterrani i apareix en gairebé tots els mostreigs d’arrossegament de plataforma, sempre en nombres alts i sempre sense que ningú se n’ocupi.',
    ],
    onTrobar:
      'Damunt del fang de la franja exterior, immòbil sobre el sediment.',
  },
  {
    slug: 'gobi-descates',
    evidencia: 'registrada',
    nom: 'Gobi d’escates',
    cientific: 'Lesueurigobius friesii',
    autoria: '(Malm, 1874)',
    familia: 'Gobiidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 13 cm',
    resum:
      'Groc pàl·lid amb bandes taronges i les aletes ratllades. Comparteix el cau amb un cranc excavador.',
    text: [
      'Cos esvelt, groguenc, travessat per tres o quatre bandes taronja brunes, amb les aletes dorsals altes i marcades de línies fosques. És un dels gòbits més vistosos i menys vistos d’aquests fons.',
      'Viu en galeries excavades al fang, sovint les que ha fet la cigala de mar o algun crustaci excavador, i hi passa la major part del temps. Depèn, per tant, que el sediment no es remogui: és de les espècies que desapareixen abans quan un fons s’arrossega.',
    ],
    onTrobar:
      'A la boca d’una galeria al fang de fora. Es fica dins a la primera vibració.',
  },
  {
    slug: 'gobi-tacat',
    evidencia: 'registrada',
    nom: 'Gobi tacat',
    cientific: 'Pomatoschistus marmoratus',
    autoria: '(Risso, 1810)',
    familia: 'Gobiidae',
    habitat: 'sorra',
    profunditat: [0, 12],
    mida: 'fins a 7 cm',
    resum:
      'Translúcid i esquitxat de punts bruns, sobre la sorra de la vora. És un dels peixos més abundants de la platja.',
    text: [
      'Menut i gairebé transparent, amb una pigallada de punts foscos i, en els mascles, una taca negra a la primera dorsal. Es confon amb el fons amb una eficàcia total: se’l veu quan salta d’un lloc a l’altre.',
      'Viu literalment a la franja on la gent es banya, i suporta salinitats i temperatures molt variables. Un metre quadrat de sorra dels primers metres pot tenir-ne uns quants sense que ningú se n’adoni.',
    ],
    onTrobar:
      'A la sorra dels primers metres i dins del port, en fons de menys d’un pam.',
    // Sense nom català documentat; segueix la fórmula dels altres gòbits.
  },
  {
    slug: 'gobi-menut',
    evidencia: 'habitat',
    nom: 'Gobi menut',
    cientific: 'Pomatoschistus minutus',
    autoria: '(Pallas, 1770)',
    familia: 'Gobiidae',
    habitat: 'sorra',
    profunditat: [0, 20],
    mida: 'fins a 11 cm',
    resum:
      'Bessó del gobi tacat, una mica més gros i amb l’ocel de la dorsal vorejat de clar en els mascles.',
    text: [
      'Molt semblant al gobi tacat, del qual se separa per detalls de la disposició de les escates i perquè la taca fosca de la primera dorsal dels mascles té una vora clara ben definida.',
      'És més d’aigües fredes i al Mediterrani viu a prop del seu límit meridional. Les dues espècies conviuen a la mateixa sorra i pràcticament només es distingeixen amb l’animal a la mà.',
    ],
    onTrobar:
      'Sobre la sorra fina, dels primers metres cap a fora.',
    // Sense nom català documentat.
  },
  {
    slug: 'pixota-blanca',
    evidencia: 'registrada',
    nom: 'Pixota blanca',
    cientific: 'Ophidion barbatum',
    autoria: 'Linnaeus, 1758',
    familia: 'Ophidiidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 30 cm',
    resum:
      'Un peix rosat en forma de ganivet, amb les aletes contínues i quatre barbetes al mentó. S’enterra de cua.',
    text: [
      'Cos comprimit i afilat cap enrere, rosat translúcid amb reflexos iridescents, amb la dorsal, la caudal i l’anal fusionades en una vora contínua i unes barbetes ventrals que fa servir per palpar el sediment.',
      'S’enterra reculant, amb la cua per davant, i passa el dia sota la sorra amb només el cap fora. Els mascles tenen un aparell sonor a la bufeta natatòria i els fons de sorra en són plens de nit, sense que se’n vegi cap.',
    ],
    onTrobar:
      'Enterrada a la sorra de fora durant el dia; activa i visible de nit.',
  },
  {
    slug: 'roncador',
    evidencia: 'registrada',
    nom: 'Roncador',
    cientific: 'Pomadasys incisus',
    autoria: '(Bowdich, 1825)',
    familia: 'Haemulidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 40 cm',
    resum:
      'Ronca fent petar les dents de la faringe i amplificant el so amb la bufeta natatòria. Té una taca fosca a l’opercle.',
    text: [
      'Cos alt i argentat amb reflexos daurats i una taca fosca ben marcada al marge de l’opercle. Les aletes tenen un to groguenc i la boca és petita, amb els llavis gruixuts.',
      'El nom no és casual: com el seu parent l’angelina, produeix sons fent xocar les plaques dentals faríngies i fent-los ressonar a la bufeta. Ho fa sobretot quan se’l manipula, i el so se sent perfectament a l’aire.',
    ],
    onTrobar:
      'Damunt de la sorra a la vora de la roca, sol o en grups petits.',
  },
  {
    slug: 'drago-lira',
    evidencia: 'habitat',
    nom: 'Dragó lira',
    cientific: 'Callionymus lyra',
    autoria: 'Linnaeus, 1758',
    familia: 'Callionymidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 30 cm',
    resum:
      'El mascle desplega una dorsal altíssima ratllada de blau i groc i fa una dansa lenta al voltant de la femella.',
    text: [
      'Cos aplanat i triangular vist des de dalt, amb el cap ample, els ulls al capdamunt i la boca projectable cap avall. Els mascles són molt més grossos que les femelles i tenen la primera dorsal alta com una vela, amb línies blaves i grogues.',
      'El festeig és una de les coses més vistoses que es poden veure sobre un fons de sorra: el mascle envolta la femella amb les aletes desplegades i, si l’accepta, tots dos pugen junts a mitja aigua per alliberar-hi els ous.',
    ],
    onTrobar:
      'Damunt de la sorra neta, immòbil. Al maig i juny, buscant parella.',
    excloure: ['File:Callionymus lyra dorsal fin male.jpg'], // primer pla de la membrana de l’aleta: no s’hi veu el peix
  },
  {
    slug: 'aferrapedres',
    evidencia: 'registrada',
    nom: 'Aferrapedres',
    cientific: 'Callionymus maculatus',
    autoria: 'Rafinesque, 1810',
    familia: 'Callionymidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 16 cm',
    resum:
      'Quatre taques fosques alineades al llarg del dors, com quatre botons. El dragó dels fons més fondos.',
    text: [
      'Més petit que el dragó lira, amb una filera de quatre taques brunes ben marcades sobre el dors i el cos rosat clar. Els mascles tenen la dorsal alta i marcada de fosc.',
      'Ocupa fons més fondos que els seus congèneres i dins la reserva només arriba a la franja exterior. Com tots els cal·lionímids, no té escates i té la pell coberta d’una mucositat espessa.',
    ],
    onTrobar:
      'Sobre sorra grossa i fang al límit exterior, mig colgat.',
  },
  {
    slug: 'drago-de-platja',
    evidencia: 'registrada',
    nom: 'Dragó de platja',
    cientific: 'Callionymus risso',
    autoria: 'Lesueur, 1814',
    familia: 'Callionymidae',
    habitat: 'sorra',
    profunditat: [0, 15],
    mida: 'fins a 10 cm',
    resum:
      'El més petit i el més somer dels dragons: viu a la sorra de la vora, sovint amb menys d’un metre d’aigua.',
    text: [
      'No arriba als deu centímetres. Bru clar amb marbrat fosc i, en els mascles, taques blavoses al cap i a les aletes. Té el mateix cap ample i aplanat que els seus parents, en miniatura.',
      'Ocupa la franja de sorra somera de davant de la platja, fins i tot dins de les cubetes que queden a la vora. És dels animals que un banyista trepitja sense saber-ho tot un estiu.',
    ],
    onTrobar:
      'A la sorra dels primers metres, davant mateix de la platja.',
  },
  {
    slug: 'capsempe',
    evidencia: 'registrada',
    nom: 'Capsempe',
    cientific: 'Synodus saurus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Synodontidae',
    habitat: 'sorra',
    profunditat: [5, 25],
    mida: 'fins a 43 cm',
    resum:
      'Un llangardaix damunt de la sorra: cos cilíndric, cap de rèptil i la boca plena de dents fines com agulles.',
    text: [
      'Cos allargat i cilíndric, de color sorra amb barres brunes en forma de rombe, cap aplanat i una boca gran armada de dents primes i corbades, algunes de visibles amb la boca tancada.',
      'Es recolza sobre les aletes ventrals com si s’assegués, mig enterrat, i es queda immòbil hores esperant. Quan una presa li passa per damunt, surt disparat cap amunt i torna al mateix punt. És l’emboscada més ràpida d’aquests fons.',
    ],
    onTrobar:
      'Recolzat sobre la sorra, immòbil i mig colgat. Sovint no es mou ni quan t’hi acostes.',
  },
  {
    slug: 'flauteret',
    evidencia: 'registrada',
    nom: 'Flauteret',
    cientific: 'Macroramphosus scolopax',
    autoria: '(Linnaeus, 1758)',
    familia: 'Macroramphosidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 20 cm',
    resum:
      'Un morro llarg i prim com una palleta, i una espina dorsal serrada. Sol nedar de cap avall.',
    text: [
      'Cos alt i comprimit, rosat o taronja, amb el musell allargat en un tub prim acabat en una boca minúscula i sense dents, i amb una espina dorsal llarga i dentada al davant.',
      'Xucla petits crustacis del sediment, i per fer-ho es col·loca amb el cap cap avall i el cos gairebé vertical, una postura que manté fins i tot quan es desplaça. Forma bancs a la vora del talús.',
    ],
    onTrobar:
      'Al límit exterior, en grups, sovint amb el cap cap al fons.',
  },
  {
    slug: 'anguila',
    evidencia: 'registrada',
    nom: 'Anguila',
    cientific: 'Anguilla anguilla',
    autoria: '(Linnaeus, 1758)',
    familia: 'Anguillidae',
    habitat: 'sorra',
    profunditat: [0, 25],
    mida: 'fins a 150 cm',
    iucn: 'CR',
    resum:
      'Neix al mar dels Sargassos, creua l’Atlàntic de larva, viu anys en aigua dolça i hi torna a morir. Està en perill crític.',
    text: [
      'Cos serpentiforme i lliscós, amb les aletes dorsal, caudal i anal fusionades en una vora contínua i escates diminutes clavades a la pell. Canvia de color i de forma dels ulls en cada etapa de la vida.',
      'Tota l’espècie fresa en un sol lloc, el mar dels Sargassos, a més de cinc mil quilòmetres. Les larves triden un any o més a arribar a Europa, remunten els rius, hi passen entre cinc i vint anys i tornen a travessar l’Atlàntic per pondre i morir. Els assuts, les turbines, la pesca de l’angula i un paràsit importat n’han reduït el reclutament a menys del cinc per cent del que hi havia als anys setanta.',
    ],
    onTrobar:
      'A la desembocadura i als fons tous propers, sobretot de nit.',
    excloure: ['File:Anguilla anguilla France 1.jpg'], // dins d’un recipient de plàstic
  },
  {
    slug: 'congre-de-fang',
    evidencia: 'registrada',
    nom: 'Congre de fang',
    cientific: 'Ophichthus rufus',
    autoria: '(Rafinesque, 1810)',
    familia: 'Ophichthidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 60 cm',
    resum:
      'Una anguila de fang amb la cua acabada en punta dura, feta per enterrar-s’hi reculant.',
    text: [
      'Cos cilíndric i rogenc, sense aleta caudal: la cua acaba en una punta còrnia i rígida. És el tret que defineix tota la família dels ofíctids i l’eina amb què s’enterren.',
      'Passa el dia sota el sediment i en surt de nit a caçar crustacis i peixets. Als fons de fang de la plataforma catalana és molt més abundant del que suggereixen les poques vegades que es veu.',
    ],
    onTrobar:
      'Enterrat al fang de la franja exterior. De nit, reptant pel fons.',
    // Sense article a la Viquipèdia en català ni nom fixat; el nom descriu
    // l'hàbitat i l'aspecte, seguint el criteri del congre.
  },
  {
    slug: 'serp-de-mar',
    evidencia: 'registrada',
    nom: 'Serp de mar',
    cientific: 'Ophisurus serpens',
    autoria: '(Linnaeus, 1758)',
    familia: 'Ophichthidae',
    habitat: 'sorra',
    profunditat: [10, 25],
    mida: 'fins a 250 cm',
    resum:
      'Dos metres i mig de peix prim com un braç, amb el morro llarguíssim i ple de dents. Viu dret dins d’un forat.',
    text: [
      'És l’anguiliforme més llarg d’aquesta costa i alhora un dels més prims: pot fer dos metres i mig amb el gruix d’un canell. El morro és molt allargat i la boca porta dents llargues i visibles.',
      'S’enterra vertical al sediment, amb el cap fora i el cos sencer sota la sorra, i espera. Vist des de dalt sembla un tub que surt del fons, i és una de les trobades més desconcertants que es poden fer en un fons de sorra.',
    ],
    onTrobar:
      'Amb el cap fora de la sorra, vertical, a la franja exterior.',
    // Sense article a la Viquipèdia en català; «serp de mar» és el nom
    // tradicional que recullen les guies per a aquesta espècie.
  },
  {
    slug: 'mostela-de-fang',
    evidencia: 'registrada',
    nom: 'Mostela de fang',
    cientific: 'Echelus myrus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Ophichthidae',
    habitat: 'sorra',
    profunditat: [15, 25],
    mida: 'fins a 100 cm',
    resum:
      'Un altre ofíctid enterrador, més curt i gruixut que la serp de mar, amb la pell d’un gris uniforme.',
    text: [
      'Cos cilíndric i gris o bru clar, sense taques, amb l’aleta dorsal començant per darrere de les pectorals i la mateixa punta caudal dura de la família.',
      'Viu enterrat als fons de fang i sorra fina de la plataforma. Com els seus parents, es captura de tant en tant amb l’arrossegament i pràcticament no s’observa mai en immersió.',
    ],
    onTrobar:
      'Enterrada al fang de la franja exterior. Difícil de veure viva.',
    // Sense article a la Viquipèdia en català ni nom documentat.
  },

  // ─────────────────────────────────────────────────────────────────────────
  // LA COLUMNA D'AIGUA
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'llobarro',
    evidencia: 'oficial',
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
    // Espècie d'aqüicultura: a Commons hi ha molt més llobarro de peixateria i
    // de viver que de mar oberta.
    excloure: [
      'File:20121026 0597 Almada & Cacilhas 38.jpg', // taulell de peixateria
      'File:Dicentrarchus labrax (Belgium).jpg', // exemplar mort sobre fons negre, de laboratori
    ],
  },
  {
    slug: 'boga',
    evidencia: 'registrada',
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
    evidencia: 'oficial',
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
    // A Commons hi ha molta més sardina de llauna que sardina viva, i la imatge
    // principal de la Viquipèdia és, literalment, una llauna oberta.
    imatge: 'File:Sardina pilchardus.jpg',
    excloure: [
      'File:Cuba de sardinas.jpg', // cubell de sardines assecades, en una parada
      'File:Sardina pilchardus Italy.jpg', // exemplar mort a la mà
      'File:Sardiña (Sardina pilchardus).jpg', // munt de sardines pescades
    ],
  },
  {
    slug: 'seito',
    evidencia: 'registrada',
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
    excloure: [
      'File:Engraulis encrasicolus 57044460.jpg', // mort damunt la sorra de la platja
      'File:Engraulis encrasicolus 107259692.jpg', // mort damunt la sorra de la platja
      'File:Engraulis encrasicolus - Marian del Pozo.jpg', // dibuix científic, no pas una fotografia
      'File:Engraulis encrasicolus Portugal.jpg', // exemplar mort damunt la sorra molla
    ],
  },
  {
    slug: 'sorell-blancal',
    evidencia: 'registrada',
    nom: 'Sorell blancal',
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
    excloure: [
      'File:Jurel blanco o mediterráneo (Trachurus mediterraneus).jpeg', // exemplar mort sobre fons blanc
      'File:Jurel mediterráneo (Trachurus mediterraneus).jpg', // exemplar mort sobre fons blanc
    ],
  },
  {
    slug: 'agulla',
    evidencia: 'oficial',
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
    excloure: [
      'File:Belone belone - Garfish.jpg', // morta damunt la roca
      'File:Belone belone Italy.jpg', // morta damunt els còdols de la platja
      'File:Belona.JPG', // agulles pescades, arrenglerades a la platja
    ],
  },
  {
    slug: 'espet',
    evidencia: 'registrada',
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
    evidencia: 'habitat',
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
    excloure: [
      'File:Lichia amia Tuscany.jpg', // el mateix trofeu de pesca, pujat dues vegades
      'File:Lichia amia 1.jpg', // dins d’un aquari
      'File:Lichia amia South Africa.jpg', // morta damunt d’un llit d’algues
    ],
  },
  {
    slug: 'cirvia',
    evidencia: 'registrada',
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
    slug: 'llissa-vera',
    evidencia: 'registrada',
    nom: 'Llissa vera',
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

  {
    slug: 'sorell',
    evidencia: 'registrada',
    nom: 'Sorell',
    cientific: 'Trachurus trachurus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [5, 25],
    mida: 'fins a 70 cm',
    iucn: 'VU',
    resum:
      'El sorell de tota la vida. Es distingeix del blancal perquè els escuts de la línia lateral li cobreixen tot el flanc, no només la cua.',
    text: [
      'Molt semblant al sorell blancal, del qual se separa perquè la filera d’escuts ossis li recorre la línia lateral sencera i perquè la taca de l’opercle és més marcada. A l’aigua i en moviment, distingir-los és pràcticament impossible.',
      'És l’espècie que sosté bona part de la pesca d’encerclament de l’Atlàntic i del Mediterrani occidental, i està catalogada com a vulnerable. Com que les captures dels dos sorells es declaren sovint barrejades, el seu estat real és més difícil de seguir del que hauria de ser.',
    ],
    onTrobar: 'En bancs a mitja aigua, sovint barrejat amb el sorell blancal i amb bogues.',
  },
  {
    slug: 'sorell-fumat',
    evidencia: 'visitant',
    nom: 'Sorell fumat',
    cientific: 'Trachurus picturatus',
    autoria: '(Bowdich, 1825)',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [10, 25],
    mida: 'fins a 60 cm',
    resum:
      'El tercer sorell, més esvelt i amb un to blavós fumat pel dors. Prefereix l’aigua neta de fora.',
    text: [
      'Més prim i més cilíndric que els altres dos sorells, amb el dors blau fosc que li dóna el nom i els escuts de la línia lateral més petits. Té l’ull proporcionalment més gran.',
      'És una espècie més oceànica: abunda a les illes atlàntiques i al Mediterrani se sol trobar sobre fons més fondos i aigües més clares. Dins la reserva hi entra de pas, empès pels mateixos corrents que hi porten el peix blau.',
    ],
    onTrobar: 'A mitja aigua a la franja exterior, en bancs solts.',
  },
  {
    slug: 'verat',
    evidencia: 'registrada',
    nom: 'Verat',
    cientific: 'Scomber scombrus',
    autoria: 'Linnaeus, 1758',
    familia: 'Scombridae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 60 cm',
    resum:
      'Ratlles negres ondulades sobre un dors verd metàl·lic. No té bufeta natatòria: si para de nedar, s’enfonsa.',
    text: [
      'Fusiforme i perfecte, amb el dors verd blavós travessat per bandes fosques sinuoses i el ventre argentat sense taques. Darrere de la dorsal i de l’anal hi té una filera de pínnules, la marca de la família.',
      'No té bufeta natatòria, de manera que ha de nedar contínuament per no anar-se’n al fons, i tampoc no pot bombar aigua per les brànquies: respira nedant amb la boca oberta. És un dels peixos que millor expliquen què vol dir viure a la columna d’aigua i no al fons.',
    ],
    onTrobar: 'En bancs ràpids a mitja aigua, sobretot de primavera a principis d’estiu.',
    excloure: [
      'File:Scomber scombrus 1 - 2011.02.04.jpg', // exemplar mort damunt d’unes estovalles de cuina
      'File:Scomber scombrus 2 - 2011.02.04.jpg',
      'File:Fish scomber scombrus.jpg',
    ],
  },
  {
    slug: 'verat-dull-gros',
    evidencia: 'habitat',
    nom: 'Verat d’ull gros',
    cientific: 'Scomber colias',
    autoria: 'Gmelin, 1789',
    familia: 'Scombridae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 50 cm',
    resum:
      'Com el verat, però amb l’ull més gros, taques al ventre i les ratlles del dors més fines i trencades.',
    text: [
      'Es distingeix del verat comú per l’ull notablement més gran, per un patró de taques grises al ventre —que el verat no té— i perquè les línies del dors són més estretes i menys ondulades.',
      'És una espècie d’aigües més càlides que ha anat guanyant terreny al Mediterrani nord-occidental a mesura que l’aigua s’ha escalfat, mentre el verat comú recula cap al nord. Als mercats catalans se’n diu «bis», i durant molt de temps es va vendre com si fos verat.',
    ],
    onTrobar: 'A mitja aigua, en bancs, sobretot a l’estiu i la tardor.',
    excloure: [
      'File:Scomber colias USA.jpg', // damunt d’una taula de mesura de la NOAA
      'File:Scomber colias head.jpg', // munt de peix mort
    ],
  },
  {
    slug: 'bonitol',
    evidencia: 'habitat',
    nom: 'Bonítol',
    cientific: 'Sarda sarda',
    autoria: '(Bloch, 1793)',
    familia: 'Scombridae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 90 cm',
    resum:
      'Ratlles obliqües fosques sobre el dors i una dentadura que cap altre escòmbrid d’aquí no té.',
    text: [
      'Es reconeix a l’acte per les set o dotze bandes fosques inclinades que li recorren el dors, i per les dents còniques i visibles: és un depredador actiu, no un filtrador de plàncton crescut.',
      'Caça en grup, envoltant bancs de sardina i de seitó i empenyent-los cap a la superfície. Quan això passa a prop de la costa es veu des de la platja: l’aigua bull i les gavines hi cauen a sobre. És el senyal més fiable que hi ha peix blau a la reserva.',
    ],
    onTrobar: 'A la superfície i a mitja aigua, en caceres d’estiu i tardor.',
    excloure: ['File:Sarda sarda NJ.jpg'], // sostingut per un pescador dins d’una barca
  },
  {
    slug: 'tonyina',
    evidencia: 'visitant',
    nom: 'Tonyina',
    cientific: 'Thunnus thynnus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Scombridae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 300 cm',
    resum:
      'Es manté més calenta que l’aigua on neda i creua l’Atlàntic per anar a fresar. Pot pesar mitja tona.',
    text: [
      'Massissa i hidrodinàmica, blau fosc pel dors i argentada pels flancs, amb les pínnules grogues vorejades de negre. Conserva la calor muscular amb una xarxa de vasos contracorrent, cosa que li permet caçar en aigües fredes i mantenir un metabolisme d’animal de sang calenta.',
      'La població de l’Atlàntic est fresa al Mediterrani i hi entra cada primavera. Va estar a punt de col·lapsar als anys 2000 i s’ha recuperat notablement des del 2010 gràcies a un pla de gestió internacional: és, probablement, la millor notícia pesquera d’aquest mar en mig segle.',
    ],
    onTrobar: 'De pas, a la franja exterior. Rara però possible, sobretot a la primavera.',
    excloure: [
      'File:Bluefin-big.jpg', // làmina
      'File:Atún en Vigo.jpg', // exemplar mort al terra d’una llotja, amb etiqueta
      'File:Thunnus thynnus battle.jpg', // il·lustració
      'File:Thunnus thynnus 189.jpg', // gravat
      'File:Atún rojo, thunnus thynnus, pescado a jigging en Cabo de Palos, Murcia..JPG', // capturat a jigging
      'File:Bluefin Tuna finlets.jpg', // exemplar mort damunt d’una xarxa
      'File:Bluefin Tuna.jpg', // primer pla del cap d’un exemplar mort
    ],
  },
  {
    slug: 'bacoreta',
    evidencia: 'visitant',
    nom: 'Bacoreta',
    cientific: 'Euthynnus alletteratus',
    autoria: '(Rafinesque, 1810)',
    familia: 'Scombridae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 100 cm',
    resum:
      'Un dibuix de ratlles trencades al dors i unes quantes taques negres entre les aletes ventrals i la pectoral.',
    text: [
      'Menys esvelta que la tonyina, amb el dors marcat per un dibuix irregular de línies obliqües que no arriba mai per sota de la línia lateral, i amb tres a set taques fosques i rodones a la zona ventral, que és el tret que la identifica.',
      'És costanera i molt més abundant del que suggereix la seva absència dels taulells: es captura sobretot com a pesca accessòria i té poc valor comercial. Entra en aigües somes darrere dels bancs de peix petit, i el grapissar és exactament la mena de lloc on això passa.',
    ],
    onTrobar: 'A mitja aigua i en superfície, en grups, a l’estiu.',
    excloure: [
      'File:Euthynnus alletteratus USA.jpg', // sostinguda per un pescador a la platja
      'File:Thynnus thunnina Ford 54.jpg', // gravat
      'File:Euthynnus alletteratus (FDA 086).jpg', // exemplar de referència amb carta de color
      'File:Euthynnus alletteratus (FDA 211).jpg',
      'File:Bonito-listrado.jpg', // exemplars morts damunt d’un paviment
      'File:Tonno Alletterato.jpg', // exemplar mort damunt d’un taulell
    ],
  },
  {
    slug: 'melvera',
    evidencia: 'visitant',
    nom: 'Mèlvera',
    cientific: 'Auxis rochei',
    autoria: '(Risso, 1810)',
    familia: 'Scombridae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 50 cm',
    resum:
      'El més petit dels túnids d’aquesta costa, amb un corselet d’escates ben marcat i les dues dorsals molt separades.',
    text: [
      'Cos curt i rodó, blau fosc amb un dibuix de línies ondulades a la meitat posterior del dors, i una separació gran entre les dues aletes dorsals que la distingeix de la bacoreta. El corselet —la zona d’escates gruixudes darrere del cap— hi és molt aparent.',
      'Forma bancs densos i ràpids que apareixen i desapareixen en qüestió de minuts. És una peça bàsica de la dieta de la tonyina, del bonítol i del solraig: dins la xarxa tròfica pelàgica fa de baula entre el peix blau menut i els depredadors grossos.',
    ],
    onTrobar: 'En bancs ràpids a mitja aigua, a l’estiu i la tardor.',
    excloure: [
      'File:Auxis rochei rochei in Greece.jpg', // caixes de peix damunt d’una barca
      'File:Auxis rochei (USNM-424772).jpg', // exemplar del Smithsonian amb número de catàleg
      'File:Auxis rochei (USNM-403145).jpg',
    ],
  },
  {
    slug: 'alatxa',
    evidencia: 'registrada',
    nom: 'Alatxa',
    cientific: 'Sardinella aurita',
    autoria: 'Valenciennes, 1847',
    familia: 'Dorosomatidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 35 cm',
    resum:
      'Més esvelta que la sardina i amb una ratlla daurada al flanc quan és viva. Guanya terreny a mesura que l’aigua s’escalfa.',
    text: [
      'Cos cilíndric i prim, amb una franja daurada longitudinal que s’esvaeix de seguida un cop morta i una taca fosca al capdamunt de l’opercle. Té l’opercle llis, sense els solcs radials de la sardina.',
      'És d’aigües més càlides que la sardina, i les seves captures al Mediterrani nord-occidental han crescut mentre les d’aquella queien. Aquesta substitució és un dels indicadors més clars i menys discutits de l’escalfament d’aquesta aigua.',
    ],
    onTrobar: 'En bancs a mitja aigua, sobretot d’estiu a tardor.',
    excloure: [
      'File:Sardinella aurita New Jersey.jpg', // dins d’un recipient de plàstic
      'File:Moria di Alacce.jpg', // mortaldat massiva damunt la sorra d’una platja
      'File:Sardinella aurita Tuscany.jpg', // als dits, damunt d’un cubell
      'File:Round sardinella (14005132023).jpg', // exemplar de col·lecció amb etiqueta i escala
      'File:Sardinella aurita (13981942522).jpg', // exemplar de col·lecció, amb escala i etiqueta
      'File:Round sardinella (13985146535).jpg',
      'File:Sardinella aurita Florida.jpg', // a la mà
      'File:Sardinella aurita head.jpg', // munt de peix mort
    ],
  },
  {
    slug: 'amploia',
    evidencia: 'registrada',
    nom: 'Amploia',
    cientific: 'Sprattus sprattus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Clupeidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 16 cm',
    resum:
      'La més petita de les tres clupees d’aquí. Té el ventre esmolat com una serra i s’acosta a la costa a l’hivern.',
    text: [
      'S’assembla a una sardina en miniatura, però amb el ventre clarament carenat i dentat —s’hi nota el tall passant-hi el dit— i sense la filera de taques laterals. Rarament passa dels quinze centímetres.',
      'És una espècie d’aigües fredes que al Mediterrani occidental viu al límit meridional de la seva àrea. Entra a la costa en els mesos freds i és, com la sardina i el seitó, aliment directe de gairebé tot el que neda per sobre seu.',
    ],
    onTrobar: 'En bancs a mitja aigua, entre desembre i març.',
    excloure: [
      'File:Sprattus sprattus England.jpg', // damunt d’una mà
      'File:Sprattus sprattus.jpg', // exemplar de col·lecció sobre fons negre
      'File:Sprattus sprattus phalericus 26936675.jpg', // damunt de paper quadriculat
      'File:Sprattus sprattus (waste).JPG', // un plat de peix assecat
    ],
  },
  {
    slug: 'xanguet',
    evidencia: 'registrada',
    nom: 'Xanguet',
    cientific: 'Aphia minuta',
    autoria: '(Risso, 1810)',
    familia: 'Gobiidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 6 cm',
    resum:
      'Un gòbit transparent que viu i mor en un any sense arribar a tocar mai el fons.',
    text: [
      'Gairebé invisible: cos completament transparent, sense escates i sense pigment, amb els ulls i una petita massa d’òrgans com a única cosa opaca. Fa cinc o sis centímetres.',
      'És l’excepció de la seva família: tots els altres gòbits del catàleg viuen enganxats al fons, i aquest passa tota la vida —poc més de dotze mesos— nedant a mitja aigua. La seva pesca està molt regulada a Catalunya, precisament perquè es captura l’any sencer d’una població alhora.',
    ],
    onTrobar: 'En eixams solts a mitja aigua, gairebé impossible de veure si no és a contrallum.',
  },
  {
    slug: 'tallahams',
    evidencia: 'habitat',
    nom: 'Tallahams',
    cientific: 'Pomatomus saltatrix',
    autoria: '(Linnaeus, 1766)',
    familia: 'Pomatomidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 130 cm',
    iucn: 'VU',
    resum:
      'El nom no és cap metàfora: té una dentadura que talla els fils de pescar i, de tant en tant, també les xarxes.',
    text: [
      'Cos comprimit i argentat amb el dors verd blavós, la mandíbula inferior sortint i unes dents triangulars i esmolades alineades com les d’una serra. Els bancs entren a la costa perseguint peix petit.',
      'Caça en grup i amb una voracitat que fa que se’l descrigui sovint com el més agressiu dels peixos costaners: continua matant peix quan ja no té gana. Al litoral català era escàs fins fa unes dècades i avui hi és habitual, un canvi més a la llista dels que porta l’aigua càlida.',
    ],
    onTrobar: 'A la superfície i a mitja aigua, en caceres sorolloses, d’estiu a tardor.',
    excloure: [
      'File:Fish4397 - Flickr - NOAA Photo Library.jpg', // exemplar damunt d’una post blava
      'File:Pomatomus saltatrix - SERC.jpg', // exemplar de col·lecció sobre fons negre
      'File:Pomatomus saltatrix 445623677.jpg', // mort damunt l’herba
    ],
  },
  {
    slug: 'espet-imperial',
    evidencia: 'registrada',
    nom: 'Espet imperial',
    cientific: 'Sphyraena viridensis',
    autoria: 'Cuvier, 1829',
    familia: 'Sphyraenidae',
    habitat: 'columna',
    profunditat: [3, 25],
    mida: 'fins a 130 cm',
    resum:
      'El germà gros de l’espet, amb barres fosques que li baixen per sota de la línia lateral i el costum de formar bancs immòbils.',
    text: [
      'Es distingeix de l’espet comú perquè és més gros, perquè les barres verticals del flanc creuen la línia lateral i baixen cap al ventre, i perquè la mandíbula superior arriba més enrere. Els adults formen bancs compactes que s’aturen a mitja aigua.',
      'Aquesta espècie és la responsable directa d’un error d’aquest mateix catàleg: la fitxa de l’espet duia dues fotografies seves fins a la revisió d’imatges de l’agost del 2026. A Commons totes dues espècies estan barrejades, i el peu de foto gairebé mai no diu quina és.',
    ],
    onTrobar: 'En bancs quiets a mitja aigua sobre les barres exteriors, sobretot a l’estiu.',
  },
  {
    slug: 'llampuga',
    evidencia: 'visitant',
    nom: 'Llampuga',
    cientific: 'Coryphaena hippurus',
    autoria: 'Linnaeus, 1758',
    familia: 'Coryphaenidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 200 cm',
    resum:
      'Verda i daurada, amb el front vertical dels mascles adults. Creix més de pressa que gairebé cap altre peix del món.',
    text: [
      'Cos molt comprimit amb una aleta dorsal que li recorre gairebé tot el dors, colors verd or i blau elèctric que s’apaguen en pocs minuts fora de l’aigua, i un front que en els mascles grossos es fa vertical com una paret.',
      'Pot créixer més d’un centímetre al dia i arribar al metre en un any. Viu associada a qualsevol cosa que suri, i la pesca tradicional balear i catalana de les llampugueres es basa exactament en això: posar-hi ombra artificial i esperar. Entra a la costa a la tardor.',
    ],
    onTrobar: 'A la superfície, sovint sota qualsevol objecte flotant. De setembre a novembre.',
    // De les quatre candidates, cap no és una llampuga viva a l’aigua: una
    // captura a bord, un tall de carn, un exemplar dissecat i sis de mortes
    // damunt d’un taulell.
    excloure: [
      'File:Common Dolphinfish, Bali Sea, Bali, ID imported from iNaturalist photo 540579538 (cropped).jpg',
      'File:Coryphaena hippurus meat.JPG',
      'File:Coryphaenahippurus.JPG',
      'File:Common Dolphinfishes (Coryphaena hippurus) (31711258567).jpg',
      'File:Coryphaena hippurus Ford 53.jpg', // làmina
      'File:Bottlenose Dolphin swimming in the Florida Bay. (b4a6f281-1be2-4c81-8140-fdcdb994b882).jpg', // un dofí mular, mal classificat a Commons
      'File:Common Dolphinfish, 886 Cannery Row, Monterey, CA 93940, USA imported from iNaturalist photo 254881543.jpg', // l’adreça és la de l’aquari de Monterey Bay
      'File:Coryphaena hippurus (adult male).jpg', // aquari: es veu el cantell del vidre i el fons blau
      'File:Common Dolphinfish, 886 Cannery Row, Monterey, CA 93940, USA imported from iNaturalist photo 254881550.jpg',
      'File:Common Dolphinfish, 886 Cannery Row, Monterey, CA 93940, USA imported from iNaturalist photo 254881579.jpg',
      'File:Common Dolphinfish, North Atlantic Ocean, Beaufort, NC, US imported from iNaturalist photo 505895933.jpg', // capturada, damunt d’una nevera
      'File:Common Dolphinfish, Bali Sea, Bali, ID imported from iNaturalist photo 540579538.jpg', // enganxada a l’ham, a la superfície
      'File:Common Dolphinfish, North Atlantic Ocean, Beaufort, NC, US imported from iNaturalist photo 505895933 (cropped).jpg', // juvenil dins d’una safata
      'File:Common Dolphinfish, United States imported from iNaturalist photo 483351857.jpg', // juvenil dins d’un tanc
      'File:Common Dolphinfish, Shinnecock Bay, Hampton Bays, NY, US imported from iNaturalist photo 159675415 (cropped).jpg', // juvenil damunt d’un palmell
      'File:Common Dolphinfish, United States imported from iNaturalist photo 483351857 (cropped).jpg',
      'File:Common Dolphinfish, Shinnecock Bay, Hampton Bays, NY, US imported from iNaturalist photo 159675415.jpg',
      'File:Coryphaena hippurus Ford 53.jpg2', // (placeholder)
    ],
  },
  {
    slug: 'pampol-vairo',
    evidencia: 'visitant',
    nom: 'Pàmpol vairó',
    cientific: 'Naucrates ductor',
    autoria: '(Linnaeus, 1758)',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 70 cm',
    resum:
      'El peix pilot: cinc o set barres negres i la vida sencera nedant al costat d’un tauró o d’una tortuga.',
    text: [
      'Fusiforme, blanc blavós amb cinc a set barres fosques verticals molt marcades que li donen aspecte de peix tropical. Els juvenils són encara més contrastats.',
      'Acompanya taurons, rajades grosses, tortugues i vaixells, i durant segles es va creure que els guiava —d’aquí el nom científic, ductor. En realitat aprofita l’ona de pressió que genera l’animal gros per nedar amb menys esforç, i les restes del que menja. Si un dia entra a la reserva, hi entrarà acompanyat.',
    ],
    onTrobar: 'Al costat d’un animal gros o d’un objecte flotant. Mai sol.',
  },
  {
    slug: 'palomida-blanca',
    evidencia: 'registrada',
    nom: 'Palomida blanca',
    cientific: 'Trachinotus ovatus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [0, 20],
    mida: 'fins a 70 cm',
    resum:
      'Alta, plana i platejada, amb quatre o cinc punts foscos al flanc. Els joves entren a la rompent de la platja mateixa.',
    text: [
      'Cos molt comprimit i romboïdal, argentat amb reflexos blaus i una filera de tres a cinc taques rodones i fosques a mitja alçada. Les aletes dorsal i anal són falciformes i simètriques.',
      'Els juvenils formen grups que caçen dins de l’escuma de la rompent, a mig metre d’aigua, i és allà on més fàcilment els veureu: a la platja del Francàs, en un dia de mar plana, sense entrar-hi més enllà dels genolls.',
    ],
    onTrobar: 'A la rompent i a la franja de superfície de la platja, a l’estiu.',
  },
  {
    slug: 'sorella-roncaire',
    evidencia: 'registrada',
    nom: 'Sorella roncaire',
    cientific: 'Caranx rhonchus',
    autoria: 'Geoffroy Saint-Hilaire, 1817',
    familia: 'Carangidae',
    habitat: 'columna',
    profunditat: [5, 25],
    mida: 'fins a 60 cm',
    resum:
      'Ronca. Fa sonar la bufeta natatòria quan la treuen de l’aigua, i d’aquí li ve el nom.',
    text: [
      'Semblant a un sorell però amb el cos més alt, una taca fosca al capdamunt de l’opercle i el groc de la cua més viu. La línia lateral porta escuts només al tram final.',
      'És una espècie d’afinitat africana que entra al Mediterrani occidental i que, com el verat d’ull gros i l’alatxa, s’hi ha fet més freqüent en les darreres dècades. El nom li ve del so que produeix fent vibrar la bufeta natatòria.',
    ],
    onTrobar: 'En bancs a mitja aigua a la franja exterior, a l’estiu.',
  },
  {
    slug: 'saputa',
    evidencia: 'visitant',
    nom: 'Saputa',
    cientific: 'Brama brama',
    autoria: '(Bonnaterre, 1788)',
    familia: 'Bramidae',
    habitat: 'columna',
    profunditat: [10, 25],
    mida: 'fins a 100 cm',
    resum:
      'Un disc negre argentat amb el front bombat i les aletes llarguíssimes. Viu a mar obert i arriba a la costa amb els temporals.',
    text: [
      'Cos molt alt i comprimit, gairebé circular, de color bru fosc metàl·lic amb reflexos daurats, amb la dorsal i l’anal molt llargues i la caudal profundament forcada. El perfil del cap és abrupte i arrodonit.',
      'És un peix oceànic i de mitja fondària que fa migracions verticals cada nit. Apareix a la costa sobretot després dels temporals de llevant, i és una de les espècies que la gent troba a la platja sense saber què és.',
    ],
    onTrobar: 'De pas a la franja exterior. Més probable després d’un temporal.',
  },
  {
    slug: 'emperador',
    evidencia: 'visitant',
    nom: 'Emperador',
    cientific: 'Xiphias gladius',
    autoria: 'Linnaeus, 1758',
    familia: 'Xiphiidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 450 cm',
    iucn: 'NT',
    resum:
      'La mandíbula superior allargada en una espasa plana. Escalfa el cervell i els ulls per veure-hi a mig quilòmetre de fondària.',
    text: [
      'Inconfusible: el rostre és una fulla òssia aplanada que pot fer un terç de la llargada total, i l’adult no té ni escates ni dents. La primera aleta dorsal és alta i rígida com una vela.',
      'Baixa cada dia a caçar a centenars de metres, on l’aigua és a cinc graus, i per poder-ho fer té un òrgan que escalfa el cervell i els ulls fins a quinze graus per sobre de l’ambient. Al Mediterrani hi ha una població pròpia, genèticament diferenciada, que fresa aquí mateix a l’estiu.',
    ],
    onTrobar: 'A mar obert. Dins la reserva, una possibilitat de pas i res més.',
    excloure: [
      'File:Xiphias gladius 23056964.jpg', // enganxat a l’ham, al costat del vaixell
      'File:Xiphias gladius Linnaeus, 1758 2599925021.jpg', // exemplar de col·lecció sobre fons negre
      'File:Xiphias gladius 55109342.jpg', // penjat a la coberta d’un iot
      'File:Xiphias gladius Essawira Morocco.jpg', // descarregat en un port, damunt d’un carro
    ],
  },
  {
    slug: 'bot',
    evidencia: 'visitant',
    nom: 'Bot',
    cientific: 'Mola mola',
    autoria: '(Linnaeus, 1758)',
    familia: 'Molidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 330 cm',
    iucn: 'VU',
    resum:
      'El peix lluna: un cap enorme que sembla tallat pel darrere, sense cua, que puja a prendre el sol de costat a la superfície.',
    text: [
      'Sembla mig peix. El cos acaba de cop en una vora ondulada —el clavus, que substitueix l’aleta caudal— i es propulsa remant amb la dorsal i l’anal, altíssimes i oposades. És el peix ossi més pesant del món: se n’han pesat de més de dues tones.',
      'Menja sobretot meduses i altres organismes gelatinosos, i puja a estirar-se de costat a la superfície per escalfar-se després de les immersions fondes i perquè les gavines li treguin els paràsits. Quan n’apareix un davant de Coma-ruga, la notícia corre.',
    ],
    onTrobar: 'A la superfície, estirat de costat, en dies de mar plana. Una aparició de sort.',
  },
  {
    slug: 'llobarro-pigallat',
    evidencia: 'habitat',
    nom: 'Llobarro pigallat',
    cientific: 'Dicentrarchus punctatus',
    autoria: '(Bloch, 1792)',
    familia: 'Moronidae',
    habitat: 'columna',
    profunditat: [0, 20],
    mida: 'fins a 70 cm',
    resum:
      'Com el llobarro, però esquitxat de puntets negres per tot el dors i els flancs. Suporta encara més bé l’aigua dolça.',
    text: [
      'Es distingeix del llobarro comú perquè els adults conserven una pigallada de punts foscos per damunt de la línia lateral, i perquè té el cos una mica més alt. Els juvenils dels dos són pràcticament idèntics.',
      'És més termòfil i més tolerant a la dessalinització que el llobarro, i entra encara més amunt a les desembocadures i a les llacunes litorals. Al litoral català és clarament més escàs que el seu parent, i sovint es pesca sense distingir-lo.',
    ],
    onTrobar: 'A la franja somera, prop de l’escullera i de les desembocadures.',
  },
  {
    slug: 'saboga',
    evidencia: 'registrada',
    nom: 'Saboga',
    cientific: 'Alosa fallax',
    autoria: '(Lacepède, 1803)',
    familia: 'Alosidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 60 cm',
    resum:
      'Viu al mar i puja a fresar riu amunt. Al Mediterrani gairebé no li queda cap riu on poder-ho fer.',
    text: [
      'Sembla una sardina crescuda, amb el cos alt, l’opercle solcat i una filera de taques fosques al flanc darrere de l’opercle. Té una osca al mig de la mandíbula superior.',
      'És anàdroma: passa la vida al mar i remunta els rius per fresar. Els embassaments i els assuts del Segre, de l’Ebre i del Ter li han tallat pràcticament totes les rutes, i les poblacions catalanes s’han esfondrat. El seu nom apareix als arxius de pesca fluvial de fa un segle amb una freqüència que avui costa d’imaginar.',
    ],
    onTrobar: 'Prop de la costa i de les desembocadures, a la primavera.',
    excloure: [
      'File:Alosa fallax 33974382.jpg', // morta a la sorra, al costat d’una caixa de peix
      'File:Alosa fallax.png', // exemplar de col·lecció sobre fons negre
      'File:Alosa fallax A. F. Lydon.jpg', // làmina del segle xix
      'File:Zeebaards en fint.jpg', // exemplars morts damunt d’una taula
      'File:Twaitshad in art.jpg', // exemplar de col·lecció sobre fons blanc
    ],
  },
  {
    slug: 'cabessuda',
    evidencia: 'habitat',
    nom: 'Cabeçuda',
    cientific: 'Atherina hepsetus',
    autoria: 'Linnaeus, 1758',
    familia: 'Atherinidae',
    habitat: 'columna',
    profunditat: [0, 15],
    mida: 'fins a 20 cm',
    resum:
      'Germana gran del joell, més esvelta i més marinera: no entra a les aigües salabroses com fa aquell.',
    text: [
      'Molt semblant al joell, amb la mateixa banda platejada al flanc, però més allargada, amb el cap més punxegut i la franja lateral més estreta. Els bancs són més grossos i es mantenen més lluny de la vora.',
      'A diferència del joell, que aguanta la salinitat variable de les llacunes, aquesta és estrictament marina. Les dues coexisteixen a la reserva i es reparteixen la costa: el joell arran de platja i d’escullera, la cabeçuda una mica més enfora.',
    ],
    onTrobar: 'En bancs a la franja de superfície, per damunt de l’herbei i de la sorra.',
  },
  {
    slug: 'llissa-llobarrera',
    evidencia: 'registrada',
    nom: 'Llissa llobarrera',
    cientific: 'Mugil cephalus',
    autoria: 'Linnaeus, 1758',
    familia: 'Mugilidae',
    habitat: 'columna',
    profunditat: [0, 15],
    mida: 'fins a 120 cm',
    resum:
      'La llissa més grossa i la que té les parpelles adiposes més marcades: dues membranes transparents que li tapen mig ull.',
    text: [
      'Cos massís i argentat amb línies grises longitudinals, cap ample i aplanat, i unes parpelles adiposes ben desenvolupades que li cobreixen bona part de l’ull i li donen una mirada entelada.',
      'És cosmopolita —viu a totes les mars temperades i càlides del planeta— i tolera des de l’aigua de mar fins gairebé a la dolça. Es mou en grups compactes prop de la superfície i salta fora de l’aigua sovint, sense que ningú hagi acabat d’explicar del tot per què.',
    ],
    onTrobar: 'En grups a la superfície, prop de l’escullera i de la platja.',
  },
  {
    slug: 'llissa-galtavermella',
    evidencia: 'registrada',
    nom: 'Llissa galtavermella',
    cientific: 'Chelon auratus',
    autoria: '(Risso, 1810)',
    familia: 'Mugilidae',
    habitat: 'columna',
    profunditat: [0, 15],
    mida: 'fins a 59 cm',
    iucn: 'NT',
    resum:
      'Una taca daurada a cada galta i una altra a l’opercle. És la llissa que més s’acosta a la sorra de la platja.',
    text: [
      'Es distingeix de les altres llisses per les dues taques daurades ben visibles, una a cada costat del cap, i perquè no té les parpelles adiposes marcades de la llissa llobarrera.',
      'És la més costanera del grup i la que forma els bancs que veureu literalment tocant la vora, remenant la sorra amb la boca per menjar-se el biofilm i els detritus. Aquesta feina de netejar sediment és una de les menys vistoses i més necessàries de tota la reserva.',
    ],
    onTrobar: 'A la franja de rompent i vora l’escullera, en bancs, tot l’any.',
    commons: 'Liza aurata',
  },
  {
    slug: 'llissa-calua',
    evidencia: 'registrada',
    nom: 'Llissa calua',
    cientific: 'Chelon ramada',
    autoria: '(Risso, 1827)',
    familia: 'Mugilidae',
    habitat: 'columna',
    profunditat: [0, 12],
    mida: 'fins a 70 cm',
    iucn: 'NT',
    resum:
      'La llissa dels ports i de les desembocadures. Puja pels rius més amunt que cap altra.',
    text: [
      'Grisa i esvelta, amb el cap petit i estret, sense taques daurades a les galtes i amb una taca fosca a la base de la pectoral. És la més difícil d’identificar de totes.',
      'És la més tolerant a l’aigua dolça del grup i remunta els rius durant quilòmetres. Al Vendrell la trobareu sobretot dins del port i a les desembocadures, i és l’espècie que la gent veu més sovint sense saber que n’hi ha cinc de diferents.',
    ],
    onTrobar: 'Dins del port i a les desembocadures, en grups a la superfície.',
    commons: 'Liza ramada',
  },
  {
    slug: 'llissa-vera-saltadora',
    evidencia: 'habitat',
    nom: 'Llissa saltadora',
    cientific: 'Chelon saliens',
    autoria: '(Risso, 1810)',
    familia: 'Mugilidae',
    habitat: 'columna',
    profunditat: [0, 10],
    mida: 'fins a 40 cm',
    iucn: 'NT',
    resum:
      'La més petita i la més nerviosa. Salta fora de l’aigua a la mínima, i d’aquí li ve el nom.',
    text: [
      'La més menuda de les llisses d’aquesta costa, amb el cos prim i el cap punxegut, una franja daurada difusa al flanc i les aletes pectorals curtes.',
      'És l’espècie que salta amb més freqüència, sovint diverses vegades seguides, cosa que la delata abans de veure-la. Comparteix la franja somera amb la llissa galtavermella, i totes dues es passen el dia raspant sediment.',
    ],
    onTrobar: 'A la franja somera i dins del port. Busqueu els salts.',
    commons: 'Liza saliens',
  },
  {
    slug: 'llissa-morruda',
    evidencia: 'registrada',
    nom: 'Llissa morruda',
    cientific: 'Oedalechilus labeo',
    autoria: '(Cuvier, 1829)',
    familia: 'Mugilidae',
    habitat: 'columna',
    profunditat: [0, 10],
    mida: 'fins a 30 cm',
    resum:
      'El llavi superior gruixut i cobert de papil·les, com una escombreta. Viu a la roca batuda, no a la sorra.',
    text: [
      'Es reconeix pel llavi superior molt gruixut i clarament papil·lós, que és el que li dóna el nom, i pel cos petit i comprimit amb franges longitudinals fosques.',
      'A diferència de la resta de llisses, que remenen el sediment tou, aquesta pastura la pel·lícula d’algues de la roca de la zona de rompent. Ocupa un lloc que cap de les seves parentes no li disputa: el rompent rocós, amb l’aigua bullint.',
    ],
    onTrobar: 'A la roca batuda de l’escullera, al primer metre, sovint entre l’escuma.',
  },
  {
    slug: 'baldufa',
    evidencia: 'visitant',
    nom: 'Baldufa',
    cientific: 'Lagocephalus sceleratus',
    autoria: '(Gmelin, 1789)',
    familia: 'Tetraodontidae',
    habitat: 'columna',
    profunditat: [0, 25],
    mida: 'fins a 110 cm',
    resum:
      'Es tiba com un globus i porta prou tetrodotoxina per matar una persona. Va entrar per Suez i puja cap aquí.',
    text: [
      'Cos allargat i llis amb el dors gris platejat i el ventre blanc, amb quatre plaques dentals soldades que formen un bec capaç de trencar closques i de tallar hams d’acer. Infla el ventre d’aigua fins a fer-se una bola quan se sent amenaçat.',
      'Els seus òrgans i la seva pell contenen tetrodotoxina, un verí per al qual no hi ha antídot; a la Mediterrània oriental n’hi ha hagut intoxicacions greus. Va arribar al Mediterrani el 2003 i des de llavors avança cap a l’oest. Encara no és habitual al litoral català, però hi ha citacions, i la fitxa és aquí precisament perquè convé saber-la reconèixer.',
    ],
    onTrobar:
      'Cap citació confirmada a la reserva. Si en veieu un, val la pena reportar-lo.',
    // Sense nom català fixat; «baldufa» és el nom que fan servir les guies
    // valencianes per als tetraodòntids.
  },

  // ─────────────────────────────────────────────────────────────────────────
  // RAJADES I TAURONS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'vaca-tremolosa',
    evidencia: 'registrada',
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
    evidencia: 'registrada',
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
    excloure: ['File:A nice dogfish.JPG'], // exemplar dissecat damunt d’un prestatge
  },
  {
    slug: 'escursana',
    evidencia: 'habitat',
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
    evidencia: 'registrada',
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
    excloure: [
      // Tots dos fitxers estan truncats a Commons i sharp no els pot descodificar.
      'File:Raja clavata 1.jpg',
      'File:Raja clavata 2.jpg',
    ],
  },
  {
    slug: 'rajada-estrellada',
    evidencia: 'registrada',
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
    // Càpsula ovígera buida a la platja: el peu de foto només diu el binomi, i
    // a la fitxa es llegiria com si la rajada fos aquesta bossa negra.
    excloure: ['File:Mediterranean Starry Skate (Razza Stellata) (Raja asterias) - Rome, Italy 2024-03-01.jpg'],
  },
  {
    slug: 'mila',
    evidencia: 'habitat',
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
    excloure: [
      'File:Myliobatis aquila Réunion.jpg', // fotografiada a la Reunió, damunt d’Acropora: no és el Mediterrani ni, probablement, l’espècie
    ],
  },
  {
    slug: 'vaca-comuna',
    evidencia: 'registrada',
    nom: 'Vaca comuna',
    cientific: 'Torpedo torpedo',
    autoria: '(Linnaeus, 1758)',
    familia: 'Torpedinidae',
    habitat: 'elasmo',
    profunditat: [2, 25],
    mida: 'fins a 60 cm',
    iucn: 'VU',
    resum:
      'La germana ocel·lada de la vaca tremolosa: cinc taques blaves envoltades de negre sobre el disc, i el mateix corrent elèctric a dins.',
    text: [
      'Es distingeix de la vaca tremolosa a la primera ullada: en comptes del marbrat bru, porta cinc ocels blaus amb anell fosc repartits pel disc, sobre un fons canyella llis. La resta del disseny és idèntic —cos discoïdal, cua curta i gruixuda, dos òrgans elèctrics a banda i banda del cap.',
      'Prefereix la sorra neta i menys fonda que la seva parenta, de manera que a la Masia Blanca les dues es reparteixen el terreny: la tremolosa al peu de les barres, aquesta a les clapes obertes de la vora. Tampoc no s’ha de tocar mai.',
    ],
    onTrobar:
      'Enterrada a les clapes de sorra netes, sovint a menys de cinc metres. Els ocels es veuen a través d’un dit de sediment.',
    // Les dues d'Ifremer són primers plans d'un ocel d'un exemplar mort damunt
    // d'una safata blanca: el peu de foto només diu «Ocellus of Torpedo Ray».
    excloure: [
      'File:Ocelles de Torpille ocellée (Torpedo torpedo) (Ifremer 00789-90127 - 50489).jpg',
      'File:Ocelles de Torpille ocellée (Torpedo torpedo) (Ifremer 00789-90127 - 50487).jpg',
    ],
    // La que quedava al davant era la vaca enterrada, invisible de tan ben
    // camuflada. Es queda a la galeria, que és on explica alguna cosa.
    imatge: 'File:Torpedo torpedo 24187898.jpg',
  },
  {
    slug: 'rajada-de-miralls',
    evidencia: 'habitat',
    nom: 'Rajada de miralls',
    cientific: 'Raja miraletus',
    autoria: 'Linnaeus, 1758',
    familia: 'Rajidae',
    habitat: 'elasmo',
    profunditat: [10, 25],
    mida: 'fins a 60 cm',
    resum:
      'Petita, rombal i amb un ocel blau i groc a cada ala que li dóna el nom: quatre miralls sobre la sorra.',
    text: [
      'És la rajada més petita i més fàcil d’identificar del litoral: sobre el dors bru clar hi porta dos ocels grossos, un a cada pectoral, amb el centre blau viu i un anell groc i negre. El morro és curt i punxegut i el disc, clarament romboïdal.',
      'Menja crustacis i peixets que caça de nit sobre els fons tous. És de les poques rajades mediterrànies que encara no està amenaçada, en bona part perquè es fa petita i madura aviat: on les espècies grosses desapareixen, aquesta aguanta.',
    ],
    onTrobar:
      'Sobre la sorra i el fang de la franja exterior, més enllà de l’última barra.',
    // Les dues candidates són làmines del segle xix. Es publiquen perquè no hi
    // ha res més, i la fitxa ho ha de dir.
  },
  {
    slug: 'rajada-blanca',
    evidencia: 'habitat',
    nom: 'Rajada blanca',
    cientific: 'Rostroraja alba',
    autoria: '(Lacepède, 1803)',
    familia: 'Rajidae',
    habitat: 'elasmo',
    profunditat: [15, 25],
    mida: 'fins a 200 cm',
    iucn: 'EN',
    resum:
      'La rajada més grossa de la costa catalana i una de les que hi ha desaparegut més de pressa. Avui és una absència documentada.',
    text: [
      'Pot superar els dos metres d’envergadura, amb el morro llarg i punxegut, el dors gris o bru amb el marge de les ales més clar i el ventre blanc. Els joves porten taques clares disperses que es perden amb l’edat.',
      'És l’exemple de manual de per què les rajades grosses no suporten la pesca d’arrossegament: creix a poc a poc, madura tard i pon poques càpsules. Al golf de Sant Jordi era corrent fa un segle i avui hi és pràcticament absent. Consta en aquest catàleg perquè és fauna pròpia d’aquests fons, no perquè s’hi trobi: si algun dia hi torna, serà la millor notícia que pugui donar la reserva.',
    ],
    onTrobar:
      'En teoria, sobre els fons tous de la franja més fonda. A la pràctica, cap avistament recent.',
  },
  {
    slug: 'mantellina',
    evidencia: 'registrada',
    nom: 'Mantellina',
    cientific: 'Gymnura altavela',
    autoria: '(Linnaeus, 1758)',
    familia: 'Gymnuridae',
    habitat: 'elasmo',
    profunditat: [5, 25],
    mida: '200 cm d’amplada de disc',
    iucn: 'EN',
    resum:
      'Un disc molt més ample que llarg, prim com un mocador, amb una cua ridículament curta. Sembla una manta estesa a la sorra.',
    text: [
      'La proporció la delata: la mantellina és gairebé el doble d’ampla que de llarga, cosa que cap altra rajada d’aquesta costa no fa. El dors és bru amb clapes fosques i clares, i la cua, curta i prima, porta una espina serrada.',
      'Viu sobre fons tous de poca fondària, exactament la mena de terreny que envolta el grapissar, i això la fa especialment vulnerable a les xarxes de tir i a la pesca de platja. Al Mediterrani està en perill i els avistaments són cada cop més escadussers.',
    ],
    onTrobar:
      'Mig enterrada a les extensions de sorra entre barra i barra, delatada per la silueta ampla.',
    // Exemplar mort damunt d'un paviment de rajoles, moll o llotja. El peu de
    // foto diu només «Spiny butterfly ray (Gymnura altavela)».
    excloure: [
      'File:Gymnura altavela.jpg', // exemplar mort damunt d’un paviment de rajoles
      'File:Gymnura altavela nefsc.jpg', // exemplar mort damunt d’una taula de mesura, amb regle
    ],
  },
  {
    slug: 'escursana-violeta',
    evidencia: 'visitant',
    nom: 'Escurçana violeta',
    cientific: 'Pteroplatytrygon violacea',
    autoria: '(Bonaparte, 1832)',
    familia: 'Dasyatidae',
    habitat: 'elasmo',
    profunditat: [0, 25],
    mida: '80 cm d’amplada de disc',
    resum:
      'L’única escurçana que no viu al fons: neda en mar obert i entra a la costa seguint l’aigua càlida.',
    text: [
      'De color violeta fosc o gairebé negre per damunt, amb el disc arrodonit i les ales gruixudes, es distingeix de l’escurçana comuna perquè no s’enterra mai: neda contínuament a mitja aigua, batent les pectorals.',
      'És una espècie oceànica i epipelàgica que a l’estiu s’acosta a la costa catalana quan l’aigua superficial s’escalfa. Dins la reserva no hi resideix: hi passa. Val la pena tenir-la al catàleg justament per això, perquè recorda que els límits d’una reserva marina només valen per als peixos que s’hi queden.',
    ],
    onTrobar:
      'A mitja aigua i en superfície, els mesos de més calor. Una trobada d’estiu i de casualitat.',
  },
  {
    slug: 'mussola-vera',
    evidencia: 'habitat',
    nom: 'Mussola vera',
    cientific: 'Mustelus mustelus',
    autoria: '(Linnaeus, 1758)',
    familia: 'Triakidae',
    habitat: 'elasmo',
    profunditat: [5, 25],
    mida: 'fins a 160 cm',
    iucn: 'EN',
    resum:
      'Un tauró de fons sense taques, amb els ulls ovalats i les dents planes: no talla, tritura crancs.',
    text: [
      'Cos fusiforme i gris uniforme, sense les clapes del gatvaire ni els punts de la mussola mediterrània, amb dues dorsals grosses i els ulls allargats en horitzontal. La dentadura no té puntes: són plaques aixafades fetes per esclafar closques.',
      'Neda arran de fons resseguint la sorra a la recerca de crancs i mol·luscs. És vivípara i pareix poques cries després d’una gestació llarga, i aquesta és la raó per la qual la pesca d’arrossegament l’ha reduïda tant al Mediterrani occidental.',
    ],
    onTrobar:
      'Arran de fons a la franja exterior, sovint a la penombra de primera hora i de capvespre.',
    // Les dues fotos «bones» de Commons són làmines dibuixades amb el peu de
    // foto buit (només el binomi), i no hi ha cap fotografia submarina lliure
    // d'aquesta espècie. La fitxa es queda amb el que hi ha.
    excloure: ['File:Mustelus mustelus.jpg', 'File:Mustelus mustelus1.jpg'],
  },
  {
    slug: 'mussola-mediterrania',
    evidencia: 'habitat',
    nom: 'Mussola mediterrània',
    cientific: 'Mustelus punctulatus',
    autoria: 'Risso, 1827',
    familia: 'Triakidae',
    habitat: 'elasmo',
    profunditat: [10, 25],
    mida: 'fins a 100 cm',
    iucn: 'VU',
    resum:
      'Bessona de la mussola vera, però esquitxada de punts negres menuts pel dors. Sovint només es distingeixen a la mà.',
    text: [
      'Té la mateixa silueta i el mateix color gris que la mussola vera i se’n separa pels puntets foscos escampats pel dors, que a l’aigua costen molt de veure. Fins i tot a coberta, els pescadors sovint les confonen.',
      'Aquesta confusió és un problema real de conservació: bona part de les captures de mussola es registren sense distingir l’espècie, de manera que les sèries històriques barregen dos animals amb estats de conservació diferents. Al grapissar hi arriba des dels fons tous del voltant.',
    ],
    onTrobar:
      'Sobre la sorra i el fang exteriors, gairebé sempre arran de fons.',
  },
  {
    slug: 'espursim',
    evidencia: 'habitat',
    nom: 'Espursim',
    cientific: 'Scyliorhinus stellaris',
    autoria: '(Linnaeus, 1758)',
    familia: 'Scyliorhinidae',
    habitat: 'elasmo',
    profunditat: [10, 25],
    mida: 'fins a 160 cm',
    iucn: 'VU',
    resum:
      'El cosí gros del gatvaire: el doble de llarg, amb clapes més amples i el morro més arrodonit.',
    text: [
      'A primer cop d’ull sembla un gatvaire crescut, però les taques són clapes irregulars i grosses en comptes de puntets, i els replecs nasals no li arriben a la boca. Pot passar del metre i mig, mentre que el gatvaire rarament arriba al metre.',
      'És més lligat a la roca que el seu parent i s’amaga de dia sota les cornises. Pon les mateixes bosses de sirena, però més grosses, que enganxa amb els filaments a les gorgònies i a les algues altes de la vora de les barres.',
    ],
    onTrobar:
      'De dia, immòbil sota les cornises més fondes de les barres exteriors. De nit, caçant per la sorra.',
    excloure: [
      'File:Scyliorhinus stellaris 1.jpg', // dins d'un tanc: es veu el vidre i el cantell blau
      'File:Scyliorhinus stellaris 76685633.jpg', // exemplar mort a la sorra de la platja, damunt d'un tronc
      'File:Scyliorhinus stellaris 111875104.jpg', // una bossa de sirena buida, no pas el peix
    ],
  },
  {
    slug: 'agullat-ver',
    evidencia: 'habitat',
    nom: 'Agullat ver',
    cientific: 'Squalus acanthias',
    autoria: 'Linnaeus, 1758',
    familia: 'Squalidae',
    habitat: 'elasmo',
    profunditat: [15, 25],
    mida: 'fins a 120 cm',
    iucn: 'VU',
    resum:
      'Porta una espina punxeguda al davant de cada aleta dorsal. És un dels taurons més longeus que hi ha.',
    text: [
      'Gris pissarra amb petites taques blanques als flancs, esvelt i de morro punxegut, es reconeix a l’acte per les dues espines dorsals, que són defensives i estan connectades a una glàndula verinosa feble.',
      'Pot viure més de setanta anys i les femelles no es reprodueixen fins passats els dotze, amb gestacions de gairebé dos anys —de les més llargues de tot el regne animal. Cap altre tret explica millor per què les seves poblacions es van esfondrar arreu on se’l va pescar de manera industrial.',
    ],
    onTrobar:
      'A la part més fonda i freda de la reserva, sobretot a l’hivern. Rar de veure’l bussejant.',
    excloure: [
      'File:Squalus acanthias juvenile.jpg', // juvenil damunt d’una mà, a coberta, a Alaska
      'File:Squalus acanthias-pf.jpg', // primer pla de l’espina dorsal d’un exemplar mort, sobre fons negre
      'File:Squalus acanthias-f.jpg', // exemplar mort damunt d’una safata de laboratori
      'File:Squalus acanthias-fs.jpg', // exemplar mort a la sorra de la platja
      'File:Spiny dogfish hokitika.jpg', // dins d’un tanc, amb el vidre cobert d’algues al fons
      'File:Squalus acanthias2.jpg', // exemplar mort damunt d’un paviment moll
      'File:A nice spurdog.JPG', // exemplar dissecat, muntat en una post de fusta
      'File:Dogfish Ovary V2.png', // dissecció: un ovari obert entre dos dits amb guant
      'File:Chiens de mer).jpeg', // oli del segle xix amb un munt d’agullats morts
      'File:Spiny Dogfish Pup.jpg', // embrió amb el sac vitel·lí, damunt d’una superfície fosca
    ],
  },
  {
    slug: 'angelot',
    evidencia: 'habitat',
    nom: 'Angelot',
    cientific: 'Squatina squatina',
    autoria: '(Linnaeus, 1758)',
    familia: 'Squatinidae',
    habitat: 'elasmo',
    profunditat: [5, 25],
    mida: 'fins a 180 cm',
    iucn: 'CR',
    resum:
      'Ni tauró ni rajada del tot: un tauró aplanat que caça a l’emboscada, enterrat a la sorra. Ha desaparegut de gairebé tot el Mediterrani.',
    text: [
      'Té el cos aplanat i les pectorals amples com una rajada, però les brànquies als costats i la cua de tauró. Passa el dia enterrat amb només els ulls fora i caça d’una revolada, aspirant el peix que li passa per damunt.',
      'Era abundant a tota la costa catalana fins a mitjan segle xx i avui està en perill crític: la pesca d’arrossegament és letal per a un animal que viu enganxat al fons tou i no fuig. Al Mediterrani occidental només se’n coneixen poblacions residuals. És, amb la rajada blanca, l’absència més gran d’aquest catàleg.',
    ],
    onTrobar:
      'Hauria de ser a les clapes de sorra al peu de les barres. No hi ha cap avistament recent a la reserva.',
    // La que el guió posava al davant («camouflage») és l'angelot enterrat de
    // tan bé que no se'l veu. És honesta i es queda a la galeria, però com a
    // fotografia principal no diu res.
    imatge: 'File:Squatina squatina 120867959.jpg',
  },
  {
    slug: 'porc-mari',
    evidencia: 'registrada',
    nom: 'Porc marí',
    cientific: 'Oxynotus centrina',
    autoria: '(Linnaeus, 1758)',
    familia: 'Oxynotidae',
    habitat: 'elasmo',
    profunditat: [20, 25],
    mida: 'fins a 150 cm',
    iucn: 'EN',
    resum:
      'Un tauró de secció triangular, amb dues dorsals altes com veles i la pell aspra com una llima.',
    text: [
      'No s’assembla a res més: el cos és triangular en secció, amb una carena a cada flanc, i les dues aletes dorsals s’alcen com veles amb una espina incrustada. El cap és arrufat i té els llavis gruixuts.',
      'Viu al talús i a les zones fangoses fondes, de manera que dins la reserva només pot aparèixer al límit exterior, i encara molt de tant en tant. Al Mediterrani està en perill i és una captura accessòria rara i sempre reportada.',
    ],
    onTrobar:
      'Al límit dels 25 m, sobre fang. Una raresa fins i tot per als qui hi baixen sovint.',
    excloure: [
      'File:Oxynotus centrina.jpg', // dibuix de línia sobre fons blanc
      'File:Oxynotus centrina 55827395.jpg', // exemplar mort damunt la borda d’una barca
    ],
  },
  {
    slug: 'tauro-blau',
    evidencia: 'visitant',
    nom: 'Tauró blau',
    cientific: 'Prionace glauca',
    autoria: '(Linnaeus, 1758)',
    familia: 'Carcharhinidae',
    habitat: 'elasmo',
    profunditat: [0, 25],
    mida: 'fins a 380 cm',
    iucn: 'NT',
    resum:
      'La tintorera: esvelta, blau índic pel dors i amb unes pectorals llarguíssimes. És el tauró oceànic més pescat del món.',
    text: [
      'Cos estilitzat i morro llarg i cònic, blau intens per damunt i blanc pur per sota, amb unes aletes pectorals desproporcionadament llargues que li permeten planar amb un cost energètic mínim. És el tauró de mar obert per excel·lència.',
      'No és una espècie costanera, però creua tot el Mediterrani i s’acosta al litoral seguint bancs de peix blau, sobretot a la tardor. Dins la reserva seria una aparició excepcional i de pas. Se’n capturen desenes de milions cada any com a pesca accessòria del palangre de superfície: cap altre tauró aguanta una pressió comparable.',
    ],
    onTrobar:
      'A mar obert, no al grapissar. Si n’hi entra cap, serà en superfície i de pas.',
    imatge: 'File:Tiburón azul (Prionace glauca), canal Fayal-Pico, islas Azores, Portugal, 2020-07-27, DD 04.jpg',
  },
  {
    slug: 'peix-guilla',
    evidencia: 'visitant',
    nom: 'Peix guilla',
    cientific: 'Alopias vulpinus',
    autoria: '(Bonnaterre, 1788)',
    familia: 'Alopiidae',
    habitat: 'elasmo',
    profunditat: [0, 25],
    mida: 'fins a 600 cm',
    iucn: 'VU',
    resum:
      'La meitat de la seva llargada és cua. La fa servir com un fuet per atordir els bancs de peix abans de menjar-se’ls.',
    text: [
      'El lòbul superior de l’aleta caudal és tan llarg com tot la resta del cos, i no és cap ornament: el peix guilla envesteix un banc de sardines o de seitons i el fueteja per atordir-los, una tècnica de caça que no té cap altre tauró.',
      'És epipelàgic i pot entrar en aigües somes darrere del peix blau. Com tots els taurons grossos de vida llarga i poques cries, les seves poblacions mediterrànies han caigut molt, i tota la família està catalogada com a vulnerable a escala mundial.',
    ],
    onTrobar:
      'Excepcional. Si arriba, arriba en superfície i darrere d’un banc de peix blau.',
    // Un cop fora les plaques de pell i la campanya de la NOAA, el que queda
    // són dues fotografies de l'animal saltant fora de l'aigua. No es veu el
    // detall, però es veu l'única cosa que compta d'aquest peix: la cua.
    excloure: [
      'File:Alopias vulpinus noaa.jpg', // animal a coberta, en una campanya de la NOAA
      'File:Alopias vulpinus tail noaa.jpg', // enganxat a l’ham per la cua
      'File:Alopias vulpinus piel JGuallart.jpg', // tros de pell al costat de dos dits, amb escala de 10 mm
    ],
  },
  {
    slug: 'solraig-ver',
    evidencia: 'visitant',
    nom: 'Solraig ver',
    cientific: 'Isurus oxyrinchus',
    autoria: 'Rafinesque, 1810',
    familia: 'Lamnidae',
    habitat: 'elasmo',
    profunditat: [0, 25],
    mida: 'fins a 400 cm',
    iucn: 'EN',
    resum:
      'El peix més ràpid del mar. És de sang parcialment calenta, cosa que gairebé cap peix no pot dir.',
    text: [
      'Fusiforme i hidrodinàmic fins a l’extrem, blau metàl·lic pel dors i blanc pel ventre, amb el morro agut i les dents visibles fins i tot amb la boca tancada. Conserva la calor muscular amb una xarxa de vasos contracorrent, cosa que li permet nedar més de setanta quilòmetres per hora en esprint.',
      'És oceànic i només s’acosta a la costa perseguint peix blau o tonyines. Al Mediterrani està en perill i les captures han caigut per sota del deu per cent de les històriques. Dins la reserva és, senzillament, una possibilitat teòrica que val la pena conèixer.',
    ],
    onTrobar:
      'A mar obert. No és un peix de grapissar, però és fauna d’aquest mar.',
    excloure: [
      'File:Fish4290 - Flickr - NOAA Photo Library.jpg', // exemplar mort en un moll, amb les botes del pescador al costat
      'File:Marrajos (69600373).jpg', // sis marraixos morts i etiquetats damunt d’un taulell
      'File:Shortfin mako nmfs.jpg', // exemplar mort en un moll enrajolat, amb el pescador a sobre
    ],
  },
];

export default SPECIES;
