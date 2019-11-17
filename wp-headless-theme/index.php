<!-- 
/**
 * Redirect individual post and pages to the REST API endpoint
 *
 * @package wp-headless
 */
// wp_die( "There's always money in the banana stand. 🍌" );
 -->


 	<script src="https://unpkg.com/@ungap/url-search-params@0.1.2/min.js"></script>
	<script>
	var url = "https://mildronize.com";
	var searchParams = new URLSearchParams(window.location.search);
	if(searchParams.has('p')){
		console.log(searchParams.get('p'));  
		window.location.href = url + "/_preview?id=" + searchParams.get('p');
	}else {
		window.location.href = url;
	}
	</script>