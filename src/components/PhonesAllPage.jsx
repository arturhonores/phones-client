import React, { useEffect, useState } from 'react'
import phoneService from '../services/phone.services'
import Modal from './Modal'



const PhonesAllPage = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        phoneService
            .getAllPhones()
            .then(response => {
                setPhones(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='mx-auto max-w-6xl px-4 md:px-8 py-4'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th className='font-bold uppercase'>Name</th>
                            <th className='hidden sm:block font-bold uppercase'>Description</th>
                            <th className='font-bold uppercase'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {phones.map(phone =>
                        (
                            <tr key={phone.id} className='hover'>
                                <th className='px-0 text-center'>{phone.id + 1}</th>
                                <td className='min-w-[120px] text-center px-0'>{phone.name}</td>
                                <td className='hidden max-w-md sm:table-cell'>{phone.description}</td>
                                <td className='text-center'><Modal phoneId={phone.id} /></td>
                            </tr>)
                        )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PhonesAllPage