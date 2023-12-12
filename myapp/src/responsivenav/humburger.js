import React from 'react';
import './style.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar' style={{  height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact to="/Dtechadmin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Admin Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Empdashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Employee Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact  activeClassName="activeClicked">
              <Link to="/Employeepage">
              <CDBSidebarMenuItem icon="table">All Employee</CDBSidebarMenuItem>
              </Link>
            </NavLink>
            <NavLink exact to="/Clientpage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Clients</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Dtechproject" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Leadpage" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Leads</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Tickets" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Tickets</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Pricing" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Pricing</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Sales</CDBSidebarMenuItem>
            </NavLink>
  
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;