<?PHP

	$postData = file_get_contents("php://input");

    /*
    	Required EAN parameters

    	apiExperience
    	cid
		apiKey
		minorRev
		locale
		currencyCode - only for booking
		
		customerSessionId
		customerIpAddress
		customerUserAgent

	*/

	/* test data hotels
	var data = 'http://api.ean.com/ean-services/rs/hotel/v3/avail?'
                +'hotelId='+hotelId
                +'&arrivalDate='+arrivalDate
                +'&departureDate='+departureDate
                +'&room1='+roomGroup
                +'&includeRoomImages=true'
                +'&customerSessionId='+customerData.customerSessionId
                +'&options=ROOM_TYPES,ROOM_AMENITIES';



	*/
    //$postData="http://api.ean.com/ean-services/rs/hotel/v3/avail?&hotelId=569743&arrivalDate=02/17/2016&departureDate=02/18/2016&room1=2&includeRoomImages=true";


	//Ean requuired
	$userAgent = urlencode($_SERVER['HTTP_USER_AGENT']);
    $ip = $_SERVER['REMOTE_ADDR'];


    //Ean constants
    $CID = '397896'; // 397896 for production
    $API_KEY = 'k5drjfmwg6j6fgbadhccb9s5';
   	$API_EXPERIENCE = 'PARTNER_WEBSITE';
   	$MINOR_REV = '30';
	$LOCAL = 'en_US';
	$CURRENCY_CODE = 'AUD';

	//use latest minorRev 30
	$url = $postData;
	$url .= '&apiKey='.$API_KEY;
	$url .= '&minorRev='.$MINOR_REV;
	$url .= '&cid='.$CID;
	$url .= '&locale='.$LOCAL;
	$url .= '&apiExperience='.$API_EXPERIENCE;
	$url .= '&currencyCode='.$CURRENCY_CODE;
	$url .= '&customerIpAddress='.$ip;
	$url .= '&customerUserAgent='.$userAgent;
	//using the cache returns results much faster
	$url .= '&supplierCacheTolerance=MED_ENHANCED';

	$header[] = "Accept: application/json";
	$header[] = "Accept-Encoding: gzip";
	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_HTTPHEADER, $header );
	curl_setopt($ch,CURLOPT_ENCODING , "gzip");
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
	curl_setopt( $ch, CURLOPT_URL, $url );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );

	$response = curl_exec($ch);
	curl_close($ch);

	echo $response;

?>
<?PHP
	// //use latest minorRev 14
	// $url='http://api.ean.com/ean-services/rs/hotel/v3/list?minorRev=30';
	// $url .= '&apiKey=k5drjfmwg6j6fgbadhccb9s5';
	// $url .= '&cid=55505';
	// $url .= '&locale=en_US&city=Dallas&stateProvinceCode=TX&countryCode=US&numberOfResults=3';
	// $url .= '&searchRadius=50';
	// //using the cache returns results much faster
	// $url .= '&supplierCacheTolerance=MED_ENHANCED';
	// //dates and occupancy
	// $url .='&arrivalDate=09/04/2016&departureDate=09/05/2016&room1=2';
	// $header[] = "Accept: application/json";
	// $header[] = "Accept-Encoding: gzip";
	// $ch = curl_init();
	// curl_setopt( $ch, CURLOPT_HTTPHEADER, $header );
	// curl_setopt($ch,CURLOPT_ENCODING , "gzip");
	// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
	// curl_setopt( $ch, CURLOPT_URL, $url );
	// curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	// $response = json_decode(curl_exec($ch));
	// //$response = curl_exec($ch);

	// var_dump($response);
?>

