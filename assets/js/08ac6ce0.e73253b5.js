"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[639],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,g=l["".concat(s,".").concat(d)]||l[d]||m[d]||a;return r?o.createElement(g,i(i({ref:t},p),{},{components:r})):o.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(7462),n=(r(7294),r(4137));const a={},i="Clean up",c={unversionedId:"clean-up",id:"clean-up",title:"Clean up",description:"Deleting Azure resources",source:"@site/docs/45-clean-up.md",sourceDirName:".",slug:"/clean-up",permalink:"/Contoso-New-Patient-App/clean-up",draft:!1,editUrl:"https://github.com/Contoso-New-Patient-App/tree/main/docs/docs/45-clean-up.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add surgery roles",permalink:"/Contoso-New-Patient-App/surgery-roles/add-roles"},next:{title:"Summary",permalink:"/Contoso-New-Patient-App/summary"}},s={},u=[{value:"Deleting Azure resources",id:"deleting-azure-resources",level:2},{value:"Stop the GitHub Codespace",id:"stop-the-github-codespace",level:2},{value:"Purging the Form Recognizer resource",id:"purging-the-form-recognizer-resource",level:2},{value:"Social",id:"social",level:2}],p={toc:u},l="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"clean-up"},"Clean up"),(0,n.kt)("h2",{id:"deleting-azure-resources"},"Deleting Azure resources"),(0,n.kt)("p",null,"To delete the resources from Azure, from a VS Code terminal, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"azd down\n")),(0,n.kt)("p",null,"This will prompt you to confirm that you want to delete the resources. Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," to confirm."),(0,n.kt)("h2",{id:"stop-the-github-codespace"},"Stop the GitHub Codespace"),(0,n.kt)("p",null,"If you are using a GitHub Codespace, you will need to stop the codespace. To stop a codespace, from VS Code in your web browser, select ",(0,n.kt)("kbd",null,"F1")," to open the command palette, then type and select ",(0,n.kt)("strong",{parentName:"p"},"Codespaces: Stop Codespace"),"."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"As at Feburary 2023, GitHub personal accounts have up to 120 core hours per month of free codespaces usage. When you have completed the workshop, be sure to stop the current codespace to preserve your usage."),(0,n.kt)("p",{parentName:"admonition"},'A "core hour" is a measure used for included compute usage. On a 2-core machine, you would get 60 hours free. On a 4-core machine, you would get 30 hours free, etc. ',(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces"},"Learn more")," ")),(0,n.kt)("h2",{id:"purging-the-form-recognizer-resource"},"Purging the Form Recognizer resource"),(0,n.kt)("p",null,"When deleting an Azure AI Document Intelligence resource, it's ",(0,n.kt)("em",{parentName:"p"},"soft deleted")," so you can recover it in the event of an accidental deletion. You have a 48hrs to recover a Form Recognizer resource. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/cognitive-services/manage-resources?WT.mc_id=aiml-77396-cxa"},"Recover deleted Cognitive Services resources")),(0,n.kt)("p",null,"This is optional, as Azure will perform a hard delete after 48hrs. You can force an immediate ",(0,n.kt)("em",{parentName:"p"},"hard delete")," using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"region=<Azure Region selected>\nresourceName=<Form Recognizer resource name>\nresourceGroupName=<Resource group name>\naz cognitiveservices account purge -l $region -n $resourceName -g $resourceGroupName\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The resource group name and region were specified when you setup the project during the ",(0,n.kt)("a",{parentName:"p",href:"/Contoso-New-Patient-App/create-azure-services"},"Create Azure resources")," step. The name of the Form Recognizer resource is prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"form-recognizer-")," and then a unique hash, that will be present in the logs when you cleaned up the resources in the previous step.")),(0,n.kt)("h2",{id:"social"},"Social"),(0,n.kt)("p",null,"Please tweet your questions, comments, and successes including hashtag #AzureFormRecognizer, the workshop link ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/PatientRegistration"},"https://aka.ms/PatientRegistration"),", and tag @dglover. Thank you."))}m.isMDXComponent=!0}}]);