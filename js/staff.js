(function() {
  var STAFF = {
    head: [
      {
        image: 'img/staff/spike.jpg',
        name: 'John "Spike" Hughes',
        title: 'Professor',
        login: 'jfh'
      },
      {
        image: 'img/staff/griffin.jpg',
        name: 'Griffin Beels',
        title: 'Head TA',
        login: 'gbeels'
      },
      {
        image: 'img/staff/dylan2020.jpg',
        name: 'Dylan Tian',
        title: 'Head TA',
        login: 'dtian2'
      }
    ],
    other: [
      {
        image: 'img/staff/andrew.jpg',
        name: 'Andrew Peterson',
        login: 'apeter10'
      },
      {
        image: 'img/staff/caleb.jpg',
        name: 'Caleb Trotz',
        login: 'ctrotz'
      },
      {
        image: 'img/staff/eric.jpg',
        name: 'Eric Elliott',
        login: 'eelliot2'
      },
      {
        image: 'img/staff/maggie.jpg',
        name: 'Maggie Wu',
        login: 'mwu27'
      },
      {
        image: 'img/staff/giuse2020.jpg',
        name: 'Giuse Nguyen',
        login: 'gnguyen4'
      },
      {
        image: 'img/staff/selena.jpg',
        name: 'Selena Ling',
        login: 'zling1'
      },
      {
        image: 'img/staff/mike2020.jpg',
        name: 'Michael Cosgrove',
        login: 'mcosgrov'
      },
      {
        image: 'img/staff/brandon.jpg',
        name: 'Brandon Li',
        login: 'bli31'
      },
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
