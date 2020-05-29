import { Row, Col, Pagination, Switch, Tabs, Input, Button } from "antd";

import { StyledProfileContainersHeader, StyledUserContainer, StyledProfileContainersSearchInput } from "./containers.styles";
import { StyledContainer } from "../../src/styles/GlobalStyle";
import { StyledProfileSettingCard } from "./profile.settings.styles";

const { TabPane } = Tabs;

export default function () {
  return (
    <StyledContainer>
      <Row>
        <Col span={24}>
          <StyledProfileContainersHeader>
            <h3>Settings</h3>
          </StyledProfileContainersHeader>
        </Col>
      </Row>
      <Tabs animated={false} defaultActiveKey="1" onChange={() => {}}>
        <TabPane tab="Profile" key="1">
          <Row gutter={16}>
            <Col span={12}>
              <StyledProfileSettingCard>
                <span>Name</span>
                <Input placeholder="Your name" />
              </StyledProfileSettingCard>
            </Col>
            <Col span={12}>
              <StyledProfileSettingCard>
                <span>Email</span>
                <Input placeholder="Your email" disabled={true}  />
              </StyledProfileSettingCard>
            </Col>
            <Col span={12}>
              <StyledProfileSettingCard>
                <span>Change password</span>
                <Input placeholder="Write your new password" />
                <Button>Change Password</Button>
              </StyledProfileSettingCard>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Default Container Settings" key="2">
          <Row gutter={16}>
            <Col span={6}>
              <StyledProfileSettingCard className="checkbox-card">
                <span>Private</span>
                <Switch></Switch>
              </StyledProfileSettingCard>
            </Col>
            <Col span={6}>
              <StyledProfileSettingCard className="checkbox-card">
                <span>Show in search</span>
                <Switch></Switch>
              </StyledProfileSettingCard>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Global Settings" key="3">
          <Row gutter={16}>
            <Col span={6}>
              <StyledProfileSettingCard className="checkbox-card">
                <span>Allow searching your containers</span>
                <Switch></Switch>
              </StyledProfileSettingCard>
            </Col>
            <Col span={6}>
              <StyledProfileSettingCard className="checkbox-card">
                <span>Allow searching organization containers</span>
                <Switch></Switch>
              </StyledProfileSettingCard>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </StyledContainer>
  );
}
