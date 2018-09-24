Pomodoro Clock
Link til FreeCodeCamp projektet

Level 1: Lav Pomodoro Clock-projektet fra FreeCodeCamp i React, hvor brugeren kan vælge, hvor længe der skal arbejdes og 
hvor længe der skal holdes pause. Fokusér på struktur og funktionalitet. Find ud af, hvordan du bruger javascript 
setTimeOut-funktionen til at starte (og stoppe) timeren.  

Brugeren skal kunne starte, stoppe og genstarte Pomodoro-timeren
Brugeren skal kunne indstille varighed af både arbejdsperiode og pauseperiode. 
Brugeren skal kunne se, hvor lang tid der er gået/tilbage i det nuværende interval
Timeren skal give et lydsignal, når den skifter fra arbejde til pause og fra pause til arbejde.


Level 2: Lav dine egne CSS-styles til app’en. 

Level 3: Find ud af at animere din CSS, så brugeren kan se tiden løbe ud (fx rotation af urskive eller progress bar).

Definition:
Work sessions followed by small breaks to improve concentration time. Work sessions can be a maximum of 45 minutes while small break sessions can be between 3 to 15
minutes. A session is a composite of a work session and small break. The longer breaks are introduced after 4 sessions.

App
state = {
	sessionTime = { 
		arbejdeTid = 25, 
		pauseTid = 5
	}
	session: 0
}
	Header
		number of sessions
	Arbejde
		defaultState = {
			arbejdeTid: 25
		}
		incrementArbejdeTid()
		decreaseArbejdeTid()
	Pause
		defaultState = {
			pauseTid: 5
		}
		incrementPauseTid()
		decreasePauseTid()
	Long Break
		15 or 30 (toggle or slider on/off)
	Timer
		session = arbejdeTid
		if(arbejdeTid = 0) {
			// show pauseTid
		}
		
		//functionality
		
		startSession()
		stopSession()
		resetSession()
		
App	
	Counter Down (timer going to zero)
	Counter (return a value, increase or decrease)
	
	
App
	timer = 25;
		Counter
		+ -
	