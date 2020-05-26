import styled from "styled-components";
import { Card,Input } from "antd";
const { Search } = Input;

export const StyledProfileContainersHeader = styled.div`
  padding: 20px 0;
`;

export const StyledUserContainer = styled(Card)`
  height: 154px;
  margin-bottom: 20px;
`;

export const StyledProfileContainersSearchInput=  styled(Search)`
  margin-bottom: 30px;
`
