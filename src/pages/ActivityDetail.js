import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useContext(ActivityContext);

  const activity = state.activities.find(a => a.id.toString() === id);

  if (!activity) return <p>Not found</p>;

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>Steps: {activity.steps}</p>
      <p>Calories: {activity.caloriesBurned}</p>
      <p>Workout Minutes: {activity.workoutMinutes}</p>
    </div>
  );
};

export default ActivityDetail;