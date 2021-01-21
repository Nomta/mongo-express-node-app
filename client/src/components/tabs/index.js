const Tabs = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
    const tabData = React.useMemo(() => lodash.keyBy(tabs, 'id'), [tabs]);
    const selectTab = React.useCallback((id) => setSelectedTab(tabData[id]), []);

    return (
        <div>
            <ul className="nav nav-tabs">
                {tabs.map((tab) => {
                    const className = tab.id === selectedTab.id ? 'nav-link active' : 'nav-link';

                    return (
                        <li key={tab.id} className="nav-item">
                            <button onClick={() => selectTab(tab.id)} className={className}>
                                {tab.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="px-3 py-4">{selectedTab.content}</div>
        </div>
    );
};

export default Tabs;
