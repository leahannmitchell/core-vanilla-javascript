//$("#main").append([" Leah Ann Mitchell "]);/*
// This is empty on purpose! Your code to build the resume will go here.
//  */
// var firstName = "Leah Ann Mitchell";
// var age = "29";
//
var formattedName = HTMLheaderName.replace("%data%", "Leah Ann Mitchell");
$("#header").append(formattedName);
var formattedRole =  HTMLheaderRole.replace("%data%","Software Developer")
$("#header").append(formattedRole)
var bio = {
  "name" : "Leah Ann Mitchell",
  "role"  : "Web Developer",
  "contacts" : {
    "mobile" : "323-561-9090",
    "email"  : "leahannmitchellmusic@gmail.com",
    "github" : "",
    "twitter": "@LAMMUSICnCODING",
    "location": "Oakland, CA",
    "skills":[
      "JS","CSS","HTML5",]
},
// "welcomeMessage": "I am a junior developer who attended a 10 month intensive apprentaceship developer program",
// //],https://avatars2.githubusercontent.com/u/24979856?v=3&u=4ad094fd37541868a3fdd4fbd5f7b841089821b9&s=400};
// }
// //$("#main").append(bio.role);

var work = {};
work.position = "Web Developer";
work.employer = "Learners Guild";
work.years = 0.3;

var education = {};
education["school"] = "Learners Guild";
education["Years attended"] = "0.3";
education["Location"] = "Oakland, Ca";

$("#main").append(work["position"]);
$("#main").append(education.school);

{
 "schools": [{
   "name": "Nova",
   "location": "blah",
   "degree": "Masters",
   "majors": ["blah"],
   "dates": "2013",
   "url": ""
 }, {
   "name": "Nova",
   "location": "blah",
   "degree": "Masters",
   "majors": ["blah"],
   "dates": "2013",
   "url": ""
 }],
 "onlineCourses": [{
   "title": "JavaScript",
   "schools": "udacity",
   "dates": "2014",
   "url": "http//"
 }]
}
var projects = {
  "projects":[
    {
      "title":"sample",
      "dates:" "2014",
      "descripstion": "blahh"
      "images": [
        "https://avatars2.githubusercontent.com/u/24979856?v=3&u=4ad094fd37541868a3fdd4fbd5f7b841089821b9&s=400";

      ]

    }
  ]
}
NaN(gfhgf)
