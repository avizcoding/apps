jQuery.sap.require("movieDB.src.infrastructure.Data.IDataService");
var services;
(function (services) {
    var MockDataService = (function () {
        function MockDataService() {
        }
        MockDataService.prototype.getData = function (url, callback, payload) {
            if (payload === void 0) { payload = {}; }
            var data = {
                //"bio": "In the vein of musicians-turned-actors, Jared Leto is a very familiar face in recent film history. Although he has always been the lead vocals, rhythm guitar, and songwriter for American band 30 Seconds to Mars, Leto will always be remembered as an accomplished actor for the numerous, challenging projects he has taken in his life. Jared Leto was born in Bossier City, Louisiana, to Constance \"Connie\" (Metrejon) and Anthony L. \"Tony\" Bryant. \"Leto\" is a stepfather's surname. His ancestry includes English, Cajun (French), as well as Irish, German, Scottish. Jared and his family traveled across the United States throughout Leto's childhood, living in such states as Wyoming, Virginia and Colorado. Leto would continue this trend when he initially dropped a study of painting at Philadelphia's University of the Arts in favor of a focus on acting at the School of Visual Arts in New York City. In 1992, Leto moved to Los Angeles to pursue a musical career, intending to take acting roles on the side. Leto's first appearances on screen were guest appearances on the short-lived television shows Camp Wilder (1992), Almost Home (1993) and Rebel Highway (1994). However, his next role would change everything for Leto. While searching for film roles, he was cast in the show, My So-Called Life (1994) (TV Series 1994-1995). Leto's character was \"Jordan Catalano\", the handsome, dyslexic slacker, but also the main love interest of \"Angela\" (played by Claire Danes). Leto contributed to the soundtrack of the film, and so impressed the producers initially that he was soon a regular on the show until its end. Elsewhere, Leto began taking film roles. His first theatrically released film was the ensemble piece, How to Make an American Quilt (1995), based on a novel of the same name and starring renowned actresses Winona Ryder, Anne Bancroft, Ellen Burstyn, Jean Simmons and Alfre Woodard. The film was a modest success and, while Leto's next film, The Last of the High Kings (1996), was a failure, Leto secured his first leading role in Prefontaine (1997), based on long-distance runner Steven Prefontaine. The film was a financial flop, but was praised by critics, notably Gene Siskel and Roger Ebert. He also took a supporting role in the action thriller, Switchback (1997), which starred Dennis Quaid, but the film was another failure. Leto's work was slowly becoming recognized in Hollywood, and he continued to find work in film. In 1998, everything turned for the better on all fronts. This was the year that Leto founded the band, 30 Seconds to Mars, with his brother, Shannon Leto, as well as Matt Wachter (who later left the group), and after two guitarists joined and quit, Tomo Milicevic was brought in as lead guitarist and keyboardist. As well as the formation of his now-famous band, Leto's luck in film was suddenly shooting for the better. He was cast as the lead in the horror film, Urban Legend (1998), which told a grisly tale of a murderer who kills his victims in the style of urban legends. The film was a massive success commercially, though critics mostly disliked the film. That same year, Leto also landed a supporting role in the film, The Thin Red Line (1998). Renowned director Terrence Malick's first film in nearly twenty years, the film had dozens of famous actors in the cast, including Sean Penn, Woody Harrelson, John Travolta, Nick Nolte and Elias Koteas, to name a few. The film went through much editing, leaving several actors out of the final version, but Leto luckily remained in the film. The Thin Red Line (1998) was nominated for seven Oscars and was a moderate success at the box office. Leto's fame had just begun. He had supporting roles in both James Mangold's Girl, Interrupted (1999), and in David Fincher's cult classic, Fight Club (1999), dealing with masculinity, commercialism, fascism and insomnia. While Edward Norton and Brad Pitt were the lead roles, Leto took a supporting role and dyed his hair blond. The film remains hailed by many, but at the time, Leto was already pushing himself further into controversial films. He played a supporting role of \"Paul Allen\" in the infamous American Psycho (2000), starring Christian Bale, and he played the lead role in Darren Aronofsky's Requiem for a Dream (2000), which had Leto take grueling measures to prepare for his role as a heroin addict trying to put his plans to reality and escape the hell he is in. Both films were massive successes, if controversially received. The 2000s brought up new film opportunities for Leto. He reunited with David Fincher in Panic Room (2002), which was another success for Leto, as well as Oliver Stone's epic passion project, Alexander (2004). The theatrical cut was poorly received domestically (although it recouped its budget through DVD sales and international profit), and though a Final Cut was released that much improved the film in all aspects, it continues to be frowned upon by the majority of film goers. Leto rebounded with Lord of War (2005), which starred Nicolas Cage as an arms dealer who ships weapons to war zones, with Leto playing his hapless but more moral-minded brother. The film was an astounding look at the arms industry, but was not a big financial success. Leto's flush of successes suddenly ran dry when he acted in the period piece, Coeurs perdus (2006), which had Leto playing \"Ray Fernandez\", one of the two infamous \"Lonely Hearts Killers\" in the 1940s. The film was a financial failure and only received mixed responses. Leto then underwent a massive weight gain to play \"Mark David Chapman\", infamous murderer of John Lennon, in the movie, Chapter 27 (2007). While Leto did a fantastic job embodying the behavior and speech patterns of Chapman, the film was a complete flop, and was a critical bomb to boot. It was during this period that Leto focused increasingly on his band, turning down such films as Clint Eastwood's World War 2 film, Flags of Our Fathers (2006). In 2009, however, Leto returned to acting with his most ambitious film yet; Mr. Nobody (2009). Leto's role as \"Nemo Nobody\" required him to play the character as far aged as 118, even as he undergoes a soul-searching as to whether his life turned out the way he wanted it to. The film was mostly funded through Belgian and French financiers, and was given limited release in only certain countries. Critical response, however, has praised the film's artistry and Leto's acting. Jared Leto's story is a very charmed one, as he rose from television roles to film roles, to giving head-turning performances in famous projects alongside A-list casts. And all this on the side of his band, 30 Seconds to Mars.",
                //"birthName": "Jared Joseph Bryant",
                //"dateOfBirth": "26 December 1971",
                //"height": "5' 9\" (1.75 m)",
                //"idIMDB": "nm0001467",
                //"name": "Jared Leto",
                //"placeOfBirth": " Bossier City, Louisiana, USA",
                //"urlPhoto": "http://ia.media-imdb.com/images/M/MV5BMTczMjUwNDUzMF5BMl5BanBnXkFtZTgwNDA4OTAzMTE@._V1_SX67_CR0,0,67,98_AL_.jpg"
                "bio": "This transatlantic talent was born John Vincent Hurt on January 22, 1940 in Shirebrook, a coal mining village near the busy market town of Chesterfield, in Derbyshire, England. He is the son of Phyllis (Massey), an engineer and one-time actress, and Arnould Herbert Hurt, an Anglican clergyman and mathematician. The youngest of three children, he spent much of his childhood in solitude. Demonstrating little initiative, he was guided into art as a possible direction. The family moved to Grimsby when he turned twelve and, despite an active early passion in acting, his parents thought less of it and enrolled him at the Grimsby Art School and St. Martin's School of Art where he showed some flourish. When he couldn't manage to get another scholarship to art school, his focus invariably turned to acting. Accepted into the Royal Academy of Dramatic Art, John made his stage debut in 1962 and remained there in typically offbeat form such plays as \"Infanticide in the House of Fred Ginger\". An odd, somber, pasty-looking fellow with an aquiline nose (injured while playing sports) and a mass of Irish freckles, he was hardly leading man material. His earlier focus as a painter, however, triggered a keen skill in the art of observation and it certainly advanced his talent for getting into the skin of his characters. His movie debut occurred that same year with a supporting role in the ill-received British \"angry young man\" drama Young and Willing (1962). Appearing in various mediums, John increased his profile (and respect) appearing in such theatre plays as \"Inadmissible Evidence\" (1965), \"Little Malcolm and His Struggle Against the Eunuchs\" (1966), a role he later took to film as Little Malcolm and His Struggle Against the Eunuchs (1974), \"Macbeth\" (as Malcolm) (1967) and \"Man and Superman\" (1969), while finding prime parts in such films as A Man for All Seasons (1966), a role he was given after director Fred Zinnemann saw his stellar work in \"Little Malcolm.\" He continued on the stage as an unlikely Romeo in 1973, and went on to garner great applause in Pinter's \"The Caretaker\" and \"The Dumb Waiter\", as well as \"Travesties\" (1974). It was TV, however, that displayed the full magnitude and fearless range of his acting instrument. In the mid-70s he gained widespread acclaim for his embodiment of the tormented gay writer and raconteur Quentin Crisp in the landmark TV play The Naked Civil Servant (1975), adapted from Crisp's autobiography. Way, way ahead of its time, Hurt's bold and unabashed take on the flamboyant and controversial gent who dared to be different was rewarded with the Emmy and the British TV Awards. Far and away one of the most marvelous creations ever captured on the small screen, he was altogether unsettling, unappetizing and unforgettable. Audiences cringed but were mesmerized at the same time -- like a car wreck. He WAS Quentin Crisp. Doors immediately opened for John. He was handed the best parts film and TV had to offer. Once again he was strikingly disturbing as the cruel and crazed Roman emperor Caligula in the epic TV masterpiece I, Claudius (1976). The chameleon in him then displayed a polar side as the gentle, pathetically disfigured title role in The Elephant Man (1980), and when he morphed into the role of a tortured Turkish prison inmate who befriends Brad Davis in the intense drama Midnight Express (1978), he was barely recognizable. The last two films earned Hurt Oscar nominations. Mainstream box-office films were offered as well as art films. He made the most of his role as a crew member whose body becomes host to an unearthly predator in Alien (1979). Who can forget the film's most notorious scene as the creature explodes from Hurt's stomach and scurries away into the bowels of the spaceship? Along with fame, of course, came a few misguided ventures generally unworthy of his talent. Such brilliant work as his steeple chase jockey in Champions (1984) or kidnapper in The Hit (1984) was occasionally offset by such drivel as the comedy misfire Partners (1982) with 'Ryan O'Neal (I)' in which Hurt looked enervated and embarrassed. But those were very few and far between. As for the past couple of decades, the craggy-faced actor continues to draw extraordinary notices. Tops on the list includes his prurient governmental gadfly who triggers the Christine Keeler political sex scandal in the aptly-titled Scandal (1989); the cultivated gay writer aroused and obsessed with struggling \"pretty-boy\" actor Jason Priestley in Love and Death on Long Island (1997); and the Catholic priest embroiled in the Rwanda atrocities in Beyond the Gates (2005). His rich tones have also been tapped into frequently with a number of animated features and documentaries, often serving as narrator. Presently married to his fourth wife, genius is often accompanied by a darker, more self-destructive side and Hurt was no exception with alcohol being his choice of poison. He has since recovered. He has two children from his third wife.",
                "birthName": "John Vincent Hurt",
                "born": "John Vincent Hurt January 22, 1940 in Shirebrook, Derbyshire, England, UK",
                "dateOfBirth": "22 January 1940",
                "filmographies": [
                    {
                        "filmography": [
                            {
                                "IMDBId": "tt1318517",
                                "title": "The Man Who Killed Don Quixote",
                                "year": " 2016"
                            },
                            {
                                "IMDBId": "tt3457508",
                                "title": "Damascus Cover",
                                "year": " 2015"
                            },
                            {
                                "IMDBId": "tt0918940",
                                "title": "Tarzan",
                                "year": " 2016"
                            },
                            {
                                "IMDBId": "tt3865238",
                                "title": "ChickLit",
                                "year": " 2015"
                            },
                            {
                                "IMDBId": "tt3570012",
                                "title": "AKA Nadia",
                                "year": " 2015"
                            },
                            {
                                "IMDBId": "tt4075386",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Last Panthers",
                                "year": " 2015"
                            },
                            {
                                "IMDBId": "tt1267297",
                                "title": "Hercules",
                                "year": " 2014/I"
                            },
                            {
                                "IMDBId": "tt0436992",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Doctor Who",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt1706620",
                                "title": "Snowpiercer - le transperceneige",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt1714915",
                                "title": "Only Lovers Left Alive",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt2733418",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "King Lear: Scene 133",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt2765262",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "Look Again",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt2543298",
                                "remarks": [
                                    "Narrated by (voice)"
                                ],
                                "title": "Benjamin Britten: Peace and Conflict",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt1196948",
                                "remarks": [
                                    "Narrator (voice)"
                                ],
                                "title": "Charlie Countryman",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt1199099",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Merlin",
                                "year": " 2008-2012"
                            },
                            {
                                "IMDBId": "tt1866570",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Labyrinth",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt2262456",
                                "remarks": [
                                    "(TV Mini-Series)"
                                ],
                                "title": "The Hollow Crown",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt2341669",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Playhouse Presents",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt2023690",
                                "remarks": [
                                    "Narrator - Blake's \"Jerusalem\" (voice, uncredited)"
                                ],
                                "title": "Sightseers",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt1781840",
                                "title": "Jayne Mansfield's Car",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt1978521",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "Sailcloth",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt3253740",
                                "title": "The Confession",
                                "year": " 2011/III"
                            },
                            {
                                "IMDBId": "tt2132486",
                                "remarks": [
                                    "(TV Short)",
                                    "Owl (voice)"
                                ],
                                "title": "The Gruffalo's Child",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1253864",
                                "title": "Immortals",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1792085",
                                "title": "In Love with Alma Cogan",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1340800",
                                "title": "La taupe",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1996152",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "23 Degrees, 5 Minutes",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1201607",
                                "title": "Harry Potter and the Deathly Hallows: Part 2",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1527186",
                                "title": "Melancholia",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1809362",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Confession",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt0330811",
                                "title": "Regret Not Speaking",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1795050",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Whistle and I'll Come to You",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1679332",
                                "remarks": [
                                    "Brother Carnak (voice)"
                                ],
                                "title": "Ultramarines: A Warhammer 40,000 Movie",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1735878",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "Love at First Sight",
                                "year": " 2010/I"
                            },
                            {
                                "IMDBId": "tt0926084",
                                "title": "Harry Potter and the Deathly Hallows: Part 1",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1233192",
                                "title": "Brighton Rock",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1230204",
                                "remarks": [
                                    "Grandpa Sammy (voice)"
                                ],
                                "title": "A Turtle's Tale: Sammy's Adventures",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1451395",
                                "title": "Lou",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1461418",
                                "remarks": [
                                    "(TV Short)",
                                    "Owl (voice)"
                                ],
                                "title": "The Gruffalo",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt0914837",
                                "title": "44 Inch Chest",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt1135092",
                                "title": "The Limits of Control",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt0997057",
                                "title": "An Englishman in New York",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt0808399",
                                "remarks": [
                                    "Bellhop (segment \"Shekhar Kapur\")"
                                ],
                                "title": "New York, I Love You",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0929441",
                                "title": "Lecture 21",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0462465",
                                "title": "Outlander",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0411477",
                                "title": "Hellboy II: The Golden Army",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1000771",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Recount",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0367882",
                                "title": "Indiana Jones and the Kingdom of the Crystal Skull",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0488604",
                                "title": "Crimes à Oxford",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0772139",
                                "remarks": [
                                    "(TV Mini-Series)"
                                ],
                                "title": "Masters of Science Fiction",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt0817910",
                                "remarks": [
                                    "(TV Movie)",
                                    "(voice)"
                                ],
                                "title": "Hellboy Animated: Blood and Iron",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt0901473",
                                "title": "Boxes",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt0396171",
                                "remarks": [
                                    "Narrator (voice)"
                                ],
                                "title": "Le parfum - Histoire d'un meurtrier",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0388573",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Alan Clark Diaries",
                                "year": " 2004-2006"
                            },
                            {
                                "IMDBId": "tt0434409",
                                "title": "V for Vendetta",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0421238",
                                "title": "The Proposition",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0420901",
                                "title": "Beyond the Gates",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0475296",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Narrator (voice)"
                                ],
                                "title": "Hiroshima",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0397101",
                                "title": "The Skeleton Key",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0342735",
                                "remarks": [
                                    "Narrator (voice)"
                                ],
                                "title": "Manderlay",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0361089",
                                "remarks": [
                                    "(voice)"
                                ],
                                "title": "Valiant",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0426214",
                                "title": "Short Order",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0363908",
                                "remarks": [
                                    "(TV Movie)",
                                    "Harry (voice)"
                                ],
                                "title": "Pride",
                                "year": " 2004"
                            },
                            {
                                "IMDBId": "tt0167190",
                                "title": "Hellboy",
                                "year": " 2004"
                            },
                            {
                                "IMDBId": "tt0276919",
                                "remarks": [
                                    "Narrator (voice)"
                                ],
                                "title": "Dogville",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0401641",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "Meeting Che Guevara & the Man from Maybury Hill",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0285861",
                                "title": "Mister Cash",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0346566",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Bait",
                                "year": " 2002"
                            },
                            {
                                "IMDBId": "tt0096056",
                                "title": "Crime and Punishment",
                                "year": " 2002"
                            },
                            {
                                "IMDBId": "tt0280949",
                                "title": "Miranda",
                                "year": " 2002"
                            },
                            {
                                "IMDBId": "tt0159876",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Great Performances",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt0241527",
                                "title": "Harry Potter and the Sorcerer's Stone",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt0238112",
                                "title": "Captain Corelli's Mandolin",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt0281253",
                                "title": "Tabloid",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt0160484",
                                "title": "Lost Souls",
                                "year": " 2000"
                            },
                            {
                                "IMDBId": "tt0211882",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Watership Down",
                                "year": " 1999-2000"
                            },
                            {
                                "IMDBId": "tt0243364",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Krapp's Last Tape",
                                "year": " 2000"
                            },
                            {
                                "IMDBId": "tt0177943",
                                "title": "New Blood",
                                "year": " 2000"
                            },
                            {
                                "IMDBId": "tt0220099",
                                "remarks": [
                                    "Narrator (voice)"
                                ],
                                "title": "The Tigger Movie",
                                "year": " 2000"
                            },
                            {
                                "IMDBId": "tt0178997",
                                "title": "You're Dead...",
                                "year": " 1999"
                            },
                            {
                                "IMDBId": "tt0138511",
                                "title": "If... Dog... Rabbit",
                                "year": " 1999"
                            },
                            {
                                "IMDBId": "tt0188506",
                                "remarks": [
                                    "(English version, voice)"
                                ],
                                "title": "A Monkey's Tale",
                                "year": " 1999"
                            },
                            {
                                "IMDBId": "tt0120584",
                                "title": "All the Little Animals",
                                "year": " 1998"
                            },
                            {
                                "IMDBId": "tt0169083",
                                "title": "Night Train",
                                "year": " 1998/I"
                            },
                            {
                                "IMDBId": "tt0072562",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Saturday Night Live",
                                "year": " 1998"
                            },
                            {
                                "IMDBId": "tt0120640",
                                "title": "The Commissioner",
                                "year": " 1998"
                            },
                            {
                                "IMDBId": "tt0383665",
                                "remarks": [
                                    "(Video Game)",
                                    "Dr. Turner (voice)"
                                ],
                                "title": "Tender Loving Care",
                                "year": " 1998"
                            },
                            {
                                "IMDBId": "tt2316897",
                                "remarks": [
                                    "(Short)",
                                    "Happy Prince (voice)"
                                ],
                                "title": "My Funny Valentine",
                                "year": " 1997"
                            },
                            {
                                "IMDBId": "tt0149252",
                                "remarks": [
                                    "(Video)"
                                ],
                                "title": "Tender Loving Care",
                                "year": " 1997"
                            },
                            {
                                "IMDBId": "tt0129774",
                                "title": "Brute",
                                "year": " 1997"
                            },
                            {
                                "IMDBId": "tt0118865",
                                "title": "The Climb",
                                "year": " 1997"
                            },
                            {
                                "IMDBId": "tt0118884",
                                "title": "Contact",
                                "year": " 1997"
                            },
                            {
                                "IMDBId": "tt0119574",
                                "title": "Love and Death on Long Island",
                                "year": " 1997"
                            },
                            {
                                "IMDBId": "tt0117391",
                                "remarks": [
                                    "(Video Game)"
                                ],
                                "title": "Privateer 2: The Darkening",
                                "year": " 1996"
                            },
                            {
                                "IMDBId": "tt0114326",
                                "title": "Saigon Baby",
                                "year": " 1995"
                            },
                            {
                                "IMDBId": "tt0114755",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "Two Nudes Bathing",
                                "year": " 1995"
                            },
                            {
                                "IMDBId": "tt0114938",
                                "title": "Wild Bill",
                                "year": " 1995"
                            },
                            {
                                "IMDBId": "tt0112817",
                                "title": "Dead Man",
                                "year": " 1995"
                            },
                            {
                                "IMDBId": "tt0114287",
                                "title": "Rob Roy",
                                "year": " 1995"
                            },
                            {
                                "IMDBId": "tt0123358",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Picture Windows",
                                "year": " 1994"
                            },
                            {
                                "IMDBId": "tt0111102",
                                "title": "Second Best",
                                "year": " 1994"
                            },
                            {
                                "IMDBId": "tt0107042",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Great Moments in Aviation",
                                "year": " 1994"
                            },
                            {
                                "IMDBId": "tt0111419",
                                "remarks": [
                                    "(voice)"
                                ],
                                "title": "Poucelina",
                                "year": " 1994"
                            },
                            {
                                "IMDBId": "tt0215095",
                                "remarks": [
                                    "(Video)"
                                ],
                                "title": "Rabbit Ears: Aladdin and the Magic Lamp",
                                "year": " 1994"
                            },
                            {
                                "IMDBId": "tt0106834",
                                "title": "Even Cowgirls Get the Blues",
                                "year": " 1993"
                            },
                            {
                                "IMDBId": "tt0107597",
                                "title": "Monolith",
                                "year": " 1993"
                            },
                            {
                                "IMDBId": "tt0151272",
                                "title": "Kölcsönkapott idö",
                                "year": " 1993"
                            },
                            {
                                "IMDBId": "tt0298685",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Performance",
                                "year": " 1992"
                            },
                            {
                                "IMDBId": "tt0105045",
                                "title": "L'oeil qui ment",
                                "year": " 1992"
                            },
                            {
                                "IMDBId": "tt0104682",
                                "title": "Mémoire traquée",
                                "year": " 1992"
                            },
                            {
                                "IMDBId": "tt0102085",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "I Dreamt I Woke Up",
                                "year": " 1991"
                            },
                            {
                                "IMDBId": "tt0101176",
                                "remarks": [
                                    "(TV Mini-Series)"
                                ],
                                "title": "Red Fox",
                                "year": " 1991"
                            },
                            {
                                "IMDBId": "tt1049304",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Screenplay",
                                "year": " 1991"
                            },
                            {
                                "IMDBId": "tt0102216",
                                "title": "King Ralph",
                                "year": " 1991"
                            },
                            {
                                "IMDBId": "tt0099612",
                                "title": "Roger Corman's Frankenstein Unbound",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0099566",
                                "title": "The Field",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0100512",
                                "remarks": [
                                    "La Dame aux Chats / (voice)"
                                ],
                                "title": "Romeo.Juliet",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0099854",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Who Bombed Birmingham?",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0100940",
                                "title": "Windprints",
                                "year": " 1989"
                            },
                            {
                                "IMDBId": "tt0095881",
                                "title": "Little Sweetheart",
                                "year": " 1989"
                            },
                            {
                                "IMDBId": "tt0098260",
                                "title": "Scandal",
                                "year": " 1989"
                            },
                            {
                                "IMDBId": "tt0094966",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Deadline",
                                "year": " 1988"
                            },
                            {
                                "IMDBId": "tt0095759",
                                "title": "La nuit Bengali",
                                "year": " 1988"
                            },
                            {
                                "IMDBId": "tt1685488",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "A Dinner of Herbs",
                                "year": " 1988"
                            },
                            {
                                "IMDBId": "tt0092383",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Storyteller",
                                "year": " 1987-1988"
                            },
                            {
                                "IMDBId": "tt0795366",
                                "remarks": [
                                    "(TV Movie)",
                                    "/ Second French Explorer (voice)"
                                ],
                                "title": "David Macaulay: Pyramid",
                                "year": " 1988"
                            },
                            {
                                "IMDBId": "tt0216818",
                                "title": "The Hunting of the Snark",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt0094269",
                                "remarks": [
                                    "(voice)"
                                ],
                                "title": "Vincent - La vie et la mort de Vincent Van Gogh",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt0094012",
                                "title": "Spaceballs",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt0092580",
                                "remarks": [
                                    "The Actor (segment \"I pagliacci\")"
                                ],
                                "title": "Aria",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt0093051",
                                "title": "From the Hip",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt0094317",
                                "title": "White Mischief",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt0152211",
                                "title": "Rocinante",
                                "year": " 1986"
                            },
                            {
                                "IMDBId": "tt0091282",
                                "title": "Jake Speed",
                                "year": " 1986"
                            },
                            {
                                "IMDBId": "tt0088814",
                                "remarks": [
                                    "(voice)"
                                ],
                                "title": "The Black Cauldron",
                                "year": " 1985"
                            },
                            {
                                "IMDBId": "tt0088679",
                                "title": "After Darkness",
                                "year": " 1985"
                            },
                            {
                                "IMDBId": "tt0087803",
                                "title": "Nineteen Eighty-Four",
                                "year": " 1984"
                            },
                            {
                                "IMDBId": "tt0087414",
                                "title": "The Hit",
                                "year": " 1984"
                            },
                            {
                                "IMDBId": "tt0088200",
                                "title": "Le succès à tout prix",
                                "year": " 1984"
                            },
                            {
                                "IMDBId": "tt0085320",
                                "title": "Champions",
                                "year": " 1984"
                            },
                            {
                                "IMDBId": "tt0086058",
                                "title": "The Osterman Weekend",
                                "year": " 1983"
                            },
                            {
                                "IMDBId": "tt0087561",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "King Lear",
                                "year": " 1983"
                            },
                            {
                                "IMDBId": "tt0084509",
                                "remarks": [
                                    "(voice)"
                                ],
                                "title": "The Plague Dogs",
                                "year": " 1982"
                            },
                            {
                                "IMDBId": "tt3950122",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Paul McCartney: Take It Away",
                                "year": " 1982"
                            },
                            {
                                "IMDBId": "tt0084477",
                                "title": "Partners",
                                "year": " 1982"
                            },
                            {
                                "IMDBId": "tt0082810",
                                "title": "Night Crossing",
                                "year": " 1982"
                            },
                            {
                                "IMDBId": "tt0082517",
                                "title": "History of the World: Part I",
                                "year": " 1981"
                            },
                            {
                                "IMDBId": "tt0080855",
                                "title": "Heaven's Gate",
                                "year": " 1980"
                            },
                            {
                                "IMDBId": "tt0080678",
                                "title": "The Elephant Man",
                                "year": " 1980"
                            },
                            {
                                "IMDBId": "tt0078590",
                                "remarks": [
                                    "(TV Mini-Series)"
                                ],
                                "title": "Crime and Punishment",
                                "year": " 1979"
                            },
                            {
                                "IMDBId": "tt0078748",
                                "title": "Alien",
                                "year": " 1979"
                            },
                            {
                                "IMDBId": "tt0077869",
                                "remarks": [
                                    "(voice)"
                                ],
                                "title": "The Lord of the Rings",
                                "year": " 1978"
                            },
                            {
                                "IMDBId": "tt0078480",
                                "remarks": [
                                    "(voice)"
                                ],
                                "title": "Watership Down",
                                "year": " 1978"
                            },
                            {
                                "IMDBId": "tt0078259",
                                "title": "The Shout",
                                "year": " 1978"
                            },
                            {
                                "IMDBId": "tt0077928",
                                "title": "Midnight Express",
                                "year": " 1978"
                            },
                            {
                                "IMDBId": "tt0075970",
                                "title": "East of Elephant Rock",
                                "year": " 1978"
                            },
                            {
                                "IMDBId": "tt2814890",
                                "title": "Paperback",
                                "year": " 1977"
                            },
                            {
                                "IMDBId": "tt0441697",
                                "remarks": [
                                    "Lt. Simmonds (segment \"The Island\")"
                                ],
                                "title": "Three Dangerous Ladies",
                                "year": " 1977"
                            },
                            {
                                "IMDBId": "tt1245421",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "ITV Sunday Night Drama",
                                "year": " 1977"
                            },
                            {
                                "IMDBId": "tt0075944",
                                "title": "The Disappearance",
                                "year": " 1977"
                            },
                            {
                                "IMDBId": "tt0076745",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Spectre",
                                "year": " 1977"
                            },
                            {
                                "IMDBId": "tt0074006",
                                "remarks": [
                                    "(TV Mini-Series)"
                                ],
                                "title": "I, Claudius",
                                "year": " 1976"
                            },
                            {
                                "IMDBId": "tt0071059",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Sweeney",
                                "year": " 1976"
                            },
                            {
                                "IMDBId": "tt0073295",
                                "title": "Stream Line",
                                "year": " 1976"
                            },
                            {
                                "IMDBId": "tt0165592",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Play for Today",
                                "year": " 1976"
                            },
                            {
                                "IMDBId": "tt0164285",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Shades of Greene",
                                "year": " 1976"
                            },
                            {
                                "IMDBId": "tt3949732",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "Shadows of Doubt",
                                "year": " 1976"
                            },
                            {
                                "IMDBId": "tt0073438",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "The Naked Civil Servant",
                                "year": " 1975"
                            },
                            {
                                "IMDBId": "tt0073042",
                                "title": "The Ghoul",
                                "year": " 1975"
                            },
                            {
                                "IMDBId": "tt0071760",
                                "title": "Little Malcolm and His Struggle Against the Eunuchs",
                                "year": " 1974"
                            },
                            {
                                "IMDBId": "tt0395247",
                                "remarks": [
                                    "(TV Movie)",
                                    "Christopher Mahon (Christy Mahon)"
                                ],
                                "title": "The Playboy of the Western World",
                                "year": " 1974"
                            },
                            {
                                "IMDBId": "tt0298709",
                                "remarks": [
                                    "(TV Mini-Series)"
                                ],
                                "title": "Wessex Tales",
                                "year": " 1973"
                            },
                            {
                                "IMDBId": "tt0069086",
                                "title": "The Pied Piper",
                                "year": " 1972"
                            },
                            {
                                "IMDBId": "tt0066961",
                                "title": "Cry of the Penguins",
                                "year": " 1971"
                            },
                            {
                                "IMDBId": "tt0297621",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "ITV Sunday Night Theatre",
                                "year": " 1971"
                            },
                            {
                                "IMDBId": "tt0066730",
                                "title": "10 Rillington Place",
                                "year": " 1971"
                            },
                            {
                                "IMDBId": "tt3952224",
                                "remarks": [
                                    "(Short)"
                                ],
                                "title": "RHM Mother's Pride Supermarket Raid 87670",
                                "year": " 1971"
                            },
                            {
                                "IMDBId": "tt0063130",
                                "title": "In Search of Gregory",
                                "year": " 1970"
                            },
                            {
                                "IMDBId": "tt0064075",
                                "title": "Before Winter Comes",
                                "year": " 1969"
                            },
                            {
                                "IMDBId": "tt0064988",
                                "title": "Sinful Davey",
                                "year": " 1969"
                            },
                            {
                                "IMDBId": "tt0298665",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "ITV Playhouse",
                                "year": " 1967"
                            },
                            {
                                "IMDBId": "tt0062225",
                                "title": "The Sailor from Gibraltar",
                                "year": " 1967"
                            },
                            {
                                "IMDBId": "tt0060665",
                                "title": "A Man for All Seasons",
                                "year": " 1966"
                            },
                            {
                                "IMDBId": "tt0914702",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "ITV Play of the Week",
                                "year": " 1964-1965"
                            },
                            {
                                "IMDBId": "tt1330949",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Thursday Theatre",
                                "year": " 1964"
                            },
                            {
                                "IMDBId": "tt0158411",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Gideon C.I.D.",
                                "year": " 1964"
                            },
                            {
                                "IMDBId": "tt0840891",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Love Story",
                                "year": " 1964"
                            },
                            {
                                "IMDBId": "tt0161126",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Armchair Theatre",
                                "year": " 1964"
                            },
                            {
                                "IMDBId": "tt1134887",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "First Night",
                                "year": " 1963-1964"
                            },
                            {
                                "IMDBId": "tt0057577",
                                "title": "This Is My Street",
                                "year": " 1964"
                            },
                            {
                                "IMDBId": "tt3952200",
                                "title": "The Contact",
                                "year": " 1963"
                            },
                            {
                                "IMDBId": "tt0969924",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Drama 61-67",
                                "year": " 1961-1963"
                            },
                            {
                                "IMDBId": "tt1711415",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Once Aboard the Lugger...",
                                "year": " 1963"
                            },
                            {
                                "IMDBId": "tt0056696",
                                "title": "Young and Willing",
                                "year": " 1962"
                            },
                            {
                                "IMDBId": "tt0159904",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Probation Officer",
                                "year": " 1961-1962"
                            },
                            {
                                "IMDBId": "tt0129723",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Z Cars",
                                "year": " 1962"
                            }
                        ],
                        "section": "Actor"
                    },
                    {
                        "filmography": [
                            {
                                "IMDBId": "tt1451395",
                                "remarks": [
                                    "(performer: \"Pokarekare Ana\")"
                                ],
                                "title": "Lou",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt0188506",
                                "remarks": [
                                    "(performer: \"To Be King\" (English version)",
                                    ")"
                                ],
                                "title": "A Monkey's Tale",
                                "year": " 1999"
                            },
                            {
                                "IMDBId": "tt0066961",
                                "remarks": [
                                    "(performer: Silent Night: - uncredited)"
                                ],
                                "title": "Cry of the Penguins",
                                "year": " 1971"
                            }
                        ],
                        "section": "Soundtrack"
                    },
                    {
                        "filmography": [
                            {
                                "IMDBId": "tt1757894",
                                "remarks": [
                                    "(Short)",
                                    "(thanks)"
                                ],
                                "title": "The Minister, the Model and the Russian Spy: Making Scandal",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt0997057",
                                "remarks": [
                                    "(very special thanks)"
                                ],
                                "title": "An Englishman in New York",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt0357608",
                                "remarks": [
                                    "(Documentary)",
                                    "(thanks)"
                                ],
                                "title": "Dogville Confessions",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt1266715",
                                "remarks": [
                                    "(Video documentary short)",
                                    "(special thanks)"
                                ],
                                "title": "The Terrible Elephant Man Revealed",
                                "year": " 2001"
                            }
                        ],
                        "section": "Thanks"
                    },
                    {
                        "filmography": [
                            {
                                "IMDBId": "tt1935072",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Alien Encounters: Superior Fan Power Since 1979",
                                "year": " 2014"
                            },
                            {
                                "IMDBId": "tt3983894",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Richard Attenborough: A Life in Film",
                                "year": " 2014"
                            },
                            {
                                "IMDBId": "tt1540109",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Formula 1: BBC Sport",
                                "year": " 2012-2014"
                            },
                            {
                                "IMDBId": "tt3804520",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Today at Wimbledon",
                                "year": " 2014"
                            },
                            {
                                "IMDBId": "tt3770700",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Wimbledon",
                                "year": " 2014"
                            },
                            {
                                "IMDBId": "tt3542198",
                                "remarks": [
                                    "(TV Special)"
                                ],
                                "title": "EE British Academy Film Awards: The Red Carpet Show",
                                "year": " 2014"
                            },
                            {
                                "IMDBId": "tt3503582",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Doctor Who Live: The Afterparty",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt0844203",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The One Show",
                                "year": " 2011-2013"
                            },
                            {
                                "IMDBId": "tt3223952",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "Hello: A Portrait of Leslie Phillips",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt2395343",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Muse of Fire",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt2622582",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Himself - Narrator (voice)"
                                ],
                                "title": "The World in Action Years",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt2031802",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Living the Life",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt2345864",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Himself - Narrator (voice)"
                                ],
                                "title": "Planet Dinosaur: Ultimate Killers",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt2049323",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Jonathan Ross Show",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt2217975",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "The Orange British Academy Film Awards",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt2153995",
                                "remarks": [
                                    "(Video documentary short)"
                                ],
                                "title": "Tinker Tailor Soldier Spy: UK Premiere Featurette",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt0270116",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Charlie Rose",
                                "year": " 1998-2011"
                            },
                            {
                                "IMDBId": "tt1998816",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Planet Dinosaur",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1908337",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Big Picture",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt0262152",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Breakfast",
                                "year": " 2002-2011"
                            },
                            {
                                "IMDBId": "tt1988225",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "BBC Proms",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1806234",
                                "remarks": [
                                    "(TV Mini-Series documentary)"
                                ],
                                "title": "Human Planet",
                                "year": " 2011"
                            },
                            {
                                "IMDBId": "tt1778266",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Harry Potter and the Deathly Hallows T4 Premiere Special",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt4171692",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Behind Jim Jarmusch",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1661083",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "The British Academy Television Awards",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1020920",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "BBC Look North",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1820680",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "Trace of the Bears",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1833986",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "In Conversation",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt0431559",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The New Paul O'Grady Show",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt1516278",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Merlin: Secrets & Magic",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt1501346",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "Creating the World of Harry Potter, Part 1: The Magic Begins",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt1717678",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Pride of Britain Awards 2009",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt1016283",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Xposé",
                                "year": " 2009"
                            },
                            {
                                "IMDBId": "tt1343024",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "The Big Fat Quiz of the Year",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0199184",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Arena",
                                "year": " 1985-2008"
                            },
                            {
                                "IMDBId": "tt1333054",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "The Story of the Costume Drama",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1405392",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "Production Diary: Making of 'The Kingdom of the Crystal Skull'",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1000543",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "A Taste of My Life",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1434322",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Up Close with Carrie Keagan",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt2296993",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "The British Academy Television Awards",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0445876",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Friday Night Project",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1216519",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "Verity Lambert: Drama Queen",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0299302",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Friday Night with Jonathan Ross",
                                "year": " 2004-2008"
                            },
                            {
                                "IMDBId": "tt0447736",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Cartelera",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1067602",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Continuarà...",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt0241090",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Caiga quien caiga",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1155413",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "The Big Fat Quiz of the Year",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt0429466",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Who Do You Think You Are?",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt1049245",
                                "remarks": [
                                    "(TV Mini-Series documentary)"
                                ],
                                "title": "British Film Forever",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt0986210",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "The 50 Greatest Television Dramas",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt0800968",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "20 to 1",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0315677",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "HypaSpace",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0413575",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "HARDtalk Extra",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt1020796",
                                "remarks": [
                                    "(Video documentary short)"
                                ],
                                "title": "Freedom! Forever!: Making 'V for Vendetta'",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0867160",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Whaledreamers",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0299374",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Richard & Judy",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0775408",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "'V for Vendetta' Unmasked",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0780586",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Narrator (voice)"
                                ],
                                "title": "The Plot Against Harold Wilson",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0192897",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Film 2015",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0497081",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "The 100 Greatest Family Films",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0261475",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Hollywood Greats",
                                "year": " 2004-2005"
                            },
                            {
                                "IMDBId": "tt0343315",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Today with Des and Mel",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0478752",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Drama Connections",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0181261",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "This Morning",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0233058",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Heaven and Earth with Gloria Hunniford",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0480762",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "ITV 50 Greatest Shows",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0445961",
                                "remarks": [
                                    "(TV Special)"
                                ],
                                "title": "The Evening Standard British Film Awards",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt0429086",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Narrator (voice)"
                                ],
                                "title": "Shadowing the Third Man",
                                "year": " 2004"
                            },
                            {
                                "IMDBId": "tt0477032",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "The Making of 'Hellboy'",
                                "year": " 2004"
                            },
                            {
                                "IMDBId": "tt0424755",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "'Hellboy': The Seeds of Creation",
                                "year": " 2004"
                            },
                            {
                                "IMDBId": "tt0444129",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "Alpha to Omega: Exposing 'The Osterman Weekend'",
                                "year": " 2004"
                            },
                            {
                                "IMDBId": "tt0434958",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Freedom2speak v2.0",
                                "year": " 2004"
                            },
                            {
                                "IMDBId": "tt0393240",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Narrator - Extracts from Dracula, Reminisces of Henry Irving & Walt Whitman Letters Read By (voice)"
                                ],
                                "title": "Dracula's Bram Stoker",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0387056",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "The Beast Within: The Making of 'Alien'",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0388925",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "The Evening Standard Theatre Awards 2003",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt1173584",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "The Twilight Hour: Visions of Ireland's Haunted Past",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0930831",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Gomorron",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt1232796",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "The Real Room 101",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0355681",
                                "remarks": [
                                    "(TV Special)"
                                ],
                                "title": "The Laurence Olivier Awards 2003",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0421968",
                                "remarks": [
                                    "(Video documentary)",
                                    "Himself - Krapp)"
                                ],
                                "title": "Check the Gate: Putting Beckett on Film",
                                "year": " 2003"
                            },
                            {
                                "IMDBId": "tt0342036",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Narrator (voice)"
                                ],
                                "title": "The 'Alien' Saga",
                                "year": " 2002"
                            },
                            {
                                "IMDBId": "tt0820093",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "I Claudius: A Television Epic",
                                "year": " 2002"
                            },
                            {
                                "IMDBId": "tt0366625",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Spaghetti Requiem",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt1266715",
                                "remarks": [
                                    "(Video documentary short)"
                                ],
                                "title": "The Terrible Elephant Man Revealed",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt0283384",
                                "remarks": [
                                    "(Documentary)",
                                    "Narrator (voice)"
                                ],
                                "title": "The Hidden Wars of Desert Storm",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt0168358",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Parkinson",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt1605560",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Universe",
                                "year": " 1999"
                            },
                            {
                                "IMDBId": "tt1067060",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "The 51st British Academy Film Awards",
                                "year": " 1999"
                            },
                            {
                                "IMDBId": "tt0169455",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Inside the Actors Studio",
                                "year": " 1998"
                            },
                            {
                                "IMDBId": "tt0262955",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Everyman",
                                "year": " 1995"
                            },
                            {
                                "IMDBId": "tt0109862",
                                "remarks": [
                                    "(Documentary)",
                                    "Narrator (voice)"
                                ],
                                "title": "Förräderi",
                                "year": " 1994"
                            },
                            {
                                "IMDBId": "tt0096619",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Jim Henson Hour",
                                "year": " 1992"
                            },
                            {
                                "IMDBId": "tt0189240",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Aspel & Company",
                                "year": " 1989-1991"
                            },
                            {
                                "IMDBId": "tt0260915",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Himself (Narration)"
                                ],
                                "title": "From Rio to Liverpool",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0205167",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "Jonathan Ross Presents for One Week Only: David Lynch",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0102777",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Resident Alien",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0134253",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Media Show",
                                "year": " 1989-1990"
                            },
                            {
                                "IMDBId": "tt0072506",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Good Morning America",
                                "year": " 1979-1989"
                            },
                            {
                                "IMDBId": "tt0166444",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Last Resort",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt1725824",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Thames Film",
                                "year": " 1987"
                            },
                            {
                                "IMDBId": "tt0396306",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "The Disney Family Album",
                                "year": " 1985"
                            },
                            {
                                "IMDBId": "tt2241952",
                                "remarks": [
                                    "(Documentary short)"
                                ],
                                "title": "Free at Last",
                                "year": " 1985"
                            },
                            {
                                "IMDBId": "tt0088205",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Sunset People",
                                "year": " 1984"
                            },
                            {
                                "IMDBId": "tt0341901",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "La nuit des Césars",
                                "year": " 1982"
                            },
                            {
                                "IMDBId": "tt0343339",
                                "remarks": [
                                    "(TV Special)"
                                ],
                                "title": "The 53rd Annual Academy Awards",
                                "year": " 1981"
                            },
                            {
                                "IMDBId": "tt0343338",
                                "remarks": [
                                    "(TV Special)"
                                ],
                                "title": "The 38th Annual Golden Globe Awards",
                                "year": " 1981"
                            },
                            {
                                "IMDBId": "tt3949762",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "Narrator (voice)"
                                ],
                                "title": "A World of Difference",
                                "year": " 1981"
                            },
                            {
                                "IMDBId": "tt0367305",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Clapper Board",
                                "year": " 1980"
                            },
                            {
                                "IMDBId": "tt0187839",
                                "title": "An Evening with Quentin Crisp",
                                "year": " 1980"
                            },
                            {
                                "IMDBId": "tt0299436",
                                "remarks": [
                                    "(TV Special documentary)"
                                ],
                                "title": "The 51st Annual Academy Awards",
                                "year": " 1979"
                            },
                            {
                                "IMDBId": "tt3947254",
                                "remarks": [
                                    "(Documentary short)",
                                    "Narrator (voice)"
                                ],
                                "title": "Do Yourself Some Good",
                                "year": " 1975"
                            }
                        ],
                        "section": "Self"
                    },
                    {
                        "filmography": [
                            {
                                "IMDBId": "tt0436992",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Doctor Who",
                                "year": " 2014"
                            },
                            {
                                "IMDBId": "tt0081857",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Entertainment Tonight",
                                "year": " 2014"
                            },
                            {
                                "IMDBId": "tt3356268",
                                "remarks": [
                                    "(TV Movie)",
                                    "(uncredited)"
                                ],
                                "title": "The Five(ish) Doctors Reboot",
                                "year": " 2013"
                            },
                            {
                                "IMDBId": "tt1743990",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Cinemassacre's Monster Madness",
                                "year": " 2007-2013"
                            },
                            {
                                "IMDBId": "tt1878538",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Super Phelous Angry Reviewing Meta-Show or Something...",
                                "year": " 2012"
                            },
                            {
                                "IMDBId": "tt1454016",
                                "remarks": [
                                    "(Video Game)"
                                ],
                                "title": "Lego Harry Potter: Years 1-4",
                                "year": " 2010"
                            },
                            {
                                "IMDBId": "tt1391541",
                                "remarks": [
                                    "(Video short)"
                                ],
                                "title": "Closing: Team Indy",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1296547",
                                "remarks": [
                                    "(TV Movie)"
                                ],
                                "title": "Ceremonia de inauguración - 56º festival internacional de cine de San Sebastián",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1266033",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "(uncredited)"
                                ],
                                "title": "Strictly Courtroom",
                                "year": " 2008"
                            },
                            {
                                "IMDBId": "tt1168647",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "The McCartney Years",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt1127850",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "Maquillando entre monstruos",
                                "year": " 2007"
                            },
                            {
                                "IMDBId": "tt0862590",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "La imagen de tu vida",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0796171",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "Timeshift",
                                "year": " 2006"
                            },
                            {
                                "IMDBId": "tt0462143",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Tvist",
                                "year": " 2005"
                            },
                            {
                                "IMDBId": "tt1520788",
                                "remarks": [
                                    "(TV Series documentary)"
                                ],
                                "title": "The Greatest",
                                "year": " 2001"
                            },
                            {
                                "IMDBId": "tt0320996",
                                "remarks": [
                                    "(TV Movie documentary)"
                                ],
                                "title": "Twentieth Century Fox: The Blockbuster Years",
                                "year": " 2000"
                            },
                            {
                                "IMDBId": "tt0243753",
                                "remarks": [
                                    "(Video documentary)"
                                ],
                                "title": "The Alien Legacy",
                                "year": " 1999"
                            },
                            {
                                "IMDBId": "tt0159876",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "Great Performances",
                                "year": " 1994"
                            },
                            {
                                "IMDBId": "tt0251874",
                                "remarks": [
                                    "(TV Movie documentary)",
                                    "The Storyteller (uncredited)"
                                ],
                                "title": "The Muppets Celebrate Jim Henson",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0280745",
                                "remarks": [
                                    "(Documentary)"
                                ],
                                "title": "Hollywood Mavericks",
                                "year": " 1990"
                            },
                            {
                                "IMDBId": "tt0096619",
                                "remarks": [
                                    "(TV Series)"
                                ],
                                "title": "The Jim Henson Hour",
                                "year": " 1989-1990"
                            }
                        ],
                        "section": "Archive footage"
                    }
                ],
                "height": "5' 9\" (1.75 m)",
                "idIMDB": "nm0000457",
                "name": "John Hurt",
                "personalQuotes": [
                    "I've done some stinkers in the cinema. You can't regret it; there are always reasons for doing something, even if it's just the location.",
                    "We are all racing towards death. No matter how many great, intellectual conclusions we draw during our lives, we know they're all only man-made, like God. I begin to wonder where it all leads. What can you do, except do what you can do as best you know how.",
                    "People like us, who turn ourselves inside out for a living, we get into an emotional tussle rather than a marriage. It's fire I'm playing with and it isn't surprising I'm not the ideal companion on a daily basis. But it takes two. I mean, Christ, I haven't forced anybody.",
                    "St Michael's was one of those very rarefied, very Anglo-Catholic establishments where they rejoiced in more religious paraphernalia and theatricality than the entire Vatican. More incense-swinging, more crucifixes, more gold tassels, more rose petals, more holy mothers, more God knows what. Three times a day they played the Angelus. When you heard it, you had to stop whatever you were doing, do the Hail Marys in your head, and then return to what you were doing. Like it would come in the middle of a Latin class. I'm just conjugating the love verb, amo, amas, amat, and doingggg! you have to stand up, go through the whole Angelus, mother-of-God thing and then crack on with amamus, amatis, amant. Sir! Because, if you didn't, Whack! Cane. Belt. Education by fear. And the really funny thing was they wouldn't tolerate bullying between peers. Prefects could bash you with a slipper, but you weren't allowed to give each other a rough time. Like who do you think you are? You haven't yet earned the privilege of being violent.",
                    "My parents' lot had literally crawled away from the second world war, taking with them two vital commodities by way of a survival mechanism: respectability and security. It was odd, coming from a Christian household, but the big thing was about not being what they called \"common\". I got all that, \"Don't play with him, he's common\". I had a friend called Grenville Barker who'd come round sometimes and play football on the lawn, but not very often. And I wasn't allowed to go to his home very often because they were working class. He was what my mother called a bad influence. Everything had to do with influence. My mother was desperate I should be properly influenced, have a proper, received accent, be sent away to school at eight. So all you can do is go into yourself, immerse yourself in your own life.",
                    "I couldn't possibly do that. To be able to understand being five years old and write as if you were that age through the book till you get to that extraordinary flowery-pretentious age of the 18-/19-year-old. It's so complicated when you're dealing with memory because of the perspective and how it keeps changing. You have to learn how you see things. It's about...lordy-me, I've forgotten the word. This time in the morning. Never mind, come to me in a moment, let's have more coffee...conditioning.",
                    "There is no such thing as all good people and all bad people. We're all capable. It exists within us. In war-time, as we're finding out now, things that have been on camera, our wonderful troops, who we felt were absolutely impeccable, were as guilty as everybody else of. If you're given license to kill, it's going to release many an evil.",
                    "Someone once asked me, \"Is there anything you regret?\" and I said, \"Everything!\" Whatever you do, there was always a better choice.",
                    "I've always felt, and I think I'm qualified to say so because I've won a few awards, that it's a terrible shame to put something in competition with something else to be able to sell something. Confronted with films like Brokeback Mountain (2005) and Capote (2005) and the Johnny Cash movie (Walk the Line (2005)), you can't pit one against the other. Films are not made to be competitive in that sense.",
                    "\"If\" and \"only\" are the two words in the English language that should never be put together.",
                    "You know, I've never guided my life. I've just been whipped along by the waves I'm sitting in. I don't make plans at all. Plans are what make God laugh. You can make plans, you can make so many plans, but they never go right, do they?",
                    "Also, the wonderful thing about film, you can see light at the end of the tunnel. You did realize that it is going to come to an end at some stage.",
                    "I first decided that I wanted to act when I was 9. And I was at a very bizarre prep school at the time, to say high Anglo-Catholic would be a real English understatement.",
                    "I've spent a great deal of my life doing independent film, and that is partly because the subject matter interests me and partly because that is the basis of the film industry. That's where the filmmakers come from, it's where they start and sometimes its where they should have stayed.",
                    "[on David Niven] Now if I could be David Niven, I'd be content. He knows how to live life. He's charming, he's amusing, he's so up. An up man! I'm sure he's also complicated, but he never lays it on you.",
                    "I remember talking to Olivier when we were doing Lear. He said: 'When it comes to your obituary they will only mention two or three performances, and they will be the ones that defined you early on.' I said: 'What will they write about you?' 'Richard III (1955) and Wuthering Heights (1939)_', he replied. And he was right.",
                    "I have done all sorts of extraordinary things, I know. At the time I didn't think anything of it. But when you look back you think, 'Jesus Christ!' [Would I live it again?] No thank you. I'm with Beckett there. It's not good enough to die. One has to be forgotten.",
                    "On his drinking: \"I wasn't like Oliver Reed. He was a competitive drinker. He'd say, 'I can drink you under the fucking table.' And I'd say: 'I'm sure you could, Oliver. But where's the fun in that?' \"",
                    "Oh God, yes, there are moments where you say, 'Wouldn't it have been nice?' Look at Daniel Day-Lewis, he's handled himself very well. He keeps retiring. I wish I'd thought of that! No, I know Danny well, and he's very amusing. But he certainly has a very cute understanding of the game. And he's got them eating out of his hand.",
                    "On playing gay characters: \"It's a big deal for some actors, and for some people. But I understand it. I was away at school, you know?\"",
                    "On making Indiana Jones and the Kingdom of the Crystal Skull (2008): \"I don't suppose we could talk about the lack of enjoyment in making it?\"",
                    "It's more like 1984 meets Alien, if you want to do one of those modern meetings, than it is Orwellian in that sense. It's borrowed abit from Orwell.",
                    "[on the themes of 'V for Vendetta'] It's more like 1984 meets Alien, if you want to do one of those modern meetings, than it is Orwellian in that sense. It's borrowed a bit from Orwell.",
                    "Well, I would say that if you could manage to get to the end of The Elephant Man without being moved... I don't think you'd be someone I'd want to know.",
                    "(2011, on The Osterman Weekend) The script was pretty difficult. So was Sam [Peckinpah]. It wasn't until I made him laugh that I thought, \"Thank God.\" There's a scene in the film where I have to imitate a weatherman, and that had Sam rolling in the aisles. Before that, he would say things like, \"Why do you move so fast?\" He wasn't exactly encouraging of confidence. But afterwards, I couldn't put a foot wrong. We were terrific, and I saw him until the day that he died.",
                    "(2011, on Spaceballs) Mel [Brooks] called and said, \"Look, John, I'm doing this little movie and there's a bit in there that has to do with Alien, so come on over.\" He made it sound like a bit of a picnic. He also did that to me on History Of The World: Part I. He always does that. \"Come on, I'll give you a couple grand, we'll put you up in a nice hotel, you'll have a good time, and then you can go back again.\" And when you get there, you suddenly realize, it's a $3 million scene-God knows how much the animatronic singing and dancing alien cost-and they couldn't possibly have done it if it hadn't been for you. What I'm saying is, I think he got me rather cheap.",
                    "(2011) I'm not interested in awards. I never have been. I don't think they are important. Don't get me wrong, if somebody gives me a prize, I thank them as gratefully as I know how, because it's very nice to be given a prize. But I don't think that awards ought to be sought. It encourages our business to be competitive in absolutely the wrong way. We're not sportsmen; we're not trying to come in first.",
                    "(2011, on The Elephant Man) It took 12 hours to apply the original makeup. I thought to myself, \"They have actually found a way of making me not enjoy a film.\" Christopher Tucker, who devised the makeup, applied it that first day and when he was done, I hobbled into the studio. I was in terror of anybody laughing, because if anybody had giggled or laughed at all, the whole house of cards would have collapsed. But there was an absolute hushed silence, which was only broken by Anthony Hopkins saying, \"Let's do the test.\" So it started, and that spell lasted.",
                    "(2011, on why he did King Ralph) Well, the coffers run low every now and then. And my friend Peter O'Toole was doing it, the idea wasn't so bad, and I was a big admirer of John Goodman. But I have to say, the director [David S. Ward], who I believe is a good writer, is not a good director. He really did make the whole thing turgid and difficult. It looked like it would be a lot of fun, but it turned out to be not a lot of fun at all. It was take after take after take for no possible reason. You couldn't tell the difference between it and the dirt on the ground.",
                    "(2011, on Frankenstein Unbound) Everybody's got to work with Roger Corman. You can't leave out that experience. I was amazed when I met him, because I was expecting to see this rather freaky character with hair all over the place-a complete crazy man. But he wasn't. He was dressed in a tie and a suit, with very neat hair. At first, I thought he was a solicitor.",
                    "(2011, on V For Vendetta) We shot it in Berlin, so it was strange behaving like Hitler in the middle of that city. Some of the locations were exactly where Hitler gave speeches.",
                    "[on Downton Abbey (2010)] I just think it is poxy! I mean, I'm sorry, but it is rotten writing and rotten acting. And he [Julian Fellowes] is on the board of the Smith committee!",
                    "I certainly wouldn't go as far as saying proud, but I'm absolutely amazed I've lasted that long [50 years]. I knew I wanted to act from a very young age - from about nine, really - but I didn't know how to go about it. I had no idea. The world was a much bigger place then. Also you didn't have the communications we have today: now we've all got the internet, we know what's going on everywhere. We didn't then. We'd only just got used to the typewriter.",
                    "I had no idea that Doctor Who (2005) had got so huge; I just thought, \"Brilliant, I'll be a Doctor!\" I was suddenly - what do they call it? You start \"trending\". This is all new to me!",
                    "I'm very much of the opinion that to work is better than not to work. There are others who'd say, \"No, wait around for the right thing\" - and they will finish up a purer animal than me. For example, Daniel Day-Lewis will only do what he thinks is right. I couldn't wait that long between films. He's wonderful Danny, but our philosophy is different in that sense. Of course, I don't do everything by any means: I do turn lots of stuff down, because it's absolute crap. But I usually find something interesting enough to do.",
                    "Of course you have to remember that the Doctors are all one person, so I'm not outside of that. I can't talk about it, but I will say I was really impressed when I did it. Both the previous doctors - Matt Smith and David Tennant - boy, are they good at it. Whoa-wee! They are so quick, and there's a huge amount of learning and no time to learn it in. All that fake scientific nonsense. Terribly difficult to learn.",
                    "I've done a couple of conferences where you sit and sign autographs for people and then you have photographs taken with them and a lot of them all dressed up in alien suits or Doctor Who (2005) whatevers. I was terrified of doing it because I thought they'd all be loonies, but they are absolutely, totally charming as anything. It's great fun. I'm not saying it's the healthiest thing - I don't know whether it is or isn't - but they are very charming.",
                    "[on the original series of Doctor Who (1963)] I don't think I saw the first episode and I think it escaped me for quite a long time. It was a kiddies' programme, or it was assumed to be. It was known basically for the fact that all the scenery used to fall over."
                ],
                "placeOfBirth": " Shirebrook, Derbyshire, England, UK",
                "salaries": [],
                "spouse": [
                    {
                        "dateFrom": "March 2005",
                        "dateTo": "present",
                        "nameId": {
                            "id": "nm3047095",
                            "name": "Anwen Rees-Myers"
                        }
                    },
                    {
                        "childrens": "2 children",
                        "dateFrom": "24 January 1990",
                        "dateTo": "1996",
                        "nameId": {
                            "id": "nm1756802",
                            "name": "Jo Dalton"
                        },
                        "status": "divorced"
                    }
                ],
                "starSign": "Aquarius",
                "tradeMark": [
                    "Frequently plays characters who suffer physical torment",
                    "Often plays characters with positions of power",
                    "Deep gravelly voice"
                ],
                "trivia": [
                    "He lived with Marie-Lise Volpeliere-Pierrot from 1967-1983, when she was killed in a riding accident.",
                    "Trained to become a painter at Grimsby Art School.",
                    "Studied at RADA.",
                    "He is an Associate of RADA.",
                    "He did the film History of the World: Part I (1981) because he had just gotten through doing two seriously dramatic films and said that he wanted to have fun and do a comedy.",
                    "Has two sons with Jo Dalton: Nicolas and Alexander.",
                    "Has worked with two Boromirs. In Ralph Bakshi's film The Lord of the Rings (1978), he provided the voice of \"Aragorn\", opposite Michael Graham Cox (as \"Boromir\") who went on to reprise the role for BBC radio. He later appeared in The Field (1990) with Sean Bean, who played the role in Peter Jackson's adaptation.",
                    "His mother opened a school at his father's vicarage when he was five.",
                    "Is the youngest of three children.",
                    "Father was a vicar in Derbyshire.",
                    "Spoofs his role from Alien (1979) in Spaceballs (1987).",
                    "26th January 2006, received an honorary Doctorate in Letters from the University of Hull, Yorkshire.",
                    "Was not the first choice for the role of \"Kane\" in Alien (1979). He was brought in on the second day of filming after Jon Finch, the original actor cast for the role, was diagnosed with a severe case of diabetes and taken to hospital.",
                    "As Winston Smith in Nineteen Eighty-Four (1984) he portrays a victim of a totalitarian society, with Big Brother as its head. In V for Vendetta (2005), he portrays the \"Big Brother\"-type leader \"Chancellor Sutler\".",
                    "Provided the voice of Aragorn in Ralph Bakshi's film The Lord of the Rings (1978). Though not a financial success, it sparked enough interest in Tolkien's works that the BBC decided to air its own adaptation, and it was also what inspired Peter Jackson to make his live-action films. Both subsequent adaptations featured Ian Holm, with whom Hurt appeared in Alien (1979).",
                    "An early passion for acting was triggered when he saw Alec Guinness play Fagin in the film Oliver Twist (1948).",
                    "His sister became a school teacher in Australia; his brother, the eldest child, a Roman Catholic monk.",
                    "Was offered the role of Dr. Yueh in Dune (1984).",
                    "Was friends with the late John Entwistle, bassist and founding member of The Who. He had written a poem about him and read it out loud at his memorial October 24th, 2002.",
                    "He was awarded the CBE (Commander of the Order of the British Empire) in the 2004 Queen's Birthday Honours List for his services to Drama.",
                    "The make-up he wore to play The Elephant Man (1980) also inspired the appearance of Gothmog in Peter Jackson's The Lord of the Rings: The Return of the King (2003).",
                    "He was considered for the role of Dr. Sam Loomis in Halloween (2007).",
                    "Once an alcoholic, he quit drinking after his fourth marriage in 2005.",
                    "He played the Roman Emperor Caligula between the ages of 16 (in 29 AD) and 28 (in 41 AD) in I, Claudius (1976).",
                    "He is the first Oscar nominated actor to play the Doctor in Doctor Who (1963) or Doctor Who (2005).",
                    "London, England [May 2009]",
                    "He is the oldest actor to play the Doctor on television.",
                    "He is the first CBE to play the Doctor on television.",
                    "As of 2014, has appeared in three films that were nominated for the Best Picture Oscar: A Man for All Seasons (1966), Midnight Express (1978) and The Elephant Man (1980). The only one to win was A Man for All Seasons (1966).",
                    "Was the voice of Aragron in The Lord of the Rings (1978), which featured Norman Bird as Bilbo, Christopher Guard as Frodo, William Squire as Gandalf and . In other films, Hurt went on to work with two other Gandalfs, Bilbos and Frodos, and one other Sam Gamgee. Watership Down (1978) featured Michael Hordern, who played Gandalf for the BBC Radio adaptation. The Black Cauldron (1985) featured John Huston, who played Gandalf in 'The Hobbit (1977)(TV)'. Scandal (1989) featured Ian McKellen, who played the part in Peter Jackson's films. In Harry Potter and the Deathly Hallows: Part 1 (2010), he appears with Bill Nighy, who played Sam in the BBC Radio version. In Crimes à Oxford (2008), he works with Elijah Wood, who played Frodo in Peter Jackson's films. In 'Pride (2004)(TV)' he works with Martin Freeman, who played Bilbo in The Hobbit: An Unexpected Journey (2012). In Alien (1979), he works with Ian Holm, who played Frodo on the radio, and Bilbo in The Lord of the Rings: The Fellowship of the Ring (2001).",
                    "He was awarded the Knight Bachelor of the Order of the British Empire in the 2015 Queen's New Years Honours List for his services to drama as an actor. He lives in Cromer, Norfolk, England.",
                    "He was awarded the Knight Bachelor of the Order of the British Empire in the 2015 Queen's New Years Honours List for his services to drama as an actor. He lives in Norfolk, England.",
                    "He has shared a role, apart from Aragorn, with three cast members of Peter Jackson's Middle-Earth films. In Immortals (2011) he plays the older version of Zeus, who is played as a young man by Luke Evans. In Percy Jackson & the Olympians: The Lightning Thief (2010), Zeus is played by Sean Bean. He has also played the Doctor, as has Sylvester McCoy.",
                    "He is the only actor to have played the Doctor in Doctor Who (1963) or Doctor Who (2005) to have been given a knighthood.",
                    "He has two roles in common with Sylvester McCoy: (1) McCoy played the Seventh Doctor in Doctor Who (1963) while Hurt played the War Doctor in Doctor Who (2005) and (2) Hurt played the Fool in King Lear (1983) while McCoy played him in King Lear (2008).",
                    "Was cast as Doctor Who when Christopher Eccleston declined to reprise the role for the Time War episodes. To avoid throwing off the numbering of subsequent Doctors (Eccleston as the Ninth Doctor, etc.), his version was designated the \"War Doctor.\"."
                ],
                "uniqueName": "John Hurt",
                "urlPhoto": "http://ia.media-imdb.com/images/M/MV5BMTM1NTgyMTAyOV5BMl5BanBnXkFtZTcwMTE4MjQwNA@@._V1_SY98_CR1,0,67,98_AL_.jpg"
            };
            callback({ data: data });
        };
        return MockDataService;
    })();
    services.MockDataService = MockDataService;
})(services || (services = {}));
