import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../Style/MainWindow.css";
import Notepage from "./Notepage";
import Todopage from "./Todopage";
import Tracker from "./Tracker";

function MainWindow() {
  return (
    <div>
      <Tabs>
        <div className="vertical-tabs">
          {/* Sidebar */}
          <div className="tab-sidebar">
            <div className="sidebar-top">
              <div className="logo">Noteapp</div>
              <TabList className="custom-tab-list">
                <Tab>Note's</Tab>
                <Tab>To-Do's</Tab>
                <Tab>Activities</Tab>
              </TabList>
            </div>

            <div className="sidebar-bottom">
              <button className="theme-toggle">🌙 Theme</button>
              <button className="login-button">🔒 Profile</button>
            </div>
          </div>

          {/* Content */}
          <div className="tab-panels">
            <TabPanel><Notepage /></TabPanel>
            <TabPanel><Todopage /></TabPanel>
            <TabPanel><Tracker /></TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default MainWindow;
