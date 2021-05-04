import Title, { ETitleType } from '../../Common/Title';
import Divider from '../../Common/Divider';
import SubTitle from '../../Common/SubTitle';
import './style.less';


export default function Project() {
    return <div className="project2">
        <Title type={ETitleType.Theme}>项目介绍</Title>
        <Divider/>
        <SubTitle>应用平台基础组件库封装</SubTitle>
        <p>1. 基于Vue.js，结合内部样式文件，封装应用平台基础组件库, 便于内部业务开发时实现即取即用。</p>
        <p>2. 平台功能中复杂逻辑(如:搜索实现防抖节流)，工具函数进行封装。</p>
        <Divider />
        <SubTitle>企业画像(XDJM)</SubTitle>
        <p>1. 独立负责构建并迭代包含<strong>企业洞察</strong>、<strong>产业分析</strong>、<strong>产业园区</strong>、<strong>智能舆情</strong>、<strong>企业营销</strong>在内的5个 SAAS 系统, 
            其中投入使用的用户包括深圳证券交易所、浙江永康五金、烟台工业云、保理云、等。</p>
        <p>2. 独立负责 <strong>Nginx</strong> 、<strong> Iframe</strong> 页面嵌套定制化开发，通过与用户对接需求以及用户预期实现效果，输出前端技术方案，技术样例包等内容，
            协助用户完成嵌套企业画像内各SAAS系统的指定模块的工作。目前的主要客户涵盖湖南云畅科技、江门人才岛、张家港工业云、营商通等。</p>
        <p>3. 利用 <strong>Puppeteer</strong> 、<strong>Egg.js</strong> 实现页面截图，辅助后台人员完成小微企业报告的生成工作。</p>
        <p>4. 封装 <strong>D3.js</strong> 实现的可视化图表插件，实现加载符合 AMD 规范的外部 JS 文件至用户页面。</p>
        <p>5. 利用 <strong>Single-Spa</strong> 关联GIT代码仓库实现微前端, 将企业画像(XDJM)的各个SAAS系统集成到一个系统里。</p>
        <p>6. 独立负责企业画像接口权限系统(私有化)的开发及迭代。</p>
        <p>7. 独立负责腾讯云控制台企业画像EP系统的开发及迭代。</p>
        <Divider />
    </div>
}