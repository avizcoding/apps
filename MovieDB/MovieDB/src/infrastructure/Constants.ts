﻿module Constants {

    export class Constants {
        // Usage: &name=jk%20simmons
        public static actorDataUrl: string = "http://www.myapifilms.com/imdb?format=JSON&filmography=1&limit=1&lang=en-us&exactFilter=1&bornDied=1&starSign=1&uniqueName=0&actorActress=1&actorTrivia=1&actorPhotos=N&actorVideos=N&salary=1&spouses=1&tradeMark=1&personalQuotes=1";
        public static movieDataUrl: string = "http://www.myapifilms.com/imdb?format=JSON&aka=1&business=1&seasons=0&seasonYear=0&technical=1&filter=N&exactFilter=1&limit=1&lang=en-us&actors=F&biography=1&trailer=1&uniqueName=1&filmography=1&bornDied=1&starSign=1&actorActress=1&actorTrivia=1&movieTrivia=1&awards=1&moviePhotos=N&movieVideos=N";
    }

}