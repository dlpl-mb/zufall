
# Dem Zufall auf der Spur
## Einstieg: Münzenwurf
Eine Behauptung: Wenn man einen Münze oft genug wirft, dann erhält man etwa gleich viele Kopf und Zahlwürfe. 
![enter image description here](https://microbit.eeducation.at/images/thumb/1/11/Kopf_zahl.jpg/300px-Kopf_zahl.jpg)
Testet man das in der Realität durch Münzenwerfen, so erhält man bei 10 Würfen Ergebnisse, wie etwa 6:4, 7:3 oder gar 5:5 - aber auch 9:1 ist möglich. Also ist man von der Behauptung "gleicher  Kopf und Zahlwürfen" weit entfernt. Vielleicht müsste man aber 1000 mal werfen, aber das ist zu zeitaufwendig.
## Versuch: Münzwurf mit Computer
Micro:bit kann ja Zahlen darstellen - und das Würfeln könnte der  Zufallsgenerator durchführen. (Siehe Menü Mathematik ). Mit Zufallszahl 0 nehmen wir die Kopfseite der Münze und mit Zufallszahl 1 nehmen wir Zahlseite.
```blocks
	input.onButtonPressed(Button.A, function () {
		basic.showNumber(randint(0, 1))
	})
```
 - Du kannst mit dieser Funktion mit dem Computer "eine Münze" werfen 
 - Versuche 20mal zu werfen - notiere die Ergebnisse

### Anzahl der Würfe erhöhen auf 100
100mal die A-Taste zu drücken ist zuviel Aufwand - wir verwenden eine Schleife - Menüpunkt **Schleife**
```blocks
	input.onButtonPressed(Button.A, function () {
		for (let index = 0; index < 100; index++) {
			basic.showNumber(randint(0, 1))
		}
	})
```
### Probleme und Verbesserung
 - Es dauert sehr lange, diesen Versuch zu beobachten und mitzuzählen
 - Es muss nun der Computer die Zählung übernehme - wir wollen den Versuche dann ja auch auf 10 000 Durchgänge ausbauen
 - Wir benötigen Variable zum Zählen der Versuche

## Arbeit mit Variablen
 - Nun verwenden wir eine Variable, mit der die Ergebnisse gezählt werden
 - Variable definiert man über den gleichlautenden Menüpunkt **Variable**
 - Wir nennen die neue Variable **Kopf**
- Wir addieren bei einem Treffer **Kopf** (Zufallszahl **0**) immer die Variable **Kop**f um 1 hoch
 - Wir arbeiten nun gleich einmal mit 1000 Durchläufen
```blocks
	let kopf = 0
	input.onButtonPressed(Button.A, function () {
		kopf = 0
		for (let index = 0; index < 1000; index++) {
			if (randint(0, 1) == 0) {
				kopf += 1
			}
		}
		basic.showNumber(kopf)
	})
```
 - Am Ende der Schleife wird die Zahl der **Kopfwürfe** angezeigt
 - Die Anzahl der **Zahlwürfe** kann man dann erreichnen
## Test und Verbesserung
 - Nun soll das Programm sofort nach dem Start aufrufen und gleich 1000 Versuche durchführen
 - Am Schluss soll mit **Taste A** die Zahl der Anzahl der Kopfwürfe darstellen, die **Taste B** sollte die Würfe mit dem Ergebnis **Zahl** darstellen.

```blocks
	input.onButtonPressed(Button.A, function () {
	    basic.showNumber(kopf)
	})
	input.onButtonPressed(Button.B, function () {
	    basic.showNumber(anzahl - kopf)
	})
	let kopf = 0
	let anzahl = 0
	anzahl = 10000
	kopf = 0
	for (let index = 0; index < anzahl; index++) {
	    if (randint(0, 1) == 0) {
	        kopf += 1
	    }
	}
	basic.showString("Fertig")
```
 - Am Ende der Schleife wird das Wort **Fertig** angezeigt
## Ergebnis des Versuches
 - Verändere die Zahl **anzahl** auf höhere Werte, etwa 100 000
 - Wir stellen fest: Je höher die **Anzahl** ist, umso näher rücken die Ergebnissen von **Kopf** und **Zahl** zusammen.

> Written with [StackEdit](https://stackedit.io/).


<!--stackedit_data:
eyJoaXN0b3J5IjpbNzczMDk5NTMyLC04NjA4MzIxNDAsLTE2Mj
k4ODI2ODAsMTU1ODg5MjE3MiwtMTEzMDEyNzk0MiwtMTE2ODY2
OTk1MCw3NjgwODY2NThdfQ==
-->