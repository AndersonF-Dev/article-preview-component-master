
import React from 'react'

import { 
    ArticleMain,
    Info,
} from './styles';

const Card = () => {
    return (
      <ArticleMain>
        <article-ilustracao>
          <img src="/images/ilustracao.png" alt="Ilustração" />
        </article-ilustracao>
          <article-section>
              <Info>
                <h1>
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </h1>
                <p>
                    Ever been in a room and felt like something was missing? Perhaps
                    it felt slightly bare and uninviting. I’ve got some simple tips
                    to help you make any room feel complete.
        
                </p>
              </Info>
              
          </article-section>
      </ArticleMain>
    )
  }
  
  export { Card }


