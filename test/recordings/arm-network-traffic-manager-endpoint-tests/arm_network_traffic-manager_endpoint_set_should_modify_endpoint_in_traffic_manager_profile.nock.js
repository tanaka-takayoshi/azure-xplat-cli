// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-enpoint\",\"name\":\"test-enpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":100,\"priority\":200,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '487',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '13cab8f5-c66f-4f21-8d9b-fc29d91ed7fe',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8e1070c5-7ec8-48a5-aee0-bdfe8f54a7fe',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093455Z:8e1070c5-7ec8-48a5-aee0-bdfe8f54a7fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:34:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-enpoint\",\"name\":\"test-enpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"test-profile-dns.azure.com\",\"weight\":100,\"priority\":200,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '487',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '13cab8f5-c66f-4f21-8d9b-fc29d91ed7fe',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8e1070c5-7ec8-48a5-aee0-bdfe8f54a7fe',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093455Z:8e1070c5-7ec8-48a5-aee0-bdfe8f54a7fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:34:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-enpoint\",\"name\":\"test-enpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"foobartest-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '486',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '44933c66-20ce-434b-bf80-a590f431c698',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '2de7772d-94f2-4017-8bf5-fef2508f4c56',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093456Z:2de7772d-94f2-4017-8bf5-fef2508f4c56',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:34:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-enpoint\",\"name\":\"test-enpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"foobartest-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '486',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '44933c66-20ce-434b-bf80-a590f431c698',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '2de7772d-94f2-4017-8bf5-fef2508f4c56',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093456Z:2de7772d-94f2-4017-8bf5-fef2508f4c56',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:34:56 GMT',
  connection: 'close' });
 return result; }]];