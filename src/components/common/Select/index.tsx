import styled from "styled-components";
import { useState, useRef } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import { ReactComponent as SelectArrowIcon } from "images/select-arrow-icon.svg";
import { device } from "style/breakpoints";

type SelectProps = {
  title: string;
  value: string;
  options: Array<{ value: string; text: string }>;
  onChange: (value: string) => void;
};

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SelectTitle = styled.span`
  font-weight: 500;
  color: #7c7c7c;
`;

const SelectButton = styled.button`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 12px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  color: #ffffff;
  background-color: ${(props) => props.theme["pr-600"]};

  @media ${device.laptop} {
    font-size: 18px;
  }
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 90%;
  left: 50%;
  width: 175px;
  height: max-content;
  max-height: 200px;
  overflow-y: auto;
  transform: translateX(-50%);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 14px;
  z-index: 50;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d9d9d9;
  }
`;

const SelectOption = styled.li`
  padding: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 18px;

  text-align: center;

  color: #7c7c7c;
  cursor: pointer;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    background-color: ${(props) => props.theme["pr-600"]};
  }
`;

export default function Select({
  title,
  value,
  options,
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectOptionsRef = useRef(null);

  const currentOption = options.find((option) => option.value === value);
  const selectInnerText = currentOption ? currentOption.text : "----";

  const toggleOptionsList = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  useOutsideClick(selectOptionsRef, () => setIsOpen(false));

  return (
    <SelectWrapper ref={selectOptionsRef}>
      <SelectTitle>{title}</SelectTitle>
      <SelectButton
        type="button"
        onClick={toggleOptionsList}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectInnerText}</span>
        <SelectArrowIcon />
      </SelectButton>
      {isOpen && (
        <SelectOptions
          role="listbox"
          aria-activedescendant={currentOption?.value}
          tabIndex={-1}
        >
          {options.map(({ text, value }) => (
            <SelectOption
              id={value}
              key={value}
              onClick={() => onOptionClick(value)}
              role="option"
              aria-selected={value === currentOption?.value}
              tabIndex={0}
            >
              {text}
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectWrapper>
  );
}
