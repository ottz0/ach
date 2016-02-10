
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






    /* 
        Copies child ages in search bar
    */
    // $(document).on("change", "#children", function() {
    //     console.log('hi');

    //         var $div = $('.add-wrap'); //Select the appending div

    //         var $selectWrapper = $(             
    //                 '<div id="nbv" class="pull-left"><label class="ach-search">Child Age</label>'
    //             );//Create a template
                
    //         var $select = $(                
    //                 '<select/>', {name : 'children', class:'form-control'}
    //             ); //Create a template
                
    //          var index = this.selectedIndex; //get the number of select
            
    //         $div.empty(); //Erase old select
            
    //         if(!index) return; //Stop the code if the number of child is 0
            
    //         for(var i=0; i<14; i++){ //Maximum child age
    //             var $option = $('<option/>', {text : i, value : i});//Create the option element
    //             $select.append($option);//Append to the template
    //         }
            
    //         for(var u=0; u<index; u++){//Get the number of child
                
    //             var $clone = $select.clone(); //Clone the template
    //             $clone.attr('id', 'child-'+(u+1)+'-age').appendTo($div); //Change its id and append to the container
            
    //             var $cloneWrapper = $selectWrapper.clone(); //Clone the template
    //             $cloneWrapper.wrap($div); //Change its id and append to the container


    //         }        

    // }).trigger('change');



























