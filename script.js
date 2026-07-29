(() => {
  const data = window.PORTFOLIO;
  if (!data) {
    throw new Error("Portfolio data is unavailable.");
  }

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const linkMarkup = (link) => `
    <a
      class="project-link"
      href="${escapeHtml(link.url)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${escapeHtml(link.label)}（新窗口打开）"
    >
      ${escapeHtml(link.label)}
      <span aria-hidden="true">↗</span>
    </a>
  `;

  const mediaMarkup = (project) => {
    if (!project.media?.length) {
      return "";
    }
    return `
      <div class="project-media-grid">
        ${project.media
          .map(
            (media) => `
              <figure class="video-preview">
                <video controls muted playsinline preload="metadata" poster="${escapeHtml(
                  media.poster,
                )}">
                  <source src="${escapeHtml(media.src)}" type="video/mp4" />
                  当前浏览器无法播放此视频。
                </video>
                <figcaption>${escapeHtml(media.label)}</figcaption>
              </figure>
            `,
          )
          .join("")}
      </div>
    `;
  };

  const projectMarkup = (project, index) => `
    <article
      id="${escapeHtml(project.id)}"
      class="project-card ${index === 0 ? "project-card-featured" : ""}"
      data-project-card
      data-project-index="${index + 1}"
    >
      <div class="project-cover">
        <img
          src="${escapeHtml(project.cover)}"
          alt="${escapeHtml(project.coverAlt)}"
          loading="eager"
        />
        <span class="project-number" aria-hidden="true">${escapeHtml(project.number)}</span>
        <span class="status status-${escapeHtml(project.statusTone)}">${escapeHtml(
          project.status,
        )}</span>
      </div>
      <div class="project-body">
        <p class="project-category">${escapeHtml(project.category)}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-subtitle">${escapeHtml(project.subtitle)}</p>
        <p class="project-intro">${escapeHtml(project.intro)}</p>
        ${
          project.links.length
            ? `<div class="project-links">${project.links.map(linkMarkup).join("")}</div>`
            : `<p class="project-no-link">此案例不提供公开链接，证据状态见下方。</p>`
        }
        <details class="project-details">
          <summary>
            <span>查看完整案例</span>
            <span class="summary-icon" aria-hidden="true"></span>
          </summary>
          <div class="detail-grid">
            <div>
              <p class="detail-label">解决的问题</p>
              <p>${escapeHtml(project.problem)}</p>
            </div>
            <div>
              <p class="detail-label">Jinny 的角色</p>
              <p>${escapeHtml(project.role)}</p>
            </div>
            <div>
              <p class="detail-label">AI / Kimi 如何参与</p>
              <p>${escapeHtml(project.ai)}</p>
            </div>
            <div>
              <p class="detail-label">最终成果</p>
              <ul>
                ${project.results.map((result) => `<li>${escapeHtml(result)}</li>`).join("")}
              </ul>
            </div>
            <div class="detail-proof">
              <p class="detail-label">可验证证据</p>
              <p>${escapeHtml(project.proof)}</p>
            </div>
          </div>
          ${mediaMarkup(project)}
        </details>
      </div>
    </article>
  `;

  document.querySelector("#project-list").innerHTML = data.projects
    .map(projectMarkup)
    .join("");

  document.querySelector("#capability-list").innerHTML = data.capabilities
    .map(
      (item) => `
        <article class="capability-card">
          <span>${escapeHtml(item.number)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join("");

  document.querySelector("#profile-links").innerHTML = data.owner.profiles
    .map(
      (profile, index) => `
        <a
          href="${escapeHtml(profile.url)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${escapeHtml(profile.label)}（新窗口打开）"
        >
          <span>0${index + 1}</span>
          <span class="profile-link-copy">
            <strong>${escapeHtml(profile.label)}</strong>
            <small>${escapeHtml(profile.url)}</small>
          </span>
          <span class="profile-arrow" aria-hidden="true">↗</span>
        </a>
      `,
    )
    .join("");

  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".site-nav");

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".project-card, .capability-card")
      .forEach((element) => observer.observe(element));
  } else {
    document
      .querySelectorAll(".project-card, .capability-card")
      .forEach((element) => element.classList.add("is-visible"));
  }

  const progress = document.querySelector(".scroll-progress");
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

  if (!reduceMotion) {
    const hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      hero.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    });
  }

  window.__PORTFOLIO_READY__ = true;
})();
