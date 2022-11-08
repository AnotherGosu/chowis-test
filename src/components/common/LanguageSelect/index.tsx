import styled from "styled-components";
import { useState, useRef } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import { ReactComponent as SelectArrowIcon } from "images/select-arrow-icon.svg";
import { ReactComponent as SelectLanguageIcon } from "images/select-language-icon.svg";
import { languageSelectOptions } from "static/constants";

type LanguageSelectProps = {
  className?: string;
  listPosition?: "up" | "down";
};

const SelectWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SelectButton = styled.button`
  padding: 9px 12px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  border-color: ${(props) => props.theme["pr-600"]};
  border-radius: 12px;
  outline: none;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme["pr-600"]};
  background-color: transparent;
`;

const StyledSelectArrowIcon = styled(SelectArrowIcon)`
  width: 18px;
  height: 9px;

  path {
    stroke: ${(props) => props.theme["pr-600"]};
  }
`;

const SelectOptions = styled.ul<{ listPosition?: "up" | "down" }>`
  position: absolute;
  top: ${({ listPosition }) => (listPosition === "down" ? "100%" : "unset")};
  bottom: ${({ listPosition }) => (listPosition === "down" ? "unset" : "100%")};
  left: 0;
  width: 162px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  color: ${(props) => props.theme["pr-600"]};
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  list-style: none;
  overflow: hidden;
  z-index: 50;
`;

const SelectOption = styled.li`
  padding: 20px 15px;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  transition: ${(props) => props.theme["transition-main"]};

  :hover {
    background-color: ${(props) => props.theme["gs-100"]};
  }
`;

export default function LanguageSelect({
  className,
  listPosition = "down",
}: LanguageSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguageValue, setSelectedLanguageValue] = useState("eng");
  const selectOptionsRef = useRef(null);

  const currentLanguage = languageSelectOptions.find(
    (language) => language.value === selectedLanguageValue
  );

  const toggleOptionsList = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClick = (value: string) => {
    setSelectedLanguageValue(value);
    setIsOpen(false);
  };

  useOutsideClick(selectOptionsRef, () => setIsOpen(false));

  return (
    <SelectWrapper className={className} ref={selectOptionsRef}>
      <SelectButton
        type="button"
        onClick={toggleOptionsList}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <SelectLanguageIcon />
        <span>{currentLanguage?.text}</span>
        <StyledSelectArrowIcon />
      </SelectButton>
      {isOpen && (
        <SelectOptions
          role="listbox"
          aria-activedescendant={currentLanguage?.value}
          tabIndex={-1}
          listPosition={listPosition}
        >
          {languageSelectOptions.map(({ text, value }) => (
            <SelectOption
              id={value}
              key={value}
              onClick={() => onOptionClick(value)}
              role="option"
              aria-selected={value === currentLanguage?.value}
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
