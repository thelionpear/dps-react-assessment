Starting Friday, June 22, 12:28 PM 
ran cp .env.example .env
Messaging you guys now for Key. 

Have key. Beginning set up process. 2:30 
Working for 45 minutes straight. 
Created Beers component
Added route for Beers component in App.js
Working on branch "Get" to begin work on 
4.Use axios, fetch or any other HTTP Request library to GET the first 50 Beers from /api/all_beers. The way you choose to display / style this is up to you.
Taking first break. Was able to get the beers into state. Now figuring how to call info about them and display that. 

SESSION 2 3:36PM 
getting error (TypeError): beers.map is not a function
Had my <li> in a <div>. Tried removing the div. Didn't work. 
Thought maybe axios wasn't working. So I yarned again and specifically yarn added axios, but same problem still. Somehow, my array turns up empty when axios tries to get the info. I'm pretty sure something is
wrong with my Get. But it looks exactly like the one we did for the react-router lecture. 
No success figuring out what went wrong this session. 
Taking second break. No progress. 

SESSION 3 4:40PM 
continuing with the same bug. 
added import axios from 'axios' to both app.js and index.js because console says axios is not defined. 
Didn't work. 
Trying to see if I've done something wrong with set up. 
Went to brewery docs. 
Also opened the brewery_db gem 
tried installing it manually just in case 
beers.map is still not a function apparently 
According to my server, my get is working fine. 
16:59:00 web.1    | get http://api.brewerydb.com/v2/beers?key=4a67a4e833fd9ccbd77588fbaa724c33&p=1
and if I put that in postman, it comes up with an array of beers but my component doesn't seem to agree. 
Tried changing const beers to let beers. No change. 
Tried this.state.beers. No change. 
Another 45 minutes gone completely without success.
Taking a longer break. 

SESSION 4 8:33PM 
so I don't think I changed anything, but now my server doesn't seem to be doing my axios GET
And also, it isn't hitting my debugger the ComponentDidMount making me think the component didn't mount?
Still not sure what changed 
I noticed my react devtools say "waiting for roots to load". Tried googling this just in case. No good answers.
I notice, too, that it's not hot reloading. Not sure why. 