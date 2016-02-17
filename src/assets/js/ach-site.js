
    /* 
		Change chevron in seach bar
	*/
    $(document).on("click", "#service-list", function() {
  		$('span#ach-tgl').toggleClass('octicon octicon-chevron-down octicon octicon-chevron-up');
	});

    /* 
        Change chevron in seach bar
    */
    $(document).on("click", ".roominfo", function() {
        $('span.ach-rmin').toggleClass('octicon octicon-chevron-down octicon octicon-chevron-up');
    });
     /* 
        Change chevron in Booking details
    */
    $(document).on("click", "#room-details", function() {
        $('span#b-detail').toggleClass('octicon octicon-chevron-down octicon octicon-chevron-up');
    });

        



    /* 
        Bootstrap Datepicker
    */

    $(document).on("mousedown", ".datepicker", function() {

        var nowTemp = new Date();
        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

        var checkin = $('#arrival-date').datepicker({
            onRender: function(date) {
            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        }
        }).on('changeDate', function(ev) {
            if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
            $('#departure-date')[0].focus();
        }).data('datepicker');
        var checkout = $('#departure-date').datepicker({
            onRender: function(date) {
            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
        }).on('changeDate', function(ev) {
            checkout.hide();
        }).data('datepicker');
    
    });



























