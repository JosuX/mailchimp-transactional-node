/*
 * Mailchimp Transactional API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.50
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

var axios = require('axios');

axios.defaults.timeout = 300000; // 300s

var Allowlists = require('./api/AllowlistsApi');
var Exports = require('./api/ExportsApi');
var Inbound = require('./api/InboundApi');
var Ips = require('./api/IpsApi');
var Messages = require('./api/MessagesApi');
var Metadata = require('./api/MetadataApi');
var Rejects = require('./api/RejectsApi');
var Senders = require('./api/SendersApi');
var Subaccounts = require('./api/SubaccountsApi');
var Tags = require('./api/TagsApi');
var Templates = require('./api/TemplatesApi');
var Urls = require('./api/UrlsApi');
var Users = require('./api/UsersApi');
var Webhooks = require('./api/WebhooksApi');
var Whitelists = require('./api/WhitelistsApi');

var exports = function (apiKey = '') {
  this.basePath = 'https://mandrillapp.com/api/1.0';
  this.apiKey = apiKey;
  this.defaultOutputFormat = '';

  this.formatList = ['json', 'xml', 'php', 'yaml'];
  this.contentTypes = ['application/json'];
  this.accepts = [
    'application/json', 
    'application/xml', 
    'application/x-php', 
    'application/x-yaml; charset=utf-8'
  ];

  // API Routes
  this.allowlists = new Allowlists(this);
  this.exports = new Exports(this);
  this.inbound = new Inbound(this);
  this.ips = new Ips(this);
  this.messages = new Messages(this);
  this.metadata = new Metadata(this);
  this.rejects = new Rejects(this);
  this.senders = new Senders(this);
  this.subaccounts = new Subaccounts(this);
  this.tags = new Tags(this);
  this.templates = new Templates(this);
  this.urls = new Urls(this);
  this.users = new Users(this);
  this.webhooks = new Webhooks(this);
  this.whitelists = new Whitelists(this);
};

// HTTP POST request helper
exports.prototype.post = function post(path, body = {}) {
  var _this = this;
  var url = _this.basePath + path;

  // apply API key to the request
  body.key = _this.apiKey;

  // apply response format modifier
  var formatList = _this.formatList;
  var useDefaultOutputFormat = true;

  if (typeof body.outputFormat === 'string') {
    var format = body.outputFormat.toLowerCase();
    if (formatList.indexOf(format) !== -1) {
        url = url + '.' + format;
        delete body.outputFormat;
        useDefaultOutputFormat = false;
    }
  }

  // or use the default response format
  var defaultOutputFormat = _this.defaultOutputFormat;
  if (useDefaultOutputFormat && formatList.indexOf(defaultOutputFormat) !== -1) {
    url = url + '.' + defaultOutputFormat;
  }

  return axios
    .post(url, body)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
};

// Updates the default HTTP request response format (json, xml, php, yaml)
exports.prototype.setDefaultOutputFormat = function (outputFormat) {
  var _this = this;
  if (_this.formatList.indexOf(outputFormat) !== -1) {
    _this.defaultOutputFormat = outputFormat;
  }
};

exports.prototype.setDefaultTimeoutMs = function (timeoutMs) {
  axios.defaults.timeout = timeoutMs;
}

// The default API client implementation.
exports.instance = function (apiKey) {
  return new exports(apiKey);
};

module.exports = exports;
