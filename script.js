function generateResume(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let linkedin = document.getElementById("linkedin").value;
let github = document.getElementById("github").value;

let graduation = document.getElementById("graduation").value;
let intermediate = document.getElementById("intermediate").value;
let tenth = document.getElementById("tenth").value;

let skills = document.getElementById("skills").value;
let internships = document.getElementById("internships").value;
let projects = document.getElementById("projects").value;
let certifications = document.getElementById("certifications").value;
let achievements = document.getElementById("achievements").value;
let leadership = document.getElementById("leadership").value;


let resume = `

<div class="name">${name}</div>

<div class="contact">
<a href="mailto:${email}">${email}</a> |
<a href="${linkedin}" target="_blank">LinkedIn</a> |
<a href="${github}" target="_blank">GitHub</a>
</div>

<div class="section">
<h3>Education</h3>

<div class="edu-row">
<b>Graduation:</b> <span>${graduation}</span>
</div>

<div class="edu-row">
<b>Intermediate:</b> <span>${intermediate}</span>
</div>

<div class="edu-row">
<b>10th:</b> <span>${tenth}</span>
</div>

</div>

<div class="section">
<h3>Technical Skills</h3>
<p>${skills}</p>
</div>

<div class="section">
<h3>Internships</h3>
<p>${internships}</p>
</div>

<div class="section">
<h3>Projects</h3>
<p>${projects}</p>
</div>

<div class="section">
<h3>Certifications</h3>
<p>${certifications}</p>
</div>

<div class="section">
<h3>Achievements</h3>
<p>${achievements}</p>
</div>

<div class="section">
<h3>Leadership</h3>
<p>${leadership}</p>
</div>

`;

document.getElementById("resumeOutput").innerHTML = resume;

}



function downloadPDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

let text = document.getElementById("resumeOutput").innerText;

doc.text(text,10,10);

doc.save("Resume.pdf");

}