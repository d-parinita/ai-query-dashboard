import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToSearchHistory, setCurrentQuery } from '@/app/store/slices/dashboardSlice';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const searchHistory = useSelector((state) => state.dashboard.searchHistory);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(setCurrentQuery(query));
      dispatch(addToSearchHistory(query));
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for business insights (e.g., revenue, users)"
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
      </form>

      {searchHistory.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(item);
                  onSearch(item);
                }}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-200 rounded-full transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 