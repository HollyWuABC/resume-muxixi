import './style.less';

export default function SubTitle(props: React.PropsWithChildren<{}>) {
    return <h6 className="sub-title">
        {props.children}
    </h6>;
}