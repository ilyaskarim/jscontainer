import styled from "styled-components";
import { Row, Col, Pagination, Button, Card } from "antd";

import { StyledProfileContainersHeader, StyledProfileContainersSearchInput, StyledUserContainer } from "./../profile/containers.styles";
import { StyledContainer } from "../../src/styles/GlobalStyle";

const { Meta } = Card;

export default function () {
  return (
    <StyledContainer>
      <Row>
        <Col span={24}>
          <StyledProfileContainersHeader>
            <h3>Your organizations</h3>
          </StyledProfileContainersHeader>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <StyledProfileContainersSearchInput
            placeholder="Search your organization"
            enterButton="Search"
            size="large"
            onSearch={(value) => console.log(value)}
          />
        </Col>
        {["Uconnect", "Wapgee", "jSDevs", "Froala"].map((a) => {
          return (
            <Col span={4}>
              <StyledUserContainer style={{ width: 300 }} actions={[<Button>View</Button>]}>
                <Meta title={`${a}`} description={`https://${a}.com`} />
              </StyledUserContainer>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col span={24}>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </StyledContainer>
  );
}
