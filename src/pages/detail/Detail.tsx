import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styles from "./Detail.module.css";

interface MatchParams {
  touristRouteId: string;
}

export const Detail: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  console.log(props);
  return <div>Detail{props.match.params.touristRouteId}</div>;
};
