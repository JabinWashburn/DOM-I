const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navStyling1 = document.querySelectorAll('a');
navStyling1[0].textContent = siteContent['nav']['nav-item-1']
navStyling1[1].textContent = siteContent['nav']['nav-item-2']
navStyling1[2].textContent = siteContent['nav']['nav-item-3']
navStyling1[3].textContent = siteContent['nav']['nav-item-4']
navStyling1[4].textContent = siteContent['nav']['nav-item-5']
navStyling1[5].textContent = siteContent['nav']['nav-item-6']

//setting all the text to green
navStyling1[0].style.color = 'green';
navStyling1[1].style.color = 'green';
navStyling1[2].style.color = 'green';
navStyling1[3].style.color = 'green';
navStyling1[4].style.color = 'green';
navStyling1[5].style.color = 'green';



let domAwesome = document.querySelector('h1');
domAwesome.textContent = siteContent ['cta']['h1'];

let logoTop = document.getElementById("cta-img");
logoTop.setAttribute('src', siteContent["cta"]["img-src"])

let topBtn = document.querySelector('button');
topBtn.textContent = siteContent['cta']['button']

//styling for all of the H4s and Ps paired togehter

let pageStyling = document.querySelectorAll('h4');
let paragraphStyling = document.querySelectorAll('p');
//============================================================
pageStyling[0].textContent = siteContent['main-content']['features-h4']
paragraphStyling[0].textContent = siteContent['main-content']['features-content']
//============================================================
pageStyling[1].textContent = siteContent['main-content']['about-h4']
paragraphStyling[1].textContent = siteContent['main-content']['about-content']
//============================================================
pageStyling[2].textContent = siteContent['main-content']['services-h4']
paragraphStyling[2].textContent = siteContent['main-content']['services-content']
//============================================================
pageStyling[3].textContent = siteContent['main-content']['product-h4']
paragraphStyling[3].textContent = siteContent['main-content']['product-content']
//============================================================
pageStyling[4].textContent = siteContent['main-content']['vision-h4']
paragraphStyling[4].textContent = siteContent['main-content']['vision-content']
//============================================================
//middle logo is actually located between about and services but i wanted them all together.
let middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])
//============================================================
//end of middle section onto the footer

pageStyling[5].textContent = siteContent['contact']['contact-h4'];
paragraphStyling[5].textContent = siteContent['contact']['address']
paragraphStyling[6].textContent = siteContent['contact']['phone']
paragraphStyling[7].textContent = siteContent['contact']['email']

paragraphStyling[8].textContent = siteContent['footer']['copyright']