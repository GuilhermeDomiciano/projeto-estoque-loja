'use client'
import { useState } from 'react';

interface TabsComponentProps {
  tabsData: { [key: string]: React.ReactNode };
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(tabsData)[0]);

  return (
    <div className="w-full mx-auto p-0">
      <nav className="flex space-x-2 border-b justify-between w-full overflow-x-auto max-w-full">
        {Object.keys(tabsData).map((tabName) => (
          <button
            key={tabName}
            className={`flex-grow py-[2px] px-6 text-md font-medium ${activeTab === tabName ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-700'}`}
            onClick={() => setActiveTab(tabName)}
          >
            {tabName}
          </button>
        ))}
      </nav>
      <div className="mt-4">
        <div>{tabsData[activeTab]}</div>
      </div>
    </div>
  );
};

export default TabsComponent;
