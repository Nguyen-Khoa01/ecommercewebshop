import React, { useEffect } from 'react'

import Helmet from  '../components/Helmet'
import Section,{SectionBody,SectionTitle} from '../components/Section'
import Gird from '../components/Grid'
import ProductCar from '../components/ProductCar'
import ProductView from '../components/ProductView'

import producData from '../assets/fake-data/products'

const Product = props => {

  const product = producData.getProductBySlug(props.match.params.slug)

  const relatedProducts = producData.getProducts(8)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  return (
    <Helmet title={product.title}>
        <Section>
            <SectionBody>
              <ProductView 
                  product={product}
              />
            </SectionBody>
        </Section>
        <Section>
            <SectionTitle>
               Khám phá thêm
            </SectionTitle>
            <SectionBody>
                <Gird
                  col={4}
                  mdCol={2}
                  smCol={1}
                  gap={20}
                >
                    {
                      relatedProducts.map((item,index)=>(
                        <ProductCar 
                            key={index}
                            img01={item.image01}
                            img02={item.image02}
                            title ={item.title}
                            price={Number(item.price)}
                            slug= {item.slug}
                        />
                      ))
                    }
                </Gird>
            </SectionBody>
        </Section>
    </Helmet>
  )
}

export default Product