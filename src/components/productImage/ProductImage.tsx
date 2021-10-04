import React from "react";
import { Image, Typography } from "antd";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import styles from "./ProductImage.module.css";

interface PropsType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

const ProductImageComponent: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
  history,
  location,
  match,
}) => {
  return (
    <Link to={`detail/${id}`}>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={600} />
      ) : (
        <Image src={imageSrc} height={120} width={284} />
      )}
      <div>
        <Typography.Text type="secondary" style={{ display: "block" }}>
          {title.slice(0, 21)}
        </Typography.Text>
        <Typography.Text type="danger" strong>
          ￥ {price} 起
        </Typography.Text>
      </div>
    </Link>
  );
};

export const ProductImage = withRouter(ProductImageComponent);
