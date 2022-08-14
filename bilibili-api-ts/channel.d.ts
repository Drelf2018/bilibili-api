import { Credential } from "./models/Credential";
/**
 * 根据 tid 获取频道信息。
 *
 * param tid(number): 频道 tid
 *
 * @returns {Object[Object, Object]} 第一项是主分区，第二项是子分区，没有时返回 None。
 */
export declare function get_channel_info_by_tid({ tid }: {
    tid: number;
}): any[];
/**
 * 根据频道名称获取频道信息。
 *
 * param name(string): 频道的名称
 *
 * @returns {Object[Object, Object]} 第一项是主分区，第二项是子分区，没有时返回 None。
 */
export declare function get_channel_info_by_name({ name }: {
    name: string;
}): any[];
/**
 * 获取分区前十排行榜。
 *
 * param tid(number)                     : 频道的 tid
 *
 * param day(number, optional)           : 3 天排行还是 7 天排行，defaults to 7
 *
 * param credential(Credential, optional): 凭据类
 * @returns
 */
export declare function get_top10({ tid, day, credential }: {
    tid: number;
    day?: number;
    credential?: Credential;
}): Promise<any>;
export declare function get_channel_list({}: {}): any[];
export declare function get_channel_list_sub({}: {}): ({
    name: string;
    route: string;
    tid: number;
    locid: number;
    sub: any[];
    url?: undefined;
    takeOvered?: undefined;
    count?: undefined;
    subMenuSize?: undefined;
    combination?: undefined;
    slider?: undefined;
    viewTag?: undefined;
    customComponent?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    url: string;
    takeOvered: boolean;
    count: string;
    subMenuSize: number;
    combination: boolean;
    sub: ({
        name: string;
        tid: number;
        route: string;
        desc: string;
        url: string;
    } | {
        name: string;
        url: string;
        desc: string;
        tid?: undefined;
        route?: undefined;
    })[];
    locid?: undefined;
    slider?: undefined;
    viewTag?: undefined;
    customComponent?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        titleId: number;
        leftId: number;
        rightId: number;
        rightType: string;
    };
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        viewHotTag: boolean;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        dpConfig: {
            name: string;
            value: number;
        }[];
        desc: string;
        url: string;
        customZone?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        viewHotTag: boolean;
        dpConfig: {
            name: string;
            value: number;
        }[];
        desc: string;
        url: string;
        ad?: undefined;
        customZone?: undefined;
    } | {
        name: string;
        customZone: string;
        route: string;
        url: string;
        tid?: undefined;
        ps?: undefined;
        rps?: undefined;
        viewHotTag?: undefined;
        ad?: undefined;
        dpConfig?: undefined;
        desc?: undefined;
    } | {
        name: string;
        url: string;
        route?: undefined;
        tid?: undefined;
        ps?: undefined;
        rps?: undefined;
        viewHotTag?: undefined;
        ad?: undefined;
        dpConfig?: undefined;
        desc?: undefined;
        customZone?: undefined;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        titleId: number;
        leftId: number;
        rightId: number;
        rightType: string;
    };
    recommendCardType: string;
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        rankshow: number;
        viewHotTag: boolean;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        dpConfig: {
            name: string;
            value: number;
        }[];
        desc: string;
        url: string;
        newIcon?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        rankshow: number;
        viewHotTag: boolean;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        desc: string;
        url: string;
        dpConfig?: undefined;
        newIcon?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        rankshow: number;
        viewHotTag: boolean;
        desc: string;
        url: string;
        ad?: undefined;
        dpConfig?: undefined;
        newIcon?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        rankshow: number;
        viewHotTag: boolean;
        dpConfig: {
            name: string;
            value: number;
        }[];
        desc: string;
        url: string;
        ad?: undefined;
        newIcon?: undefined;
    } | {
        name: string;
        url: string;
        newIcon: boolean;
        route?: undefined;
        tid?: undefined;
        ps?: undefined;
        rps?: undefined;
        rankshow?: undefined;
        viewHotTag?: undefined;
        ad?: undefined;
        dpConfig?: undefined;
        desc?: undefined;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        titleId: number;
        leftId: number;
        rightId: number;
        rightType?: undefined;
    };
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        desc: string;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        ad?: undefined;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        titleId: number;
        leftId: number;
        rightId: number;
        rightType?: undefined;
    };
    sub: {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        viewHotTag: boolean;
        desc: string;
        url: string;
    }[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    isHide: boolean;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        leftId: number;
        rightId: number;
        rightType: string;
        titleId?: undefined;
    };
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        desc: string;
        url: string;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        url: string;
        ad?: undefined;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    count?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        titleId: number;
        leftId: number;
        rightId: number;
        rightType?: undefined;
    };
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        desc: string;
        url: string;
        locid: number;
        recommendId: number;
        slider: {
            width: number;
            height: number;
        };
        customComponent: {
            name: string;
            leftId: number;
            rightId: number;
            rightType: string;
        };
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        url: string;
        ad?: undefined;
        locid?: undefined;
        recommendId?: undefined;
        slider?: undefined;
        customComponent?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        desc: string;
        url: string;
        locid?: undefined;
        recommendId?: undefined;
        slider?: undefined;
        customComponent?: undefined;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    isHide: boolean;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        leftId: number;
        rightId: number;
        titleId?: undefined;
        rightType?: undefined;
    };
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        desc: string;
        url: string;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        url: string;
        ad?: undefined;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    isHide: boolean;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        leftId: number;
        rightId: number;
        rightType: string;
        titleId?: undefined;
    };
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        url: string;
        ad: {
            active: boolean;
            dataLocId: number;
        };
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        url: string;
        ad?: undefined;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        titleId: number;
        leftId: number;
        rightId: number;
        rightType?: undefined;
    };
    sub: ({
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        ad: {
            active: boolean;
            dataLocId: number;
        };
        desc: string;
        url: string;
        rightComponent?: undefined;
        hideDropdown?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        url: string;
        ad?: undefined;
        rightComponent?: undefined;
        hideDropdown?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
        ad?: undefined;
        url?: undefined;
        rightComponent?: undefined;
        hideDropdown?: undefined;
    } | {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        rightComponent: {
            name: string;
            id: number;
        };
        ad: {
            active: boolean;
            dataLocId: number;
        };
        hideDropdown: boolean;
        desc: string;
        url: string;
    })[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    locid: number;
    count: string;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    sub: {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        desc: string;
    }[];
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    customComponent?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
    hasParent?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    url: string;
    count: string;
    takeOvered: boolean;
    hasParent: boolean;
    combination: boolean;
    sub: ({
        name: string;
        tid: number;
        route: string;
        dise: string;
        url: string;
    } | {
        name: string;
        url: string;
        tid?: undefined;
        route?: undefined;
        dise?: undefined;
    })[];
    locid?: undefined;
    subMenuSize?: undefined;
    slider?: undefined;
    viewTag?: undefined;
    customComponent?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
} | {
    name: string;
    route: string;
    tid: number;
    url: string;
    count: string;
    takeOvered: boolean;
    hasParent: boolean;
    combination: boolean;
    sub: ({
        name: string;
        tid: number;
        route: string;
        desc: string;
        url: string;
    } | {
        name: string;
        url: string;
        tid?: undefined;
        route?: undefined;
        desc?: undefined;
    })[];
    locid?: undefined;
    subMenuSize?: undefined;
    slider?: undefined;
    viewTag?: undefined;
    customComponent?: undefined;
    recommendCardType?: undefined;
    isHide?: undefined;
} | {
    name: string;
    route: string;
    locid: number;
    count: string;
    isHide: boolean;
    subMenuSize: number;
    slider: {
        width: number;
        height: number;
    };
    viewTag: boolean;
    customComponent: {
        name: string;
        titleId: number;
        leftId: number;
        rightId?: undefined;
        rightType?: undefined;
    };
    sub: {
        name: string;
        route: string;
        tid: number;
        ps: number;
        rps: number;
        url: string;
    }[];
    tid?: undefined;
    url?: undefined;
    takeOvered?: undefined;
    combination?: undefined;
    recommendCardType?: undefined;
    hasParent?: undefined;
})[];
