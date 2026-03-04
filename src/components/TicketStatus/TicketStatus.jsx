import React from 'react';

const TicketStatus = ({ inProgress, resolved, onComplete }) => {
  return (
    <div className="space-y-6">

      {/* 🔵 Task Status Section */}
      <div className="bg-[#F3F4F6] p-5 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Task Status
        </h2>

        {inProgress.length === 0 ? (
          <p className="text-gray-400">No tasks added yet.</p>
        ) : (
          inProgress.map((task) => (
            <div
              key={task.id}
              className="bg-[#F3F4F6] p-4 rounded-lg mb-3"
            >
              <p className="font-medium text-gray-800">
                {task.title}
              </p>

              <button
                onClick={() => onComplete(task)}
                className="mt-3 w-full bg-[#02A53B] hover:bg-green-700 transition text-white py-2 rounded-lg text-sm"
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🟢 Resolved Section */}
      <div className="bg-[#F3F4F6] p-5 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Resolved Tasks
        </h2>

        {resolved.length === 0 ? (
          <p className="text-gray-400">No resolved tasks</p>
        ) : (
          resolved.map((task) => (
            <div
              key={task.id}
              className="bg-gray-100 p-4 rounded-lg mb-3"
            >
              <p className="font-medium text-green-600">
                {task.title}
              </p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default TicketStatus;