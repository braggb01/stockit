/* Author: Boyan Kostov, http://wh1sp.com/

*/


jQuery(document).ready(function(){
	
	// Run Matt Kersley's jQuery Responsive menu plugin (see plugins.js)
	if ($.fn.mobileMenu) {
		$('ol#id').mobileMenu({
			switchWidth: 768,                   // width (in px to switch at)
			topOptionText: 'Choose a page',     // first option text
			indentString: '&nbsp;&nbsp;&nbsp;'  // string for indenting nested items
		});
	}

	// Run Mathias Bynens jQuery placeholder plugin (see plugins.js)
	if ($.fn.placeholder) {
		$('input, textarea').placeholder();		
	}

	if ($.fn.superfish) {
		$('ul.sf_menu').superfish();
	}

	$("#main").sortable({
			placeholder: "box box-placeholder", forcePlaceholderSize: "true",handle: "a.move"
	}); 

	// Tabs
	$('.tabs div.tab').hide();
	$('.tabs').each(function() {$(this).find('div.tab:eq(0)').show();});
	$('.tabs ul').each(function() {$(this).find('li:eq(0)').addClass('active');});

	$('.tabs ul li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var currentTab = $('a', this).attr('href');
		$(this).parent().parent().find('.tab').hide();
		$(currentTab).show();
		return false;
	});

	$(".tabsjqui").tabs();
	$('.tabsjquistep').tabs();
		
		var $tabs = $('.tabsjquistep').tabs();

        $(".tabsjquistep .ui-tabs-panel").each(function(i){

          var totalSize = $(".tabsjquistep .ui-tabs-panel").size() - 1;
		
		  $(this).append('<div class="clear">&nbsp;</div>');
		
		  if (i != 0) {
              prev = i;
                  $(this).append("<a href='#' class='btn stepprev red mt15' rel='" + prev + "'>&#171; Prev Page</a>");
          }
          if (i != totalSize) {
              next = i + 2;
                  $(this).append("<a href='#' class='btn stepnext green mt15' rel='" + next + "'>Next Page &#187;</a>");
          }
		$(this).append('<div class="clear">&nbsp;</div>');
          

        });

        $('.btn.stepprev, .btn.stepnext').click(function() {
           $tabs.tabs('select', $(this).attr("rel"));
           return false;
       });

	// Accordions and collapsible

	$('.acc_content:eq(0)').show();
	$('.acc_heading').click(function() {
		$(this).next('.acc_content').slideToggle(500).siblings('.acc_content').slideUp('normal');
		$(this).siblings('.acc_heading').removeClass('active');
	});
	if($.fn.collapsible) {
	$(".coll_heading").collapsible({
		defaultOpen: 'opened',
		cookieName: 'collapsible',
		cssOpen: 'open',
		cssClose: 'close',
		speed: 300
	});
	}

	function ha_openMenus(ha_open) {
		$(ha_open).children("ul").show();
		$(ha_open).children("span").addClass("opened");
	}
	ha_openMenus('.box.menu ul li.hasul.opened');

	$(".box.menu ul li.hasul span").click(function() {
		$(this).parent().children("ul").slideToggle();
		$(this).toggleClass('opened');
		$(this).parent().toggleClass("opened");
	});


	$(".accjqui").accordion();

	// Progress bar
	$(".progressbar").progressbar();
	$(".progressbarwithvalue").progressbar({value: 55});
	var pGress = setInterval(function() {
        var pVal = $('#progressbarmoving').progressbar('option', 'value');
        var pCnt = !isNaN(pVal) ? (pVal + 1) : 1;
        if (pCnt > 100) {
            clearInterval(pGress);
        } else {
            $('#progressbarmoving').progressbar({value: pCnt});
        }
   	 },10);

	// Datepicker
	$( ".datepicker" ).datepicker();

	// Dialog
	$( "#dialog" ).dialog({
			autoOpen: false,
			show: "fade",
			hide: "fade"
		});

		$( "#opener" ).click(function() {
			$( "#dialog" ).dialog( "open" );
			return false;
		});

	$( "#dialog_overlay" ).dialog({
			autoOpen: false,
			modal: true,
			show: "fade",
			hide: "fade"
		});

		$( "#opener_overlay" ).click(function() {
			$( "#dialog_overlay" ).dialog( "open" );
			return false;
		});

	// Slider
	$( ".slider" ).slider();
	$( ".slider_increments" ).slider({
			value:100,
			min: 0,
			max: 500,
			step: 50,
			slide: function( event, ui ) {
				$( "#amount_increments" ).val( "$" + ui.value );
			}
		});
		$( "#amount_increments" ).val( "$" + $( ".slider_increments" ).slider( "value" ) );
	$( ".slider_range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount_range" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount_range" ).val( "$" + $( ".slider_range" ).slider( "values", 0 ) +
			" - $" + $( ".slider_range" ).slider( "values", 1 ) );
	$( ".slider_range_min" ).slider({
			range: "min",
			value: 37,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$( "#amount_range_min" ).val( "$" + ui.value );
			}
		});
		$( "#amount_range_min" ).val( "$" + $( ".slider_range_min" ).slider( "value" ) );
	$( ".slider_range_max" ).slider({
			range: "max",
			min: 1,
			max: 10,
			value: 2,
			slide: function( event, ui ) {
				$( "#amount_range_max" ).val( ui.value );
			}
		});
		$( "#amount_range_max" ).val( $( ".slider_range_max" ).slider( "value" ) );
	$( "#eq > span" ).each(function() {
			// read initial values from markup and remove that
			var value = parseInt( $( this ).text(), 10 );
			$( this ).empty().slider({
				value: value,
				range: "min",
				animate: true,
				orientation: "vertical"
			});
		});

   	// Autocomplete
   	var availableTags = [
			"ActionScript",
			"AppleScript",
			"Asp",
			"BASIC",
			"C",
			"C++",
			"Clojure",
			"COBOL",
			"ColdFusion",
			"Erlang",
			"Fortran",
			"Groovy",
			"Haskell",
			"Java",
			"JavaScript",
			"Lisp",
			"Perl",
			"PHP",
			"Python",
			"Ruby",
			"Scala",
			"Scheme"
		];
		$( "#tags" ).autocomplete({
			source: availableTags
		});

	// Go to top link
	$('#top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	// Autofocus
	$('.formfocus:first').focus();

	// // Tipsy configuration
	// if ($.fn.tipsy) {
	// $('.tip').tipsy({gravity: $.fn.tipsy.autoNS});
	// $('.tipRight').tipsy({gravity: 'w'});
	// $('.tipLeft').tipsy({gravity: 'e'});
	// $('.tipTop').tipsy({gravity: 's'});
	// $('.tipBottom').tipsy({gravity: 'n'});
	// $('#tipRight').tipsy({gravity: 'w'});
	// $('#tipLeft').tipsy({gravity: 'e'});
	// $('#tipTop').tipsy({gravity: 's'});
	// $('#tipBottom').tipsy({gravity: 'n'});
	// }

	// Autoresize 
	if ($.fn.autoResize) {
	$('textarea.resize').autoResize({extraSpace: 10});
	}

	// Autotab config
	if ($.fn.autotab_filter) {
	$('.atab_numbers li input').autotab_magic().autotab_filter('numeric');
	$('.atab_letters li input').autotab_magic().autotab_filter('text');
	$('.atab_alpha li input').autotab_magic().autotab_filter('alpha');
	$('.atab_customOne li input').autotab_magic().autotab_filter({format: 'custom', pattern: '[^a]'});
	$('.atab_uppercase li input').autotab_magic().autotab_filter({uppercase: 'true'});
	$('.atab_lowercase li input').autotab_magic().autotab_filter({lowercase: 'true'});
	$('.atab_nospace li input').autotab_magic().autotab_filter({nospace: 'true'});
	}

	// Uniform.js
	if ($.fn.uniform) {
	$("select.regular, input:checkbox, input:radio, input.regularfile").uniform();
	}

	// UI Multiselect
	if ($.fn.multiselect) {
	$("select.multiple").multiselect();
	}
	// UI Spinner
	if ($.fn.spinner) {
	var itemList = [
		{url: "#", title: "Sample One"},
		{url: "#", title: "Sample Two"},
		{url: "#", title: "Sample Three"},
		{url: "#", title: "Sample Four"},
		{url: "#", title: "Sample Five"}
	];

	var opts = {
		's1': {decimals:2},
		's2': {stepping: 0.25},
		's3': {currency: '$'},
		's4': {},
		's5': {
			//
			// Two methods of adding external items to the spinner
			//
			// method 1: on initalisation call the add method directly and format html manually
			init: function(e, ui) {
				for (var i=0; i<itemList.length; i++) {
					ui.add('<a href="'+ itemList[i].url +'" target="_blank">'+ itemList[i].title +'</a>');
				}
			},

			// method 2: use the format and items options in combination
			format: '<a href="%(url)" target="_blank">%(title)</a>',
			items: itemList
		}
	};

	for (var n in opts)
		$("#"+n).spinner(opts[n]);

	$("button").click(function(e){
		var ns = $(this).attr('id').match(/(s\d)\-(\w+)$/);
		if (ns != null)
			$('#'+ns[1]).spinner( (ns[2] == 'create') ? opts[ns[1]] : ns[2]);
	});

	}

	// Hider

	$(".hider").click(function() {
		$(this).fadeOut(500);
		$(this).closest(".notification").fadeOut(500);
	})

	// FullCalendar setup
	if ($.fn.fullCalendar) {
		
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
	
		/* initialize the external events
		-----------------------------------------------------------------*/
	
		$('#external-events div.external-event').each(function() {
		
			// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
			// it doesn't need to have a start or end
			var eventObject = {
				title: $.trim($(this).text()) // use the element's text as the event title
			};
			
			// store the Event Object in the DOM element so we can get to it later
			$(this).data('eventObject', eventObject);
			
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
			
		});
	
	
		/* initialize the calendar
		-----------------------------------------------------------------*/
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function(date, allDay) { // this function is called when something is dropped
			
				// retrieve the dropped element's stored Event Object
				var originalEventObject = $(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = $.extend({}, originalEventObject);
				
				// assign it the date that was reported
				copiedEventObject.start = date;
				copiedEventObject.allDay = allDay;
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
				
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
				
			}
		});	
	}

	// Fancybox
	if ($.fn.fancybox) {
		$("a.fancybox").fancybox();
	}

	// Breadcrumbs
	if ($.fn.jBreadCrumb) {
	$(".jBreadcrumb").jBreadCrumb();
	}

	// jGrowl
	if ($.fn.jGrowl) {
		// This value can be true, false or a function to be used as a callback when the closer is clciked
				$.jGrowl.defaults.closer = function() {
					console.log("Closing everything!", this);
				};
				
				// A callback for logging notifications.
				$.jGrowl.defaults.log = function(e,m,o) {
					$('#logs').append("<div><strong>#" + $(e).attr('id') + "</strong> <em>" + (new Date()).getTime() + "</em>: " + m + " (" + o.theme + ")</div>")
				}				
				
				$.jGrowl("Testing jGrowl. Hello world!", {position: 'bottom-right'});
				$.jGrowl("This notification will live a little longer.", { life: 2000 });
				$.jGrowl("Sticky notification with a header", { header: 'A Header', sticky: true });
				

				$.jGrowl("This message will not open because we have a callback that returns false.", {
					beforeOpen: function() {
						console.log("Going to open a notification, but not really...");
					},
					open: function() {
						return false;
					}
				});

				$.jGrowl.defaults.closerTemplate = '<div>hide everything</div>';
	
	}

	// WYSIWYG
	if($.fn.wysiwyg) {
	$('.editor').wysiwyg();
	}

	// This is DataTables initialization
		if ($.fn.dataTable) {
			
			$('#tabled a.delete').click(function() {
				$(this).parents('tr').remove();
			});
						
			// Selecting a row highlights it
			 $('#tabled tr td input:checkbox').click(function(event) {
				  $(this).parents('tr').toggleClass('row_selected');
			});
			
			// Select all checkboxes, thanks to Bill Beckelman
			$("#tabled thead tr th:first input:checkbox").click(function() {
				var checkedStatus = this.checked;
				$("#tabled tbody tr td:first-child input:checkbox").each(function() {
					this.checked = checkedStatus;
						if (checkedStatus == this.checked) {
							$(this).parents('tr').removeClass('row_selected');
							$(this).closest('.checker span').removeClass('checked');
						}
						if (this.checked) {
							$(this).parents('tr').addClass('row_selected');
							$(this).closest('.checker span').addClass('checked');
						}
				});
			});
			
			$("#tabled tr td:odd").addClass("odd");
			$("#tabled tr td:even").addClass("even");
			
			/* Init DataTables, thanks to Datatable forums */
			var oTable = $('#tabled').dataTable({
				"sPaginationType": "full_numbers",
				"iDisplayLength": 25,
				"bFilter": true,
				"bLengthChange": true,
				"bSort": true,
				"sDom": 'rtiplf',
				"aoColumnDefs": [ { "bSortable": false, "sClass": "readonly", "aTargets": [ 'tview', 'tedit', 'tdelete', 'check' ] }]
				
			});

			/* Ajax connector */
			/*$('td:not(.readonly)', oTable.fnGetNodes()).editable( '../examples_support/editable_ajax.php', {
						"callback": function( sValue, y ) {
							var aPos = oTable.fnGetPosition( this );
							oTable.fnUpdate( sValue, aPos[0], aPos[1] );
						},
						"submitdata": function ( value, settings ) {
							return {
								"row_id": this.parentNode.getAttribute('id'),
								"column": oTable.fnGetPosition( this )[2]
							};
						},
					"height": "14px"
					});*/

		}

	// Elfinder
		if($.fn.elfinder) {
		var f = $('#finder').elfinder({
				url : 'filemanager/connectors/php/connector.php',
				lang : 'en',
				docked : true
			})
			// window.console.log(f)
			$('#close,#open,#dock,#undock').click(function() {
				$('#finder').elfinder($(this).attr('id'));
			})	
		}

	// jAlert
	if($.alerts) {
		$(".alert_button").click( function() {
						jAlert('This is a custom alert box', 'Alert Dialog');
					});
		$(".alert_button_confirm").click( function() {			
			jConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
			    jAlert('Confirmed: ' + r, 'Confirmation Results');
			});
		});
		$(".alert_button_prompt").click( function() {			
			jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
		    if( r ) alert('You entered ' + r);
			});
		});
	}

	// Color picker
	if($.fn.miniColors) {
		$(".colors").miniColors({
						
						change: function(hex, rgb) {
							$("#console").prepend('HEX: ' + hex + ' (RGB: ' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')<br />');
						}
						
		});
	}

	// Validation engine
	if($.fn.validationEngine) {
		$("#validation").validationEngine();
	}

	// Slidernav 
	if($.fn.sliderNav) {
	$('.slidernav').sliderNav();
	}

	// Fixing padding in inputs and textareas
	$('textarea').css("width","100%").css("width","-=22");
	$('input.text').css("width","100%").css("width","-=22");

	var ha_window = $(window).width();
	if(ha_window < 800) {
			$('header').addClass('mobile');
		}
		else {
			$('header').removeClass('mobile');
		}

	$(window).resize(function(){
		if(ha_window < 800) {
			$('header').addClass('mobile');
		}
		else {
			$('header').removeClass('mobile');
		}
	});
	// Something else? :)
});





