# Ygrab.js
Dynamic web scrapping by object using YQL

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
                // ---- etc ---- //
            ]
        },
        // ---- etc ---- //
    ];
    
    var result = ygrab(data);
    
    console.log(JSON.stringify(result, null, 2));
    
});
&lt;/script&gt;</pre>

<h3><a href="http://ibacor.com/demo/ygrabjs-dynamic-web-scrapping-by-object-using-yql">TUTORIAL</a></h3>
<h3><a href="http://ibacor.com/tools/web-scraping-generator">DEMO</a></h3>
