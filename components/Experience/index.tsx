import Title from '../Common/Title';
import Divider from '../Common/Divider';

import './style.less';

export default function Experience() {
    return <>
        <Title>工作经历</Title>
        <ul className="experience">
            <li>
                <h5>腾讯云大数据(CSIG)</h5>
                <p>2018.06 ~ 至今</p>
                <p><strong>5次A级考核</strong></p>
                <p><strong>司级技术骨干</strong></p>
                <p>负责企业画像(XDJM)产品的迭代</p>
                <p>负责智能城市计算系统</p>
                <p>构建应用平台基础组件</p>
            </li>
            <li>
                <h5>深圳·秒租(OMIAOZU)</h5>
                <p>2016.06 ~ 2018.05</p>
                <p><strong>优秀员工</strong></p>
                <p>负责司级官网构建及维护</p>
                <p>负责秒租助手小程序的构建维护</p>
            </li>
        </ul>
        <Divider/>
    </>
}