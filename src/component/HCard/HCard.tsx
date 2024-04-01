import { HCardDataResponse } from "../../types";

import './HCard.scss'

interface HCardProps {
    data?: HCardDataResponse;
}

const HCard = ({ data }: HCardProps) => {
    if (!data) return <></>;

    const personalDetailFields = data?.personalDetails?.fields;
    const addressFields = data?.address?.fields;
    const actionFields = data?.action?.fields;

    const fullName = `${personalDetailFields?.givenName?.value || ''} ${personalDetailFields?.surname?.value || ''}`.trim()
    const avatar = actionFields?.uploadAvatar?.value as string || '';
    const email = personalDetailFields?.email?.value || '';
    const phone = personalDetailFields?.phone?.value || '';
    const addressLine1 = `${addressFields?.houseNameNumber?.value || ''} ${addressFields?.street?.value || ''}`.trim()
    const addressLine2 = `${addressFields?.suburb?.value || ''} ${addressFields?.state?.value || ''}`.trim()

    return (
        <div className="h-card-view" test-dataid='h-card-view'>
            <div className='h-card-view-container'>
                <header className='h-card-view-header'>
                    {fullName}
                    <img className='h-card-view-avatar' src={avatar} alt="avatar" />
                </header>
                <div className='h-card-view-body'>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <span className='h-card-view-table-row-header'>EMAIL</span>
                                </th>
                                <td colSpan={3}>{email}</td>
                            </tr>
                            <tr>
                                <th>
                                    <span className='h-card-view-table-row-header'>PHONE</span>
                                </th>
                                <td colSpan={3}>{phone}</td>
                            </tr>
                            <tr>
                                <th>
                                    <span className='h-card-view-table-row-header'>ADDRESS</span>
                                </th>
                                <td colSpan={3}>{addressLine1}</td>
                            </tr>
                            <tr>
                                <th>
                                    <span className='h-card-view-table-row-header'></span>
                                </th>
                                <td colSpan={3}>{addressLine2}</td>
                            </tr>
                            <tr className='multi-col'>
                                <th><span className='h-card-view-table-row-header'>POSTCODE</span></th>
                                <td>{addressFields?.postcode.value || ''}</td>
                                <th><span className='h-card-view-table-row-header'>COUNTRY</span></th>
                                <td>{addressFields?.country.value || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    )
}

export default HCard
