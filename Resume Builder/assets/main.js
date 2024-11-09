const form = document.getElementById("resume-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const languages = document
    .getElementById("languages")
    .value.split(",")
    .map((lang) => `<li>${lang.trim()}</li>`)
    .join("");
  const portfolio = document.getElementById("portfolio").value;
  const linkedin = document.getElementById("linkedin").value;
  const aboutMe = document.getElementById("about-me").value;
  const education = document.getElementById("education").value;
  const skills = document
    .getElementById("skills")
    .value.split(",")
    .map((skill) => `<li>${skill.trim()}</li>`)
    .join("");
  const experience = document.getElementById("experience").value;
  const imageFile = document.getElementById("image").files[0];

  let imageURL = "";
  if (imageFile) {
    imageURL = URL.createObjectURL(imageFile);
  }

  const generatedContent = `
    <hr/>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Address:</b> ${address}</p>
    <hr/>
    <h3>Languages:</h3>
    <ul>${languages}</ul>
    <hr/>
    <h3>Links</h3>
    ${
      portfolio
        ? `<p><b>Portfolio Link:</b> <a href="${portfolio}" target="_blank">${portfolio}</a></p>`
        : ""
    }
    ${
      linkedin
        ? `<p><b>LinkedIn ID:</b> <a href="${linkedin}" target="_blank">${linkedin}</a></p>`
        : ""
    }
    <hr/>
    <h3>About Me:</h3>
    <p>${aboutMe}</p>
    <hr/>
    <h3>Education:</h3>
    <p>${education}</p>
    <hr/>
    <h3>Skills:</h3>
    <ul>${skills}</ul>
    <hr/>
    <h3>Experience:</h3>
    <p>${experience}</p>
    <hr/>
    <h4 style="width: 100%; display: flex; justify-content: end; align-items: center;">Made By: <i>Ali Raza</i></h4>
  `;

  const resumeWindow = window.open("", "_blank");
  resumeWindow.document.write(`
    <html>
    <head>
      <title>Generated Resume</title>
      <style>
        /* General Styling */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #2c3e50;
          background-color: #f2f4f7;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        h2, h3, h4 {
          color: #1a5276;
        }

        .container {
          max-width: 650px;
          width: 100%;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          margin: auto;
        }

        /* Flexbox for header section */
        .header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          // justify-content: center;
        }

        .header img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .header-text {
          // text-align: center;
        }

        /* Name and Position Styling */
        .header-text h3 {
          font-size: 1.8em;
          margin: 0;
        }

        .header-text h4 {
          font-size: 1.2em;
          margin: 0;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        p, ul {
          margin: 10px 0;
          text-align: justify;
        }

        hr {
          border: none;
          border-top: 1px solid #dcdcdc;
          margin: 20px 0;
        }

        /* Responsive Media Query */
        @media (max-width: 768px) {
          .header img {
            width: 80px;
            height: 80px;
          }

          .header-text h3 {
            font-size: 1.5em;
          }

          .header-text h4 {
            font-size: 1.1em;
          }
        }

        @media (max-width: 480px) {
        .container {
          max-width: 670px;
        }
          .header {
            flex-direction: column;
          }

          .header img {
            width: 70px;
            height: 70px;
            margin: 0 auto;
          }

          .header-text h3 {
            font-size: 1.3em;
          }

          .header-text h4 {
            font-size: 1em;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          ${imageURL ? `<img src="${imageURL}" alt="Uploaded Image">` : ""}
          <div class="header-text">
            <h3>${name}</h3>
            <h4>${position}</h4>
          </div>
        </div>
        ${generatedContent}
      </div>
    </body>
    </html>
  `);
});
