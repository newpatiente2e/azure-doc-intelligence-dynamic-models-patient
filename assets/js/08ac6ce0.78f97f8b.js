"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[639],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={},i="Clean up",c={unversionedId:"clean-up",id:"clean-up",title:"Clean up",description:"Deleting Azure resources",source:"@site/docs/45-clean-up.md",sourceDirName:".",slug:"/clean-up",permalink:"/azure-doc-intelligence-dynamic-models-patient/clean-up",draft:!1,editUrl:"https://github.com/azure-doc-intelligence-dynamic-models-patient/tree/main/docs/docs/45-clean-up.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add surgery roles",permalink:"/azure-doc-intelligence-dynamic-models-patient/surgery-roles/add-roles"},next:{title:"Summary",permalink:"/azure-doc-intelligence-dynamic-models-patient/summary"}},u={},s=[{value:"Deleting Azure resources",id:"deleting-azure-resources",level:2},{value:"Stop the GitHub Codespace",id:"stop-the-github-codespace",level:2},{value:"Purging the Document Intelligence resource",id:"purging-the-document-intelligence-resource",level:2},{value:"Social",id:"social",level:2}],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clean-up"},"Clean up"),(0,o.kt)("h2",{id:"deleting-azure-resources"},"Deleting Azure resources"),(0,o.kt)("p",null,"To delete the resources from Azure, from a VS Code terminal, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"azd down\n")),(0,o.kt)("p",null,"This will prompt you to confirm that you want to delete the resources. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," to confirm."),(0,o.kt)("h2",{id:"stop-the-github-codespace"},"Stop the GitHub Codespace"),(0,o.kt)("p",null,"If you are using a GitHub Codespace, you will need to stop the codespace. To stop a codespace, from VS Code in your web browser, select ",(0,o.kt)("kbd",null,"F1")," to open the command palette, then type and select ",(0,o.kt)("strong",{parentName:"p"},"Codespaces: Stop Codespace"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"As at Feburary 2023, GitHub personal accounts have up to 120 core hours per month of free codespaces usage. When you have completed the workshop, be sure to stop the current codespace to preserve your usage."),(0,o.kt)("p",{parentName:"admonition"},'A "core hour" is a measure used for included compute usage. On a 2-core machine, you would get 60 hours free. On a 4-core machine, you would get 30 hours free, etc. ',(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces"},"Learn more")," ")),(0,o.kt)("h2",{id:"purging-the-document-intelligence-resource"},"Purging the Document Intelligence resource"),(0,o.kt)("p",null,"When deleting an Azure AI Document Intelligence resource, it's ",(0,o.kt)("em",{parentName:"p"},"soft deleted")," so you can recover it in the event of an accidental deletion. You have a 48hrs to recover a Document Intelligence resource. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/cognitive-services/manage-resources?WT.mc_id=aiml-77396-cxa"},"Recover deleted Cognitive Services resources")),(0,o.kt)("p",null,"This is optional, as Azure will perform a hard delete after 48hrs. You can force an immediate ",(0,o.kt)("em",{parentName:"p"},"hard delete")," using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"region=<Azure Region selected>\nresourceName=<Document Intelligence resource name>\nresourceGroupName=<Resource group name>\naz cognitiveservices account purge -l $region -n $resourceName -g $resourceGroupName\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The resource group name and region were specified when you setup the project during the ",(0,o.kt)("a",{parentName:"p",href:"/azure-doc-intelligence-dynamic-models-patient/create-azure-services"},"Create Azure resources")," step. The name of the Document Intelligence resource is prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"form-recognizer-")," and then a unique hash, that will be present in the logs when you cleaned up the resources in the previous step.")),(0,o.kt)("h2",{id:"social"},"Social"),(0,o.kt)("p",null,"Please tweet your questions, comments, and successes including hashtag #AzureFormRecognizer, the workshop link ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/PatientRegistration"},"https://aka.ms/PatientRegistration"),", and tag @dglover. Thank you."))}d.isMDXComponent=!0}}]);