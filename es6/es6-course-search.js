const courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    }, {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    }, {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    }, {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    }, {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
]
//when does the PROG200 course start?
 function findPROG200(course){
return course.CourseId === 'PROG200';
 }
    
const prog200 = courses.find(findPROG200)
 console.log(prog200.StartDate);

 //what is the //title of //PROJ500
 function findPROJ500(course){
return course.CourseId === 'PROJ500'
 }

  const proj500 = courses.find(findPROJ500)
  console.log(proj500.Title);

//what are the //titles of the courses that cost //$50 or less
function isUnder50USD(course){
return +course.Fee <= 50;
}

const coursesUnder50 = courses.filter(isUnder50USD);
for(const course of coursesUnder50){
console.log(course.Fee,course.Title);
}
// What classes meet in "Classroom 1"
function classesInClassroom1(course){
    return course.Location ==='Classroom 1';
}
const allClassesInClassroom = courses.filter(classesInClassroom1);
for (let i = 0; i < allClassesInClassroom.length; i++){
    const course = allClassesInClassroom[i];
    console.log(course.Title)
}