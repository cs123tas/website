(function() {
    var DEMOS = {
        shapes: [
            {
                name:'Smooth Versus Flat Shading',
                link:'http://math.hws.edu/graphicsbook/demos/c4/smooth-vs-flat.html',
                desc:'This demo shows the differences between smooth and flat shading.'
            },
            {
                name:'Bezier Splines',
                link:'https://www.jasondavies.com/animated-bezier/',
                desc:'This applet introduces the user to the usage and mathematics of spline curves.'
            }
        ],
        sampling: [
            {
                name:'Introduction to Sampling',
                link:'demos/intro_to_sampling/index.html',
                desc:'Pixels are samples at specific points of continuous mathematical functions. To demonstrate this, the Introduction to Sampling demo uses an image on screen to represent a continuous function. In additon to introducing the concept of sampling, this demo also demonstrates and helps develop intuition about scanlines which we use throughout the later demos.'
            },
            {
                name:'Nyquist Limit',
                link:'demos/nyquist_limit',
                desc:'This demo introduces the nyquist limit and the role it plays in signal sampling and reconstruction. The student discovers the basics of aliasing and is able to adjust a signal\'s frequency and the frequency at which it is sampled to build an intuitive understanding of all these concepts.'
            }
        ],
        convolution: [
          {
              name:'Convolution',
              link:'demos/convolutions/index.html',
              desc:'This demo allows students to understand the process of convolution by visually manipulating two functions through the process. It is useful in understanding both how convolution works and also what the effects are on specific signals being convolved together.'
          },{
              name:'Impulse Response',
              link:'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/impulseResponse/impulse_response_guide.html',
              desc:'This applet demonstrates how a filter "smears" energy from an impulse signal in a neighborhood around the impulse. Students place an impulse, drag a filter over it, and observe the results.'
          }
        ],
        fourier: [
            {
                name:' Discrete Fourier Transforms',
                link:'http://madebyevan.com/dft/',
                desc:'This page demonstrates the discrete Fourier transform, which rewrites a discrete signal as a weighted sum of sines and cosines of various frequencies.  All even functions (when <i>f</i>(<i>x</i>) = <i>f</i>(<i>-x</i>)) only consist of cosines since cosine is an odd function, and all odd functions (when <i>f</i>(<i>x</i>) = -<i>f</i>(-<i>x</i>)) only consist of sines since sine is an odd function, other functions are a mix of sines and cosines.'
            },
            {
                name:'1D Fast Fourier Transforms (Java Applet)',
                link:'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/fft1DApp/1d_fast_fourier_transform_guide.html',
                desc:'The Fourier Transform is a powerful tool allowing us to move back and forth between the spatial and frequency domains. Many of our explanations of key aspects of signal processing rely on an understanding of how and why a certain operation is performed in one domain or another. This applet helps students feel comfortable with these explanations, helping to build a strong intuitive grasp of how signals in one domain correspond to signals in the other.'
            }
        ],
        filtering: [
            {
                name:'Filter Examples',
                link:'http://evanw.github.com/webgl-filter/',
                desc:'Play around with this filtering app written by former CS1230 TA Evan Wallace. This app demonstrates some of the cool applications of filters in photo editing.'
            },
            {
                name:'Filter shapes and images scaling',
		link:'demos/scaling/index.html',
                desc:'This demo shows you how different filter shapes affect the result of image scaling.'
            },
            {
                name:'Three step scaling',
                link:'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/threeStepScaling/three_step_scaling_guide.html',
                desc:'This demo shows how you can scale a 2D image by using a 1D filter pass twice.'
            },
            {
                name:'Crawlie Demo',
                link:'demos/crawlies/crawlie_demo.html',
                desc:'This demo shows the nasty problem of crawlies.'
            }
        ],
        transformations: [
            {
                name:'Transformation Game (Java Applet)',
                link:'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/transformationGame/transformation_game_guide.html',
                desc:'This applet introduces the user to the usage and mathematics of two-dimensional transformations using a fun, interactive play space.'
            },
            // { Doesn't work...
            //     name:'Scenegraph Builder',
            //     link:'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/scenegraphBuilder/scenegraph_builder_guide.html',
            //     desc:'This applet allows users to construct their own scene graph and observe how each transformation affects all others below it on the scene graph.'
            // },
            {
                name:'Transformation Propagation (Java Applet)',
                link:'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/transformPropagation/transform_propagation_guide.html',
                desc:'This applet shows how changing the transformation matrices change when a scene graph node is changed.'
            }
        ],
        camera: [
            {
                name:'Camera Transformations',
                link:'http://cs.brown.edu/courses/cs123/demos/camera/',
                desc:'This WebGL Demo takes you through all of the important concepts about our basic camera model. It\'s highly suggested that you use this demo to familiarize yourself with all of the camera properties and the steps of the projective transformation. This demo is best viewed using google chrome.'
            }
        ],
        color: [
            {
                name:'Additive Color Mixing',
                link:'demos/additive_colormixing/index.html',
                desc:'This applet allows the user to paint on a canvas that mixes colors additively. Various parameters can be manipulated and some preset images can be loaded and also painted on.'
            },
            {
                name:'Subtractive Color Mixing',
                link:'demos/subtractive_colormixing/index.html',
                desc:'This applet allows the user to paint on a canvas that mixes colors subtractively. Various parameters can be manipulated and some preset images can be loaded and also painted on.'
            },
            {
                name:'Combined Color Mixing',
                link:'demos/combined_colormixing/index.html',
                desc:'This applet helps the user combine concepts in additive and subtractive color mixing through a scenario that includes lights, paints and filters. Users can directly observe how various colored lights, paints, and filters contribute additively as well as subtractively to produce a single color to be viewed by the applet\'s virtual eye.'
            },
            {
                name:'Metamers',
                link:'demos/metamers/index.html',
                desc:'This applet lets users experiment with metamers: different spectral distributions that are perceived as identical colors.'
            }
        ]
    },
    titles = {
        shapes: 'Shapes',
        sampling: 'Sampling',
        fourier: 'Fourier Transform',
        convolution: 'Convolution',
        filtering: 'Filtering',
        transformations: 'Transformations',
        camera: 'Camera',
        color: 'Color'
    };

    var container = document.getElementById('container--demo');

	// Iterate through all the demo sections.
	for (var section in DEMOS) {
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

		// Iterate through the demos.
		for (var demo of DEMOS[section]) {
			// Create a DOM element for the demo.
			var demoDOM = document.createElement('div');
			demoDOM.className = 'demo';

			// Add attributes.
			var linkDOM = document.createElement('a');
            linkDOM.className = 'demo__link';
			linkDOM.href = demo.link;
			linkDOM.innerHTML = demo.name;
			linkDOM.target = '_blank';

			var descDOM = document.createElement('span');
            descDOM.className = 'demo__desc';
			descDOM.innerHTML = demo.desc;

			// Append everything.
			demoDOM.appendChild(linkDOM);
			demoDOM.appendChild(descDOM);
			sectionDOM.appendChild(demoDOM);
		}

        container.appendChild(sectionDOM);
	}
})();
