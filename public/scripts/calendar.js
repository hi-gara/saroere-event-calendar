
const events = [
  {
    id: 1,
    type: "official",
    name: "公式イベント（サンプル）",
    date: "2026-10-15",
    start: "20:00",
    end: "22:00",
    country: "日本",
    town: "オンライン",
    audience: "サロエレ参加者",
    overview: "これは表示確認用のサンプルイベントです。実際の開催情報ではありません。",
    organizer: "公式運営（サンプル）",
    notes: "実際のイベント情報ではありません。",
    url: "",
  },
  {
    id: 2,
    type: "unofficial",
    name: "非公式イベント（サンプル）",
    date: "2026-10-20",
    start: "21:00",
    end: "22:00",
    country: "日本",
    town: "オンライン",
    audience: "どなたでも",
    overview: "非公式イベントの表示確認用サンプルです。",
    organizer: "個人主催（サンプル）",
    notes: "実際のイベント情報ではありません。",
    url: "",
  },
];

const calendar = document.querySelector("#calendar");
const monthTitle = document.querySelector("#month-title");
const eventCount = document.querySelector("#event-count");
const eventList = document.querySelector("#event-list");
const typeFilter = document.querySelector("#type-filter");
const modal = document.querySelector("#event-modal");
const modalType = document.querySelector("#modal-type");
const modalTitle = document.querySelector("#modal-title");
const modalDetails = document.querySelector("#modal-details");
const tooltip = document.querySelector("#event-tooltip");

const today = new Date();
let displayedYear = today.getFullYear();
let displayedMonth = today.getMonth();
let lastFocusedElement = null;

const typeNames = {
  official: "公式イベント",
  unofficial: "非公式イベント",
};

function getFilteredEvents() {
  return events.filter((event) => {
    return typeFilter.value === "all" || event.type === typeFilter.value;
  });
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${"日月火水木金土"[date.getDay()]}）`;
}

function renderCalendar() {
  const firstDay = new Date(displayedYear, displayedMonth, 1);
  const lastDate = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const startOffset = firstDay.getDay();
  const totalCells = Math.ceil((startOffset + lastDate) / 7) * 7;

  monthTitle.textContent = `${displayedYear}年${displayedMonth + 1}月`;

  const monthEvents = getFilteredEvents().filter((event) => {
    const date = new Date(`${event.date}T00:00:00`);
    return date.getFullYear() === displayedYear &&
      date.getMonth() === displayedMonth;
  });

  eventCount.textContent = `${monthEvents.length}件のイベント`;
  calendar.replaceChildren();

  for (let i = 0; i < totalCells; i++) {
    const date = new Date(displayedYear, displayedMonth, 1 - startOffset + i);
    const dateString = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");

    const cell = document.createElement("div");
    cell.className = "calendar-day";

    if (date.getMonth() !== displayedMonth) {
      cell.classList.add("outside");
    }

    const number = document.createElement("div");
    number.className = "day-number";
    number.textContent = String(date.getDate());

    if (dateString === [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-")) {
      number.classList.add("today");
    }

    cell.append(number);

    const dayEvents = monthEvents.filter((event) => event.date === dateString);

    dayEvents.forEach((event) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `day-event ${event.type}`;
      button.textContent = event.name;
      button.setAttribute("aria-label", `${event.name}の詳細を表示`);

      button.addEventListener("click", () => openModal(event));

      button.addEventListener("mouseenter", (e) => {
        showTooltip(event, e.clientX, e.clientY);
      });

      button.addEventListener("mousemove", (e) => {
        positionTooltip(e.clientX, e.clientY);
      });

      button.addEventListener("mouseleave", hideTooltip);

      button.addEventListener("focus", () => {
        const rect = button.getBoundingClientRect();
        showTooltip(event, rect.left, rect.bottom);
      });

      button.addEventListener("blur", hideTooltip);

      cell.append(button);
    });

    calendar.append(cell);
  }
}

function renderEventList() {
  const filtered = getFilteredEvents()
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date) || a.start.localeCompare(b.start));

  eventList.replaceChildren();

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "該当するイベントはありません。";
    eventList.append(empty);
    return;
  }

  filtered.forEach((event) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "event-card";

    const dateBox = document.createElement("div");
    dateBox.className = "event-date";

    const date = new Date(`${event.date}T00:00:00`);
    const month = document.createElement("small");
    month.textContent = `${date.getMonth() + 1}月`;

    const day = document.createElement("strong");
    day.textContent = String(date.getDate());

    dateBox.append(month, day);

    const content = document.createElement("div");
    content.className = "event-card-content";

    const badge = document.createElement("span");
    badge.className = `type-badge ${event.type}`;
    badge.textContent = typeNames[event.type];

    const name = document.createElement("h3");
    name.textContent = event.name;

    const time = document.createElement("p");
    time.textContent = `${event.start}〜${event.end}`;

    const overview = document.createElement("p");
    overview.textContent = event.overview;

    content.append(badge, name, time, overview);
    card.append(dateBox, content);
    card.addEventListener("click", () => openModal(event));

    eventList.append(card);
  });
}

function addDetail(label, value, parent = modalDetails) {
  const row = document.createElement("div");
  row.className = "detail-row";

  const term = document.createElement("dt");
  term.textContent = label;

  const description = document.createElement("dd");
  description.textContent = value || "未掲載";

  row.append(term, description);
  parent.append(row);

  return description;
}

function openModal(event) {
  lastFocusedElement = document.activeElement;
  hideTooltip();

  modalType.className = `type-badge ${event.type}`;
  modalType.textContent = typeNames[event.type];
  modalTitle.textContent = event.name;
  modalDetails.replaceChildren();

  addDetail("日程と時間", `${formatDate(event.date)}\n${event.start}〜${event.end}`);
  addDetail("場所", `${event.country}・${event.town}`);
  addDetail("対象者", event.audience);
  addDetail("イベント概要", event.overview);
  addDetail("主催者", event.organizer);
  addDetail("注意事項", event.notes);

  const source = addDetail("告知ツイート", "");
  source.replaceChildren();

  if (event.url) {
    const link = document.createElement("a");
    link.className = "source-link";
    link.href = event.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "告知元の投稿を開く ↗";
    source.append(link);
  } else {
    source.textContent = "告知リンクはありません";
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function showTooltip(event, x, y) {
  tooltip.replaceChildren();

  const badge = document.createElement("span");
  badge.className = `type-badge ${event.type}`;
  badge.textContent = typeNames[event.type];

  const name = document.createElement("strong");
  name.textContent = event.name;

  const time = document.createElement("p");
  time.textContent = `${event.start}〜${event.end}`;

  const overview = document.createElement("p");
  overview.textContent = event.overview;

  tooltip.append(badge, name, time, overview);
  tooltip.hidden = false;
  positionTooltip(x, y);
}

function positionTooltip(x, y) {
  if (tooltip.hidden) return;

  const margin = 12;
  const rect = tooltip.getBoundingClientRect();

  let left = x + 14;
  let top = y + 14;

  if (left + rect.width > window.innerWidth - margin) {
    left = x - rect.width - 14;
  }

  if (top + rect.height > window.innerHeight - margin) {
    top = y - rect.height - 14;
  }

  tooltip.style.left = `${Math.max(margin, left)}px`;
  tooltip.style.top = `${Math.max(margin, top)}px`;
}

function hideTooltip() {
  tooltip.hidden = true;
}

document.querySelector("#prev-month").addEventListener("click", () => {
  displayedMonth--;

  if (displayedMonth < 0) {
    displayedMonth = 11;
    displayedYear--;
  }

  renderCalendar();
});

document.querySelector("#next-month").addEventListener("click", () => {
  displayedMonth++;

  if (displayedMonth > 11) {
    displayedMonth = 0;
    displayedYear++;
  }

  renderCalendar();
});

document.querySelector("#today-button").addEventListener("click", () => {
  displayedYear = today.getFullYear();
  displayedMonth = today.getMonth();
  renderCalendar();
});

typeFilter.addEventListener("change", () => {
  renderCalendar();
  renderEventList();
});

document.querySelector("#modal-close").addEventListener("click", closeModal);
document.querySelector("#modal-backdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    hideTooltip();
  }
});

renderCalendar();
renderEventList();
