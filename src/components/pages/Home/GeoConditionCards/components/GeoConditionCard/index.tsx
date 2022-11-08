import styled from "styled-components";
import { device } from "style/breakpoints";

type GeoConditionCardProps = {
  title: string;
  value: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  isLocation?: boolean;
};

const StyledGeoConditionCard = styled.div`
  padding: 28px 18px 18px 20px;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  gap: 5px;
  border-radius: 16px;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.15);

  @media ${device.laptop} {
    padding: 30px 35px 40px 35px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 800;

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const Value = styled.span`
  grid-column: 1/-1;
  font-size: 30px;
  font-weight: 700;

  @media ${device.laptop} {
    font-size: 44px;
  }
`;

const LocationValue = styled(Value)`
  font-size: 16px;

  @media ${device.laptop} {
    font-size: 22px;
  }
`;

export default function GeoConditionCard({
  title,
  value,
  Icon,
  isLocation,
}: GeoConditionCardProps) {
  return (
    <StyledGeoConditionCard>
      <Title>{title}</Title>
      <Icon />
      {isLocation ? (
        <LocationValue>{value}</LocationValue>
      ) : (
        <Value>{value}</Value>
      )}
    </StyledGeoConditionCard>
  );
}
