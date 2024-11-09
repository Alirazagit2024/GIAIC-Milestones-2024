"use strict";
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
    .map((lang) => `<li><input type="text" value="${lang.trim()}" style="border: none; background-color: transparent;"></li>`)
    .join("");
  const portfolio = document.getElementById("portfolio").value;
  const linkedin = document.getElementById("linkedin").value;
  const aboutMe = document.getElementById("about-me").value;
  const education = document.getElementById("education").value;
  const skills = document
    .getElementById("skills")
    .value.split(",")
    .map((skill) => `<li><input type="text" value="${skill.trim()}" style="border: none; background-color: transparent;"></li>`)
    .join("");
  const experience = document.getElementById("experience").value;
  const imageFile = document.getElementById("image").files[0];

  let imageURL = "";
  if (imageFile) {
    imageURL = URL.createObjectURL(imageFile);
  }

  const generated = `
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
      ${
        imageURL
          ? `<img src="${imageURL}" alt="Uploaded Image" style="width: 100px; height: 100px; margin-right: 20px; border-radius: 50%; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);">`
          : ""
      }
      <div>
          <input type="text" value="${name}" style="font-weight: bold; font-size: 1.2em; margin: 0; border: none; background-color: transparent;" />
          <br/>
          <input type="text" value="${position}" style="font-size: 1.1em; margin: 0; border: none; background-color: transparent;" />
      </div>
      </div>
      <hr/>
      <h3>Personal Information</h3>
      <p><b>Name:</b> <input type="text" value="${name}" style="border: none; background-color: transparent;" /></p>
      <p><b>Email:</b> <input type="email" value="${email}" style="border: none; background-color: transparent;" /></p>
      <p><b>Phone:</b> <input type="tel" value="${phone}" style="border: none; background-color: transparent;" /></p>
      <p><b>Address:</b> <textarea style="border: none; background-color: transparent;" rows="2">${address}</textarea></p>
      <hr/>
      <h3>Languages:</h3>
      <ul contenteditable="true">${languages}</ul>
      <hr/>
      <h3>Links</h3>
      ${
        portfolio
          ? `<p><b>Portfolio Link:</b> <input type="url" value="${portfolio}" style="border: none; background-color: transparent;" /></p>`
          : ""
      }
      ${
        linkedin
          ? `<p><b>LinkedIn ID:</b> <input type="url" value="${linkedin}" style="border: none; background-color: transparent;" /></p>`
          : ""
      }
      <hr/>
      <h3>About Me:</h3>
      <textarea rows="4" style="border: none; width: 100%; background-color: transparent;">${aboutMe}</textarea>
      <hr/>
      <h3>Education:</h3>
      <textarea rows="4" style="border: none; width: 100%; background-color: transparent;">${education}</textarea>
      <hr/>
      <h3>Skills:</h3>
      <ul contenteditable="true">${skills}</ul>
      <hr/>
      <h3>Experience:</h3>
      <textarea rows="5" style="border: none; width: 100%; background-color: transparent;">${experience}</textarea>
      <hr/>
      <h4 style="text-align: right;">Made By: <i>Ali Raza</i></h4>
  `;

  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
    <html>
      <head>
        <title>Generated Editable Resume</title>
        <style>
          body { font-family: Arial, sans-serif; color: #2c3e50; margin: 20px; background-color: #f2f4f7; }
          h2, h3, h4 { color: #1a5276; }
          p, ul { font-size: 1em; line-height: 1.6; }
          ul { list-style-type: disc; margin-left: 20px; }
          hr { border: none; border-top: 1px solid #d5dbdb; margin: 20px 0; }
          input, textarea { font-size: 1em; border: none; background-color: transparent; width: 100%; }
        </style>
      </head>
      <body>
        <div style="max-width: 650px; margin: auto; padding: 35px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);">
          ${generated}
        </div>
      </body>
    </html>
  `);
  newWindow.document.close();
});
