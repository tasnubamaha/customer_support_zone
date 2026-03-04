import React from 'react';

const TicketStatus = ({ inProgress, onComplete }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Task Status</h2>

      {inProgress.length === 0 ? (
        <p className="text-gray-500">No tasks added yet.</p>
      ) : (
        inProgress.map((task) => (
          <div
            key={task.id}
            className="bg-white p-3 mb-3 rounded shadow"
          >
            <p className="font-medium text-black">{task.title}</p>
            <button
              onClick={() => onComplete(task)}
              className="mt-2 bg-[#02A53B] text-white px-8 w-88 py-2 rounded text-sm"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
    );
};

export default TicketStatus;