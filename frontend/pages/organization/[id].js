import styled from "styled-components";
import { Row, Col, Pagination, Button, Card } from "antd";
import Router from "next/router";

import { StyledProfileContainersHeader, StyledProfileContainersSearchInput, StyledUserContainer } from "./../profile/containers.styles";
import { StyledContainer } from "../../src/styles/GlobalStyle";
import { StyledOrgaizationViewNewContainerButton } from "./organization.view.styles";

const { Meta } = Card;
export default function () {
  return (
    <StyledContainer>
      <Row>
        <Col span={24}>
          <StyledProfileContainersHeader>
            <div style={{ display: "flex" }}>
              <h3>uConnect Pvt</h3>
              <StyledOrgaizationViewNewContainerButton
                onClick={() => {
                  Router.push("/?organization=12");
                }}
              >
                Create new container
              </StyledOrgaizationViewNewContainerButton>
            </div>
          </StyledProfileContainersHeader>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <StyledProfileContainersSearchInput
            placeholder="Search a container"
            enterButton="Search"
            size="large"
            onSearch={(value) => console.log(value)}
          />
        </Col>
        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1].map(() => {
          return (
            <Col span={4}>
              <StyledUserContainer actions={[<Button>View</Button>]}>
                <Meta title="Untitled container" description="created: 2 years ago" />
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
