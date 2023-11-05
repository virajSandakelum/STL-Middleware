import React, { useEffect } from 'react'
import RentalPacks from './RentalPacks'
import './dataPackages.css'
import { FaSyncAlt } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import UnlimitedPack from './unlimitedPack'
import { addDataPackage } from '../../../api/dataPackagesApi'

const DataPackages = () => {

    const RentalPacksData = [
        {
            "serviceId": "1",
            "planName": "Daily Rental Pack",
            "price": 1000,
            "duration": "30",
            "packageSize": "100",
            "daytime": "50",
            "nighttime": "50",
            "is_active": false
        },
        {
            "serviceId": "2",
            "planName": "Weekly Rental Pack",
            "price": 5000,
            "duration": "30",
            "packageSize": "500",
            "daytime": "250",
            "nighttime": "250",
            "is_active": false
        },
        {
            "serviceId": "3",
            "planName": "Monthly Rental Pack",
            "price": 10000,
            "duration": "30",
            "packageSize": "1000",
            "daytime": "500",
            "nighttime": "500",
            "is_active": false
        }
    ];

    RentalPacksData.map((data, index) => {
        addDataPackage(data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })


    return (
        <div className='all-packages'>
            <div className="package-summary">
                <div className="packs">
                    <h4>Rental Packs</h4>
                    <FaSyncAlt />
                </div>

                <div className="packs">
                    <h4>Social Media</h4>
                    <BiTimeFive />
                </div>

                <div className="packs">
                    <h4>Time Based</h4>
                    <BiTimeFive />
                </div>

                <div className="packs">
                    <h4>Anytime</h4>
                    <FaSyncAlt />
                </div>

                <div className="packs">
                    <h4>Anytime Unlimited</h4>
                    <FaSyncAlt />
                </div>

                <div className="packs">
                    <h4>Work & Learn</h4>
                    <FaSyncAlt />
                </div>

                <div className="packs">
                    <h4>Unlimited</h4>
                    <FaSyncAlt />
                </div>

                <div className="packs">
                    <h4>Gaming</h4>
                    <FaSyncAlt />
                </div>

                <div className="packs">
                    <h4>Night Time</h4>
                    <FaSyncAlt />
                </div>

                <div className="packs">
                    <h4>Entertainment & Music</h4>
                    <FaSyncAlt />
                </div>
            </div>

            <div className="all-packs">
                <div className="one-pack">
                    <h3>Rental Packs</h3>
                    {
                        RentalPacksData.map((data, index) => {
                            return <RentalPacks serviceId={data.serviceId} nighttime={data.nighttime} daytime={data.daytime} planName={data.planName} price={data.price} duration={data.duration} packageSize={data.packageSize} />
                        })
                    }
                </div>

                {/* <div className="one-pack">
                    <h3>Anytime unlimited</h3>
                    <UnlimitedPack planName={'Unlimited Pack 1'} price={'1000'} duration={'30 days'} packageSize={'100'} />
                    <UnlimitedPack planName={'Unlimited Pack 1'} price={'1000'} duration={'30 days'} packageSize={'100'} />
                    <UnlimitedPack planName={'Unlimited Pack 1'} price={'1000'} duration={'30 days'} packageSize={'100'} />
                </div> */}

            </div>

        </div>


    )
}

export default DataPackages