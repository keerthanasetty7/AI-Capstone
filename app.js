// Plantr - Main Application Controller & UI Logic

// Multi-Language Dictionary
const TRANSLATIONS = {
  en: {
    appTitle: "Plantr AI",
    tagline: "AI-Powered Plant Disease Prediction & Agronomist Diagnostic Engine",
    tabScanner: "AI Leaf Scanner",
    tabLibrary: "Disease Library",
    tabDoctor: "AI Doctor Chat",
    tabRadar: "Outbreak Radar",
    tabHistory: "Scan History",
    uploadTitle: "Drop your leaf image here or click to browse",
    uploadSub: "Supports JPG, PNG, WEBP (Max 15MB)",
    btnUpload: "Select Leaf Photo",
    btnCamera: "Use Camera",
    btnSample: "Try Sample Leaf",
    filterAll: "All Crops",
    sampleHeader: "Or Test Instant Sample Leaf Scans",
    scanHeading: "Diagnostic Report",
    confidence: "AI Confidence",
    affectedArea: "Affected Leaf Area",
    pathogen: "Pathogen Type",
    tabOrganic: "Organic Remedies",
    tabChemical: "Chemical Treatments",
    tabPrevention: "Prevention Guide",
    btnExport: "Export PDF Report",
    btnRescan: "Scan Another Leaf",
    chatPlaceholder: "Ask Plantr AI Doctor about crop care, dosages...",
    btnSend: "Send"
  },
  es: {
    appTitle: "Plantr AI",
    tagline: "Motor de Diagnóstico Agronómico y Predicción de Enfermedades",
    tabScanner: "Escáner de Hojas IA",
    tabLibrary: "Biblioteca de Enfermedades",
    tabDoctor: "Chat Doctor IA",
    tabRadar: "Radar de Brotes",
    tabHistory: "Historial de Escaneos",
    uploadTitle: "Arrastre su imagen de hoja aquí o haga clic para buscar",
    uploadSub: "Soporta JPG, PNG, WEBP (Máx 15MB)",
    btnUpload: "Seleccionar Foto",
    btnCamera: "Usar Cámara",
    btnSample: "Probar Hoja de Muestra",
    filterAll: "Todos los Cultivos",
    sampleHeader: "O Pruebe Escaneos de Muestra Instantáneos",
    scanHeading: "Informe de Diagnóstico",
    confidence: "Confianza de IA",
    affectedArea: "Área Afectada",
    pathogen: "Tipo de Patógeno",
    tabOrganic: "Remedios Orgánicos",
    tabChemical: "Tratamientos Químicos",
    tabPrevention: "Guía de Prevención",
    btnExport: "Exportar Informe",
    btnRescan: "Escanear Otra Hoja",
    chatPlaceholder: "Pregunte al Doctor Plantr sobre dosis o cuidados...",
    btnSend: "Enviar"
  },
  hi: {
    appTitle: "Plantr AI",
    tagline: "एआई-संचालित पौधा रोग निदान और फसल स्वास्थ्य मंच",
    tabScanner: "एआई पत्ती स्कैनर",
    tabLibrary: "रोग पुस्तकालय",
    tabDoctor: "एआई डॉक्टर चैट",
    tabRadar: "प्रकोप रडार",
    tabHistory: "स्कैन इतिहास",
    uploadTitle: "अपनी पत्ती की फोटो यहाँ ड्रैग करें या चुनें",
    uploadSub: "JPG, PNG, WEBP समर्थित (अधिकतम 15MB)",
    btnUpload: "फोटो चुनें",
    btnCamera: "कैमरा खोलें",
    btnSample: "सैंपल पत्ती आज़माएं",
    filterAll: "सभी फसलें",
    sampleHeader: "या त्वरित सैंपल पत्तियों का परीक्षण करें",
    scanHeading: "निदान रिपोर्ट",
    confidence: "एआई सटीकता",
    affectedArea: "प्रभावित पत्ती क्षेत्र",
    pathogen: "रोगजनक प्रकार",
    tabOrganic: "जैविक उपचार",
    tabChemical: "रासायनिक उपचार",
    tabPrevention: "रोकथाम गाइड",
    btnExport: "रिपोर्ट डाउनलोड करें",
    btnRescan: "दूसरी पत्ती स्कैन करें",
    chatPlaceholder: "फसल देखभाल और कीटनाशक मात्रा के बारे में पूछें...",
    btnSend: "भेजें"
  },
  fr: {
    appTitle: "Plantr AI",
    tagline: "Moteur de Prédiction des Maladies des Plantes et Diagnostic Agronomique",
    tabScanner: "Scanner de Feuilles IA",
    tabLibrary: "Bibliothèque de Maladies",
    tabDoctor: "Chat Docteur IA",
    tabRadar: "Radar d'Épidémies",
    tabHistory: "Historique",
    uploadTitle: "Déposez votre photo de feuille ici ou cliquez pour parcourir",
    uploadSub: "Prend en charge JPG, PNG, WEBP (Max 15Mo)",
    btnUpload: "Sélectionner la Photo",
    btnCamera: "Utiliser la Caméra",
    btnSample: "Tester une Feuille",
    filterAll: "Toutes les Cultures",
    sampleHeader: "Ou Testez des Échantillons Instantanés",
    scanHeading: "Rapport de Diagnostic",
    confidence: "Confiance IA",
    affectedArea: "Zone Affectée",
    pathogen: "Type de Pathogène",
    tabOrganic: "Remèdes Biologiques",
    tabChemical: "Traitements Chimiques",
    tabPrevention: "Guide de Prévention",
    btnExport: "Exporter le Rapport",
    btnRescan: "Scanner une autre feuille",
    chatPlaceholder: "Posez une question sur le soin des cultures...",
    btnSend: "Envoyer"
  },
  ta: {
    appTitle: "Plantr AI",
    tagline: "செயற்கை நுண்ணறிவு தாவர நோய் கண்டறிதல் தளம்",
    tabScanner: "AI இலை ஸ்கேனர்",
    tabLibrary: "நோய் நூலகம்",
    tabDoctor: "AI மருத்துவர் அரட்டை",
    tabRadar: "நோய் எச்சரிக்கை ரேடார்",
    tabHistory: "வரலாறு",
    uploadTitle: "உங்கள் இலையின் புகைப்படத்தை இங்கே பதிவேற்றவும்",
    uploadSub: "JPG, PNG, WEBP ஆதரவு (அதிகபட்சம் 15MB)",
    btnUpload: "புகைப்படம் தேர்ந்தெடு",
    btnCamera: "கேமரா பயன்படுத்து",
    btnSample: "மாதிரி இலை சோதனை",
    filterAll: "அனைத்து பயிர்கள்",
    sampleHeader: "அல்லது மாதிரி இலைகளை உடனடியாக சோதிக்கவும்",
    scanHeading: "கண்டறிதல் அறிக்கை",
    confidence: "AI துல்லியம்",
    affectedArea: "பாதிக்கப்பட்ட பரப்பளவு",
    pathogen: "காரணி வகை",
    tabOrganic: "இயற்கை மருந்துகள்",
    tabChemical: "ரசாயன சிகிச்சைகள்",
    tabPrevention: "தடுப்பு வழிகாட்டி",
    btnExport: "அறிக்கையை பதிவிறக்கு",
    btnRescan: "மற்றொரு இலையை ஸ்கேன் செய்",
    chatPlaceholder: "பயிர் பராமரிப்பு பற்றி கேளுங்கள்...",
    btnSend: "அனுப்பு"
  }
};

class PlantrApp {
  constructor() {
    this.currentLang = 'en';
    this.selectedCrop = 'all';
    this.currentScanResult = null;
    this.webcamStream = null;
    this.scanHistory = JSON.parse(localStorage.getItem('plantr_history') || '[]');

    this.initElements();
    this.bindEvents();
    this.renderSamples();
    this.renderLibrary();
    this.renderHistory();
    this.initOutbreakRadar();
  }

  initElements() {
    this.langSelect = document.getElementById('langSelect');
    this.dropZone = document.getElementById('dropZone');
    this.fileInput = document.getElementById('fileInput');
    this.scannerViewport = document.getElementById('scannerViewport');
    this.heatmapCanvas = document.getElementById('heatmapCanvas');
    this.laserLine = document.getElementById('laserLine');
    this.resultsCard = document.getElementById('resultsCard');
    this.cameraModal = document.getElementById('cameraModal');
    this.videoElement = document.getElementById('webcamVideo');
    // Plant description controls
    this.plantDescInput = document.getElementById('plantDescInput');
    this.plantCropSelect = document.getElementById('plantCropSelect');
    this.cropLockBadge = document.getElementById('cropLockBadge');
    this.cropLockLabel = document.getElementById('cropLockLabel');
    this.hudCropLabel = document.getElementById('hudCropLabel');
  }

  bindEvents() {
    // Language switch
    if (this.langSelect) {
      this.langSelect.addEventListener('change', (e) => {
        this.currentLang = e.target.value;
        this.updateLanguageUI();
      });
    }

    // Tab buttons switching
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetTab = btn.getAttribute('data-tab');
        const targetPanel = document.getElementById(`tab-${targetTab}`);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    // Crop select dropdown → show lock badge
    if (this.plantCropSelect) {
      this.plantCropSelect.addEventListener('change', () => {
        const val = this.plantCropSelect.value;
        if (val && val !== 'auto') {
          this.cropLockLabel.textContent = val;
          this.cropLockBadge.style.display = 'flex';
          // Sync the nav crop filter chip
          document.querySelectorAll('.crop-chip').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-crop') === val);
          });
          this.selectedCrop = val;
        } else {
          this.cropLockBadge.style.display = 'none';
          // Reset filter chip to All
          document.querySelectorAll('.crop-chip').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-crop') === 'all');
          });
          this.selectedCrop = 'all';
        }
        if (window.lucide) window.lucide.createIcons();
      });
    }

    // File Drop & Select
    if (this.dropZone) {
      this.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropZone.classList.add('drag-over');
      });
      this.dropZone.addEventListener('dragleave', () => this.dropZone.classList.remove('drag-over'));
      this.dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropZone.classList.remove('drag-over');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.handleFileSelect(e.dataTransfer.files[0]);
        }
      });
      this.dropZone.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
          this.fileInput.click();
        }
      });
    }

    if (this.fileInput) {
      this.fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handleFileSelect(e.target.files[0]);
        }
      });
    }

    // Crop Filter Chips
    document.querySelectorAll('.crop-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.crop-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.selectedCrop = chip.getAttribute('data-crop');
        this.renderLibrary();
      });
    });

    // Remedy Tab Links
    document.querySelectorAll('.tab-link').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.remedy-content').forEach(c => c.style.display = 'none');

        link.classList.add('active');
        const remedyTab = link.getAttribute('data-remedy');
        const content = document.getElementById(`remedy-${remedyTab}`);
        if (content) content.style.display = 'block';
      });
    });

    // Chatbot send button & Enter key
    const chatBtn = document.getElementById('chatSendBtn');
    const chatInput = document.getElementById('chatInput');
    if (chatBtn && chatInput) {
      chatBtn.addEventListener('click', () => this.handleChatSend());
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.handleChatSend();
      });
    }

    // Camera modal controls
    const btnCamera = document.getElementById('btnCamera');
    const btnCloseCamera = document.getElementById('btnCloseCamera');
    const btnSnap = document.getElementById('btnSnapPhoto');

    if (btnCamera) btnCamera.addEventListener('click', () => this.openCamera());
    if (btnCloseCamera) btnCloseCamera.addEventListener('click', () => this.closeCamera());
    if (btnSnap) btnSnap.addEventListener('click', () => this.snapPhoto());
  }

  updateLanguageUI() {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
  }

  // Read plant description inputs and resolve the effective crop
  getPlantContext() {
    const cropVal = this.plantCropSelect ? this.plantCropSelect.value : 'auto';
    const descText = (this.plantDescInput ? this.plantDescInput.value : '').toLowerCase().trim();

    // If a specific crop was selected, trust it
    if (cropVal && cropVal !== 'auto') {
      return { crop: cropVal, description: descText };
    }

    // Try to infer from free-text description keywords
    const KEYWORD_MAP = {
      'tomato': 'Tomato', 'tomatoe': 'Tomato',
      'potato': 'Potato',
      'corn': 'Corn', 'maize': 'Corn',
      'apple': 'Apple',
      'grape': 'Grape', 'vine': 'Grape', 'vineyard': 'Grape',
      'strawberry': 'Strawberry', 'strawberries': 'Strawberry',
      'pepper': 'Pepper Bell', 'bell pepper': 'Pepper Bell', 'capsicum': 'Pepper Bell'
    };

    for (const [kw, crop] of Object.entries(KEYWORD_MAP)) {
      if (descText.includes(kw)) {
        // Auto-update the select dropdown to reflect the inferred crop
        if (this.plantCropSelect) {
          this.plantCropSelect.value = crop;
          if (this.cropLockLabel) this.cropLockLabel.textContent = `${crop} (inferred from description)`;
          if (this.cropLockBadge) this.cropLockBadge.style.display = 'flex';
        }
        return { crop, description: descText };
      }
    }

    return { crop: 'auto', description: descText };
  }

  // Handle uploaded or dropped image file
  handleFileSelect(file) {
    if (!file.type.startsWith('image/')) {
      alert("Please select a valid image file (JPG, PNG, WEBP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.runScan(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  // Render sample test gallery
  renderSamples() {
    const container = document.getElementById('sampleGrid');
    if (!container) return;

    container.innerHTML = SAMPLE_SCANS.map(sample => `
      <div class="sample-card" onclick="app.runScan('${sample.imageUrl}', '${sample.diseaseId}')">
        <img src="${sample.imageUrl}" class="sample-img" alt="${sample.title}">
        <div class="sample-info">
          <div class="sample-crop">${sample.crop}</div>
          <div class="sample-name">${sample.title}</div>
        </div>
      </div>
    `).join('');
  }

  // Execute AI Scan Engine
  async runScan(imageSrc, presetDiseaseId = null) {
    // Resolve plant context from the description panel
    const plantCtx = this.getPlantContext();
    const effectiveCrop = presetDiseaseId ? null : (plantCtx.crop !== 'auto' ? plantCtx.crop : this.selectedCrop);

    // Update the HUD label to show which crop is being analysed
    if (this.hudCropLabel) {
      if (effectiveCrop && effectiveCrop !== 'all') {
        this.hudCropLabel.textContent = `LOCKED: ${effectiveCrop.toUpperCase()}`;
        this.hudCropLabel.style.background = 'rgba(16, 185, 129, 0.25)';
        this.hudCropLabel.style.borderColor = 'var(--emerald-primary)';
      } else {
        this.hudCropLabel.textContent = 'AUTO-DETECT MODE';
        this.hudCropLabel.style.background = '';
        this.hudCropLabel.style.borderColor = '';
      }
    }

    // Show scanner viewport & hide initial upload prompt
    this.dropZone.style.display = 'none';
    this.scannerViewport.style.display = 'block';
    this.laserLine.style.display = 'block';

    if (this.resultsCard) {
      this.resultsCard.style.display = 'block';
      const cropNote = effectiveCrop && effectiveCrop !== 'all'
        ? `<span style="color: var(--emerald-light); font-weight: 700;">${effectiveCrop} crop</span> · `
        : '';
      this.resultsCard.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <div class="upload-icon-circle" style="margin: 0 auto 1rem auto; animation: pulsePin 1s infinite alternate;">
            <i data-lucide="scan" style="width: 36px; height: 36px;"></i>
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem;">Scanning Leaf Neural Matrix...</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${cropNote}Analyzing chlorosis, necrosis, and spatial lesion patterns...</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }

    // Call scanner engine — pass user-specified crop as override
    const scanResult = await scannerEngine.analyzeLeafImage(imageSrc, effectiveCrop, presetDiseaseId);
    this.currentScanResult = scanResult;

    // Draw neural heatmap overlay
    scannerEngine.drawNeuralHeatmap(this.heatmapCanvas, imageSrc, scanResult.lesionPoints);

    // Hide laser after scanning completes
    this.laserLine.style.display = 'none';

    // Render diagnostic results card
    this.renderDiagnosticResults(scanResult);

    // Save scan to localStorage history
    this.saveScanHistory(scanResult);
  }

  // Render Detailed Diagnostic Results Card
  renderDiagnosticResults(res) {
    const d = res.disease;
    const isHealthy = d.pathogenType === 'None';

    let statusClass = 'healthy';
    let statusText = 'HEALTHY PLANT';

    if (d.severity.toLowerCase().includes('critical') || d.severity.toLowerCase().includes('severe')) {
      statusClass = 'critical';
      statusText = `SEVERITY: ${d.severity.toUpperCase()}`;
    } else if (d.severity.toLowerCase().includes('moderate')) {
      statusClass = 'warning';
      statusText = `SEVERITY: ${d.severity.toUpperCase()}`;
    }

    this.resultsCard.innerHTML = `
      <div class="results-container">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="status-badge ${statusClass}">
              <i data-lucide="${isHealthy ? 'shield-check' : 'alert-triangle'}"></i>
              ${statusText}
            </span>
            <h2 class="disease-name-large" style="margin-top: 0.5rem;">${d.name}</h2>
            <div class="scientific-name">${d.scientificName} &bull; ${d.crop} Crop</div>
          </div>
          <button class="btn-primary" onclick="app.exportDiagnosticReport()">
            <i data-lucide="printer"></i>
            Export PDF Report
          </button>
        </div>

        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-val">${res.confidence}%</div>
            <div class="metric-lbl">AI Confidence</div>
          </div>
          <div class="metric-card">
            <div class="metric-val" style="color: ${isHealthy ? 'var(--emerald-light)' : 'var(--danger)'};">${res.affectedArea}%</div>
            <div class="metric-lbl">Leaf Lesion Coverage</div>
          </div>
          <div class="metric-card">
            <div class="metric-val">${d.pathogenType}</div>
            <div class="metric-lbl">Pathogen Type</div>
          </div>
        </div>

        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.5rem;">Observed Symptoms</h4>
          <ul class="remedy-list">
            ${d.symptoms.map(s => `<li class="remedy-item"><strong style="color: var(--emerald-light);">&bull;</strong> ${s}</li>`).join('')}
          </ul>
        </div>

        <div>
          <div class="tab-headers">
            <button class="tab-link active" data-remedy="organic">Organic Remedies</button>
            <button class="tab-link" data-remedy="chemical">Chemical Treatments</button>
            <button class="tab-link" data-remedy="prevention">Prevention Protocols</button>
          </div>

          <div id="remedy-organic" class="remedy-content">
            <ul class="remedy-list">
              ${d.organicRemedies.map(r => `<li class="remedy-item"><i data-lucide="leaf" style="width: 16px; display: inline; color: var(--emerald-primary);"></i> ${r}</li>`).join('')}
            </ul>
          </div>

          <div id="remedy-chemical" class="remedy-content" style="display: none;">
            <ul class="remedy-list">
              ${d.chemicalTreatments.map(c => `<li class="remedy-item" style="border-left-color: var(--warning);"><i data-lucide="flask-conical" style="width: 16px; display: inline; color: var(--warning);"></i> ${c}</li>`).join('')}
            </ul>
          </div>

          <div id="remedy-prevention" class="remedy-content" style="display: none;">
            <ul class="remedy-list">
              ${d.prevention.map(p => `<li class="remedy-item" style="border-left-color: var(--info);"><i data-lucide="shield" style="width: 16px; display: inline; color: var(--info);"></i> ${p}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <button class="btn-secondary" onclick="app.resetScanner()">
            <i data-lucide="rotate-ccw"></i>
            Scan Another Leaf
          </button>
          <button class="btn-secondary" onclick="app.askChatAboutDisease('${d.name}')">
            <i data-lucide="bot"></i>
            Ask AI Doctor About This Disease
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Re-bind remedy tabs inside results card
    this.resultsCard.querySelectorAll('.tab-link').forEach(link => {
      link.addEventListener('click', () => {
        this.resultsCard.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        this.resultsCard.querySelectorAll('.remedy-content').forEach(c => c.style.display = 'none');

        link.classList.add('active');
        const remedyTab = link.getAttribute('data-remedy');
        const content = this.resultsCard.querySelector(`#remedy-${remedyTab}`);
        if (content) content.style.display = 'block';
      });
    });
  }

  resetScanner() {
    this.dropZone.style.display = 'flex';
    this.scannerViewport.style.display = 'none';
    this.resultsCard.style.display = 'none';
    this.currentScanResult = null;
    // Reset HUD label
    if (this.hudCropLabel) {
      this.hudCropLabel.textContent = 'NEURAL HEATMAP MODE';
      this.hudCropLabel.style.background = '';
      this.hudCropLabel.style.borderColor = '';
    }
  }

  // Render Crop & Disease Catalog
  renderLibrary() {
    const grid = document.getElementById('libraryGrid');
    if (!grid) return;

    let items = Object.values(PLANT_DATASET);
    if (this.selectedCrop && this.selectedCrop !== 'all') {
      items = items.filter(i => i.crop.toLowerCase() === this.selectedCrop.toLowerCase());
    }

    grid.innerHTML = items.map(d => `
      <div class="glass-panel" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span class="hud-tag" style="font-size: 0.7rem;">${d.crop}</span>
            <span style="font-size: 0.75rem; color: var(--emerald-light); font-weight: 700;">${d.pathogenType}</span>
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--text-main);">${d.name}</h3>
          <div style="font-style: italic; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">${d.scientificName}</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;">
            ${d.symptoms[0] || 'No symptoms listed.'}
          </p>
        </div>
        <button class="btn-secondary" style="width: 100%; margin-top: 1rem; justify-content: center;" onclick="app.runScan('${d.sampleImage}', '${d.id}')">
          <i data-lucide="scan"></i> Test Scan Disease
        </button>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Save Scan to LocalStorage History
  saveScanHistory(res) {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      diseaseName: res.disease.name,
      crop: res.disease.crop,
      confidence: res.confidence,
      affectedArea: res.affectedArea,
      severity: res.disease.severity,
      imageSrc: res.imageSrc
    };

    this.scanHistory.unshift(entry);
    if (this.scanHistory.length > 20) this.scanHistory.pop();
    localStorage.setItem('plantr_history', JSON.stringify(this.scanHistory));
    this.renderHistory();
  }

  renderHistory() {
    const list = document.getElementById('historyList');
    if (!list) return;

    if (this.scanHistory.length === 0) {
      list.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 3rem;">No past leaf scans recorded yet.</div>`;
      return;
    }

    list.innerHTML = this.scanHistory.map(item => `
      <div class="glass-panel" style="padding: 1rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="${item.imageSrc}" style="width: 60px; height: 60px; border-radius: var(--radius-md); object-fit: cover; border: 1px solid var(--border-emerald);">
          <div>
            <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--text-main);">${item.diseaseName}</h4>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${item.crop} Crop &bull; ${item.date}</div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--emerald-light);">${item.confidence}% AI</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">Lesions: ${item.affectedArea}%</div>
        </div>
      </div>
    `).join('');
  }

  // Plantr AI Doctor Chatbot Logic
  handleChatSend() {
    const input = document.getElementById('chatInput');
    const container = document.getElementById('chatMessages');
    if (!input || !container || !input.value.trim()) return;

    const userText = input.value.trim();
    input.value = '';

    // Append User message bubble
    container.innerHTML += `
      <div class="msg-bubble user">
        ${userText}
      </div>
    `;

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;

    // Simulate AI response synthesis
    setTimeout(() => {
      let botReply = "I recommend pruning affected foliage, maintaining dry leaves via drip irrigation, and applying organic copper spray at the first sign of symptoms.";

      const lower = userText.toLowerCase();
      if (lower.includes('neem') || lower.includes('organic')) {
        botReply = "For organic control: Mix 5ml pure cold-pressed neem oil with 2ml liquid soap per liter of warm water. Spray thoroughly on both leaf sides every 7 days in late evening to avoid sun scald.";
      } else if (lower.includes('dose') || lower.includes('pesticide') || lower.includes('chemical')) {
        botReply = "Standard copper fungicide dosage is 2.5g to 3g per liter of water. Always wear protective gloves and observe a 7-day pre-harvest interval (PHI) after application.";
      } else if (lower.includes('late blight') || lower.includes('potato') || lower.includes('tomato')) {
        botReply = "Late Blight (Phytophthora infestans) spreads extremely fast in damp weather! Bag and burn infected plants immediately. Spray Ridomil Gold or fixed copper preventatively on uninfected plants nearby.";
      } else if (lower.includes('hello') || lower.includes('hi')) {
        botReply = "Hello! I am Plantr AI Doctor. How can I assist with your crops, disease diagnostics, or treatment protocols today?";
      }

      container.innerHTML += `
        <div class="msg-bubble bot">
          <strong style="color: var(--emerald-light); font-size: 0.8rem; display: block; margin-bottom: 4px;">PLANTR AI DOCTOR</strong>
          ${botReply}
        </div>
      `;
      container.scrollTop = container.scrollHeight;
    }, 600);
  }

  askChatAboutDisease(diseaseName) {
    // Switch to AI Doctor tab
    document.querySelector('[data-tab="doctor"]').click();
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.value = `What is the best treatment protocol for ${diseaseName}?`;
      this.handleChatSend();
    }
  }

  // Initialize Disease Outbreak Radar Map
  initOutbreakRadar() {
    const pinContainer = document.getElementById('radarPinContainer');
    if (!pinContainer) return;

    const mockPins = [
      { top: '35%', left: '42%', title: 'Potato Late Blight Warning', region: 'Pacific Northwest', risk: 'HIGH (88% Humidity)' },
      { top: '60%', left: '68%', title: 'Tomato Yellow Leaf Curl Spike', region: 'Southern Region', risk: 'CRITICAL (Whitefly Outbreak)' },
      { top: '48%', left: '55%', title: 'Corn Rust Advisory', region: 'Central Plains', risk: 'MODERATE (Spores Blowing North)' }
    ];

    pinContainer.innerHTML = mockPins.map(p => `
      <div class="outbreak-pin" style="top: ${p.top}; left: ${p.left};" onclick="alert('${p.title}\\nRegion: ${p.region}\\nRisk Level: ${p.risk}')" title="${p.title}"></div>
    `).join('');
  }

  // Export Printable Diagnostic PDF Report
  exportDiagnosticReport() {
    window.print();
  }

  // Webcam Controls
  openCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          this.webcamStream = stream;
          this.videoElement.srcObject = stream;
          this.cameraModal.style.display = 'flex';
        })
        .catch(err => {
          alert("Could not access camera. Please check camera permissions in browser.");
        });
    } else {
      alert("Webcam capture is not supported by your browser.");
    }
  }

  closeCamera() {
    if (this.webcamStream) {
      this.webcamStream.getTracks().forEach(track => track.stop());
      this.webcamStream = null;
    }
    this.cameraModal.style.display = 'none';
  }

  snapPhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = this.videoElement.videoWidth || 640;
    canvas.height = this.videoElement.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    this.closeCamera();
    // Respect plant description when snapping from camera too
    this.runScan(dataUrl);
  }
}

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PlantrApp();
});
