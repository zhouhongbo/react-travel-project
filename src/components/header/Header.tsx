import React from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { StateType } from "../../store";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../store/actions/language";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  const language = useSelector((state: StateType) => state.language.language);
  const languageList = useSelector(
    (state: StateType) => state.language.languageList
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleMenuClick = (e) => {
    if (e.key === "new") {
      const action = addLanguageActionCreator("新语言", "new_language");
      dispatch(action);
    } else {
      const action = changeLanguageActionCreator(e.key);
      dispatch(action);
    }
  };

  const displayLanguage = (languageCode) => {
    if (languageCode === "zh") return "中文";
    if (languageCode === "en") return "English";
    return "新语言";
  };

  const menuConfig = [
    {
      key: "1",
      content: t("header.home_page"),
    },
    {
      key: "2",
      content: t("header.weekend"),
    },
    {
      key: "3",
      content: t("header.group"),
    },
    {
      key: "4",
      content: t("header.backpack"),
    },
    {
      key: "5",
      content: t("header.private"),
    },
    {
      key: "6",
      content: t("header.cruise"),
    },
    {
      key: "7",
      content: t("header.hotel"),
    },
    {
      key: "8",
      content: t("header.local"),
    },
    {
      key: "9",
      content: t("header.theme"),
    },
    {
      key: "11",
      content: t("header.study"),
    },
    {
      key: "12",
      content: t("header.visa"),
    },
    {
      key: "13",
      content: t("header.enterprise"),
    },
    {
      key: "14",
      content: t("header.high_end"),
    },
    {
      key: "15",
      content: t("header.outdoor"),
    },
    {
      key: "16",
      content: t("header.insurance"),
    },
  ];

  return (
    <div className={styles["app-header"]}>
      {/* 第一行 注册登录 */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          {/* 语言选择 */}
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={handleMenuClick}>
                {languageList.map((item) => (
                  <Menu.Item key={item.code}>{item.name}</Menu.Item>
                ))}
                <Menu.Item key="new">{t("header.add_new_language")}</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {displayLanguage(language)}
          </Dropdown.Button>
          {/* 注册登录 */}
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => history.push("register")}>
              {t("header.register")}
            </Button>
            <Button onClick={() => history.push("logIn")}>
              {t("header.signin")}
            </Button>
          </Button.Group>
        </div>
      </div>
      {/* 第二行 搜索 */}
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => history.push("/")}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title level={3} className={styles.title}>
            {t("header.title")}
          </Typography.Title>
        </span>
        <Input.Search
          placeholder={t("header.placeholder")}
          className={styles["search-input"]}
        />
      </Layout.Header>
      {/* 第三行 目录 */}
      <Menu mode="horizontal" className={styles["main-menu"]}>
        {menuConfig.map((item) => (
          <Menu.Item key={item.key}>{item.content}</Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
