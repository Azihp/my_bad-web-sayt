import './App.css'
import {Component} from 'react'
 class App extends Component{
render(){
  return(
    <header>
      <nav>
        <div className="navbar_link">

         <a href="#" className='navbar_a'>Фуршетные наборы</a>
         <a href="#" className='navbar_a'>Хиты</a>
         <a href="#" className='navbar_a'>Скидки</a>
         <a href="#" className='navbar_a'>Готовые решения </a>
         <a href="#" className='navbar_a'>Новинки</a>
         <a href="#" className='navbar_a'>Кухни мира</a>
         <a href="#" className='navbar_a'>Кейтеринг</a>
         <a href="#" className='navbar_a'>Доставка домашней еды</a>
      </div>
      <div className="navbar_text__link">
        <a href="" className="navbar_text__look">Главная <span className='link__span'>></span></a>
        <a href="" className="navbar_text__look">Фуршетные наборы <span className='link__span'>></span></a>
        <a href="" className="navbar_text__look-one">Готовые сеты</a>
      </div>
         <div className="navbar__big_tetx">
          <h1 className='ghjfgh'>Готовые фуршетные сеты для кейтеринга</h1>
          </div>
      </nav>
    </header>
  )
}
}

export default App