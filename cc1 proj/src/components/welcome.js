import React, { Component } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './welcome.css';
function Welcome()
{
  return(
    <div class="bg-image">
      <SideNav>
        <Toggle />
        <Nav>
          <NavItem>
            <NavIcon />
            <NavText />
          </NavItem>
          <NavItem>
            <NavIcon />
            <NavText />
          </NavItem>
        </Nav>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="services">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Services
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Reports
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Agents
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Enquiries
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
      <div class="text">
    <h1>Excursy</h1>
    <h2>When elegance meets comfort!</h2>
    </div>
    </div>
  )
}
export default Welcome;