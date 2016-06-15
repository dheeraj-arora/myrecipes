
/************ Document Ready ***********/
$(document).ready(function() {

var Recipe = function() {

	    /*******Variables to hold array of receipe list and ingredient list *************/
            var recipes= [],
            ingredients= [],


	    /**
		* Function to get JSON response from API and create a list of receipes with Name and Image
		* 
		* @return ""
	    */


            getRecipesList= function(){
              $("#trendingrecipes").html('');
	      ingredients= [];
	      recipes= [];
              $.getJSON( "api_recp.json", function( data ) {
                $.each( data, function(op ,recp) {
                  recipes.push( "<li ><div class='thumbwrapper'><img src= '" + recp.imageURL + "' alt='"+recp.name+"' class='thumb'></div><div class='recpdetails'><h3>  " + recp.name + "</h3><span>"+recp.type+"</span></div></li>" );
                });
 
                $( "<ul/>", {
                  "class": "recipelist",
                  html: recipes.join( "" )
                }).appendTo( "#trendingrecipes" );
              });
            },


	    /**
		* Function to get JSON response from API and create a list of ingredients with checkboxes
		* 
		* @return ""
	    */

            getIngredients= function(){
              $.getJSON( "api_ingr.json", function( data ) {
                $.each( data.ingredients, function(op ,ing) {
                  ingredients.push( "<li class='col-3'><label for='"+ing+"'><input type='checkbox' class='chkbox' name='chkbox' id='"+ing+"' alt='"+ing+"' value='"+ing+"'>"+ing+"</label></li>" );
                });
                $( "<ul/>", {
                  "class": "ingrlist",
                  html: ingredients.join( "" )
                  }).appendTo( "#ingredients");
              });
            },


            /**
                * Function to initate all UI bindings and response handling
                * Clear All for ingredients 
		* Toggle visibility for Ingredients
		* on click of ingredients check boxes
                * @return ""
            */

            bindUIActions= function(){

	      /*************** Toggle the Ingredients section ***************/

              $("#ingrwrapper").click(function(){
                $("#ingredients").toggle();
              });

	      /*************** Toggle Ingrediants section ends here *********/


	      /*************** Clear All Code begins ***************/

	      $(".clearall").click(function(){
		$('input:checkbox').removeAttr('checked');
		getRecipesList();
              });

	      /*************** Clear All Code ends ***************/

              $("#ingredients").on("click",".chkbox",function(){
                var myVal = $(this).val();
                var myIngr = [];
                var recipes = [];
                $("input:checkbox[name=chkbox]:checked").each(function(){
                  myIngr.push($(this).val());
                });

                var selectedIngr = JSON.stringify(myIngr);
                $.getJSON( "api_recp_selected.json?callback=", selectedIngr, function (data) {
                  $("#trendingrecipes").html('');
                  $.each( data, function(op ,recp) {
			recipes.push( "<li ><div class='thumbwrapper'><img src= '" + recp.imageURL + "' alt='"+recp.name+"' class='thumb'></div><div class='recpdetails'><h3>  " + recp.name + "</h3><span>"+recp.type+"</span></div></li>" );
                  });
    

                  $( "<ul/>", {
                    "class": "recipelist",
                    html: recipes.join( "" )
                  }).appendTo( "#trendingrecipes" );
                });
              });
            },

            /**
                * Function to initiate flow of the application
                *
                * @return ""
            */

            init= function(){
                getRecipesList();
                getIngredients();
                bindUIActions();
            }


            /**
                * Revealing method pattern
                *
                * 
            */

            return {
              initMethod: init
            }
}

  var recipe = new Recipe();
  recipe.initMethod();
});
