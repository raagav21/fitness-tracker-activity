// filepath: src/components/ActivityItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function ActivityItem({ activity, onDelete }) {
  return (
    <div className="activity-item">
      <h3>{activity.name}</h3>
      <p><strong>Date:</strong> {activity.date}</p>
      <p><strong>Steps:</strong> {activity.steps.toLocaleString()}</p>
      <p><strong>Calories Burned:</strong> {activity.caloriesBurned}</p>
      <p><strong>Workout Minutes:</strong> {activity.workoutMinutes}</p>
      <p>
        <strong>Goal Achieved:</strong>{' '}
        <span className={activity.goalAchieved ? 'goal-yes' : 'goal-no'}>
          {activity.goalAchieved ? 'Yes' : 'No'}
        </span>
      </p>
      <div className="activity-actions">
        <Link to={`/activities/${activity.id}`} className="btn-detail">View Details</Link>
        <button onClick={() => onDelete(activity.id)} className="btn-delete">Delete</button>
      </div>
    </div>
  );
}

export default ActivityItem;