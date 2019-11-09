var unirest = require("unirest");

var req = unirest("GET", "https://rakuten_webservice-rakuten-marketplace-product-search-v1.p.rapidapi.com/services/api/Product/Search/20170426");

req.query({
	"keyword": "leather jacket"
});

req.headers({
	"x-rapidapi-host": "rakuten_webservice-rakuten-marketplace-product-search-v1.p.rapidapi.com",
	"x-rapidapi-key": "1c471cb96bmshdf6793186b640a3p168f25jsn7cceeef5e2bb"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});