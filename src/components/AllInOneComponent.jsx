import React from 'react'
import { FaFileInvoiceDollar, FaCalendarAlt, FaUsers } from 'react-icons/fa';

import Card from './Card';



function AllInOneComponent() {
    const cardData = [
        {
            icon: <FaFileInvoiceDollar size={28} />,
            title: 'Online Billing, Invoicing, & Contracts',
            color: '#5B72EE',
            description:
            'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.',
        },
        {
            icon: <FaCalendarAlt size={28} />,
            title: 'Easy Scheduling & Attendance Tracking',
            color: '#F48C06',
            description:
            'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.',
        },
        {
            icon: <FaUsers size={28} />,
            title: 'Customer Tracking',
            color: '#29B9E7',
            description:
            'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.',
        },
        ];

        return (
        <section className="text-center py-16 px-6 bg-white">
            <h2 className="text-3xl font-semibold text-gray-800">
            <span className="text-[#2F327D] font-bold">All-In-One </span>
            <span className="text-[#F48C06] font-bold">Cloud Software</span>
            </h2>
            <p className="mt-4 text-[#696984] max-w-xl mx-auto">
            Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>

            <div className="mt-12 flex items-center  md:justify-center gap-8 flex-col md:flex-row  ">
            {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
            </div>
        </section>
    );
}

export default AllInOneComponent