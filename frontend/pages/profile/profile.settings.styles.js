import styled from "styled-components";
import { Card } from "antd";

export const StyledProfileSettingCard = styled(Card)`
  margin-bottom: 20px;
  &.checkbox-card {
    .ant-card-body {
      display: flex;
      .ant-switch {
        margin-left: auto;
      }
    }
  }
  .ant-card-body {
    button,
    input {
      margin-top: 10px;
    }
  }
`;
