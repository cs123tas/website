(function() {
  var STAFF = {
    head: [
      {
        image: 'img/staff/daniel.jpg',
        name: 'Daniel Ritchie',
        title: 'Professor',
        login: 'dritchi1'
      },
      {
        image: 'img/staff/alex.jpg',
        name: 'Alex Mina',
        title: 'Head TA',
        login: 'jmina'
      },
      {
        image: 'img/staff/caleb.jpg',
        name: 'Caleb Trotz',
        title: 'Head TA',
        login: 'ctrotz'
      }
    ],
    other: [
      {
        image: 'img/staff/placeholder.jpeg',
        name: 'Aalia Habib',
        login: 'ahabib3'
      },
      {
        image: 'img/staff/aparna.jpg',
        name: 'Aparna Natarajan',
        login: 'anatara7'
      },
      {
        image: 'img/staff/adam.jpg',
        name: 'Adam Pikielny',
        login: 'apikieln'
      },
      {
        image: 'img/staff/alana.jpg',
        name: 'Alana White',
        login: 'awhite35'
      },
      {
        image: 'img/staff/breese.jpg',
        name: 'Breese Sherman',
        login: 'bsherma3'
      },
      {
        image: 'img/staff/junewoo.jpg',
        name: 'Junewoo Park',
        login: 'jpark49'
      },
      {
        image: 'img/staff/placeholder.jpeg',
        name: 'Megan Gessner',
        login: 'mgessner'
      }
    ]
  };

	// Get the staff lists.
	var staffHead = document.getElementById('staff-head');
	var staffOther = document.getElementById('staff-other');

	/*
	 * Adds a member to a given container.
	 *
	 * @param member The member to add.
	 * @param container The container.
	 */
	function addMember(member, container) {
		// Create the DOM element.
		var memberDOM = document.createElement('li');
	  memberDOM.className = 'gallery__item' + (member.title ?  '' : ' gallery__item--small');

    // Create thumbnail element.
    var thumbnailDOM = document.createElement('div');
    thumbnailDOM.className = 'gallery__thumb' + (member.title ?  '' : ' gallery__thumb--small');

		// Images: TA and Theme-based alt image
		var imgDOM = document.createElement('img');
		imgDOM.className = 'gallery__img gallery__img--orig';
		imgDOM.src = member.hover;

    var imgAltDOM = document.createElement('img');
		imgAltDOM.className = 'gallery__img gallery__img--alt';
		imgAltDOM.src = member.image;

    // Text: TA/Prof Name + Login
    var textDom = document.createElement('div');
    textDom.className = 'gallery__text';

		var nameDOM = document.createElement('h4');
		nameDOM.className = 'gallery__text-label';
		nameDOM.innerHTML = member.name + (member.title ? (' - ' + member.title) : '');

		var loginDOM = document.createElement('p');
		loginDOM.className = 'gallery__text-desc';
		loginDOM.innerHTML = member.login;

		// Append everything.
    thumbnailDOM.appendChild(imgAltDOM);
    thumbnailDOM.appendChild(imgDOM);
		textDom.appendChild(nameDOM);
		textDom.appendChild(loginDOM);
	  memberDOM.appendChild(thumbnailDOM);
	  memberDOM.appendChild(textDom);
		container.appendChild(memberDOM);
	}

	// Fill in the staff.
	for (var member of STAFF.head) addMember(member, staffHead);
	for (var member of STAFF.other) addMember(member, staffOther);
})();
