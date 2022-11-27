
import React from "react";


const Sidebar = ({ children }) => {
    var sidebarStyle = {
      position: 'absolute',
      width: '230px',
      height: '100%',
      background: '#2A3F54',
      zIndex: 9999,
      display: 'flex'
    };
    
    return (
      <div className="sidebar col-md-3" style={sidebarStyle}>
        {children}  
      </div>
    )
  }
  
const PageView = ({ page }) => {
    var viewStyles = {
      marginLeft: '230px',
      padding: '10px 20px 0'
    }
    return (
      <div style={viewStyles}>
        <Title text={page.name} />
        <Image src={page.src} alt=""> </Image>
        <></>
      </div>
    );
  }
   

const ComponentA = (page) => {
  
  return (
          <div> <img src="./Wheather-images/Snow.png"    alt ="" ></img> </div>
         
          );  
}

const ComponentB = (page) => {
   
  return (
    <div>
      {" "}
      <img src="./Wheather-images/Clear.png" alt=""></img>{" "}
    </div>
  );
}

  
   
  const MenuItem = ({title, icon, onClickHandler, page}) => {
    var menuItemStyle = {
      display: 'block',
      padding: '10px',
      color: '#fdfdfd',
      margin: '0 -15px',
      borderBottom: '1px solid rgb(35, 50, 66)'
    };
    
    var iconStyle = {
      marginRight: '10px'
    }
    
    return (
      <div onClick={() => onClickHandler(page)}>
        <div style={menuItemStyle}>
          <i className={'fa fa-fw fa-' + icon} style={iconStyle}></i>
          {title}
        </div>  

      </div>
    )
  }
  
  const Menu = ({pages, onClickHandler}) => {
    var navStyle = {
      display: 'block',
      width: '100%'
    };
    return (
      <nav style={navStyle} >
        {pages.map((page) => {
          return <MenuItem title={page.name} icon={page.icon} page={page} onClickHandler={onClickHandler} src={page.src} />
        })}
      </nav>
    )
  }
  
  const Title = ({text}) => {
    return (
      <div className="text-center page-header">
        {text}
      </div>
    )
  };
   
const Image = ({src}) => {
  return (
    <div> {src}</div>
    )
}
  
  class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        pages: [
          {
            id: "1",
            name: "name 1",
            icon: "file",
            children: [],
            src: "./Wheather-images/Snow.png",
          },
          {
            id: "2",
            name: "name 2",
            icon: "home",
            children: [],
            src: "./Wheather-images/Sleet.png",
          },
          {
            id: "3",
            name: "name 3",
            icon: "clipboard",
            children: [],
            src: "./Wheather-images/Clear.png",
          },
          {
            id: "4",
            name: "name 4",
            icon: "code-fork",
            children: [],
            src: "./Wheather-images/Hail.png",
          },
          {
            id: "5",
            name: "name 5",
            icon: "database",
            children: [],
            src: "./Wheather-images/Snow.png",
          },
        ],
        updatedPage: {
          id: "1",
          name: "name 1",
          icon: "file",
          children: [],
          src: "./Wheather-image/Lightrain.png",
        },
      };
      this.apiUrl = 'http://57d7e44b553f1b1100113a26.mockapi.io/api/v1';
    }
    
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <Sidebar>
              <Menu
                pages={this.state.pages}
                onClickHandler={(page) => {
                  this.setState({ updatedPage: page});
                }}
              />
              <ComponentA
                page={this.state.pages}
                
              ></ComponentA>
               
              <ComponentB
                page={this.state.pages}
              
              ></ComponentB>
            </Sidebar>
            <PageView page={this.state.updatedPage}/>
          </div>
        </div>
      );
    }
  }
export default Dashboard;
