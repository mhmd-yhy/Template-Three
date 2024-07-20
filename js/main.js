/*=======$$//Start Nav Bullets//$$=======*/
//Select All Bullets
let bullets = document.querySelectorAll(`.navSide li`);
function scrollToSection(elements) {
  elements.forEach((element) => {
    element.addEventListener(`click`, function (e) {
      e.preventDefault();
      let sec = document.querySelector(e.target.dataset.scroll);
      /*=====طريقة أولى=====*/
      sec.scrollIntoView({
        behavior: "smooth",
      });
      /*=====طريقة ثانية=====*/
      // window.scrollTo({
      //     top: sec.offsetTop,
      //     behavior: "smooth",
      // });
    });
  });
}
scrollToSection(bullets);
/*=======$$//End Nav Bullets//$$=======*/

/*=======$$//Start Articles Section//$$=======*/
function article_section() {
  let cards = [
    {oyunName: "World Of Warcaft"},
    {oyunName: "Hello Neighbor Hide"},
    {oyunName: "Baldur's Gate 3"},
    {oyunName: "YuGiOh"},
    {oyunName: "Dark Souls III"},
    {oyunName: "League Of Legends"},
    {oyunName: "Large ball"},
    {oyunName: "Sunshine Days"},
  ];
  let article = document.querySelector(`.article .container`);
  article.innerHTML = ``;
  for (let i = 0; i < 8; i++) {
    article.innerHTML += `
  <div class="article-box flex">
    <img src="imgs/cat-0${i + 1}.jpg" alt="">
    <div class="text-article">
      <h4>${cards[i].oyunName}</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
    </div>
    <div class="alt flex">
      <button  class = "article-read" href="">Read More</button>
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
  </div>
  `;
  }

  // When click to "more" button
  document.querySelectorAll(".article-read").forEach((link) => {
    link.addEventListener(`click`, function (e) {
      e.preventDefault();
      let popup = document.createElement(`div`);
      popup.classList = `pop`;
      popup.innerHTML += `
    <div class="pop-overflow"></div>
    <div class="pop-show">
      <div class="btn-close">X</div>
      <div class="description-pop" style = "text-align : start">
        <h2>${e.target.parentElement.parentElement.querySelector(".text-article h4").innerHTML} : </h2>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    <img src="${e.target.parentElement.parentElement.querySelector("img").src}" alt="">
    </div>
  `;

      // popup Close
      // let articleBox = e.target.parentElement.parentElement.parentElement.parentElement;
      let articleBox = article.parentElement;
      articleBox.appendChild(popup);
      if (document.querySelector(".pop-show")) {
        document.querySelector(".btn-close").addEventListener(`click`, function () {
          document.querySelector(".pop").remove();
        });
      }
    });
  });
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
function Features_Section() {
  let popup = document.createElement(`div`);
  popup.classList = `pop`;
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
        <a class = "more" href="">More</a>
      </div>
    </div>
    `;
  }

  // When click to "more" button
  document.querySelectorAll(".more").forEach((link) => {
    link.addEventListener(`click`, function (e) {
      e.preventDefault();
      popup.innerHTML += `
    <div class="pop-overflow"></div>
    <div class="pop-show">
      <div class="btn-close">X</div>
      <div class="description-pop" style = "text-align : start">
        <h2>${e.target.parentElement.querySelector("h1").innerHTML} : </h2>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    <img src="${e.target.parentElement.parentElement.querySelector(".image img").src}" alt="">
    </div>
  `;

      // popup Close
      let featurBox = e.target.parentElement.parentElement;
      featurBox.appendChild(popup);
      if (document.querySelector(".pop-show")) {
        document.querySelector(".btn-close").addEventListener(`click`, function () {
          document.querySelector(".pop").innerHTML = ``;
        });
      }
    });
  });
}
Features_Section();
/*=======$$//End Features Section//$$=======*/
/*=======$$//Start Testimonials Section//$$=======*/
function testimonials_section() {
  let testimonials = document.querySelector(`.testimonials .container`);
  let testimonial = [
    {
      icons: [`filled fas fa-star`, `far fa-star`],
      name: "Muhammed Farag",
      programming: "Full Stack Developer",
    },
    {
      icons: [`filled fas fa-star`, `far fa-star`],
      name: "Ahmed Masri",
      programming: "BackEnd Developer",
    },
    {
      icons: [`filled fas fa-star`, `far fa-star`],
      name: "Khaled Samir",
      programming: "FrontEnd Developer",
    },
    {
      icons: [`filled fas fa-star`, `filled fas fa-star`],
      name: "Mahmoud Ahmed",
      programming: "Windows Application Developer",
    },
    {
      icons: [`far fa-star`, `far fa-star`],
      name: "Abdullah Elhasan",
      programming: "Flutter Developer",
    },
    {
      icons: [`far fa-star`, `far fa-star`],
      name: "Salman Harasta",
      programming: "Full Stack Developer",
    },
  ];
  for (let i = 0; i < 6; i++) {
    testimonials.innerHTML += `
  <div class="flex">
    <img src="imgs/avatar-0${i + 1}.png" alt="">
    <h3>${testimonial[i].name}</h3>
    <h4>${testimonial[i].programming}</h4>
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
  let titles = [`Security`, `Fixing Issues`, `Location`, `Coding`, `Security`, `Marketing`];
  let icons = [`fa-user-shield`, `fa-tools`, `fa-map-marked-alt`, `fa-laptop-code`, `fa-palette`, `fa-bullhorn`];
  for (let i = 0; i < 6; i++) {
    services.innerHTML += `
    <div class="flex">
      <i class="fas ${icons[i]} fa-4x"></i>
      <h2>${titles[i]}</h2>
      <div class="section-alt" data-text="0${i + 1}">
        <button>Details</button>
      </div>
    </div>
    `;
  }
}
services_section();
/*=======$$//End Services Section//$$=======*/
/*=======$$//Start Latest-Events Section//$$=======*/
function LatestEvents_Section() {
  let email = document.querySelector(`.subscribe form .sub-email`);
  let subscribeSubmit = document.querySelector(`.subscribe form .sub-submit`);
  subscribeSubmit.onclick = function (e) {
    e.preventDefault();
    let popup = document.createElement(`div`);
    popup.innerHTML += `
  <div class="pop-overflow"></div>
  <div class="pop-show">
    <div class="btn-close">X</div>
    <div class="description-pop">
      <h2>Subscribe</h2>
      <p> By "${email.value}" subscribed successfuly</p>
    </div>
  </div>
  `;
    document.querySelector(`.subscribe`).appendChild(popup);
    if (document.querySelector(`.pop-show`)) {
      document.querySelector(`.btn-close`).onclick = () => {
        document.querySelector(`.subscribe`).removeChild(popup);
      };
    }
  };
}
LatestEvents_Section();
/*=======$$//End Latest-Events Section//$$=======*/
/*=======$$//Start Vedio Section//$$=======*/
function inactiveLink(path) {
  document.querySelectorAll(`.${path}`).forEach((link) => {
    link.addEventListener(`click`, (e) => {
      e.preventDefault();
    });
  });
}
inactiveLink("container-video a");
inactiveLink("footer .link");
/*=======$$//End Vedio Section//$$=======*/
/*=======$$//Start Discount Section//$$=======*/
document.querySelector(`.send`).onclick = (e) => {
  e.preventDefault();
  let popup = document.createElement(`div`);
  popup.classList = `pop`;
  popup.innerHTML += `
    <div class="pop-overflow"></div>
    <div class="pop-show">
      <div class="btn-close">X</div>
      <div class="description-pop" style = "text-align : start">
        <h2>Discount : </h2>
        <p>Your order has been sent for the discount</p>
      </div>
    </div>
  `;

  // popup Close
  let discount_sec = document.querySelector(`.discount`);
  discount_sec.appendChild(popup);
  if (document.querySelector(".pop-show")) {
    document.querySelector(".btn-close").addEventListener(`click`, function () {
      document.querySelector(".pop").remove();
    });
  }
};
/*=======$$//End Discount Section//$$=======*/

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
