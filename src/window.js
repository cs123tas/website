
let $help_window;
function show_window(title, html_file_name) {
	if ($help_window) {
		$help_window.focus();
		return;
	}
	$help_window = open_window_viewer({
		title: localize(title),
		root: "help",
		contentsFile: "help/mspaint.hhc",
		html_file_name: html_file_name
	}).$help_window;
	$help_window.on("close", ()=> {
		$help_window = null;
	});
}

// awkward shim to interface with my own stupid code
window.TITLEBAR_ICON_SIZE = 16;
window.$Icon = ()=> {
	return $("<img src='images/chm-16x16.png'>");
};

// shared code with 98.js.org
// (copy-pasted for now)

function open_window_viewer(options){
	const $help_window = $Window({
		title: options.title || "Help Topics",
		icon: "chm",
	})
	$help_window.addClass("help-window");

	let ignore_one_load = true;
	let back_length = 0;
	let forward_length = 0;

	const $main = $(E("div")).addClass("main");
	const $toolbar = $(E("div")).addClass("toolbar");
	const add_toolbar_button = (name, sprite_n, action_fn, enabled_fn)=> {
		const $button = $("<button class='lightweight'>")
		.text(name)
		.appendTo($toolbar)
		.on("click", ()=> {
			action_fn();
		});
		$("<div class='icon'/>")
		.appendTo($button)
		.css({
			backgroundPosition: `${-sprite_n * 55}px 0px`,
		});
		const update_enabled = ()=> {
			$button[0].disabled = enabled_fn && !enabled_fn();
		};
		update_enabled();
		$help_window.on("click", "*", update_enabled);
		$help_window.on("update-buttons", update_enabled);
		return $button;
	};
	const measure_sidebar_width = ()=>
		$contents.outerWidth() +
		parseFloat(getComputedStyle($contents[0]).getPropertyValue("margin-left")) +
		parseFloat(getComputedStyle($contents[0]).getPropertyValue("margin-right")) +
		$resizer.outerWidth();
	const $hide_button = add_toolbar_button("Hide", 0, ()=> {
		const toggling_width = measure_sidebar_width();
		$contents.hide();
		$resizer.hide();
		$hide_button.hide();
		$show_button.show();
		$help_window.width($help_window.width() - toggling_width);
		$help_window.css("left", $help_window.offset().left + toggling_width);
		$help_window.bringTitleBarOnScreen();
	});
	const $show_button = add_toolbar_button("Show", 5, ()=> {
		$contents.show();
		$resizer.show();
		$show_button.hide();
		$hide_button.show();
		const toggling_width = measure_sidebar_width();
		$help_window.css("max-width", "unset");
		$help_window.width($help_window.width() + toggling_width);
		$help_window.css("left", $help_window.offset().left - toggling_width);
		// $help_window.applyBounds() would push the window to fit (before trimming it only if needed)
		// Trim the window to fit (especially for if maximized)
		if ($help_window.offset().left < 0) {
			$help_window.width($help_window.width() + $help_window.offset().left);
			$help_window.css("left", 0);
		}
		$help_window.css("max-width", "");
	}).hide();
	add_toolbar_button("Back", 1, ()=> {
		$iframe[0].contentWindow.history.back();
		ignore_one_load = true;
		back_length -= 1;
		forward_length += 1;
	}, ()=> back_length > 0);
	add_toolbar_button("Forward", 2, ()=> {
		$iframe[0].contentWindow.history.forward();
		ignore_one_load = true;
		forward_length -= 1;
		back_length += 1;
	}, ()=> forward_length > 0);
	add_toolbar_button("Options", 3, ()=> {}, ()=> false); // @TODO: hotkey and underline on O
	add_toolbar_button("Web Help", 4, ()=> {
		iframe.src = "help/online_support.htm";
	});
	
	const $iframe = $Iframe({src: options.html_file_name}).addClass("inset-deep");
	const iframe = $iframe[0];
	iframe.$window = $help_window; // for focus handling integration
	const $resizer = $(E("div")).addClass("resizer");
	const $contents = $(E("ul")).addClass("contents inset-deep");

	// @TODO: fix race conditions
	$iframe.on("load", ()=> {
		if (!ignore_one_load) {
			back_length += 1;
			forward_length = 0;
		}
		// iframe.contentWindow.location.href
		ignore_one_load = false;
		$help_window.triggerHandler("update-buttons");
	});

	$main.append($iframe);
	$help_window.$content.append($main);

	$help_window.css({width: 800, height: 600});

	$iframe.attr({name: "help-frame"});
	$iframe.css({
		backgroundColor: "white",
		border: "",
		margin: "1px",
	});
	$contents.css({
		margin: "1px",
	});
	$help_window.center();

	$main.css({
		position: "relative", // for resizer
	});

	const resizer_width = 4;
	$resizer.css({
		cursor: "ew-resize",
		width: resizer_width,
		boxSizing: "border-box",
		background: "var(--ButtonFace)",
		borderLeft: "1px solid var(--ButtonShadow)",
		boxShadow: "inset 1px 0 0 var(--ButtonHilight)",
		top: 0,
		bottom: 0,
		zIndex: 1,
	});
	$resizer.on("pointerdown", (e)=> {
		let pointermove, pointerup;
		const getPos = (e)=>
			Math.min($help_window.width() - 100, Math.max(20,
				e.clientX - $help_window.$content.offset().left
			));
		$G.on("pointermove", pointermove = (e)=> {
			$resizer.css({
				position: "absolute",
				left: getPos(e)
			});
			$contents.css({
				marginRight: resizer_width,
			});
		});
		$G.on("pointerup", pointerup = (e)=> {
			$G.off("pointermove", pointermove);
			$G.off("pointerup", pointerup);
			$resizer.css({
				position: "",
				left: ""
			});
			$contents.css({
				flexBasis: getPos(e) - resizer_width,
				marginRight: "",
			});
		});
	});
	
	const parse_object_params = $object => {
		// parse an $(<object>) to a plain object of key value pairs
		const object = {};
		for (const param of $object.children("param").get()) {
			object[param.name] = param.value;
		}
		return object;
	};
	
	let $last_expanded;
	
	const $Item = text => {
		const $item = $(E("div")).addClass("item").text(text.trim());
		$item.on("mousedown", () => {
			$contents.find(".item").removeClass("selected");
			$item.addClass("selected");
		});
		$item.on("click", () => {
			const $li = $item.parent();
			if($li.is(".folder")){
				if($last_expanded){
					$last_expanded.not($li).removeClass("expanded");
				}
				$li.toggleClass("expanded");
				$last_expanded = $li;
			}
		});
		return $item;
	};
	
	const $default_item_li = $(E("li")).addClass("page");
	$default_item_li.append($Item("Welcome to Help").on("click", ()=> {
		$iframe.attr({src: "help/default.html"});
	}));
	$contents.append($default_item_li);
	
	function renderItem(source_li, $folder_items_ul) {
		const object = parse_object_params($(source_li).children("object"));
		if ($(source_li).find("li").length > 0){
			
			const $folder_li = $(E("li")).addClass("folder");
			$folder_li.append($Item(object.Name));
			$contents.append($folder_li);
			
			const $folder_items_ul = $(E("ul"));
			$folder_li.append($folder_items_ul);
			
			$(source_li).children("ul").children().get().forEach((li)=> {
				renderItem(li, $folder_items_ul);
			});
		} else {
			const $item_li = $(E("li")).addClass("page");
			$item_li.append($Item(object.Name).on("click", ()=> {
				$iframe.attr({src: `${options.root}/${object.Local}`});
			}));
			if ($folder_items_ul) {
				$folder_items_ul.append($item_li);
			} else {
				$contents.append($item_li);
			}
		}
	}
	
	// @TODO: keyboard accessability
	// $help_window.on("keydown", (e)=> {
	// 	switch(e.keyCode){
	// 		case 37:
	// 			show_error_message("MOVE IT");
	// 			break;
	// 	}
	// });
	// var task = new Task($help_window);
	var task = {};
	task.$help_window = $help_window;
	return task;
}


var programs_being_loaded = 0;

function $Iframe(options){
	var $iframe = $("<iframe allowfullscreen>");
	var iframe = $iframe[0];

	var disable_delegate_pointerup = false;
	
	$iframe.focus_contents = function(){
		if (!iframe.contentWindow) {
			return;
		}
		if (iframe.contentDocument.hasFocus()) {
			return;
		}
		
		disable_delegate_pointerup = true;
		iframe.contentWindow.focus();
		setTimeout(function(){
			iframe.contentWindow.focus();
			disable_delegate_pointerup = false;
		});
	};
	
	// Let the iframe to handle mouseup events outside itself
	var delegate_pointerup = function(){
		if (disable_delegate_pointerup) {
			return;
		}
		// This try-catch may only be needed for running Cypress tests.
		try {
			if(iframe.contentWindow && iframe.contentWindow.jQuery){
				iframe.contentWindow.jQuery("body").trigger("pointerup");
			}
			if(iframe.contentWindow){
				const event = new iframe.contentWindow.MouseEvent("mouseup", {button: 0});
				iframe.contentWindow.dispatchEvent(event);
				const event2 = new iframe.contentWindow.MouseEvent("mouseup", {button: 2});
				iframe.contentWindow.dispatchEvent(event2);
			}
		} catch(error) {
			console.log("Failed to access iframe to delegate pointerup; got", error);
		}
	};
	$G.on("mouseup blur", delegate_pointerup);
	$iframe.destroy = ()=> {
		$G.off("mouseup blur", delegate_pointerup);
	};
	
	// @TODO: delegate pointermove events too?

	$("body").addClass("loading-program");
	programs_being_loaded += 1;
	
	$iframe.on("load", function(){
		
		if(--programs_being_loaded <= 0){
			$("body").removeClass("loading-program");
		}
		
		// This try-catch may only be needed for running Cypress tests.
		try {
			if (window.themeCSSProperties) {
				applyTheme(themeCSSProperties, iframe.contentDocument.documentElement);
			}

			// on Wayback Machine, and iframe's url not saved yet
			if (iframe.contentDocument.querySelector("#error #livewebInfo.available")) {
				var message = document.createElement("div");
				message.style.position = "absolute";
				message.style.left = "0";
				message.style.right = "0";
				message.style.top = "0";
				message.style.bottom = "0";
				message.style.background = "#c0c0c0";
				message.style.color = "#000";
				message.style.padding = "50px";
				iframe.contentDocument.body.appendChild(message);
				message.innerHTML = `<a target="_blank">Save this url in the Wayback Machine</a>`;
				message.querySelector("a").href =
					"https://web.archive.org/save/https://98.js.org/" +
					iframe.src.replace(/.*https:\/\/98.js.org\/?/, "");
				message.querySelector("a").style.color = "blue";
			}

			var $contentWindow = $(iframe.contentWindow);
			$contentWindow.on("pointerdown click", function(e){
				iframe.$window && iframe.$window.focus();
				
				// from close_menus in $MenuBar
				$(".menu-button").trigger("release");
				// Close any rogue floating submenus
				$(".menu-popup").hide();
			});
			// We want to disable pointer events for other iframes, but not this one
			$contentWindow.on("pointerdown", function(e){
				$iframe.css("pointer-events", "all");
				$("body").addClass("dragging");
			});
			$contentWindow.on("pointerup", function(e){
				$("body").removeClass("dragging");
				$iframe.css("pointer-events", "");
			});
			// $("iframe").css("pointer-events", ""); is called elsewhere.
			// Otherwise iframes would get stuck in this interaction mode
			
			iframe.contentWindow.close = function(){
				iframe.$window && iframe.$window.close();
			};
			// @TODO: hook into saveAs (a la FileSaver.js) and another function for opening files
			// iframe.contentWindow.saveAs = function(){
			// 	saveAsDialog();
			// };
			
		} catch(error) {
			console.log("Failed to reach into iframe; got", error);
		}
	});
	if (options.src) {
		$iframe.attr({src: options.src});
	}
	$iframe.css({
		minWidth: 0,
		minHeight: 0, // overrides user agent styling apparently, fixes Sound Recorder
		flex: 1,
		border: 0, // overrides user agent styling
	});

	return $iframe;
}

// function $IframeWindow(options){
	
// 	var $win = new $Window(options);
	
// 	var $iframe = $win.$iframe = $Iframe({src: options.src});
// 	$win.$content.append($iframe);
// 	var iframe = $win.iframe = $iframe[0];
// 	// @TODO: should I instead of having iframe.$window, have a get$Window type of dealio?
// 	// where all is $window needed?
// 	// I know it's used from within the iframe contents as frameElement.$window
// 	iframe.$window = $win;

// 	$win.on("close", function(){
// 		$iframe.destroy();
// 	});
// 	$win.onFocus($iframe.focus_contents);

// 	$iframe.on("load", function(){
// 		$win.show();
// 		$win.focus();
// 		// $iframe.focus_contents();
// 	});
	
// 	$win.setInnerDimensions = ({width, height})=> {
// 		const width_from_frame = $win.width() - $win.$content.width();
// 		const height_from_frame = $win.height() - $win.$content.height();
// 		$win.css({
// 			width: width + width_from_frame,
// 			height: height + height_from_frame + 21,
// 		});
// 	};
// 	$win.setInnerDimensions({
// 		width: (options.innerWidth || 640),
// 		height: (options.innerHeight || 380),
// 	});
// 	$win.$content.css({
// 		display: "flex",
// 		flexDirection: "column",
// 	});
	
// 	// @TODO: cascade windows
// 	$win.center();
// 	$win.hide();
	
// 	return $win;
// }

// Fix dragging things (i.e. windows) over iframes (i.e. other windows)
// (when combined with a bit of css, .dragging iframe { pointer-events: none; })
// (and a similar thing in $IframeWindow)
$(window).on("pointerdown", function(e){
	//console.log(e.type);
	$("body").addClass("dragging");
});
$(window).on("pointerup dragend blur", function(e){
	//console.log(e.type);
	if(e.type === "blur"){
		if(document.activeElement.tagName.match(/iframe/i)){
			return;
		}
	}
	$("body").removeClass("dragging");
	$("iframe").css("pointer-events", "");
});

