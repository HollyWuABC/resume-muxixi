import Title, { ETitleType } from '../../Common/Title';
import Divider from '../../Common/Divider';
import SubTitle from '../../Common/SubTitle';
import './style.less';


export default function Project() {
    return <>
        <Title type={ETitleType.Theme}>项目介绍</Title>
        <Divider/>
        <div className="project1">
            <SubTitle>智能城市计算</SubTitle>
            <p>1. 独立负责智能城市计算系统，该系统为定制化开发的一款产品，主要服务对象是深圳南山公安。</p>
            <p>2. 基于现有VUE-CLI, 结合自身业务改造CLI工具，完成项目初始化构建。</p>
            <p>3. 结合腾讯地图，实现实时人流监测、商圈围栏圈定、定点投放等用户期望功能，Echarts等可视化工具实现人群画像展示。</p>
        </div>
    </>
}