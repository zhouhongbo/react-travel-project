import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography, Spin } from "antd";
import axios from "axios";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BussinessPartners,
} from "../../components";
// import { productList1, productList2, productList3 } from './mock'
import {
  fetchProductStartActionCreator,
  fetchProductSuccessActionCreator,
  fetchProductFailActionCreator,
} from "../../store/actions/products";
import sideImage1 from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import styles from "./Home.module.css";
import { StateType } from "../../store";

export const Home: React.FC = () => {
  // const [productList, setProductList] = useState<any>()
  // const [isLoad, setIsLoad] = useState(true)
  // const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const productList = useSelector(
    (state: StateType) => state.products.productList
  );
  const isLoad = useSelector(
    (state: StateType) => state.products.isLoad
  );
  const errorMsg = useSelector(
    (state: StateType) => state.products.errorMsg
  );
  const dispatch = useDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchProductStartActionCreator());
    axios
      .get("http://123.56.149.216:8080/api/productCollections")
      .then(({ data }) => {
        dispatch(fetchProductSuccessActionCreator(data));
        // setProductList(data)
        // setIsLoad(false)
        // setErrorMsg(null)
      })
      .catch((error) => {
        dispatch(fetchProductFailActionCreator(error.toString()));
        // setErrorMsg(error.toString())
        // setIsLoad(false)
      });
  }, []);

  if (isLoad) return <Spin />;
  if (errorMsg) return <div>访问异常：{errorMsg}</div>;

  return (
    <div>
      <Header />
      {/* 网站内容 */}
      <div className={styles["page-content"]}>
        {/* 侧边菜单和走马灯 */}
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div>
              <SideMenu />
            </div>
          </Col>
          <Col span={18}>
            <div style={{ backgroundColor: "blue" }}>
              <Carousel />
            </div>
          </Col>
        </Row>
        {/* 爆款推荐 */}
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              {t("home_page.hot_recommended")}
            </Typography.Title>
          }
          sideImage={sideImage1}
          products={productList[0].touristRoutes}
        />
        {/* 新品上市 */}
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        {/* 国内游推荐 */}
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        />
        <BussinessPartners />
      </div>
      <Footer />
    </div>
  );
};
