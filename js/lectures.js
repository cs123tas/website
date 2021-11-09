(function() {
  var LECTURES = [
    {
      date: '9/9',
      topic: 'Introduction',
      links: {
	// 'Activities' : 'https://docs.google.com/document/d/1NR-uIpfMy5aRLwnIjR4d38TW3cXCe7b-gNvQsrIFZgY/edit?usp=sharing',
	'Recording' : 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a17ed3fb-d309-44d3-89ca-ad9c013c8208',
        'PPTX ': 'https://docs.google.com/file/d/1ia9NcjooWYYouuGhK5K85R5VO5fWyY35/',
	   },
      related: []
    },
    {
      date: '9/14',
      topic: '2D graphics',
       links: {
      //      'Activities' : 'https://docs.google.com/document/d/1s0Bzi8jjDYrwpuyg_p3iVYVdQTmIaZtQF17jh-zbXLk/edit?usp=sharing',
           'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=41f19ba4-e808-475e-8fdd-ad9c013c824a',
         	'PPTX': 'https://docs.google.com/file/d/1KtLpV6397F-JOicE1e2k7wc2HWW8jA0w/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
       },
      related: []
    },
    {
      date: '9/16',
      topic: 'Geometry',
      links: {
  //        'Activities' : 'https://docs.google.com/document/d/1ocdyYp1mrWJ_0__BpaUv5JjC9GGlP1HFOdk-58PoBqo/edit?usp=sharing',
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=29b7df1b-0ad8-4551-990f-ad9c013c8264',
	'PPTX': 'https://docs.google.com/file/d/1TeUpbydF48VOHu8OSG8mJYlA8P38ugV_/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
       },
      //  related: [
      //    {
      //      name: 'Shading',
      //      link: 'http://math.hws.edu/graphicsbook/demos/c4/smooth-vs-flat.html'
      //    }
      //  ]
    },
    {
      date: '9/21',
      topic: 'More geometry',
       links: {
  //        'Activities': 'https://docs.google.com/document/d/1tzLingUcj8vRK4YBvArbhKZHyTOzscwo_QIXrdxbpoM/edit?usp=sharing',
	'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c4514d64-2559-4e8b-bd4d-ad9c013c827a',
        'PPTX': 'https://docs.google.com/file/d/1Tg5q6fgebbPRMfmh5VdjCmjAYg0T70Av/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true'
         
       },
       related: [
         
       ]
    },
    {
      date: '9/23',
      topic: 'Transformations and scene graphs',
       links: {
  //        'Activities': 'https://docs.google.com/document/d/1scQ5JU31tQ9jrs6YZx5pwfoHJrPNNWbCSVIfNXgwd0M/edit?usp=sharing',
	 'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=97c0d0f5-f1de-4365-bfda-ad9c013c8290',
	 'PPTX': 'https://docs.google.com/file/d/1a9eLbFXzihytedmMsre5NgdHDx2vFHmv/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
       },
  //      related: [
	// {
  //          name: 'Transformation Game',
  //         link: 'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/transformationGame/transformation_game_guide.html'
  //        },
  //        {
  //          name: 'Bezier Splines',
  //          link: 'https://www.jasondavies.com/animated-bezier/'
  //        }
  //      ]
    },
 	{
      date: '9/28',
      topic: 'Camera models & viewing transforms',
       links: {
        'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=abca5da9-211d-4fb8-bc57-ad9c013c82a6',
         'PPTX': 'https://docs.google.com/file/d/1XdaXiQYPNUpG4IapIEb6_6UzW-tK4Ehc/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true'
   	// //Originally Shapes and IP 1 today, but Spike changed plans.
       },
     },
    {
      date: '9/30',
      topic: 'Material and illumination models',
       links: {
        'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1f677f45-91e8-4f59-ae0f-ad9c013c82be',
       	 'PPTX': 'https://docs.google.com/file/d/1Tn4VrF5OUWNCpElDunNAtucc31IXOhEu/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true'
   	// //Originally Shapes and IP 1 today, but Spike changed plans.
       },
     },
    {
      date: '10/5',
      topic: 'Raytracing',
       links: {
  //        'Activities': 'https://docs.google.com/document/d/1zgoLcs-9bPN4VHhog0NmAOO3oH_CGnCTkvum1YXfA6Y/edit?usp=sharing',
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d75d0dd6-de0c-4e3e-bf9c-ad9c013c82d5',
	 'PPTX' : 'https://docs.google.com/file/d/1Tnk778VP_ckeu239oM13Pov1493YGPhp/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true'
       },
      //  related: [
      //    {
      //      name: 'Discrete Fourier',
      //      link: 'http://madebyevan.com/dft/'
      //    }
      //  ]
    },
    {
      date: '10/7',
      topic: 'Spatial data structures & raytracing acceleration',
       links: {
	'Recording' : 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3cdcae24-8fbd-45aa-979b-ad9c013c82eb',
         'PPTX': 'https://docs.google.com/file/d/1TrstAIvAY0R5JIzkCcFEUNyZI1EU-QjC/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
  //   //     'PDF': 'lectures/CS123_10_Viewing_I_10.03.19.pdf'
       },
      related: []
    },
    {
      date: '10/12',
      topic: 'Surface parameterization & texture mapping',
       links: {
	'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9115f210-524a-4dc6-a5c6-ad9c013c8308',
         'PPTX': 'https://docs.google.com/file/d/1TrgJZQkmuk5rD9wP7uwV5dhLyEmcnc6i/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
    //     'PDF': 'lectures/CS123_09_Image_Processing_IV_10.01.19.pdf'
       },
      related: []
    },
    {
      date: '10/14',
      topic: 'Real-time graphics I: Intro',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9d7a57ce-566f-434e-90b8-ad9c013c832c',
         'PPTX': 'https://docs.google.com/file/d/1Tst6P1M9DrCr5v6nDof3nCffNBNT-AvR/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
       },
      related: []
    },
    {
      date: '10/19',
      topic: 'Real-time graphics II: Projection, clipping',
       links: {
              'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=05701477-7957-439e-bff0-ad9c013c8345',
        'PPTX': 'https://docs.google.com/file/d/1TxAbpQCXZInXTKxInfkIZXAt67_hjTKt/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
       },
      //  related: [
      //    {
      //      name: 'BALSA Clipping',
      //      link: 'https://www.youtube.com/watch?v=ViOngYZ9-Wk'
      //    }
      //  ]
    },
    {
      date: '10/21',
      topic: 'Real-time graphics III: Rasterization, visible surface determination',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ca072d60-00ed-4cb4-89af-ad9c013c835d',
	 'PPTX': 'https://docs.google.com/file/d/1TzC9TUUeAdATOyqxp2PBrvCVSrVkXbJV/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true'
       },
      related: []
    },
    {
      date: '10/26',
      topic: 'Advanced real-time graphics: mapping, deferred rendering, RTX',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a261547-5c21-4e3c-a1a3-ad9c013c8375',
         'PPTX': 'https://docs.google.com/file/d/1U5X2FQTDNI0dgtz0o-d5fN1SxhCgn0av/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true'
       },
      related: []
    },
    {
      date: '10/28',
      topic: 'Advanced real-time graphics (continued)',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8955b257-939c-4ff8-9aa3-ad9c013c838f',
      //    'PPTX': 'https://drive.google.com/file/d/1x0A7PiIAE2slAi509eulE1hGlonKks5H/view?usp=sharing'
       },
      related: []
    },
    {
      date: '11/2',
      topic: 'Creating (non-)photorealistic graphics',
       links: {
	      'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f4b6ac97-0845-4566-ae5c-ad9c013c83ab',
         'PPTX': 'https://docs.google.com/file/d/1UBAzYFIr57b6EjhuRk8V7yEROhg8Zncy/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
       },
      related: []
    },
    {
      date: '11/4',
      topic: 'The final project (and project ideas)',
       links: {
        'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=084e20f7-6011-4c94-b77c-ad9c013c83c5',
         'PPTX': 'https://docs.google.com/file/d/1UF7uc9aOyObL6PhbOv_q-5nVxQ9GpbtV/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true',
       },
      related: []
    },
    {
      date: '11/9',
      topic: 'Image Processing I: Introduction',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6ff3df2a-fdc9-4739-bff1-ad9c013c83dd',
         'PPTX': 'https://docs.google.com/file/d/1UIapqZIjpvJSr8fTdMPVLYboEw6CzFkY/edit?usp=sharing&ouid=114892003088852070829&rtpof=true&sd=true'
       },
      related: []
    },
    {
      date: '11/11',
      topic: 'Image Processing II: Sampling, Reconstruction, & Anti-aliasing',
      //  links: {
      //    'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=62d25e7e-1787-4a14-9ffd-ac70015ef996',
      //    'PPTX': 'https://drive.google.com/file/d/1VL7xPq0bWv9_2L5_dV4mRbn7EiiC-Nu3/view?usp=sharing'
      //  },
      related: []
    },
    {
      date: '11/16',
      topic: 'Image Processing III: Geometric Transformations',
    //    links: {
	  //  'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a8762be2-7b2b-44ed-bee5-ac7501645eae',
    //        'PPTX': 'https://drive.google.com/file/d/1eOJJwyraXa2bCkLTRasBK8rsM9HViMhA/view?usp=sharing',
    //    },
      related: []
    },
	{
      date: '11/18',
      topic: 'Perception & Color',
    //    links: {
	  //  'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b27d8cf7-7af6-4425-8570-ac77017565eb',
    //        'DOC': 'https://docs.google.com/document/d/1QmPmCTEL7LILaOMah7qwYOhR4eN61GzWyNmdb66MYuY/edit?usp=sharing',
	  //  'Lecture Notes' : 'ShaderDebugging.md.html'
    //    },
      related: []
    },
    {
      date: '11/23',
      topic: '(No class)',
    },
    {
      date: '11/25',
      topic: '(No class; Thanksgiving)',
    },
    {
      date: '11/30',
      topic: 'Input and Output Devices',
      //  links: {
      //      'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a068b077-6637-4b85-bcd0-ac83016225db',
      //      'PPTX': 'https://drive.google.com/file/d/1QCoMxjJZ5Rn9DzUWjHvbieWYaASZilix/view?usp=sharing '
      //  },
      related: []
    },
    {
      date: '12/2',
      topic: 'VR/AR',
      //  links: {
      //      'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3ce7b219-4774-4b25-a9bd-ac850167a7f5',
      //      'PPTX': 'https://drive.google.com/file/d/1Uhfna9Zbcu1nFU2ZsCzJJUtzJ1V0Q_oz/view?usp=sharing'
      //  },
      related: []
    },

     {
         date: '12/7',
         topic: 'Inverse graphics, differentiable rendering, and machine learning',
        //  links: {
        //        'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b786a5c9-9004-4497-b87a-ac8a016ff92d',
        //      //  'PDF': 'lectures/CS123_29_Turing_12.06.18.pdf'
        //  },
    //     related: []
     },

     {
      date: '12/9',
      topic: 'Graphics research at Brown',
     //  links: {
     //        'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b786a5c9-9004-4497-b87a-ac8a016ff92d',
     //      //  'PDF': 'lectures/CS123_29_Turing_12.06.18.pdf'
     //  },
 //     related: []
  },

     {
         date: '12/16',
         topic: 'Final Project Demo Day',
    //     links: {
    //         //  'PPTX': 'lectures/CS123_29_Turing_12.06.18.pptx',
    //         //  'PDF': 'lectures/CS123_29_Turing_12.06.18.pdf'
    //     },
    //     related: []
     }

  ];


  // Get the lectures table.
  var lectures = document.getElementById('lectures');

  // Iterate thorugh all the lectures.
  for (var i = 0; i < LECTURES.length; i++) {
    var lecture = LECTURES[i];

    // Create a new DOM element for the lecture.
    var lectureDOM = document.createElement('tr');
    lectureDOM.className = 'lecture';

    var indexDOM = document.createElement('td');
    indexDOM.className = 'lecture-index';
    indexDOM.innerHTML = (i);

    // Add the fields.
    var dateDOM = document.createElement('td');
    dateDOM.className = 'lecture-date';
    dateDOM.innerHTML = lecture.date;

    var topicDOM = document.createElement('td');
    topicDOM.className = 'lecture-topic';
    topicDOM.innerHTML = lecture.topic;

    var slidesDOM = document.createElement('td');
    slidesDOM.className = 'lecture-slides';
    for (var linkType in lecture.links) {
      // Create a link.
      var link = lecture.links[linkType];

      var linkDOM = document.createElement('a');
      linkDOM.className = 'lecture-link';
      linkDOM.innerHTML = linkType;
      linkDOM.href = link;
      linkDOM.target = '_blank';

      // Add the link.
      slidesDOM.appendChild(linkDOM);

    }

    var relatedDOM = document.createElement('td');
    relatedDOM.className = 'lecture-related';
    for (var relatedIndex in lecture.related) {
      var related = lecture.related[relatedIndex];

      // Create a related link.
      var linkDOM = document.createElement('a');
      linkDOM.className = 'lecture-link';
      linkDOM.innerHTML = related.name;
      linkDOM.href = related.link;
      linkDOM.target = '_blank';
      linkDOM.style.marginRight = "0.5em";

      // Add the link.
      relatedDOM.appendChild(linkDOM);
    }

    // Append everything.
    lectureDOM.appendChild(indexDOM);
    lectureDOM.appendChild(dateDOM);
    lectureDOM.appendChild(topicDOM);
    lectureDOM.appendChild(slidesDOM);
    lectureDOM.appendChild(relatedDOM);
    lectures.appendChild(lectureDOM);
  }
})();
