(function() {
  var ACTIVE_LAB = 2;
  var LABS = [
    {
        name: 'Getting Set Up for Local Development',
        link: 'https://github.com/cs123tas/labs/tree/master/lab00',
        image: 'img/labs/lab00.png',
        //Image retrived from "https://www.google.com/search?q=tool+clipart+solid+backgroud&tbm=isch&ved=2ahUKEwj-wML3hOPyAhVNqHIEHWKXDJwQ2-cCegQIABAA&oq=tool+clipart+solid+backgroud&gs_lcp=CgNpbWcQAzoFCAAQgAQ6BggAEAcQHjoECAAQQzoGCAAQCBAeUJndAVjaoAJgoqMCaAJwAHgAgAG7AogBkhOSAQgxNy40LjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=UzQyYb7LJM3QytMP4q6y4Ak&bih=912&biw=1920&rlz=1C1RXQR_enUS946US946#imgrc=JVK_ZQr_nbsMcM"
        desc: 'This guide will walk you through the process of setting up Qt/QtCreator and Github Classroom so you can begin working locally on future labs and projects.'
    },
    {
      name: 'C++ Programming',
      link: 'https://github.com/cs123tas/labs/tree/master/lab01',
      image: 'img/labs/lab01.png',
      //Image retrived from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrvya7nHbXcAK8mlIRboDaUb8uCR8OqBE31Z7JUDQ1svJvT6NsgNIuMB1KVyMEPQSgEY&usqp=CAU"
      desc: 'In this lab, you will gain familiarity with programming in C++, which is the language you will be using throughout the course.'
    },
    {
      name: 'Terrain',
      link: 'https://github.com/cs123tas/labs/tree/master/lab02',
      image: 'img/labs/lab02.png',
      desc: 'Procedural shape generation is an important tool in computer graphics. You will use a simple algorithm to generate a terrain/mountain range to witness the power of procedural shape generation first hand.'
    },
    {
      name: 'Transformations & Scene Graphs',
      link: 'https://github.com/cs123tas/labs/tree/master/lab03',
      image: 'img/labs/lab03.png',
      //Image retrived from "data:image/png;base64,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"
      desc: 'In this lab, you will practice applying compositions of transformation matrices to translate, rotate, and scale 3D objects. You will also build a parser for scene files, turning a scene file into an in-memory transformation hierarchy known as a scene graph. This code will be useful for later assignments in the course.'
    },
    {
      name: 'Introduction to Maya',
      // link: 'https://docs.google.com/document/d/1gMoCA7Me50Za5_iu_7glBvh6iVqP54wIIa1oMf_4JQI/edit?usp=sharing',
       image: 'img/labs/lab04.jpg',
       //Image retrived from "https://cdn.flippednormals.com/wp-content/uploads/2020/04/01173019/introToMaya_gallery12.png"
      desc: 'In this lab, you will learn how the basics of Autodesk Maya, an industry-standard 3D software package. You will learn how to create objects, apply transformations, create materials and lights, and render images. These skills may come in handy for your final project!'
    },
    {
      name: '2D OpenGL',
      // link: 'https://docs.google.com/document/d/1gMoCA7Me50Za5_iu_7glBvh6iVqP54wIIa1oMf_4JQI/edit?usp=sharing',
      image: 'img/labs/lab05.png',
      desc: 'In this lab, you will learn about the basics of creating 2D graphics in OpenGL, including vertex arrays and vertex buffer objects.'
    },
    {
      name: '3D OpenGL',
      // link: 'https://docs.google.com/document/d/1sDlJIZep0EFZJYTcWjVNroja0HgAM-hDEmO8S2mC1fs/edit?usp=sharing',
      image: 'img/labs/lab06.png',
      desc: 'In this lab, you will learn the basics of creating 3D graphics in OpenGL. The lab culminates in a program which draws a 3D scene with moving shapes.'
    },
    {
      name: 'Camtrans',
      // link: 'https://docs.google.com/document/d/1KA_kM5jxh9a19KNii5aB6sTUlh_z-TISUWowjVCdX0s/edit?usp=sharing',
      // algo: {
      //     day: 'Monday',
      //     date: '10/19',
      //     time: '6:00PM',
      //     link: 'handouts/camtrans/camtrans_algo.pdf',
      //     solutions: 'handouts/camtrans/camtrans_algo_solutions-locked.pdf'
      //   },
      image: 'img/labs/lab07.gif',
      desc: 'In this lab, you will create your own virtual camera. This camera will use various viewing properties to produce a transformation matrix to display 3D graphics on our 2D output devices. The code written in this lab will be used in the Sceneview assignment.'
    },
    {
      name: 'FBOs',
      // link: 'https://docs.google.com/document/d/1hTZopIDd5vEYaPJ8ZHV5WAz6BuK7fci4pImI7a91C64/edit?usp=sharing',
      image: 'img/labs/lab08.png',
      desc: 'In this lab you will learn how to render to a frame buffer object, which opens up many possibilities for doing cool things with OpenGL.'
    },
    {
      name: 'Particles',
      // link: 'https://docs.google.com/document/d/15-t3gW92x6Zjo8pfjIlpE8s22-kKli6aEh6WtpVD3EU/edit?usp=sharing',
      image: 'img/labs/lab09.png',
      desc: 'OpenGL can be used to render to a texture rather than a display. In this lab, you will use this functionality to create cool particle effects.'
    },
    {
      name: 'Filter',
      // link: 'https://docs.google.com/document/d/1T1Y3yKudT4Yomw-ZR-44AeNkxTC_DnD-M5pFSCjdkFM/edit?usp=sharing',
      image: 'img/labs/lab10.png',
      desc: 'In this lab, you will begin your Filter project and learn how to implement a grayscale and invert filter.'
    },
    {
      name: 'Dielectric Materials (Metal & Glass)',
      // link: 'https://docs.google.com/document/d/1atftCWHTMR1BO2OBwxdV2_HObAg7fwjfGvfQZijWvzM/edit?usp=sharing',
      image: 'img/labs/lab11.png',
      desc: 'In this lab, you will implement the Cook-Torrance lighting model using Fresnel\'s equations for reflection and refraction. You will write a glass shader and a metal shader, either in GLSL or as extensions to your ray tracer.'
    },
    {
      name: 'Raymarching',
      // link: 'https://docs.google.com/document/d/1GqUs3LaikKoplndlAxvHBfVx8RecMMDykpp1C6KKAAI/edit?usp=sharing',
      image: 'img/labs/lab12.png',
      desc: 'In this lab, you will implement the ray marching method for rendering complex scenes defined with implicit equations. This can be an extension of your raytracer, or you can implement it using GLSL using the Shadertoy platform.'
    },
    // {
    //   name: 'Color',
    //   link: 'https://docs.google.com/document/d/1MTm8iMTkxDkMq2VrAOUCSwQA01mTiSZTmWNDuFL_UNw/edit?usp=sharing',
    //   image: 'img/labs/lab09.png',
    //   desc: 'Computers can represent color in a number of ways. This lab examines two of the most common color spaces, RGB and HSV, and their uses.'
    // },
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
