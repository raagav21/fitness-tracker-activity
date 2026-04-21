import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
import ActivityItem from "../components/ActivityItem";
import { Link } from "react-router-dom";

const Activities = () => {
  const { state } = useContext(ActivityContext);

  return (
    <div>
      <h2>Activities</h2>
      {state.activities.map(activity => (
        <div key={activity.id} data-testid="activity-item">
          <Link to={`/activities/${activity.id}`}>
            <ActivityItem activity={activity} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Activities;