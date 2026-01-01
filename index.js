const express= require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engines","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("public"));
app.set(express.static(path.join(__dirname,"public")));
/* Write your code here:

Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
//Step 1: Render the home page "/" index.ejs
app.get("/",(req,res)=>{
  res.render("index.ejs");
})

// Step 2: Make sure that static files are linked to and the CSS shows up.
//Step 3: Add the routes to handle the render of the about and contact pages.
app.get("/about",(req,res)=>{
  res.render("about.ejs");
})
app.get("/contact",(req,res)=>{
  res.render("contact.ejs")
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
