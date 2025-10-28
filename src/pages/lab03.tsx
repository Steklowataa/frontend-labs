import GridProfile from "../components/Lab3/GridProfile"
import PersonProfile from "../components/Lab3/PersonProfile"

export default function Lab3() {
    return (
        <>
            <h1>Lista osob</h1>
            <div>
                {/* 'data' prop is no longer passed */}
                <GridProfile element={PersonProfile} />
            </div>
        </>
    )
}