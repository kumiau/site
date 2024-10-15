import './style.scss'
import { attributes as me } from './data/main.md';
import { html as experience } from './data/experience.md';
import { html as expertise } from './data/expertise.md';
import { html as education } from './data/education.md';
import { html as achivements } from './data/achivements.md';
import { html as languages } from './data/languages.md';
import { html as projects } from './data/projects.md';
import "@fontsource/merriweather";
import "@fontsource/merriweather/700.css";
import "@fontsource/merriweather/700-italic.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/700.css";


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<article>
  <header itemscope itemtype="http://schema.org/Person">
    <hgroup>
      <h1 itemprop="name">${me.title}</h1>
      <h2 itemprop="jobTitle">${me.description}</h2>
    </hgroup>
    <address>
      <ui>
        <li><span class="city" itemprop="addressLocality">${me.city}</span>, <span class="city" itemprop="addressCountry">${me.country}</span></li>
        <li itemprop="email">${me.email}</li>
      </ui>
    </address>
  </header>
  <main>
    <section>
      <div id="experience">
        <h1>Experience</h1>
        ${experience}
      </div>
      <div id="expertise">
        <h1>Expertise</h1>
        ${expertise}
      </div>
    </section>
    <section>
      <div id="education">
        <h1>Education</h1>
        ${education}
      </div>
      <div id="achivements">
        <h1>Achivements</h1>
        ${achivements}
      </div>
      <div id="languages">
        <h1>Languages</h1>
        ${languages}
      </div>
      <div id="projects">
        <h1>Projects</h1>
        ${projects}
      </div>
    </section>
  </main>
</article>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
