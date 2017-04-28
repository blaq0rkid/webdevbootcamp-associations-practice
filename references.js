var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");


// // POST - title and comment
// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// var Post = mongoose.model("Post", postSchema);

// USER email and name
// var userSchema = new mongoose.Schema({
//     email: String,
//     name: String,
//     posts: [
//         {type: mongoose.Schema.Types.ObjectId,
//          ref: "Post"
//         }
//     ]
// });

// Content title & post
// var User = mongoose.model("User", userSchema);

// User.create({
//     email: "b@aol.com",
//     name: "Rod Singer"
// });

Post.create({
    title: "How to cook well, pt. 4",
    content: " Deep Fry it very good!"
}, function (err,post) {
    User.findOne({email: "b@aol.com"}, function (err, foundUser) {
      if (err) {
          console.log(err);
      }else{
          foundUser.posts.push(post);
          foundUser.save(function (err, data) {
              if (err) {
                  console.log(err);
              }else{
                  console.log(data);
              }
          });
        }
    });
});
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(post);
//     }
//});

// User.findOne({email: "b@aol.com"}).populate("posts").exec(function (err,user) {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });
