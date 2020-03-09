import React from "react";
import PlannerCard from "./PlannerCard";

const PlannerList = ({title}) => {
    return (
        <div style={styles.container}>
        <h4>List</h4>
        <PlannerCard/>
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius:3,
        width:300,
        padding:8,
    }
}

export default PlannerList;