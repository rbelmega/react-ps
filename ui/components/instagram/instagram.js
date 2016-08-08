let token = '321136775.3cb013a.1ad40a92d27f452d8320bb1c45b0baf5';
let username = 'rbelmega';
let num_photos = 10;

fetch('https://api.instagram.com/v1/users/search?access_token=' + token + '&q=' + username)
.then(function (data) {
	console.log(data);
	fetchJsonp({
		url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent',
		type: 'GET',
		data: {access_token: token, count: num_photos}
	})
	.then(
		function (data2) {
			console.log(data2);
			for (x in data2.data) {
				$('ul').append('<li><img src="' + data2.data[x].images.thumbnail.url + '"></li>');
			}
		},
		function (data2) {
			console.log(data2);
		});
});