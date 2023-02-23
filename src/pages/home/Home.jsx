import Header from '../../components/header/Header'
import './Home.css'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'
import SearchBar from '../../components/searchbar/SearchBar'
function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </>
  )
}

export default Home