import { Link, Outlet, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const tab = tabId || '';
  const selectedTab = tabs.find(t => t.id === tab);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(t => (
              <li
                data-cy="Tab"
                key={t.id}
                className={t.id === selectedTab?.id ? 'is-active' : ''}
              >
                <Link to={`/tabs/${t.id}`}>{t.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>

        <Outlet />
      </div>
    </>
  );
};
