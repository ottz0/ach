<?PHP
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	$response = file_get_contents("php://input");
	$postData= 'https://book.api.ean.com/ean-services/rs/hotel/v3/res';

	
	//Form Search session
    $hotelId = '106347';
    $arrivalDate = '7/12/2016';
    $departureDate = '7/14/2016';
    $supplierType = 'E';
    $room1 = '2,5,7';
    
	//Booking button
    $bedTypeId = '23';
    $rateKey = 'af00b688-acf4-409e-8bdc-fcfc3d1cb80c';
    $roomTypeCode = '198058';
    $rateCode = '484072';
    $chargeableRate = '231.18';

    ///Booking form
    $room1FirstName = 'test';
	$room1LastName = 'testers';
    $smokingPreference = 'NS';
    $email = 'test@travelnow.com';
    $homePhone = '2145370159';
    $workPhone = '2145370159';
    $address1='travelnow';
	$city='Seattle';
	$stateProvinceCode='WA';
	$countryCode='US';
	$postalCode='98004';
    
    //Credit card
	$firstName = 'test booking';
    $lastName = 'test booking';
    $creditCardType='CA';
	$creditCardNumber='5401999999999999';
	$creditCardIdentifier='123';
	$creditCardExpirationMonth='11';
	$creditCardExpirationYear='2016';

    //Ean constants
    $CID = '397896'; // 397896 for production
    $API_KEY = 'k5drjfmwg6j6fgbadhccb9s5';
   	$API_EXPERIENCE = 'PARTNER_WEBSITE';
   	$MINOR_REV = '30';
	$LOCAL = 'en_US';
	$CURRENCY_CODE = 'AUD';

	//Ean required
	$userAgent = urlencode($_SERVER['HTTP_USER_AGENT']);
    $ip = $_SERVER['REMOTE_ADDR'];


	//use latest minorRev 30
	//$url = $postData;
	$url = 'apiKey='.$API_KEY;
	$url .= '&minorRev='.$MINOR_REV;
	$url .= '&cid='.$CID;
	$url .= '&locale='.$LOCAL;
	$url .= '&apiExperience='.$API_EXPERIENCE;
	$url .= '&currencyCode='.$CURRENCY_CODE;


	$url .= '&hotelId='.$hotelId;
	$url .= '&arrivalDate='.$arrivalDate;
	$url .= '&departureDate='.$departureDate;
	$url .= '&supplierType='.$supplierType;
	$url .= '&rateKey='.$rateKey;
	$url .= '&roomTypeCode='.$roomTypeCode;
	$url .= '&rateCode='.$rateCode;
	$url .= '&chargeableRate='.$chargeableRate;
	$url .= '&room1='.$room1;
	$url .= '&room1FirstName='.$room1FirstName;
	$url .= '&room1LastName='.$room1LastName;


	$url .= '&bedTypeId='.$bedTypeId;
	$url .= '&smokingPreference='.$smokingPreference;
	$url .= '&email='.$email;
	$url .= '&homePhone='.$homePhone;
	$url .= '&workPhone='.$workPhone;
	$url .= '&address1='.$address1;
	$url .= '&city='.$city;
	$url .= '&stateProvinceCode='.$stateProvinceCode;
	$url .= '&countryCode='.$countryCode;
	$url .= '&postalCode='.$postalCode;

	
	//Credit card
	$url .= '&firstName='.$firstName;
	$url .= '&lastName='.$lastName;
	$url .= '&creditCardType='.$creditCardType;
	$url .= '&creditCardNumber='.$creditCardNumber;
	$url .= '&creditCardIdentifier='.$creditCardIdentifier;
	$url .= '&creditCardExpirationMonth='.$creditCardExpirationMonth;
	$url .= '&creditCardExpirationYear='.$creditCardExpirationYear;
	

	$url .= '&customerIpAddress='.$ip;
	$url .= '&customerUserAgent='.$userAgent;


	$ch = curl_init();
	
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
	curl_setopt( $ch, CURLOPT_URL, $postData );
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $url);
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

