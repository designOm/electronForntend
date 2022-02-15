import { SubmenuDropDownIcon } from "assets/icons";
import { AppBrand, PortalUI } from "components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { hexToRGB } from "helpers";
import { AppMenu } from "types";

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
    submenu: [
      {
        id: "patients_new_reg1",
        label: "New Registration 01",
        path: "/patients/registration",
      },
      {
        id: "patients_list1",
        label: "Patients List 02",
        path: "/patients/list",
      },
    ],
  },
  {
    id: "billing_and_payments",
    label: "Billing And Payments",
    path: "/billing",
    submenu: [
      {
        id: "patients_new_reg2",
        label: "New Registration 03",
        path: "/patients/registration",
      },
      {
        id: "patients_list2",
        label: "Patients List 03",
        path: "/patients/list",
      },
    ],
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
  {
    id: "app_settings",
    label: "Settings",
    path: "/manage-doctors",
  },
];

const INITIAL_STATE = {
  activeLiEl: null,
  submenu: null,
};

const Sidebar = () => {
  const refs = React.useRef<(HTMLLIElement | null)[]>([]);

  const [activeSubmenu, setActiveSubMenu] = useState<{ activeLiEl: HTMLLIElement | null; submenu: null | AppMenu[] }>(INITIAL_STATE);

  const handleMenuClick = (index: number, submenu: AppMenu[], path: string) => {
    setActiveSubMenu((prevSubmenu) => {
      const prevActiveElIndex = refs.current.indexOf(prevSubmenu.activeLiEl);

      if (prevSubmenu.activeLiEl && prevActiveElIndex === index) return INITIAL_STATE;
      return { ...prevSubmenu, activeLiEl: refs.current[index], submenu };
    });
  };

  return (
    <React.Fragment>
      <SidebarContainer>
          <AppBrand />
        <ul className="menuList">
          {menuList.map((menu, index) => {
            const { id, label, path, submenu } = menu;

            if (submenu)
              return (
                <li key={id} className="menuItem has-subMenu" ref={(ref) => (refs.current[index] = ref)} onClick={() => handleMenuClick(index, submenu, path ?? "/#")}>
                  <span className="menuLabel">
                    <span className="text">{label}</span>
                    <span className="icon">
                      <SubmenuDropDownIcon />
                    </span>
                  </span>
                </li>
              );

            return (
              <li key={id} className="menuItem" ref={(ref) => (refs.current[index] = ref)} onClick={() => setActiveSubMenu(INITIAL_STATE)}>
                <NavLink to={path ?? "/#"} className="menuLabel">
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </SidebarContainer>

      {activeSubmenu.activeLiEl && (
        <PortalUI parent={activeSubmenu.activeLiEl}>
          <ul className="submenuList">
            {activeSubmenu.submenu?.map((submenu) => {
              const { id, label, path } = submenu;
              return (
                <li key={id} className="menuItem">
                  <NavLink className="menuLabel" to={path ?? "/#"}>
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </PortalUI>
      )}
    </React.Fragment>
  );
};

const activeMenuCss = css`
  background: var(--primary);
  box-shadow: 0px 2px 4px ${(props) => hexToRGB(props.theme.colors.primary, 0.32)};
  color: var(--primaryLight);
`;

const commonMenuLabelCss = css`
  display: flex;
  align-items: center;
  border-radius: inherit;
  width: 100%;
  letter-spacing: 0.75px;
  text-decoration: none;
`;

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
    & > .menuItem {
      margin-bottom: 10px;
      border-radius: 5px;
      &.active {
        & > .menuLabel {
          ${activeMenuCss}
          .icon {
            svg {
              transform: rotate(-180deg);
            }
            svg,
            path {
              /* fill: var(--primaryLight); */
              stroke: var(--primaryLight);
            }
          }
        }
      }
      & > .menuLabel {
        ${commonMenuLabelCss}
        padding: 0 15px;
        background-color: ${(props) => hexToRGB(props.theme.colors.primary, 0.05)};
        height: 50px;
        font-size: 1.05rem;
        color: var(--primary);

        .icon {
          margin-left: auto;
        }
        &.active {
          ${activeMenuCss}
        }
      }
      .submenuList {
        list-style: none;
        width: 100%;
        padding: 8px 20px;
        border-radius: 0 0 5px 5px;
        /* background-color: ${(props) => hexToRGB(props.theme.colors.primary, 0.06)}; */
        .menuItem {
          margin-bottom: 8px;
          &:last-child {
            margin-bottom: 0;
          }
          .menuLabel {
            ${commonMenuLabelCss}
            padding:0 12px;
            height: 40px;
            font-size: 0.875rem;
            position: relative;
            border-radius: 3px;
            border: 1.5px solid transparent;
            background-color: ${(props) => hexToRGB(props.theme.colors.primary, 0.07)};
            color: ${(props) => hexToRGB(props.theme.colors.primary, 0.8)};
            &.active {
              border-color: var(--primary);
              color: var(--primary);
              font-weight: 500;
              &::after {
                content: "";
                position: absolute;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                right: 12px;
                top: 13px;
                background-color: var(--primary);
              }
            }
          }
        }
      }
    }
  }
`;

export default Sidebar;
