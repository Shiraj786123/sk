'use client';

import { MOBILE_CENTER_CSS } from '../styles/serviceMobileCenterInline';
import { RESPONSIVE_CSS } from '../styles/serviceResponsiveInline';
import { CARD_TEXT_FIX_CSS } from '../styles/serviceCardTextInline';

const ServicePageMobileStyles = () => (
  <style
    suppressHydrationWarning
    data-service-mobile="1"
    dangerouslySetInnerHTML={{ __html: MOBILE_CENTER_CSS + RESPONSIVE_CSS + CARD_TEXT_FIX_CSS }}
  />
);

export default ServicePageMobileStyles;
