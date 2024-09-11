import styled from "styled-components";

export const controllContainer = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: grid;
  justify-content: center;
  grid-template-columns: 0.8fr 5fr;
  gap: 25px;
  padding: 15px 20px;
`;

export const contentDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 3px solid ${(props) => props.theme.colors.grey};
`;

export const titleDiv = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid ${(props) => props.theme.colors.grey};
  font-size: 20px;
  font-weight: 600;
  position: relative;
  color: ${(props) => props.theme.colors.primary_dark};
`;

export const work = styled.li`
  width: 102%;
  white-space: nowrap;
  overflow: hidden;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 20px 0 30px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  margin: 0 -3px;
  color: ${(props) =>
    props.$isSelected
      ? props.theme.fonts.color
      : props.theme.colors.primary_dark};

  background-color: ${(props) =>
    props.$isSelected ? props.theme.colors.secundary_2 : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.secundary_1};
    color: ${(props) => props.theme.fonts.color};
    transition: background-color 0.1s ease;
  }
`;
export const calendarContainerWrapper = styled.div`
  position: relative;
`;

export const calendarContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 100%;
`;

export const placeAndDateDiv = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
`;

export const getLastHHRecordButton = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.secundary_2};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.secundary_1};
    transition: background-color 0.1s ease;
  }
`;

export const hhRecordDiv = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(${(props) => props.$windowHeight}px - 253px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 15px;
  padding: 20px;
  margin: 10px 1px 0 0;
  overflow-y: scroll;
  border-bottom: 3px solid ${(props) => props.theme.colors.grey};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary_2};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secundary_2};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.secundary_1};
  }
`;

export const activityDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;

export const visibleActivityDiv = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const ActivitySelect = styled.select`
  width: min-content;
  padding: 0 10px;
  height: 100%;
`;

export const hiddenActivityDiv = styled.div`
  width: 80%;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: start;
`;

export const openActivityButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 3px solid ${(props) => props.theme.colors.secundary_2};
  color: ${(props) => props.theme.colors.secundary_2};
  cursor: pointer;
  font-size: 26px;

  &:hover {
    border-color: ${(props) => props.theme.colors.secundary_1};
    color: ${(props) => props.theme.colors.secundary_1};
    transition: background-color 0.1s ease;
  }
`;

export const activityInputDiv = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 20px;
  border: 3px solid ${(props) => props.theme.colors.grey};
  border-radius: 10px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: start;
`;

export const deleteButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 45px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: -3px;
  cursor: pointer;
  background: none;
  border: 3px solid ${(props) => props.theme.colors.danger};
  opacity: 0.9;

  &:hover {
    background: ${(props) => props.theme.colors.danger};
    transition: background-color 0.1s ease;
    svg {
      path {
        fill: ${(props) => props.theme.fonts.color};
      }
    }
  }

  svg {
    path {
      fill: ${(props) => props.theme.colors.danger};
    }
  }
`;

export const addOneMoreButton = styled.button`
  width: 175px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.secundary_2};
  border-radius: 10px;
  color: ${(props) => props.theme.fonts.color};
  font-size: 32px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secundary_1};
    transition: background-color 0.1s ease;
  }
`;

export const finalCheckDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding-right: 50px;
  justify-content: end;
  position: relative;
`;

export const summaryDiv = styled.div`
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
`;
