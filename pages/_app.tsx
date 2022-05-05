import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FronteggProvider  } from '@frontegg/nextjs';
import { FronteggThemeOptions} from '@frontegg/react';
const headerImage = "https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg";
const themeOptions: FronteggThemeOptions = {
  loginBox: {
    logo: {
      image:"https://fronteggprodeustorage.blob.core.windows.net/public-vendor-assets/809c4edc-0ac9-4fd1-8502-8e6ef9cef351%2Fassets%2Flogo-0120477a-0166-4ace-8692-53bfcebdf16a.png"
  },
  themeName: 'modern',
     layout: {
        type: 'float-left',
        sideElement: () => {
            return <div style={{width: '50%' ,marginRight:0}}>
                <img src="/image1.png"
                style={{display:'flex', flexWrap:'wrap',  width: "100%"}}
                     alt="Hackers"/>
            </div>
        },
        sideElementStyle: {
            width: '50%',
            
        }
       
      
    },
    boxFooter: () => {
      return (
         <div style={{ display:'flex', justifyContent:'space-between' }}>

           <div style={{position:'absolute',left:10  , fontSize:'14px', bottom:6}}>© 2022 Halocene.eu</div>
           {/* <div className=" absolute bottom-5 left-5 "> © 2022 Halocene.eu</div> */}
           <div style={{position:'absolute',display:'flex',bottom:6,fontSize:'14px' ,left:'38vw'}}>  <img src="/emailicon.png" alt="email"   width="15"  style={{marginRight:8,marginTop:4}}
     height="15" />help@©halocene.eu</div>
         </div>
      )
    }
  }
}



// const contextOptions = {
//   baseUrl: 'https://app-mkugg1vp4ifq.frontegg.com',
//   clientId: 'b1b7d4ad-5c25-4947-847a-2e06a5dccfbd'
// };



//redsoft
const contextOptions = {
  baseUrl: 'https://app-k04lygwbdbb1.frontegg.com',
  clientId: '809c4edc-0ac9-4fd1-8502-8e6ef9cef351'
};

function MyApp({ Component, pageProps }: AppProps) {
  return <FronteggProvider contextOptions={contextOptions} headerImage={headerImage} themeOptions={themeOptions}>
    <Component {...pageProps}/>
  </FronteggProvider>
}

export default MyApp


