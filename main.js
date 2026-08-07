// Dati delle app aggiornati con array di screenshot 
const apps = [
    {
        name: "AssetHub",
        description: "Un'app per monitorare il tuo Patrimonio e i tuoi Investimenti" +
            " e che rispetta la tua privacy. Nulla in Cloud, tutto in locale.<br>" +
            "<br>" +
            "- Gestione Banche, Conti e Strumenti<br>" +
            "- Inserimento dati dinamico in funzione dello strumento scelto (BTP, ETF, BFP, ecc)<br>" +
            "- Calcolo bollo statale diversificato per tipo di conto (Conto Corrente o Conto Deposito)<br>" +
            "- Cruscotto con statistiche e Patrimonio totale<br>" +
            "- Possibile inserimento di Azioni singole o PAC<br>" +
            "- Calcolatori e link utili.<br>" +
            "<br>" +
            "E molto altro ancora!",
        github: "https://github.com/Fedtorrent/AssetHub",
        apk: "apk/AssetHub.apk",
        screenshots: [
            "images/AH_0_Icona.png",
            "images/AH_1_Intro.jpeg",
            "images/AH_2_Crusc.jpeg",
            "images/AH_3_Banche.jpeg",
            "images/AH_4_Conti.jpeg",
            "images/AH_5_Strum.jpeg",
            "images/AH_6_VWCE.jpeg",
            "images/AH_7_Utils.jpeg",
            "images/AH_8_Impo.jpeg"
        ]
    },
    {
        name: "La Mia Salute",
        description: "App di gestione e controllo della propria salute e quella dei familiari.<br>" +
            "<br>" +
            "- Multiutente<br>" +
            "- Catalogo Farmaci<br>" +
            "- Notifiche per assunzione farmaci<br>" +
            "- Controllo q.tà farmaci e compilazione automatica mail da inviare al medico<br>" +
            "- Tieni sotto controllo il Peso, la Pressione, la Glicemia e inserisci le tue note.<br>" +
            "- Cataloga e ricerca velocemente i tuoi esami.<br>" +
            "<br>" +
            "E molto altro ancora!",
        github: "https://github.com/Fedtorrent/LaMiaSalute",
        apk: "apk/La_Mia_Salute.apk",
        screenshots: [
            "images/LMS_0_Icona.png",
            "images/LMS_1_Riepil.jpeg",
            "images/LMS_2_Catal.Farm.jpeg",
            "images/LMS_3_Stat.jpeg",
            "images/LMS_4_Pressione.jpeg",
            "images/LMS_5_DB_Esami.jpeg",
            "images/LMS_6_Menu.jpeg"
        ]
    },
    {
        name: "I Miei Magazzini",
        description: "Tieni traccia delle tue scorte, qualsiasi esse siano e ovunque siano.<br>" +
            "<br>" +
            "- Il database risiede sul tuo account Google. Segui le istruzioni per crearlo<br>" +
            "- Multiuser. Passa il link a chi vuoi per utilizzare lo stesso database<br>" +
            "- Filtri automatici per prodotti disponibili, esauriti, in scadenza, scaduti o posizione<br>" +
            "- Visualizzazione a schede o compatta<br>" +
            "- Modalità scura o chiara<br>" +
            "- Statistiche di magazzino.<br>" +
            "- Cataloga e ricerca velocemente i tuoi prodotti.<br>",
        github: "",
        apk: "#",
        screenshots: [
            "images/MAG_0.png",
            "images/MAG_1.jpeg",
            "images/MAG_2.jpeg",
            "images/MAG_3.jpeg",
            "images/MAG_4.jpeg",
            "images/MAG_5.jpeg",
            "images/MAG_6.jpeg",
            "images/MAG_7.jpeg",
            "images/MAG_8.jpeg",
            "images/MAG_9_Stat.jpeg",
            "images/MAG_10_Impo.jpeg",
            "images/MAG_11_Conf.jpeg"
        ]
    },
    {
        name: "Spese 730",
        description: "Registra scontrini e fatture detraibili/deducibili subito, appena ricevuti.<br>" +
            "Avrai subito il resoconto di spese e rimborsi da confrontare con il precompilato.<br>" +
            "<br>" +
            "- Il database risiede sul tuo telefono, con possibilità di backup sul tuo Drive.<br>" +
            "- Gestisci tutti i Codici Fiscali della famiglia o di chi vuoi<br>" +
            "- Divisione tra scontrini/fatture detraibili o deducibili<br>" +
            "- Calcolo del rimborso corretto (applica la franchigia di 129,11€ e rimborso Irpef del 19% sulla rimanenza)<br>" +
            "- Scarica e stampa un Report in pdf per ogni Codice Fiscale da presentare al commercialista<br>" +
            "- Archivio scontrini/fatture suddiviso per anno",
        github: "https://github.com/Fedtorrent/Spese730",
        apk: "apk/Spese_per_il_730.apk",
        screenshots: [
            "images/730_0.png",
            "images/730_1.jpeg",
            "images/730_2.jpeg",
            "images/730_3.jpeg"
        ]
    },
    {
        name: "I Miei Contatori",
        description: "Quante volte ho usato la lametta?<br>" +
            "E quando ho pulito il Robot l'ultima volta?<br>" +
            "Non scorderai più queste cose<br>" +
            "<br>" +
            "- Tieni traccia di quello che vuoi<br>" +
            "- Archivia o elimina i Contatori che non usi più<br>" +
            "- Fai il backup dei Contatori<br>",
        github: "https://github.com/Fedtorrent/IMieiContatori",
        apk: "apk/I_Miei_Contatori.apk",
        screenshots: [
            "images/CONT_0.png",
            "images/CONT_1.jpeg",
            "images/CONT_2.jpeg",
            "images/CONT_3.jpeg",
            "images/CONT_4.jpeg",
            "images/CONT_5.jpeg"
        ]
    }
];

// Stato del lightbox
let currentAppIndex = -1;
let currentScreenshotIndex = 0;

/**
 * Genera dinamicamente le schede delle app nella sezione dedicata.
 */
function renderAppGallery() {
    const galleryContainer = document.getElementById('app-gallery');

    if (!galleryContainer) {
        console.error("Contenitore 'app-gallery' non trovato.");
        return;
    }

    galleryContainer.innerHTML = '';

    apps.forEach((app, index) => {
        const card = document.createElement('md-elevated-card');
        card.className = 'app-card';

        // Determina se mostrare il pulsante GitHub
        const githubButtonHtml = (app.github && app.github !== "" && app.github !== "#")
            ? `
                <a href="${app.github}" target="_blank" class="action-link">
                    <md-outlined-button>
                        <md-icon slot="icon">code</md-icon>
                        GitHub
                    </md-outlined-button>
                </a>`
            : "";

        // L'immagine ora è cliccabile per aprire il lightbox
        card.innerHTML = `
            <img src="${app.screenshots[0]}" alt="Screenshot di ${app.name}" class="clickable-image" style="cursor: pointer;">
            <div class="app-card-info">
                <div class="app-card-content">
                    <h3 class="headline-small">${app.name}</h3>
                    <p class="body-medium">${app.description}</p>
                </div>
                <div class="app-card-actions">
                    ${githubButtonHtml}
                    <a href="${app.apk}" download="${app.name}.apk" class="action-link">
                        <md-filled-button>
                            <md-icon slot="icon">download</md-icon>
                            Scarica APK
                        </md-filled-button>
                    </a>
                </div>
            </div>
        `;

        // Event listener per l'immagine
        const img = card.querySelector('.clickable-image');
        img.addEventListener('click', () => openLightbox(index));

        galleryContainer.appendChild(card);
    });
}

/**
 * Funzioni per il Lightbox
 */
let dialog, lightboxImg, prevBtn, nextBtn, closeBtn;

function initLightbox() {
    dialog = document.getElementById('lightbox-dialog');
    lightboxImg = document.getElementById('lightbox-image');
    prevBtn = document.getElementById('lightbox-prev');
    nextBtn = document.getElementById('lightbox-next');
    closeBtn = document.getElementById('lightbox-close');

    // Event Listeners per la navigazione
    if (prevBtn) prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    if (nextBtn) nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    if (closeBtn) closeBtn.addEventListener('click', () => {
        dialog.close();
    });

    // Chiudi al click fuori dall'immagine (sulla zona scura)
    const content = dialog.querySelector('.lightbox-content');
    if (content) {
        content.addEventListener('click', (e) => {
            if (e.target === content) {
                dialog.close();
            }
        });
    }
}

function openLightbox(appIndex) {
    if (!dialog) initLightbox();
    currentAppIndex = appIndex;
    currentScreenshotIndex = 0;
    updateLightboxImage();
    dialog.show();
}

function updateLightboxImage() {
    const app = apps[currentAppIndex];
    if (app && app.screenshots[currentScreenshotIndex]) {
        lightboxImg.src = app.screenshots[currentScreenshotIndex] + '?t=' + new Date().getTime();

        // Gestione visibilità pulsanti nav
        prevBtn.style.display = app.screenshots.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = app.screenshots.length > 1 ? 'flex' : 'none';
    }
}

function showNext() {
    const app = apps[currentAppIndex];
    currentScreenshotIndex = (currentScreenshotIndex + 1) % app.screenshots.length;
    updateLightboxImage();
}

function showPrev() {
    const app = apps[currentAppIndex];
    currentScreenshotIndex = (currentScreenshotIndex - 1 + app.screenshots.length) % app.screenshots.length;
    updateLightboxImage();
}

// Inizializzazione al caricamento del DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAppGallery);
} else {
    renderAppGallery();
}
