console.log("hellow babies");

// api key - 56c023d451ab417ca59e522125132bb1
// URL = https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=56c023d451ab417ca59e522125132bb1

let apikey = "56c023d451ab417ca59e522125132bb1";
let source = "bbc-news";
let source2 = "bbc-news";

let newsa = document.getElementById("box1a");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);

    console.log(json);

    let articles = json.articles;
    articles = articles.slice(1, 4);

    let newshtml = "";
    articles.forEach(function (element, index) {
      let news = ` 
     <div id = 'card-bor'>
      <div class="card-header">
        ${element["title"]}
      </div>
      <div id = "card">
      <div class="card-body">
      <div class = 'teext'>
      <img id='onlineimage' src = "${element["urlToImage"]}">
      <div class='text'>
        <h5 class="card-title">${element["description"]}</h5>
        <p class="card-text">${element["content"]}</p>
        <a href="${element["url"]}" class="btn " target ='_blank' >Read artcicle</a>
        </div>
        </div>
      </div>
    </div>
    </div>
 
      `;

      newshtml += news;
      newsa.innerHTML = newshtml;
    });
  } else {
    console.log("some error");
  }
};
xhr.send();

// second

// api key - 56c023d451ab417ca59e522125132bb1
// URL = https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=56c023d451ab417ca59e522125132bb1

let box2 = document.getElementById("box2a");

const xhr1 = new XMLHttpRequest();

xhr1.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`,
  true
);

xhr1.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    articles = articles.slice(1, 5);
    let newshtml = "";
    articles.forEach(function (element, index) {
      let news = ` 
             <div id='scroll-card' class="card" ">
             <img src='${element["urlToImage"]}' class="card-img-top" alt="...">
           <div id='scroll' class="card-body">
               <h5 class="card-title">${element["title"]}</h5>
               <p class="card-text">${element["content"]} </p>
              </div>
              <div id='scroll-link'>
               <a href="${element["url"]}" class='scroll-link' class="card-link " target=_blank>Read More</a>
           </div>
           </div>

            
      `;

      newshtml += news;
      box2.innerHTML = newshtml;
    });
  } else {
    console.log("some error");
  }
};
xhr1.send();

//third

let box3 = document.getElementById("box1b");

const xhr2 = new XMLHttpRequest();
xhr2.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`,
  true
);
xhr2.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    articles = articles.slice(1, 3);
    let newshtml = "";
    articles.forEach(function (element, index) {
      let news = ` 
       <div id='maincard'>
       <div class="card  text-white">
       <img src="${element["urlToImage"]}" class="card-img" alt="...">
       <div class="card-img-overlay">
         <h5 class="card-title">${element["title"]}</h5>
         <p class="card-text>${element["content"]} </p>
         <h5 class="card-text">${element["author"]}</h5>
         <a href='${element["url"]} id='read-text'>Read</a>
       </div>
     </div>
     </div>
            
       `;

      newshtml += news;
      box3.innerHTML = newshtml;
    });
  } else {
    console.log("some error");
  }
};
xhr2.send();

// fourth

let box4 = document.getElementById("box2b");

const xhr3 = new XMLHttpRequest();
xhr3.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`,
  true
);
xhr3.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    articles = articles.slice(7,9 );
    let newshtml = "";
    articles.forEach(function (element, index) {
      let news = `   <div id="extra" class="card mb-3" style="max-width: 365px;max-height: 100px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img id="extra-img" src="${element['urlToImage']}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 id="extra-card-title" class="card-title">${element['author']}</h5>
            <a href="${element["url"]}" class="btn1" target ='_blank' >Read artcicle</a>
           
          </div>
        </div>
      </div>
`

      newshtml += news;
      box4.innerHTML = newshtml;
    });
  } else {
    console.log("some error");
  }
};
xhr3.send();




///fifth



let box5 = document.getElementById("motion");

const xhr4 = new XMLHttpRequest();
xhr4.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?category=sport&apiKey=${apikey}`,
  true
);
xhr4.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    articles = articles.slice(4,8 );
    let newshtml = "";
    articles.forEach(function (element, index) {
      let news = ` <div id='headline'> <h3 class="num"> ${index+1}</h3>
      <div id = 'head1'<span class="headl">${element['title']} </span> 
      </div></div>`

      newshtml += news;
      box5.innerHTML = newshtml;
    });
  } else {
    console.log("some error");
  }
};
xhr4.send();
