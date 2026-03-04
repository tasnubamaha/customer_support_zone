
import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'

import ticketsData from '../public/tickets.json'
import { toast, ToastContainer } from 'react-toastify';
import TicketStatus from './components/TicketStatus/TicketStatus';
import TicketCard from './components/TicketCard/TicketCard';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToTask = (ticket) => {
    setInProgress([...inProgress, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success("Added to In Progress!");
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast.success("Task Completed!");
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <NavBar></NavBar>
      <Banner inProgressCount={inProgress.length}
        resolvedCount={resolved.length}></Banner>
    <div className="grid md:grid-cols-3 gap-6 mt-8 ml-26">
        {/* LEFT SIDE */}
        <div className="md:col-span-2">

  {/* Section Title */}
  <h2 className="text-2xl font-bold mb-4 text-gray-800">
    Customer Tickets
  </h2>

  {/* Cards Grid */}
  <div className="grid md:grid-cols-2 gap-4">
    {tickets.map((ticket) => (
      <TicketCard
        key={ticket.id}
        ticket={ticket}
        onClick={handleAddToTask}
      />
    ))}
  </div>

</div>

        {/* RIGHT SIDE */}
      
       <div>
        <h2 className='text-black ml-4 pb-4 text-2xl font-bold'>Task Status</h2>
         <TicketStatus inProgress={inProgress}   resolved={resolved}
          onComplete={handleComplete}></TicketStatus>
       </div>
      </div>

      <ToastContainer position="top-right" />
      </div>
  )
}

export default App
