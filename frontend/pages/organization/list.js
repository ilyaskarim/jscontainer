import styled from "styled-components";
import { Row, Col, Pagination, Button, Card } from "antd";
import Router from "next/router"

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
      <Row gutter={16} >
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
            <Col span={24}>
              <StyledUserContainer actions={[<Button onClick={ () =>{
                Router.push(`/organization/12`)
              } } >View</Button>]}>
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
