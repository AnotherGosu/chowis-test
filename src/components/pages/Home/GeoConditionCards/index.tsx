import styled from "styled-components";
import { ReactComponent as TemperatureIcon } from "images/temperature-icon.svg";
import { ReactComponent as HumidityIcon } from "images/humidity-icon.svg";
import { ReactComponent as UVIndexIcon } from "images/uvindex-icon.svg";
import { ReactComponent as LocationIcon } from "images/location-icon.svg";

import GeoConditionCard from "./components/GeoConditionCard";

const GeoConditionCardsWrapper = styled.div`
  margin: 100px 0 25px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export default function LocationCards() {
  return (
    <GeoConditionCardsWrapper>
      {geoConditionCards.map((card) => (
        <GeoConditionCard {...card} />
      ))}
    </GeoConditionCardsWrapper>
  );
}

const geoConditionCards = [
  {
    title: "Temperature",
    value: "1°C",
    Icon: TemperatureIcon,
  },
  {
    title: "Humidity",
    value: "93%",
    Icon: HumidityIcon,
  },
  {
    title: "UV Index",
    value: "1.73",
    Icon: UVIndexIcon,
  },
  {
    title: "Location",
    value: "Long Beach, CA",
    Icon: LocationIcon,
    isLocation: true,
  },
];
