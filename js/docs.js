(function() {
    var DOCS = {
        course: [
            {
                name: 'CS1230 Course Syllabus',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/syllabus.md',
                desc: 'Essential information for students in CS1230.'
            },
            {
                name: 'CS1230 Collaboration Policy',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/2021%20Collaboration%20Policy.pdf',
                desc: 'Collaboration policy for the course. Please read carefully!'
            },
            {
              name: 'CS1230 Collaboration Policy Form',
              link: 'https://forms.gle/A1WaW3BsNjto3Psh7',
              desc: 'Read the collaboration policy before submitting.'
            },
            {
                name: 'CS1230 YouTube Channel',
                link: 'https://www.youtube.com/channel/UCyFsTjzWjJ5AkbpcN2ZZ7dA',
                desc: 'CS1230\'s official YouTube channel with great course project demos!'
            }
        ],
        support: [
            {
                name: 'Project Structure Guide',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/CSCI1230_Project_Structure_Guide.pdf',
                desc: 'An overview of the project structure and which parts relates to each assignment.'
            },
            {
                name: 'Developing Locally',
                // link: 'https://docs.google.com/document/d/1Ics5ro71Lmm15SQbY1vEsIczB0iDhFfdDBjp3s00znw/edit?usp=sharing',
                desc: 'A detailed document explaining how to begin developing locally'
            },
            {
                name: 'Scenefile Docs',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/scenefile.pdf',
                desc: 'The CS1230 scenefile definitions and specs.'
            },
        ],
        reference: [
            {
                name: 'The CS1230 Guide to OpenGL',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/OpenGL-Guide.md',
                desc: ''
            },
            {
                name: 'How to Use Git/Github Classroom + Gradescope',
                link: 'https://docs.google.com/document/d/1xM0BleQ2ldCXNezKsdBw3pMKhWdzw6RBhBEF-Q864cI/edit?usp=sharing',
                desc: ''
            },
            {
                name: 'CS1230 Github Guide',
                link: 'https://docs.google.com/document/d/1TRZTEoCCdNRWKz-knWz_jeWGjo4O8Q0GVsZbEncqevI/edit?usp=sharing',
                desc: ''
            },
            {
                name: 'GLM Reference Doc',
                link: 'https://github.com/cs123tas/docs/blob/master/glm.md',
                desc: ''
            }
        ],
        cpp: [
            {
                name: 'Detecting and Preventing Memory Leaks',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/memory_leaks.pdf',
                desc: 'Brief document describing how to find memory leaks using Valgrind Memory Analyzer in QtCreator, and how to prevent memory leaks.'
            },
            {
                name: 'Standard C++ Deductions',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/deductions.pdf',
                desc: 'Things you should avoid doing in your C++ code (that will lose you credit).'
            },
            {
                name: 'Readability Guide',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/Readability.md',
                desc: 'Ways you can style your code for your and your TAs\'s sakes.'
            }
        ],
        textbook: [
            {
                name: 'Book',
                link: 'http://www.amazon.com/Computer-Graphics-Principles-Practice-Edition/dp/0321399528',
                desc: 'The recommended (but not required) textbook for the course.'
            },
            {
                name: 'Index for book',
                link: 'https://github.com/cs123tas/docs/blob/master/2021/book_index.pdf',
                desc: 'An improved index for the book.'
            }
        ],
        help: [
            {
              name: 'Help Session Recordings',
            //   link: 'https://docs.google.com/document/d/1A3CFHOMc9XEGFTj16-LdDdltotrWTWNh0jFO768v3yw/edit?usp=sharing',
              desc: 'Recordings of the help sessions'
            },
            {
                name: 'Intro to C++ Converting from Java',
                // link: 'https://docs.google.com/presentation/d/1FOBB1-pzl0As3cKD34bOybLULsLMQqsAB9dg8PI2Yrw/edit?usp=sharing',
                desc: 'Brief introduction to C++.'
            },
            {
                name: 'Linear Algebra',
		// link: 'https://docs.google.com/presentation/d/1iIR3YfLHFVS_zx6sLXCvwxBJ900FzYYbVx2_8-hcEIU/edit?usp=sharing',
//          link: 'https://docs.google.com/presentation/d/1iIR3YfLHFVS_zx6sLXCvwxBJ900FzYYbVx2_8-hcEIU/edit#slide=id.p'
                desc: 'Review the linear algebra concepts needed for the course.'
            },
            {
                name: 'Intermediate C++ Help Session',
		// link: 'https://docs.google.com/presentation/d/18znQEdbfmMuvEr9IBQvNBQPe8QvOUBb_rGy9SkXyanY/edit#slide=id.p',
      //          link: 'https://docs.google.com/presentation/d/1w38Btczy6OVwLo5RFN9F7XSqefFAvawUS8e4BuCuB4w/edit?usp=sharing',
                // link: 'docs/helpsessions/intermediate.pdf'
                desc: 'Intermediate help session on C++.'
            },
            {
                name: 'Software Engineering Help Session',
		// link: 'https://docs.google.com/presentation/d/1SXEiHOTUWh-OiBdwneZByRKIAaK2zWsAB4eFCMkRLCA/edit?usp=sharing',
      //          link: 'https://docs.google.com/presentation/d/1ayJc2y7Wf8Qw0gUFVqKZHUAbfkfHxTC2hKp60LebjyU/edit?usp=sharing',
                // link: 'docs/helpsessions/softwareengineering.pdf',
                desc: 'Software Engineering help session.'
            },
            {
                name: 'GLSL Help Session',
		// link: 'https://docs.google.com/presentation/d/1YyIdKQ320SS8xt0p0HfAIAIpxal2vTfszErDMwvjeXA/edit?usp=sharing',
      //          link: 'https://docs.google.com/presentation/d/1YyIdKQ320SS8xt0p0HfAIAIpxal2vTfszErDMwvjeXA/edit?usp=sharing',
                // link: 'docs/helpsessions/glsl.pdf',
                desc: 'Overview of OpenGL pipeline and how to use shaders.'//<br><a id="doc-shader-link" href="https://github.com/cs123tas/docs/blob/master/docShader.txt" target="_blank">doc shader from help session</a>'
            },
            {
                name: 'Numerical Precision',
		// link: 'https://docs.google.com/presentation/d/1iUNd7piUuVsTzPTZvEsaav5gMfwU4rxnm-HXp9zESHc/edit?usp=sharing',
                // link: 'docs/helpsessions/numericalprecision.pdf',
                desc: 'Learn about limited precision when doing math on a computer.'
            },
            {
                name: 'Advanced C++',
                // link: 'https://docs.google.com/presentation/d/1ogWKQEp68U0JQBxCcZOkzaiI9HA3guo7EyeT5nt-_M8/edit?usp=sharing',
                // link: 'docs/helpsessions/advanced.pdf',
                desc: 'Some more advanced C++ things that weren\'t covered.'
            }
        ],
        // gearup: [
        //     // {
        //     //   name: 'Gear Up Capture',
        //     //   // link: 'https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=81037c7d-f1fd-4ca0-99fd-aab900fff8ee',
        //     //   desc: 'Recordings of the gear ups'
        //     // },
        //     {
        //         name: 'Brush',
        //         link: 'https://docs.google.com/presentation/d/1VIJci-8_Q53mTvfrmW7dHeinjgHtgw1iXE-YuAgVaRY/edit?usp=sharing',
        //         desc: ''
        //     },
      //       {
      //           name: 'Shapes',
      // //          link: 'https://docs.google.com/presentation/d/1BxxA-8PRQWbmdecQffS6lfC8YTNmnTomBbJJbyabKjE/edit?usp=sharing',
      //           desc: ''
      //       },
      //       {
      //           name: 'Filter',
      // //          link: 'https://docs.google.com/presentation/d/1w38Btczy6OVwLo5RFN9F7XSqefFAvawUS8e4BuCuB4w/edit?usp=sharing',
      //           desc: ''
      //       },
      //       {
      //           name: 'Sceneview',
      // //          link: 'https://docs.google.com/presentation/d/1ayJc2y7Wf8Qw0gUFVqKZHUAbfkfHxTC2hKp60LebjyU/edit?usp=sharing',
      //           desc: ''
      //       },
      //       {
      //           name: 'Intersect',
      // //          link: 'https://docs.google.com/presentation/d/1YyIdKQ320SS8xt0p0HfAIAIpxal2vTfszErDMwvjeXA/edit?usp=sharing',
      //           desc: ''
      //       },
      //       {
      //           name: 'Ray',
      //           //          link: 'https://docs.google.com/presentation/d/1YyIdKQ320SS8xt0p0HfAIAIpxal2vTfszErDMwvjeXA/edit?usp=sharing',
      //           desc: ''
      //       },
      //       {
      //           name: 'Final',
      //           //          link: 'https://docs.google.com/presentation/d/1YyIdKQ320SS8xt0p0HfAIAIpxal2vTfszErDMwvjeXA/edit?usp=sharing',
      //           desc: ''
      //       }
        // ],
        graphics: [
            {
                name: 'Common OpenGL Mistakes',
                link: 'http://www.opengl.org/wiki/Common_Mistakes',
                desc: 'Page from OpenGL\'s wiki describing lots of common mistakes.'
            },
            {
                name: 'OpenGL 4.0 Shading Language Cookbook',
                link: 'http://site.ebrary.com.revproxy.brown.edu/lib/brown/reader.action?docID=10492877',
                desc: 'Ebook all about creating shaders in GLSL with tons of thorough, succinct applications and explanations.'
            },
            {
                name: 'Shadertoy',
                link: 'http://www.shadertoy.com/',
                desc: 'Fun website featuring user-submitted fragment shaders, many of which are super impressive.'
            },
            {
                name: 'Computer Vision: Algorithms and Applications',
                link: 'http://szeliski.org/Book/',
                desc: 'Draft of Szeliski\'s book on computer vision.  Lots of useful information on image processing (filtering etc).'
            }
        ]
    },
    titles = {
        course: 'Course Info',
        support: 'Support Code Info',
        reference: 'Reference Docs',
        cpp: 'C++ Resources',
        textbook: 'Textbook',
        help: 'Help Sessions',
        graphics: 'Graphics Stuff',
        gearup: 'Gear Ups',
    };

    var container = document.getElementById('container--doc');

	// Iterate through all the doc sections.
	for (var section in DOCS) {
		// Get the section.
		var sectionDOM = document.createElement('div');
        sectionDOM.className = 'content__section';

        // Add the section header
        var sectionHeader = document.createElement('h2');
        sectionHeader.innerHTML = titles[section];

        // Add a header separater
        var sectionLine = document.createElement('div');
        sectionLine.className = 'line';

        // Append header & separator
        sectionDOM.appendChild(sectionHeader);
        sectionDOM.appendChild(sectionLine);

		// Iterate through the docs.
		for (var doc of DOCS[section]) {
			// Create a DOM element for the doc.
			var docDOM = document.createElement('div');
			docDOM.className = 'doc';

			// Add attributes.
			var linkDOM = document.createElement('a');
            linkDOM.className = 'doc__link';
            if (doc.link) {
                linkDOM.href = doc.link;
            }
			linkDOM.innerHTML = doc.name;
			linkDOM.target = '_blank';

			var descDOM = document.createElement('span');
            descDOM.className = 'doc__desc';
			descDOM.innerHTML = doc.desc;

			// Append everything.
			docDOM.appendChild(linkDOM);
			docDOM.appendChild(descDOM);
			sectionDOM.appendChild(docDOM);
		}

        container.appendChild(sectionDOM);
	}
})();
