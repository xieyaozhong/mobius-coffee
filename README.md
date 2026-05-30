const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".filter").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    document.querySelectorAll(".menu-item").forEach((item) => {
      const match = filter === "all" || item.dataset.category === filter;
      item.style.display = match ? "block" : "none";
    });
  });
});

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = "已複製地址";
      setTimeout(() => {
        button.textContent = original;
      }, 1600);
    } catch (error) {
      alert("地址：" + text);
    }
  });
});

document.querySelectorAll(".mini-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const note = document.querySelector('textarea[name="note"]');
    if (note) {
      note.value = `想詢問：${product}`;
      document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const reservationForm = document.querySelector("#reservationForm");
const reservationStatus = document.querySelector("#reservationStatus");

if (reservationForm) {
  reservationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(reservationForm).entries());

    // 正式使用方式：
    // 1. 建立 Google Form
    // 2. 把下面 GOOGLE_FORM_URL 換成 formResponse 網址
    // 3. 把 entry.xxxxxx 欄位換成你的 Google Form 欄位 ID
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/你的Google表單ID/formResponse";
    const isConfigured = !GOOGLE_FORM_URL.includes("你的Google表單ID");

    if (isConfigured) {
      const body = new FormData();
      body.append("entry.姓名欄位ID", data.name);
      body.append("entry.電話欄位ID", data.phone);
      body.append("entry.日期欄位ID", data.date);
      body.append("entry.時間欄位ID", data.time);
      body.append("entry.人數欄位ID", data.people);
      body.append("entry.備註欄位ID", data.note || "");

      try {
        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          body
        });
      } catch (error) {
        console.warn(error);
      }
    }

    reservationStatus.textContent = `訂位資料已送出：${data.name}，${data.date} ${data.time}，${data.people} 位`;
    reservationForm.reset();
  });
}

const eventForm = document.querySelector("#eventForm");
const eventStatus = document.querySelector("#eventStatus");

if (eventForm) {
  eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(eventForm).entries());
    eventStatus.textContent = `活動報名已送出：${data.eventName}，我們會再與你聯繫`;
    eventForm.reset();
  });
}

const contactForm = document.querySelector("#contactForm");
const contactStatus = document.querySelector("#contactStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(contactForm).entries());

    // 聯絡表單正式串接：
    // 建立 Google Form 後，把 CONTACT_FORM_URL 換成 formResponse
    // 再把 entry.xxxxxx 換成各欄位 ID
    const CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/你的聯絡表單ID/formResponse";
    const isConfigured = !CONTACT_FORM_URL.includes("你的聯絡表單ID");

    if (isConfigured) {
      const body = new FormData();
      body.append("entry.姓名欄位ID", data.contactName);
      body.append("entry.Email欄位ID", data.contactEmail);
      body.append("entry.主題欄位ID", data.contactTopic);
      body.append("entry.訊息欄位ID", data.contactMessage);

      try {
        await fetch(CONTACT_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          body
        });
      } catch (error) {
        console.warn(error);
      }
    }

    contactStatus.textContent = `聯絡訊息已送出：${data.contactTopic}。也可以直接寄信到 handsomeboy784@gmail.com`;
    contactForm.reset();
  });
}
