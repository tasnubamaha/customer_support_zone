import { CalendarDays } from "lucide-react";

const TicketCard = ({ ticket, onClick }) => {
  return (
    
    <div
      onClick={() => onClick(ticket)}
      className="bg-[#F3F4F6] p-5 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">
          {ticket.title}
        </h3>

        {/* Status Badge */}
        <span
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
            ${
              ticket.status === "Open"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 leading-relaxed">
        {ticket.description}
      </p>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <span className="text-gray-400">#{ticket.id}</span>
          <span
            className={`font-medium
              ${
                ticket.priority === "High"
                  ? "text-red-500"
                  : ticket.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
          >
            {ticket.priority.toUpperCase()} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>{ticket.customer}</span>
          <div className="flex items-center gap-1">
            <CalendarDays size={16} />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;