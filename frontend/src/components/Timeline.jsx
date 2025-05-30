const TimeLine = () => {
    const events = [
        {   
            newDate: "20 March, 2025",
            label: "Paper Submission Open",
        },
        {   
            oldDate: "30 May, 2025",
            newDate: "06 June, 2025",
            label: "Paper Submission Deadline",
        },
        {   
            newDate: "30 June, 2025",
            label: "Acceptance Notification",
        },
        {   
            newDate: "15 July, 2025",
            label: "Early Bird Registration Deadline",
        },
        {   
            newDate: "31 July, 2025",
            label: "Camera Ready Submission",
        },
        {
            newDate: "19-20 December, 2025",
            label: "Conference Dates",
        }
    ];
    return (
        <div>
            <div className="border-l-3 py-1 border-[#0054B0] relative">
                {events.map((event, index) => (
                    <div key={index} className="text-sm my-8 pl-5 relative">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-[#0054B0] rounded-full flex items-center justify-center">
                            <span className="bg-black w-3 h-3 rounded-full"></span>
                        </div>
                        {event.oldDate && (
                            <p className="text-red-500 line-through decoration-2 font-bold">{event.oldDate}</p>
                        )}
                        <p className="text-[#0054B0] font-bold">{event.newDate}</p>
                        <p className="font-bold">{event.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TimeLine