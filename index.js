console.log('the index is starting');

// twit package
    var Twit = require('twit');

    var T = new Twit({
        consumer_key:         '9HSDd93Hv3yIb535LzmtEa2kn',
        consumer_secret:      'ajl501xZtsUbQX4hbFyDDeIOWNBmgxvKKTbC7BuUZXRrdCuxwt',
        access_token:         '2432037126-dGfw7iMG66qxz9E0dz7fRqRy2cMofz6YQceiwAH',
        access_token_secret:  'ctGK80NK3d2enadoTnu38hlzrOZl1oq3OTqAq5Sl3QgUr',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL:            true,     // optional - requires SSL certificates to be valid.
    });

// twitter-api-v2 package
    const {TwitterApi} = require('twitter-api-v2');

    const client = new TwitterApi({
        appKey:         '9HSDd93Hv3yIb535LzmtEa2kn',
        appSecret:      'ajl501xZtsUbQX4hbFyDDeIOWNBmgxvKKTbC7BuUZXRrdCuxwt',
        accessToken:    '2432037126-dGfw7iMG66qxz9E0dz7fRqRy2cMofz6YQceiwAH',
        accessSecret:   'ctGK80NK3d2enadoTnu38hlzrOZl1oq3OTqAq5Sl3QgUr'
    });

    const rwClient = client.readWrite;

// needle package ** by twitterdev
    const needle = require('needle');
    
    const token = process.env.BEARER_TOKEN;


// ************** END OF CONFIG SETTINGS: 2 packages imported ****************************//


// CT 
/*
var params = {
    q: 'banana since:2019-07-11', 
    count: 4
  }

  T.get('search/tweets', params, gotData);

  function gotData (err, data, response){
    console.log(data);
  } 
*/
// deutschland 
/*
const tweet = async () => {
    try {
        await rwClient.v2.tweet("From Javascript class Good evening friends ~ from twitterBot");
    } catch (e) {
        console.error(e)
    }
}

tweet();
*/

/*
// twitterdev | 

    //-- recent search
const endpointUrl_RecentSearch = "https://api.twitter.com/2/tweets/search/recent";

async function getRequest() {

    // Edit query parameters below
    // specify a search query, and any additional fields that are required
    // by default, only the Tweet ID and text fields are returned
    const params = {
        'query':'colonize',// 'from:twitterdev -is:retweet',
        'tweet.fields': 'author_id'
    }

    const res = await needle('get', endpointUrl_RecentSearch, params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });
        console.log(response.data[1].text);

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();
*/


    // --recent tweet count
    const endpointUrl_RecentCount = "https://api.twitter.com/2/tweets/counts/recent";

    async function getRequest2() {
    
        // Edit query parameters below and specify a search query
        // optional params: start_time,end_time,since_id,until_id,next_token,granularity
        const params2 = {
            'query': 'colonize', //from:twitterdev',
            'granularity': 'day'
        }
    
        const res2 = await needle('get', endpointUrl_RecentCount, params2, {
            headers: {
                "User-Agent": "v2RecentTweetCountsJS",
                "authorization": `Bearer ${token}`
            }
        })
    
        if (res2.body) {
            return res2.body;
        } else {
            throw new Error('Unsuccessful request');
        }
    }
    var countData = [];
    
    (async () => {
    
        try {
            // Make request
            const response2 = await getRequest2();
            console.dir(response2, {
                depth: null
            });
            for (const item of response2.data) {
                countData.push(item.tweet_count);
              }
            console.log(countData);  
        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })();

    // ************** code for executing in canvas sketch ************** //

    function queryKeyword2(){
        // Selecting the input element and get its value 
        var queryInput = document.getElementById("queryInput").value;
        
        // Displaying the value
        alert(queryInput + " Hola!");
    }
    
    function countKeyword2(){
        // Selecting the input element and get its value 
        var countInput = document.getElementById("countInput").value;
        
        // Displaying the value
        alert(countInput + " Hola!");
    }

    // start of p5 sketch


function setup() {
  createCanvas(1500, 1000);
}

function draw() {
    let phase = 0;
    let zoff = 0;
  background(0);
  stroke(255);
  noFill();
  translate(300, height/2);

  for (let k = 0; k < 7; k++){
    translate(80, 0);
    
    phase += 0.01;
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.02) {
      let xoff = map(cos(a), -1, 1, 0, 2);
      let yoff = map(sin(a), -1, 1, 0, 2);
      const r = map(noise(xoff, yoff,zoff), 0, 1, 200, 350);  
    //const r = map(noise(xoff, yoff,zoff), 0, 1, 100, 250) * countData[k]*0.001;  // value of k depending on running node server.
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    zoff += 0.01;
  }
  
}

