import './style.less';
import Title from '../Common/Title';
import Divider from '../Common/Divider';
import Icon, { EIconType } from '../Common/Icon';

export default function Info() {
    return <>
    <Title>基本信息</Title>
    <Divider/>
    <ul className="info">
        <li>
            <Icon type={EIconType.Flag}/>
            <span><strong>前端工程师</strong></span>
        </li>
        <li>
            <Icon type={EIconType.Info}/>
            <span>吴晓哗 |  女 |  1994 |  <strong>深圳</strong></span>
        </li>
        <li>
            <Icon type={EIconType.Phone}/>
            <span><strong>13729839173</strong></span>
        </li>
        <li>
            <Icon type={EIconType.Email}/>
            <span>gzhhwxh@163.com</span>
        </li>
        <li>
            <Icon type={EIconType.Education}/>
            <span>2016 | 广轻工 | 2019 | 华南师范</span>
        </li>
        <li>
            <Icon type={EIconType.GitHub}/>
            <span><a href="https://github.com/HollyWuABC" target="_blank">https://github.com/HollyWuABC</a></span>
        </li>
        <li>
            <Icon type={EIconType.Website}/>
            <span><a href="http://www.xhw.com" target="_blank">http://www.xhw.com</a></span>
        </li>
    </ul>
    <Divider/>
    </>
}