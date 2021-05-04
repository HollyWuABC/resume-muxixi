import './style.less';

// TS枚举类型
export enum EIconType {
    GitHub='github',
    Flag='flag',
    Info= 'info',
    Phone='phone',
    Email='email',
    Website='website',
    Education='education',
    WeiChat='weichat',
    Blog='blog'
}

const IconMap = {
    [EIconType.GitHub]: <i className="iconfont">&#xee2b;</i>,
    [EIconType.Flag]: <i className="iconfont">&#xe608;</i>,
    [EIconType.Info]: <i className="iconfont">&#xe609;</i>,
    [EIconType.Phone]: <i className="iconfont">&#xe686;</i>,
    [EIconType.Email]: <i className="iconfont">&#xea9c;</i>,
    [EIconType.Website]: <i className="iconfont">&#xe8be;</i>,
    [EIconType.Education]: <i className="iconfont">&#xe61e;</i>,
    [EIconType.WeiChat]: <i className="iconfont">&#xe613;</i>,
    [EIconType.Blog]:<i className="iconfont">&#xe603;</i>
}

export default function Icon({type}:{type: EIconType}) {
    return IconMap[type]
}