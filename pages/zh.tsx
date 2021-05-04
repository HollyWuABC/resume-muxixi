import Info from '../components/Info';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Page from '../components/Common/Page';
import Skills from '../components/Skills';
import Project1 from '../components/Project/Project1';
import Project2 from '../components/Project/Project2';

import './index.less';

export default function Zh() {
    return (
        <div className="zh">
            <Page className="page-1">
                <div className="left">
                    <Info/>
                    <Experience/>
                    <Education/>
                </div>
                <div className="right">
                    <Skills/>
                    <Project1/>
                </div>
            </Page>
            <Page className="page-2">
                <Project2/>
            </Page>
        </div>
    )
}