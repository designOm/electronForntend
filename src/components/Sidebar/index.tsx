import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { hexToRGB } from "../../helpers";
import { AppMenu } from "../../types";

interface MenuList extends AppMenu {
  submenu?: AppMenu[];
}

const menuList: MenuList[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
  },
  {
    id: "patients",
    label: "Patients",
    path: "/patients",
    submenu: [
      {
        id: "patients_new_reg",
        label: "New Registration",
        path: "/patients/registration",
      },
      {
        id: "patients_list",
        label: "Patients List",
        path: "/patients/list",
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    path: "/reports",
  },
  {
    id: "billing_and_payments",
    label: "Billing And Payments",
    path: "/billing",
  },
  {
    id: "tests_and_packages",
    label: "Tests And Payments",
    path: "/manage-test",
  },
  {
    id: "doctors_and_hospitals",
    label: "Doctors And Hospitals",
    path: "/manage-doctors",
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ul className="menuList">
        {menuList.map((menu) => {
          const { id, label, path, submenu } = menu;

          if (submenu)
            return (
              <li key={id} className="menuItem has-subMenu">
                <span className="menuLabel">{label}</span>
                <ul className="submenuList">
                  {submenu.map((submenu) => {
                    const { id, label, path } = submenu;
                    return (
                      <li key={id} className="menuItem">
                        <NavLink className="menuLabel" to={path}>
                          {label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );

          return (
            <li key={id} className="menuItem">
              <NavLink to={path} className="menuLabel">
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  flex: 0 0 320px;
  max-width: 320px;
  background-color: var(--primaryLight);
  padding-left: 35px;
  padding-right: 35px;
  .menuList {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    .menuItem {
      margin-bottom: 10px;
      border-radius: 5px;
      .menuLabel {
        padding: 0 15px;
        display: flex;
        background-color: ${(props) =>
          hexToRGB(props.theme.colors.primary, 0.05)};
        align-items: center;
        font-size: 1.05rem;
        border-radius: inherit;
        width: 100%;
        height: 50px;
        color: var(--primary);
        letter-spacing: 0.75px;
        text-decoration: none;
        &.active {
          background: var(--primary);
          box-shadow: 0px 3px 10px ${(props) =>
          hexToRGB(props.theme.colors.primary, 0.32)};
          color:var(--primaryLight);
        }
      }
      .submenuList {
        list-style: none;
        width: 100%;
        padding: 8px 20px;
        border-radius: 0 0 5px 5px;
        background-color: ${(props) =>
          hexToRGB(props.theme.colors.primary, 0.06)};
        .menuItem {
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
          .menuLabel {
            height: 40px;
            font-size: 0.975rem;
            border-radius: 3px;
            background-color: ${(props) =>
              hexToRGB(props.theme.colors.primary, 0.07)};
            color: ${(props) => hexToRGB(props.theme.colors.primary, 0.8)};
          }
        }
      }
    }
  }
`;

export default Sidebar;
