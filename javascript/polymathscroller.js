// JavaScript Document
$(document).ready(function() {
	$(".btn").click(function() {
		var elementClicked = $(this).attr("href");
   		var destination = $(elementClicked).offset().top - 71;
	
	   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 'slow' ,'easeOutQuad' ,function() {});
   		return true;
	});
	

	//Highlight the selected menu item
	$('.anchor').waypoint(function(event, direction) 
		{
			//Deactivate selected menu link
			$(".link-active").removeClass( "link-active" );
			var splitURL = document.URL.split( "#" );
			
			if (direction === 'down')
			{
			  // do this on the way down
				$( "a[href=#" + $( this ).attr("id") + "]").addClass( "link-active" );
			}
			else {
				// do this on the way back up through the waypoint
				var prevSection = $( this ).prevAll( "a.anchor" ).first();
				$( "a[href=#" + prevSection.attr( "id" ) + "]" ).addClass( "link-active" );
			}
		}, {
		   offset: 200
	});

});
  