import { useEffect, useState } from "react";
import { getHCardData } from "../api/data";
import { HCardDataResponse } from "../types";
import HCardForm from "../component/HCardForm/HCardForm";
import HCard from "../component/HCard/HCard";

import './HCardPage.scss'

const HCardPage = () => {
    // replace with state management tool when the system grows.
    const [hCardData, setHCardData] = useState<HCardDataResponse | undefined>();

    useEffect(() => {
        getHCardData().then((res) => {
            setHCardData(res)
        })
    }, [])

    return (
        <div className="h-card-page-wrapper" data-testid="h-card-page">
            <HCardForm data={hCardData} setHCardData={setHCardData} />
            <HCard data={hCardData} />
        </div>
    )
}

export default HCardPage
