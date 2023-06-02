import { nanoid } from "nanoid"


const users = [
   {
      name: "Leonard",
      lastname: "Stockford",
      email: "lstockford0@va.gov",
      phone: "4455195280",
      description: "Gestational edema with proteinuria, complicating childbirth"
   },
   {
      name: "Brande",
      lastname: "Hemeret",
      email: "bhemeret1@apache.org",
      phone: "1475476595",
      description: "Rheumatoid bursitis, unspecified shoulder"
   },
   {
      name: "Bradney",
      lastname: "Bramsom",
      email: "bbramsom2@latimes.com",
      phone: "8063645749",
      description: "Surfactant mutations of the lung"
   },
   {
      name: "Trisha",
      lastname: "Nabbs",
      email: "tnabbs3@merriam-webster.com",
      phone: "6202489528",
      description: "Nondisp fx of hook pro of hamate bone, l wrs, 7thB"
   },
   {
      name: "Calvin",
      lastname: "Drayson",
      email: "cdrayson4@fc2.com",
      phone: "1597431074",
      description: "Poisoning by intravenous anesthetics, assault, subs encntr"
   },
   {
      name: "Brenden",
      lastname: "Broadwell",
      email: "bbroadwell5@elegantthemes.com",
      phone: "1644034530",
      description: "Coma scale, best motor response, none, unspecified time"
   },
   {
      name: "Bert",
      lastname: "Bennallck",
      email: "bbennallck6@google.com.au",
      phone: "5466260464",
      description: "Disp fx of neck of fourth metacarpal bone, left hand, init"
   },
   {
      name: "Jocelin",
      lastname: "O'Looney",
      email: "jolooney7@census.gov",
      phone: "5001323434",
      description: "Infant botulism"
   },
   {
      name: "Frances",
      lastname: "Readings",
      email: "freadings8@archive.org",
      phone: "5039876644",
      description: "Burn of third degree of unsp mult fingers (nail), inc thumb"
   },
   {
      name: "Kelli",
      lastname: "Harniman",
      email: "kharniman9@google.com.br",
      phone: "9959076650",
      description: "Injury of unsp nerve at wrs/hnd lv of right arm, sequela"
   },
   {
      name: "Lev",
      lastname: "Hitcham",
      email: "lhitchama@jimdo.com",
      phone: "7938598603",
      description: "War operations involving unsp dest arcrft, civilian, sequela"
   },
   {
      name: "Tony",
      lastname: "Lenton",
      email: "tlentonb@walmart.com",
      phone: "6466676888",
      description: "Disp fx of head of r rad, 7thM"
   },
   {
      name: "Pepita",
      lastname: "Clorley",
      email: "pclorleyc@xinhuanet.com",
      phone: "1847960296",
      description: "Superficial fb of unsp eyelid and periocular area, sequela"
   },
   {
      name: "Nedda",
      lastname: "Pantecost",
      email: "npantecostd@google.es",
      phone: "2392241232",
      description: "Fx unsp prt of nk of r femr, 7thH"
   },
   {
      name: "Jerrylee",
      lastname: "Phinn",
      email: "jphinne@hao123.com",
      phone: "8178446742",
      description: "Displacement of oth bone devices, implants and grafts, init"
   },
   {
      name: "Horatius",
      lastname: "Exrol",
      email: "hexrolf@facebook.com",
      phone: "6174822108",
      description: "Nondisp fx of med phalanx of unsp fngr, 7thD"
   },
   {
      name: "Hasty",
      lastname: "Simmonite",
      email: "hsimmoniteg@intel.com",
      phone: "1533003960",
      description: "Unsp fx unsp lower leg, subs for clos fx w routn heal"
   },
   {
      name: "Noak",
      lastname: "Torbett",
      email: "ntorbetth@hostgator.com",
      phone: "2882958504",
      description: "Abrasion of unsp eyelid and periocular area, subs encntr"
   },
   {
      name: "Garv",
      lastname: "Kirkhouse",
      email: "gkirkhousei@thetimes.co.uk",
      phone: "3123353018",
      description: "Other endocrine disorders"
   },
   {
      name: "Rodrique",
      lastname: "Treleven",
      email: "rtrelevenj@theatlantic.com",
      phone: "3399534814",
      description: "Cocaine dependence with cocaine-induced mood disorder"
   },
   {
      name: "Claybourne",
      lastname: "Merit",
      email: "cmeritk@guardian.co.uk",
      phone: "2664664065",
      description: "Microcystoid degeneration of retina, unspecified eye"
   },
   {
      name: "Willard",
      lastname: "Alen",
      email: "walenl@rediff.com",
      phone: "4487914886",
      description: "Toxic effect of contact w venomous frog, assault, init"
   },
   {
      name: "Daron",
      lastname: "Tregear",
      email: "dtregearm@yelp.com",
      phone: "2618483453",
      description: "Blister (nonthermal), left lower leg, initial encounter"
   },
   {
      name: "Mozes",
      lastname: "Spurdens",
      email: "mspurdensn@ebay.co.uk",
      phone: "9422398781",
      description: "Displ seg fx shaft of ulna, l arm, 7thR"
   },
   {
      name: "Berty",
      lastname: "Armour",
      email: "barmouro@dyndns.org",
      phone: "1127913243",
      description: "Injury of cutan sensory nerve at lower leg level, left leg"
   },
   {
      name: "Julie",
      lastname: "Polak",
      email: "jpolakp@businessweek.com",
      phone: "3478426584",
      description: "Neoplasm of uncertain behavior of the major salivary glands"
   },
   {
      name: "Millisent",
      lastname: "Dundendale",
      email: "mdundendaleq@facebook.com",
      phone: "3859830558",
      description: "Prolymphocytic leukemia of T-cell type, in relapse"
   },
   {
      name: "Elga",
      lastname: "Tourner",
      email: "etournerr@nydailynews.com",
      phone: "1205538659",
      description: "Bitten by sea lion, initial encounter"
   },
   {
      name: "Malachi",
      lastname: "Lefridge",
      email: "mlefridges@bloglovin.com",
      phone: "3306500488",
      description: "Chronic dacryocystitis of right lacrimal passage"
   },
   {
      name: "Curran",
      lastname: "Dulake",
      email: "cdulaket@blog.com",
      phone: "1851228938",
      description: "Other derangements of patella"
   },
   {
      name: "Catie",
      lastname: "Baruch",
      email: "cbaruchu@psu.edu",
      phone: "3588656327",
      description: "Person outsd hv veh inj in nonclsn trnsp acc nontraf, sqla"
   },
   {
      name: "Lawry",
      lastname: "Presdie",
      email: "lpresdiev@clickbank.net",
      phone: "5832353858",
      description: "Legal intervnt w injury by dynamite, bystand inj, sequela"
   },
   {
      name: "Twila",
      lastname: "Bim",
      email: "tbimw@indiatimes.com",
      phone: "3047366529",
      description: "Unsp fx unsp patella, subs for opn fx type I/2 w malunion"
   },
   {
      name: "Petey",
      lastname: "Sellman",
      email: "psellmanx@bravesites.com",
      phone: "8608919108",
      description: "Unsp fx unsp forearm, subs for opn fx type I/2 w malunion"
   },
   {
      name: "Carola",
      lastname: "Balasini",
      email: "cbalasiniy@dagondesign.com",
      phone: "5882513727",
      description: "Injury of musc/fasc/tend at shoulder and upper arm level"
   },
   {
      name: "Patrizio",
      lastname: "Crampsy",
      email: "pcrampsyz@trellian.com",
      phone: "5496956242",
      description: "Disp fx of dist pole of navic bone of unsp wrs, 7thG"
   },
   {
      name: "Bren",
      lastname: "Cleef",
      email: "bcleef10@java.com",
      phone: "4559013399",
      description: "Displaced fracture of greater tuberosity of left humerus"
   },
   {
      name: "Les",
      lastname: "Rymmer",
      email: "lrymmer11@sourceforge.net",
      phone: "5164206660",
      description: "Osteophyte, hip"
   },
   {
      name: "Karel",
      lastname: "Penylton",
      email: "kpenylton12@apple.com",
      phone: "8633282905",
      description: "Pedestrian on foot injured in collision w rail trn/veh, unsp"
   },
   {
      name: "Jillene",
      lastname: "Accomb",
      email: "jaccomb13@google.com",
      phone: "2956320450",
      description: "Underdosing of antirheumatics, NEC, sequela"
   }
]

for (const user of users) {
   user.id = nanoid()
   user.status = Math.random() >= 0.5 ? 'active' : 'inactive'
   user.imageUrl = ''
   user.date = Date.now() - Math.random() * 1000000
}

export default users