// 
// 
// 
//  Api js
// 
// 
// 

function home(){
  let sec = document.getElementById("Home");
  fetch("./html/home.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Employment(){
  let sec = document.getElementById("Home");
  fetch("./html/Employment.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Education(){
  let sec = document.getElementById("Home");
  fetch("./html/Education.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Business(){
  let sec = document.getElementById("Home");
  fetch("./html/Business.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Finance(){
  let sec = document.getElementById("Home");
  fetch("./html/Finance.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Socialising(){
  let sec = document.getElementById("Home");
  fetch("./html/Socialising.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Relationship(){
  let sec = document.getElementById("Home");
  fetch("./html/Relationship.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Properties(){
  let sec = document.getElementById("Home");
  fetch("./html/Properties.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Shopping(){
  let sec = document.getElementById("Home");
  fetch("./html/Shopping.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Health(){
  let sec = document.getElementById("Home");
  fetch("./html/Health.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function About(){
  let sec = document.getElementById("Home");
  fetch("./html/About.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function Help(){
  let sec = document.getElementById("Home");
  fetch("./html/Help.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}
function startnf(){
  let sec = document.getElementById("Home");
  fetch("./html/startnewlife.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      sec.innerHTML = data
    });
}




// 
// 
// 
//  main js
// 
// 
// 

console.log("working js");

// elements and variables
let body = document.getElementsByTagName("body");
let main = document.querySelector(".main");
let current = "";
let navlinks = document.getElementsByClassName("navlinks");
let gamedate = document.getElementById("gamedate");
let income = document.getElementById("income");
let cash = document.getElementById("cash");
let age_el = document.getElementById("age");
let jobs_list = document.getElementById("jobs_list");
let Appernticeship = document.getElementById("Appernticeship");
let College_Courses = document.getElementById("College_Courses");
let University_Courses = document.getElementById("University_Courses");
let Masters_Degree_Courses = document.getElementById("Masters_Degree_Courses");
let Doctorate_Courses = document.getElementById("Doctorate_Courses");
let Specialist_Courses = document.getElementById("Specialist_Courses");
let day_left_education = document.getElementById("day_left_education");
let qualifications_el = document.getElementById("qualifications");
let gotop = document.getElementById("gotop");
let in_education;
let current_degrees;
let days_left_in_education;
let currently_doing_course;
let feespermonth;
let givespermonth;

let playername_el = document.getElementById("playername");
let childnode = document.createElement("li");

// cash
let PlayerName;
let current_cash;
let per_month_income;
let per_month_expenses;
let current_job_salary;
// what doing currently

let full_time_job;
let full_time_study;
let doing_job;
let current_job;
// Date
let startdate;
let dob;
let current_age;
let day = 60 * 60 * 24 * 1000;
let date;
let match;
let localstorage1 = localStorage.getItem("localstorage");

let resume;

// user local storage check #####

if (localstorage1 != null) {
  console.log("local check");
  PlayerName = localStorage.getItem("PlayerName");
  current_cash = parseInt(localStorage.getItem("current_cash"));
  per_month_income = parseInt(localStorage.getItem("per_month_income"));
  per_month_expenses = parseInt(localStorage.getItem("per_month_expenses"));
  in_education = JSON.parse(localStorage.getItem("in_education"));
  startdate = new Date(localStorage.getItem("startdate"));
  current_degrees = JSON.parse(localStorage.getItem("current_degrees"));
  resume = JSON.parse(localStorage.getItem("resume"));
  dob = new Date(localStorage.getItem("dob"));
  full_time_job = JSON.parse(localStorage.getItem("full_time_job"));
  currently_doing_course = localStorage.getItem("currently_doing_course");
  full_time_study = localStorage.getItem("full_time_study");
  days_left_in_education = parseInt(
    localStorage.getItem("days_left_in_education")
  );
  feespermonth = parseInt(localStorage.getItem("feespermonth"));
  givespermonth = parseInt(localStorage.getItem("givespermonth"));
  doing_job = JSON.parse(localStorage.getItem("doing_job"));
  current_age = parseInt(localStorage.getItem("current_age"));
  current_job_salary = parseInt(localStorage.getItem("current_job_salary"));
  current_job = localStorage.getItem("current_job");

  gameloop();
} else {
  // location.href = "startnewlife.html";
}
console.log("startdate");
// fetching courses.json

// navbar links active state

// Functions ##############
function StartNewLife() {
  let payername = document.getElementById("payernameinput").value;
  localStorage.clear();
  PlayerName = payername;
  current_cash = 0;
  per_month_income = 100;
  per_month_expenses = 0;
  full_time_job = false;
  full_time_study = false;
  doing_job = false;
  current_job = "";
  in_education = false;
  current_degrees = [];
  days_left_in_education = 0;
  currently_doing_course = "";
  feespermonth = 0;
  current_job_salary = 0;
  givespermonth = 0;

  resume = [];

  startdate = new Date();
  dob = new Date();
  current_age = 16;
  day = 60 * 60 * 24 * 1000;
  date;
  match = 0;
  setlocalvariables();
  localstorage1 = true;
  gameloop();
}
function setlocalvariables() {
  localStorage.setItem("localstorage", localstorage1);
  localStorage.setItem("PlayerName", PlayerName);
  localStorage.setItem("current_cash", current_cash);
  localStorage.setItem("per_month_income", per_month_income);
  localStorage.setItem("full_time_job", full_time_job);
  localStorage.setItem("currently_doing_course", currently_doing_course);
  localStorage.setItem("full_time_study", full_time_study);
  localStorage.setItem("per_month_expenses", per_month_expenses);
  localStorage.setItem("current_degrees", JSON.stringify(current_degrees));
  localStorage.setItem("resume", JSON.stringify(resume));
  localStorage.setItem("days_left_in_education", days_left_in_education);
  localStorage.setItem("feespermonth", feespermonth);
  localStorage.setItem("givespermonth", givespermonth);
  localStorage.setItem("startdate", startdate);
  localStorage.setItem("dob", dob);
  localStorage.setItem("doing_job", doing_job);
  localStorage.setItem("current_age", current_age);
  localStorage.setItem("current_job", current_job);
  localStorage.setItem("in_education", in_education);
  localStorage.setItem("current_job_salary", current_job_salary);
}

function setdate() {
  date = new Date(startdate.getTime() + day);
  gamedate.innerText = `${startdate.getDate()} / ${
    startdate.getMonth() + 1
  } / ${startdate.getFullYear()}`;
  startdate = date;
}
function setcash() {
  try {
    income.innerHTML = `${per_month_income}/Month`;
    if (startdate.getDate() === 1) {
      current_cash += per_month_income - per_month_expenses;
    }
    cash.innerHTML = current_cash;
  } catch (error) {
    if (startdate.getDate() === 1) {
      current_cash += per_month_income - per_month_expenses;
    }
    cash.innerHTML = current_cash;
  }
}
function gameloop() {
  setInterval(() => {
    setdate();
    setcash();

    setlocalvariables();
    try {
      playername_el.innerHTML = `${PlayerName}`;
    } catch (error) {}
    if (qualifications_el != null) {
      let innerd = "";
      current_degrees.forEach((element) => {
        innerd = ` ${innerd} ${element} </br>`;
      });
      qualifications_el.innerHTML = `${innerd}`;
    }
    current_age = startdate.getFullYear() - dob.getFullYear() + 16;
    if (age_el != null) {
      age_el.innerHTML = `Age: ${current_age}`;
    }

    if (in_education) {
      days_left_in_education -= 1;
      if (days_left_in_education === 0) {
        in_education = false;

        per_month_expenses -= feespermonth;
        per_month_income -= givespermonth;
        current_degrees = current_degrees.concat([currently_doing_course]);
        currently_doing_course = "";
        feespermonth = 0;
        givespermonth = 0;
      }
    }
    try {
      day_left_education.innerHTML = `<div>${days_left_in_education} Days Remaining </br> <p class="text-white-50">Current Course: ${currently_doing_course}</p></div>`;
    } catch (error) {}

    if (startdate.getDate() === 1) {
      if (doing_job) {
        resume.forEach((element) => {
          if (element[0] == current_job) {
            element[1] = element[1] + 1;
            console.log(element[1]);
          }
        });
      }
    }
  }, 1000);
}

function msg(msg) {
  let msg_body = document.querySelector(".msg_body");
  let msg_main = document.querySelector(".msg_main");
  let msg_close_btn = `<button id="msg_close_btn" class="btn btn-danger m-2" onclick="closemsg()" >Close</button>`;
  msg_body.innerHTML = `<div> ${msg} </div> ${msg_close_btn}`;
  msg_main.style.display = "flex";
}
function closemsg() {
  let msg_main = document.querySelector(".msg_main");
  msg_main.style.display = "none";
}

//
//
//
// Education js
//
//
//

fetch("./js/courses.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    json_courses = data;
    addCourse(json_courses["Apprentices"], Appernticeship, true);
    addCourse(json_courses["College Courses"], College_Courses, false);
    addCourse(json_courses["University Courses"], University_Courses, false);
    addCourse(
      json_courses["Masters Degree Courses"],
      Masters_Degree_Courses,
      false
    );
    addCourse(json_courses["Doctorate Courses"], Doctorate_Courses, false);
    addCourse(json_courses["Specialist Courses"], Specialist_Courses, false);
  });

function addCourse(course, course_el, fulltime) {
  course.forEach((element) => {
    childnode = document.createElement("li");
    childnode.innerHTML = `${element.name}`;
    childnode.classList.add("btn1");

    childnode.addEventListener("click", () => {
      if (!in_education && !current_degrees.includes(element.name)) {
        if (element.requirements === "") {
          full_time_study = fulltime;
          if (element.feespermonth != 0) {
            if (per_month_income >= element.feespermonth) {
              per_month_expenses += element.feespermonth;
              feespermonth = element.feespermonth;
              in_education = true;
              currently_doing_course = element.name;
              days_left_in_education = (element.duration / 6) * 182;
            } else {
              msg(`Per month income does not enough`);
            }
          }

          if (element.givespermonth != 0) {
            per_month_income += element.givespermonth;
            givespermonth = element.givespermonth;
            in_education = true;
            currently_doing_course = element.name;
            days_left_in_education = (element.duration / 6) * 182;
          }

          if (element.onetimefees != 0) {
            if (current_cash >= element.onetimefees) {
              current_cash -= element.onetimefees;
              in_education = true;
              s;
              currently_doing_course = element.name;
              days_left_in_education = (element.duration / 6) * 182;
            } else {
              msg(`You dont have enough cash`);
            }
          }
        } else if (current_degrees.includes(element.requirements)) {
          if (element.feespermonth != 0) {
            if (per_month_income >= element.feespermonth) {
              per_month_expenses += element.feespermonth;
              feespermonth = element.feespermonth;
              in_education = true;
              currently_doing_course = element.name;
              days_left_in_education = (element.duration / 6) * 182;
            } else {
              msg(`Per month income does not enough`);
            }
          }

          if (element.givespermonth != 0) {
            per_month_income += element.givespermonth;
            givespermonth = element.givespermonth;
            in_education = true;
            currently_doing_course = element.name;
            days_left_in_education = (element.duration / 6) * 182;
          }

          if (element.onetimefees != 0) {
            if (current_cash >= element.onetimefees) {
              current_cash -= element.onetimefees;
              in_education = true;
              s;
              currently_doing_course = element.name;
              days_left_in_education = (element.duration / 6) * 182;
            } else {
              msg(`You dont have enough cash`);
            }
          }
        } else {
          msg(`course requirements did not match ${element.requirements}`);
        }
      } else {
        msg(`you are  already in education`);
      }
    });

    course_el.appendChild(childnode);
  });
}
function quit_course() {
  if (in_education) {
    in_education = false;
    days_left_in_education = 0;
    currently_doing_course = "";
    per_month_expenses -= feespermonth;
    per_month_income -= givespermonth;
    feespermonth = 0;
    givespermonth = 0;
  }
}

//
//
//
// emloayment js
//
//
//
const elj = document.getElementById("elj");
const mlj = document.getElementById("mlj");
const llj = document.getElementById("llj");
const hlj = document.getElementById("hlj");
const tlj = document.getElementById("tlj");
const sj = document.getElementById("sj");
const clj = document.getElementById("clj");
const Employment_Status_el = document.getElementById("Employment_Status");
const Current_Salary_el = document.getElementById("Current_Salary");

Employment_Status_el.innerHTML = `${current_job}`;
Current_Salary_el.innerHTML = `$${current_job_salary} / Month`;

fetch("./js/jobs.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    json_jobs = data;
    addCourse(json_jobs["Entry Level Jobs"], elj);
    addCourse(json_jobs["Low Level Jobs"], llj);
    addCourse(json_jobs["MId Level Jobs"], mlj);
    addCourse(json_jobs["High Level Jobs"], hlj);
    addCourse(json_jobs["Top Level Jobs"], tlj);
    addCourse(json_jobs["Special Jobs"], sj);
    addCourse(json_jobs["Criminal Level Jobs"], clj);
  });

function addCourse(job, job_el) {
  job.forEach((element) => {
    childnode = document.createElement("li");
    childnode.innerHTML = `${element.Name} - ${element.Salary} / month`;
    childnode.classList.add("btn1");
    childnode.addEventListener("click", () => {
      if (!doing_job) {
        if (element.Requirements === "") {
          if (element.Degree === "") {
            dojob(element)
          } else {
            if (current_degrees.includes(element.Degree)) {
              dojob(element)
            } else {
              msg(`This job requirements is ${element.Degree}`);
            }
          }
        } else {
          if (element.Degree === "") {
            if (resume_includes(element.Requirements)) {
              dojob(element)
            } else {
              msg(`This job requirements is ${element.Experience} month experience of ${element.Requirements}`);
            }
          } else {
            if (current_degrees.includes(element.Degree)) {
              if (resume_includes(element.Requirements)) {
                dojob(element)
              } else {
                msg(`This job requirements is ${element.Requirements} experience and ${element.Degree} degree`);
              }
            } else {
              msg(`This job requirements is ${element.Experience} month experience of ${element.Requirements} and ${element.Degree}`);
            }
          }
        }
      } else {
        msg(`You already doing ${current_job} job`);
      }
    });

    job_el.appendChild(childnode);
  });
  function dojob(element){
    doing_job = true;
    current_job = element.Name;
    current_job_salary = element.Salary;
    per_month_income += element.Salary;
    msg(`You are now doing ${element.Name} job`);
    Current_Salary_el.innerHTML = `$${current_job_salary} / Month`;
    current_job = element.Name;
    Employment_Status_el.innerHTML = `${current_job}`;
    let ename = element.Name
    
    if (!resume_includes(current_job)) {
      resume.push([ename,0])
    }
      
    
  }
}

function check_exp(name_of_job,exp){
  let i
  resume.forEach(e => {
    if (e[0] == name_of_job) {
      i = resume.indexOf(e)
      console.log(e)
    }
  });
  console.log(i)
    if (resume[i][1] >= Number(exp)) {
      return true
    }else{
      return false
    }
    

}

function resume_includes(element){
  let i = 0 
  resume.forEach(e => {
    if (e[0] == element) {
      i+=1
    }
  });
  if (i==1) {
    return true
  }else{
    return false
  }
}

function quit_job() {
  if (doing_job) {
    msg(`You quited ${current_job} job`);
    doing_job = false;
    current_job = "none";
    per_month_income -= current_job_salary;
    current_job_salary = 0;
    Current_Salary_el.innerHTML = `$${current_job_salary} / Month`;
    Employment_Status_el.innerHTML = `${current_job}`;
  } else {
    msg(`You are not doing a job`);
  }
}
