import { useContext, useEffect } from "react";
import { ActivityContext } from "../context/ActivityContext";

const Stats = () => {
  const { state } = useContext(ActivityContext);

  const total = state.activities.length;

  const achieved = state.activities.filter(a => a.goalAchieved).length;
  const notAchieved = total - achieved;

  // REQUIRED GLOBAL OBJECT
  useEffect(() => {
    window.appState = {
      totalActivities: total,
      goalAchieved: achieved,
      goalNotAchieved: notAchieved
    };
  }, [state]);

  return (
    <div>
      <h2>Stats</h2>

      <p data-testid="total-activities">{total}</p>
      <p data-testid="goal-achieved">{achieved}</p>
      <p data-testid="goal-not-achieved">{notAchieved}</p>
    </div>
  );
};

export default Stats;