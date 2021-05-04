import Head from 'next/head';
import DownLoad from '../components/DownLoad';
import Zh from './zh';

import './index.less';

export default function Resume() {
    return (
        <div className="typo resume">
            <Head>
                <title>吴晓哗简历-前端工程师-4年</title>
            </Head>
            <Zh />
            <DownLoad/>
            <div className="version">version: v2021.05.01</div>
        </div>
    )
}