// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"ArmRouteTbl\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n      \"etag\": \"W/\\\"8a7940f9-31c2-4997-9192-13ad1dcd3c3e\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c354ee4-36a7-4f17-8bbf-55dc0cd8e48d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '63188608-64db-4697-9a92-eeb6fa11cf7e',
  'x-ms-routing-request-id': 'WESTUS:20150723T230726Z:63188608-64db-4697-9a92-eeb6fa11cf7e',
  date: 'Thu, 23 Jul 2015 23:07:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"ArmRouteTbl\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n      \"etag\": \"W/\\\"8a7940f9-31c2-4997-9192-13ad1dcd3c3e\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c354ee4-36a7-4f17-8bbf-55dc0cd8e48d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '63188608-64db-4697-9a92-eeb6fa11cf7e',
  'x-ms-routing-request-id': 'WESTUS:20150723T230726Z:63188608-64db-4697-9a92-eeb6fa11cf7e',
  date: 'Thu, 23 Jul 2015 23:07:26 GMT',
  connection: 'close' });
 return result; }]];