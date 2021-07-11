
(function() {
	var DAYS = [
		'', // Corner.
		'Sun',
		'Mon',
		'Tues',
		'Wed',
		'Thurs',
		'Fri',
		'Sat'
	];

	// Get the day of the week and the current hour.
	var date = new Date();
	var day = date.getDay();
	var time = date.getHours() - 12;

	// Get the hours table.
	var hours = document.getElementById('hours');
	var currentHours = document.getElementById('hours_current');

	if (HOURS[time - 1] && HOURS[time - 1][day]) {
		currentHours.classList.add('hours__current--active');
		currentHours.innerHTML = HOURS[time - 1][day] + ' is holding hours right now.'
	} else {
		currentHours.innerHTML = 'No hours are being held right now.'
	}

	// Add days to the hours table.
	var rowDays = document.createElement('tr');
	for (var i = 0; i < 8; i ++) {
		var cell = document.createElement('th');
		cell.className = 'hours__cell hours__day';
		cell.innerHTML = DAYS[i];
		if (i === day + 1) cell.className += ' hours__cell--active';
		rowDays.appendChild(cell);
	}
	hours.appendChild(rowDays);

	// Add the rows.
	for (var i = 1; i < 10; i ++) {
		var row = document.createElement('tr');
		for (var j = -1; j < 7; j ++) {
			var cell = document.createElement('td');
			cell.className = 'hours__cell';
			if (j === -1) cell.className += ' hours__time';
			if (i === 9) cell.className += ' hours__last';
			if (i === time && (j === day || j === -1)) cell.className += ' hours__cell--active';
			if (j === -1) {
				cell.innerHTML = i + 'PM - ' + (i + 1) + 'PM';
			} else {
				cell.innerHTML = HOURS[i - 1][j];
			}
			row.appendChild(cell);
		}
		hours.appendChild(row);
	}
})();
