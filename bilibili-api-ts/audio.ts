import {AudioData} from "./apis/audio";
import {Credential} from "./models/Credential";
import {request} from "./utils/network";

const API = AudioData;

/**
 * 音频相关
 */
export class Audio {
    auid: number
    credential: Credential

    /**
     * param auid(int)                       : 音频 AU 号
     * 
     * param credential(Credential, optional): 凭据. Defaults to None
     */
    constructor({auid, credential}: {
        auid: number, 
        credential?: Credential
    }) {
        this.credential = credential ? credential : new Credential({});
        this.auid = auid;
    }

    /**
     * 获取 auid
     * 
     * @returns 
     */
    get_auid({}) {
        return this.auid;
    }

    /**
     * 获取音频信息
     * 
     * @returns {Object} 调用 API 返回的结果
     */
    async get_info({}) {
        var api = API.audio_info.info;
        var params = {
            sid: this.auid
        };
        return await request({
            method: "GET", 
            url: api.url, 
            params: params, 
            credential: this.credential
        });
    }

    /**
     * 获取音频 tags
     * 
     * @returns {Object} 调用 API 返回的结果
     */
    async get_tags({}) {
        var api = API.audio_info.tag;
        var params = {
            sid: this.auid
        };
        return await request({
            method: "GET", 
            url: api.url, 
            params: params, 
            credential: this.credential
        });
    }

    /**
     * 获取音频下载链接
     * 
     * @returns {Object} 调用 API 返回的结果
     */
    async get_download_url({}) {
        var api = API.audio_info.download_url;
        var params = {
            sid: this.auid, 
            privilege: 2, 
            quality: 2
        }
        return await request({
            method: "GET", 
            url: api.url, 
            params: params, 
            credential: this.credential
        });
    }
}