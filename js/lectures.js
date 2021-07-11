(function() {
  var LECTURES = [
    {
      date: '9/9',
      topic: 'Mechanics',
      links: {
	'Activities' : 'https://docs.google.com/document/d/1NR-uIpfMy5aRLwnIjR4d38TW3cXCe7b-gNvQsrIFZgY/edit?usp=sharing',
	'Recording' : 'https://brown.zoom.us/rec/share/092otLBEWEEz2nEzIJVWlFMY5oZ8B8sVUJ0nJp5hHt0NUxcxaR4q3mGQFqpwhkpJ.OMS3np3TQSbAbSyS',
        'PPTX ': 'https://drive.google.com/file/d/1ueO_rhgfNR61WqKMaimcz8CK38wbTaUU/view?usp=sharing',
	   },
      related: []
    },
    {
      date: '9/9',
      topic: 'Introduction',
       links: {
	
         'PPTX': 'https://drive.google.com/file/d/1gstgUWkoa3wTR9GQyQ5NGOid9hSqhWMt/view?usp=sharing',
      },
      related: [
        {
          name: 'Sketchpad',
          link: 'https://www.youtube.com/watch?v=J6UAYZxFwLc'
        }
      ]
    },
    {
      date: '9/14',
      topic: 'OpenGL 2D',
       links: {
           'Activities' : 'https://docs.google.com/document/d/1s0Bzi8jjDYrwpuyg_p3iVYVdQTmIaZtQF17jh-zbXLk/edit?usp=sharing',
           'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=289c9252-0f30-43e2-a554-ac36015ceddc',
         	'PPTX': 'https://drive.google.com/file/d/1YVVKT0Gn01gG8CbSVN5jbbOHT7JQtIWT/view?usp=sharing',
       },
      related: []
    },
    {
      date: '9/16',
      topic: 'OpenGL 3D',
      links: {
         'Activities' : 'https://docs.google.com/document/d/1ocdyYp1mrWJ_0__BpaUv5JjC9GGlP1HFOdk-58PoBqo/edit?usp=sharing',
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=10365a45-2d3f-4842-a159-ac380161c668',
	'PPTX': 'https://drive.google.com/file/d/1go_0QOI2q0akQzUF2TYD0EEgLaZmNnhR/view?usp=sharing',
       },
       related: [
         {
           name: 'Shading',
           link: 'http://math.hws.edu/graphicsbook/demos/c4/smooth-vs-flat.html'
         }
       ]
    },
    {
      date: '9/21',
      topic: 'OpenGL 3D - Continued',
       links: {
         'Activities': 'https://docs.google.com/document/d/1tzLingUcj8vRK4YBvArbhKZHyTOzscwo_QIXrdxbpoM/edit?usp=sharing',
	'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=08b9afcd-8d58-4d0f-859e-ac3d0159bcf1',
         
       },
       related: [
         
       ]
    },
    {
      date: '9/23',
      topic: 'Transformations',
       links: {
         'Activities': 'https://docs.google.com/document/d/1scQ5JU31tQ9jrs6YZx5pwfoHJrPNNWbCSVIfNXgwd0M/edit?usp=sharing',
	 'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7d602b8c-841c-485a-8a02-ac3f0158caf2',
	 'PPTX': 'https://drive.google.com/file/d/1-NQOdDWlCQPyOYwkEGe2nGqxEtew8deK/view?usp=sharing',
     //    'PPTX': 'https://drive.google.com/file/d/1ll0VhPAqYRQ929W8BoZiYpnLKYdaP5nG/view?usp=sharing'
	//Originally Shapes and IP 1 today, but Spike changed plans.
       },
       related: [
	{
           name: 'Transformation Game',
          link: 'http://www.cs.brown.edu/exploratories/freeSoftware/repository/edu/brown/cs/exploratories/applets/transformationGame/transformation_game_guide.html'
         },
         {
           name: 'Bezier Splines',
           link: 'https://www.jasondavies.com/animated-bezier/'
         }
       ]
    },
 	{
      date: '9/28',
      topic: 'Transformations-Continued',
       links: {
       	 'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2ae39cde-16b1-4fe3-a349-ac4601242408',
   	//Originally Shapes and IP 1 today, but Spike changed plans.
       },
     },
    {
      date: '9/28',
      topic: 'Image Processing I',
       links: {
        'Activities': 'https://docs.google.com/document/d/1-eJOPAchyF3gonbcIAYdGlwgMIxpjfoPTcB-0m_me7Y/edit?usp=sharing',
	'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1f8f0043-4ef5-4e41-a3d3-ac4401571d3e',
	'PPTX': 'https://drive.google.com/file/d/1rx-xahraPijryZ8CzX8nH7VlQZWzkKqn/view?usp=sharing' 
    //     'PDF': 'lectures/CS123_06_Image_Processing_I_9.19.19.pdf'
       },
       related: [
         {
           name: 'Sampling',
           link: 'https://cs.brown.edu/courses/cs123/demos/intro_to_sampling/sampling.html'
         }
       ]
    },
    {
      date: '9/30',
      topic: 'Image Processing Ia',
       links: {
       	 'PPTX': 'https://drive.google.com/file/d/1v2FZsZBAf7MtzwQ_bTJutsq5mWsaTRe5/view?usp=sharing'
   	//Originally Shapes and IP 1 today, but Spike changed plans.
       },
     },
    {
      date: '9/30',
      topic: 'Image Processing II',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a2d57193-9185-4387-adda-ac460155e86f',
	 'PPTX': 'https://drive.google.com/file/d/1yGpjQfB31ymPapoiZvViRgaeKwws-j0S/view?usp=sharing'
    //     'PDF': 'lectures/CS123_07_Image_Processing_II_9.24.19.pdf'
       },
       related: [
         {
           name: 'Crawlies',
           link: 'https://cs.brown.edu/courses/cs123/demos/crawlies/crawlie_demo.html'
         },
         {
           name: 'Scaling',
           link: 'http://cs.brown.edu/courses/cs123/demos/scaling/ip.html'
         },
         {
           name: 'Nyquist Limit',
           link: 'http://cs.brown.edu/courses/cs123/demos/nyquist_limit/'
         },
         {
           name: 'Convolutions',
           link: 'https://cs.brown.edu/courses/cs123/demos/convolutions/index.html'
         }
       ]
    },
    {
      date: '10/5',
      topic: 'Image Processing IIa',
       links: {
         'Activities': 'https://docs.google.com/document/d/1zgoLcs-9bPN4VHhog0NmAOO3oH_CGnCTkvum1YXfA6Y/edit?usp=sharing',
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ee32b5e5-79bf-4252-9253-ac4b015a5605',
	 'PPTX' : 'https://drive.google.com/file/d/1J5XQ3SFRB0fjFtPBaHFeBDhRJ3cT67_l/view?usp=sharing'
       },
       related: [
         {
           name: 'Discrete Fourier',
           link: 'http://madebyevan.com/dft/'
         }
       ]
    },
    {
      date: '10/7',
      topic: 'Image Processing III',
       links: {
	'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1e79ad8a-45fb-468b-b923-ac4d0156b213',
         'PPTX': 'https://drive.google.com/file/d/1TU-IHlTlP173Yh00EvOLwp5gGE_3_Els/view?usp=sharing',
    //     'PDF': 'lectures/CS123_09_Image_Processing_IV_10.01.19.pdf'
       },
      related: []
    },
    {
      date: '10/14',
      topic: 'Viewing I',
       links: {
	'Recording' : 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a7d360f-2065-45b6-bb9b-ac5401583079',
         'PPTX': 'https://drive.google.com/file/d/1bRU833ysCM_tjaWBRNV4Ove45LyxYQib/view?usp=sharing',
    //     'PDF': 'lectures/CS123_10_Viewing_I_10.03.19.pdf'
       },
      related: []
    },
    {
      date: '10/14',
      topic: 'Viewing II',
       links: {
         'PPTX': 'https://drive.google.com/file/d/1L-a3_Rw05NhTD6JXQetBiRllymSUbXaM/view?usp=sharing',
       },
      related: []
    },
    {
      date: '10/14',
      topic: 'Viewing III',
       links: {
	'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=242c49ba-5f77-42fb-81a1-ac5601694676',
         'PPTX': 'https://drive.google.com/file/d/1YxxH9tCQegn9pHb0tkN7EYAKVFYy6YCi/view?usp=sharing'
       },
       related: [
         {
           name: 'Normalization Demo',
           link: 'http://cs.brown.edu/courses/cs123/demos/camera/'
         }
       ]
    },
    {
      date: '10/19',
      topic: 'Clipping, Texture Mapping Recording',
       links: {
    //     'PPTX': 'https://drive.google.com/file/d/1nIFszEzI7Oif9Srxh4HOS-QwjDSCjAiO/view?usp=sharing',
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=27f22133-b07e-465e-a959-ac590158054d'
       },
       related: [
         {
           name: 'BALSA Clipping',
           link: 'https://www.youtube.com/watch?v=ViOngYZ9-Wk'
         }
       ]
    },
    {
      date: '10/19',
      topic: 'Clipping',
       links: {
         'PPTX': 'https://drive.google.com/file/d/1nIFszEzI7Oif9Srxh4HOS-QwjDSCjAiO/view?usp=sharing',
    //     'PDF': 'lectures/CS123_13_Clipping_10.15.19.pdf'
       },
    //   related: [
    //     {
    //       name: 'BALSA Scan Conversion',
    //       link: 'https://www.youtube.com/watch?v=GXi32vnA-2A'
    //     }
    //   ]
    },
    {
      date: '10/19',
      topic: 'Texture Mapping',
       links: {
         'PPTX': 'https://drive.google.com/file/d/1HR3pkQCaTwEwPGmAiKlBkwnlrIsL0WFl/view?usp=sharing',
    //     'PDF': 'lectures/CS123_15_Texture_Mapping_10.15.19.pdf'
       },
      related: []
    },
    {
      date: '10/21',
      topic: 'Visible Surface Determination',
       links: {
   //      'PPTX': 'lectures/CS123_16_Visible_Surface_Determination_10.17.19.pptx',
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0403b3ef-0c78-440f-a7f5-ac5b0152edeb',
	 'PPTX': 'https://drive.google.com/file/d/1-ezbO_gcpm-1eQb-uU0vSDZSVrp57mlw/view?usp=sharing'
       },
      related: []
    },
    {
      date: '10/26',
      topic: 'Illumination',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7cfddc46-10d3-4877-a3a2-ac6001588e37',
         'PPTX': 'https://drive.google.com/file/d/1snPFqt7E658jubrZ55KWEEX82t0Hjz9Z/view?usp=sharing'
       },
      related: []
    },
    {
      date: '10/28',
      topic: 'Raytracing',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7b1deed5-a838-4f87-acdf-ac620156b25f',
         'PPTX': 'https://drive.google.com/file/d/1x0A7PiIAE2slAi509eulE1hGlonKks5H/view?usp=sharing'
       },
      related: []
    },
    {
      date: '11/2',
      topic: 'Acceleration Data Structures',
       links: {
	'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=00602992-24e3-435a-b16f-ac67016b8301',
         'PPTX': 'https://drive.google.com/file/d/1HexdiN1iWGNzutB874x7s-YKjTnbejT3/view?usp=sharing',
       },
      related: []
    },
    {
      date: '11/4',
      topic: 'Polygonal Rasterization Rendering Techniques',
       links: {
  'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=727ddeca-6b4f-401d-9380-ac690171a6e7',
         'PPTX': 'https://drive.google.com/file/d/1iCF7HlljvpY1HZeajxUtZ4smurRzvwiK/view?usp=sharing',
       },
      related: []
    },
    {
      date: '11/9',
      topic: 'Realism',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ab9f9eae-f920-4b14-9f27-ac6e016e4b6c',
         'PPTX': 'https://drive.google.com/file/d/1eFEnWUgoxpfsqtyBYIM3KiSF88w4ft1g/view?usp=sharing'
       },
      related: []
    },
    {
      date: '11/11',
      topic: 'Deferred Rendering',
       links: {
         'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=62d25e7e-1787-4a14-9ffd-ac70015ef996',
         'PPTX': 'https://drive.google.com/file/d/1VL7xPq0bWv9_2L5_dV4mRbn7EiiC-Nu3/view?usp=sharing'
       },
      related: []
    },
    {
      date: '11/16',
      topic: 'Final Project Topics',
       links: {
	   'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a8762be2-7b2b-44ed-bee5-ac7501645eae',
           'PPTX': 'https://drive.google.com/file/d/1eOJJwyraXa2bCkLTRasBK8rsM9HViMhA/view?usp=sharing',
       },
      related: []
    },
	{
      date: '11/18',
      topic: 'Debugging',
       links: {
	   'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b27d8cf7-7af6-4425-8570-ac77017565eb',
           'DOC': 'https://docs.google.com/document/d/1QmPmCTEL7LILaOMah7qwYOhR4eN61GzWyNmdb66MYuY/edit?usp=sharing',
	   'Lecture Notes' : 'ShaderDebugging.md.html'
       },
      related: []
    },

    {
      date: 'N/A',
      topic: 'AR/VR I',
       links: {
           'PPTX': 'https://drive.google.com/file/d/1P50PPVS07_4fw2Xq2skS35HB3n9i_dRj/view?usp=sharing',
       },
      related: []
    },
    {
      date: 'N/A',
      topic: 'AV/VR II',
       links: {
           'PPTX': 'https://drive.google.com/file/d/19PQ2UhSrFIzKzLHv2HU2vQOtWk9ivW80/view?usp=sharing',
       },
      related: []
    },
    {
      date: 'N/A',
      topic: 'UI I',
       links: {
           'PPTX': 'https://drive.google.com/file/d/1iRmz9xbFbW6RpubdMxPZUOePpfXYU9_E/view?usp=sharing',
       },
      related: []
    },
    {
      date: 'N/A',
      topic: 'UI II',
       links: {
           'PPTX': 'https://drive.google.com/file/d/1sjBZ1IDPltuUOX_SwKZGrQn5zz7scUHj/view?usp=sharing',
       },
      related: []
    },
    {
      date: '11/23',
      topic: 'Stochastic Rendering',
       links: {
    //       'PPTX': 'lectures/CS123_27_Stochastics_2019.pptx',
           'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f273b5b6-9eda-4419-92f0-ac7c0162e8fa'
       },
      related: []
    },
    {
      date: '11/30',
      topic: 'Color IA',
       links: {
           'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a068b077-6637-4b85-bcd0-ac83016225db',
           'PPTX': 'https://drive.google.com/file/d/1QCoMxjJZ5Rn9DzUWjHvbieWYaASZilix/view?usp=sharing '
       },
      related: []
    },
    {
      date: '12/2',
      topic: 'Color II',
       links: {
           'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3ce7b219-4774-4b25-a9bd-ac850167a7f5',
           'PPTX': 'https://drive.google.com/file/d/1Uhfna9Zbcu1nFU2ZsCzJJUtzJ1V0Q_oz/view?usp=sharing'
       },
      related: []
    },

     {
         date: '12/7',
         topic: 'Early Project Demos',
         links: {
               'Recording': 'https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b786a5c9-9004-4497-b87a-ac8a016ff92d',
             //  'PDF': 'lectures/CS123_29_Turing_12.06.18.pdf'
         },
    //     related: []
     },

     {
         date: '12/11',
         topic: 'Final Project Day',
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
