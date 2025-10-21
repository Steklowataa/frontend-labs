import GridProfile from "../components/Lab3/GridProfile"
import PersonProfile, { PersonProps } from "../components/Lab3/PersonProfile"
import { data } from "../data/module-data"



export default function Lab3() {
    return (
        <>
            <h1>Lista osob</h1>
            <div>
                <GridProfile element={PersonProfile} data={data}/>
            </div>
        </>
    )
}