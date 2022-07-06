let source='the-times-of-india'
let apiKey='4aef659dfe9b4d34b3a0c174bb7ede28'

//grab the news container
let newsAccordion = document.getElementById("newsAccordion")
//create an ajax get request
const xhr = new XMLHttpRequest()
// xhr.open('GET', ' https://newsapi.org/v2/top-headlines?country=us&apiKey=4aef659dfe9b4d34b3a0c174bb7ede28', true)
// xhr.open("GET",` https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true)
xhr.open("GET",'https://newsapi.org/v2/top-headlines?country=in&apiKey=4aef659dfe9b4d34b3a0c174bb7ede28',true)
//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        //   console.log(json)
        let articles = json.articles;
        console.log(articles)
        let newsHtml="";
        articles.forEach((element,index)=> {
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                       
                        ${element["title"]}
                    </button>
                </h2>
            </div>
            
            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                data-parent="#newsAccordion">
                <div class="card-body">
                <img src="${element["urlToImage"]}" class="img-fluid" alt="img" width="300px" ><br>
                    ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more here</a>

                </div>
            </div>
            </div>`
            newsHtml+=news;  
        });
newsAccordion.innerHTML=newsHtml
    } else {
        console.log('some error occured')
    }
}

xhr.send()
