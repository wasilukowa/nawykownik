(this.webpackJsonpnawykownik=this.webpackJsonpnawykownik||[]).push([[0],{27:function(e,n,t){e.exports=t.p+"static/media/playfair-display-v21-latin-ext_latin-regular.3abcf909.woff"},28:function(e,n,t){e.exports=t.p+"static/media/playfair-display-v21-latin-ext_latin-regular.9d5119c0.woff2"},29:function(e,n,t){e.exports=t.p+"static/media/playfair-display-v21-latin-ext_latin-700.3ce8c222.woff"},30:function(e,n,t){e.exports=t.p+"static/media/playfair-display-v21-latin-ext_latin-700.a1aad0c1.woff2"},31:function(e,n,t){e.exports=t.p+"static/media/playfair-display-v21-latin-ext_latin-900.ee4fbcbc.woff"},32:function(e,n,t){e.exports=t.p+"static/media/playfair-display-v21-latin-ext_latin-900.950f3762.woff2"},33:function(e,n,t){e.exports=t.p+"static/media/LOGO-09.4b23e636.svg"},35:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(23),c=t.n(i),l=t(2),o=t(1),s=t(9),u=t(3),m={mint:"#A9DCB2",green:"#287E7C",black:"#2C3134",lightGrey:"#F0F0F0",gapSmall:"5px",cellSmall:"25px",gapMedium:"10px",cellMedium:"35px",gapBig:"10px",cellBig:"45px"};function d(){var e=Object(l.a)(["\n    html {\n        box-sizing: border-box;\n        font-size: 10px;\n        padding: 0;\n        margin: 0;\n        font-family: 'Playfair Regular';\n        color: ","\n    }\n    *, *:before, *:after {\n        box-sizing: inherit;\n        padding: 0;\n        margin: 0;\n    }\n"]);return d=function(){return e},e}var f=Object(o.b)(d(),(function(e){return e.theme.black})),p=t(27),g=t.n(p),h=t(28),y=t.n(h),v=t(29),b=t.n(v),x=t(30),k=t.n(x),w=t(31),E=t.n(w),_=t(32),j=t.n(_);function O(){var e=Object(l.a)(["\n    @font-face {\n        font-family: 'Playfair Regular';\n        src: local('Playfair Regular'), local('Playfair Regular'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 400;\n        font-style: normal;\n    }\n    @font-face{\n        font-family: 'Playfair Bold';\n        src: local('Playfair Bold'), local('Playfair Bold'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 600;\n        font-style: normal;\n    }\n    @font-face{\n        font-family: 'Playfair Black';\n        src: local('Playfair Black'), local('Playfair Black'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 900;\n        font-style: normal;\n    }\n"]);return O=function(){return e},e}var N=Object(o.b)(O(),y.a,g.a,k.a,b.a,j.a,E.a),z=t(33),S=t.n(z);function A(){var e=Object(l.a)(["\n    width: 100%;\n    list-style: none;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-grow: 1;\n    padding-bottom: 2em;\n    .nav__router-link {\n        text-decoration: none;\n        color: ",";\n        padding: 0.6em;\n        font-size: 1.4em;\n        transition: .7s;\n        &:hover{\n            color: ",";\n            transform: scale(1.1);\n        }\n    }\n    .nav__flex-logo {\n        display: flex;\n        justify-content: center;\n        flex-basis: 90%;\n    }\n    .nav__logo {\n        width: 60vw;\n    }\n    .nav__flex-menu-special {\n            order: 3;\n            flex-basis: 90%;\n            text-align: center;\n        }\n    .nav__router-link-active{\n        font-family: 'Playfair Bold';\n        color: ",";\n        transform: scale(1.2);\n    }\n\n    @media (min-width: 350px){\n    .nav__router-link {\n        font-size: 1.6em;\n        }\n    }\n\n\n    @media (min-width: 450px){\n        .nav__flex-menu-special {\n            order: 0;\n            flex-basis: auto;\n        }\n    }\n\n    @media (min-width: 660px){\n        .nav__flex-logo {\n            flex-basis: auto;\n            .nav__logo{\n                width: 240px;\n            }\n        }\n    }\n\n    @media (min-width: 900px){\n        .nav__router-link {\n        font-size: 2em;\n        }\n    }\n"]);return A=function(){return e},e}var P=o.c.nav(A(),(function(e){return e.theme.black}),(function(e){return e.theme.green}),(function(e){return e.theme.green})),B=function(){return r.a.createElement(P,null,r.a.createElement("div",{className:"nav__flex-logo"},r.a.createElement("img",{className:"nav__logo",src:S.a,alt:""})),r.a.createElement(s.b,{className:"nav__router-link nav__flex-menu",activeClassName:"nav__router-link-active",exact:!0,to:"/"},"Home"),r.a.createElement(s.b,{className:"nav__router-link nav__flex-menu-special",activeClassName:"nav__router-link-active",exact:!0,to:"/dodajnowy"},"Dodaj nowy"),r.a.createElement(s.b,{className:"nav__router-link nav__flex-menu",activeClassName:"nav__router-link-active",exact:!0,to:"/archiwum"},"Archiwum"),r.a.createElement(s.b,{className:"nav__router-link nav__flex-menu",activeClassName:"nav__router-link-active",exact:!0,to:"/ustawienia"},"Ustawienia"))},C=t(4);function D(){var e=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    p {\n        padding-top: 4em;\n        font-family: 'Playfair Bold';\n        font-size: 2em;\n        color: ",";\n        text-align: center;\n    }\n    .nav__router-link {\n        text-decoration: none;\n        color: ",";\n        padding: 0.6em;\n        font-size: 1.4em;\n        transition: .7s;\n        &:hover{\n            color: ",";\n            transform: scale(1.1);\n        }\n    }\n"]);return D=function(){return e},e}var M=o.c.div(D(),(function(e){return e.theme.green}),(function(e){return e.theme.black}),(function(e){return e.theme.green})),R=t(12),T=t(11);function I(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    .task-date {\n        font-family: 'Playfair Regular';\n        padding-top: 10px;\n        font-size: 1.4rem;\n        color: ",";\n    }\n    .task-title {\n        font-family: 'Playfair Bold';\n        text-align: center;\n        font-size: 2em;\n        color: ",";\n        padding: 10px 20px;\n    }\n    .task-calendar{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .task-calendar-days-names {\n        display: grid;\n        grid-template-columns: repeat(7, ",");\n        grid-template-rows: ",";\n        gap: ",";\n\n        .day {\n        font-family: Arial, sans-serif;\n        font-size: 1.2em;\n        color: ",";\n        align-self: center;\n        }\n    }\n    .task-container___calendar {\n        display: grid;\n        grid-template-columns: repeat(7, ",");\n        grid-template-rows: repeat(6, ",");\n        gap: ",";\n\n        .single-day {\n        padding: 3px;\n        background-color: white;\n        font-size: 1.4em;\n        color: black;\n        padding: 3px;\n        text-align: right;\n        cursor: pointer;\n\n        &.habit-to-be-checked {\n            border: 1.5px solid ",";\n        }\n\n        &.habit-not-done {\n            padding: 3px;\n            border: 1.5px solid ",";\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            &::before {\n            content: '';\n            display: block;\n            height: calc("," - 10px);\n            width: calc("," - 10px);\n            background-color: silver;\n            }\n        }\n\n        &.habit-done {\n            border: 1.5px solid ",";\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            &::before {\n            content: '';\n            display: block;\n            height: calc("," - 10px);\n            width: calc("," - 10px);\n            background-color: ",";\n            }\n        }\n        }\n\n        .un-active {\n        background-color: white;\n        font-size: 1.4em;\n        color: grey;\n        padding: 3px;\n        text-align: right;\n        cursor: pointer;\n        border: 1.5px solid grey;\n        }\n    }\n    }\n    .task-container__buttons {\n        color: lightGrey;\n        align-self: flex-end;\n        display: flex;\n        justify-content: flex-end;\n\n        .button-subtle{\n            padding: 0 0 20px 30px;\n            cursor: pointer;\n        }\n    }\n    @media (min-width: 400px) {\n        .task-title {\n            font-size: 2.4em;\n        }\n\n        .task-calendar-days-names {\n            grid-template-columns: repeat(7, ",");\n            grid-template-rows: ",";\n            gap: ",";\n        }\n\n        .task-container___calendar {\n            grid-template-columns: repeat(7, ",");\n            grid-template-rows: repeat(6, ",");\n            gap: ",";\n\n            .single-day {\n\n                &.habit-not-done {\n                    &::before {\n                        content: '';\n                        height: calc("," - 10px);\n                        width: calc("," - 10px);\n                    }\n                }\n\n                &.habit-done {\n                    &::before {\n                        content: '';\n                        height: calc("," - 10px);\n                        width: calc("," - 10px);\n                    }\n                }\n            }\n        }\n    }\n\n    @media (min-width: 650px) {\n        .task-title {\n            font-size: 3em;\n        }\n\n        .task-calendar-days-names {\n            grid-template-columns: repeat(7, ",");\n            grid-template-rows: ",";\n            gap: ",";\n        }\n\n        .task-container___calendar {\n            grid-template-columns: repeat(7, ",");\n            grid-template-rows: repeat(6, ",");\n            gap: ",";\n\n            .single-day {\n                font-size: 2em;\n                &.habit-not-done {\n                    &::before {\n                        content: '';\n                        height: calc("," - 10px);\n                        width: calc("," - 10px);\n                    }\n                }\n\n                &.habit-done {\n                    &::before {\n                        content: '';\n                        height: calc("," - 10px);\n                        width: calc("," - 10px);\n                    }\n                }\n            }\n            .un-active {\n                font-size: 2em;\n        }\n    }\n"]);return I=function(){return e},e}var W=o.c.div(I(),(function(e){return e.theme.black}),(function(e){return e.theme.green}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.gapSmall}),(function(e){return e.theme.mint}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.gapSmall}),(function(e){return e.theme.black}),(function(e){return e.theme.black}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.black}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.cellSmall}),(function(e){return e.theme.green}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.gapMedium}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.gapMedium}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.cellMedium}),(function(e){return e.theme.cellBig}),(function(e){return e.theme.cellBig}),(function(e){return e.theme.gapBig}),(function(e){return e.theme.cellBig}),(function(e){return e.theme.cellBig}),(function(e){return e.theme.gapBig}),(function(e){return e.theme.cellBig}),(function(e){return e.theme.cellBig}),(function(e){return e.theme.cellBig}),(function(e){return e.theme.cellBig}));function F(e){return JSON.parse(localStorage.getItem(e))||[]}function J(e,n){localStorage.setItem(e,JSON.stringify(n))}function U(e,n){var t=F(e);t.push(n),J(e,t)}function Z(e,n,t){var a=F(e);a[t]=n,J(e,a)}function H(e,n){J(e,function(e,n){return n.filter((function(n){return n.key!==e.key}))}(n,F(e)))}var Y=function(e){var n=e.task,t=e.indexOfTask,i=Object(a.useState)(n),c=Object(C.a)(i,2),l=c[0],o=c[1],s=Object(a.useState)(Object(T.a)(n.daysArray)),u=Object(C.a)(s,2),m=u[0],d=u[1],f=(new Date).getDate(),p=function(e,n){var a=m;1===e?(a[n]=2,d(Object(T.a)(a))):2===e?(a[n]=3,d(Object(T.a)(a))):(a[n]=1,d(Object(T.a)(a))),o(Object(R.a)(Object(R.a)({},l),{},{daysArray:m})),Z("tasksActive",l,t)};return Object(a.useEffect)((function(){Z("tasksActive",l,t)}),[m]),r.a.createElement(W,null,r.a.createElement("p",{className:"task-date"},l.month," ",l.year),r.a.createElement("header",{className:"task-title"},l.title),r.a.createElement("div",{className:"task-calendar"},r.a.createElement("div",{className:"task-calendar-days-names"},r.a.createElement("div",{className:"day"},"PON"),r.a.createElement("div",{className:"day"},"WT"),r.a.createElement("div",{className:"day"},"\u015aR"),r.a.createElement("div",{className:"day"},"CZW"),r.a.createElement("div",{className:"day"},"PT"),r.a.createElement("div",{className:"day"},"SOB"),r.a.createElement("div",{className:"day"},"NIE")),r.a.createElement("div",{className:"task-container___calendar"},m.map((function(e,t){return 0===e?r.a.createElement("div",{key:t,className:"single-day"}):1===e?t<f+l.startingDay?r.a.createElement("div",{key:t,className:"single-day habit-to-be-checked",onClick:function(){return p(e,t)}},t-n.startingDay+1):r.a.createElement("div",{key:t,className:"un-active"},t-n.startingDay+1):2===e?r.a.createElement("div",{key:t,className:"single-day habit-not-done",onClick:function(){return p(e,t)}}):r.a.createElement("div",{key:t,className:"single-day habit-done",onClick:function(){return p(e,t)}})})))))};function G(){var e=Object(l.a)(["\n    .buttons-container{\n        width: 100%;\n        display: flex;\n        justify-content: center;\n    }\n    button {\n        border: none;\n        background-color: ",";\n        color: ",";\n        font-family: 'Playfair Regilar';\n        padding: 1em 2em;\n        font-size: 2em;\n        margin: 0 10px;\n    }\n"]);return G=function(){return e},e}var L=o.c.div(G(),(function(e){return e.theme.mint}),(function(e){return e.theme.black})),K=function(){var e=Object(a.useState)(F("tasksActive")||[]),n=Object(C.a)(e,2),t=n[0],i=n[1];return r.a.createElement(L,null,t.map((function(e,n){return r.a.createElement("div",{key:e.key},r.a.createElement(Y,{task:e,indexOfTask:n}),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{onClick:function(n){return t=e,n.preventDefault(),U("tasksArchive",t),H("tasksActive",t),void i(F("tasksActive"));var t}},"ARCHIWIZUJ"),r.a.createElement("button",{onClick:function(n){return t=e,n.preventDefault(),H("tasksActive",t),void i(F("tasksActive"));var t}},"USU\u0143")))})))},q=function(){var e=Object(a.useState)(F("tasksActive")),n=Object(C.a)(e,1)[0];return r.a.createElement("div",null,0!==n.length?r.a.createElement(K,null):r.a.createElement(M,null,r.a.createElement("p",null,"Nie masz \u017codnych nawyk\xf3w do monitorowania!"),r.a.createElement(s.b,{className:"nav__router-link nav__flex-menu",exact:!0,to:"/dodajnowy"},"Dodaj co\u015b! :)")))};function Q(){var e=Object(l.a)(["\n    width: 100%;\n    text-align: center;\n    font-size: 2em;\n    padding-top: 2em;\n    color: ","\n"]);return Q=function(){return e},e}var V=o.c.div(Q(),(function(e){return e.theme.grey})),X=t(34),$=t(48),ee=new Date,ne="";switch(ee.getMonth()){case 0:ne="stycze\u0144";break;case 1:ne="luty";break;case 2:ne="marzec";break;case 3:ne="kwiecie\u0144";break;case 4:ne="maj";break;case 5:ne="czerwiec";break;case 6:ne="lipiec";break;case 7:ne="sierpie\u0144";break;case 8:ne="wrzesie\u0144";break;case 9:ne="pa\u017adziernik";break;case 10:ne="listopad";break;default:ne="grudzie\u0144"}for(var te=new Date("".concat(ee.getFullYear(),"-").concat(ee.getMonth()+1,"-01")).getDay()-1,ae=new Date(ee.getFullYear(),ee.getMonth()+1,0).getDate(),re=[],ie=0;ie<42;ie++)re[ie]=0;for(var ce=te;ce<ae+te;ce++)re[ce]=1;var le=function e(){Object(X.a)(this,e),this.title="",this.date=ee,this.month=ne,this.year=ee.getFullYear(),this.startingDay=te,this.days=ae,this.status="active",this.price="",this.daysArray=re,this.key=Object($.a)()};function oe(){var e=Object(l.a)(["\n    width: 100%;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    h3 {\n        font-family: 'Playfair Bold';\n        font-size: 1.8em;\n        color: white;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    textarea {\n        width: 100%;\n        font-family: 'Playfair Regular';\n        color: ",";\n        resize: none;\n        text-align: center;\n        padding: 1em;\n        font-size: 1.4em;\n        outline: none;\n    }\n    button {\n        outline: none;\n        border: none;\n        background-color: ",";\n        color: ",";\n        font-family: 'Playfair Bold';\n        font-size: 2em;\n        padding: 1em;\n        width: 100%;\n        cursor: pointer;\n    }\n\n    @media (min-width: 480px){\n        h3 {\n            font-size: 2em;\n        }\n        textarea {\n            font-size: 1.8em;\n        }\n    }\n\n    @media (min-width: 480px){\n        h3 {\n            font-size: 2.2em;\n        }\n        textarea {\n            font-size: 1.8em;\n        }\n    }\n\n    @media (min-width: 550px){\n        h3 {\n            font-size: 2.6em;\n        }\n        textarea {\n            font-size: 2.2em;\n        }\n    }\n"]);return oe=function(){return e},e}var se=o.c.div(oe(),(function(e){return e.theme.green}),(function(e){return e.theme.black}),(function(e){return e.theme.mint}),(function(e){return e.theme.green})),ue=function(){var e=Object(a.useState)(new le),n=Object(C.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(""),l=Object(C.a)(c,2),o=l[0],s=l[1],u=function(e){e.preventDefault(),t.title.length>5?(U("tasksActive",t),i(new le),s("Nawyk dodany do monitorowania. Przejd\u017a do Home"),setTimeout((function(){s("")}),5e3)):(i(new le),s("Nazwa nawyku powinna mie\u0107 co najmniej 5 znak\xf3w. Spr\xf3buj ponownie."),setTimeout((function(){s("")}),5e3))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null,r.a.createElement("form",{className:"add-new__form-title-container"},r.a.createElement("h3",null,"Nowy nawyk do monitorowania:"),r.a.createElement("textarea",{name:"title",value:t.title,onChange:function(e){return(n=e).preventDefault(),void i(Object(R.a)(Object(R.a)({},t),{},{title:n.target.value}));var n},cols:"30",rows:"4",placeholder:"Wpisz nawyk, jaki chcesz monitorowa\u0107 :)",onKeyDown:function(e){return 13===e.keyCode&&u(e)}}),r.a.createElement("button",{onClick:function(e){return u(e)}},"Dodaj"))),r.a.createElement(V,null,""!==o&&r.a.createElement("p",null,o)))},me=function(e){var n=e.task,t=Object(a.useState)(n),i=Object(C.a)(t,1)[0],c=Object(a.useState)(Object(T.a)(n.daysArray)),l=Object(C.a)(c,1)[0];return r.a.createElement(W,null,r.a.createElement("p",{className:"task-date"},i.month," ",i.year," / ARCHIWALNE"),r.a.createElement("header",{className:"task-title"},i.title),r.a.createElement("div",{className:"task-calendar"},r.a.createElement("div",{className:"task-calendar-days-names"},r.a.createElement("div",{className:"day"},"PON"),r.a.createElement("div",{className:"day"},"WT"),r.a.createElement("div",{className:"day"},"\u015aR"),r.a.createElement("div",{className:"day"},"CZW"),r.a.createElement("div",{className:"day"},"PT"),r.a.createElement("div",{className:"day"},"SOB"),r.a.createElement("div",{className:"day"},"NIE")),r.a.createElement("div",{className:"task-container___calendar"},l.map((function(e,t){return 0===e?r.a.createElement("div",{key:t,className:"single-day"}):1===e?r.a.createElement("div",{key:t,className:"single-day habit-to-be-checked"},t-n.startingDay+1):2===e?r.a.createElement("div",{key:t,className:"single-day habit-not-done"}):r.a.createElement("div",{key:t,className:"single-day habit-done"})})))))};function de(){var e=Object(l.a)(["\n    .buttons-container{\n        width: 100%;\n        display: flex;\n        justify-content: center;\n    }\n    button {\n        border: none;\n        background-color: ",";\n        color: ",";\n        font-family: 'Playfair Regilar';\n        padding: 1em 2em;\n        font-size: 2em;\n        margin: 0 10px;\n    }\n"]);return de=function(){return e},e}var fe=o.c.div(de(),(function(e){return e.theme.mint}),(function(e){return e.theme.black})),pe=function(){var e=Object(a.useState)(F("tasksArchive")||[]),n=Object(C.a)(e,2),t=n[0],i=n[1];return r.a.createElement(fe,null,t.map((function(e){return r.a.createElement("div",{key:e.key},r.a.createElement(me,{task:e}),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{onClick:function(n){return t=e,n.preventDefault(),H("tasksArchive",t),void i(F("tasksArchive"));var t}},"USU\u0143")))})))},ge=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("tasksArchive"))||[]),n=Object(C.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,0!==n.length?r.a.createElement(pe,null):r.a.createElement(M,null,r.a.createElement("p",null,"Nie masz nic zarchiwizowanego micz")))},he=Object(a.createContext)(),ye=function(e){var n=Object(a.useState)(F("tasksActive")||[]),t=Object(C.a)(n,2),i=t[0],c=t[1];return r.a.createElement(he.Provider,{value:{taskArray:i,setTaskArray:c}},e.children)};function ve(){var e=Object(l.a)(["\n    padding-top: 4em;\n    p {\n        font-family: 'Playfair Regular';\n        font-size: 1.6em;\n    }\n    button {\n        outline: none;\n        border: none;\n        background-color: ",";\n        color: ",";\n        font-family: 'Playfair Bold';\n        font-size: 1.6em;\n        margin-top: 1em;\n        padding: 1em;\n        cursor: pointer;\n    }\n"]);return ve=function(){return e},e}var be=o.c.div(ve(),(function(e){return e.theme.mint}),(function(e){return e.theme.green})),xe=function(){var e=Object(a.useContext)(he).setTaskArray;return r.a.createElement(be,null,r.a.createElement("p",null," Usuni\u0119cie wszelkich dotychczas wprowadzonych nawyk\xf3w: "),r.a.createElement("button",{onClick:function(n){return localStorage.clear("tasks"),e([]),void console.log("Wyczyszczone, zapomniane!")}},"WYRZU\u0106, ZAPOMNIJ"))},ke=Object(a.createContext)(),we=function(e){var n=Object(a.useState)(JSON.parse(localStorage.getItem("tasksArchive"))||[]),t=Object(C.a)(n,2),i=t[0],c=t[1];return r.a.createElement(ke.Provider,{value:{archiveTaskArray:i,setArchiveTaskArray:c}},e.children)};function Ee(){var e=Object(l.a)(["\n  background-color: white;\n  min-height: 500px;\n  width: 100vh;\n  max-width: 900px;\n  min-width: 260px;\n  border-radius: 10px;\n  box-shadow:\n      0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n      0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n      0 12.5px 10px rgba(0, 0, 0, 0.035),\n      0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n      0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n      0 100px 80px rgba(0, 0, 0, 0.07);\n  padding: 20px;\n\n  @media (max-width: 320px) {\n    \n  }\n"]);return Ee=function(){return e},e}function _e(){var e=Object(l.a)(["\n  height: 100vh;\n  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);;\n  color: black;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  padding: 2em;\n\n  @media (min-width: 320px) {\n    padding: 20px;\n  }\n"]);return _e=function(){return e},e}var je=o.c.div(_e()),Oe=o.c.div(Ee());var Ne=function(){return r.a.createElement(o.a,{theme:m},r.a.createElement(we,null,r.a.createElement(ye,null,r.a.createElement(je,null,r.a.createElement(N,null),r.a.createElement(f,null),r.a.createElement(s.a,null,r.a.createElement(Oe,null,r.a.createElement(B,null),r.a.createElement(u.a,{exact:!0,path:"/",component:q}),r.a.createElement(u.a,{exact:!0,path:"/dodajnowy",component:ue}),r.a.createElement(u.a,{exact:!0,path:"/archiwum",component:ge}),r.a.createElement(u.a,{exact:!0,path:"/ustawienia",component:xe})))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e9a4ecb8.chunk.js.map