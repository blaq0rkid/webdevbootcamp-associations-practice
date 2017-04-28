var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title and comment
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER email and name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

// Content title & post
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//   email: "a@abc.xyz",
//   name: "tom"
// });

// newUser.posts.push({
//     title: "Candy", 
//     content: "Sesame snaps candy canes macaroon."
// });

// newUser.save(function (err, user) {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "The Great Pumpkin",
//     content: "Sesame snaps candy canes macaroon."
// });

// newPost.save(function (err,post) {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

User.findOne({name: "tom"}, function (err,user) {
   if (err) {
       console.log(err);
   }else{
       user.posts.push({
           title: "Feeling snackish",
           content:"looking for any type of sweet...hmmmmmm"
       });
        user.save(function (err, user) {
            if (err) {
                console.log(err);
            }else{
                console.log(user);
            }
        });
   }
});


