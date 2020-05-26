import { Card, Avatar, Button, Input } from "antd";
import { Row, Col, Pagination } from "antd";

import { StyledProfileContainersHeader, StyledUserContainer, StyledProfileContainersSearchInput } from "./containers.styles";
import { StyledContainer } from "../../src/styles/GlobalStyle";

const { Meta } = Card;

export default function () {
  return (
    <StyledContainer>
      <Row>
        <Col span={24}>
          <StyledProfileContainersHeader>
            <h3>Your containers</h3>
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
              <StyledUserContainer style={{ width: 300 }} actions={[<Button>View</Button>]}>
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
