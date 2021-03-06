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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '10ef6d01-4307-4747-aa5f-d607899cbe77',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd0ed77f0-ae67-4e90-b0e4-cbb0bf8015c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170809Z:d0ed77f0-ae67-4e90-b0e4-cbb0bf8015c6',
  date: 'Tue, 17 May 2016 17:08:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTstVmssGCreate1093/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/manualupgrade?api-version=2016-03-30', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '10ef6d01-4307-4747-aa5f-d607899cbe77',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd0ed77f0-ae67-4e90-b0e4-cbb0bf8015c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170809Z:d0ed77f0-ae67-4e90-b0e4-cbb0bf8015c6',
  date: 'Tue, 17 May 2016 17:08:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-17T17:08:09.6476414+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"10ef6d01-4307-4747-aa5f-d607899cbe77\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '964c32ab-b72d-4da5-8532-bd4648b31135',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '54b3ae60-78cf-4387-8b66-b67b1ab78b1e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170841Z:54b3ae60-78cf-4387-8b66-b67b1ab78b1e',
  date: 'Tue, 17 May 2016 17:08:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-17T17:08:09.6476414+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"10ef6d01-4307-4747-aa5f-d607899cbe77\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '964c32ab-b72d-4da5-8532-bd4648b31135',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '54b3ae60-78cf-4387-8b66-b67b1ab78b1e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170841Z:54b3ae60-78cf-4387-8b66-b67b1ab78b1e',
  date: 'Tue, 17 May 2016 17:08:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-17T17:08:09.6476414+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"10ef6d01-4307-4747-aa5f-d607899cbe77\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': 'ad136761-80e1-4eba-8e88-7eca9644d058',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '28f3f5b7-e219-4f0d-a159-b8c93d83f3a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170912Z:28f3f5b7-e219-4f0d-a159-b8c93d83f3a0',
  date: 'Tue, 17 May 2016 17:09:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-17T17:08:09.6476414+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"10ef6d01-4307-4747-aa5f-d607899cbe77\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': 'ad136761-80e1-4eba-8e88-7eca9644d058',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '28f3f5b7-e219-4f0d-a159-b8c93d83f3a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170912Z:28f3f5b7-e219-4f0d-a159-b8c93d83f3a0',
  date: 'Tue, 17 May 2016 17:09:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-17T17:08:09.6476414+00:00\",\r\n  \"endTime\": \"2016-05-17T17:09:14.2588886+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"10ef6d01-4307-4747-aa5f-d607899cbe77\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '008bfcd0-668a-413f-8815-006cf07da696',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4b6610eb-87a5-4e1e-acf0-9c9ea55ae2e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170944Z:4b6610eb-87a5-4e1e-acf0-9c9ea55ae2e2',
  date: 'Tue, 17 May 2016 17:09:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/southeastasia/operations/10ef6d01-4307-4747-aa5f-d607899cbe77?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-05-17T17:08:09.6476414+00:00\",\r\n  \"endTime\": \"2016-05-17T17:09:14.2588886+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"10ef6d01-4307-4747-aa5f-d607899cbe77\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131079587639644102',
  'x-ms-request-id': '008bfcd0-668a-413f-8815-006cf07da696',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '4b6610eb-87a5-4e1e-acf0-9c9ea55ae2e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160517T170944Z:4b6610eb-87a5-4e1e-acf0-9c9ea55ae2e2',
  date: 'Tue, 17 May 2016 17:09:43 GMT',
  connection: 'close' });
 return result; }]];