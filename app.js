angular.module('app', [])
  .controller('pricing', function($scope) {
    $scope.title = "Titled";
    $scope.price = 1.00;
    $scope.image = 'test.png';
    $scope.buy = function() {
      console.log('Buy ', $scope.title);
    }

  });

/*
Sample Amazon url:

 https://www.amazon.com/
 Nostalgia-Electrics-HDT600RETRORED-Pop-Up-Toaster/
 dp/B005Q8X6IO/
 ref=sr_1_1?ie=UTF8&qid=1465872456&sr=8-1&keywords=hot+dog

Template url:

http://webservices.amazon.com/onca/xml?
Service=AWSECommerceService
&Operation=ItemLookup
&ResponseGroup=Offers
&IdType=ASIN
&ItemId=B005Q8X6IO
&AssociateTag=[Your_AssociateTag]
&AWSAccessKeyId=[]
&Timestamp=[YYYY-MM-DDThh:mm:ssZ]
&Signature=[Request_Signature]
 */