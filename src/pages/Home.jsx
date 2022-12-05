import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, {SectionTitle,SectionBody} from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import ProductCar from '../components/ProductCar'
import productData from '../assets/fake-data/products'
import heroSliderData from '../assets/fake-data/hero-slider'
import { Link } from 'react-router-dom'

import banner from '../assets/images/banner.png'
const Home = () => {
  return (
    <Helmet title='Trang chủ'>
        <HeroSlider 
            data={heroSliderData}
            control={true}
            auto={false}
            timeOut={5000}
        />
        <Section>
          <SectionBody>
              <Grid
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
              >
                  {
                    policy.map((item,index)=><Link  key={index} to='/policy'>
                        <PolicyCard
                          name= {item.name}
                          descrition={item.description}
                          icon= {item.icon}
                    />

                    </Link>)
                  }
              </Grid>
              
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>
                  Top sản phẩm bán chạy trong tuần
          </SectionTitle>
          <SectionBody>
              <Grid
                      col={4}
                      mdCol={2}
                      smCol={1}
                      gap={20}
               >

                  {
                    productData.getProducts(4).map((item,index)=>(
                      <ProductCar
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        title ={item.title}
                        price={Number(item.price)}
                        slug= {item.slug}
                      >

                      </ProductCar>
                    ))
                  }
              </Grid>
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>
                  Sản phẩm mới 
          </SectionTitle>
          <SectionBody>
              <Grid
                      col={4}
                      mdCol={2}
                      smCol={1}
                      gap={20}
               >

                  {
                    productData.getProducts(8).map((item,index)=>(
                      <ProductCar
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        title ={item.title}
                        price={Number(item.price)}
                        slug= {item.slug}
                      >

                      </ProductCar>
                    ))
                  }
              </Grid>
          </SectionBody>
        </Section>

        <Section>
          <SectionBody>
                  <Link to="/catalog">
                    <img src={banner}></img>
                  </Link>
          </SectionBody>
        </Section>
        
        <Section>
          <SectionTitle>
                  Phổ biến
          </SectionTitle>
          <SectionBody>
              <Grid
                      col={4}
                      mdCol={2}
                      smCol={1}
                      gap={20}
               >

                  {
                    productData.getProducts(8).map((item,index)=>(
                      <ProductCar
                        key={index}
                        img01={item.image01}
                        img02={item.image02}
                        title ={item.title}
                        price={Number(item.price)}
                        slug= {item.slug}
                      >

                      </ProductCar>
                    ))
                  }
              </Grid>
          </SectionBody>
        </Section>

    </Helmet> 
  )
}

export default Home