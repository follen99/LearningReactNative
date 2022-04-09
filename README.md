# Learning React-Native

## Cos'è React-Native?

React Native è un **framework** per applicazioni **mobile** che viene utilizzato principalmente per creare applicazioni per **Android, iOS e Web**.

## Configurazione dell'ambiente

### Usare NodeJS

La prima cosa da fare per installare React Native è scaricare NodeJS:

```shell
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```

> Per usare React-Native è meglio utilizzare la versione 14.x di NodeJS perchè le ultime versioni danno problemi. Quindi se hai installato una versione > 14.x di NodeJS effettua un downgrade alla versione 14.x.
>
> [Downgrade NodeJS](https://stackoverflow.com/questions/47008159/how-to-downgrade-node-version)

### Creare un progetto

Per creare un progetto React-Native la prima cosa da fare è usare il comando `expo init`:

```shell
expo init NuovoProgetto

cd NuovoProgetto
npm start # you can also use: expo start
```

Per altre informazioni fare riferimento a [questo](https://reactnative.dev/docs/environment-setup) link.

## Struttura del progetto

Un progetto React Native ha diversi files, ed è bene conoscere le funzioni di ognuno di essi.

### assets/

La cartella assets salva tutti gli asset che stiamo usando in react-native. In questa cartella possiamo aggiungere dei **files statici** come immagini o fonts. 

### components/

In questa cartella possiamo creare **diversi componenti** che vengono usati per "wrappare" i componenti dell'applicazione; questi elementi determineranno il **layout finale**. 

![img](https://miro.medium.com/max/1284/1*B8JBJgqPz2xI1QyFOnuyeQ.png)

Possiamo suddividere i componenti in diverse categorie:

- **Atomi:** I componenti più piccoli; in questa categoria rientrano elementi come i **buttons, titoli, inputs, animazioni, etc.** Anche i **fonts** vengono salvati nella cartella **atoms**.
- **Molecole:** Sono la composizione di **uno o più atoms**.
- **Organismi:** La combinazione di più molecole che lavorano insieme in modo da creare interfacce elaborate.
- **Templates:** La collezione di organismi che creeranno un **full-page template.**

In questa sezione verranno aggiunti  nuovi componenti della struttura man mano che essi verranno studiati; per il momento, fare riferimento a [questa](https://learn.habilelabs.io/best-folder-structure-for-react-native-project-a46405bdba7) pagina.

# Concetti Fondamentali

- [View](##View)
- [Text](##Text)
- [Image](##Image)
- [Button](##Button)
- [Touchables](##Touchables)
- [Alert](##Alert)
- Per altri componenti, fare riferimento a [questo link](https://reactnative.dev/docs/accessibilityinfo).

## View

In React-Native non sono presenti i classici tag come \<div>  di HTML, ma abbiamo lo stesso dei componenti  "contenitori", che possiamo usare per **raggruppare o nominare** dei figli:

```react
<View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
</View>
```

### Cosa sono gli styles?

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

- `flex: 1` Indica che questa view è **flessibile** e può crescre orizzontalmente o verticalmente per riempire degli spazi vuoti. Questo permette alla view di riempire tutto lo schermo.
- `backgroundColor: '#fff'` indica che lo sfondo sarà di colore **bianco**; per cambiare il colore ci basta cambiare il valore compreso negli apici singoli. 
  Possiamo usare anche dei **nomi** per indicare i colori: `dodgerblue` indica un colore preciso.
- `alignItems: 'center'`  e `justifyContent: 'center'` questi due elementi ci permettono di posizionare la nostra view al centro dello schermo. 
  Senza questi due elementi il nostro testo andrebbe a posizionarsi nell'angolo in alto a sinistra.

### Safe area

Nei nuovi dispositivi potremmo avere il problema di dover posizionare i nostri elementi all'interno di una **safe area**, ovvero un'area nella quale siamo sicuri di poter posizionare elementi. Questo perchè il dispositivo potrebbe essere dotato di una **notch**, che impedirebbe la corretta visualizzazione della view.

Per correggere questo comportamento, ci basta aggiungere `SafeAreaView` nelle importazioni:

```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
```

Possiamo quindi sostituire `View` con `SafeAreaView` nel nostro codice:

```react
<SafeAreaView style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
</SafeAreaView>
```

> Per sostituire più testo allo stesso momento in Visual Studio Code, ci basta selezionare il testo da sostituire, e premere ctrl+d o cmd+d per sostituire più testo contemporaneamente.
>
> Per uscire dalla modalità _multi cursor editing_ ci basterà premere `esc` . 

Quello che **SafeAreaView** fa, è semplicemente aggiungere la giusta quantità di **padding top** per essere sicura che il testo sia visibile.

## Text

## Image

## Button

## Touchables

## Alert



