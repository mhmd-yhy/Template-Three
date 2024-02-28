/*=======$$//Start Articles Section//$$=======*/
function article_section() {
  let article = document.querySelector(`.article .container`);
  article.innerHTML = ``;
  for (let i = 0; i < 8; i++) {
    article.innerHTML += `
  <div class="flex">
    <img src="imgs/cat-0${i + 1}.jpg" alt="">
    <div class="text-article">
      <h4>Test Title</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
    </div>
    <div class="alt flex">
      <a href="#">Read More</a>
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
  </div>
  `;
  }
}
article_section();

/*=======$$//End Articles Section//$$=======*/
/*=======$$//Start Gallery Section//$$=======*/
function gallery_section() {
  let gellery = document.querySelector(`.galery .container`);
  gellery.innerHTML += ``;
  for (let i = 0; i < 6; i++) {
    gellery.innerHTML += `
    <div>
      <div class="image">
        <img src="imgs/gallery-0${i + 1}.png" alt="">
      </div>
    </div>
    `;
  }
}
gallery_section();
/*=======$$//End Gallery Section//$$=======*/
/*=======$$//Start Features Section//$$=======*/
function features_section() {
  let features = document.querySelector(`.features .container`);
  let title = [`Quality`, `Time`, `Passion`];
  features.innerHTML += ``;
  for (let i = 0; i < 3; i++) {
    features.innerHTML += `
    <div class="flex">
      <div class="image"><img src="imgs/features-0${i + 1}.jpg" alt=""></div>
      <div class="text-features">
        <h1>${title[i]}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
        <a href="#">More</a>
      </div>
    </div>
    `;
  }
}
features_section();
/*=======$$//End Features Section//$$=======*/
/*=======$$//Start Testimonials Section//$$=======*/
function testimonials_section() {
  let testimonials = document.querySelector(`.testimonials .container`);
  let testimonial = [
    { icons: [`filled fas fa-star`, `far fa-star`] },
    { icons: [`filled fas fa-star`, `far fa-star`] },
    { icons: [`filled fas fa-star`, `far fa-star`] },
    { icons: [`filled fas fa-star`, `filled fas fa-star`] },
    { icons: [`far fa-star`, `far fa-star`] },
    { icons: [`far fa-star`, `far fa-star`] },
  ];
  for (let i = 0; i < 6; i++) {
    testimonials.innerHTML += `
  <div class="flex">
    <img src="imgs/avatar-0${i + 1}.png" alt="">
    <h3>Mohamed Farag</h3>
    <h4>Full Stack Developer</h4>
    <div class="icon">
      <i class="filled fas fa-star"></i>
      <i class="filled fas fa-star"></i>
      <i class="filled fas fa-star"></i>
      <i class="${testimonial[i].icons[0]}"></i>
      <i class="${testimonial[i].icons[1]}"></i>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
      quaerat ducimus</p>
  </div>
    `;
  }
}
testimonials_section();
/*=======$$//End Testimonials Section//$$=======*/
/*=======$$//Start Team-Members Section//$$=======*/
function teamMembers_section() {
  let team_members = document.querySelector(`.team-members .container`);
  console.log(team_members);
  for (let i = 0; i < 8; i++) {
    team_members.innerHTML += `
    <div class="flex">
    <img src="imgs/team-0${i + 1}.jpg" alt="">
    <div class="icon flex">
      <a href="#">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="#">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
    <div class="text-team">
      <h2>Name</h2>
      <h4>Simple Short Description</h4>
    </div>
  </div>
    `;
  }
}
teamMembers_section();
/*=======$$//End Team-Members Section//$$=======*/
/*=======$$//Start Services Section//$$=======*/
function services_section() {
  let services = document.querySelector(`.services .container`);
  let titles = [
    `Security`,
    `Fixing Issues`,
    `Location`,
    `Coding`,
    `Security`,
    `Marketing`,
  ];
  let icons = [
    `fa-user-shield`,
    `fa-tools`,
    `fa-map-marked-alt`,
    `fa-laptop-code`,
    `fa-palette`,
    `fa-bullhorn`,
  ];
  for (let i = 0; i < 6; i++) {
    services.innerHTML += `
    <div class="flex">
      <i class="fas ${icons[i]} fa-4x"></i>
      <h2>${titles[i]}</h2>
      <div class="section-alt" data-text="0${i + 1}">
        <a href="#">Details</a>
      </div>
    </div>
    `;
  }
}
services_section();
/*=======$$//End Services Section//$$=======*/

/*Change the progess length of skill*/
let skill_section = document.getElementById(`Our-Skills`);
let skills = document.querySelectorAll(`.skills-box>div .progess span`);
window.addEventListener(`scroll`, () => {
  if (window.scrollY >= skill_section.offsetTop - 200) {
    skills.forEach((skill) => (skill.style.width = skill.dataset.width));
  }
});

/*Increase Numbers in Events section*/
let event_Section = document.getElementById(`latest-events`);
let times = document.querySelectorAll(`.time div span:first-child`);
let started = true;
window.addEventListener(`scroll`, () => {
  if (window.scrollY >= event_Section.offsetTop - 100) {
    if (started) {
      times.forEach((time) => {
        let count = setInterval(() => {
          time.textContent++;
          if (time.textContent == time.dataset.time) clearInterval(count);
        }, 2000 / time.dataset.time);
      });
    }
    started = false;
  }
});

/*Increase Numbers in Stats section*/
let started2 = true;
let stats_Section = document.getElementById(`Stats`);
let stats = document.querySelectorAll(`.statsNum`);
window.addEventListener(`scroll`, () => {
  if (window.scrollY >= stats_Section.offsetTop - 200) {
    if (started2) {
      stats.forEach((stat) => {
        let count = setInterval(() => {
          stat.textContent++;
          if (stat.textContent == stat.dataset.stats) clearInterval(count);
        }, 3000 / stat.dataset.stats);
      });
    }
    started2 = false;
  }
});

/*To Top Scroll Button*/
let toTopBtn = document.querySelector(`.btn-top`);
//Show the button
window.addEventListener(`scroll`, () => {
  if (scrollY >= 750) toTopBtn.style.right = `40px`;
  else toTopBtn.style.right = `-40px`;
});

toTopBtn.onclick = (_) => {
  window.scroll({
    top: 0,
    behavior: `smooth`,
  });
};
