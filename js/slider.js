$( function() {
    $( ".year_select" ).slider({
      range: true,
      min: 2000,
      max: 2020,
      values: [ 2005, 2012 ],
      slide: function(event, ui) {
        $( ".foo1" ).text(ui.values[0]);
        $( ".foo2" ).text(ui.values[1]);
      }
    });
    $( ".ui-slider-handle" ).first().append('<span class="foo1"></span>');
    $(".foo1").html($( ".year_select" ).slider( "values", 0));
    $( ".ui-slider-handle" ).last().append('<span class="foo2"></span>');
    $(".foo2").html($( ".year_select" ).slider( "values", 1));
  });

  
  
  // jQuery("#slider").slider({
  //   min: 2000,
  //   max: 2020,
  //   values: [2008,2016],
  //   range: true,
  //   stop: function(event, ui) {
  //     jQuery("input#minYear").val(jQuery("#slider").slider("values",0));
  //     jQuery("input#maxYear").val(jQuery("#slider").slider("values",1));
  //     },
  //     slide: function(event, ui){
  //     jQuery("input#minYear").val(jQuery("#slider").slider("values",0));
  //     jQuery("input#maxYear").val(jQuery("#slider").slider("values",1));
  //     }
  // });

  // jQuery("input#minYear").change(function(){
  //   var value1=jQuery("input#minYear").val();
  //   var value2=jQuery("input#maxYear").val();
  
  //     if(parseInt(value1) > parseInt(value2)){
  //     value1 = value2;
  //     jQuery("input#minYear").val(value1);
  //   }
  //   jQuery("#slider").slider("values",0,value1);	
  // });
  
    
  // jQuery("input#maxYear").change(function(){
  //   var value1=jQuery("input#minYear").val();
  //   var value2=jQuery("input#maxYear").val();
    
  //   if (value2 > 2020) { value2 = 2020; jQuery("input#maxYear").val(2020)}
  
  //   if(parseInt(value1) > parseInt(value2)){
  //     value2 = value1;
  //     jQuery("input#maxYear").val(value2);
  //   }
  //   jQuery("#slider").slider("values",1,value2);
  // });