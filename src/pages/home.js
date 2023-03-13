import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import ArticeWall from './components/articewall.js';
import Navbar1 from './Navbar01.js';
function Home (){ 
    return(
        <div>
            <Navbar></Navbar>
            <ArticeWall></ArticeWall>
            <Footer></Footer>
        </div>
    )
};
export default Home;