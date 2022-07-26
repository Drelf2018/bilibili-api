"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.get_suggest_keywords = exports.get_hot_search_keywords = exports.get_default_search_keyword = exports.search_by_type = exports.search = exports.SearchObjectType = void 0;
var search_1 = require("./apis/search");
var Credential_1 = require("./models/Credential");
var network_1 = require("./utils/network");
var API = search_1.SearchData;
/**
 * 搜索对象枚举。
 *
    + VIDEO : 视频

    + BANGUMI : 番剧

    + FT : 影视

    + LIVE : 直播

    + ARTICLE : 专栏

    + TOPIC : 话题
    
    + USER : 用户
 */
var SearchObjectType;
(function (SearchObjectType) {
    SearchObjectType["VIDEO"] = "video";
    SearchObjectType["BANGUMI"] = "media_bangumi";
    SearchObjectType["FT"] = "media_ft";
    SearchObjectType["LIVE"] = "live";
    SearchObjectType["ARTICLE"] = "article";
    SearchObjectType["TOPIC"] = "topic";
    SearchObjectType["USER"] = "bili_user";
})(SearchObjectType = exports.SearchObjectType || (exports.SearchObjectType = {}));
/**
 * 搜索
 *
 * params keyword(string): 搜索关键词
 *
 * params page(number)   : 页码
 *
 * @returns {Object} 调用 API 返回的结果
 */
function search(_a) {
    var keyword = _a.keyword, _b = _a.page, page = _b === void 0 ? 1 : _b;
    return __awaiter(this, void 0, void 0, function () {
        var api, params;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    api = API.search.web_search;
                    params = {
                        "keyword": keyword,
                        "page": page
                    };
                    return [4 /*yield*/, (0, network_1.request)({
                            method: "GET",
                            url: api['url'],
                            params: params
                        })];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.search = search;
/**
 * 根据指定类型搜索
 *
 * param keyword(string):                      搜索关键词
 *
 * param search_type(SearchObjectType|string): 搜索类型
 *
 * param page(number):                         页码
 *
 * @returns {Object} 调用 API 返回的结果
 */
function search_by_type(_a) {
    var keyword = _a.keyword, search_type = _a.search_type, _b = _a.page, page = _b === void 0 ? 1 : _b;
    return __awaiter(this, void 0, void 0, function () {
        var api, params;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    api = API.search.web_search_by_type;
                    params = {
                        "keyword": keyword,
                        "search_type": search_type,
                        "page": page
                    };
                    return [4 /*yield*/, (0, network_1.request)({
                            method: "GET",
                            url: api['url'],
                            params: params
                        })];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.search_by_type = search_by_type;
/**
 * 获取默认搜索内容
 *
 * @returns {Object} 调用 API 返回的结果
 */
function get_default_search_keyword(_a) {
    return __awaiter(this, void 0, void 0, function () {
        var api;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    api = API.search.default_search_keyword;
                    return [4 /*yield*/, (0, network_1.request)({
                            method: "GET",
                            url: api.url
                        })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.get_default_search_keyword = get_default_search_keyword;
/**
 * 获取热搜
 *
 * @returns {Object} 调用 API 返回的结果
 */
function get_hot_search_keywords(_a) {
    return __awaiter(this, void 0, void 0, function () {
        var api, sess;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    api = API.search.hot_search_keywords;
                    return [4 /*yield*/, (0, network_1.get_session)({
                            credential: new Credential_1.Credential({})
                        })];
                case 1:
                    sess = _b.sent();
                    return [4 /*yield*/, sess];
                case 2: return [4 /*yield*/, (_b.sent()).request({
                        method: "GET",
                        url: api.url
                    })];
                case 3: return [2 /*return*/, ((_b.sent())['data'])];
            }
        });
    });
}
exports.get_hot_search_keywords = get_hot_search_keywords;
/**
 * 通过一些文字输入获取搜索建议。类似搜索词的联想。
 */
function get_suggest_keywords(_a) {
    var keyword = _a.keyword;
    return __awaiter(this, void 0, void 0, function () {
        var api, sess, params, data, keywords, key;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    api = API.search.suggest;
                    return [4 /*yield*/, (0, network_1.get_session)({
                            credential: new Credential_1.Credential({})
                        })];
                case 1:
                    sess = _b.sent();
                    params = {
                        "term": keyword
                    };
                    return [4 /*yield*/, sess.request({
                            method: "GET",
                            url: api.url,
                            params: params
                        })];
                case 2:
                    data = ((_b.sent())['data']);
                    keywords = [];
                    for (key in data) {
                        keywords.push(data[key]['term']);
                    }
                    return [2 /*return*/, keywords];
            }
        });
    });
}
exports.get_suggest_keywords = get_suggest_keywords;
