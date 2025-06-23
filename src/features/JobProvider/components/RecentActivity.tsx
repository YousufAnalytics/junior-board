import React, { useState } from 'react';

type ActivityTab = 'today' | 'lastWeek' | 'lastMonth';

type ActivityData = {
  [key in ActivityTab]: string[];
};

const activityData: ActivityData = {
  today: [
    'Posted a new job: Software Engineer',
    'Shortlisted candidate: Priya Sharma',
     'Scheduled interview with Kunal',
  ],
  lastWeek: [
    'Scheduled interview with Kunal',
    'Rejected candidate: Amit Verma',
  ],
  lastMonth: [
    'Created job listing: UI/UX Designer',
    'Reviewed 23 applications',
  ],
};

const tabLabels: Record<ActivityTab, string> = {
  today: 'Today',
  lastWeek: 'Last Week',
  lastMonth: 'Last Month',
};

const RecentActivity: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<ActivityTab>('today');

  const renderActivity = () => {
    const items = activityData[selectedTab];
    if (!items.length) {
      return <p className="text-sm text-gray-500 mt-4">No activity.</p>;
    }

    return (
      <ul className="mt-4 space-y-2 h-[200px] overflow-y-auto">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-500 border border-gray-200 bg-sky-100 rounded p-2">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white rounded-xl border-1 border-gray-300 p-6 w-1/2 h-[270px]">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>

      <div className="flex space-x-4 border-b border-gray-200 mb-4">
        {Object.keys(tabLabels).map((tab) => {
          const typedTab = tab as ActivityTab;
          const isActive = selectedTab === typedTab;

          return (
            <button
              key={typedTab}
              onClick={() => setSelectedTab(typedTab)}
              className={`pb-2 px-1 text-sm font-medium border-b-2 ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-blue-600'
              }`}
            >
              {tabLabels[typedTab]}
            </button>
          );
        })}
      </div>

      {renderActivity()}
    </div>
  );
};

export default RecentActivity;
