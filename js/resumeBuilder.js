/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Tanya Podinovskaia";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Tanya Podinovskaia",
	"role" : "Web Developer",
	"contact" : {
		"telephone" : "07759682465",
		"email": "tp231@hotmail.com"
	} ,
	"picture": "images/me.jpg",
	"welcomeMessage" : "Thank you for taking your time to read my resume",
	"skills": ["IT","process improvement","SQL"]
};

var work = {
	"jobs" : [
		{
			"title":"Web Developer",
			"employer" : "WBS",
			"yearsWorked" : 1,
			"city" : "Coventry"
		},
		{
			"title":"Technology Integrator",
			"employer" : "WBS",
			"yearsWorked" : 5,
			"city" : "Coventry"
		},
		{
			"title":"Helpdesk Support Consultant",
			"employer" : "WBS",
			"yearsWorked" : 6,
			"city" : "Coventry"
		}
	]
};

var education = {
	"highestQual" : "PGA",
	"places":[
		{
			"name":"Finham Park",
			"qualifications":["GCSEs","ALevels"]
		}
		,
		{
			"name":"Cambridge",
			"qualifications":["BA","MA"]
		}
	]
};

var projects = {
	"work": [
		{
			"team":"Masters",
			"description":"designing exam board online system",
			"dates":"Jan-May 2014"
		},
		{
			"team":"Software Development",
			"description":"metrics UI",
			"dates":"Jan-Apr 2017"
		}
	],
	"leisure": [
		{
			"name":"Rowing",
			"description":"coaching beginner rowers",
			"dates":"Jan-May 2017"
		},
		{
			"name":"Studying",
			"description":"PGA TEL",
			"dates":"Nov 2016 - Oct 2017"
		}
	]
};



//$("#main").append(work.job);
//$("#main").append(education["city"]);

if (bio["skills"].length > 0) {
 $("#header").append(HTMLskillsStart);
 var mySkills = HTMLskills.replace("%data%",bio.skills[0]);
 $("#skills").append(mySkills);
 var mySkills = HTMLskills.replace("%data%",bio.skills[1]);
 $("#skills").append(mySkills);
 var mySkills = HTMLskills.replace("%data%",bio.skills[2]);
 $("#skills").append(mySkills);
};

for (var job in work.jobs) {
	console.log(job.title);
}