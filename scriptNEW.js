const trips = [
    {
        "id": 101,
        "destination": "Spagna 1 - BARCELLONA",
        "date": "1975-03-30",
        "image": "BAR7500.jpg",
        "description": "BARCELLONA -  HOSTAL ** RAMBLA DE CATALUNA 42 angolo Carrer del Consell de Cent 298 - 12 - SQUADRA DI CALCIO e incontro con MAGDA RIBA a Monserrat",
        "price": "\u20ac50,000,00"
    },
    {
        "id": 102,
        "destination": "MONSERRAT",
        "date": "1975-03-30",
        "image": "Mon7500.jpg",
        "description": "MONSERRAT - SQUADRA DI CALCIO e incontro con MAGDA RIBA a Monserrat",
        "price": "\u20ac50,000,00"
    },
    {
        "id": 201,
        "destination": "Spagna 2 - PALMA DI MAIORCA",
        "date": "1983-06-20",
        "image": "PAL8300.jpg",
        "description": "MAGALUF -  FLAMBOYAN - 318",
        "price": "\u20ac1,042,000,00"
    },
    {
        "id": 301,
        "destination": "Francia - PARIGI",
        "date": "1983-08-15",
        "image": "NotreDamedeParis.jpg",
        "description": "PONTOISE -  CHEZ ONCLE - ' - VALTER",
        "price": "\u20ac0"
    },
    {
        "id": 401,
        "destination": "Italia - SANTA TERESA DI GALLURA",
        "date": "1984-06-04",
        "image": "Capotesta_HTL.jpg",
        "description": "SARDEGNA NORD -  CAPOTESTA DEI 2 MARI - 118",
        "price": "\u20ac1,319,000,00"
    },
    {
        "id": 501,
        "destination": "Spagna 3 - IBIZA",
        "date": "1985-06-16",
        "image": "IBI8500.jpg",
        "description": "SAN ANTONIO CALA GRACIO -  TANIT - . - GEORGE ED EVA (CH)",
        "price": "\u20ac1,768,000,00"
    },
    {
        "id": 601,
        "destination": "Tunisia - DJERBA",
        "date": "1986-06-16",
        "image": "DJE8600.jpg",
        "description": "IS. DJERBA -  PALM BEACH - . - ROMEO LAI -BAVA LAURA Collega",
        "price": "\u20ac1,452,000,00"
    },
    {
        "id": 701,
        "destination": "Austria - VIENNA ,  Ungheria - BUDAPEST",
        "date": "1986-08-16",
        "image": "VIE8600.jpg",
        "description": "VIENNA -  AUSTRIA - 414",
        "price": "\u20ac1,334,000,00"
    },
    {
        "id": 702,
        "destination": "BUDAPEST",
        "date": "1986-08-16",
        "image": "BUD8600.jpg",
        "description": "BUDAPEST",
        "price": "\u20ac1,334,000,00"
    },
    {
        "id": 801,
        "destination": "Turchia 1 - ISTANBUL",
        "date": "1987-03-19",
        "image": "IST8700.jpg",
        "description": "ISTANBUL -  HILTON - 158 - GRUPPO PANTEN",
        "price": "\u20ac1,050,000,00"
    },
    {
        "id": 901,
        "destination": "Grecia - RHODI",
        "date": "1987-06-15",
        "image": "RHO8700.jpg",
        "description": "IXIA-TRIANDA -  METROPOLITAN CAPSIS - 845",
        "price": "\u20ac2,269,000,00"
    },
    {
        "id": 1001,
        "destination": "Spagna 4 - CANARIE - FUERTEVENTURA E LANZAROTE",
        "date": "1988-03-20",
        "image": "FUE8800.jpg",
        "description": "FUERTEVENTURA -  IBEROTEL TRES ISLAS - . - \u2026",
        "price": "\u20ac2,435,500,00"
    },
    {
        "id": 1003,
        "destination": "LANZAROTE",
        "date": "1988-03-20",
        "image": "LAN8801.jpg",
        "description": "LANZAROTE -  .. - \u2026",
        "price": "\u20ac2,435,500,00"
    },
    {
        "id": 1101,
        "destination": "Austria 2 - SALISBURGO E SAINT WOLFGANG",
        "date": "1988-08-14",
        "image": "SALZBURG.jpg",
        "description": "SALISBURGO -  . - . - MAURO E PATRIZIA",
        "price": "\u20ac0"
    },
    {
        "id": 1102,
        "destination": "SAINT  WOLFGANG",
        "date": "1988-08-14",
        "image": "SAINT_WOLFGANG.jpg",
        "description": "SAINT  WOLFGANG - MAURO E PATRIZIA",
        "price": "\u20ac0"
    },
    {
        "id": 1201,
        "destination": "Cuba -  L'HAVANA E CAYO LARGO",
        "date": "1989-05-21",
        "image": "CUB9600.jpg",
        "description": "AVANA -  PRESIDENT - 505 - MAURO-PATRIZIA",
        "price": "\u20ac3,780,000,00"
    },
    {
        "id": 1202,
        "destination": "CAYO LARGO",
        "date": "1989-05-21",
        "image": "CAY89001.jpg",
        "description": "CAYO LARGO -  ISLA DEL SUR - 141 - MAURO-PATRIZIA",
        "price": "\u20ac3,780,000,00"
    },
    {
        "id": 1301,
        "destination": "Italia - COSTA AMALFITANA Paestum Caserta Cava T.",
        "date": "1989-09-30",
        "image": "PAE8900.jpg",
        "description": "CAVA DE TIRRENI -  SCAPOLATIELLO - . - RIZZO BEPPE E MARISA",
        "price": "\u20ac788,000,00"
    },
    {
        "id": 1401,
        "destination": "Egitto 1a - SHARM EL SHEIK 1 ED IL CAIRO",
        "date": "1990-04-26",
        "image": "SHA9000A.jpg",
        "description": "NAAMA BAY -  TIRAN - 12 - BARI SUB",
        "price": "\u20ac1,730,000,00"
    },
    {
        "id": 1402,
        "destination": "IL CAIRO",
        "date": "1990-04-26",
        "image": "CAI9000.jpg",
        "description": "IL CAIRO -  RAMADA RENAISSANCE - 108 - BARI SUB",
        "price": "\u20ac1,730,000,00"
    },
    {
        "id": 1501,
        "destination": "Egitto 1b - SHARM EL SHEIK 2  E MONTE SINAI",
        "date": "1990-09-05",
        "image": "SHA9000.jpg",
        "description": "NAAMA BAY -  GHAZALA - 316 - MILANESIO SUB",
        "price": "\u20ac1,538,000,00"
    },
    {
        "id": 1601,
        "destination": "Maldive 1 - ASDU - Atollo Male Nord",
        "date": "1991-04-23",
        "image": "ASD9100.jpg",
        "description": "ATOLLO NORD -  ASDU SUN ISLAND - 12 - MANUEL TO - LUCIANA E MARCO SERNI",
        "price": "\u20ac4,716,000,00"
    },
    {
        "id": 1602,
        "destination": "COLOMBO",
        "date": "1991-04-23",
        "image": "COL9101.JPG",
        "description": "COLOMBO -  AIRPORT HTL - 110 - MANUEL TO - LUCIANA E MARCO SERNI",
        "price": "\u20ac4,716,000,00"
    },
    {
        "id": 1701,
        "destination": "Egitto 2 - HURGHADA 1",
        "date": "1991-09-28",
        "image": "HUR9110.jpg",
        "description": "CAIRO -  MARRIOT/SONESTA - . - SAKR",
        "price": "\u20ac2,748,650,00"
    },
    {
        "id": 1702,
        "destination": "HURGHADA",
        "date": "1991-09-28",
        "image": "HUR9100.jpg",
        "description": "HURGHADA -  SONESTA BEACH - 203 - SAKR",
        "price": "\u20ac2,748,650,00"
    },
    {
        "id": 1801,
        "destination": "Madagascar - NOSY BE",
        "date": "1991-11-23",
        "image": "NOS1100.jpg",
        "description": "ANDILANA - NOSY BE -  ANDILANA BEACH - 108 - MARINO - ETTORE - CARLO ED ELIANA",
        "price": "\u20ac2,685,000,00"
    },
    {
        "id": 1802,
        "destination": "NOSY IRANJA",
        "date": "1991-11-23",
        "image": "MAD9100.jpg",
        "description": "NOSY IRANJA - TENDA - MARINO - ETTORE - CARLO ED ELIANA",
        "price": "\u20ac2,685,000,00"
    },
    {
        "id": 1803,
        "destination": "TZARA BAJINA e ISOLE MITZIO",
        "date": "1991-11-23",
        "image": "MAD9101.jpg",
        "description": "TZARA BAJINA SOLE MITZIO - TENDA e barca per immersioni",
        "price": "\u20ac2,685,000,00"
    },
    {
        "id": 1901,
        "destination": "Mexico 1 - YUCATHAN E COZUMEL",
        "date": "1992-03-22",
        "image": "MEX9200.jpg",
        "description": "HOTELERA CANCUN -  OASIS CANCUN - 3314/3349 - G.FRANCO-MONICA (CN)",
        "price": "\u20ac5,742,000,00"
    },
    {
        "id": 1902,
        "destination": "MERIDA",
        "date": "1992-03-22",
        "image": "MER9200.jpg",
        "description": "MERIDA -  LOS ALUXES - G.FRANCO-MONICA (CN)",
        "price": "\u20ac5,742,000,00"
    },
    {
        "id": 1903,
        "destination": "COZUMEL ISLAND",
        "date": "1992-03-22",
        "image":  "COZ9200.jpg",
        "description": "COZUMEL ISLAND -  SOL CABANA DEL CARIBE - 12 - G.FRANCO-MONICA (CN)",
        "price": "\u20ac5,742,000,00"
    },
    {
        "id": 2001,
        "destination": "Gran Bretagna - LONDRA",
        "date": "1992-08-10",
        "image": "LON9200.jpg",
        "description": "GLOUSBURY -  ROYAL NATIONAL - 5072 - RINO E MARA (Parma)",
        "price": "\u20ac1,832,000,00"
    },
    {
        "id": 2101,
        "destination": "Seychelles - Mah\u00e8, Praslin e Ladigue",
        "date": "1992-10-13",
        "image": "SEY9200.jpg",
        "description": "SEY-MAHE' ISLAND -  BEAU VALLON BEACH - 174",
        "price": "\u20ac3,450,000,00"
    },
    {
        "id": 2102,
        "destination": "SEY-PRASLIN ISLAND",
        "date": "1992-10-13",
        "image": "SEY9201.jpg",
        "description": "SEY-PRASLIN ISLAND -  PRASLIN BEACH - 222",
        "price": "\u20ac3,450,000,00"
    },
    {
        "id": 2103,
        "destination": "SEY-LA DIGUE ISLAND",
        "date": "1992-10-13",
        "image": "SEY9202.jpg",
        "description": "SEY-LA DIGUE ISLAND",
        "price": "\u20ac3,450,000,00"
    },
    {
        "id": 2201,
        "destination": "Tailandia - PHUKET E PHI PHI ISLAND",
        "date": "1993-01-22",
        "image": "PHU9300.jpg",
        "description": "RAWAI BAY -  PHUKET ISLAND RESORT - 536 - NOVARA-BERGAMO E MUSSULMANOMONTE",
        "price": "\u20ac3,500,000,00"
    },
    {
        "id": 2202,
        "destination": "PHI PHI ISLAND",
        "date": "1993-01-22",
        "image": "PHI9300.jpg",
        "description": "PHI PHI ISLAND - NOVARA-BERGAMO E MUSSULMANOMONTE",
        "price": "\u20ac3,500,000,00"
    },
    {
        "id": 2301,
        "destination": "Egitto 3 - SHARM EL SHEIK 3  E NWEBA",
        "date": "1993-03-01",
        "image": "SHA08001.jpg",
        "description": "TOWER BAY -  CLUB SHARM - 137",
        "price": "\u20ac1,950,000,00"
    },
    {
        "id": 2401,
        "destination": "Francia - SAINT MAXIME - COSTA AZZURRA",
        "date": "1993-06-24",
        "image": "PORT_GRIMAUD.jpg",
        "description": "SAINT MAXIME -  PRECONIL - 5",
        "price": "\u20ac0"
    },
    {
        "id": 2402,
        "destination": "MENTON",
        "date": "1993-06-24",
        "image": "MEN9300.jpg",
        "description": "MENTON -  CELINE ROSE - 209",
        "price": "\u20ac0"
    },
    {
        "id": 2501,
        "destination": "Rep. Dominicana - SANTO DOMINGO",
        "date": "1993-10-02",
        "image": "SDO93001.JPG",
        "description": "BAYAHIBE -  DOMINICUS BAY - MAR201",
        "price": "\u20ac3,492,000,00"
    },
    {
        "id": 2502,
        "destination": "PUNTA CANA",
        "date": "1993-10-02",
        "image": "PUN9300.JPG",
        "description": "PUNTA CANA -  BAVARO BEACH RESORT",
        "price": "\u20ac3,492,000,00"
    },
    {
        "id": 2503,
        "destination": "SANTO DOMINGO AIROPORTO",
        "date": "1993-10-02",
        "image": "SDO9300.jpg",
        "description": "SANTO DOMINGO AIROPORTO",
        "price": "\u20ac3,492,000,00"
    },
    {
        "id": 2601,
        "destination": "Bahamas 1 - GRAN BAHAMA E MIAMI (FLORIDA)",
        "date": "1994-03-10",
        "image": "FPO9400.jpg",
        "description": "FREEPORT -  FORTUNA BEACH - . - \u2026",
        "price": "\u20ac4,160,000,00"
    },
    {
        "id": 2602,
        "destination": "MIAMI",
        "date": "1994-03-10",
        "image": "MIA94001.jpg",
        "description": "MIAMI - \u2026",
        "price": "\u20ac4,160,000,00"
    },
    {
        "id": 2701,
        "destination": "Tanzania - ZANZIBAR E PEMBA",
        "date": "1994-10-05",
        "image": "ZAN9400.jpg",
        "description": "MAWINBIMI BEACH -  CLUB MAWINBINI - 155 - MONICA E SANDRA (Gallarate)",
        "price": "\u20ac3,550,000,00"
    },
    {
        "id": 2702,
        "destination": "PEMBA",
        "date": "1994-10-05",
        "image": "PEM9400.jpg",
        "description": "PEMBA - MONICA E SANDRA (Gallarate)",
        "price": "\u20ac3,550,000,00"
    },
    {
        "id": 2801,
        "destination": "Kenya -  SAFARI E WATAMU",
        "date": "1995-03-03",
        "image": "KEN9501.jpg",
        "description": "WATAMU -  CLUB TEMPLE POINT - 9 C - EROS",
        "price": "\u20ac3,840,000,00"
    },
    {
        "id": 2802,
        "destination": "TAITA HILLS E TSAVO",
        "date": "1995-03-03",
        "image": "TSA9510.jpg",
        "description": "TAITA HILLS E TSAVO -  SALT LICK HILTON - 404 - EROS",
        "price": "\u20ac3,840,000,00"
    },
    {
        "id": 2901,
        "destination": "Francia - CAP ESTEREL",
        "date": "1995-09-22",
        "image": "CAP9500.jpg",
        "description": "CAP ESTEREL -  PIERRE & VACANCES - R1 209 - SQUADRA VOLLEY CRT E S.PAOLO",
        "price": "\u20ac202,000,00"
    },
    {
        "id": 3001,
        "destination": "Egitto 4 - SAFAGA, LUXOR E HURGHADA",
        "date": "1995-10-02",
        "image": "SAF9500.jpg",
        "description": "SAFAGA -  LOTUS BAY - 163 - POLDO E GABRIELLA",
        "price": "\u20ac3,340,000,00"
    },
    {
        "id": 3002,
        "destination": "HURGHADA",
        "date": "1995-10-02",
        "image": "HUR95001.jpg",
        "description": "HURGHADA -  GRAND HOTEL - room 411",
        "price": "\u20ac3,340,000,00"
    },
    {
        "id": 3101,
        "destination": "Cuba 1 - CAYO GUILLERMO",
        "date": "1996-03-10",
        "image": "CUB9600.jpg",
        "description": "CAYO GUILLERMO -  CAYO GUILLERMO CLUB - 54 - POLDO E GABRIELLA\nSeconda Settimana",
        "price": "\u20ac4,529,000,00"
    },
    {
        "id": 3102,
        "destination": "FLORENCIA - MORON",
        "date": "1996-03-10",
        "image": "CUB9601.jpg",
        "description": "TOUR A CAVALLO - POLDO E GABRIELLA\Seconda Settimana",
        "price": "\u20ac4,529,000,00"
    },
    {
        "id": 3201,
        "destination": "Italia - TORTORETO 1",
        "date": "1996-05-25",
        "image": "TOR9600.jpg",
        "description": "TORTORETO LIDO -  CLUB WELCOME WS VOLLAGGI - 477 - SQUADRA VOLLEY CRT E  \nS. PAOLO",
        "price": "\u20ac410,000,00"
    },
    {
        "id": 3301,
        "destination": "Italia - LIVIGNO",
        "date": "1996-06-08",
        "image": "LIV9600.jpg",
        "description": "LIVIGNO -  LAN BAITA - 109 - BEPPE E DONATELLA - VERONA",
        "price": "\u20ac180,000,00"
    },
    {
        "id": 3401,
        "destination": "Italia - ELBA ISOLA",
        "date": "1996-06-16",
        "image": "ELB9600.jpg",
        "description": "ORTANO MARE -  ORTANO RESIDENCE - 316 - CRAL TENNIS",
        "price": "\u20ac331,000,00"
    },
    {
        "id": 3501,
        "destination": "Italia - ARONA E SAN GIOVANNI",
        "date": "1996-08-16",
        "image": "ARO9600.jpg",
        "description": "ARONA -  .. - -- - MATTEO E SANDRA\nPIERO E SABRINA",
        "price": "\u20ac50,000,00"
    },
    {
        "id": 3502,
        "destination": "CAMPIGLIA CERVO",
        "date": "1996-08-16",
        "image": "CAMPIGLIA.jpg",
        "description": "CAMPIGLIA CERVO -  AL SANTUARIO - 12 - MATTEO E SANDRA\nPIERO E SABRINA",
        "price": "\u20ac50,000,00"
    },
    {
        "id": 3601,
        "destination": "Bahamas 2 - ELEUTHERA",
        "date": "1996-10-15",
        "image": "ELE9600.jpg",
        "description": "Eleuthera -  CLUB ELEUTHERA - 284",
        "price": "\u20ac2,890,000,00"
    },
    {
        "id": 3701,
        "destination": "Maldive 2 - RANNALHI - Atollo Male Sud",
        "date": "1997-02-15",
        "image": "RAN9700.jpg",
        "description": "ATOLLO SUD -  CLUB RANNALHI - 244 - FERRARI PAOLO E BENEDETTA",
        "price": "\u20ac5,900,000,00"
    },
    {
        "id": 3702,
        "destination": "MALE",
        "date": "1997-02-15",
        "image": "MAL9700.jpg",
        "description": "MALE -  GIRO IN ELICOTTERO - FERRARI PAOLO E BENEDETTA",
        "price": "\u20ac5,900,000,00"
    },
    {
        "id": 3801,
        "destination": "Italia - TORTORETO LIDO 2",
        "date": "1997-05-24",
        "image": "TOR9700.jpg",
        "description": "TORTORETO LIDO -  WS CLUB WELCOME - 488 - CRAL CRT - VOLLEY MIX",
        "price": "\u20ac96,000,00"
    },
    {
        "id": 3901,
        "destination": "Italia - BOTRICELLO - CALABRIA",
        "date": "1997-06-14",
        "image": "CAL9700.jpg",
        "description": " BOTRICELLO (CROTONE) -  WS CLUB CARIOCA - G 43 - SQUADRA TENNIS CRAL CRT",
        "price": "\u20ac1,041,200,00"
    },
    {
        "id": 4001,
        "destination": "Italia - CERVIA - ROMAGNA",
        "date": "1997-08-13",
        "image": "CER9700.jpg",
        "description": "CERVIA - PORTO -  JENNEAU 11.20 - CABINA DI PRUA - POLDO E GABRIELLA",
        "price": "\u20ac0"
    },
    {
        "id": 4101,
        "destination": "Egitto 5 - QUSEIR",
        "date": "1997-10-04",
        "image": "QUS9700.jpg",
        "description": "UTOPIA -  UTOPIA BEACH CLUB - 450 - MARINO E SANDRA",
        "price": "\u20ac3,558,000,00"
    },
    {
        "id": 4201,
        "destination": "Francia - NICE - COSTA AZZURRA",
        "date": "1997-11-01",
        "image": "NIZ9700.jpg",
        "description": "NICE -  da DIMITRI - . - DIMITRI E ANDREA",
        "price": "\u20ac64,800,00"
    },
    {
        "id": 4301,
        "destination": "Brasile - MACEIO' 1",
        "date": "1998-03-12",
        "image": "BRA9800.jpg",
        "description": "PRATAGY -  CLUB PRATAGI - 16 - FERRARI PAOLO E BENEDETTA",
        "price": "\u20ac5,354,000,00"
    },
    {
        "id": 4401,
        "destination": "Italia - BUDONI - SARDEGNA",
        "date": "1998-06-13",
        "image": "BUD9800.jpg",
        "description": "PORTO AINU -  HTL VILLAGE - A13 - SQUADRA VOLLEY CRT E S.PAOLO",
        "price": "\u20ac1,032,000,00"
    },
    {
        "id": 4501,
        "destination": "Italia - ALASSIO E PRINCIPATO DI SEBORGA",
        "date": "1998-09-12",
        "image": "ALA9800.jpg",
        "description": "ALASSIO -  GOLF - 3 - CRAL CRT - SQUADRA TENNIS",
        "price": "\u20ac116,000,00"
    },
    {
        "id": 4502,
        "destination": "PRINCIPATO DI SEBORGA",
        "date": "1998-09-12",
        "image": "SEBORGA.jpg",
        "description": "PRINCIPATO DI SEBORGA - CRAL CRT - SQUADRA TENNIS",
        "price": "\u20ac116,000,00"
    },
    {
        "id": 4601,
        "destination": "Mauritius",
        "date": "1998-10-19",
        "image": "MAU9800.jpg",
        "description": "GRAND BAIE -  MAURICIA - 123 - ROBERTO E SABRINA (VR) GIORGIO E PATRIZIA (VR)",
        "price": "\u20ac3,851,000,00"
    },
    {
        "id": 4602,
        "destination": "ISOLA DEI CERVI",
        "date": "1998-10-19",
        "image": "IS_CERVI.jpg",
        "description": "ISOLA DEI CERVI - ROBERTO E SABRINA (VR) GIORGIO E PATRIZIA (VR)",
        "price": "\u20ac3,851,000,00"
    },
    {
        "id": 4701,
        "destination": "Italia - VERONA E LAGO DI GARDA",
        "date": "1998-11-14",
        "image": "LAG9400.jpg",
        "description": "CA' DI DAVID -  Gioeli Giuseppe e Danatella - . - rimpatritriata con Roberto e Sabrina, Giorgio e Patrizia, Beppe e Donatella",
        "price": "\u20ac250,000,00"
    },
    {
        "id": 4801,
        "destination": "Maldive 3 -  RANNALHI 2 - Atollo Male Sud",
        "date": "1999-02-26",
        "image": "RAN9900.jpg",
        "description": "RANNALHI -  CLUB - 102 - CAMILLO E FRANCESCA-SANREMO\nMANUELE E SILVIA-  NOVARA",
        "price": "\u20ac7,532,000,00"
    },
    {
        "id": 4901,
        "destination": "Italia - MURAVERA-SARDEGNA",
        "date": "1999-06-12",
        "image": "SAR9900.jpg",
        "description": "COSTA REI -  FREE BEACH CLUB - 827 - LEYLA-CRIS-DANIELE-IVO-MAX-BETTY E CHIARA",
        "price": "\u20ac960,800,00"
    },
    {
        "id": 4902,
        "destination": "IS.SERPENTARA-CALA PIRA- LE PISCINE",
        "date": "1999-06-12",
        "image": "SAR9900A.jpg",
        "description": "IS.SERPENTARA-CALA PIRA- LE PISCINE - LEYLA-CRIS-DANIELE-IVO-MAX-BETTY E CHIARA",
        "price": "\u20ac960,800,00"
    },
    {
        "id": 5001,
        "destination": "Egitto 6- SHARM EL SHEIKH 4 E DAHAB",
        "date": "1999-10-09",
        "image": "SHA9900.jpg",
        "description": "SHARM EL SHEIK -  HOLIDAY INN RESORT ***** - 510 - ALESSANDRO DONGHI E VENUTO ANNA (MILANO)",
        "price": "\u20ac2,200,000,00"
    },
    {
        "id": 5002,
        "destination": "DAHAB",
        "date": "1999-10-09",
        "image": "DAH99001.jpg",
        "description": "DAHAB - ALESSANDRO DONGHI E VENUTO ANNA (MILANO)",
        "price": "\u20ac2,200,000,00"
    },
    {
        "id": 5101,
        "destination": "Italia - AURONZO DI CADORE - CORTINA - DOBBIACO - BRUNICO",
        "date": "2000-01-06",
        "image": "AUR0000.jpg",
        "description": "CORTINA D'AMPEZZO E MONTE CRISTALLO (seggiovia) -  CHALET FANTINI - . - POLDO FANTINI E GABRIELLA- GIORGIA E SILVANO",
        "price": "\u20ac268,600,00"
    },
    {
        "id": 5102,
        "destination": "MISURINA - BRUNICO (pranzo) - DOBBIACO",
        "date": "2000-01-06",
        "image": "MISURINA.jpg",
        "description": "MISURINA - BRUNICO (pranzo) - DOBBIACO - POLDO FANTINI E GABRIELLA- GIORGIA E SILVANO",
        "price": "\u20ac268,600,00"
    },
    {
        "id": 5201,
        "destination": "Brasile 2 - MACEIO' - RECIFE - OLINDA - MARAGOGI'",
        "date": "2000-02-26",
        "image": "MAC0000.jpg",
        "description": "MACEIO' -  CLUB PRATAGI - 24 - PAOLO (VA) DANIELE (MI) CLAUDIO (MI)",
        "price": "\u20ac5,350,000,00"
    },
    {
        "id": 5202,
        "destination": "RECIFE",
        "date": "2000-02-26",
        "image": "REC0000.jpg",
        "description": "RECIFE - PAOLO (VA) DANIELE (MI) CLAUDIO (MI)",
        "price": "\u20ac5,350,000,00"
    },
    {
        "id": 5203,
        "destination": "OLINDA",
        "date": "2000-02-26",
        "image": "OLI0000.jpg",
        "description": "OLINDA - PAOLO (VA) DANIELE (MI) CLAUDIO (MI)",
        "price": "\u20ac5,350,000,00"
    },
    {
        "id": 5204,
        "destination": "MARAGOGI",
        "date": "2000-02-26",
        "image": "_MA0000.jpg",
        "description": "MARAGOGI - PAOLO (VA) DANIELE (MI) CLAUDIO (MI)",
        "price": "\u20ac5,350,000,00"
    },
    {
        "id": 5301,
        "destination": "Italia - CAORLE-VENEZIA",
        "date": "2000-05-26",
        "image": "CAO0000.jpg",
        "description": "Caorle -  SERENA - 16 - Gruppo di Atletica",
        "price": "\u20ac130,000,00"
    },
    {
        "id": 5401,
        "destination": "Italia - OSTUNI - PUGLIA",
        "date": "2000-06-11",
        "image": "OST0000.jpg",
        "description": "OSTUNI (BRINDISI) -  VILLAGGIO VALTUR - Family - 355 - SQUADRA TENNIS CRAL CRT",
        "price": "\u20ac1,602,000,00"
    },
    {
        "id": 5501,
        "destination": "Egitto 7 - SHARM EL SHEIKH 5 E DAHAB",
        "date": "2000-08-21",
        "image": "SHA0000.jpg",
        "description": "SHARM EL SHEIK -  CORAL BAY HOTEL 5 STELLE RESORT & CASINO - 34 121 - Grosso Graziella e Gino Corretta AT\nStefania e Renzo Visentin SACILE PN",
        "price": "\u20ac2,800,000,00"
    },
    {
        "id": 5502,
        "destination": "DAHAB",
        "date": "2000-08-21",
        "image": "SHA0001.jpg",
        "description": "DAHAB - Grosso Graziella e Gino Corretta AT\nStefania e Renzo Visentin SACILE PN",
        "price": "\u20ac2,800,000,00"
    },
    {
        "id": 5601,
        "destination": "Is. Capo Verde  - ISLA DO SAL",
        "date": "2001-01-20",
        "image": "SID0100.jpg",
        "description": "ISOLA DEL SALE - CAPO VERDE -  BELO HORIZONTE - 316 - MARIA E RUGGERO Sesto San Giovanni ruggero.russo@corbetta.marelli.it",
        "price": "\u20ac3,066,000,00"
    },
    {
        "id": 5701,
        "destination": "Italia - POLLINA - SICILIA",
        "date": "2001-06-17",
        "image": "POL0100.jpg",
        "description": "POLLINA -  VALTUR - TOP - 430 - SQUADRA TENNIS CRT",
        "price": "\u20ac0"
    },
    {
        "id": 5702,
        "destination": "CEFALU'",
        "date": "2001-06-17",
        "image": "CEF0100.jpg",
        "description": "CEFALU' - SQUADRA TENNIS CRT",
        "price": "\u20ac0"
    },
    {
        "id": 5801,
        "destination": "Maldive 4 - DHIFFUSHI - RANNALHI - Atollo Male Sud",
        "date": "2002-02-16",
        "image": "DHI0200.jpg",
        "description": "DHIFFUSHI -  VILLAGGIO - 159 - Elena e Alberto Astolfi MI - Luisa Giuseppe Adrian BS",
        "price": "\u20ac4,470,00"
    },
    {
        "id": 5802,
        "destination": "RANNALHI",
        "date": "2002-02-16",
        "image": "RAN0201.jpg",
        "description": "RANNALHI -  Villaggio - 101 - Elena e Alberto Astolfi MI - Luisa Giuseppe Adrian BS",
        "price": "\u20ac4,470,00"
    },
    {
        "id": 5901,
        "destination": "Italia - FORLI' - BRISIGHELLA - RICCIONE",
        "date": "2002-04-25",
        "image": "Brisighella.jpg",
        "description": "FORLI' -  Chez Poldo - GIORGIA'S ROOM - Fam. Fantini e Contini Angela e Silvano",
        "price": "\u20ac0"
    },
    {
        "id": 6001,
        "destination": "Italia - CAPO RIZZUTO - CALABRIA",
        "date": "2002-06-15",
        "image": "C_R0200.jpg",
        "description": "CAPO RIZZUTO -  VALTUR ENERGY - 464 - DIMITRI E ANDREA, CRISTINA SCHIAVO E TENNISTI CRT",
        "price": "\u20ac976,00"
    },
    {
        "id": 6101,
        "destination": "Egitto 8 - MARSA ALAM - SHALATIN",
        "date": "2002-08-24",
        "image": "MAR0200.jpg",
        "description": "MARSA ALAM -  CORAYA BEACH RESORT - IBEROTEL - 1506 - BARBARA VIGNANDO E MASSIMO CAMPAGNA",
        "price": "\u20ac1,817,00"
    },
    {
        "id": 6102,
        "destination": "SHALATHIN",
        "date": "2002-08-24",
        "image": "Cammelli.jpg",
        "description": "SHALATHIN - BARBARA VIGNANDO E MASSIMO CAMPAGNA",
        "price": "\u20ac1,817,00"
    },
    {
        "id": 6201,
        "destination": "Maldive 5 - RANVELI - Atollo Male Sud",
        "date": "2003-01-11",
        "image": "RAN0300.jpg",
        "description": "ARI ATOLL - RANVELI -  RANVELI VILLAGE - 55-12 - GRUPPO CISALPINA VIAGGI",
        "price": "\u20ac4,107,00"
    },
    {
        "id": 6202,
        "destination": "Maldive 5 - DHANGETHI ISLAND - Atollo Male Sud",
        "date": "2003-01-11",
        "image": "DHA0300.jpg",
        "description": "Visita in dhoni all isola dei pescatori",
        "price": "\u20ac4,107,00"
    },
    {
        "id": 6301,
        "destination": "Italia - FORLI' -  PINARELLA -  CERVIA",
        "date": "2003-05-01",
        "image": "Valerio2013.jpg",
        "description": "FORLI' -  chez Poldo - Giorgia's - POLDO-GABRI MARIO-SIMONA-MARINO- SILVANO",
        "price": "\u20ac0"
    },
    {
        "id": 6401,
        "destination": "Egitto 9 - SHARM EL SHEIKH 6",
        "date": "2003-05-25",
        "image": "SHA0300.jpg",
        "description": "SHARKS BAY -  HILTON SHARKS BAY RESORT - 813 - BARBARA E KATIA (CH) E RAGAZZI DI SAVIGLIANO E BENEVAGIENNA",
        "price": "\u20ac1,065,00"
    },
    {
        "id": 6501,
        "destination": "Egitto 10 - SAFAGA 2",
        "date": "2003-08-24",
        "image": "SAF0300.jpg",
        "description": "SAFAGA -  HOLIDAY INN - 5105 - DANIELA E LUIGI (TO)",
        "price": "\u20ac1,138,00"
    },
    {
        "id": 6502,
        "destination": "TOBIA ISLAND - TOBIA REEF",
        "date": "2003-08-24",
        "image":"TOB0300.jpg",
        "description": "TOBIA ISLAND - TOBIA REEF - DANIELA E LUIGI (TO)",
        "price": "\u20ac1,138,00"
    },
    {
        "id": 6503,
        "destination": "HURGADA",
        "date": "2003-08-24",
        "image": "HUR0300.jpg",
        "description": "HURGADA - DANIELA E LUIGI (TO)",
        "price": "\u20ac1,138,00"
    },
    {
        "id": 6504,
        "destination": "SHARM EL NAGA",
        "date": "2003-08-24",
        "image": "NAG0300.jpg",
        "description": "SHARM EL NAGA - DANIELA E LUIGI (TO)",
        "price": "\u20ac1,138,00"
    },
    {
        "id": 6601,
        "destination": "Maldive 6 - MACHCHAFUSHI ISLAND - ATOLLO ARI",
        "date": "2004-02-28",
        "image": "Mac0400.jpg",
        "description": "Machchafushi Island -  Resort - 216 - SILVIO E ANGELA BETTI (BS)\nDAVIDE E LINDA (FE)",
        "price": "\u20ac2,980,00"
    },
    {
        "id": 6801,
        "destination": "Italia - PINARELLA DI CERVIA E CERVIA",
        "date": "2004-06-24",
        "image": "Cer9708.jpg",
        "description": "PINARELLA DI CERVIA -  LANZONI - 202 - Cristina e Claudio FC Michi e Marco\nGabri e Poldo",
        "price": "\u20ac32,80"
    },
    {
        "id": 6802,
        "destination": "CERVIA",
        "date": "2004-06-24",
        "image": "Cer9701.jpg",
        "description": "CERVIA -  TANIA - 101 - Cristina e Claudio FC Michi e Marco\nGabri e Poldo",
        "price": "\u20ac32,80"
    },
    {
        "id": 7001,
        "destination": "Portogallo - LISBONA E VALLI DEL TEJO",
        "date": "2004-08-18",
        "image": "LIS0400.jpg",
        "description": "LISBONA -  MADRID - 210 - SILVIO E ANGELA BETTI - FEDERICO",
        "price": "\u20ac1,040,00"
    },
    {
        "id": 7002,
        "destination": "FATIMA - OBIDOS - ALCOBACA - BATALLHA - NAZARETH",
        "date": "2004-08-18",
        "image":"FAT0400.jpg",
        "description": "FATIMA - OBIDOS - ALCOBACA - BATALLHA - NAZARETH - SILVIO E ANGELA BETTI - FEDERICO",
        "price": "\u20ac1,040,00"
    },
    {
        "id": 7003,
        "destination": "SINTRA - CABO DE ROCA - CASCAIS",
        "date": "2004-08-18",
        "image": "NAZ0400.jpg",
        "description": "SINTRA - CABO DE ROCA - CASCAIS - SILVIO E ANGELA BETTI - FEDERICO",
        "price": "\u20ac1,040,00"
    },
    {
        "id": 7004,
        "destination": "AEROPORTO DI BRUXELLES",
        "date": "2004-08-18",
        "image": "Aeroporto.jpg",
        "description": "AEROPORTO DI BRUXELLES - SILVIO E ANGELA BETTI - FEDERICO",
        "price": "\u20ac1,040,00"
    },
    {
        "id": 7201,
        "destination": "Grecia 2 - CRETA",
        "date": "2004-10-10",
        "image": "CRE0400.jpg",
        "description": "HERSONISSOS -  ANNABELLE VILLAGE - 153 - RENZO (GE) FIORE SALO'",
        "price": "\u20ac1,050,00"
    },
    {
        "id": 7202,
        "destination": "KNOSSOS",
        "date": "2004-10-10",
        "image": "KNO0400.jpg",
        "description": "KNOSSOS - RENZO (GE) FIORE SALO'",
        "price": "\u20ac1,050,00"
    },
    {
        "id": 7301,
        "destination": "Maldive 7 - ELLAIDHOO - ATOLLO ARI",
        "date": "2005-02-18",
        "image": "ELL0500.jpg",
        "description": "ELLAIDHOO -  Tourist Resort - 106 - MAX E ROBERTA (VI) ALVISE E MARTINA (VE) STEFANO E MARIA (RM)",
        "price": "\u20ac3,800,00"
    },
    {
        "id": 7302,
        "destination": "MAGAA",
        "date": "2005-02-18",
        "image": "Magaa05.jpg",
        "description": "MAGAA - MAX E ROBERTA (VI) ALVISE E MARTINA (VE) STEFANO E MARIA (RM)",
        "price": "\u20ac3,800,00"
    },
    {
        "id": 7303,
        "destination": "IS. DEI PESCATORI",
        "date": "2005-02-18",
        "image": "TramontoMaldive.jpg",
        "description": "IS. DEI PESCATORI - MAX E ROBERTA (VI) ALVISE E MARTINA (VE) STEFANO E MARIA (RM)",
        "price": "\u20ac3,800,00"
    },
    {
        "id": 7601,
        "destination": "Italia - VICENZA - VERONA- BRESCIA",
        "date": "2005-03-26",
        "image": "VIC0500.jpg",
        "description": "CASTELGOMBERTO -  da Cristina - 0 - Cristina SCHIAVO - Massimo MINGOTTI - Silvio BETTI",
        "price": "\u20ac60,00"
    },
    {
        "id": 7701,
        "destination": "Italia - FIRENZE",
        "date": "2005-04-23",
        "image": "FIR0500.jpg",
        "description": "FIRENZE OLTRARNO VIA DELL'ANCONELLA 28 -  CASA DEI GENITORI DI LUCIANA - 28 - MARCO - LUCIANA - IRENE (12) DARIA (8) SERNI",
        "price": "\u20ac136,00"
    },
    {
        "id": 7801,
        "destination": "Tunisia 2 - MAHDIA",
        "date": "2005-05-29",
        "image": "MAH0500.jpg",
        "description": "MAHDIA -  THALASSA HOTEL - 2025 - LAURA (ALBA) DONATELLA (CANALE) CINZIA (VARESE) ed  Elias Animateur",
        "price": "\u20ac1,010,00"
    },
    {
        "id": 7901,
        "destination": "Egitto 11 - MARSA ALAM",
        "date": "2005-07-22",
        "image": "MAR0500.jpg",
        "description": "MARSA ALAM -  CHATARACT - 116 - DANIELE DI MATTEO (AT) Emanuel Family - Gallo Renata",
        "price": "\u20ac810,00"
    },
    {
        "id": 8001,
        "destination": "Italia - BOLOGNA -\nCORSO UNICREDIT ANC",
        "date": "2005-10-11",
        "image": "bol0510.JPG",
        "description": "BOLOGNA -  AC10 - 215 - FERRARIS ULRICO-RICHIARDONE STEFANIA- REVELLO SANDRO",
        "price": "\u20ac99,90"
    },
    {
        "id": 8201,
        "destination": "Italia - BOLOGNA -\nCORSO UNICREDIT SNC",
        "date": "2006-01-17",
        "image": "SANDONATOHTL.bmp",
        "description": "BOLOGNA -  HTL SAN DONATO - 243 - FERRARIS ULRICO REVELLO SANDRO",
        "price": "\u20ac92,00"
    },
    {
        "id": 8301,
        "destination": "Maldive 8 - ALIMATHA e DHIGGIRI - Atollo Felidu",
        "date": "2006-02-13",
        "image": "ALI0600.jpg",
        "description": "ALIMATHA' -  BRAVO CLUB - 518 - Carlotta e Andrea Beltramo TO\nSara e Maurizio Desenzano Garda",
        "price": "\u20ac4,796,00"
    },
    {
        "id": 8302,
        "destination": "DHIGGIRI",
        "date": "2006-02-13",
        "image": "DHI0600.jpg",
        "description": "DHIGGIRI -  Diggiri Tourist Resort - 20 - Carlotta e Andrea Beltramo TO\nSara e Maurizio Desenzano Garda",
        "price": "\u20ac4,796,00"
    },
    {
        "id": 8303,
        "destination": "OLEGGIO",
        "date": "2006-02-13",
        "image": "OLEGGIO_HTL.jpg",
        "description": "OLEGGIO -  HTL OLEGGIO MALPENSA - 109 - Carlotta e Andrea Beltramo TO\nSara e Maurizio Desenzano Garda",
        "price": "\u20ac4,796,00"
    },
    {
        "id": 8401,
        "destination": "Italia - FRIULI - TRIESTE - REDIPUGLIA - CAORLE",
        "date": "1985-08-10",
        "image": "CAO8500.jpg",
        "description": "Mussana -  zio Aldo - . - Vignando Bruno e cugini Patrizia",
        "price": "\u20ac0"
    },
    {
        "id": 8501,
        "destination": "Italia - BOLOGNA -\nCORSO UNICREDIT SNC",
        "date": "2006-04-19",
        "image": "BOL0700.bmp",
        "description": "BOLOGNA -  METROPOLITAN *** - 308 - FERRARIS RIKI - REVELLO SANDRO",
        "price": "\u20ac97,00"
    },
    {
        "id": 8601,
        "destination": "Italia - VERONA\nCORSO QUERCIA - TLQ6",
        "date": "2006-05-17",
        "image": "MASTINO_HTL.jpg",
        "description": "VERONA -  MASTINO - 204 - Visti Giuseppe Gioeli e Donatella",
        "price": "\u20ac71,00"
    },
    {
        "id": 8701,
        "destination": "Italia - RICCIONE\nVIII Meeting Calcetto Unicredit",
        "date": "2006-05-31",
        "image": "RIC0600.jpg",
        "description": "RICCIONE TERME -  ASCOT - 102 - Squadra di calcetto ex Credit - Frasson, Gribaldo & C.",
        "price": "\u20ac224,00"
    },
    {
        "id": 8801,
        "destination": "Egitto  12 - EL ALAMEIN",
        "date": "2006-08-08",
        "image": "ElA0600.jpg",
        "description": "GHAZALA BAY -  Charm Life - 3077 - VIALE GIANNI E MARIA (Pecetto)",
        "price": "\u20ac2,036,00"
    },
    {
        "id": 8802,
        "destination": "ALESSANDRIA",
        "date": "2006-08-08",
        "image": "Ale0600.jpg",
        "description": "ALESSANDRIA - VIALE GIANNI E MARIA (Pecetto)",
        "price": "\u20ac2,036,00"
    },
    {
        "id": 8901,
        "destination": "Germania - MANNHEIM\nTorneo HVB",
        "date": "2006-09-22",
        "image": "MAN0600.jpg",
        "description": "MANNHEIM -  NOVOTEL - 301 - Squadra di calcetto UnicreditBanca con Bertola",
        "price": "\u20ac100,00"
    },
    {
        "id": 9001,
        "destination": "Egitto 13 - SHARM EL SHEIK 7",
        "date": "2006-10-22",
        "image": "SHA0600.jpg",
        "description": "SHARM EL SHEIK -  SINAI - GRAND VILLAGE VALTUR - 1006 JUNIOR SUITE - POLDO - GABRIELLA - BRUNELLA -CARLO",
        "price": "\u20ac1,350,00"
    },
    {
        "id": 9101,
        "destination": "Italia - BOLOGNA -\nCORSO UNICREDIT SNC - Progetto Crash",
        "date": "2006-11-22",
        "image": "BOL0600.bmp",
        "description": "BOLOGNA -  AC BOLOGNA ***** - 202 - REVELLO Sandro",
        "price": "\u20ac86,00"
    },
    {
        "id": 9201,
        "destination": "Spagna  5 - BARCELLONA",
        "date": "2007-01-04",
        "image": "Bar0700.jpg",
        "description": "BARCELLONA Gracia -  Hotel Medium Confort ** - 311",
        "price": "\u20ac818,00"
    },
    {
        "id": 9301,
        "destination": "Italia - VERONA\nTlq 7",
        "date": "2007-02-07",
        "image": "MASTINO_HTL.jpg",
        "description": "VERONA -  HTL MASTINO - 208 - Specialisti Canali Evoluti",
        "price": "\u20ac0"
    },
    {
        "id": 9401,
        "destination": "Mexico 2 - PLAYA MAROMA - Quintana Roo",
        "date": "2007-03-06",
        "image": "PLA0700.jpg",
        "description": "PLAYA MAROMA -  CATALONIA - 6209 PALENQUE - Anna Rita Attabasio - Mimmo Cisternino",
        "price": "\u20ac3,655,00"
    },
    {
        "id": 9403,
        "destination": "CANCUN - COCO BONGO NOCHE LOCA 100 $",
        "date": "2007-03-06",
        "image": "COB0700.jpg",
        "description": "CANCUN - COCO BONGO NOCHE LOCA 100 $ ",
        "price": "\u20ac3,655,00"
    },
    {
        "id": 9404,
        "destination": "COBA' - Cenotes Chok-Ha 90$",
        "date": "2007-03-06",
        "image": "COB07001.jpg",
        "description": "COBA' - Cenotes Chok-Ha 90$ - Anna Rita - Mimmo",
        "price": "\u20ac3,655,00"
    },
    {
        "id": 9501,
        "destination": "Italia - CESENATICO 1",
        "date": "2007-04-28",
        "image": "CES0700.jpg",
        "description": "CESENATICO -  FANTINI - 2 - Francesca - FANTINI POLDO E GABRIELLA E GEMELLI",
        "price": "\u20ac0"
    },
    {
        "id": 9601,
        "destination": "Italia - BOLOGNA\nRiunione SNC - Obiettivi",
        "date": "2007-05-09",
        "image": "UNIVERSITYHTL.bmp",
        "description": "BOLOGNA -  University - 104 - Ferraris U. - Luciano V. - Blengino - Roero",
        "price": "\u20ac0"
    },
    {
        "id": 9701,
        "destination": "Italia - VERONA\nEurobank di Ping-Pong",
        "date": "2007-05-11",
        "image": "VER0700.jpg",
        "description": "VERONA -  Novo Rossi *** - 303 - Rosso Paolo (cral TO x contributo) - MariaGrazia Borgia",
        "price": "\u20ac150,00"
    },
    {
        "id": 9801,
        "destination": "Italia - BOLOGNA\nCorso Snc Pos",
        "date": "2007-06-20",
        "image": "BOL0700.bmp",
        "description": "BOLOGNA -  HOTEL RAMADA ENCORE - . - Di Santo Maurizio - Ferraris Ulrico",
        "price": "\u20ac0"
    },
    {
        "id": 9901,
        "destination": "Italia - FORLI'\nMatrimonio di Francesca Fantini",
        "date": "2007-08-03",
        "image": "Ces0711.jpg",
        "description": "FORLI' -  FANTINI - patronale - Poldo e Gabriella Fantini",
        "price": "\u20ac98,00"
    },
    {
        "id": 10001,
        "destination": "Egitto  14 - EL ALAMEIN 2",
        "date": "2007-08-14",
        "image": "ELA0700.jpg",
        "description": "EL ALAMEIN -  CHARM LIFE ALAMEIN RESORT - 1062 - Paola e Piero VT Umberto e Daniela S.Ambrogio SUSA",
        "price": "\u20ac2,085,00"
    },
    {
        "id": 10101,
        "destination": "Egitto  15 - SHARM EL SHEIK 8 - Blu Hole",
        "date": "2007-10-04",
        "image": "blu0700.jpg",
        "description": "Baia di Nabq SINAI -  SEA LIFE - 2321 - Diego e Ermida Balducci - Roberta Florio - Destefani Lorenzo - Deva Fabrizio",
        "price": "\u20ac647,00"
    },
    {
        "id": 10102,
        "destination": "DAHAB",
        "date": "2007-10-04",
        "image": "SHA0700.jpg",
        "description": "DAHAB - Diego e Ermida Balducci - Roberta Florio - Destefani Lorenzo - Deva Fabrizio",
        "price": "\u20ac647,00"
    },
    {
        "id": 10201,
        "destination": "Gerrmania 2 - BERLINO",
        "date": "2007-11-01",
        "image": "Ber0700.jpg",
        "description": "Berlin Mitte -  Mercure - 112 - Rampone Franco e Lucia - Giorgio e Giovanna Avataneo",
        "price": "\u20ac1,120,00"
    },
    {
        "id": 10202,
        "destination": "Potstdam - Castello Sans Souci",
        "date": "2007-11-01",
        "image": "POT0700.jpg",
        "description": "Potstdam - Castello Sans Souci - Rampone Franco e Lucia - Giorgio e Giovanna Avataneo",
        "price": "\u20ac1,120,00"
    },
    {
        "id": 10301,
        "destination": "Italia - BOLOGNA \nCorso Iban Sepa",
        "date": "2008-01-28",
        "image": "BOL0800.bmp",
        "description": "BOLOGNA -  STARHOTEL EXCELSIOR - 314 - Colleghi Specialisti + Paola Corso",
        "price": "\u20ac0"
    },
    {
        "id": 10401,
        "destination": "Maldive 9 - BIYADHOO - Atollo Male Sud",
        "date": "2008-02-22",
        "image": "Biy0800.jpg",
        "description": "ATOLLO MALE SUD -  Biyadoo Island Resort - 80 - Mondino Luca e Orietta Castellazzo Bormida\nFabrizio e Laura AL Canelli",
        "price": "\u20ac2,917,00"
    },
    {
        "id": 10501,
        "destination": "Italia - SANTA MARGHERITA Ligure - Portofino",
        "date": "2008-04-06",
        "image": "SMA0800.jpg",
        "description": "SANTA MARGHERITA LIGURE -  Htl Riviera * - 8 - Visti:  PIersilvio Berlusca e Silvia Toffanin",
        "price": "\u20ac78,00"
    },
    {
        "id": 10502,
        "destination": "PORTOFINO",
        "date": "2008-04-06",
        "image": "POR0800.jpg",
        "description": "PORTOFINO - Visti:  PIersilvio Berlusca e Silvia Toffanin",
        "price": "\u20ac78,00"
    },
    {
        "id": 10601,
        "destination": "Italia - VERONA \nEurobank di Ping-Pong",
        "date": "2008-05-16",
        "image": "VER0800.jpg",
        "description": "VERONA -  Scalzi - via Carmelitani Scalzi - 10 - Squadra di Ping-pong Unicredit TO",
        "price": "\u20ac100,00"
    },
    {
        "id": 10701,
        "destination": "Italia - ROMA\nX Meeting Calcetto Unicredit",
        "date": "2008-05-30",
        "image": "roma0801.jpg",
        "description": "Pomezia -  Htl Palace **** - 207 - Squadra calcio a 5: De Biasi Alberto, Gioanola Sergio",
        "price": "\u20ac382,86"
    },
    {
        "id": 10702,
        "destination": "Roma",
        "date": "2008-05-30",
        "image": "roma0800.jpg",
        "description": "Roma -  Atalntico **** - 104 - Squadra calcio a 5: De Biasi Alberto, Gioanola Sergio",
        "price": "\u20ac382,86"
    },
    {
        "id": 10703,
        "destination": "Ostia",
        "date": "2008-05-30",
        "image": "ost0800.jpg",
        "description": "Ostia -  Da Pinuccio Cugino ",
        "price": "\u20ac382,86"
    },
    {
        "id": 10801,
        "destination": "Egitto  16 - SHARM EL SHEIK  9 - Petra",
        "date": "2008-06-22",
        "image": "SHA0802.jpg",
        "description": "Sharm el Sheikh -  Calimera Royal Diamond Beach - 1121 - www.movida.cc",
        "price": "\u20ac2,497,00"
    },
    {
        "id": 10802,
        "destination": "Aqaba e Petra",
        "date": "2008-06-22",
        "image": "AQA0800.jpg",
        "description": "Aqaba e Petra -  CROWNE PLAZA RESORT - www.movida.cc",
        "price": "\u20ac2,497,00"
    },
    {
        "id": 10901,
        "destination": "Grecia 3 - KOS \nTurchia 2 - BODRUM",
        "date": "2008-09-07",
        "image": "KOS0800.jpg",
        "description": "LAMPI vicino a Kos citt\u00e0 -  VERA CLUB _x000D_\nTHALASSA - 106 - Barbara e Franco( Fe)",
        "price": "\u20ac1,320,00"
    },
    {
        "id": 10902,
        "destination": "BODRUM",
        "date": "2008-09-07",
        "image": "BOD0800.jpg",
        "description": "BODRUM - Barbara e Franco( Fe)",
        "price": "\u20ac1,320,00"
    },
    {
        "id": 11001,
        "destination": "Italia - BOLOGNA\nRuolo SNC",
        "date": "2008-11-05",
        "image": "BOL0800.bmp",
        "description": "Bologna -  U N A Htl - 103 - Dante Massimo Revello Sandro Luciano Vittorio",
        "price": "\u20ac0"
    },
    {
        "id": 11101,
        "destination": "Spagna 6 - VALENCIA",
        "date": "2008-11-20",
        "image": "Val0800.jpg",
        "description": "Valencia -  BELERET - 123",
        "price": "\u20ac447,69"
    },
    {
        "id": 11201,
        "destination": "Italia - MILANO (MI)\nCologno Monzese",
        "date": "2008-12-09",
        "image": "BavieraHtl.jpg",
        "description": "MILANO -  BAVIERA - 106 - D'Agostino Pasquale -",
        "price": "\u20ac15,00"
    },
    {
        "id": 11202,
        "destination": "COLOGNO MONZESE",
        "date": "2008-12-09",
        "image": "MIL1600.JPG",
        "description": "COLOGNO MONZESE -  U P A - D'Agostino Pasquale -",
        "price": "\u20ac15,00"
    },
    {
        "id": 11301,
        "destination": "Austria 3 - SCLHADMING",
        "date": "2009-03-18",
        "image": "SCL0900.jpg",
        "description": "UNTERTAL -  LANDAUERHOF **** - 20 - Gruppo sci -  Lategana Alberto -Turello Pietro - Eleonora - Blanco Giusy",
        "price": "\u20ac226,00"
    },
    {
        "id": 11401,
        "destination": "Italia - BOLOGNA (BO)\nCorso ACCESS Base",
        "date": "2009-05-05",
        "image": "BolDeLaGarHtl.jpg",
        "description": "BOLOGNA -  Nh Bologna De La Gar - 412 - Cellino Tito - Prof. Marrani Poli",
        "price": "\u20ac123,00"
    },
    {
        "id": 11501,
        "destination": "Italia - VERONA (VR)\nEurobank di Ping-Pong",
        "date": "2009-05-15",
        "image": "VER0900.jpg",
        "description": "VERONA -  NOVO ROSSI *** - 107 - Turello Pietro - Garbelotto Luigi - De Nicol\u00f2 Donatella",
        "price": "\u20ac0"
    },
    {
        "id": 11601,
        "destination": "Francia - LE LAVANDOU - Menton",
        "date": "2009-05-30",
        "image": "NAREV'SHTL.jpg",
        "description": "MENTON -  NAREV'S HTL ** - 30/5/09 N. 11_x000D_\n2/6/09 N. 31 - Zii Silvio e LiNAREV'SHTL.jpgliana Vignando",
        "price": "\u20ac205,00"
    },
    {
        "id": 11602,
        "destination": "LE LAVANDOU",
        "date": "2009-05-30",
        "image": "LeL0900.jpg",
        "description": "LE LAVANDOU -  Kerylos 3 piano - 8 - Zii Silvio e Liliana Vignando",
        "price": "\u20ac205,00"
    },
    {
        "id": 11701,
        "destination": "Egitto 17 - MARSA ALAM",
        "date": "2009-08-09",
        "image": "MAR0900.jpg",
        "description": "MARSA ALAM -  NADA RESORT - 2207 = B207 - ANDREA CECILIA MANTOVA - MASSIMO LUINO",
        "price": "\u20ac3,518,00"
    },
    {
        "id": 11801,
        "destination": "E A U - RAS AL KHAIMAH",
        "date": "2009-11-20",
        "image": "DUB0900.jpg",
        "description": "AEROPORTO - DUBAI MALL - BURJ AL ARAB -  verso Khaimah - 1 PIANO - LELLA E MARTINO Chiavari",
        "price": "\u20ac2,712,27"
    },
    {
        "id": 11802,
        "destination": "RAS AL KHAIMAH HILTON RESORT",
        "date": "2009-11-20",
        "image": "RAK0900.jpg",
        "description": "RAS AL KHAIMAH HILTON RESORT -  HILTON RESORT - 829 - LELLA E MARTINO Chiavari",
        "price": "\u20ac2,712,27"
    },
    {
        "id": 11803,
        "destination": "FIORDI OMANITI",
        "date": "2009-11-20",
        "image": "OMA0900.jpg",
        "description": "FIORDI OMANITI - LELLA E MARTINO Chiavari",
        "price": "\u20ac2,712,27"
    },
    {
        "id": 12001,
        "destination": "Italia - SPOTORNO (SV)",
        "date": "2010-02-27",
        "image": "TIRRENOhtl.jpg",
        "description": "SPOTORNO -  TIRRENO **** - 111 - MARCO OGLIARO E ELENA",
        "price": "\u20ac54,00"
    },
    {
        "id": 12101,
        "destination": "Italia - SPOTORNO 2 (SV)",
        "date": "2010-03-27",
        "image": "SPO1000.jpg",
        "description": "SPOTORNO -  TIRRENO **** - 67",
        "price": "\u20ac220,00"
    },
    {
        "id": 12201,
        "destination": "Italia - CASTROCARO TERME (FC)",
        "date": "2010-04-08",
        "image": "CAS1000.jpg",
        "description": "CASTROCARO TERME -  GRAND HOTEL TERME ****S - 164 - CRAL UNICREDIT",
        "price": "\u20ac516,00"
    },
    {
        "id": 12301,
        "destination": "Italia - LOANO (SV)",
        "date": "2010-05-26",
        "image": "LOA1000.jpg",
        "description": "Loano 2 -  Loano2Village - 450 E - squadra tennis unicredit-torino",
        "price": "\u20ac26,00"
    },
    {
        "id": 12401,
        "destination": "Italia - LIGNANO SABBIADORO (UD)",
        "date": "2010-07-18",
        "image": "stageLignano2010.JPG",
        "description": "Lignano Sabbiadoro_x000D_\nLIGNANO -  Consuelo *** - 219 - Ines, Ana e Matjaz SERCER - Kvesic DAVOR - Skoric DUBRAVKO",
        "price": "\u20ac575,00"
    },
    {
        "id": 12501,
        "destination": "Turchia 3 - YALIKAVAK",
        "date": "2010-08-13",
        "image": "Yal1000.jpg",
        "description": "YALIKAVAK -  PRINCESS ARTEMISIA - 312 - GUIDO E VIRGINIA QUARANTINI (BS)",
        "price": "\u20ac1,956,00"
    },
    {
        "id": 12502,
        "destination": "BODRUM",
        "date": "2010-08-13",
        "image": "bod1000.jpg",
        "description": "BODRUM - GUIDO E VIRGINIA QUARANTINI (BS)",
        "price": "\u20ac1,956,00"
    },
    {
        "id": 12601,
        "destination": "Italia - FORLI' - CASTROCARO TERME (FC)",
        "date": "2010-09-12",
        "image": "cas1005.jpg",
        "description": "FORLI' -  Fantini House - 1 - Consiglio CRAL Unicredit",
        "price": "\u20ac160,00"
    },
    {
        "id": 12602,
        "destination": "Castrocaro Terme",
        "date": "2010-09-12",
        "image": "CAS1004.jpg",
        "description": "Castrocaro Terme -  GRAND HOTEL TERME ****S - 410 x 1 g - 314 x 2 gg - Consiglio CRAL Unicredit",
        "price": "\u20ac160,00"
    },
    {
        "id": 12603,
        "destination": "Predappio FC",
        "date": "2010-09-12",
        "image": "predappio.jpg",
        "description": "Predappio FC - Consiglio CRAL Unicredit",
        "price": "\u20ac160,00"
    },
    {
        "id": 12701,
        "destination": "Capo Verde 2 - Is. BOAVISTA",
        "date": "2010-09-29",
        "image": "BOA1000.jpg",
        "description": "Praia de Chaves -  RIU KARAMBOA - 1019",
        "price": "\u20ac1,697,00"
    },
    {
        "id": 12801,
        "destination": "Maldive 10 - OLHUVELI - Atollo Male Sud",
        "date": "2011-01-23",
        "image": "Olh1101.jpg",
        "description": "Olhuveli Island -  Olhuveli  Beach & Spa Resort - 403 Villa x1 notte  - 259 - Fantini Poldo - Gabriella\nHoney Moon + candle lit dinner",
        "price": "\u20ac4,497,00"
    },
    {
        "id": 12901,
        "destination": "Per\u00f9 - Legendary Tour",
        "date": "2011-02-22",
        "image": "ams1401.jpg",
        "description": "AMSTERDAM -  LH SCHIPHOL AIRPORT - 2124 - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12902,
        "destination": "LIMA",
        "date": "2011-02-22",
        "image": "LIM1100.jpg",
        "description": "LIMA -  CASA ANDINA MIRAFLORES SAN ANTONIO HTL - 102 - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12903,
        "destination": "AREQUIPA",
        "date": "2011-02-22",
        "image": "ARE1100.jpg",
        "description": "AREQUIPA -  CASA ANDINA CLASSIC 3* - 208 - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12904,
        "destination": "PUNO",
        "date": "2011-02-22",
        "image": "PUN1100.jpg",
        "description": "PUNO -  CASA ANDINA PLAZA CLASSIC 3* - 409 - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12905,
        "destination": "CUSCO",
        "date": "2011-02-22",
        "image": "CUS1100.jpg",
        "description": "CUSCO -  CASA ANDINA CATEDRAL _x000D_\nCLASSIC 3* - 311 - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12906,
        "destination": "YANAHUARA",
        "date": "2011-02-22",
        "image": "YAN1100.jpg",
        "description": "YANAHUARA -  CASA ANDINA PRIVATE COLLECTION 4* - 708 - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12907,
        "destination": "MACHU PICCHU",
        "date": "2011-02-22",
        "image": "MAC1100.jpg",
        "description": "MACHU PICCHU -  Aguas Calliente - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12908,
        "destination": "CUSCO",
        "date": "2011-02-22",
        "image": "CUS1100.jpg",
        "description": "CUSCO -  CASA ANDINA CATEDRAL CLASSIC 3* - 202 - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12909,
        "destination": "LIMA",
        "date": "2011-02-22",
        "image": "LIM1100.jpg",
        "description": "LIMA - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 12910,
        "destination": "AMSTERDAM",
        "date": "2011-02-22",
        "image": "AMS1100.jpg",
        "description": "AMSTERDAM - Sergio Uliano e Presidenti Cral",
        "price": "\u20ac583,13"
    },
    {
        "id": 13001,
        "destination": "Germania 3 - HAMBURG",
        "date": "2011-06-02",
        "image": "AMB1100.jpg",
        "description": "HAMBURG -  Monteforte - patronale - Famiglia Monteforte Zii e Cugini",
        "price": "\u20ac176,80"
    },
    {
        "id": 13101,
        "destination": "Grecia 4 - RHODI 2",
        "date": "2011-06-19",
        "image": "ROD8701.jpg",
        "description": "KALATHOS BEACH -  ATRIUM PALACE - 428 - ADRIANO-  B.A.I. ANDREA E CARLOTTA",
        "price": "\u20ac2,471,00"
    },
    {
        "id": 13201,
        "destination": "Italia - CESENATICO 2",
        "date": "2011-08-16",
        "image": "CES1100.jpg",
        "description": "CESENATICO -  FANTINI - Giorgia - poldo e gabriella Fantini",
        "price": "\u20ac0"
    },
    {
        "id": 13202,
        "destination": "Gabicce Mare",
        "date": "2011-08-16",
        "image": "GAB9500.jpg",
        "description": "Gabicce Mare - poldo e gabriella Fantini",
        "price": "\u20ac0"
    },
    {
        "id": 13301,
        "destination": "Italia - CASTROCARO TERME (FC)",
        "date": "2011-09-02",
        "image": "Castro11.JPG",
        "description": "CASTROCARO TERME -  Gran Hotel - 278 - Compania \"Buona la prima\" - Full Monty",
        "price": "\u20ac0"
    },
    {
        "id": 13401,
        "destination": "Francia - MENTON - Monaco - MONTECARLO",
        "date": "2011-10-15",
        "image": "Men1100.JPG",
        "description": "MENTON - MONTECARLO -  .. - .. - LUDOVICO MARCHISIO - PAOLO ROSSO -MARINELLA",
        "price": "\u20ac30,00"
    },
    {
        "id": 13402,
        "destination": "MONTECARLO",
        "date": "2011-10-15",
        "image": "MentoneMonteCarlo.JPG",
        "description": "MONTECARLO - LUDOVICO MARCHISIO - PAOLO ROSSO -MARINELLA",
        "price": "\u20ac30,00"
    },
    {
        "id": 13501,
        "destination": "Madagascar 2 - NOSY BE",
        "date": "2011-10-31",
        "image": "NOS1100.jpg",
        "description": "NOSY BE -  ANDILANA BEACH **** - 438 - MIMMO CISTERNINO - VALENTINA BONGIOVANNI",
        "price": "\u20ac2,600,00"
    },
    {
        "id": 13502,
        "destination": "NOSY KOMBA",
        "date": "2011-10-31",
        "image": "KOM1100.jpg",
        "description": "NOSY KOMBA - MIMMO CISTERNINO - VALENTINA BONGIOVANNI",
        "price": "\u20ac2,600,00"
    },
    {
        "id": 13503,
        "destination": "NOSY TANIKELY",
        "date": "2011-10-31",
        "image": "TAN1100.jpg",
        "description": "NOSY TANIKELY - MIMMO CISTERNINO - VALENTINA BONGIOVANNI",
        "price": "\u20ac2,600,00"
    },
    {
        "id": 13601,
        "destination": "Maldive 11 - ALIMATHA  - Atollo Felidhu",
        "date": "2012-02-27",
        "image": "ALI1200.jpg",
        "description": "ALIMATHA' -  ALIMATHA ACQUATIC RESORT Vaavu Atoll - 96 - Gianfranco e Bianca Pascale - Roma",
        "price": "\u20ac4,537,00"
    },
    {
        "id": 13701,
        "destination": "Italia - LOANO  2 (SV)",
        "date": "2012-05-23",
        "image": "loa2village.jpg",
        "description": "LOANO -  LOANO 2 VILLAGE - 342 SCALA C - CRAL UNICREDIT - GRUPPO TENNIS\nGRUPPO BALLO LATINO AMERICANO",
        "price": "\u20ac445,00"
    },
    {
        "id": 13801,
        "destination": "Italia - TORRE GUACETO (BR)",
        "date": "2012-06-24",
        "image": "TOR1200.jpg",
        "description": "TORRE GUACETO -  villa holliwoodiana FANTINI - 1 A - POLDO E GABRIELLA FANTINI TERESA E VALERIIO",
        "price": "\u20ac383,82"
    },
    {
        "id": 13802,
        "destination": "GALLIPOLI - SANTA MARIA DI LEUCA - \"le Maldive\" a Salve LE",
        "date": "2012-06-24",
        "image": "GAL1200.jpg",
        "description": "GALLIPOLI - SANTA MARIA DI LEUCA - \"le Maldive\" a Salve LE - POLDO E GABRIELLA FANTINI TERESA E VALERIIO",
        "price": "\u20ac383,82"
    },
    {
        "id": 13803,
        "destination": "LECCE",
        "date": "2012-06-24",
        "image": "LEC1200.jpg",
        "description": "LECCE - POLDO E GABRIELLA FANTINI TERESA E VALERIIO",
        "price": "\u20ac383,82"
    },
    {
        "id": 13804,
        "destination": "OSTUNI",
        "date": "2012-06-24",
        "image": "OST1200.jpg",
        "description": "OSTUNI - POLDO E GABRIELLA FANTINI TERESA E VALERIIO",
        "price": "\u20ac383,82"
    },
    {
        "id": 13901,
        "destination": "Repubblica Ceca - PRAGA",
        "date": "2012-08-16",
        "image": "Pra12001.jpg",
        "description": "PRAGA - Nove Mesto -  Design Hotel Elephant - 215",
        "price": "\u20ac599,94"
    },
    {
        "id": 13902,
        "destination": "PRAGA - Stare Mesto",
        "date": "2012-08-16",
        "image": "CEC12001.jpg",
        "description": "PRAGA - Stare Mesto -  Andante Hotel *** - 22",
        "price": "\u20ac599,94"
    },
    {
        "id": 14001,
        "destination": "Maldive 12 - DAHALU Atoll - VILU REEF",
        "date": "2013-01-20",
        "image": "FIR1300.jpg",
        "description": "SOMMA LOMBARDO -  HTL 61,20 EUR - 209 - AVV.TI POZZUOLI - FOX ROMA - MILANO",
        "price": "\u20ac6,264,60"
    },
    {
        "id": 14002,
        "destination": "DUBAI CITY",
        "date": "2013-01-20",
        "image": "DUB1300.jpg",
        "description": "DUBAI CITY -  40 EUR - AVV.TI POZZUOLI - FOX ROMA - MILANO",
        "price": "\u20ac6,264,60"
    },
    {
        "id": 14003,
        "destination": "VILU REEF DAHALU ATOLL",
        "date": "2013-01-20",
        "image": "VIL1300.jpg",
        "description": "VILU REEF DAHALU ATOLL -  RESORT - 212 - AVV.TI POZZUOLI - FOX ROMA - MILANO",
        "price": "\u20ac6,264,60"
    },
    {
        "id": 14004,
        "destination": "MALE",
        "date": "2013-01-20",
        "image": "MAL1300.jpg",
        "description": "MALE - AVV.TI POZZUOLI - FOX ROMA - MILANO",
        "price": "\u20ac6,264,60"
    },
    {
        "id": 14101,
        "destination": "Italia - FORLI'",
        "date": "2013-04-20",
        "image": "forli1300.JPG",
        "description": "FORLI' -  Via Passo Buole - 1 - VALERIO - CARLO POLDO E GABRI",
        "price": "\u20ac0"
    },
    {
        "id": 14201,
        "destination": "Egitto  18 - BERENICE",
        "date": "2013-05-25",
        "image": "LAH1300.jpg",
        "description": "LAHAMI BAY - BERENICE -  BEACH RESORT - 2030 - cliente poliziotto stradale",
        "price": "\u20ac2,018,00"
    },
    {
        "id": 14301,
        "destination": "Tunisia 3 - HAMMAMET",
        "date": "2013-08-16",
        "image": "Ham1300.jpg",
        "description": "HAMMAMET JASMINE -  CLUB BRAVO Almaz - 125 - Ava Ginevra di Concorezzo Natascia Stefania e Alfo di Venaria",
        "price": "\u20ac1,378,00"
    },
    {
        "id": 14302,
        "destination": "CARTHAGE E SIDI BOU SAID",
        "date": "2013-08-16",
        "image": "CAR1300.jpg",
        "description": "CARTHAGE E SIDI BOU SAID - Ava Ginevra di Concorezzo Natascia Stefania e Alfo di Venaria",
        "price": "\u20ac1,378,00"
    },
    {
        "id": 14303,
        "destination": "SIDI BOU SAID",
        "date": "2013-08-16",
        "image": "SID1300.jpg",
        "description": "SIDI BOU SAID - Ava Ginevra di Concorezzo Natascia Stefania e Alfo di Venaria",
        "price": "\u20ac1,378,00"
    },
    {
        "id": 14401,
        "destination": "Italia - ROMA e Città del Vaticano",
        "date": "2013-11-17",
        "image": "AristonHtlRoma.jpg",
        "description": "ROMA -  ARISTON **** - 532 - Tornatore Mario e Loredana",
        "price": "\u20ac0"
    },
    {
        "id": 14402,
        "destination": "Udienza Papale in Piazza San Pietro",
        "date": "2013-11-17",
        "image": "VAT1300.JPG",
        "description": "Udienza Papale in Piazza San Pietro - Tornatore Mario e Loredana",
        "price": "\u20ac0"
    },
    {
        "id": 14501,
        "destination": "Tanzania - ZANZIBAR 2",
        "date": "2014-02-18",
        "image": "ZAN1400.jpg",
        "description": "ZANZIBAR - KIWENGWA -  VERATOUR - VILLAGE - 59 - Rebecchi Cesare-Alessandra-Ilaria",
        "price": "\u20ac3,297,00"
    },
    {
        "id": 14502,
        "destination": "UNGUJA - GIRO DEL NORD",
        "date": "2014-02-18",
        "image": "TOU1400.jpg",
        "description": "UNGUJA - GIRO DEL NORD - Rebecchi Cesare-Alessandra-Ilaria",
        "price": "\u20ac3,297,00"
    },
    {
        "id": 14503,
        "destination": "UNGUJA- STONE TOWN",
        "date": "2014-02-18",
        "image": "ZanzibarST.jpg",
        "description": "UNGUJA- STONE TOWN - Rebecchi Cesare-Alessandra-Ilaria",
        "price": "\u20ac3,297,00"
    },
    {
        "id": 14504,
        "destination": "SOMMA LOMBARDO",
        "date": "2014-02-18",
        "image": "IDEA_HTL.jpg",
        "description": "SOMMA LOMBARDO -  IDEA HTL **** - 17 - Rebecchi Cesare-Alessandra-Ilaria",
        "price": "\u20ac3,297,00"
    },
    {
        "id": 14601,
        "destination": "Italia - SIRMIONE - Gardaland",
        "date": "2014-04-04",
        "image": "SIR1400.jpg",
        "description": "SIRMIONE -  ALFIERI *** - 204 - 122",
        "price": "\u20ac156,00"
    },
    {
        "id": 14602,
        "destination": "GARDALAND hotel and Resort",
        "date": "2014-04-04",
        "image": "GAR1400.jpg",
        "description": "GARDALAND hotel and Resort",
        "price": "\u20ac156,00"
    },
    {
        "id": 14603,
        "destination": "BERGAMO",
        "date": "2014-04-04",
        "image": "Bergamo_Alta.jpg",
        "description": "BERGAMO",
        "price": "\u20ac156,00"
    },
    {
        "id": 14701,
        "destination": "Italia - SPOTORNO 3 (SV)",
        "date": "2014-05-10",
        "image": "GIONGO_HTL.jpg",
        "description": "SPOTORNO -  GIONGO *** - 201",
        "price": "\u20ac0"
    },
    {
        "id": 14801,
        "destination": "Italia - LOANO  3 (SV)",
        "date": "2014-05-22",
        "image": "LOA1400.jpg",
        "description": "LOANO 2 -  VILLAGE - 249 SCALA E - SQUADRA DI TENNIS UNICREDIT",
        "price": "\u20ac244,00"
    },
    {
        "id": 14901,
        "destination": "Olanda - AMSTERDAM 2",
        "date": "2014-05-31",
        "image": "AMS1400.jpg",
        "description": "AMSTERDAM - Prinsengracht -  Hampshire Hotel *** 2 camere comunicanti - 201 + 209 - bionda moglie",
        "price": "\u20ac390,62"
    },
    {
        "id": 15001,
        "destination": "Italia - LOANO  4 (SV)",
        "date": "2014-06-21",
        "image": "loa2village.jpg",
        "description": "LOANO -  loano 2 village - U 419",
        "price": "\u20ac330,00"
    },
    {
        "id": 15101,
        "destination": "Italia - MARISPICA (RG)",
        "date": "2014-07-12",
        "image": "Mar1400.jpg",
        "description": "Santa Maria del Focallo - Marispica (RG) -  IGV - Grandi Viaggi - 416 Israele - Giampi ci ha accompagnato a Caselle",
        "price": "\u20ac2,250,00"
    },
    {
        "id": 15102,
        "destination": "Ragusa Ibla (RG)",
        "date": "2014-07-12",
        "image": "RAG1400.jpg",
        "description": "Ragusa Ibla (RG) - Giampi ci ha accompagnato a Caselle",
        "price": "\u20ac2,250,00"
    },
    {
        "id": 15103,
        "destination": "Scicli (RG)",
        "date": "2014-07-12",
        "image": "Sci1400.jpg",
        "description": "Scicli (RG) - Giampi ci ha accompagnato a Caselle",
        "price": "\u20ac2,250,00"
    },
    {
        "id": 15201,
        "destination": "Italia - Forl' CESENATICO 3",
        "date": "2014-08-14",
        "image": "CES1000.JPG",
        "description": "FORLI' -  da Poldo - patronale - Poldo e Gabri, Carlo e",
        "price": "\u20ac120,00"
    },
    {
        "id": 15202,
        "destination": "CESENATICO",
        "date": "2014-08-14",
        "image": "CES1700.jpg",
        "description": "CESENATICO -  da Poldo - Poldo e Gabri, Carlo e",
        "price": "\u20ac120,00"
    },
    {
        "id": 15203,
        "destination": "BELLARIA",
        "date": "2014-08-14",
        "image": "BEL1400.JPG",
        "description": "BELLARIA - Poldo e Gabri, Carlo e",
        "price": "\u20ac120,00"
    },
    {
        "id": 15301,
        "destination": "Grecia  5 - MYKONOS",
        "date": "2014-09-19",
        "image": "MYK1401.jpg",
        "description": "MYKONOS kalo LIVADI -  PENELOPE VILLAGE VERACLUB - 116 - Claudio e Mara Miliano extra affitto lettini spiaggia e scooter",
        "price": "\u20ac1,660,00"
    },
    {
        "id": 15302,
        "destination": "MYKONOS TOUR DELLE SPIAGGE",
        "date": "2014-09-19",
        "image": "MYK1402.jpg",
        "description": "MYKONOS TOUR DELLE SPIAGGE - Claudio e Mara Miliano extra affitto lettini spiaggia e scooter",
        "price": "\u20ac1,660,00"
    },
    {
        "id": 15303,
        "destination": "2 MYKONOS BY NIGHT E SHOPPING",
        "date": "2014-09-19",
        "image": "MYK1403.jpg",
        "description": "2 MYKONOS - Claudio e Mara Miliano extra affitto lettini spiaggia e scooter",
        "price": "\u20ac1,660,00"
    },
    {
        "id": 15401,
        "destination": "Italia - VENEZIA - BURANO",
        "date": "2014-11-01",
        "image": "Ven1400.jpg",
        "description": "VENEZIA -  Inn Locanda ai Bareteri_x000D_\nPonte Dei Bareteri 4966 - San Marco - 203 - coniugi di None",
        "price": "\u20ac158,00"
    },
    {
        "id": 15402,
        "destination": "BURANO",
        "date": "2014-11-01",
        "image": "Bur1400.jpg",
        "description": "BURANO - coniugi di None",
        "price": "\u20ac158,00"
    },
    {
        "id": 15501,
        "destination": "Colombia - Isla SAN ANDRES",
        "date": "2015-02-01",
        "image": "San1500.jpg",
        "description": "Isla San Andres -  DECAMERON Isleno ***** - 1205 - Fantini Poldo e Carlo",
        "price": "\u20ac4,800,00"
    },
    {
        "id": 15502,
        "destination": "Tour dell'isola",
        "date": "2015-02-01",
        "image": "Cit1500.jpg",
        "description": "Tour dell'isola - Fantini Poldo e Carlo",
        "price": "\u20ac4,800,00"
    },
    {
        "id": 15503,
        "destination": "Rocky Cay in taxi",
        "date": "2015-02-01",
        "image": "Roc1500.jpg",
        "description": "Rocky Cay in taxi - Fantini Poldo e Carlo",
        "price": "\u20ac4,800,00"
    },
    {
        "id": 15504,
        "destination": "Jhonny Cay e Acuario",
        "date": "2015-02-01",
        "image": "Jho1500.jpg",
        "description": "Jhonny Cay e Acuario - Fantini Poldo e Carlo",
        "price": "\u20ac4,800,00"
    },
    {
        "id": 15601,
        "destination": "Italia - NOLI (SV)",
        "date": "2015-04-25",
        "image": "NOL1500.jpg",
        "description": "NOLI -  DELAUDE HOME - FIGLI - De Laude Carlo e Lalla",
        "price": "\u20ac0"
    },
    {
        "id": 15701,
        "destination": "Malta - BUGIBBA",
        "date": "2015-05-30",
        "image": "Bug1500.jpg",
        "description": "Bugibba -  DOLMEN HTL **** - 429",
        "price": "\u20ac864,00"
    },
    {
        "id": 15702,
        "destination": "Marsaxlokk - Tour del Sud",
        "date": "2015-05-30",
        "image": "Mar1500.jpg",
        "description": "Marsaxlokk - Tour del Sud -  Pizza al Mediterraneo",
        "price": "\u20ac864,00"
    },
    {
        "id": 15703,
        "destination": "Valletta",
        "date": "2015-05-30",
        "image": "Val1500.jpg",
        "description": "Valletta -  Rist. Corina",
        "price": "\u20ac864,00"
    },
    {
        "id": 15801,
        "destination": "Italia - SARDEGNA - Costa Rei (CA)",
        "date": "2015-07-05",
        "image": "rei1500.jpg",
        "description": "COSTA REI -  EOS VILLAGE VERACLUB - 183",
        "price": "\u20ac2,632,00"
    },
    {
        "id": 15901,
        "destination": "Russia - MOSCA e SANPIETROBURGO",
        "date": "2015-07-17",
        "image": "Mos1500.jpg",
        "description": "MOSCA -  Gran Marriott - 823 - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15902,
        "destination": "SERGEV POSAD",
        "date": "2015-07-17",
        "image": "Ser1500.jpg",
        "description": "SERGEV POSAD - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15903,
        "destination": "SUZDAL",
        "date": "2015-07-17",
        "image": "Suz1500.jpg",
        "description": "SUZDAL -  Pushkarskaya Sloboda - 48 - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15904,
        "destination": "VLADIMIR",
        "date": "2015-07-17",
        "image": "Vla1500.jpg",
        "description": "VLADIMIR - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15905,
        "destination": "MOSCA",
        "date": "2015-07-17",
        "image": "Mos1500.jpg",
        "description": "MOSCA -  COURTYARD Marriott - 526 - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15906,
        "destination": "TRENO MOSCA-SAN PIETROBURGO",
        "date": "2015-07-17",
        "image": "TRE1500.jpg",
        "description": "TRENO MOSCA-SAN PIETROBURGO - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15907,
        "destination": "PUSKHIN",
        "date": "2015-07-17",
        "image": "PUS1500.jpg",
        "description": "PUSKHIN - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15908,
        "destination": "PETRODVORETS",
        "date": "2015-07-17",
        "image": "PET1500.jpg",
        "description": "PETRODVORETS - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 15909,
        "destination": "SAN PIETROBURGO",
        "date": "2015-07-17",
        "image": "SPB1500.jpg",
        "description": "SAN PIETROBURGO -  SOKOS HTL - OLYMPIA GARDEN - 704 - 35 gruppo Cral Unicredit Piemonte e Valle d'aosta",
        "price": "\u20ac1,700,00"
    },
    {
        "id": 16001,
        "destination": "Italia - SAVONA - NOLI (SV)",
        "date": "2015-08-13",
        "image": "SAV1500.jpg",
        "description": "SAVONA -  CASA Via Leningrado 9 - Matrimoniale Patrizia/Giusy - Giusy Di Francesco - Savona \nCarlo De Laude - Noli",
        "price": "\u20ac11,00"
    },
    {
        "id": 16002,
        "destination": "NOLI",
        "date": "2015-08-13",
        "image": "Tog1500.jpg",
        "description": "NOLI -  da Carlo De Laude - Ospiti - Giusy Di Francesco - Savona \nCarlo De Laude - Noli",
        "price": "\u20ac11,00"
    },
    {
        "id": 16101,
        "destination": "Italia - EXPO 2015",
        "date": "2015-08-20",
        "image": "EXP1500.jpg",
        "description": "EXPO MILANO - LE SMANDRAPPATE VINTAGE\nVisitati Eire - Nepal -Angola - Brasile - Slovenia-Iran-Marocco-Oman - Qatar Cereals e Tuberr Cocoa and Chocolate e Pavillon Zero",
        "price": "\u20ac100,00"
    },
    {
        "id": 16201,
        "destination": "Spagna - MINORCA",
        "date": "2015-09-20",
        "image": "SON1500.jpg",
        "description": "ST THOMAS - Minorca -  Menorca Veraclub - 117 - Luigi da Montichiari BS",
        "price": "\u20ac1,263,00"
    },
    {
        "id": 16202,
        "destination": "MAHON",
        "date": "2015-09-20",
        "image": "MAH1500.jpg",
        "description": "MAHON -  GIRO IN CATAMARANO GIALLO - Luigi da Montichiari BS",
        "price": "\u20ac1,263,00"
    },
    {
        "id": 16203,
        "destination": "BINIBECA",
        "date": "2015-09-20",
        "image": "BIN1500.jpg",
        "description": "BINIBECA -  Villaggio Bianco e visita alla COVA discoteca a picco sul mare - Luigi da Montichiari BS",
        "price": "\u20ac1,263,00"
    },
    {
        "id": 16204,
        "destination": "CIUDADELA",
        "date": "2015-09-20",
        "image": "CIU1500.jpg",
        "description": "CIUDADELA -  ESCURSIONE CON LA RENAULT MEGAN - Luigi da Montichiari BS",
        "price": "\u20ac1,263,00"
    },
    {
        "id": 16205,
        "destination": "FORNELLS",
        "date": "2015-09-20",
        "image": "FOR1500.jpg",
        "description": "FORNELLS - Luigi da Montichiari BS",
        "price": "\u20ac1,263,00"
    },
    {
        "id": 16206,
        "destination": "SON BOU",
        "date": "2015-09-20",
        "image": "SON1500.jpg",
        "description": "SON BOU -  Passeggiata sul Camin de Caballo e spiaggia 5 km - Luigi da Montichiari BS",
        "price": "\u20ac1,263,00"
    },
    {
        "id": 16301,
        "destination": "Italia - EXPO 2015",
        "date": "2015-10-10",
        "image": "exp1510.jpg",
        "description": "RHO",
        "price": "\u20ac79,00"
    },
    {
        "id": 16401,
        "destination": "Brasile 3  - RIO DE JANEIRO - SALVADOR DE BAHIA",
        "date": "2016-01-26",
        "image": "Sao1600.jpg",
        "description": "RIO DE JANEIRO -  ROYAL TULIP ***** - 726 - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16402,
        "destination": "RIO DE JANEIRO",
        "date": "2016-01-26",
        "image": "win1600.jpg",
        "description": "RIO DE JANEIRO -  WINDSOR MARAPENDI ***** - 708 - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16403,
        "destination": "SALVADOR",
        "date": "2016-01-26",
        "image": "SHE1600.jpg",
        "description": "SALVADOR -  Sheraton Bahia Hotel ***** - 812 - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16404,
        "destination": "SAO CONRADO",
        "date": "2016-01-26",
        "image": "ROY1600.jpg",
        "description": "SAO CONRADO - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16405,
        "destination": "CORCOVADO",
        "date": "2016-01-26",
        "image": "CRI1600.jpg",
        "description": "CORCOVADO - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16406,
        "destination": "FORESTA DI TIJUCA - RIO",
        "date": "2016-01-26",
        "image": "FOR1600.jpg",
        "description": "FORESTA DI TIJUCA - RIO - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16407,
        "destination": "Santos Dumont Airport - RIO",
        "date": "2016-01-26",
        "image": "PRO1600.jpg",
        "description": "Santos Dumont Airport - RIO - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16408,
        "destination": "LAPA - RIO",
        "date": "2016-01-26",
        "image": "CAS1600.jpg",
        "description": "LAPA - RIO - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16409,
        "destination": "Guarnaraba Bay",
        "date": "2016-01-26",
        "image": "NIT1600.jpg",
        "description": "Guarnaraba Bay -  suite - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16410,
        "destination": "Barra da Tijuca",
        "date": "2016-01-26",
        "image": "Bar1600.jpg",
        "description": "Barra da Tijuca -  WINDSOR MARAPENDI - 708 - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16411,
        "destination": "Barra da Tijuca - Centro",
        "date": "2016-01-26",
        "image": "Ria1600.jpg",
        "description": "Barra da Tijuca - Centro - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16412,
        "destination": "Prainha Beach e Burle Marx Garden",
        "date": "2016-01-26",
        "image": "Ala1600.jpg",
        "description": "Prainha Beach e Burle Marx Garden - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16413,
        "destination": "Barra da Tijuca",
        "date": "2016-01-26",
        "image": "H_W1600.jpg",
        "description": "Barra da Tijuca - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16414,
        "destination": "Bahia",
        "date": "2016-01-26",
        "image": "Cat1600.jpg",
        "description": "Bahia -  Catussaba Resort - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16415,
        "destination": "Praia do Forte",
        "date": "2016-01-26",
        "image": "Pra1600.jpg",
        "description": "Praia do Forte -  TIVOLI RESORT - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16416,
        "destination": "SALVADOR",
        "date": "2016-01-26",
        "image": "UAU1600.jpg",
        "description": "SALVADOR - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16417,
        "destination": "SALVADOR Yemanja",
        "date": "2016-01-26",
        "image": "Yem1600.jpg",
        "description": "SALVADOR Yemanja - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16418,
        "destination": "SALVADOR rio Vermelho",
        "date": "2016-01-26",
        "image": "OTH1600.jpg",
        "description": "SALVADOR rio Vermelho - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16419,
        "destination": "SALVADOR Pelourinho",
        "date": "2016-01-26",
        "image": "MAM1600.jpg",
        "description": "SALVADOR Pelourinho - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16420,
        "destination": "LISBONA Aeroporto",
        "date": "2016-01-26",
        "image": "Aeroporto.jpg",
        "description": "LISBONA Aeroporto - COLLEGHI DEI CRAL DI MILANO BERGAMO NOVARA E TORINO",
        "price": "\u20ac599,00"
    },
    {
        "id": 16501,
        "destination": "Italia - MILANO",
        "date": "2016-03-08",
        "image": "Gal1600.jpg",
        "description": "MILANO -  Terrazza Martini - MARA CORRADI GIUSEPPE PANZICA CRAL - GIUSY E PATRIZIA",
        "price": "\u20ac45,00"
    },
    {
        "id": 16601,
        "destination": "Capo Verde 3 - Is. BOAVISTA",
        "date": "2016-03-16",
        "image": "Riu1600.jpg",
        "description": "BOAVISTA -  RIU KARAMBOA ***** - 0028 - ANNA E GUIDO DI PARMA",
        "price": "\u20ac2,300,00"
    },
    {
        "id": 16602,
        "destination": "SANTA MONICA - VEHIA",
        "date": "2016-03-16",
        "image": "Smo1600.jpg",
        "description": "SANTA MONICA - VEHIA - ANNA E GUIDO DI PARMA",
        "price": "\u20ac2,300,00"
    },
    {
        "id": 16701,
        "destination": "Italia - SPOTORNO",
        "date": "2016-05-28",
        "image": "Spo1600.jpg",
        "description": "SPOTORNO -  Esperia Htl *** - 408 - Carlo Delaude",
        "price": "\u20ac100,00"
    },
    {
        "id": 16801,
        "destination": "Malta 2 - BUGIBBA  Gozo",
        "date": "2016-06-23",
        "image": "Bug1600.jpg",
        "description": "BUGIBBA -  DOLMEN HTL **** - 222",
        "price": "\u20ac892,00"
    },
    {
        "id": 16802,
        "destination": "GOZO",
        "date": "2016-06-23",
        "image": "Goz1600.jpg",
        "description": "GOZO",
        "price": "\u20ac892,00"
    },
    {
        "id": 16901,
        "destination": "CROCIERA COSTA - I gioielli del BALTICO   675 mil / 1250 km",
        "date": "2016-07-16",
        "image": "Sto1600.jpg",
        "description": "STOCCOLMA -  Costa Luminosa - 1253 Ponte Corallo - Alberto e Angela TORINO , Maria e Giulio  SEREGNO",
        "price": "\u20ac2,500,00"
    },
    {
        "id": 16902,
        "destination": "HELSINKI",
        "date": "2016-07-16",
        "image": "Hel1600.jpg",
        "description": "HELSINKI -  Costa Luminosa - 1253 - Alberto e Angela TORINO , Maria e Giulio  SEREGNO",
        "price": "\u20ac2,500,00"
    },
    {
        "id": 16903,
        "destination": "SPB SAN PIETROBURGO",
        "date": "2016-07-16",
        "image": "SPB1600.jpg",
        "description": "SPB SAN PIETROBURGO -  Costa Luminosa - 1253 - Alberto e Angela TORINO , Maria e Giulio  SEREGNO",
        "price": "\u20ac2,500,00"
    },
    {
        "id": 16904,
        "destination": "TALLINN",
        "date": "2016-07-16",
        "image": "TAL1600.jpg",
        "description": "TALLINN -  Costa Luminosa - 1253 - Alberto e Angela TORINO , Maria e Giulio  SEREGNO",
        "price": "\u20ac2,500,00"
    },
    {
        "id": 16905,
        "destination": "ICE BAR STOCCOLMA",
        "date": "2016-07-16",
        "image": "ICEBAR.jpg",
        "description": "ICE BAR STOCCOLMA -  Costa Luminosa - 1253 Ponte Corallo - Alberto e Angela TORINO , Maria e Giulio  SEREGNO",
        "price": "\u20ac2,500,00"
    },
    {
        "id": 17001,
        "destination": "Italia -NOLI - Festa di Ferragosto",
        "date": "2016-08-14",
        "image": "NOL1600.jpg",
        "description": "NOLI -  da Carlo Delaude - con letti a castello - Gruppo Amici di Carlo Delaude",
        "price": "\u20ac0"
    },
    {
        "id": 17101,
        "destination": "Italia - Sardegna - Santa Clara (Palau)",
        "date": "2016-08-22",
        "image": "IGV1600.jpg",
        "description": "SANTA CLARA -  IGV SANTA CLARA - 335 tugurio sosituita conla 260",
        "price": "\u20ac2,200,00"
    },
    {
        "id": 17201,
        "destination": "Italia - FORLI'",
        "date": "2016-09-14",
        "image": "Forli.jpg",
        "description": "FORLI' -  CASA NUOVA PARCO  FANTINI - Ospiti - Poldo e Gabriella Fantini",
        "price": "\u20ac64,00"
    },
    {
        "id": 17202,
        "destination": "CESENATICO",
        "date": "2016-09-14",
        "image": "CES2000.jpg",
        "description": "CESENATICO - Poldo e Gabriella Fantini",
        "price": "\u20ac64,00"
    },
    {
        "id": 17203,
        "destination": "CASTEL GUELFO (BO)",
        "date": "2016-09-14",
        "image": "CastelGuelfo.jpg",
        "description": "CASTEL GUELFO (BO) - Poldo e Gabriella Fantini",
        "price": "\u20ac64,00"
    },
    {
        "id": 17301,
        "destination": "Jamaica - RUNAWAY BAY",
        "date": "2017-02-05",
        "image": "RUN1700.jpg",
        "description": "RUNAWAY BAY -  GRAN BAHIA PRINCIPE 5* - 12410 - Andrea trescajam@hotmail.com",
        "price": "\u20ac5,058,00"
    },
    {
        "id": 17302,
        "destination": "OCHO RIOS",
        "date": "2017-02-05",
        "image": "OCH1700.jpg",
        "description": "OCHO RIOS - Andrea trescajam@hotmail.com",
        "price": "\u20ac5,058,00"
    },
    {
        "id": 17303,
        "destination": "NEGRIL",
        "date": "2017-02-05",
        "image": "NEG1700.jpg",
        "description": "NEGRIL - Andrea trescajam@hotmail.com",
        "price": "\u20ac5,058,00"
    },
    {
        "id": 17304,
        "destination": "CASE NUOVE - SOMMA LOMBORDO",
        "date": "2017-02-05",
        "image": "holydayinn.jpg",
        "description": "CASE NUOVE - SOMMA LOMBORDO -  HOLIDAY INN +51 eur - 403 - Andrea trescajam@hotmail.com",
        "price": "\u20ac5,058,00"
    },
    {
        "id": 17401,
        "destination": "Italia - PORTO VENERE",
        "date": "1990-07-03",
        "image": "PortoVenere.jpg",
        "description": "Porto Venere in barca -  barca - Gruppo BariSub gamba ingessata",
        "price": "\u20ac0"
    },
    {
        "id": 17501,
        "destination": "Slovenia - PORTOROZ  Pirano - Strugliano",
        "date": "2017-04-27",
        "image": "POR1700.jpg",
        "description": "PORTOROZ -  HOTEL APOLLO **** Superior - Life Class Hotel Portorose - 113 - gruppo Cral con Cristina e Beppe",
        "price": "\u20ac1,360,00"
    },
    {
        "id": 17502,
        "destination": "PIRANO",
        "date": "2017-04-27",
        "image": "PIR1700.jpg",
        "description": "PIRANO -  Trattoria Pri Mari  - Mestna Kavarna x fritto di calamari - gruppo Cral con Cristina e Beppe",
        "price": "\u20ac1,360,00"
    },
    {
        "id": 17503,
        "destination": "STRUGNANO",
        "date": "2017-04-27",
        "image": "STR1700.jpg",
        "description": "STRUGNANO - gruppo Cral con Cristina e Beppe",
        "price": "\u20ac1,360,00"
    },
    {
        "id": 17504,
        "destination": "TRIESTE",
        "date": "2017-04-27",
        "image": "trieste.jpg",
        "description": "TRIESTE - gruppo Cral con Cristina e Beppe",
        "price": "\u20ac1,360,00"
    },
    {
        "id": 17601,
        "destination": "Italia - LOANO  5 (SV)",
        "date": "2017-05-24",
        "image": "villatempodestate.jpg",
        "description": "LOANO -  VILLA TEMPO D'ESTATE ** - 10 - CRAL TENNIS",
        "price": "\u20ac380,00"
    },
    {
        "id": 17701,
        "destination": "Spagna - MINORCA 2",
        "date": "2017-07-08",
        "image": "MIN1700.jpg",
        "description": "MINORCA -  EDEN Village - B 207 blocco B piano 1 - Antonietta e marito GE",
        "price": "\u20ac2,120,00"
    },
    {
        "id": 17801,
        "destination": "Italia - CESENATICO 4",
        "date": "2017-08-14",
        "image": "CES1700.jpg",
        "description": "CESENATICO -  Residence FANTINI - Patronale - POLDO E GABRI - SILVANO LORELLA",
        "price": "\u20ac100,00"
    },
    {
        "id": 17802,
        "destination": "CERVIA",
        "date": "2017-08-14",
        "image": "CERVIA_PortoCanale.jpg",
        "description": "CERVIA - POLDO E GABRI - SILVANO LORELLA",
        "price": "\u20ac100,00"
    },
    {
        "id": 17901,
        "destination": "Spagna - TOUR ANDALUSIA",
        "date": "2017-10-04",
        "image": "SPI1700.jpg",
        "description": "MALAGA -  SOHO BAHIA Htl **** - 304 - \u2026",
        "price": "\u20ac1,566,00"
    },
    {
        "id": 17902,
        "destination": "SIVIGLIA",
        "date": "2017-10-04",
        "image": "SIV1700.jpg",
        "description": "SIVIGLIA -  AYRES - 609 - \u2026",
        "price": "\u20ac1,566,00"
    },
    {
        "id": 17903,
        "destination": "MALAGA",
        "date": "2017-10-04",
        "image": "MAL1700.jpg",
        "description": "MALAGA -  CASTILLA GUERRERO - 504 - \u2026",
        "price": "\u20ac1,566,00"
    },
    {
        "id": 17904,
        "destination": "CORDOVA",
        "date": "2017-10-04",
        "image": "COR1700.jpg",
        "description": "CORDOVA - \u2026",
        "price": "\u20ac1,566,00"
    },
    {
        "id": 17905,
        "destination": "GRANADA",
        "date": "2017-10-04",
        "image": "GRA1700.jpg",
        "description": "GRANADA - \u2026",
        "price": "\u20ac1,566,00"
    },
    {
        "id": 18001,
        "destination": "Italia - LOANO  6 (SV)",
        "date": "2019-05-23",
        "image": "Loano2.jpg",
        "description": "LOANO -  LOANO 2 VILLAGE - A133 - BEACH VOLLEY UNICREDIT - Bagni Virginia",
        "price": "\u20ac306,00"
    },
    {
        "id": 18101,
        "destination": "Italia - Spotorno",
        "date": "2017-10-28",
        "image": "zuninoHtl.jpg",
        "description": "SPOTORNO -  Hotel ZUNINO *** - 107 - \u2026",
        "price": "\u20ac100,00"
    },
    {
        "id": 18201,
        "destination": "OMAN  2   Salalah",
        "date": "2018-02-23",
        "image": "ROT1800.jpg",
        "description": "SALALAH -  ROTANA RESORT +++++ - 1108 - TOLOMELLI/DUILIO \nZACCARI/STEFANIA di Bologna",
        "price": "\u20ac3,114,00"
    },
    {
        "id": 18202,
        "destination": "I CARAIBI DEL MEDIO ORIENTE",
        "date": "2018-02-23",
        "image": "ICA1800.jpg",
        "description": "I CARAIBI DEL MEDIO ORIENTE - TOLOMELLI/DUILIO_x000D_\nZACCARI/STEFANIA di Bologna",
        "price": "\u20ac3,114,00"
    },
    {
        "id": 18203,
        "destination": "SHOPPING A SALALAH",
        "date": "2018-02-23",
        "image": "SHO1800.jpg",
        "description": "SHOPPING A SALALAH - TOLOMELLI/DUILIO_x000D_\nZACCARI/STEFANIA di Bologna",
        "price": "\u20ac3,114,00"
    },
    {
        "id": 18301,
        "destination": "Italia - TORINO Via Farinelli 40/5",
        "date": "2018-04-14",
        "image": "FAR1800.JPG",
        "description": "FARINELLI - MIRAFIORI -  Alloggio Via Farinelli 40/5 TO - 1 piano - primo piano di SAVIGNANO FABRIZIO ex-dipendente di Giusy_x000D_\nsotto la zoccola e figlia",
        "price": "\u20ac1,650,00"
    },
    {
        "id": 18401,
        "destination": "Italia - OULX",
        "date": "2018-06-30",
        "image": "oul1800.jpg",
        "description": "OULX -  Casa Longo Virginia - cucina divano letto - GIGI E VIRGINA, ORSO E LIANA",
        "price": "\u20ac23,00"
    },
    {
        "id": 18501,
        "destination": "Italia - SARDEGNA S. GIUSTA",
        "date": "2018-07-14",
        "image": "igv_santa_giusta.jpg",
        "description": "SARDEGNA SANTA GIUSTA -  IGV Santa Giusta - cottage 424 - Isabella Beraudo - Silvia Morello e i gemelli di 2 anni Ricky e Ale",
        "price": "\u20ac2,710,00"
    },
    {
        "id": 18601,
        "destination": "Italia - Noli 4",
        "date": "2018-08-14",
        "image": "NOL1500.JPG",
        "description": "NOLI -  casa Delaude - camera degli Ospiti - Carlo e Lalla Delaude FESTA della Musica",
        "price": "\u20ac27,70"
    },
    {
        "id": 18701,
        "destination": "Italia - CESENATICO 5",
        "date": "2018-08-24",
        "image": "CES1700.JPG",
        "description": "CESENATICO -  casa Fantini - camera ospiti - Poldo Gabriella Silvano Lorella",
        "price": "\u20ac217,30"
    },
    {
        "id": 18801,
        "destination": "Italia - MARISPICA2 (RG)",
        "date": "2018-09-01",
        "image": "MARI1800.JPG",
        "description": "Marispica -  IGV Marispica - 129 - \u2026",
        "price": "\u20ac1,680,00"
    },
    {
        "id": 18802,
        "destination": "SIRACUSA",
        "date": "2018-09-01",
        "image": "SIR1800.JPG",
        "description": "SIRACUSA - \u2026",
        "price": "\u20ac1,680,00"
    },
    {
        "id": 18803,
        "destination": "NOTO",
        "date": "2018-09-01",
        "image": "NOT1800.JPG",
        "description": "NOTO - \u2026",
        "price": "\u20ac1,680,00"
    },
    {
        "id": 18804,
        "destination": "POZZALLO",
        "date": "2018-09-01",
        "image": "POZ1800.JPG",
        "description": "POZZALLO - \u2026",
        "price": "\u20ac1,680,00"
    },
    {
        "id": 18901,
        "destination": "ISRAELE - Tour classico",
        "date": "2018-10-09",
        "image": "TEL1800.JPG",
        "description": "TEL AVIV -  TAL by the beach - 305 - Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18902,
        "destination": "GALILEA",
        "date": "2018-10-09",
        "image": "CES1800.JPG",
        "description": "GALILEA -  KIBBUTS LAVI - 516 - Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18903,
        "destination": "GALILEA",
        "date": "2018-10-09",
        "image": "SAF1800.JPG",
        "description": "GALILEA -  KIBBUTZ LAVI - 516 - Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18904,
        "destination": "NAZARETH BEITH SHEAN QUMRAN - MAR MORTO",
        "date": "2018-10-09",
        "image": "NAZ1800.JPG",
        "description": "NAZARETH BEITH SHEAN QUMRAN - MAR MORTO - Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18905,
        "destination": "DAVID HTL - MASADA - GERUSALEMME",
        "date": "2018-10-09",
        "image": "MAR1800.JPG",
        "description": "DAVID HTL - MASADA - GERUSALEMME -  DAVID DEAD SEA RESORT & SPA - 432 - Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18906,
        "destination": "GERUSALEMME Knesset Museo Israele Mkt YEHUDA MEMORIALE OLOCAUSTO",
        "date": "2018-10-09",
        "image": "MUR1800.JPG",
        "description": "GERUSALEMME Parlamento Museo Mercato YEHUDA Memoriale OLOCAUSTO -  QUARTIERE EBRAICO SPANISH HOUSE -  Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18907,
        "destination": "BETLEMME",
        "date": "2018-10-09",
        "image": "BET1800.JPG",
        "description": "BETLEMME -  SPANISH HOUSE IN JERUSALEM - Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18908,
        "destination": "MTE ULIVI GIARDINO GEZZEMANI S.SEPOLCRO MURO DEL PIANTO VIA DOLOROSA",
        "date": "2018-10-09",
        "image": "MTE1800.JPG",
        "description": "MTE ULIVI GIARDINO GEZZEMANI S.SEPOLCRO MURO DEL PIANTO VIA DOLOROSA -  SPANISH HOUSE IN JERUSALEM - Luciana Malatesta - Silvia Cuniberti 1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 18909,
        "destination": "GERUSALEMME Spianata delle MOSCHEE",
        "date": "2018-10-09",
        "image": "SPI1800.JPG",
        "description": "GERUSALEMME SPIANATA MOSCHEE  1 EUR = 4,2070 ILS",
        "price": "\u20ac2,760,00"
    },
    {
        "id": 19001,
        "destination": "Maldive 13 - BIYADHOO - Atollo Male Sud",
        "date": "2019-01-31",
        "image": "BIY1900.JPG",
        "description": "Biyadhoo Island -  Biyadhoo Resort - 53 - POLDO FANTINI E GABRIELLA, MIRKO E LAURA PD",
        "price": "\u20ac5,500,00"
    },
    {
        "id": 19101,
        "destination": "MAROCCO - Tour Citt\u00e0 Imperiali",
        "date": "2019-05-04",
        "image": "CAS1900.JPG",
        "description": "CASABLANCA -  KENZI TOWER - 2202 - Cuniberti Silvia Bonanno Silvano",
        "price": "\u20ac2,028,00"
    },
    {
        "id": 19102,
        "destination": "RABAT",
        "date": "2019-05-04",
        "image": "RAB1900.JPG",
        "description": "RABAT -  FARAH HOTEL 5 - 121 - Cuniberti Silvia Bonanno Silvano",
        "price": "\u20ac2,028,00"
    },
    {
        "id": 19103,
        "destination": "MEKNES - VOLUBILIS",
        "date": "2019-05-04",
        "image": "MEK1900.JPG",
        "description": "MEKNES - VOLUBILIS - Cuniberti Silvia Bonanno Silvano",
        "price": "\u20ac2,028,00"
    },
    {
        "id": 19104,
        "destination": "FEZ",
        "date": "2019-05-04",
        "image": "FEZ1900.JPG",
        "description": "FEZ -  HTL PALAIS MEDINA - 423 - Cuniberti Silvia Bonanno Silvano",
        "price": "\u20ac2,028,00"
    },
    {
        "id": 19105,
        "destination": "BENI MELLAL",
        "date": "2019-05-04",
        "image": "BEN1900.JPG",
        "description": "BENI MELLAL -  Restaurant RIM ATLAS - Cuniberti Silvia Bonanno Silvano",
        "price": "\u20ac2,028,00"
    },
    {
        "id": 19106,
        "destination": "MARRAKECH",
        "date": "2019-05-04",
        "image": "MAR1900.JPG",
        "description": "MARRAKECH -  ATLAS MEDINA & SPA 5* - 435 - Cuniberti Silvia Bonanno Silvano",
        "price": "\u20ac2,028,00"
    },
    {
        "id": 19107,
        "destination": "CASABLANCA",
        "date": "2019-05-04",
        "image": "CAS1900.JPG",
        "description": "CASABLANCA -  KENZI TOWER - 1208 - Cuniberti Silvia Bonanno Silvano",
        "price": "\u20ac2,028,00"
    },
    {
        "id": 19201,
        "destination": "CRACOVIA - Polonia",
        "date": "2019-07-13",
        "image": "CRA1900.JPG",
        "description": "CRACOVIA -  ATRIUM - 306 - solo noi 2",
        "price": "\u20ac950,00"
    },
    {
        "id": 19202,
        "destination": "AUSCHWITZ",
        "date": "2019-07-13",
        "image": "AUS1900.JPG",
        "description": "AUSCHWITZ - OSWIECIM - solo noi 2",
        "price": "\u20ac950,00"
    },
    {
        "id": 19203,
        "destination": "WIELICZKA",
        "date": "2019-07-13",
        "image": "MIN1900.JPG",
        "description": "WIELICZKA - solo noi 2",
        "price": "\u20ac950,00"
    },
    {
        "id": 19301,
        "destination": "Italia  - Valtournanche Cervinia",
        "date": "2019-07-27",
        "image": "MuraillesHtl.jpg",
        "description": "Valtournanche -  Grandes Murailles - 2 - \u2026",
        "price": "\u20ac82,00"
    },
    {
        "id": 19401,
        "destination": "Italia - CESENATICO 6",
        "date": "2019-08-14",
        "image": "CES1700.JPG",
        "description": "CESENATICO -  FANTINI Residence - Patronale - Gabriella e Poldo, Lorella e Silvano",
        "price": "\u20ac100,00"
    },
    {
        "id": 19501,
        "destination": "Svizzera 2 - BERNA - SPIEZ - THUN",
        "date": "2019-10-05",
        "image": "BER1900.JPG",
        "description": "BERNA -  escursione in treno da Domodossola - .. - Eductour con GRUPPO FITEL Salvatore e Pina",
        "price": "\u20ac20,00"
    },
    {
        "id": 19502,
        "destination": "SPIEZ",
        "date": "2019-10-05",
        "image": "SPI1900.JPG",
        "description": "SPIEZ - Eductour con GRUPPO FITEL Salvatore e Pina",
        "price": "\u20ac20,00"
    },
    {
        "id": 19503,
        "destination": "THUN",
        "date": "2019-10-05",
        "image": "BLS1900.JPG",
        "description": "THUN -  htl Frejenhof - Eductour con GRUPPO FITEL Salvatore e Pina",
        "price": "\u20ac20,00"
    },
    {
        "id": 19504,
        "destination": "DOMODOSSOLA",
        "date": "2019-10-05",
        "image": "Domodossola19.jpg",
        "description": "DOMODOSSOLA - Eductour con GRUPPO FITEL Salvatore e Pina",
        "price": "\u20ac20,00"
    },
    {
        "id": 19601,
        "destination": "EGITTO 19 - Sharm el sheikh e santa Caterina",
        "date": "2019-11-17",
        "image": "SHA1908.JPG",
        "description": "SOMMA LOMBARDO -  HOLIDAY INN express - 111 - gruppo FANTINI e Fuzzi",
        "price": "\u20ac2,080,00"
    },
    {
        "id": 19602,
        "destination": "NABQ",
        "date": "2019-11-17",
        "image": "TamraVillage.jpg",
        "description": "NABQ -  EDEN VILLAGE TAMRA - 5126 - gruppo FANTINI e Fuzzi",
        "price": "\u20ac2,080,00"
    },
    {
        "id": 19603,
        "destination": "NAAMA BAY e SOHO QUARE",
        "date": "2019-11-17",
        "image": "NAA1900.JPG",
        "description": "NAAMA BAY e SOHO QUARE - gruppo FANTINI e Fuzzi",
        "price": "\u20ac2,080,00"
    },
    {
        "id": 19604,
        "destination": "SANTA CATERINA E DAHAB",
        "date": "2019-11-17",
        "image": "SAN1900.JPG",
        "description": "SANTA CATERINA E DAHAB -  ALADIN Ristorante - gruppo FANTINI e Fuzzi",
        "price": "\u20ac2,080,00"
    },
    {
        "id": 19605,
        "destination": "SHARM EL SHEIKH",
        "date": "2019-11-17",
        "image": "SHA1900.JPG",
        "description": "SHARM EL SHEIKH - gruppo FANTINI e Fuzzi",
        "price": "\u20ac2,080,00"
    },
    {
        "id": 19701,
        "destination": "Foresta Nera - Germania 4 e Svizzera 3",
        "date": "2019-12-14",
        "image": "GOT1900.JPG",
        "description": "SAN GOTTARDO TUNNEL 16,9 KM -  verso Fruburg - Gruppo Cral",
        "price": "\u20ac530,00"
    },
    {
        "id": 19702,
        "destination": "FRIBURGO",
        "date": "2019-12-14",
        "image": "FRI1900.JPG",
        "description": "FRIBURGO - Gruppo Cral",
        "price": "\u20ac530,00"
    },
    {
        "id": 19703,
        "destination": "TRIBERG",
        "date": "2019-12-14",
        "image": "TRI1900.JPG",
        "description": "TRIBERG -  BEST WESTERN HTL *** - 08 1 piano - Gruppo Cral",
        "price": "\u20ac530,00"
    },
    {
        "id": 19704,
        "destination": "SCHONABACH \u2013 FURTWANGEN - RAVENNASCHLUCHT",
        "date": "2019-12-14",
        "image": "RAV1900.JPG",
        "description": "SCHONABACH \u2013 FURTWANGEN - RAVENNASCHLUCHT - Gruppo Cral",
        "price": "\u20ac530,00"
    },
    {
        "id": 19705,
        "destination": "BASILEA",
        "date": "2019-12-14",
        "image": "BAS1900.JPG",
        "description": "BASILEA - Gruppo Cral",
        "price": "\u20ac530,00"
    },
    {
        "id": 19801,
        "destination": "Italia  -  Finale Ligure",
        "date": "2020-06-18",
        "image": "FIN2000.JPG",
        "description": "FINALE LIGURE -  SAVOIA *** - 33 - cognati Graziella e Secondo e Matteo e Noah",
        "price": "\u20ac110,00"
    },
    {
        "id": 19901,
        "destination": "Italia ROMAGNA E UMBRIA",
        "date": "2020-07-02",
        "image": "CES2000.JPG",
        "description": "CESENATICO -  dai FANTINI - patronale - TAVOLO DA 8 e Anna Turco e Paolo Franceschini",
        "price": "\u20ac314,00"
    },
    {
        "id": 19902,
        "destination": "SPOLETO",
        "date": "2020-07-02",
        "image": "CAS2000.JPG",
        "description": "SPOLETO -  Agriturismp Casale Fusco - 2 - TAVOLO DA 8 e Anna Turco e Paolo Franceschini",
        "price": "\u20ac314,00"
    },
    {
        "id": 19903,
        "destination": "CITTA DI CASTELLO",
        "date": "2020-07-02",
        "image": "CIT2000.JPG",
        "description": "CITTA DI CASTELLO -  GARDEN **** - 409 Superior _x000D_\n63 eur e 10 piscina - TAVOLO DA 8 e Anna Turco e Paolo Franceschini",
        "price": "\u20ac314,00"
    },
    {
        "id": 19904,
        "destination": "COMENTINA AR",
        "date": "2020-07-02",
        "image": "comentina2019.png",
        "description": "COMENTINA AR -  chez moi - TAVOLO DA 8 e Anna Turco e Paolo Franceschini",
        "price": "\u20ac314,00"
    },
    {
        "id": 20001,
        "destination": "Italia - LIMONE PIEMONTE (CN)",
        "date": "2020-07-21",
        "image": "LimonePiemonte.jpg",
        "description": "LIMONE PIEMONTE -  Casa Canonica S. Pietro - 2 - MI E TI",
        "price": "\u20ac135,00"
    },
    {
        "id": 20101,
        "destination": "Italia - Biella SANDIGLIANO Oropa  (BI)",
        "date": "2020-08-06",
        "image": "SAN2000.JPG",
        "description": "SANDIGLIANO -  SANTO STEFANO SPA RELAIS - 118 - regalo dei  miei colleghi 10",
        "price": "\u20ac0"
    },
    {
        "id": 20201,
        "destination": "Italia - CESENATICO  (FC)",
        "date": "2020-08-31",
        "image": "fiorita_residence.jpg",
        "description": "Cesenatico -  Fiorita Residence - 408 - Antonella e Nirvaldo",
        "price": "\u20ac900,00"
    },
    {
        "id": 20202,
        "destination": "Ravenna e Castelguelfo",
        "date": "2020-08-31",
        "image": "CES2100.JPG",
        "description": "Ravenna e Castelguelfo - Antonella e Nirvaldo",
        "price": "\u20ac900,00"
    },
    {
        "id": 20203,
        "destination": "Rimini e Longiano",
        "date": "2020-08-31",
        "image": "Longiano.jpg",
        "description": "Rimini e Longiano - Antonella e Nirvaldo",
        "price": "\u20ac900,00"
    },
    {
        "id": 20301,
        "destination": "Italia  - Loano 7",
        "date": "2021-05-04",
        "image": "Villa_Lina.jpg",
        "description": "LOANO -  VILLA LINA  *** 63 Euro - 20 terzo piano - Dina Giampi e Roberta il mercoledi",
        "price": "\u20ac200,00"
    },
    {
        "id": 20401,
        "destination": "Italia  - Loano 8",
        "date": "2021-07-03",
        "image": "Loano2.jpg",
        "description": "LOANO -  loano2 village - 450 E - Visita di Marco Musso e Fernanda",
        "price": "\u20ac1,975,00"
    },
    {
        "id": 20501,
        "destination": "Italia  - Entracque CN",
        "date": "2021-08-12",
        "image": "Entracque.jpg",
        "description": "ENTRACQUE -  Marco e Fernanda - . - MARCO MUSSO E FERNANDA",
        "price": "\u20ac50,00"
    },
    {
        "id": 20502,
        "destination": "TERME DI VALDIERI",
        "date": "2021-08-12",
        "image": "CasaSavoia.jpg",
        "description": "TERME DI VALDIERI -  casa SAVOIA - MARCO MUSSO E FERNANDA",
        "price": "\u20ac50,00"
    },
    {
        "id": 20601,
        "destination": "Italia MARCHE ROMAGNA E VENETO",
        "date": "2021-09-02",
        "image": "CIV2100.JPG",
        "description": "CIITANOVA MARCHE -  Chiaraluna *** - 310 - Poldo e Gabri",
        "price": "\u20ac960,00"
    },
    {
        "id": 20602,
        "destination": "CESENATICO",
        "date": "2021-09-02",
        "image": "CES2100.JPG",
        "description": "CESENATICO -  dai FANTINI - patronale - Poldo e Gabri",
        "price": "\u20ac960,00"
    },
    {
        "id": 20603,
        "destination": "PADOVA",
        "date": "2021-09-02",
        "image": "PAD2100.JPG",
        "description": "PADOVA -  GIOTTO *** - 103 - Poldo e Gabri",
        "price": "\u20ac960,00"
    },
    {
        "id": 20604,
        "destination": "VENEZIA",
        "date": "2021-09-02",
        "image": "VEN2100.JPG",
        "description": "VENEZIA - Poldo e Gabri",
        "price": "\u20ac960,00"
    },
    {
        "id": 20701,
        "destination": "Italia  - NAPOLI",
        "date": "2021-10-12",
        "image": "NAP2100.JPG",
        "description": "NAPOLI -  DELCO NAPLES appartments - 13 - \u2026",
        "price": "\u20ac281,63"
    },
    {
        "id": 20801,
        "destination": "EGITTO 20 - Sharm el Sheikh  NAAMA Bay",
        "date": "2021-11-14",
        "image": "NAA2100.JPG",
        "description": "NAAMA BAY -  PROMENADE BEACH RESORT by Accor ex Marriot **** - 184 - Lorella e Silvano Rossi",
        "price": "\u20ac1,266,84"
    },
    {
        "id": 20802,
        "destination": "SOMMA LOMBARDO",
        "date": "2021-11-14",
        "image": "IDEA_HTL.jpg",
        "description": "SOMMA LOMBARDO -  IDEA Hotel Milano Malpensa - 11 - Lorella e Silvano Rossi",
        "price": "\u20ac1,266,84"
    },
    {
        "id": 20901,
        "destination": "Italia  -  ALASSIO 2",
        "date": "2021-12-13",
        "image": "ALA2100.JPG",
        "description": "ALASSIO -  MIGNON *** - 7 - \u2026",
        "price": "\u20ac50,00"
    },
    {
        "id": 21001,
        "destination": "Italia  -  ALASSIO 3",
        "date": "2021-12-30",
        "image": "ALA2200.JPG",
        "description": "ALASSIO -  Corso Alaxi Hotels_x000D_\n **** - 109 COMFORT - con cenone di capodanno 100 eur_x000D_\nnotte1 72 eur notte2 120",
        "price": "\u20ac294,00"
    },
    {
        "id": 21101,
        "destination": "Italia  -  Finale Ligure 2",
        "date": "2022-01-12",
        "image": "InternazionaleHtl.jpg",
        "description": "FINALE LIGURE -  INTERNAZIONALE - 218 (non 219) - \u2026",
        "price": "\u20ac130,64"
    },
    {
        "id": 21201,
        "destination": "Italia  -  ALASSIO 4",
        "date": "2022-02-01",
        "image": "htl__Danio_Alassio.jpg",
        "description": "ALASSIO -  Hotel Danio Lungomare *** - 23 vista mare upgrade da 34 Mansardavista mare - \u2026",
        "price": "\u20ac74,00"
    },
    {
        "id": 21301,
        "destination": "Spagna - Tenerife Costa Adeje",
        "date": "2022-02-22",
        "image": "TEN2200.jpg",
        "description": "TENERIFE -  Complejo Mareverde - A4 - Lorella e Silvano Rossi",
        "price": "\u20ac230,00"
    },
    {
        "id": 21302,
        "destination": "TOUR TEIDE",
        "date": "2022-02-22",
        "image": "Tour_Teide.jpg",
        "description": "TOUR TEIDE - Lorella e Silvano Rossi",
        "price": "\u20ac230,00"
    },
    {
        "id": 21401,
        "destination": "Italia  -  ALASSIO 5",
        "date": "2022-05-03",
        "image": "RivaHtl.jpg",
        "description": "ALASSIO -  RIVA \u00b0\u00b0\u00b0\u00b0\u00b0 - 211 - Hotel storico,ex \"Hotel Ambassador",
        "price": "\u20ac124,20"
    },
    {
        "id": 21501,
        "destination": "Italia - Loano 10",
        "date": "2022-05-26",
        "image": "LOA1200.JPG",
        "description": "LOANO -  CONCORDIA *** - 210 - Mauro Franco Bessone Seguso e Lina",
        "price": "\u20ac325,60"
    },
    {
        "id": 21601,
        "destination": "GRECIA 6 - Corf\u00f9 -Cavos",
        "date": "2022-06-30",
        "image": "COR2200.JPG",
        "description": "Cavos -  Cavomarina Beach - Adults Only **** - 126 - \u2026",
        "price": "\u20ac1,560,00"
    },
    {
        "id": 21701,
        "destination": "Italia - Loano 11 - Pietra Ligure",
        "date": "2022-06-14",
        "image": "AiPozziVillage.JPG",
        "description": "Loano POZZI -  Ai Pozzi Village Hotel & Resort - A106 Palazzina Blu - Immobiliaristi Alessandro Rocco, Costruttore Sergio Rosso e Grivetto 3479765266",
        "price": "\u20ac189,66"
    },
    {
        "id": 21702,
        "destination": "Pietra Ligure - Borgo degli Ulivi",
        "date": "2022-06-14",
        "image": "BorgoUlivi.JPG",
        "description": "Pietra Ligure - Borgo degli Ulivi -  Residence Borgo degli Ulivi - Monolocale 37 con terrazzo vista mare - Immobiliaristi Alessandro Rocco, Costruttore Sergio Rosso e Grivetto 3479765266",
        "price": "\u20ac189,66"
    },
    {
        "id": 21801,
        "destination": "Italia - CESENATICO  (FC)",
        "date": "2022-08-29",
        "image": "CES2200.JPG",
        "description": "CESENATICO -  BLUE HOTEL  xxx - 102 - Poldo e Gabriella Compleanno Patrizia",
        "price": "\u20ac212,00"
    },
    {
        "id": 21901,
        "destination": "Italia - Loano 12",
        "date": "2022-09-20",
        "image": "ConcordiaHtl.jpg",
        "description": "LOANO -  Concordia - 210 - Baudino Fabrizio SognoCasa Ubaldo Cianci Imm.Intese",
        "price": "\u20ac100,00"
    },
    {
        "id": 22001,
        "destination": "Italia - Loano 13",
        "date": "2022-09-27",
        "image": "Concordia1Htl.jpg",
        "description": "LOANO -  CONCORDIA *** - 206 - Rochina Ubaldo CIANCI Graziella e Secondo",
        "price": "\u20ac87,00"
    },
    {
        "id": 22101,
        "destination": "Italia - Loano 14",
        "date": "2022-10-18",
        "image": "AiPozziVillage.jpg",
        "description": "LOANO -  POZZI - 101 - visita a Marco e Fernanda",
        "price": "\u20ac85,00"
    },
    {
        "id": 22201,
        "destination": "EGITTO 20 - Sharm el Sheikh  Reef Oasis",
        "date": "2022-11-06",
        "image": "SHA2200.JPG",
        "description": "SHARM EL SHEIKH -  OASYS - 7370 - \u2026\u2026",
        "price": "\u20ac3,260,00"
    },
    {
        "id": 22301,
        "destination": "Spagna - LANZAROTE e Isla Graciosa",
        "date": "2023-03-22",
        "image": "LAN2300.jpg",
        "description": "PUERTO DEL CARMEN -  Jazmin, Los Dises - 4 - \u2026",
        "price": "\u20ac249,00"
    },
    {
        "id": 22302,
        "destination": "ISLA GRACIOSA",
        "date": "2023-03-22",
        "image": "ISL2300.jpg",
        "description": "ISLA GRACIOSA - \u2026",
        "price": "\u20ac249,00"
    },
    {
        "id": 22401,
        "destination": "Giordania - Tour nella Terra dei profeti",
        "date": "2023-09-10",
        "image": "AMM2300.jpg",
        "description": "AMMAN -  MOVENPICK ***** - 907 - Cipollin Enrico e Valeria,",
        "price": "\u20ac1,650,00"
    },
    {
        "id": 22402,
        "destination": "PETRA Wadi Musa",
        "date": "2023-09-10",
        "image": "PET2300.jpg",
        "description": "PETRA Wadi Musa -  HAYAT ZAMAN ***** - 715 - Cipollin Enrico e Valeria,",
        "price": "\u20ac1,650,00"
    },
    {
        "id": 22403,
        "destination": "WADI RUM",
        "date": "2023-09-10",
        "image": "WAD2300.jpg",
        "description": "WADI RUM -  Al SULTANA Luxury Camp ****** - 109 - Cipollin Enrico e Valeria,",
        "price": "\u20ac1,650,00"
    },
    {
        "id": 22404,
        "destination": "DEAD SEA",
        "date": "2023-09-10",
        "image": "DEA2300.jpg",
        "description": "DEAD SEA -  CROWN PAZA ***** - 1605 - Cipollin Enrico e Valeria,",
        "price": "\u20ac1,650,00"
    },
    {
        "id": 22501,
        "destination": "Spagna - MADRID e Toledo",
        "date": "2024-05-07",
        "image": "MAD2400.JPG",
        "description": "MADRID -  GRAN VIA CENTRO Madrid Alonso Martinez - sotano (topaia) derecho - chiave con codce al Market Cafe 24h Antonella Turri mai vista",
        "price": "\u20ac217,00"
    },
    {
        "id": 22502,
        "destination": "TOLEDO",
        "date": "2024-05-07",
        "image": "TOL2400.JPG",
        "description": "TOLEDO -  giro in trenino e visita alla Cattedrale - chiave con codce al Market Cafe 24h Antonella Turri mai vista",
        "price": "\u20ac217,00"
    },
    {
        "id": 22601,
        "destination": "Italia - Puglia e Basilicata",
        "date": "2024-06-18",
        "image": "SSA2400.JPG",
        "description": "TORRE SANTA SABINA (BR) -  ALLOGGIO VACANZE POLDO - 2 - Fantini Poldo e Gabriella x 4 gg poi da soli",
        "price": "\u20ac298,00"
    },
    {
        "id": 22602,
        "destination": "TARANTO (TA)",
        "date": "2024-06-18",
        "image": "TAR2400.JPG",
        "description": "TARANTO (TA) -  pranzo lungomare di Taranto - Fantini Poldo e Gabriella x 4 gg poi da soli",
        "price": "\u20ac298,00"
    },
    {
        "id": 22603,
        "destination": "MATERA (PZ)",
        "date": "2024-06-18",
        "image": "MAT2400.JPG",
        "description": "MATERA (PZ) -  My Home - 5 piano di 8 - Fantini Poldo e Gabriella x 4 gg poi da soli",
        "price": "\u20ac298,00"
    },
    {
        "id": 22604,
        "destination": "BRINDISI (BR)",
        "date": "2024-06-18",
        "image": "BRI2400.JPG",
        "description": "BRINDISI (BR) -  Verso Oriente - 6 - Fantini Poldo e Gabriella x 4 gg poi da soli",
        "price": "\u20ac298,00"
    },
    {
        "id": 22701,
        "destination": "MSC Crociera ai Caraibi e Antille",
        "date": "2025-01-25",
        "image": "Gua2500.jpg",
        "description": "POINT A PITRE Guadalupe -  Gosier beach 4,80 euro x pullman 41 - 10026 - CRAL UNICREDIT Dimitri e Andrea",
        "price": "\u20ac5,420,00"
    },
    {
        "id": 22702,
        "destination": "NAVIGAZIONE",
        "date": "2025-01-25",
        "image": "msc_Virtuosa.jpg",
        "description": "NAVIGAZIONE -  MSC VIRTUOSA - 10026 - CRAL UNICREDIT Dimitri e Andrea",
        "price": "\u20ac5,420,00"
    },
    {
        "id": 22703,
        "destination": "PHILIPSBURG St. Maarten",
        "date": "2025-01-25",
        "image": "ST_MAARTEN_MAHUI.jpg",
        "description": "PHILIPSBURG St. Maarten -  MAHO beach_x000D_\ntaxi 37 euro - 10026 - CRAL UNICREDIT Dimitri e Andrea",
        "price": "\u20ac5,420,00"
    },
    {
        "id": 22704,
        "destination": "ST. JOHN'S Antigua e Barbuda",
        "date": "2025-01-25",
        "image": "ANTIGUA_Church_bay.jpg",
        "description": "ST. JOHN'S Antigua e Barbuda -  CHURCH BAY 20 euro in taxi_x000D_\nThe Next - beach bar_x000D_\n20 Euro 2 lettini e ombrellone_x000D_\ntaxi 20+20 euro - 10026 - CRAL UNICREDIT Dimitri e Andrea",
        "price": "\u20ac5,420,00"
    },
    {
        "id": 22705,
        "destination": "BASSETERRE St Kitts & Nevis",
        "date": "2025-01-25",
        "image": "stKitts_Basseterre.jpg",
        "description": "BASSETERRE St Kitts & Nevis -  Frigate Bay 28 euro in taxi_x000D_\nZanzi bar 10 euro x 2 lettini - 10026 - CRAL UNICREDIT Dimitri e Andrea",
        "price": "\u20ac5,420,00"
    },
    {
        "id": 22706,
        "destination": "ROAD TOWN (Tortola) British Virgin Islands",
        "date": "2025-01-25",
        "image": "msc_porto.jpg",
        "description": "ROAD TOWN (Tortola) British Virgin Islands -  MSC VIRTUOSA ponte 10 - 10026 - CRAL UNICREDIT Dimitri e Andrea",
        "price": "\u20ac5,420,00"
    },
    {
        "id": 22707,
        "destination": "FORTE DE FRANCE Martinica",
        "date": "2025-01-25",
        "image": "Point_a_Pitre2025-01-26.jpg",
        "description": "FORTE DE FRANCE Martinica -  MSC VIRTUOSA ponte 10 - 10026 - CRAL UNICREDIT Dimitri e Andrea",
        "price": "\u20ac5,420,00"
    },
    {
        "id": 22801,
        "destination": "TREKKING EGADI  Riserva Zingaro TRAPANI Erice",
        "date": "2025-05-17",
        "image": "MAR2500.jpg",
        "description": "MARETTIMO ISOLA -  Albergo diffuso ex case dei pescatori - 1 singola con bagno privato in corridoio - gruppo unicredit di 19 pax et\u00e0 media 65 anni giovane 38 anni vecchio 76 anni",
        "price": "\u20ac465,00"
    },
    {
        "id": 22802,
        "destination": "LEVANZO ISOLA",
        "date": "2025-05-17",
        "image": "LEV2500.jpg",
        "description": "LEVANZO ISOLA -  Grotta del Genovese 18 eur - gruppo unicredit di 19 pax et\u00e0 media 65 anni giovane 38 anni vecchio 76 anni",
        "price": "\u20ac465,00"
    },
    {
        "id": 22803,
        "destination": "FAVIGNANA ISOLA",
        "date": "2025-05-17",
        "image": "FAV2500.jpg",
        "description": "FAVIGNANA ISOLA -  BOOGANVILLE *** - 112 - gruppo unicredit di 19 pax et\u00e0 media 65 anni giovane 38 anni vecchio 76 anni",
        "price": "\u20ac465,00"
    },
    {
        "id": 22804,
        "destination": " R.N.O. ZINGARO  (TP)",
        "date": "2025-05-17",
        "image": "ZIN2500.jpg",
        "description": " R.N.O. ZINGARO  (TP) -  17 KM da Sud a Nord - gruppo unicredit di 19 pax et\u00e0 media 65 anni giovane 38 anni vecchio 76 anni",
        "price": "\u20ac465,00"
    },
    {
        "id": 22805,
        "destination": "TRAPANI",
        "date": "2025-05-17",
        "image": "TPS2500.jpg",
        "description": "TRAPANI -  Albergo Maccotta * - 208 - gruppo unicredit di 19 pax et\u00e0 media 65 anni giovane 38 anni vecchio 76 anni",
        "price": "\u20ac465,00"
    },
    {
        "id": 22806,
        "destination": "ERICE",
        "date": "2025-05-17",
        "image": "ERI2500.jpg",
        "description": "ERICE - gruppo unicredit di 19 pax et\u00e0 media 65 anni giovane 38 anni vecchio 76 anni",
        "price": "\u20ac465,00"
    },
    {
        "id": 22901,
        "destination": "SHARM EL SHEICK Egitto",
        "date": "2025-10-26",
        "image": "SHA2500.jpg",
        "description": "CORAL BAY -  Domina Sultan - 51 009 - Poldo Gabriella Silvano e Lorella",
        "price": "\u20ac1,870,00"
    },
    {
        "id": 23001,
        "destination": "NEW  YORK Stati Uniti",
        "date": "2025-12-03",
        "image": "MAN2500.jpg",
        "description": "MANHATTAN 10019 NEW YORK -  FAIRFIELD by Marriot 538 W 58th - 416 - gruppo di Bg Bs e Cristina di  La Spezia",
        "price": "\u20ac3,870,00"
    },
    {
        "id": 23002,
        "destination": "Lower Manhattan giorno 2",
        "date": "2025-12-03",
        "image": "WAL2500.jpg",
        "description": "Lower Manhattan giorno 2 -  WALL STREET - OCULOS di Calatrava Grand Zero - giorno 2 - gruppo di Bg Bs e Cristina di  La Spezia",
        "price": "\u20ac3,870,00"
    },
    {
        "id": 23003,
        "destination": "EMPIRE STATE BUILDING Bibliotecaa Pubblica",
        "date": "2025-12-03",
        "image": "EMP2500.jpg",
        "description": "EMPIRE STATE BUILDING Bibliotecaa Pubblica -  EMPIRE STATE BUILDING - giorno 2 - gruppo di Bg Bs e Cristina di  La Spezia",
        "price": "\u20ac3,870,00"
    },
    {
        "id": 23004,
        "destination": "BRONX, QUEENS E BROOKLYN",
        "date": "2025-12-03",
        "image": "BRO2500.jpg",
        "description": "BRONX, QUEENS E BROOKLYN -  passeggiata Ponte di BROOKLIN - giorno 3 - gruppo di Bg Bs e Cristina di  La Spezia",
        "price": "\u20ac3,870,00"
    },
    {
        "id": 23005,
        "destination": "Time Square Gran Central Terminal CENTRAL PARK",
        "date": "2025-12-03",
        "image": "TIM2500.jpg",
        "description": "Time Square Gran Central Terminal CENTRAL PARK - giorno 4 - gruppo di Bg Bs e Cristina di  La Spezia",
        "price": "\u20ac3,870,00"
    },
    {
        "id": 23006,
        "destination": "HARLEM",
        "date": "2025-12-03",
        "image": "HAR2500.jpg",
        "description": "HARLEM - giorno 5 - gruppo di Bg Bs e Cristina di  La Spezia",
        "price": "\u20ac3,870,00"
    }
];


// Helper to format date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('it-IT', options);
    } catch (e) {
        return dateString;
    }
};

// Sort trips by date (ascending)
const sortedTrips = trips.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (isNaN(dateA)) return 1;
    if (isNaN(dateB)) return -1;
    return dateA - dateB;
});

const tripsList = document.getElementById('trips-list');
const modal = document.getElementById('trip-modal');
const closeModalBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

// Modal Elements
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-destination');
const modalDate = document.getElementById('modal-date');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');

// Render Trips
function renderTrips() {
    tripsList.innerHTML = '';
    sortedTrips.forEach((trip, index) => {
        const card = document.createElement('div');
        card.classList.add('trip-card');
        card.style.animationDelay = `${Math.min(index * 0.05, 1)}s`; 
        
        const imgPath = trip.image && trip.image !== 'None' && trip.image !== '' ? './' + trip.image : './placeholder.png';

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${imgPath}" onerror="this.src='./placeholder.png'" alt="${trip.destination}" class="card-image">
            </div>
            <div class="card-content">
                <span class="card-date">${formatDate(trip.date)}</span>
                <h3 class="card-title">${trip.destination}</h3>
                <p class="card-snippet">${trip.description || 'Nessun dettaglio aggiuntivo.'}</p>
            </div>
        `;

        card.addEventListener('click', () => openModal(trip));
        tripsList.appendChild(card);
    });
}

// Open Modal
function openModal(trip) {
    const imgPath = trip.image && trip.image !== 'None' && trip.image !== '' ? './' + trip.image : './placeholder.png';
    modalImg.src = imgPath;
    modalImg.onerror = function() { this.src = './placeholder.png'; };
    
    modalTitle.textContent = trip.destination;
    modalDate.textContent = formatDate(trip.date);
    modalDesc.textContent = trip.description || 'Nessuna descrizione disponibile per questo viaggio.';
    modalPrice.textContent = trip.price || '';
    
    if (!trip.price || trip.price === '€0,00' || trip.price === '€0') {
        modalPrice.style.display = 'none';
    } else {
        modalPrice.style.display = 'block';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

renderTrips();
