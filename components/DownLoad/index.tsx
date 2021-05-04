import './style.less';

export default function DownLoad() {
    const href = '/吴晓哗简历-前端工程师-4年.pdf';
    return (
        <div className="download">
            <a href={href} target="_blank">
                PDF 下载
            </a>
        </div>
    )
}