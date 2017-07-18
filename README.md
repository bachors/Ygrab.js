# Ygrab.js
Dynamic web scrapping that allows you to turn any site into a JSON accessible api using CSS selectors. This api using YQL.

<h3>Usage:</h3>
<pre>&lt;script src="//code.jquery.com/jquery-2.2.4.min.js"&gt;&lt;/script&gt;
&lt;script src="js/ygrab.js"&gt;&lt;/script&gt;
&lt;script&gt;        
$(function() {

    var data = [
        {
            url: 'http://bachors.com/blog', // url string rquired
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
    
    ygrab(data, function(result) {
		console.log(JSON.stringify(result, null, 2));
	});
    
});
&lt;/script&gt;</pre>

<h3>Result:</h3>
<pre>[
  {
    "title": "Membuat Aplikasi Android Pencarian Kode POS "
  },
  {
    "title": "Cara mengkonversi video ke gif menggunakan javascript"
  },
  {
    "title": "Cara Backup File & Database di Codeigniter"
  },
  {
    "title": "Membuat aplikasi chatting secara real time menggunakan firebase & jQuery"
  },
  {
    "title": "Cara membuat website menjadi ringan & cepat"
  },
  {
    "title": "Contoh setting file .htaccess"
  }
]</pre>
