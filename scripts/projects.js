const projectsData = [
    {
        title: "OCR Text Extraction App",
        description: "Extracts text from img/screenshot/PDFs with support for multiple languages including Zulu and English.",
        tech: ["Py.svg", "tesseract.jpg", "flask.svg"],
        github: "https://github.com/LaplaceMkhabela/OCR-Text-Extraction-App",
        demo: "https://ocrextract.netlify.app/",
        img: "img/screenshots/ocr1.png"
    },
    {
        title: "Crime Reporting Map Application",
        description: "A web-based application that allows community members<br> to report and visualize crime incidents on an interactive map.<br> Users can add pins to mark locations<br> where crimes have occurred, with details about the incident type, date, and description. ",
        tech: ["html.svg", "css.svg", "js.svg", "leaflet.svg","openstreetmap.svg"],
        github: "https://github.com/LaplaceMkhabela/CrimeMapper",
        demo: "https://crimemapp.netlify.app/",
        img: "img/screenshots/crime1.png"
    },
    
    {
        title: "URL Shortener",
        description: "A simple, self-contained URL shortener using a counter-based algorithm with Base62 encoding. No external dependencies—just HTML, CSS, and JavaScript",
        tech: ["html.svg", "css.svg", "js.svg"],
        github: "https://github.com/LaplaceMkhabela/Url-Resizer",
        demo: "https://urlresize.netlify.app/",
        img: "img/screenshots/url1.png"
    }
];



const projectGrid = document.getElementsByClassName("project-grid");
let delay = .1;

function addProjects(projects){
    projects.forEach(proj=>{
        let techStackEl = `<li><p>Tech Stack:</p></li>`;
        const techList = proj.tech;
        

        techList.forEach(tool=>{
            techStackEl += `<li><img src="img/${tool}" title="${tool}" width="32" alt="tool logo" /></li>`
        });
        

        projectGrid[0].innerHTML += `
            <div class="project-card card wow animate__animated animate__bounceInUp"
            data-wow-delay="${delay++}s">
            <div class="project-box">
              <h3>${proj.title}</h3>
              <p>
                ${proj.description}
              </p>
              <ul>
                ${techStackEl}
              </ul>
              <div class="controls">
                <a href="${proj.demo}" class="button demo-button">
                  <?xml version="1.0" ?><svg
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path
                      d="M19,12a1,1,0,0,1-.55.89l-10,5A1,1,0,0,1,8,18a1,1,0,0,1-.53-.15A1,1,0,0,1,7,17V7a1,1,0,0,1,1.45-.89l10,5A1,1,0,0,1,19,12Z"
                      fill="#e9ecef"
                    />
                  </svg>
                  Demo
                </a>
                <a href="${proj.github}" class="button github-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 100 100"
                  >
                    <g fill-rule="evenodd" clip-rule="evenodd">
                      <path
                        d="M58.055 70.316c12.63-.756 19.974-8.27 19.94-21.454-.014-5.4-2.008-8.822-4.538-11.964 1.385-3.272.85-8.585-.412-11.55-5.216-.192-8.635 2.53-12.102 4.537-6.22-1.898-15.664-1.968-21.866 0-3.544-1.93-6.907-4.708-12.1-4.538-1.442 2.822-1.884 8.126-.55 11.414-1.683 2.423-4.033 5.712-4.4 9.902-1.257 14.27 7.092 23.26 19.802 23.654-.266.963-1.404 1.854-1.927 3.162-.364.912-.495 1.94-.688 3.025-3.075 1.318-6.646 1.52-9.076.275C25.69 74.5 24.73 66.59 17.624 68.8c.762 1.95 2.687 2.376 3.988 3.853 1.39 1.572 1.96 3.555 3.026 5.5 2.352 4.3 8.035 5.684 14.438 4.264-.627 3.25 1.345 9.48-1.237 10.45-1.962.737-5.53-1.427-7.425-2.337-6.714-3.23-12.22-8.008-16.364-13.752-5.446-7.548-9.38-18.534-7.84-31.353C7.557 34.233 12.997 25.01 19.69 18.883c7.007-6.414 15.655-11.1 28.19-11.826 13.524-.784 23.694 4.6 30.805 10.59 7.084 5.966 13.08 14.78 14.852 26.127 3.113 19.938-6.55 34.954-17.465 42.905-1.876 1.366-3.976 2.62-6.463 3.85-2.254 1.116-7.164 3.868-8.526 1.513-.707-1.223-.273-5.104-.273-7.426 0-4.203.282-8.19-.825-11.002-.582-1.47-1.17-1.783-1.927-3.3z"
                      />
                      <path
                        d="M22.713 70.316c-.11.117-.377.08-.412.275-.51-.132-.964-.32-.962-.964.447-.42 1.524-.255 1.375.69zM24.64 72.104c-.124.06-.247.12-.276.275-.908.08-1.225-.43-1.237-1.24.606-.533 1.584.012 1.512.964zM25.05 73.203c1.16-.21 1.595.775 1.24 1.65-1.128.23-1.664-.77-1.24-1.65zM28.626 77.328c-.997.455-1.917-.54-1.65-1.236.394-1.03 2.325-.016 1.65 1.236zM31.928 78.43c-.127 1.15-2.415.785-2.064-.55.628-.534 1.98-.278 2.064.55zM38.803 78.016c.31 1.348-1.694 1.607-2.063.688-.07-1.01 1.43-1.202 2.063-.688zM35.502 78.703c.12 1.154-1.74 1.21-2.062.414-.247-1.242 1.83-1.203 2.062-.414z"
                      />
                    </g>
                  </svg>
                  Github
                </a>
              </div>
            </div>
            <span
              ><img src="${proj.img}" width="100%" alt="app screenshot"
            /></span>
          </div>
        `
    });
}

addProjects(projectsData);