import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            
            <div><h1>Desde layout</h1></div>
            
            <p>Párrafo antes de outlet</p>
            <Outlet ></Outlet>
            <p>Párrafo después de outlet</p>
      </div>
      
  )
}

export default Layout