const demo = document.querySelector("#demo");

const students = [
  {
    id: 1,
    name: "Ahmed",
    subs: [
      { name: "Biology", pass: 80, result: 70 },
      { name: "Chemistry", pass: 90, result: 100 },
      { name: "Physics", pass: 80, result: 60 },
      { name: "Math", pass: 95, result: 90 },
    ],
  },
  {
    id: 2,
    name: "Hani",
    subs: [
      { name: "Biology", pass: 80, result: 90 },
      { name: "Chemistry", pass: 90, result: 70 },
      { name: "Physics", pass: 80, result: 90 },
      { name: "Math", pass: 85, result: 80 },
      { name: "English", pass: 85, result: 85 },
    ],
  },
  {
    id: 3,
    name: "Hafsa",
    subs: [
      { name: "Biology", pass: 80, result: 60 },
      { name: "Chemistry", pass: 90, result: 90 },
      { name: "Physics", pass: 80, result: 90 },
      { name: "Computer Science", pass: 100, result: 95 },
    ],
  },
  {
    id: 4,
    name: "Muna",
    subs: [
      { name: "Biology", pass: 80, result: 85 },
      { name: "Chemistry", pass: 90, result: 80 },
      { name: "Physics", pass: 80, result: 75 },
      { name: "Math", pass: 85, result: 70 },
    ],
  },
  {
    id: 5,
    name: "Ashrafiin",
    subs: [
      { name: "Biology", pass: 80, result: 95 },
      { name: "Chemistry", pass: 90, result: 100 },
      { name: "Physics", pass: 80, result: 90 },
      { name: "History", pass: 70, result: 85 },
      { name: "Geography", pass: 75, result: 80 },
    ],
  },
];

function displayStudent() {
  demo.innerHTML = "";

  const studentElements = students
    .map((student) => {
      const allSubsResult = student.subs.reduce((acc, s) => acc + s.result, 0);
      const allSubjects = student.subs.length;
      const allSubjectsPassed = student.subs.filter(
        (sub) => sub.result >= sub.pass
      );

      const subjectsHtml = student.subs
        .map((el) => {
          const status = el.result >= el.pass ? "Pass" : "Failed";
          const statusClass = el.result >= el.pass ? "pass" : "fail";
          return `
            <tr class="${statusClass}">
              <td>${el.name}</td>
              <td>${el.pass}</td>
              <td>${el.result}</td>
              <td>${status}</td>
            </tr>
          `;
        })
        .join("");

      return `
        <div class="student-card">
          <h4>${student.name}</h4>
          <table class="subject-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Pass</th>
                <th>Result</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${subjectsHtml}
            </tbody>
          </table>
          <div class="student-summary">
  <p>Your total result is <strong>${allSubsResult}</strong>.</p>
  <p>You have taken <strong>${allSubjects}</strong> subjects, and you passed <strong>${
        allSubjectsPassed.length
      }</strong> of them.</p>
  <ul>
    ${student.subs
      .map(
        (el) => `
      <li>
        <strong>${el.name}:</strong> 
        <span class="${el.result >= el.pass ? "pass" : "fail"}">
          ${el.result >= el.pass ? "Passed" : "Failed"}
        </span>
        (Result: ${el.result}, Required: ${el.pass})
      </li>
    `
      )
      .join("")}
  </ul>
</div>
        </div>
      `;
    })
    .join("");

  demo.innerHTML = studentElements;
}

displayStudent();
