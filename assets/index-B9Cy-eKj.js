(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const t={title:"Santiago Restrepo",description:"Web Developer",city:"Bogotá",country:"Colombia",email:"santiago@kumalabs.com"},l=`<h2>Publicis Global Delivery - Lexus.com</h2>
<h3>Experience Technology Architect</h3>
<h4>JUNE 2022 - AUGUST 2024</h4>
<p>Working with a US based team on maintaining and improving the lexus.com site, implementing best practices on modular design, styling and maintaining a large codebase.</p>
<h2>El Espectador</h2>
<h3>Senior developer analyst</h3>
<h4>DECEMBER 2019 - JUNE 2022</h4>
<p>Leading  the technical team as a senior developer in the organization's digital transformation, migrating their previous Drupal site to the Washington Post’s Arc Publishing SaaS platform, based on React.</p>
<h2>Alcaldía de Bogotá - Bogota.gov.co</h2>
<h3>Fullstack</h3>
<h4>NOVEMBER 2018 -NOVEMBER 2019</h4>
<p>Joined the team as a fullstack developer, supporting the portal's launch and standardizing development practices. Led integration of technologies such as SASS and React.</p>
<h2>Freelance</h2>
<h4>APRIL 2015 - NOVEMBER 2018</h4>
<p>Remote freelance developer and project manager for the CIEN + Agency in NYC. Working on both frontend and backend projects for clients such as the United Nations, Kroger, Valeant, and HSN.</p>
<h2>Brandca</h2>
<h3>Tech Lead</h3>
<h4>JUNE 2012 - APRIL 2015</h4>
<p>Supported important stages in the growth of Brandaca agency, providing my technical expertise as a developer, digital strategy, and operations.</p>
<h2>Activo Multimedia,</h2>
<h3>Co-founder</h3>
<h4>NOVEMBER 2008 - JUNE 2012</h4>
<p>Led a multimedia agency under the tutelage of the tech cluster Parquesoft Pereira.</p>
`,s=`<h2>Frontend</h2>
<p>In my web developer work I’ve focused on the area of design and interactivity. I’ve always looked for a clear and fluid interaction in the design elements to improve the usability of the sites and applications I work with.</p>
<ul>
<li><em>Frameworks</em>: React, Astro, Typescript, NextJS.</li>
<li><em>Languages</em>: HTML, Javascript, CSS (SASS).</li>
</ul>
<h2>Backend</h2>
<p>In the backend I am versed in different technologies, such as PHP, Ruby and MySql databases. I have assisted multiple projects as a developer and led to optimize the quality and speed of response. I am a native user of the Linux operating system and I have supported configurations of this type of server.</p>
<ul>
<li><em>CMS</em>: Wordpress, Drupal, Jekyll y Joomla.</li>
<li><em>Languages</em>: PHP, Ruby.</li>
</ul>
<h2>Tech lead</h2>
<p>I’ve led teams of multiple junior developers on large projects, teaching and guiding the development and learning process.</p>
<ul>
<li><em>Frameworks</em>: React, CSS, BEM.\vLanguages: Javascript, CSS (SASS).</li>
</ul>
`,c=`<p>Universidad Tecnológica de Pereira, Systems engineering.</p>
`,d=`<ul>
<li><em>Dot Comm Awards Gold Winner</em>  Dot Com Award Gold Winners in the Government Website Category by Bogota.gov.co</li>
<li><em>GDUSA 2016 AMERICAN WEB DESIGN AWARD</em> Pélo Laser website.</li>
<li><em>Lápiz de Acero</em> Finalist for  Brandca.co website.</li>
<li><em>AWWWARDS</em> April 2015 nominee for Brandca.co</li>
</ul>
`,h=`<p>Fluent in English, experience in reading and conversations in teleconferences and face-to-face meetings.</p>
`,p=`<h2>Lexus</h2>
<ul>
<li><a href="https://www.lexus.com">https://www.lexus.com</a></li>
<li>Role: Experience Technology Architect</li>
<li>Platform: Adobe experience manager.</li>
</ul>
<h2>El Espectador</h2>
<ul>
<li><a href="https://www.elespectador.com">https://www.elespectador.com</a></li>
<li>Role: Senior development analyst.</li>
<li>Platform: Arc Publishing.</li>
</ul>
<h2>Bogotá.gov.co</h2>
<ul>
<li><a href="https://bogota.gov.co">https://bogota.gov.co</a></li>
<li>Role: Fullstack developer.</li>
<li>Platform: Drupal.</li>
</ul>
<h2>Mercadeo APP</h2>
<ul>
<li><a href="https://play.google.com/store/apps/details?id=com.kromagen.mercadeoapp">Play Store</a></li>
<li>Role: Fullstack developer</li>
<li>Platform: React, Cordova.</li>
</ul>
<h2>Remix Design</h2>
<ul>
<li><a href="http://remixdesign.ws/">http://remixdesign.ws/</a></li>
<li>Rol: Fullstack developer.</li>
<li>Plataforma: Jekyll, BackboneJS</li>
</ul>
<h2>Brandca</h2>
<ul>
<li><a href="http://brandca.co/">http://brandca.co/</a></li>
<li>Role: Tech Lead</li>
<li>Platform: Wordpress, jQuery</li>
</ul>
`;document.querySelector("#app").innerHTML=`
<article>
  <header itemscope itemtype="http://schema.org/Person">
    <hgroup>
      <h1 itemprop="name">${t.title}</h1>
      <h2 itemprop="jobTitle">${t.description}</h2>
    </hgroup>
    <address>
      <ui>
        <li><span class="city" itemprop="addressLocality">${t.city}</span>, <span class="city" itemprop="addressCountry">${t.country}</span></li>
        <li itemprop="email">${t.email}</li>
      </ui>
    </address>
  </header>
  <main>
    <section>
      <div id="experience">
        <h1>Experience</h1>
        ${l}
      </div>
      <div id="expertise">
        <h1>Expertise</h1>
        ${s}
      </div>
    </section>
    <section>
      <div id="education">
        <h1>Education</h1>
        ${c}
      </div>
      <div id="achivements">
        <h1>Achivements</h1>
        ${d}
      </div>
      <div id="languages">
        <h1>Languages</h1>
        ${h}
      </div>
      <div id="projects">
        <h1>Projects</h1>
        ${p}
      </div>
    </section>
  </main>
</article>
`;
