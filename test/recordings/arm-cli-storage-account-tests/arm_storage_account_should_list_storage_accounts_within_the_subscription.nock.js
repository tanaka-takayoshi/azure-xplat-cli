// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    registeredResourceNamespaces: ['microsoft.web', 'microsoft.insights'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'GRS';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourcegroups/armclistorageaccount9967?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclistorageaccount9967' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-request-id': '5fa24e3f-291e-4dd6-898e-1471d4af7aa7',
  'x-ms-correlation-request-id': '5fa24e3f-291e-4dd6-898e-1471d4af7aa7',
  'x-ms-routing-request-id': 'JAPANWEST:20150410T062325Z:5fa24e3f-291e-4dd6-898e-1471d4af7aa7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 10 Apr 2015 06:23:24 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourcegroups/armclistorageaccount9967?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageaccount9967\",\"name\":\"armclistorageaccount9967\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': 'f6ec0b0e-fefa-417c-8905-dd4f1292d4e6',
  'x-ms-correlation-request-id': 'f6ec0b0e-fefa-417c-8905-dd4f1292d4e6',
  'x-ms-routing-request-id': 'JAPANWEST:20150410T062326Z:f6ec0b0e-fefa-417c-8905-dd4f1292d4e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 10 Apr 2015 06:23:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageaccount9967/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9039?api-version=2014-12-01-preview', '*')
  .reply(202, "{\"location\":\"West US\",\"properties\":{\"accountType\":\"Standard_GRS\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '66',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/operations/30a2d464-afbd-46fb-ba64-fff444f782e8?monitor=true&api-version=2014-12-01-preview',
  'x-ms-request-id': '30a2d464-afbd-46fb-ba64-fff444f782e8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '491b347f-ae3f-487e-ab69-087451bfeb71',
  'x-ms-routing-request-id': 'JAPANWEST:20150410T062332Z:491b347f-ae3f-487e-ab69-087451bfeb71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 10 Apr 2015 06:23:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/operations/30a2d464-afbd-46fb-ba64-fff444f782e8?monitor=true&api-version=2014-12-01-preview')
  .reply(202, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/operations/30a2d464-afbd-46fb-ba64-fff444f782e8?monitor=true&api-version=2014-12-01-preview',
  'x-ms-request-id': 'e3f430ba-69b8-4ced-a504-44a212de6825',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31993',
  'x-ms-correlation-request-id': '9bbd45a3-c84a-4341-a704-81fc87179954',
  'x-ms-routing-request-id': 'JAPANWEST:20150410T062334Z:9bbd45a3-c84a-4341-a704-81fc87179954',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 10 Apr 2015 06:23:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/providers/Microsoft.Storage/storageAccounts?api-version=2014-12-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageaccount4671/providers/Microsoft.Storage/storageAccounts/armclistorageaccount3930\",\"name\":\"armclistorageaccount3930\",\"location\":\"West US\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_RAGRS\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount3930.blob.core.windows.net/\",\"queue\":\"https://armclistorageaccount3930.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount3930.table.core.windows.net/\"},\"primaryLocation\":\"West US\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"East US\",\"statusOfSecondary\":\"Available\",\"creationTime\":\"2015-04-10T05:51:13.3493019Z\",\"secondaryEndpoints\":{\"blob\":\"https://armclistorageaccount3930-secondary.blob.core.windows.net/\",\"queue\":\"https://armclistorageaccount3930-secondary.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount3930-secondary.table.core.windows.net/\"}}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageaccount548/providers/Microsoft.Storage/storageAccounts/armclistorageaccount3143\",\"name\":\"armclistorageaccount3143\",\"location\":\"West US\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"ResolvingDns\",\"accountType\":\"Standard_GRS\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount3143.blob.core.windows.net/\",\"queue\":\"https://armclistorageaccount3143.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount3143.table.core.windows.net/\"},\"primaryLocation\":\"West US\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"East US\",\"statusOfSecondary\":\"Available\",\"creationTime\":\"2015-04-10T06:23:19.7243115Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageaccount9747/providers/Microsoft.Storage/storageAccounts/armclistorageaccount5313\",\"name\":\"armclistorageaccount5313\",\"location\":\"West US\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_GRS\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount5313.blob.core.windows.net/\",\"queue\":\"https://armclistorageaccount5313.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount5313.table.core.windows.net/\"},\"primaryLocation\":\"West US\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"East US\",\"statusOfSecondary\":\"Available\",\"creationTime\":\"2015-04-10T05:51:02.3024297Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageaccount9967/providers/Microsoft.Storage/storageAccounts/armclistorageaccount9039\",\"name\":\"armclistorageaccount9039\",\"location\":\"West US\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"ResolvingDns\",\"accountType\":\"Standard_GRS\",\"primaryEndpoints\":{\"blob\":\"https://armclistorageaccount9039.blob.core.windows.net/\",\"queue\":\"https://armclistorageaccount9039.queue.core.windows.net/\",\"table\":\"https://armclistorageaccount9039.table.core.windows.net/\"},\"primaryLocation\":\"\",\"secondaryLocation\":\"\",\"creationTime\":\"2015-04-10T06:23:30.9586791Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/clitestdfwytnwlabpr/providers/Microsoft.Storage/storageAccounts/clitestvprskfjundgtk\",\"name\":\"clitestvprskfjundgtk\",\"location\":\"East Asia\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_GRS\",\"primaryEndpoints\":{\"blob\":\"https://clitestvprskfjundgtk.blob.core.windows.net/\",\"queue\":\"https://clitestvprskfjundgtk.queue.core.windows.net/\",\"table\":\"https://clitestvprskfjundgtk.table.core.windows.net/\"},\"primaryLocation\":\"East Asia\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"Southeast Asia\",\"statusOfSecondary\":\"Available\",\"creationTime\":\"2015-04-10T01:17:40.6573998Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/clitestjcnkwkrpbigodcw/providers/Microsoft.Storage/storageAccounts/clitestysvwujkgnhenwcy\",\"name\":\"clitestysvwujkgnhenwcy\",\"location\":\"West Europe\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_ZRS\",\"primaryEndpoints\":{\"blob\":\"https://clitestysvwujkgnhenwcy.blob.core.windows.net/\",\"queue\":\"https://clitestysvwujkgnhenwcy.queue.core.windows.net/\",\"table\":\"https://clitestysvwujkgnhenwcy.table.core.windows.net/\"},\"primaryLocation\":\"West Europe\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"\",\"creationTime\":\"2015-04-09T10:12:18.9663759Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/clitestlgdqkknjerp/providers/Microsoft.Storage/storageAccounts/clitestpupthrnibsalpelbs\",\"name\":\"clitestpupthrnibsalpelbs\",\"location\":\"East Asia\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_GRS\",\"primaryEndpoints\":{\"blob\":\"https://clitestpupthrnibsalpelbs.blob.core.windows.net/\",\"queue\":\"https://clitestpupthrnibsalpelbs.queue.core.windows.net/\",\"table\":\"https://clitestpupthrnibsalpelbs.table.core.windows.net/\"},\"primaryLocation\":\"East Asia\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"Southeast Asia\",\"statusOfSecondary\":\"Available\",\"creationTime\":\"2015-04-09T13:58:09.5856643Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/clitestlhylovfqscyk/providers/Microsoft.Storage/storageAccounts/clitestfetfjxlksju\",\"name\":\"clitestfetfjxlksju\",\"location\":\"East Asia\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_GRS\",\"primaryEndpoints\":{\"blob\":\"https://clitestfetfjxlksju.blob.core.windows.net/\",\"queue\":\"https://clitestfetfjxlksju.queue.core.windows.net/\",\"table\":\"https://clitestfetfjxlksju.table.core.windows.net/\"},\"primaryLocation\":\"East Asia\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"Southeast Asia\",\"statusOfSecondary\":\"Available\",\"creationTime\":\"2015-04-09T14:19:47.9137758Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/clitestwuxxrlwrmsysfopbr/providers/Microsoft.Storage/storageAccounts/clitestluigebdtapctaug\",\"name\":\"clitestluigebdtapctaug\",\"location\":\"East Asia\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_GRS\",\"primaryEndpoints\":{\"blob\":\"https://clitestluigebdtapctaug.blob.core.windows.net/\",\"queue\":\"https://clitestluigebdtapctaug.queue.core.windows.net/\",\"table\":\"https://clitestluigebdtapctaug.table.core.windows.net/\"},\"primaryLocation\":\"East Asia\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"Southeast Asia\",\"statusOfSecondary\":\"Available\",\"creationTime\":\"2015-04-09T14:02:37.4606713Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/emmasrp/providers/Microsoft.Storage/storageAccounts/emmasrp123\",\"name\":\"emmasrp123\",\"location\":\"West US\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_LRS\",\"primaryEndpoints\":{\"blob\":\"https://emmasrp123.blob.core.windows.net/\",\"queue\":\"https://emmasrp123.queue.core.windows.net/\",\"table\":\"https://emmasrp123.table.core.windows.net/\"},\"primaryLocation\":\"West US\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"\",\"creationTime\":\"2015-04-07T09:37:54.2701534Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/emmasrp/providers/Microsoft.Storage/storageAccounts/emmasrp1234\",\"name\":\"emmasrp1234\",\"location\":\"West US\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_ZRS\",\"primaryEndpoints\":{\"blob\":\"https://emmasrp1234.blob.core.windows.net/\",\"queue\":\"https://emmasrp1234.queue.core.windows.net/\",\"table\":\"https://emmasrp1234.table.core.windows.net/\"},\"primaryLocation\":\"West US\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"\",\"creationTime\":\"2015-04-08T09:48:46.0034819Z\"}},{\"id\":\"/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/yaxia/providers/Microsoft.Storage/storageAccounts/yaxiasrp123\",\"name\":\"yaxiasrp123\",\"location\":\"East Asia\",\"type\":\"Microsoft.Storage/storageAccounts\",\"properties\":{\"provisioningState\":\"Succeeded\",\"accountType\":\"Standard_ZRS\",\"primaryEndpoints\":{\"blob\":\"https://yaxiasrp123.blob.core.windows.net/\",\"queue\":\"https://yaxiasrp123.queue.core.windows.net/\",\"table\":\"https://yaxiasrp123.table.core.windows.net/\"},\"primaryLocation\":\"East Asia\",\"statusOfPrimary\":\"Available\",\"secondaryLocation\":\"\",\"creationTime\":\"2015-04-08T13:04:37.3657657Z\"}}],\"nextLink\":\"\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '8527',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '00ab60f4-93c1-47d4-b4ba-04788e9ba404',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-correlation-request-id': '15dc5f7f-2279-4ba0-84a6-61728a94cfdb',
  'x-ms-routing-request-id': 'JAPANWEST:20150410T062335Z:15dc5f7f-2279-4ba0-84a6-61728a94cfdb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 10 Apr 2015 06:23:35 GMT' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclistorageaccount9039','armclistorageaccount9967'];};