import React, { useEffect, useState } from "react";
import cn from 'classnames'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Helmet from "react-helmet";
import { HeaderComponent } from "../../compontens/common/Header/Header";
import { FooterComponent } from "../../compontens/common/Footer/Footer";

const Layout = ({ children }) => {

  


  return (
    <div
    style={{
      backgroundColor: 'var(--theme-bg)',
      color: 'var(--theme-color)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
    }}
    >
      {/* <DebugGridComponent isVisible={true}/> */}
      <Helmet>
          <script src="https://qtickets.ru/js/openapi"/>
        </Helmet>
      <div className={cn("page-body")}>
        <HeaderComponent />
        <main className={cn("page", "page-counter")}>
          {children}
        </main>
        <FooterComponent />
      </div>
      {/* <ThemeToggler>
        {({ theme, toggleTheme }) => {
          console.log("🚀 ~ file: index.tsx:32 ~ Layout ~ theme:", theme)
          
          setTimeout(()=>{toggleTheme('dark')})
        }}
      </ThemeToggler> */}
      
    </div>
  );
}

export default Layout;
