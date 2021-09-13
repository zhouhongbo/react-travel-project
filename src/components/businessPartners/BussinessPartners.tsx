import React from 'react'
import {Row, Col, Divider} from 'antd'
import styles from './BussinessPartners.module.css'
import image1 from '../../assets/images/microsoft-80658_640.png'
import image2 from '../../assets/images/icon-720944_640.png'
import image3 from '../../assets/images/follow-826033_640.png'
import image4 from '../../assets/images/facebook-807588_640.png'

export const BussinessPartners: React.FC = () => {
  return (
    <div>
      <Divider orientation="left">
        <span className={styles.title}>合作企业</span>
      </Divider>
      <Row>
        <Col span={6}>
          <img src={image1} alt="" className={styles.image} />
        </Col>
        <Col span={6}>
          <img src={image2} alt="" className={styles.image} />
        </Col>
        <Col span={6}>
          <img src={image3} alt="" className={styles.image} />
        </Col>
        <Col span={6}>
          <img src={image4} alt="" className={styles.image} />
        </Col>
      </Row>
    </div>
  )
}