// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();


    // type Assertion
    const nameElement = document.getElementById('name') as HTMLTextAreaElement;
    const emailElement = document.getElementById('email') as HTMLTextAreaElement;
    const phoneElement = document.getElementById('phone') as HTMLTextAreaElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;



    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
      
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;






    
    // Create Resume outPut 
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong>${name} </p>
    <p><strong>email:</strong>${email} </p>
    <p><strong>phone Number:</strong>${phone} </p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
`;


const resumeOutputElement = document.getElementById('resumeOutput')

if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
}
else{
    console.error('The Resume Output Element are Missing')
}
}
})
