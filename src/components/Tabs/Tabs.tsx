'use client'
import { ReactNode, useState } from "react"

const Item = ({ className, onClick, label }: any) => {

    return (
        <a className={className} onClick={onClick}>{label}</a>
    )
}


const Tabs = ({ children }: any) => {
    const [activeTab, setActiveTab] = useState<number>(0)

    const onClickTabItem = (index: number) => {
        setActiveTab(index)
    }

    return (
        <>
            <div className="tabs">
                {children.map((child: any, i: number) => {
                    console.log('child.props', child.props);

                    let className = 'tab tab-lifted';

                    if (activeTab === i) {
                        className += ' tab-active';
                    }

                    return (
                        <Item
                            key={`tab-${i}`}
                            className={className}
                            onClick={() => onClickTabItem(i)}
                        />
                    );
                })}
            </div>

            {/* {children.map((child, i: number) => {
                if (i !== activeTab) return undefined;
                return child.props.children;
            })} */}
        </>
    )
}

export default Tabs

Tabs.Item = Item