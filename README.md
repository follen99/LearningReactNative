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

```shell
opzione1: npx create-expo-app --template

opzione2: npx @react-native-community/cli init Awesome01
```

Dopodichè potrebbe essere utile rendere il progetto una semplice directory, e non un repository git (viene creato automaticamente); per togliere i file di git lanciare i comandi:

Seleziona un template con le frecce (up/down) e premi invio.

Viene poi creata una cartella contenente il progetto.

```shell
del /F /S /Q /A .git
rmdir /s /q .git
```

Per eseguire basta digitare:

```shell
To run your project, navigate to the directory and run one of the following npm commands.

- cd simpleTestApp
- npm run android
- npm run ios # you need to use macOS to build the iOS project - use managed workflow if you need to do iOS development without a Mac
- npm run web
```

Se l'applicazione non viene eseguita correttamente, avviare il server metro con il comando:  `npx react-native start`

### Check ADB

Per effettuare un check ADB digitare

```shell
$ adb devices -l
> List of devices attached
> emulator-5554          device product:sdk_gphone64_x86_64 
> model:sdk_gphone64_x86_64 device:emu64xa transport_id:5
```



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

- [View](#View)
- [Text](#Text)
- [Image](#Image)
- [Button](#Button)
- [Touchables](#Touchables)
- [Alert](#Alert)
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

Per aggiungere del testo all'interno della nostra applicazione, dobbiamo sempre farlo tramite il componente `<Text> </Text>` .

### Props

Possiamo aggiungere dei cosiddetti `props` ai nostri componenti, che specificano un comportamento; ad esempio, se avessimo un testo molto lungo, e volessimo limitare le linee utilizzate per mostrare questo testo, ci basterebbe usare il prop `numberOfLines`:

```javascript
<SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
```

In questo modo questo modo, alla fine della prima linea verranno visualizzati dei puntini sospensivi (...) per indicare che il testo continua, ma non è visualizzato interamente.

### Eventi

Possiamo anche impostare un'azione che viene eseguita a seguito di un **evento:**

```javascript
<SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Click rilevato")}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
```

Possiamo usare `onPress={}` per eseguire un'azione quando un componente viene cliccato; possiamo eseguire l'azione in due modi:

#### Inline

Scriviamo una **funzione lambda** (inline) che esegue un'azione; questo metodo è utile nel momento in cui l'azione da eseguire è poco complessa, come un alert o un log in console.

#### funzione separata

```javascript
export default function App() {
  const handlePress = () => console.log("click rilevato");
    
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} >
          Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
```



## Image

## Button

## Touchables

## Alert



# ToDo List

Per creare il profetto digitiamo questo comando; scegliamo il tipo di progetto **blank**.

```shell
$ expo init ToDoList
```

## Creazione di componenti

Per creare un componente non ci basta altro che creare una nuova cartella chiamata **components**, al cui interno potremo creare i nostri componenti sottoforma di files **javascript**.

Nel nostro caso, il primo componente da creare è il **Task**, ovvero un componente grafico che ci permette di visualizzare un task che dobbiamo completare; la sua forma basilare è la seguente:

```javascript
import react from "react";
import {View, Text, StyleSheet} from 'react-native';

const Task = () => {
    return(
        <View>
            <Text>
                Questo è un task
            </Text>
        </View>
    )
}

/**
 * gli stili grafici del componente
 */
const styles = StyleSheet.create({

});

export default Task;    // in questo modo può essere referenziato in altri files
```

A noi interessa creare dei Components perchè dobbiamo poter riutilizzare questi componenti in più aree della nostra applicazione; ad esempio, il component Task verrà utilizzato diverse volte per visualizzare più tasks.

## Passare argomenti ai components

Per passare degli argomenti (ad esempio del testo da visualizzare), ci basta dire che il nostro Task riceve dei **props**:

```javascript
/**
 * 
 * @param {*} props gli argomenti da visualizzare
 * @returns la view
 */
const Task = (props) => {
    return(
        // visualizzo il testo passato come argomento
        <View>
            <Text>
                {props.text}    
            </Text>
        </View>
    )
}
```

In questo modo, possiamo "inviare" del testo al nostro task dal file App.js:

```javascript
<View style={styles.items}>
    {/** qui è dove andranno visualizzati i task */}
	<Task text = {'task 1'}/>
    <Task text = {'task 2'}/>
    <Task text = {'task 3'}/>
</View>
```

Quello che otteniamo è qualcosa del genere:

![](https://i.ibb.co/f9wQ2nT/Screenshot-20220411-125029.png)

## Stili utili

- `justifyContent: 'space-between'`: separa due elementi e li posiziona ai lati estremi dello schermo.
- `flexDirection: 'row'`: dispone gli elementi sulla stessa riga (e non in due righe diverse in un'unica colonna).
- `alignItems: 'center'`: allinea più elementi al centro dello schermo.

## Creare uno stato

```javascript
import {useState} from 'react';

const [task, setTask] = useState();
```

- **task**: nome dello stato, lo usiamo per effettuare il track dello stato (in questo caso dell'immissione del reminder)
- **setTask**: la funzione che useremo per impostare lo stato

Usiamo lo stato per le cose che cambiano spesso nella nostra applicazione  
