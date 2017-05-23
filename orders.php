<?php


// turn off the WSDL cache
ini_set('soap.wsdl_cache_enabled', '0');
$vLocation = 'http://petprofi.lh/PAF/webservice.php?aWebservice=PetProfi_Orders';

try {
 $vSoapClient = new SoapClient('http://petprofi.lh/files/public/wsdl/PetProfi_Orders.wsdl',
  array(
   "location" => $vLocation,
   "trace"=>1, "exceptions"=>1
   )
  );

 $vFunctions = $vSoapClient->__getFunctions();

 echo "<pre>";
 var_dump($vFunctions);
 echo "</pre>";

 $vOrderObject = $vSoapClient->__soapCall( 'getOrder', array("5271876"));

 echo "<pre>";
 var_dump($vOrderObject);
 echo "</pre>";
 $vOrderObject->positions[0]->amountDelivered = 0;
 $Position = new Position();
  $Position->positionNr = 20;
  $Position->articleNr = '5066';
  $Position->ean = '5066';
  $Position->articleName = 'KONG!!';
  $Position->vbePerVse = '1';
  $Position->packSize = '1St.';
  $Position->additionalAmountWithNoCosts = 0;
  $Position->price = 0;
  $Position->allAroundPrice = 0;
  $Position->amount = 6;
  $Position->amountDelivered = 6;
  $Position->deliveryPrice = 0;
  $Position->deliveryAllAroundPrice = 0;
  $Position->vseText = null;
  $Position->rebatePercent = 0;


 $vOrderObject->positions[] = $Position;

 echo "<pre>";
 var_dump($vOrderObject);
 echo "</pre>";
 $vSoapClient->__soapCall( 'sendOrder', array($vOrderObject));
}catch (SoapFault $vException) {
 echo "Error:<br />" . nl2br($vException->faultcode) . '<br /><br />Error Details:<br />'. nl2br($vException->faultstring) . '<br />';

 echo("<br />REQUEST :<br />" . htmlspecialchars($vSoapClient->__getLastRequest()) . "<br />");
 echo("<br />RESPONSE:<br />" .htmlspecialchars($vSoapClient->__getLastResponse()) . "<br />");
}

class Order {
	public $orderNr;
	public $invoiceNr;
	public $creationSystemUser;
	public $customerNrMars;
	public $customerNrLzl;
	public $customerNr;
	public $desiredDeliveryDate;
	public $deliveryDate;
	public $orderDate;
	public $invoiceDate;
	public $loyaltyAccount;
	public $deliveryText;
	public $invoiceText;
	public $status;
	public $deliveryFirstname;
	public $deliveryLastname;
	public $deliveryCompany;
	public $deliveryZipCode;
	public $deliveryCityName;
	public $deliveryStreet;
	public $invoiceFirstname;
	public $invoiceLastname;
	public $invoiceCompany;
	public $invoiceZipCode;
	public $invoiceCityName;
	public $invoiceStreet;
	public $invoicePhone;
	public $invoiceFax;
	public $freightCosts;
	public $paymentMethod;
	public $priceBrutto;
	public $changeDate;
	public $rebatePercent;
	public $positions = array();
}

class Position {
	public $articleNr;
	public $positionNr;
	public $ean;
	public $articleName;
	public $vbePerVse;
	public $packSize;
	public $amount;
	public $price;
	public $allAroundPrice;
	public $amountDelivered;
	public $deliveryPrice;
	public $deliveryAllAroundPrice;
	public $vseText;
	public $rebatePercent;
	public $additionalAmountWithNoCosts;
}

?>
