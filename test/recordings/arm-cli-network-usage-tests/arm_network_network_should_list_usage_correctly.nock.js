// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2ee83a5c-bad2-4213-85d3-8c68a80fc359',
    name: 'Windows Azure MSDN - Visual Studio Ultimate',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'eed40b28-28f0-4583-bece-05a89fb86e85',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"currentValue\": 8.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/VirtualNetworks\",\r\n      \"limit\": 50.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Virtual Networks\",\r\n        \"value\": \"VirtualNetworks\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/NetworkWatchers\",\r\n      \"limit\": 1.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Watchers\",\r\n        \"value\": \"NetworkWatchers\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/StaticPublicIPAddresses\",\r\n      \"limit\": 20.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Static Public IP Addresses\",\r\n        \"value\": \"StaticPublicIPAddresses\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 6.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/NetworkSecurityGroups\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Security Groups\",\r\n        \"value\": \"NetworkSecurityGroups\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 7.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/PublicIPAddresses\",\r\n      \"limit\": 60.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Public IP Addresses\",\r\n        \"value\": \"PublicIPAddresses\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 8.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/NetworkInterfaces\",\r\n      \"limit\": 300.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Interfaces\",\r\n        \"value\": \"NetworkInterfaces\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/LoadBalancers\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Load Balancers\",\r\n        \"value\": \"LoadBalancers\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/ApplicationGateways\",\r\n      \"limit\": 50.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Application Gateways\",\r\n        \"value\": \"ApplicationGateways\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/RouteTables\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Route Tables\",\r\n        \"value\": \"RouteTables\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3083',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c6d32fa-cad7-4fa7-b050-68c91860c887',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '56fc76df-f8e9-4a43-bd05-091ab935cc0a',
  'x-ms-routing-request-id': 'WESTUS:20160529T090231Z:56fc76df-f8e9-4a43-bd05-091ab935cc0a',
  date: 'Sun, 29 May 2016 09:02:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"currentValue\": 8.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/VirtualNetworks\",\r\n      \"limit\": 50.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Virtual Networks\",\r\n        \"value\": \"VirtualNetworks\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/NetworkWatchers\",\r\n      \"limit\": 1.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Watchers\",\r\n        \"value\": \"NetworkWatchers\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/StaticPublicIPAddresses\",\r\n      \"limit\": 20.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Static Public IP Addresses\",\r\n        \"value\": \"StaticPublicIPAddresses\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 6.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/NetworkSecurityGroups\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Security Groups\",\r\n        \"value\": \"NetworkSecurityGroups\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 7.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/PublicIPAddresses\",\r\n      \"limit\": 60.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Public IP Addresses\",\r\n        \"value\": \"PublicIPAddresses\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 8.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/NetworkInterfaces\",\r\n      \"limit\": 300.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Interfaces\",\r\n        \"value\": \"NetworkInterfaces\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/LoadBalancers\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Load Balancers\",\r\n        \"value\": \"LoadBalancers\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/ApplicationGateways\",\r\n      \"limit\": 50.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Application Gateways\",\r\n        \"value\": \"ApplicationGateways\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Network/locations/westus/usages/RouteTables\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Route Tables\",\r\n        \"value\": \"RouteTables\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3083',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c6d32fa-cad7-4fa7-b050-68c91860c887',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '56fc76df-f8e9-4a43-bd05-091ab935cc0a',
  'x-ms-routing-request-id': 'WESTUS:20160529T090231Z:56fc76df-f8e9-4a43-bd05-091ab935cc0a',
  date: 'Sun, 29 May 2016 09:02:30 GMT',
  connection: 'close' });
 return result; }]];