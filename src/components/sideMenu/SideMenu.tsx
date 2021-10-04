import React from "react";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "./mock";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((item) => (
        <Menu.SubMenu
          key={nanoid()}
          title={
            <span>
              <GifOutlined />
              {item.title}
            </span>
          }
        >
          {item.subMenu.map((subItem) => (
            <Menu.SubMenu
              key={nanoid()}
              title={
                <span>
                  <GifOutlined />
                  {subItem.title}
                </span>
              }
            >
              {subItem.subMenu.map((subSubItem) => (
                <Menu.Item key={nanoid()}>
                  <span>
                    <GifOutlined />
                    {subSubItem}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
