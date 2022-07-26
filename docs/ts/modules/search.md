# Module search.ts(search.js)

## enum SearchObjectType

搜索对象枚举。

+ VIDEO : 视频
+ BANGUMI : 番剧
+ FT : 影视
+ LIVE : 直播
+ ARTICLE : 专栏
+ TOPIC : 话题
+ USER : 用户

## _async_ function web_search()

| name | type | description |
| - | - | - |
| keyword | string | 搜索关键词 |
| page | number | 页码 |

搜索

**Returns:** Object: 调用 API 返回的结果

## _async_ function web_search_by_type()

| name | type | description |
| - | - | - |
| keyword | string | 搜索关键词 |
| search_type | SearchObjectType\|string | 搜索类型 |
| page | number | 页码 |

根据指定类型搜索

**Returns:** Object: 调用 API 返回的结果

## _async_ function get_default_search_keyword()

获取默认的搜索内容

**Returns:** 调用 API 返回的结果

## _async_ function get_hot_search_keywords()

获取热搜

**Returns:** 调用 API 返回的结果
