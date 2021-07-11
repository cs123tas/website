(function() {
  var ACTIVE_LAB = 1;
  var LABS = [
    {
        name: 'Getting Set Up for Local Development',
        link: 'https://docs.google.com/document/d/1Ics5ro71Lmm15SQbY1vEsIczB0iDhFfdDBjp3s00znw/edit?usp=sharing',
        desc: 'This guide will walk you through the process of setting up Qt/QtCreator and Github Classroom so you can begin working locally on future labs and projects.'
    },
    {
      name: 'OpenGL Basics',
      link: 'https://docs.google.com/document/d/1gMoCA7Me50Za5_iu_7glBvh6iVqP54wIIa1oMf_4JQI/edit?usp=sharing',
      image: 'img/labs/lab01.png',
      desc: 'In this lab, you will learn about vertex buffer objects and how to use them to draw shapes in OpenGL.'
    },
    {
      name: 'Vertex Shaders, Transformations, and Fragment Shaders',
      link: 'https://docs.google.com/document/d/1sDlJIZep0EFZJYTcWjVNroja0HgAM-hDEmO8S2mC1fs/edit?usp=sharing',
      image: 'img/labs/lab02.png',
      desc: 'In this lab, you will draw a 3D scene with moving shapes in OpenGL. To do this, you will implement a vertex shader. Then, you will learn how to use fragment shaders to draw more interesting features, such as gradients and textures, on your shapes.'
    },
    {
      name: 'Debugging',
      link: 'https://docs.google.com/document/d/16kBrDQ7eShoNC_rlTAh8tT_LbOPLofraNq3jzUuqrNw/edit?usp=sharing',
      image: 'img/labs/lab03.png',
      desc: 'In this lab, you will debug a broken OpenGL program and use your shader knowledge to implement the Phong lighting model.'
    },
    {
      name: 'Filter',
      link: 'https://docs.google.com/document/d/1T1Y3yKudT4Yomw-ZR-44AeNkxTC_DnD-M5pFSCjdkFM/edit?usp=sharing',
      image: 'img/labs/lab04.png',
      desc: 'In this lab, you will begin your Filter project and learn how to implement a grayscale and invert filter.'
    },
    {
      name: 'Terrain',
     link: 'https://docs.google.com/document/d/1eA6NvuJzZKvX7hLASt6mzOf2QYFSc6FRdG55WK8ThgY/edit',
      image: 'img/labs/lab05.png',
      desc: 'Procedural shape generation is an important tool in computer graphics. You will use a simple algorithm to generate a terrain/mountain range to witness the power of procedural shape generation first hand.'
    },
    {
      name: 'Camtrans',
      link: 'https://docs.google.com/document/d/1KA_kM5jxh9a19KNii5aB6sTUlh_z-TISUWowjVCdX0s/edit?usp=sharing',
      algo: {
          day: 'Monday',
          date: '10/19',
          time: '6:00PM',
          link: 'handouts/camtrans/camtrans_algo.pdf',
          solutions: 'handouts/camtrans/camtrans_algo_solutions-locked.pdf'
        },
      image: 'img/labs/lab06.gif',
      desc: 'In this lab, you will create your own virtual camera. This camera will use various viewing properties to produce a transformation matrix to display 3D graphics on our 2D output devices. <strong>The code written in this lab will be used in future assignments.</strong>'
    },
    {
      name: 'FBOs',
      link: 'https://docs.google.com/document/d/1hTZopIDd5vEYaPJ8ZHV5WAz6BuK7fci4pImI7a91C64/edit?usp=sharing',
      image: 'img/labs/lab07.png',
      desc: 'In this lab you will learn how to render to a frame buffer object, which opens up many possibilities for doing cool things with OpenGL.'
    },
    {
      name: 'Particles',
      link: 'https://docs.google.com/document/d/15-t3gW92x6Zjo8pfjIlpE8s22-kKli6aEh6WtpVD3EU/edit?usp=sharing',
      image: 'img/labs/lab08.png',
      desc: 'OpenGL can be used to render to a texture rather than a display. In this lab, you will use this functionality to create cool particle effects.'
    },
    {
      name: 'Metal and Glass',
      link: 'https://docs.google.com/document/d/1atftCWHTMR1BO2OBwxdV2_HObAg7fwjfGvfQZijWvzM/edit?usp=sharing',
      image: 'img/labs/lab10.png',
      desc: 'In this lab, you will implement two different shaders which implement the Cook-Torrance lighting model using Fresnel\'s equations for reflection and refraction. You will write a glass shader and a metal shader.'
    },
    {
      name: 'Shadertoy',
      link: 'https://docs.google.com/document/d/1GqUs3LaikKoplndlAxvHBfVx8RecMMDykpp1C6KKAAI/edit?usp=sharing',
      image: 'img/labs/lab11.png',
      desc: 'In this lab, you will use Shadertoy and OpenGL shaders to create various scenes.'
    },
    {
      name: 'Color',
      link: 'https://docs.google.com/document/d/1MTm8iMTkxDkMq2VrAOUCSwQA01mTiSZTmWNDuFL_UNw/edit?usp=sharing',
      image: 'img/labs/lab09.png',
      desc: 'Computers can represent color in a number of ways. This lab examines two of the most common color spaces, RGB and HSV, and their uses.'
    },
  ];


  // Get the lab list.
  var labs = document.getElementById('labs');

  // Iterate through the labs.
  for (var i = 0; i < LABS.length; i ++) {
    var lab = LABS[i];

    // Create a DOM element for the lab.
    var labDOM = document.createElement('li');
    labDOM.className = 'asgn__li' + (i + 1 < ACTIVE_LAB ? ' asgn__li--old' : ''); // Highlight the active lab.

    // Create a background dive for mobile devices
    var mobileImgDOM = document.createElement('div');
    mobileImgDOM.className = 'asgn__bg';
    mobileImgDOM.style.backgroundImage = 'url(' + lab.image + ')';

    // Add the attributes.
    var imgDOM = document.createElement('img');
    imgDOM.src = lab.image;
    imgDOM.className = 'asgn__icon';

    var descWrapperDOM = document.createElement('div');
    descWrapperDOM.className = 'asgn__text';

    var nameDOM = document.createElement('h4');
    nameDOM.className = 'asgn__text__title';

    // Store whether or not we should release the lab
    if (lab.link) {
      var linkDOM = document.createElement('a');
      linkDOM.href = lab.link;
      linkDOM.target = '_blank';
      linkDOM.innerHTML = lab.name;
      nameDOM.appendChild(linkDOM);
    } else {
      nameDOM.innerHTML = lab.name;
    }

    var descDOM = document.createElement('span');
    descDOM.className = 'asgn__text__desc';
    descDOM.innerHTML = lab.desc;

    // Append everything.
    labDOM.appendChild(mobileImgDOM);
    descWrapperDOM.appendChild(nameDOM);
    if (lab.due) {
      var dueDOM = document.createElement('span');
      dueDOM.className = 'asgn__text__sub';
      dueDOM.innerHTML = lab.due;
      descWrapperDOM.appendChild(dueDOM);
    }
    if (lab.algo) {
      var algo = lab.algo;
      var algoDOM = document.createElement('span');
      var algoLinkDOM = document.createElement('a');
      if (algo.link){
          algoLinkDOM.href = algo.link;
          algoLinkDOM.target = '_blank';
      }
      algoLinkDOM.innerHTML = 'Algo';

      var algoDueDOM = document.createElement('span');
      algoDueDOM.innerHTML = ' due ' + algo.day + ', ' + algo.date + ' at ' + algo.time;


      algoDOM.appendChild(algoLinkDOM);
      algoDOM.appendChild(algoDueDOM);

      if (algo.solutions) {
        algoDueDOM.innerHTML += ', ';
        var algoSolnLinkDOM = document.createElement('a');
        algoSolnLinkDOM.href = algo.solutions;
        algoSolnLinkDOM.innerHTML = 'Algo Solutions';

        algoDOM.className = 'asgn__text__sub';
        algoDOM.appendChild(algoSolnLinkDOM);
      }

      descWrapperDOM.appendChild(algoDOM);
    }
    descWrapperDOM.appendChild(descDOM);
    // labDOM.appendChild(imgDOM);
    labDOM.appendChild(descWrapperDOM);
    labs.appendChild(labDOM);
  }
})();
