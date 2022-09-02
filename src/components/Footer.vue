<template>
  <footer class="footer" :class="{ 'border-top': borderTop }">
    <div class="row footer__row">
        
      <div class="footer__informations">
        <div class="container">
          <div class="row">
            
            <router-link to="/" class="footer-logo">
                <img :src="footerLogoImg" alt="" class="footer-logo-img">
            </router-link>
            
            <a :href="`tel:${data.number}`" class="footer__number">{{ data.number }}</a>
            
            <router-link to="/contact" class="footer__address-link"><i class="fas fa-map-marker-alt"></i> {{ data.home.footer.information.address }}</router-link>
            
            <a :href="`mailto:${data.home.footer.information.email}`" class="footer__email-link"><i class="fas fa-envelope"></i> {{ data.home.footer.information.email }}</a>
            
            <div class="footer__info-links">
                <a :href="data.home.footer.information.instagram" class="footer__info-link" target="_blank"><i class="fab fa-instagram"></i></a>
            
                <a :href="data.home.footer.information.telegram" class="footer__info-link" target="_blank"><i class="fab fa-telegram"></i></a>
            </div>
            
          </div>
        </div>
      </div>

      <div class="footer__lists">
        <div class="container">
          <div class="row">
            
            <ul class="footer__list" v-for="(list, idx) in data.home.footer.footerLinks" :key="idx">
              <li class="footer__list-item"  v-for="(link, idx2) in list" :key="idx2" > 
                <router-link :to="link.path" class="footer__list-link" :class="{first: idx2 == 0}">{{ link.name }}</router-link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

      <div class="footer__copyright">
        <div class="container">
          <div class="row">
            
            <p class="copyright__text">
              {{ `© ${new Date().getFullYear()} ${data.home.footer.copyright.copyText}` }}
            </p>
            
            <router-link to="/policy" class="policy__link">{{
              data.home.footer.copyright.ruleLink
            }}</router-link>

            <p class="author-name">
              Сделано с {{ data.home.footer.copyright.authorName }}
            </p>
            
          </div>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<script>
import data from "@/assets/json/data.json";

export default {
  name: "Footer",
  data() {
    return {
      data,
      footerLogoImg: require('@/assets/images/logo.svg')
    };
  },
  props: {
    borderTop: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
    & .footer__row {
        flex-direction: column;
        align-items: flex-start;
    }

  &.border-top {
    border-top: 1px solid #ebebf0;
  }
    
    &__informations {
        width: 100%;
        padding: 40px 0;  
        
        .row {
            align-items: center;
            justify-content: space-between;
            gap: 30px;
        }
    }
    
    &-logo {
        max-width: 200px;
        width: 100%;
        
        img {
            width: 100%;
        }
    }
    
    &__number {
      font-size: calc(22px + 6 * (100vw / 1920));
      font-weight: 600;
      text-decoration: underline;
    }
    
    &__address-link, &__email-link {
        font-size: 16px;
        display: flex;
        column-gap: 5px;
        align-items: center;
        
        i {
            color: var(--main-blue-color);    
        }
    } 
    
    &__info-link {
        font-size: 25px;
        color: var(--main-blue-color);   
    }
    
    &__info-links {
        max-width: max-content;
        display: flex;
        column-gap: 15px;
        align-items: center;
    }
    
    &__lists {
      width: 100%;
      padding: 50px 0;
      border-top: 1px solid #ebebf0;
      border-bottom: 1px solid #ebebf0;
  
      .row {
        column-gap: 150px;
        row-gap: 30px;
      }
  }
  
    &__list {
      max-width: max-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;
      
      &-link {
        color: var(--text-color);
        text-transform: capitalize;
        transition: .4s;
          
        &:hover {
            color: var(--main-blue-color);
        }
          
        &.first {
            color: var(--primary-color);
            font-weight: 600;
        }
      }
    }
    
    .footer__copyright {
      width: 100%;
      padding: 20px 0;
      
        .row {
            align-items: center;
            column-gap: 40px;
            row-gap: 20px;        
        }
      
        p {
            font-size: 14px;
            color: var(--text-color);
        }
        
        .author-name {
            margin-left: auto;
        }
        
        .policy__link {
            text-decoration: underline;
            font-size: 14px;
            color: var(--text-color);
            transition: .3s;
            
            &:hover {
                color: var(--main-blue-color);
            }
        }
    }
}

@media (max-width: 1200px) {
  .footer__informations .row {
    justify-content: center;
    text-align: center;
  }

  .footer__lists{
    .row {
      column-gap: 70px;
    }
  }
}


@media (max-width: 800px){
  .footer__copyright .row {
    flex-direction: column;
    text-align: center;

    .author-name {
      margin-left: 0;
    }
  }
}

@media (max-width: 768px){
  .footer__lists .row {
    column-gap: 50px;
  }

  .footer-logo {
    padding: 0 30px;
  }
}

@media (max-width: 320px){
  .footer__number {
    font-size: calc(22px + (6 + 6 * 0.7) * ((100vw - 320px)/ 1920));
  }
}

</style>
