# Ygrab.js
Dynamic web scrapping that allows you to turn any site into a JSON accessible api using CSS selectors. This api using YQL.

<h3>Usage:</h3>
<pre>&lt;script src="//code.jquery.com/jquery-2.2.4.min.js"&gt;&lt;/script&gt;
&lt;script src="js/ygrab.js"&gt;&lt;/script&gt;
&lt;script&gt;        
$(function() {

    var data = [
        {
            url: 'http://ibacor.com/blog', // url string rquired
            selector: 'div.post', // selector string rquired
            loop: true, // each boolean rquired
            result: [
                {
                    name: 'title', // key string rquired
                    find: 'h3 a', // selector child string rquired
                    grab: {
                        by: 'text', // attribut string rquired
                        value: '' // attribut value string optional
                    }
                },
                {
                    name: 'link',
                    find: 'h3 a',
                    grab: {
                        by: 'attr',
                        value: 'href'
                    }
                },
                // ---- new selector ---- //
            ]
        },
        // ---- new website url ---- //
    ];
    
    var result = ygrab(data);
    
    console.log(JSON.stringify(result, null, 2));
    
});
&lt;/script&gt;</pre>

<h3>Result:</h3>
<pre>{
  "result": [
    {
      "title": "Mengetahui Informasi Suatu Negara Menggunakan API Worldbank",
      "image": "http://ibacor.com/bcr_asset/images/artikel/11794390317144d0693208eefbc6f908.jpg",
      "link": "http://ibacor.com/blog/mengetahui-informasi-suatu-negara-menggunakan-api-worldbank"
    },
    {
      "title": "Tutorial Login, Register, Logout & CRUD menggunakan PHP & MySQLi OOP + Bootstrap",
      "image": "http://ibacor.com/bcr_asset/images/artikel/e234a76c6b3133e6abd25c9325267ee1.jpg",
      "link": "http://ibacor.com/blog/tutorial-login-register-logout-crud-menggunakan-php-mysqli-oop-bootstrap"
    },
    ...
  ]
}</pre>

<h3><a href="http://ibacor.com/demo/ygrabjs-dynamic-web-scrapping-by-object-using-yql">TUTORIAL</a></h3>
<h3><a href="http://ibacor.com/tools/web-scraping-generator">DEMO</a></h3>
