var postApi = function(noteContent) {


    let data = {note_text: noteContent};

fetch("http://4bc3d327.ngrok.io", {
  method: "POST", 
    body: JSON.stringify(data)
}).then(res => {
 // console.log("Request complete! response:", res);
});

}

var getApi = function(callback,id) {
  fetch("http://4bc3d327.ngrok.io", {
    method: "GET",
  }).then(res => {
    return res.json()
  }).then(res => {
    console.log("Request complete! response:", res)
    if(callback){
      if(id) {
        callback(res,id)
      } else {
        callback(res);
      }
    }
    return res
  })
}

// //     fetch('http://8108e4e3.ngrok.io/').then(function (response) {
// // 	// The API call was successful!
// // 	console.log('success!', response);
// // }).catch(function (err) {
// // 	// There was an error
// // 	console.warn('Something went wrong.', err);
// // });

// fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
// 	// The API call was successful!
// 	return response.json();
// }).then(function (data) {
//     // This is the JSON from our response
// 	console.log(data);
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });
