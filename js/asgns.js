// Update this each year to set the new first date of class.
var FIRSTDAYOFCLASS = new Date('2020-09-09');
var CURRYEAR = '2020';

(function() {
  var ACTIVE_PROJECT = 1;
  var PROJECTS = [
    {
      name: 'Brush',
      link: 'https://github.com/cs123tas/projects/blob/master/brush/README.md',
      image: 'img/projects/brush.gif',
      out: {
        day: 'Thurs',
        date: '9/9'
      },
      due: {
          day: 'Tues',
          date: '9/21',
          time: '10:00PM',
      },
      // gearup: {
      //     day: 'Friday',
      //     date: '9/11',
      //     time: '2:00PM',
      //     link: 'https://docs.google.com/presentation/d/1pnavHOFExTHQ3O5ybKL0hUBVrOcbdEPnjAjfsUrvmDk/edit?usp=sharing'
      // },
      algo: {
          day: 'Wed',
          date: '9/15',
          time: '10:00PM',
          link: 'handouts/brush/brush_algo.pdf',
          solutions: 'https://drive.google.com/file/d/1jwu6uOdMJ70F56dbGmcRH8AS_brJrYAn/view?usp=sharing',
      },
  //     recording: {
	// link: 'https://brown.zoom.us/rec/share/0uDovGmrBx95wHASY3W4ShtBjaddK12G1VwfvQBbqAak_QX09KDOGlgrLsWm1l7n.8d8dViD8FerWe-AO?startTime=1600023312000',
	// text: 'Brush Gear Up Recording'
  //     },
      desc: 'In Brush, you will be implementing various airbrushes similar to ones found in commercial painting programs such as Adobe\'s Photoshop. This assignment should give you a good introduction to the kind of C++ programming you will be doing in this course, as well as gently familiarize you with the basic conventions of the support code.'
    },
    {
      name: 'Shapes',
      // link: 'handouts/shapes/shapes.pdf',
      image: 'img/projects/shapes.gif',
      out: {
        day: 'Tues',
        date: '9/21'
      },
      due: {
          day: 'Tues',
          date: '10/5',
          time: '10:00PM',
      },
      // gearup: {
      //     day: 'Friday',
      //     date: '9/25',
      //     time: '3:30PM',
      //     link: 'https://docs.google.com/presentation/d/1WZwDjhDy4OOQSOK-FadityfV0AuPdJFvEXdXNm4Zla8/edit?usp=sharing'
      // },
      // algo: {
      //     day: 'Tues',
      //     date: '9/28',
      //     time: '6:00PM',
      //     link: 'handouts/shapes/shapes_algo.pdf',
      //     solutions: 'handouts/shapes/shapes_algo_solutions-locked.pdf'
      // },
	// recording: {
	// link: 'https://brown.zoom.us/rec/share/ElVUrDPQCWMgqLrqCaMp7Zrfhci0tIZVA8ZO6syK7QdBTKfkChIuN7od1H2plk5U.B2LHQOmM9w-j7Vr1',
	// text: 'Shapes Gear Up Recording'
  //     },

      desc: 'This assignment covers one of the earliest steps in the 3D rendering pipeline: object tessellation. For this assignment you will be constructing simple 3D objects (e.g., spheres and cylinders) out of triangles/quads and then displaying them on the screen. You will need to compute and store the necessary triangles and make OpenGL calls to handle the task of drawing them for you. The code written in this assignment will be used in the assignments that follow.'
    },
    {
      name: 'Intersect',
      // link:  'handouts/intersect/intersect_asgn.pdf',
      image: 'img/projects/intersect.gif',
      out: {
        day: 'Tues',
        date: '10/5'
      },
      due: {
          day: 'Tues',
          date: '10/19',
          time: '10:00PM',
      },
      // gearup: {
      //     day: 'Monday',
      //     date: '11/2',
      //     time: '5:30PM',
      //     link: 'https://docs.google.com/presentation/d/1vKSRPQEiqzbUrrZXBaOUHiOBo1cb_1CFjFQxKyDyJ-0/edit?usp=sharing'
      // },
	// algohours:{
	//  link: 'https://brown.zoom.us/rec/share/sdK0tZB-IKHWQEDw3uzHfW-zFkSD-oZCVkiCwgiLcSmlMOvNBihVq-D1tQ4WfiNa.wOmCcO7hYOGtWnrp',
	//  text: 'Algo Hours Recording'
	// },
	// recording:{
	// link:'https://brown.zoom.us/rec/share/4S2WFCJANsY0mMtdP-wZNqgHy2QJY6jBmmOB-2J2McEwhd_8gXW7DkLa8Y8tLbA.rRZ3rSmKXGGYFogx',
	// text: 'Gear-up Recording'
	// },

      // algo: {
      //    link: 'handouts/intersect/intersect_algo.pdf',
      //    day: 'Tues',
      //    date: '10/12',
      //    time: '6:00PM',
      //    solutions: 'handouts/intersect/intersect_algo_solutions-locked.pdf'
      //  },
      desc: 'In this assignment, you will begin to write to your own rendering engine (to e.g. render your shapes from the Shapes assignment). You will shoot out rays from the eye of a camera and calculate intersections with primitives in a scene using their implicit equations. This will be the first step in writing a full fledged ray tracer. This project relies on the Shape assignment.'
    },
    {
      name: 'Ray',
      // link:  'handouts/ray/ray_asgn.pdf',
      image: 'img/projects/ray.gif',
      out: {
        day: 'Tues',
        date: '10/19'
      },
      due: {
          day: 'Tues',
          date: '11/2',
          time: '10:00PM',
      },
  //     gearup: {
  //         day: 'Monday',
  //         date: '11/16',
  //         time: '5:30PM',
  //         link: 'https://docs.google.com/presentation/d/1IpV1YiNhWVKnZqXUmHwCtH6OLJ92MVvaTyqk1XVrXr8/edit?usp=sharing'
  //     },
	// algohours:{
	//  link: 'https://brown.zoom.us/rec/share/5bTDzXXpFkei4ZgMheKqM1sdPhTMAhbioMAyxyseHRv-dXYqU5TskGyZPOyOwF62.YeoSU-fcdpXd6KT8',
	//  text: 'Algo Hours Recording'
	// },
	// recording:{
	// link:'https://brown.zoom.us/rec/share/gMdtb3J7X-1xYlYvJeRIhXZQ1R2mua9Izho3Mlt3czFVHL3BOd6uWfWYoousNc0.ZoljZRjHfSDPtCVk',
	// text: 'Gear-up Recording'
	// },

  //     algo: {
  //        link: 'handouts/ray/ray_algo.pdf',
  //        day: 'Monday',
  //        date: '11/16',
  //        time: '12:00PM',
  //        solutions: 'handouts/ray/ray_algo_solutions-locked.pdf'
  //      },
      desc: 'In this assignment, you will extend the basic renderer your wrote in Intersect to support reflections, shadows, texture mapping, and a plethora of other more complicated rendering techniques. At the end of this assignment, you will have written a fully functioning recursive ray tracer.'
    },
    {
      name: 'Sceneview',
      // link: 'handouts/sceneview/sceneview_asgn.pdf',
      image: 'img/projects/sceneview.gif',
      out: {
        day: 'Tues',
        date: '11/2'
      },
      due: {
          day: 'Thurs',
          date: '11/11',
          time: '10:00PM',
      },
  //     gearup: {
  //         day: 'Friday',
  //         date: '10/23',
  //         time: '3:30PM',
  //         link: 'https://docs.google.com/presentation/d/140k-4fRruRTjwVrppOhQfH89bur7PvuvWRDOQgWbZUk/edit?usp=sharing'
  //     },
  //     algo: {
  //         day: 'Thurs',
  //         date: '10/22',
  //         time: '6:00PM',
  //         link: 'handouts/sceneview/sceneview_algo.pdf',
  //         solutions: 'handouts/sceneview/sceneview_algo_solutions-locked.pdf'
  //     },
	// algohours:{
	//  link: 'https://brown.zoom.us/rec/share/mtIojWiO3GQylh43Fo9R5eaturkdsyD8yJAjb6agcnl8P8OaMU841JvL1t3VyFwz.8w0kFc0xPZOIyJjV',
	//  text: 'Algo Hours Recording'
	// },
	// recording:{
	// link:'https://brown.zoom.us/rec/share/R7Jh4Fsa7JRLWjel0wBqnCTRT2L3kQbJM4oMmMCOv8J0Jp13fK4l61NWz3rvKlsV.8odhh3csqivK-V25',
	// text: 'Gear-up Recording'
	// },
  //      extra: {
  //        link: 'docs/scenefile.pdf',
  //        text: 'Scenefile Doc'
  //      },
      desc: 'In this assignment, you will build an interactive scene viewer for the scenes you have been rendering with your ray tracer. To accomplish this goal, you will dig into OpenGL and write shader programs that run on the GPU to create real-time graphics.'
    },
    {
      name: 'Filter',
      // link: 'handouts/filter/filter_asgn.pdf',
      image: 'img/projects/filter.png',
      out: {
        day: 'Thurs',
        date: '11/11'
      },
      due: {
          day: 'Weds',
          date: '11/24',
          time: '10:00PM',
      },
  //     gearup: {
  //         day: 'Friday',
  //         date: '10/9',
  //         time: '6:00PM',
  //         link: 'https://docs.google.com/presentation/d/1HJEjYsm4uDgYW5AuZnjHFzgtNGI2kHNIBsZJ9Tr4prE/edit?usp=sharing'
  //     },
  //     algo: {
  //       day: 'Friday',
  //       date: '10/9',
  //       time: '12:00PM',
  //       link: 'handouts/filter/filter_algo.pdf',
  //       solutions: 'handouts/filter/filter_algo_solutions-locked.pdf'
  //     },
	// recording: {
	// link: 'https://brown.zoom.us/rec/share/vG5rLO9uHecXzpi_i714sCYUtbNTdOL4fqR_lv5wz7NkeSH3PBD1KttKL920eBs.HX-HYYQXfcfZrNTX',
	// text: 'Filter Gear Up Recording'
  //     },
  //      extra: {
  //        link: 'handouts/filter/filter_resources.pdf',
  //        text: 'Separable Kernels, Edge Detection and How to Scale'
  //      },
      desc: 'This assignment represents a subset of the functionality that Photoshop has. It is designed to teach you the basics of image processing and anti-aliasing. You will implement different image manipulation operations like edge detection, blur, and image scaling.'
    },
    {
      name: 'Final',
      // link: 'handouts/final/final_asgn.pdf',
      image: 'img/projects/final_video.gif',
      icon: 'img/projects/final_icon.gif',
  //      gearup: {
  //          day: 'Friday',
  //          date: '11/13',
  //          time: '8:00PM',
  //          link: 'https://docs.google.com/presentation/d/1a9TjulQ09Jax0wHUohnpc8OT954hEKEpwtB6maj5KE4/edit?usp=sharing'
  //      },
	// recording:{
	// link:'https://brown.zoom.us/rec/share/_LsXkyf7B-xDABMkAMmybv-q0uMRhk5N-6MKLrKQOt1wxtf5JyINJWreR3PrZ8mN.k-v0z21UOQmoC6Oh',
	// text: 'Gear-up Recording'
	// },
       due: {
           day: 'Weds',
           date: '12/15',
           time: '11:59PM',
       },
      desc: 'In this assignment, you will let your imagination run like a nose on a cold winter day.'
    }
  ];

  // Get the project list.
  var projects = document.getElementById('projects');

  // We want to release Assignments / Algos the second the previous project is over
  // therefore, only add the algo / project if PROJECTS[i - 1].due has already passed

  // Additionally, we want to release algo solutions as soon as the algo is due.  Therefore,
  // we check to see if the date for the algo for project[i] has passed.

  // Iterate through the projects.
  for (var i = 0; i < PROJECTS.length; i ++) {
    var project = PROJECTS[i];

    // Store whether or not we should release certain info about the project
    var shouldReleasePro = shouldReleaseProject(PROJECTS, i);
    var shouldReleaseAlgoSol = shouldReleaseAlgoSolution(project);
    var shouldReleaseGearup = shouldReleaseGearupSlides(project);

    // Create a DOM element for the project.
    var projectDOM = document.createElement('li');
    projectDOM.className = 'asgn__li' + (i + 1 < ACTIVE_PROJECT ? ' asgn__li--old' : ''); // Highlight the active project.

    // Create a background div for mobile devices
    var mobileImgDOM = document.createElement('div');
    mobileImgDOM.className = 'asgn__bg';
    mobileImgDOM.style.backgroundImage = 'url(' + project.image + ')';

    // Add the attributes.
    var imgDOM = document.createElement('img');
    imgDOM.src = project.icon || project.image;
    imgDOM.className = 'asgn__icon';

    var descWrapperDOM = document.createElement('div');
    descWrapperDOM.className = 'asgn__text';

    var nameDOM = document.createElement('h4');
    nameDOM.className = 'asgn__text__title';

    if (project.link && (shouldReleasePro || project.name == 'Final')) {
      var linkDOM = document.createElement('a');
      linkDOM.href = project.link;
      linkDOM.target = '_blank';
      linkDOM.innerHTML = project.name;
      nameDOM.appendChild(linkDOM);
    } else {
      nameDOM.innerHTML = project.name;
    }

    var descDOM = document.createElement('span');
    descDOM.className = 'asgn__text__desc';
    descDOM.innerHTML = project.desc;

    // Append everything.
    projectDOM.appendChild(mobileImgDOM);
    descWrapperDOM.appendChild(nameDOM);
    if (project.out) {
      var outDOM = document.createElement('span');
      outDOM.className = 'asgn__text__sub';
      outDOM.innerHTML = 'Out ' + project.out.day + ', ' + project.out.date;
      descWrapperDOM.appendChild(outDOM);
    }
    if (project.due) {
      var dueDOM = document.createElement('span');
      dueDOM.className = 'asgn__text__sub';
      dueDOM.innerHTML = 'Due ' + project.due.day + ', ' + project.due.date + ' at ' + project.due.time;
      descWrapperDOM.appendChild(dueDOM);
    }
    if (project.algo) {
      var algo = project.algo;
      var algoDOM = document.createElement('span');
      var algoLinkDOM = document.createElement('span');
      // Hide algo links until added, but keep text.
      if (algo.link && shouldReleasePro){
          var algoLinkDOM = document.createElement('a');
          algoLinkDOM.href = algo.link;
          algoLinkDOM.target = '_blank';
      }
      algoLinkDOM.innerHTML = 'Algo';

      var algoDueDOM = document.createElement('span');
      algoDueDOM.innerHTML = ' due ' + algo.day + ', ' + algo.date + ' at ' + algo.time;


      algoDOM.appendChild(algoLinkDOM);
      algoDOM.appendChild(algoDueDOM);

      if (algo.solutions && shouldReleaseAlgoSol) {
        algoDueDOM.innerHTML += ', ';
        var algoSolnLinkDOM = document.createElement('a');
        algoSolnLinkDOM.href = algo.solutions;
        algoSolnLinkDOM.target = '_blank';
        algoSolnLinkDOM.innerHTML = 'Algo Solutions';

        algoDOM.className = 'asgn__text__sub';
        algoDOM.appendChild(algoSolnLinkDOM);
      }

      descWrapperDOM.appendChild(algoDOM);
    }

    if (project.algohours) {
      var algohoursDOM = document.createElement('span');
      var algohoursLinkDOM = document.createElement('a');
      algohoursLinkDOM.href = project.algohours.link;
      algohoursLinkDOM.target = '_blank';
      algohoursLinkDOM.innerHTML = 'Algo Hours Recording';
      algohoursDOM.className = 'asgn__text__sub';
      algohoursDOM.appendChild(algohoursLinkDOM);
      descWrapperDOM.appendChild(algohoursDOM);
    }

    if (project.gearup && shouldReleaseGearup) {
      var gearupDOM = document.createElement('span');
      var gearupLinkDOM = document.createElement('a');
      gearupLinkDOM.href = project.gearup.link;
      gearupLinkDOM.target = '_blank';
      gearupLinkDOM.innerHTML = 'Gear Up Slides'
      gearupDOM.className = 'p asgn__text__sub';
      gearupDOM.appendChild(gearupLinkDOM);
      descWrapperDOM.appendChild(gearupDOM);
    }

    if (project.extra) {
      var extra = project.extra;
      var extraDOM = document.createElement('a');
      extraDOM.href = extra.link;
      extraDOM.target = '_blank';
      extraDOM.innerHTML = extra.text;
      extraDOM.className = 'asgn__text__sub';
      descWrapperDOM.appendChild(extraDOM);
    }

    if (project.recording) {
      var recordingDOM = document.createElement('span');
      var recordingLinkDOM = document.createElement('a');
      recordingLinkDOM.href = project.recording.link;
      recordingLinkDOM.target = '_blank';
      recordingLinkDOM.innerHTML = 'Gear Up Recording';
      recordingDOM.className = 'asgn__text__sub';
      recordingDOM.appendChild(recordingLinkDOM);
      descWrapperDOM.appendChild(recordingDOM);
    }

    descWrapperDOM.appendChild(descDOM);

    // projectDOM.appendChild(imgDOM);
    projectDOM.appendChild(descWrapperDOM);
    projects.appendChild(projectDOM);
  }
})();

/*
* Helper function to automate the process of updating the assignments page.
*/
function shouldReleaseProject(projects, projectIndex){
    // Brush, only release if today is passed or on the first day of class
    if (projects[projectIndex].due){
        // Create a reference to the previous project's deadline + 1 day
        var prevProjectDeadline = projectIndex <= 0
                                ?FIRSTDAYOFCLASS
                                :new Date(projects[projectIndex - 1].due.date + '/' + CURRYEAR);
        prevProjectDeadline.setDate(prevProjectDeadline.getDate());

        // Return whether or not today's date is after the previous project's deadline
        var today = new Date();
        // temporary fix to release ray & final before intersect's deadline:
        return today > prevProjectDeadline;
    }
    return false;
}

/*
* Helper function to automate the process of updating the solutions for the algos on the assignments page.
*/
function shouldReleaseAlgoSolution(project){
    // Make sure we have an algo
    if (project.algo){
        // Create a reference to algo deadline + 1 day to account for 11:59pm
        var algoDeadline = new Date(project.algo.date + '/' + CURRYEAR);
        algoDeadline.setDate(algoDeadline.getDate());

        // Return whether or not today's date is after the algo deadline
        var today = new Date();
        return today > algoDeadline;
    }
    return false;
}

/*
* Helper function to automate the process of posting gearups on the assignments page.
*/
function shouldReleaseGearupSlides(project){
    // Make sure we have a gearup
    if (project.gearup){
        // Create a reference to gearup presentation date, make it available on the day of
        var gearupDate = new Date(project.gearup.date + '/' + CURRYEAR);
        gearupDate.setDate(gearupDate.getDate());

        // Return whether or not today's date is after the algo deadline
        var today = new Date();
        return today >= gearupDate;
    }
    return false;
}
