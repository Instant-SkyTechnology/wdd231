const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourseCard(courses);

// Button references
const all = document.querySelector("#all");
const wdd = document.querySelector("#wdd");
const cse = document.querySelector("#cse");

// Event listener for Old Temples
all.addEventListener("click", () => {
    createCourseCard(courses);
});

// Event listener for WDD Courses
wdd.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    createCourseCard(wddCourses);
});

// Event listener for CSE Courses
cse.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    createCourseCard(cseCourses);
});

//createCourseCard function
function createCourseCard(filteredcourses) {
    const container = document.querySelector(".Card");
    container.innerHTML = "";

    filteredcourses.forEach(course => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const code = document.createElement("p");
        const credits = document.createElement("p");
        

        name.textContent = `${course.completed ? "✓ " : ""}${course.subject} ${course.number}`;

        if (course.completed) {
            card.style.backgroundColor = "#E07A5F"; // Completed
        } else {
            card.style.backgroundColor = "#3D405B"; // Incomplete
        }
        

        card.appendChild(name);
        card.appendChild(code);
        card.appendChild(credits);
        // card.append(name, cert, credits);

        container.appendChild(card);
    });

    const totalCredits = filteredcourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("creditTotal").textContent = totalCredits;

    const messageSpan = document.querySelector(".DisplayMessage");
    messageSpan.textContent = `The total number of courses listed above is ${filteredcourses.length}.`;
}

// Set footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


