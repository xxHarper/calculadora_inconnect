const rates = {
  "Agencias de Viajes": {
    credito: 2.29,
    debito: 1.76,
    intl: 2.67,
    amex: 2.9,
    discover: 2.66,
  },
  Aseguradoras: {
    credito: 2.26,
    debito: 1.86,
    intl: 3.86,
    amex: 2.9,
    discover: 2.66,
  },
  Beneficencia: {
    credito: 0.85,
    debito: 0.82,
    intl: 3.23,
    amex: 2.9,
    discover: 2.66,
  },
  "Colegios y Universidades": {
    credito: 1.85,
    debito: 1.42,
    intl: 3.24,
    amex: 2.9,
    discover: 2.66,
  },
  "Comida Rápida": {
    credito: 2.2,
    debito: 1.7,
    intl: 3.99,
    amex: 2.9,
    discover: 2.66,
  },
  "Educación Básica": {
    credito: 0.7,
    debito: 0.7,
    intl: 2.68,
    amex: 2.9,
    discover: 2.66,
  },
  Entretenimiento: {
    credito: 1.94,
    debito: 1.85,
    intl: 4.25,
    amex: 2.9,
    discover: 2.66,
  },
  Estacionamientos: {
    credito: 1.95,
    debito: 2.25,
    intl: 4.26,
    amex: 2.9,
    discover: 2.66,
  },
  Farmacias: {
    credito: 2.12,
    debito: 1.74,
    intl: 3.99,
    amex: 2.9,
    discover: 2.66,
  },
  Gasolineras: {
    credito: 1.74,
    debito: 1.1,
    intl: 3.38,
    amex: 2.9,
    discover: 2.66,
  },
  Gobierno: {
    credito: 1.76,
    debito: 1.4,
    intl: 4.25,
    amex: 2.9,
    discover: 2.66,
  },
  Guarderías: {
    credito: 1.96,
    debito: 2.05,
    intl: 2.73,
    amex: 2.9,
    discover: 2.66,
  },
  Hospitales: {
    credito: 2.25,
    debito: 1.82,
    intl: 3.24,
    amex: 2.9,
    discover: 2.66,
  },
  Hoteles: {
    credito: 2.31,
    debito: 1.8,
    intl: 2.75,
    amex: 2.9,
    discover: 2.66,
  },
  "Médicos y Dentistas": {
    credito: 0.7,
    debito: 0.7,
    intl: 2.5,
    amex: 2.9,
    discover: 2.5,
  },
  Misceláneas: {
    credito: 0.7,
    debito: 0.7,
    intl: 3.58,
    amex: 2.9,
    discover: 2.66,
  },
  Otros: {
    credito: 2.27,
    debito: 1.86,
    intl: 3.53,
    amex: 2.9,
    discover: 2.66,
  },
  Peaje: {
    credito: 2.35,
    debito: 1.99,
    intl: 3.33,
    amex: 2.9,
    discover: 2.66,
  },
  "Refacciones y ferreterías": {
    credito: 0.7,
    debito: 0.7,
    intl: 2.9,
    amex: 2.9,
    discover: 2.66,
  },
  "Renta de Autos": {
    credito: 2.31,
    debito: 1.78,
    intl: 2.92,
    amex: 2.9,
    discover: 2.66,
  },
  Restaurantes: {
    credito: 2.51,
    debito: 1.87,
    intl: 3.85,
    amex: 2.9,
    discover: 2.66,
  },
  "Salones de belleza": {
    credito: 0.7,
    debito: 0.7,
    intl: 3.12,
    amex: 2.9,
    discover: 2.66,
  },
  Supermercados: {
    credito: 2.43,
    debito: 2.08,
    intl: 4.25,
    amex: 2.9,
    discover: 2.66,
  },
  Telecomunicaciones: {
    credito: 2.22,
    debito: 1.88,
    intl: 4.11,
    amex: 2.9,
    discover: 2.66,
  },
  "Transporte Aéreo": {
    credito: 2.22,
    debito: 1.42,
    intl: 2.74,
    amex: 2.9,
    discover: 2.66,
  },
  "Transporte Terrestre de Pasajeros": {
    credito: 1.93,
    debito: 1.8,
    intl: 3.25,
    amex: 2.9,
    discover: 2.66,
  },
  "Ventas al Detalle (Retail)": {
    credito: 2.27,
    debito: 1.86,
    intl: 3.99,
    amex: 2.9,
    discover: 2.66,
  },
};
const msiOtros = [
  { meses: 3, sobretasa: 4.9 },
  { meses: 6, sobretasa: 7.5 },
  { meses: 9, sobretasa: 11.1 },
  { meses: 12, sobretasa: 12.8 },
];
const msiProsa = [
  { meses: 3, sobretasa: 3.5 },
  { meses: 6, sobretasa: 5.5 },
  { meses: 9, sobretasa: 8.5 },
  { meses: 12, sobretasa: 11.5 },
  { meses: 18, sobretasa: 15.0 },
];
const msiAmex = [
  { meses: 3, sobretasa: 3.5 },
  { meses: 6, sobretasa: 5.75 },
  { meses: 9, sobretasa: 8.0 },
  { meses: 12, sobretasa: 10.25 },
  { meses: 15, sobretasa: 12.5 },
  { meses: 18, sobretasa: 14.5 },
  { meses: 21, sobretasa: 16.25 },
  { meses: 24, sobretasa: 18.25 },
];

const VAT = 0.16;
const AGGREGATOR_RATE = 0.036;
const AGGREGATOR_TOTAL = AGGREGATOR_RATE * (1 + VAT);
const BASES = {
  otros: 0.007,
  prosa: 0.0227,
  amex: 0.029,
};

const amountInput = document.getElementById("amount");
const businessTypeSelect = document.getElementById("businessType");
const cardTypeAlt = document.getElementById("cardTypeAlt");
const cardTypeButtons = document.querySelectorAll("#cardTypeButtons button");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

const fmtCurrency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
});

const fmtPercent = (value) => `${value.toFixed(2)}%`;
const toMoney = (value) =>
  fmtCurrency.format(Number.isFinite(value) ? value : 0);

function populateBusinessTypes() {
  Object.keys(rates).forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    businessTypeSelect.appendChild(option);
  });
  businessTypeSelect.value = "Misceláneas";
}

function getActiveCardType() {
  return cardTypeAlt.value || "credito";
}

function setActiveCardType(card) {
  cardTypeAlt.value = card;
  cardTypeButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.card === card),
  );
  updateCalculator();
}

function buildMSITable(targetId, rows, baseRate) {
  const tbody = document.getElementById(targetId);
  const amount = Math.max(parseFloat(amountInput.value) || 0, 0);

  tbody.innerHTML = rows
    .map((row) => {
      const surcharge = row.sobretasa / 100;
      const surchargeVat = surcharge * (1 + VAT);
      const totalRate = baseRate + surchargeVat;
      const commission = amount * totalRate;
      const net = amount - commission;

      return `
          <tr>
            <td>${row.meses} meses</td>
            <td>${fmtPercent(row.sobretasa)}</td>
            <td>${fmtPercent(surchargeVat * 100)}</td>
            <td>${fmtPercent(totalRate * 100)}</td>
            <td>${toMoney(commission)}</td>
            <td>${toMoney(net)}</td>
          </tr>
        `;
    })
    .join("");
}

function updateCalculator() {
  const amount = Math.max(parseFloat(amountInput.value) || 0, 0);
  const businessType = businessTypeSelect.value;
  const cardType = getActiveCardType();

  const baseRatePercent = rates[businessType]?.[cardType] ?? 0;
  const baseRate = baseRatePercent / 100;
  const vatRate = baseRate * VAT;
  const totalRate = baseRate + vatRate;

  const commissionBase = amount * baseRate;
  const commissionVat = amount * vatRate;
  const totalCommission = amount * totalRate;
  const netDeposit = amount - totalCommission;

  const aggregatorCommission = amount * AGGREGATOR_TOTAL;
  const savePerSale = aggregatorCommission - totalCommission;
  const annualSave = savePerSale * 365;

  document.getElementById("selectedRateLabel").textContent =
    `Tasa: ${fmtPercent(baseRatePercent)}`;
  document.getElementById("kpiRate").textContent = fmtPercent(baseRatePercent);
  document.getElementById("kpiVatRate").textContent = fmtPercent(vatRate * 100);
  document.getElementById("kpiTotalRate").textContent = fmtPercent(
    totalRate * 100,
  );
  document.getElementById("kpiNet").textContent = toMoney(netDeposit);

  document.getElementById("summaryAmount").textContent = toMoney(amount);
  document.getElementById("summaryCommission").textContent =
    toMoney(commissionBase);
  document.getElementById("summaryVat").textContent = toMoney(commissionVat);
  document.getElementById("summaryTotal").textContent =
    toMoney(totalCommission);
  document.getElementById("summaryNet").textContent = toMoney(netDeposit);

  document.getElementById("barLabelInconnect").textContent = fmtPercent(
    totalRate * 100,
  );
  document.getElementById("barInconnect").style.width =
    `${Math.max(6, (totalRate / AGGREGATOR_TOTAL) * 100)}%`;

  document.getElementById("savePerSale").textContent = toMoney(savePerSale);
  document.getElementById("saveAnnual").textContent = toMoney(annualSave);

  buildMSITable("tbody-otros", msiOtros, BASES.otros);
  buildMSITable("tbody-prosa", msiProsa, BASES.prosa);
  buildMSITable("tbody-amex", msiAmex, BASES.amex);
}

cardTypeButtons.forEach((btn) => {
  btn.addEventListener("click", () => setActiveCardType(btn.dataset.card));
});

cardTypeAlt.addEventListener("change", () => {
  cardTypeButtons.forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.card === cardTypeAlt.value),
  );
  updateCalculator();
});

amountInput.addEventListener("input", updateCalculator);
businessTypeSelect.addEventListener("change", updateCalculator);

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((x) => x.classList.remove("active"));
    tabPanels.forEach((x) => x.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`panel-${btn.dataset.tab}`).classList.add("active");
  });
});

populateBusinessTypes();
setActiveCardType("credito");
