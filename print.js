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

  const siteUrl = data.owner.publicSiteUrl || "网站链接将在首次发布后写入";
  const project = (id) => data.projects.find((item) => item.id === id);
  const printCover = (src) =>
    src.replace("assets/projects/", "assets/print/").replace(/\.webp$/, ".jpg");

  const pageHeader = (number, label) => `
    <header class="print-header">
      <span>JINNY LEE / AI CREATOR</span>
      <span>${number} / 09 · ${label}</span>
    </header>
  `;

  const results = (item) => `
    <ul class="result-list">
      ${item.results.map((result) => `<li>${escapeHtml(result)}</li>`).join("")}
    </ul>
  `;

  const publicLinks = (item) =>
    item.links.length
      ? `<div class="print-links">${item.links
          .map(
            (link) =>
              `<a href="${escapeHtml(link.url)}">${escapeHtml(link.label)} ↗</a>`,
          )
          .join("")}</div>`
      : `<p class="evidence-only">${escapeHtml(item.status)} · 无公开链接</p>`;

  const compactProject = (item) => `
    <article class="compact-project">
      <figure>
        <img src="${escapeHtml(printCover(item.cover))}" alt="${escapeHtml(item.coverAlt)}" />
        <span>${escapeHtml(item.number)}</span>
      </figure>
      <div>
        <p class="print-kicker">${escapeHtml(item.number)} · ${escapeHtml(item.category)}</p>
        <h2>${escapeHtml(item.title)}</h2>
        <p class="project-deck">${escapeHtml(item.subtitle)}</p>
        <p>${escapeHtml(item.intro)}</p>
        ${results(item)}
        <p class="proof"><strong>证据：</strong>${escapeHtml(item.proof)}</p>
        ${publicLinks(item)}
      </div>
    </article>
  `;

  const fullProject = (item) => `
    <article class="full-project">
      <figure class="full-project-visual">
        <img src="${escapeHtml(printCover(item.cover))}" alt="${escapeHtml(item.coverAlt)}" />
        <span>${escapeHtml(item.number)} / SELECTED WORK</span>
      </figure>
      <div class="full-project-copy">
        <p class="print-kicker">${escapeHtml(item.number)} · ${escapeHtml(item.category)}</p>
        <h1>${escapeHtml(item.title)}</h1>
        <p class="project-deck">${escapeHtml(item.subtitle)}</p>
        <p class="lead">${escapeHtml(item.intro)}</p>
        <div class="four-grid">
          <div><h3>解决的问题</h3><p>${escapeHtml(item.problem)}</p></div>
          <div><h3>Jinny 的角色</h3><p>${escapeHtml(item.role)}</p></div>
          <div><h3>AI / Kimi 如何参与</h3><p>${escapeHtml(item.ai)}</p></div>
          <div><h3>最终成果</h3>${results(item)}</div>
        </div>
        <p class="proof"><strong>可验证证据：</strong>${escapeHtml(item.proof)}</p>
        ${publicLinks(item)}
      </div>
    </article>
  `;

  const kimi = project("kimi-web-duo");
  const shortFilms = project("ai-short-films");

  const pages = [
    `
      <section class="print-page cover-page" data-page="01">
        <div class="cover-ribbon">AI CREATOR · WEB · FILM · VISUAL SYSTEM · CREATIVE TOOL</div>
        <div class="cover-grid">
          <div class="cover-copy">
            <p class="print-kicker">KIMI AMBASSADOR APPLICATION / 2026</p>
            <h1>AI 不是<br />作品。<br /><em>被打开、被体验、<br />被记住的才是。</em></h1>
            <p class="cover-statement">把 AI 变成可体验的作品、内容与真实工作流。</p>
            <div class="cover-person">
              <strong>Jinny Lee</strong>
              <span>AI 创作者 · 内容与体验设计</span>
            </div>
          </div>
          <figure>
            <img src="assets/print/kimi-web-duo.jpg" alt="Kimi 网页创作双案例" />
            <figcaption>SELECTED WORK 01 / KIMI WEB CREATION</figcaption>
          </figure>
          <div class="cover-badge">09<br /><span>CASES</span></div>
        </div>
        <footer class="cover-footer">
          <span>9 个精选案例</span>
          <span>网页 · 影像 · 视觉 · 工具</span>
          <a href="${escapeHtml(siteUrl)}">${escapeHtml(siteUrl)}</a>
        </footer>
      </section>
    `,
    `
      <section class="print-page position-page" data-page="02">
        ${pageHeader("02", "POSITIONING")}
        <div class="positioning">
          <p class="print-kicker">WHO I AM</p>
          <h1>我不只生成内容。<br />我把模糊想法做成别人能打开、理解、参与和验证的作品。</h1>
          <div class="position-grid">
            <div class="position-quote">
              <p>AI 负责加速探索，</p>
              <strong>人负责最后的方向、判断与审美。</strong>
            </div>
            <div>
              <h2>我的创作闭环</h2>
              <ol>
                <li><span>01</span>找到真实问题与受众</li>
                <li><span>02</span>把 AI 能力翻译成体验</li>
                <li><span>03</span>用证据验收，不混淆状态</li>
                <li><span>04</span>公开作品，也讲清制作方法</li>
              </ol>
            </div>
          </div>
          <div class="capability-strip">
            ${data.capabilities
              .map(
                (item) => `
                  <article>
                    <span>${escapeHtml(item.number)}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.text)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    `,
    `
      <section class="print-page kimi-direct-page" data-page="03">
        ${pageHeader("03", "KIMI DIRECT CASES")}
        <article class="kimi-page">
          <div>
            <p class="print-kicker">01 · KIMI 网页创作双案例</p>
            <h1>同一个工具，<br />两种完全不同的内容气质。</h1>
            <p class="lead">${escapeHtml(kimi.intro)}</p>
          </div>
          <div class="kimi-screens">
            <figure>
              <img src="assets/print/kimi-peony.jpg" alt="牡丹亭网页首屏" />
              <figcaption>《牡丹亭》· 东方戏曲叙事</figcaption>
            </figure>
            <figure>
              <img src="assets/print/kimi-grandma.jpg" alt="给阿嫲的情书网页首屏" />
              <figcaption>《给阿嫲的情书》· 电影内容页面</figcaption>
            </figure>
          </div>
          <div class="three-grid">
            <div><h3>我的角色</h3><p>${escapeHtml(kimi.role)}</p></div>
            <div><h3>Kimi 如何参与</h3><p>${escapeHtml(kimi.ai)}</p></div>
            <div><h3>公开证据</h3><p>${escapeHtml(kimi.proof)}</p></div>
          </div>
          ${publicLinks(kimi)}
        </article>
      </section>
    `,
    `
      <section class="print-page pair-page" data-page="04">
        ${pageHeader("04", "INTERACTIVE & CREATIVE TOOL")}
        <div class="two-project-page">
          ${compactProject(project("infj-midnight-archive"))}
          ${compactProject(project("ai-style-studio"))}
        </div>
      </section>
    `,
    `
      <section class="print-page full-case-page peony-page" data-page="05">
        ${pageHeader("05", "INTERACTIVE CINEMA")}
        ${fullProject(project("digital-peony"))}
      </section>
    `,
    `
      <section class="print-page full-case-page film-page" data-page="06">
        ${pageHeader("06", "AI SHORT FILMS")}
        ${fullProject(shortFilms)}
      </section>
    `,
    `
      <section class="print-page pair-page" data-page="07">
        ${pageHeader("07", "AI TOOL & VISUAL SYSTEM")}
        <div class="two-project-page">
          ${compactProject(project("product-growth"))}
          ${compactProject(project("ecommerce-visual-system"))}
        </div>
      </section>
    `,
    `
      <section class="print-page pair-page" data-page="08">
        ${pageHeader("08", "WORKFLOW & CULTURE")}
        <div class="two-project-page">
          ${compactProject(project("design-reference-automation"))}
          ${compactProject(project("honglou-card-gallery"))}
        </div>
      </section>
    `,
    `
      <section class="print-page closing-page" data-page="09">
        ${pageHeader("09", "PUBLIC OUTPUT")}
        <div class="closing-copy">
          <p class="print-kicker">WHAT I CAN DO FOR KIMI</p>
          <h1>把产品能力，变成普通用户愿意打开、模仿和分享的真实案例。</h1>
          <div class="closing-capabilities">
            ${data.capabilities
              .map(
                (item) => `
                  <article>
                    <span>${escapeHtml(item.number)}</span>
                    <div><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.text)}</p></div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="closing-links">
          <a href="${escapeHtml(siteUrl)}"><span>PUBLIC PORTFOLIO</span>${escapeHtml(siteUrl)}</a>
          ${data.owner.profiles
            .map(
              (profile) =>
                `<a href="${escapeHtml(profile.url)}"><span>PUBLIC PROFILE</span><strong>${escapeHtml(profile.label)}</strong><small>${escapeHtml(profile.url)}</small></a>`,
            )
            .join("")}
        </div>
        <footer class="closing-footer">
          <strong>Jinny Lee</strong>
          <p>独立个人作品集。Kimi 为部分项目使用的创作工具，不代表官方合作或授权关系。</p>
        </footer>
      </section>
    `,
  ];

  document.querySelector("#print-root").innerHTML = pages.join("");

  Promise.all(
    [...document.images].map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise((resolve, reject) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener(
          "error",
          () => reject(new Error(`Image failed: ${image.src}`)),
          { once: true },
        );
      });
    }),
  )
    .then(() => {
      window.__PRINT_READY__ = true;
    })
    .catch((error) => {
      console.error(error);
    });
})();
