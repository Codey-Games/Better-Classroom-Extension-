function waitToExecute(selector, styleProperty, styleValue) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.matches && node.matches(selector)) {
                    node.style[styleProperty] = styleValue;
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function execute(selector, styleProperty, styleValue) {
  const element = document.querySelector(selector);
  if (element !== null) {
    element.style[styleProperty] = styleValue;
  }
}

function afterLoadExecute(selector, styleProperty, styleValue) {
    window.onload = function () {
        document.querySelector(selector).style[styleProperty] = styleValue;
    };
}




function update() {

    // HOME PAGE

    execute('body', 'backgroundColor', '#010101'); // fix background color
    afterLoadExecute('.NMm5M', 'color', 'white'); // fix add classroom svg

    execute('#kO001e > div.QRiHXd', 'backgroundColor', '#333333'); // header
    waitToExecute('.span.rpo4wf-J3yWx Pce5Kb', 'color', 'white'); // fix classroom text
    waitToExecute('.UGb2Qe', 'color', 'white'); // fix class text
    afterLoadExecute('.dDKhVc', 'color', '#cccccc'); // fix gray text

    waitToExecute('.TQYOZc', 'background-color', '#333333'); // fix top of class boxes
    afterLoadExecute('.SZ0kZe', 'backgroundColor', '#333333'); // fix bottom of class boxes
    
    execute('.Tabkde .OX4Vcb', 'backgroundColor', '#111111'); // fix default sidebar.asQXV
    waitToExecute('.asQXV', 'color', 'white'); // fix default sidebar color

    // CLASSES

    execute('div.T4tcpe', 'align-content', 'center'); // center (x) header

    waitToExecute('.qk0lee.QRiHXd.VBEdtc-Wvd9Cc', 'backgroundColor', '#333333'); // fix background color of announcement box
    waitToExecute('K6Ovqd', 'color', 'white'); // fix text color of announcement box
}

window.onload = update;



// "Sorry" for hippity hoppity your code is now my property-ing



const site = window.location.hostname

console.log("site: "+site)


const Add_Custom_style = css => document.head.appendChild(document.createElement("style")).innerHTML = css


function Creat_Custom_Element(tag, attr_tag, attr_name, value){
    const custum_element = document.createElement(tag)
    custum_element.setAttribute(attr_tag, attr_name)
    custum_element.innerHTML = value
    document.body.append(custum_element)
}


if (site.includes("classroom.google.com")){
    //alert("This website: "+ site+" is not safe for your mental health")
    Add_Custom_style(`
    
    
    body {
        background-color: #252525;
        color-scheme:dark;
      }
        
      .n4xnA, QRiHXd {
        background-color: #1F1F1F; /**/
        
      }

    #kO001e{
        background-color: black;/*top bar*/
    }
    .OX4Vcb{
        background-color: #393939;/*slider bar*/
    }
    .YVvGBb{
        color : white;/*text1*/
    }
    .gHz6xd{
        background-color: #2C2F54;/*bottom of each class tile*/
        color: lightgrey;/*folder*/
    }
    .PeGHgb{
        background-color: #3E3E3E;/*comment*/
    }
    .pco8Kc{
        color:lightgrey;/*text inside box*/
    }
    .oBSRLe{
        color:skyblue;/**/
    }
    .nGi02b{
        color:lavender;/*text when open assignment*/
    }
    .K6Ovqd {
        color:pink;
    }
    .NPEfkd, .NMm5M{
        /*background-color: red;*/
        color:white; /*class comment under the post*/
    }
    .gJItbc{
        color:skyblue;/*name of commentator*/
    }
    .onkcGd.zZN2Lb-Wvd9Cc.VBEdtc-Wvd9Cc.apFsO {
        color:white  ;/*home work deadline on home page*/
        
    }
    .sjxkNc {
        color: skyblue;/*color of to do example this weel next week past week*/
    }
    .HbKQLd.WOPwXe{
        color: white;/*same as above but the one not selected*/
    }
    .VSWCL.tLDEHd{
        color: lightgrey;/* comments */
    }
    .bswVrf.Lzdwhd-BrZSOd{
        color: grey;
    }
    .d4Fe0d.LBlAUc{
        background-color: #191919;/*upcomming*/
    } 
    .EZrbnd.sxa9Pc{
        color:lavender;/*upcomming*/
    }
    .nforOe{
        color:lightgrey;/*upcomming*/
    }
    .TkwUic{
        background-color:red;
        color:red;
    }
    .RdyDwe.snByac{
        
        color:skyblue;
    }
    .z3vRcc{
        color:white;
    }
    .YVvGBb.xUYklb.VnOHwf-Tvm9db.B7SYid{
        //background-color:red;
        color:skyblue;
    }
    .WpHeLc.VfPpkd-mRLv6.VfPpkd-RLmnJb{
        color:red;
    }
    .VfPpkd-vQzf8d{
        color:skyblue;
    }
    .sCv5Q.asQXV{
        color:lightgrey;
    }
    .wCDkmf.T3FW5d.YVvGBb.dDKhVc{
        color:lavender;
    }

    .tNGpbb.YrFhrf-ZoZQ1.YVvGBb, .qFmcrc.z3vRcc-ZoZQ1.YVvGBb {
        text-align:center;
    }
    .dbEQNc {
        width:100%;
        max-width:100%;
        overflow:hidden;
    }
    .M7zXZd {
        max-width:90%;
        padding-left:5%;
    }
    .v9TZ3c.bFjUmb-Tvm9db {
        margin-top: 0;
        border-radius: 0 0 50px 50px;
    }
    .Aopndd, .d4Fe0d {
        border: 0rem solid dimgrey;
    }

    .Aopndd {
        background-color:black;
    }
    .qyN25 {
        height:10rem;
    }
    .mwJvDe .KEDCCd {
        background-color:#1F1F1F;
    }
    .wZTANe .J1raN {
        color:darkgray;
    }
    .wZTANe .J1raN:hover {
        color:white;
    }


    `)
}




//document.querySelector('.your-class-name').style.backgroundColor = "black";

//Background:

//Background Color: #333333(Dark gray)
//Alternative Dark Background: #1a1a1a
//Very Dark Background: #000000(Black)
//Menu:

//Menu Background: #222222
//Menu Text: #FFFFFF(White)
//Menu Highlight: #FFA500(Orange)
//Header:

//Header Background: #333333
//Header Text: #FFFFFF
//Header Accent: #FF5733(Orange)
//Footer:

//Footer Background: #222222
//Footer Text: #CCCCCC(Light gray)
//Footer Link: #FFA500
//Popups:

//Popup Background: #444444
//Popup Text: #FFFFFF
//Popup Close Button: #FF5733
