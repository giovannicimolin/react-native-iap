(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[327],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},379:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],p={sidebar_position:4},s={unversionedId:"usage_instructions/receipt_validation",id:"usage_instructions/receipt_validation",isDocsHomePage:!1,title:"Validating receipts",description:"Since react-native-iap@0.3.16, we support receipt validation.",source:"@site/docs/usage_instructions/receipt_validation.md",sourceDirName:"usage_instructions",slug:"/usage_instructions/receipt_validation",permalink:"/react-native-iap/docs/usage_instructions/receipt_validation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/usage_instructions/receipt_validation.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Restoring purchases",permalink:"/react-native-iap/docs/usage_instructions/restoring_purchases"},next:{title:"Using hooks",permalink:"/react-native-iap/docs/usage_instructions/using_hooks"}},l=[{value:"With IAPHUB",id:"with-iaphub",children:[]},{value:"With Google Play",id:"with-google-play",children:[]},{value:"With App Store",id:"with-app-store",children:[]},{value:"iOS Purchasing process right way.",id:"ios-purchasing-process-right-way",children:[]},{value:"Example backend (Node.js)",id:"example-backend-nodejs",children:[]},{value:"Supporting react-native-iap",id:"supporting-react-native-iap",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-iap@0.3.16"),", we support receipt validation."),(0,r.kt)("h3",{id:"with-iaphub"},"With ",(0,r.kt)("a",{parentName:"h3",href:"https://www.iaphub.com"},"IAPHUB")),(0,r.kt)("p",null,"IAPHUB is a service that takes care of the ios/android receipt validation for you, you can set up ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.iaphub.com/documentation/webhook"},"webhooks")," in order to get notifications delivered automatically to your server on events such as a purchase, a subscription renewal..."),(0,r.kt)("p",null,"You can use it by calling the API manually to ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.iaphub.com/documentation/api/post-receipt"},"process your receipt")," or use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iaphub/react-native-iaphub"},"react-native-iaphub")," module that is just a wrapper of react-native-iap with IAPHUB built-in."),(0,r.kt)("h3",{id:"with-google-play"},"With Google Play"),(0,r.kt)("p",null,"For Android, you need separate json file from the service account to get the\n",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"google-apis"),", therefore it is impossible to implement serverless."),(0,r.kt)("p",null,"You should have your own backend and get ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),".\nWith ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," you can simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"validateReceiptAndroid()")," we implemented.\nFurther reading is ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/35127086"},"here")," or refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Bang9/android-get-access-token-example"},"example repo"),"."),(0,r.kt)("h3",{id:"with-app-store"},"With App Store"),(0,r.kt)("p",null,"Currently, serverless receipt validation is possible using ",(0,r.kt)("inlineCode",{parentName:"p"},"validateReceiptIos()"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first parameter, you should pass ",(0,r.kt)("inlineCode",{parentName:"li"},"transactionReceipt")," which returns after ",(0,r.kt)("inlineCode",{parentName:"li"},"buyProduct()"),"."),(0,r.kt)("li",{parentName:"ul"},"The second parameter, you should pass whether this is ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," environment.\nIf ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", it will request to ",(0,r.kt)("inlineCode",{parentName:"li"},"sandbox")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," it will request to ",(0,r.kt)("inlineCode",{parentName:"li"},"production"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"  const receiptBody = {\n    'receipt-data': purchase.transactionReceipt,\n    'password': '******'\n  };\n  const result = await RNIap.validateReceiptIos(receiptBody, false);\n  console.log(result);\n")),(0,r.kt)("p",null,"For further information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/releasenotes/General/ValidateAppStoreReceipt/Chapters/ValidateRemotely.html"},"guide"),"."),(0,r.kt)("p",null,"Sometimes you will need to get the receipt at times other than after purchase.\nFor example, when a user needs to ask for permission to buy a product (",(0,r.kt)("inlineCode",{parentName:"p"},"Ask to buy"),"\nflow) or unstable internet connections."),(0,r.kt)("p",null,"For these cases we have a convenience method ",(0,r.kt)("inlineCode",{parentName:"p"},"getReceiptIOS()")," which gets\nthe latest receipt for the app at any given time. The response is base64 encoded."),(0,r.kt)("h3",{id:"ios-purchasing-process-right-way"},"iOS Purchasing process right way."),(0,r.kt)("p",null,"Issue regarding ",(0,r.kt)("inlineCode",{parentName:"p"},"valid products")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In iOS, generally you are fetching valid products at App launching process."),(0,r.kt)("p",{parentName:"li"},"  If you fetch again, or fetch valid subscription, the products are added to\nthe array object in iOS side (Objective-C ",(0,r.kt)("inlineCode",{parentName:"p"},"NSMutableArray"),")."),(0,r.kt)("p",{parentName:"li"},"  This makes unexpected behavior when you fetch with a part of product lists."),(0,r.kt)("p",{parentName:"li"},"  For example, if you have products of ",(0,r.kt)("inlineCode",{parentName:"p"},"[A, B, C]"),", and you call fetch function\nwith only ",(0,r.kt)("inlineCode",{parentName:"p"},"[A]"),", this module returns ",(0,r.kt)("inlineCode",{parentName:"p"},"[A, B, C]"),")."),(0,r.kt)("p",{parentName:"li"},"  This is weird, but it works.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"But, weird result is weird, so we made a new method which remove all valid products."),(0,r.kt)("p",{parentName:"li"},"  If you need to clear all products, subscriptions in that array, just call\n",(0,r.kt)("inlineCode",{parentName:"p"},"clearProductsIOS()"),", and do the fetching job again, and you will receive what\nyou expected."))),(0,r.kt)("h3",{id:"example-backend-nodejs"},"Example backend (Node.js)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mifi/in-app-subscription-example"},"Here")," you can find an example backend for idempotent validating of receipts on both iOS/Android and storing and serving subscription state to the client."),(0,r.kt)("h2",{id:"supporting-react-native-iap"},"Supporting react-native-iap"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," is an open source project with MIT license. We are willing to\nmaintain this repository to support devs to monetize around the world."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"IAP")," itself is not perfect on each platform, we desperately need\nthis project to be maintained. If you'd like to help us, please consider being\nwith us in ",(0,r.kt)("a",{parentName:"p",href:"https://opencollective.com/react-native-iap"},"Open Collective"),"."))}u.isMDXComponent=!0}}]);