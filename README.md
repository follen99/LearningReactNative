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





