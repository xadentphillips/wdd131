const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
};

function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

let enroller = document.querySelector('#enrollStudent');
enroller.addEventListener('click', function (e) {
  let sectionCheck = document.getElementById('sectionNumber').value;
  let sectionIndex = sectionCheck - 1;
  if (sectionCheck == 1) {
    aCourse.sections[sectionIndex].enrolled++;
    console.log("Section 1");
    renderSections(aCourse.sections);
  }
  else if (sectionCheck == 2) {
    aCourse.sections[sectionIndex].enrolled++;
    console.log("Section 2");
    renderSections(aCourse.sections);
  }
  else {
    alert('Please enter a valid Section number');
  }
})

let dropper = document.querySelector('#dropStudent');
dropper.addEventListener('click', function (e) {
  let sectionCheck = document.getElementById('sectionNumber').value;
  let sectionIndex = sectionCheck - 1;
  if (sectionCheck == 1) {
    aCourse.sections[sectionIndex].enrolled--;
    console.log("Section 1");
    renderSections(aCourse.sections);
  }
  else if (sectionCheck == 2) {
    aCourse.sections[sectionIndex].enrolled--;
    console.log("Section 2");
    renderSections(aCourse.sections);
  }
  else {
    alert('Please enter a valid Section number');
  }
})