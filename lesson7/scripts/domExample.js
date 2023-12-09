// Dom manipulation methods

// 1. get data from html using id
let paragraph1 = document.getElementById("paragraph1");

paragraph1.innerHTML = "This is a new paragraph";

// console.log(paragraph1.innerHTML);

// 2. get data from html using class
let userPosts = document.getElementsByClassName("userPosts");
userPosts[0].innerHTML = `
<h2>User Posts</h2>
<ul id="userPostsList">
    <li>User Post 1</li>
    <li>User Post 2</li>
    <li>User Post 3</li>
</ul>
`

// 3. get data from html using tag
let someLink = document.getElementsByTagName("a");
someLink[0].innerHTML = "Google";
someLink[0].href = "https://www.google.com";

// 4. get data from html using querySelector
let userPost = document.querySelector(".userPosts");

// 5. get data from html using querySelectorAll
let userPostList = document.querySelectorAll(".userPosts");
console.log(userPostList[0].innerHTML)