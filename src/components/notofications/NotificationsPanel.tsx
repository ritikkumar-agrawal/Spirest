import React from 'react';
import { Bell, Circle } from 'lucide-react';

const NotificationsPanel: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  // hard coded notifications for demo purposes to be fetched from an API later on
  const dummyNotifications = [
    {
      id: 1,
      title: "New Resource Available",
      message: "Check out our latest guide on system design interviews",
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      title: "Upcoming Workshop",
      message: "Join us for a live coding session this weekend",
      time: "1 day ago",
      isRead: true
    },
    {
      id: 3,
      title: "Platform Update",
      message: "We've added new features to the interview preparation section",
      time: "2 days ago",
      isRead: true
    }
  ];

  const baseClasses = "bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden";
  const mobileClasses = "w-full";
  const desktopClasses = "absolute right-0 mt-2 w-96 rounded-lg shadow-lg";

  return (
    <div className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}>
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Updates</h3>
          <Bell className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="max-h-[480px] overflow-y-auto">
        {dummyNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-gray-700 hover:bg-gray-700/50 transition-colors ${
              // conditional background color based on read status [Important, Code to be implemented]
              !notification.isRead ? 'bg-gray-700/20' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              {!notification.isRead && (
                <Circle className="w-2 h-2 mt-2 text-red-500 fill-current" />
              )}
              <div className="flex-1">
                {/* has to make the time of post dynamic */}
                <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-700 bg-gray-800/95">
        <button className="w-full px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
          {/* // code to be implemented later to view all updates  */}
          View all updates
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;