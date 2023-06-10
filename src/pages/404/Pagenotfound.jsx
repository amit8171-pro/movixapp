import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentwrapper/ContentWrapper";
export default function Pagenotfound() {
  return (
    <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
  )
}
