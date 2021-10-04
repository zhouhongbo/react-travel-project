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
import { useSelector } from "../../redux/hooks";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

export const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  const language = useSelector((state: any) => state.language.language);
  const languageList = useSelector((state: any) => state.language.languageList);
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

  return (
    <div className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
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
      <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  );
};
