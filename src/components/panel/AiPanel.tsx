import React from 'react';
import { X } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

export const AiPanel: React.FC = () => {
  const { isAiPanelOpen, toggleAiPanel } = useNavigation();

  return (
    <div
      className={`w-80 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${
        isAiPanelOpen ? 'translate-x-0' : 'translate-x-full'
      } fixed right-0 top-14 bottom-0`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium">AI panel</h2>
        <button
          onClick={toggleAiPanel}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">
          This is the AI assistant panel. You can add AI-powered features and content here.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-700">
            Suggested actions based on your current view:
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
              <span>Analyze current data</span>
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
              <span>Generate report</span>
            </li>
            <li className="flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
              <span>Schedule automation</span>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Ask a question</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Type your question..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};