# Natuurkunde samenvatting

## H1 - Bewegingen in grafieken

!!!note "Delta"
	Delta (Δ) is om een verschil tussen 2 getallen aan te geven. Bijvoorbeeld Delta (Δ) T betekent T2 - T1

-----

$$V(gem) = \frac{Δx}{Δt}$$

Deze formule wordt gebuikt om (de gemiddelde) snelheid in $m/s$ te berekenen

- V = Snelheid in $m/s$
- ΔX = Verschil afstand (m)
- ΔT = Verschil tijd (s)

-----

$$A(gem) = \frac{ΔV}{ΔT}$$

Deze formule wordt gebruikt om (de gemiddelde) acceleratie in $m/s^2$ te berekenen

- A = Acceleratie in $m/s^2$
- ΔV = Verschil snelheid ($m/s$)
- ΔT = Verschil tijd (s)

-----

## H2 - Electriciteit

!!!warning "Constanten"
	- De lading van een electron: $e = -1.60 * 10^{-19} C$
	- 1 kWh = 3.6 MJ

!!!note "Ampere-uren"
	Een Ampere-uur is een tijdseenheid. Dit staat meestal op batterijen. 1 Ampere-uur betekent dat een apperaat voor 1 uur 1 ampere kan krijgen, maar ook dat een apperaat voor 2 uur 0.5 ampere kan krijgen. Dit werkt hetzelfde bij een kilowattuur

!!!note "Soorten weerstanden"
	- Ohmse weerstanden: Constante weerstanden
	- PTC-weerstand: Positieve temperatuur coefficient. De weerstand neemt toe wanneer de temperatuur toeneemt
	- NTC-weerstand: Negatieve temperatuur coefficient. De weerstand neemt af wanneer de temperatuur toeneemt
	- LDR-weerstand: Light Dependent Resistor. De weerstand neemt af wanneeer de lichtsterkte toeneemt

!!!note "Speciale componenten"
	- Diode: Laat alleen stroom lopen in 1 richting. Heeft een drempelwaarde
	- Relais: Soort van electronische schakelaar.

-----

$$I = \frac{Q}{t}$$

Deze formule wordt gebruikt om de stroomsterkte uit te rekenen.

- I = Stroomsterkte in ampere($A = C/s$)
- Q = De lading in coulomb (C)
- t = De tijdsduur in seconde (s)

-----

$$G = \frac{1}{R} \\ R = \frac{1}{G}$$

Deze formule wordt gebruikt om de Geleidbaarheid of Weerstand uit te rekenen.

- G = Geleidbaarheid in siemens (S)
- R = Weerstand in ohm (Ω)

-----

$$U = I * R$$

Deze formule wordt gebruikt om de relatie tussen U, I en R aan te geven (dus volt, ampere en ohm) (De formule $I = G * U$ is hetzelfde)

- U = Spanning in volt (V)
- I = Sroomsterkte in ampere (A)
- R = Weerstand in ohm (Ω)

-----

$$P = \frac{E}{t} \\ P(el) = U * I$$

Deze formule wordt gebruikt om het vermogen in watt uit te rekenen.

- P = Vermogen in Watt ($W = J/s$)
- E = Omgezette(gebruikte) energie in joule (J)
- t = Tijd in seconden (s)
- I = Stroomsterkte in ampere(A)
- U = Spanning in volt (V)

-----

$$n = \frac{E(nut)}{E{in}} \\ n = \frac{P(nut)}{P(in)}$$

Deze formule rekent het rendement (Nuttige energie percentage) uit.

n = Het rendement
E = Energie in joule (J)
P = Vermogen in watt (W)

-----

### Type schakelingen

Er zijn 2 type schakelingen. Paralel en serie schakelingen.
&nbsp;

Bij Serie schakelingen gelden de volgende regels:

$I(tot) = I(1) = I(2) ...$

$U(tot) = U(1) + U(2) ...$

$R(tot) = R(1) + R(2) ...$

$G(tot) = \frac{1}{R}$

Dit betekent dat I(A) altijd! gelijk is in een serieschakeling. U(V) wordt verspreid over elke weerstand. R(ohm) kan je bij elkaar optellen. Geleidbaarheid kan je halen uit R.
&nbsp;

Bij Paralel schakelingen gelden de volgende regels:

$U(tot) = U(1) = U(2) ...$

$I(tot) = I(1) + I(2) ...$

$G(tot) = G(1) + G(2) ...$

$R(tot) = \frac{1}{G}$

Dit betekent dat U(V) altijd! gelijk is in een paralelschakeling. I(A) wordt verspreid over elke weerstand. G(s) kan je bij elkaar optellen. Ohm kan je halen uit G.
&nbsp;

Gemengde schakelingen:

Bij gememgde schakelingen is het doel om alles te mengen tot 1 type schakeling, het liefst een serieschakeling.

//insert formules met schakelingen here

---

## H5 - Straling

!!!danger "Belangrijk!"
	Voor dit hoofdstuk zijn de volgende pagina's in binas nodig:

	- BINAS 25A+B
	- BINAS 28F

!!!warning "Constanten"
	- 1 eV = $-1.60 * 10^{-19} J$

!!!note "Type Straling"
	Er zijn 4 soorten ioniserende straling.

	- Rontgenstraling & Gammastraling(Y): Veel doordringend vermogen, weinig ioniserend vermogen
	- Betastraling(B): Middelmatig doordringend vermogen, middelmatig ioniserend vermogen
	- Alphastraling(A): Weinig doordringend vermogen, veel ioniserend vermogen

	Doordringend vermogen is hoe ver de straling in een materiaal door kan komen, aangegeven in halveringsdikten.

	Ioniserend vermogen is hoe veel deeltjes de straling "weg kan slaan", dus hoeveel kracht deze heeft. Dit is meestal bij alpha en beta straling aangegeven in MeV(Mega Electonvolt)

-----

$$A = N + Z$$

Deze formule wordt gebruikt om het aantal kerndeeltjes in een atoom uit te rekenen

- N = Het aantal neutronen in een kern
- Z = Het aantal protonen in een kern (het atoomnummer)

-----

$$n = \frac{t}{t_{1/2}}$$

- n = Aantal halveringen
- t = lopende tijd in seconden
- $t_{1/2}$ = Halveringstijd in seconden

-----

$$N = N_0 * (\frac{1}{2})^n \\ A = A_0 * (\frac{1}{2})^n$$

Deze formule kan je gebruiken om de activiteit of aantal kernen na een bepaalde tijd te berekenen.

- N = Aantal instabiele kernen na *n* halveringstijden
- $N_0$ = Aantal instabiele kernen op tijdstip t = 0
- A = Aantal activiteit na *n* halveringstijden
- $A_0$ = Beginactiviteit op tijdstip t = 0
- n = Aantal halveringen

-----

$$A = -\frac{ΔN}{Δt}$$

Met deze formule kan je het aantal activiteit van een stralingsbron berekenen

- A = Activiteit in bq
- N = Aantal instabiele kernen
- t = tijdsduur

-----

$$D = \frac{E_{str}}{m}$$

Met deze formule kan je de stralingsdosis berekenen.

- D = De stralingsdosis in gray (Gy = J/kg)
- $E_{str}$ = Hoeveelheid geabsorbeerde straling (zie binas 25A)
- m = Massa

-----

$$H = w_r * D$$

Met deze formulke kan je de equivalente stralingsdosis uitrekenen.

- H = Equivalente dosis in sievert (Sv = J/kg)
- $w_r$ = Stralingsweegfactor (alpha straling is 20, de rest 1)
- D = De geabsorbeerde dosis in gray

-----

### Atoomformules

Atomen worden opgeschreven in de vorm $_ 4 ^2 He$

Dus al voorbeeld het verval  $_ {224} ^{88} Ra$ :

$_ {224} ^{88} Ra =  _ 4 ^2α + _ {220} ^{86} Rn$

//Insert formule met H here

-----

## H3 - Krachten

-----

$$F_z = m * g$$

Met deze formule bereken je de zwaartekracht van een object in newton

- $F_z$ = Zwaartekracht in Newton (N)
- m = Massa in kilogram (Kg)
- g = De valversnelling ($m/s^2$)

-----

