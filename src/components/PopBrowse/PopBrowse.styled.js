import styled, { css } from "styled-components";
import { hover01, hover03 } from "../../components/shared.styled";
import { Link } from "react-router-dom";
import { breakpoints } from "../../lib/breakpoints";

const themeStyles = {
  orange: css`
    background-color: #ffe4c2;
    color: #ff6d00;
  `,
  green: css`
    background-color: #b4fdd1;
    color: #06b16e;
  `,
  purple: css`
    background-color: #e9d4ff;
    color: #9a48f1;
  `,
  gray: css`
    background: #94a6be;
    color: #ffffff;
  `,
};

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  @media screen and (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: ${breakpoints.lg}px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 730px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: ${breakpoints.lg}px) {
    border-radius: 0;
  }
  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
    display: none;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0.4")};
  ${({ $theme }) => themeStyles[$theme] || ""}
`;

export const CategoriesThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  ${({ $theme }) => themeStyles[$theme] || ""}
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${(props) =>
    props.$highlighted || props.$isChecked ? "#94a6be" : " #FFFFFF"};
  color: ${(props) =>
    props.$highlighted || props.$isChecked ? "#FFFFFF" : "#94a6be"};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
`;

export const StatusThemeText = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelSubtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ readOnly }) => (readOnly ? "#eaeef6" : "transparent")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ThemeDownDown = styled.div`
  display: none;
  margin-bottom: 20px;
  @media screen and (max-width: ${breakpoints.md}px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const CategoriesText = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopBrowseButtonBrowse = styled.div`
  display: ${({ $isHide }) => ($isHide ? "none" : "flex")};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
`;

export const ButtonEdit = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  margin-right: 8px;
  height: 30px;
  /* margin-bottom: 10px; */
  padding: 0 14px;
  ${hover03}
  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;

export const ButtonLink = styled(Link)`
  color: #565eef;
`;

export const ButtonDelete = styled(ButtonEdit)``;

export const ButtonClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  ${hover01}
  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  padding-top: 10px;
`;

export const ButtonLinkClose = styled(ButtonLink)`
  color: #ffffff;
`;

export const PopBrowseButtonEdit = styled(PopBrowseButtonBrowse)`
  display: ${({ $isHide }) => ($isHide ? "none" : "flex")};
`;

export const ButtonSave = styled(ButtonClose)`
  margin-right: 8px;
`;

export const ButtonLinkSave = styled(ButtonLinkClose)``;

export const ButtonCancel = styled(ButtonEdit)``;

export const ButtonLinkCancel = styled(ButtonLink)`
  color: #ffffff;
`;