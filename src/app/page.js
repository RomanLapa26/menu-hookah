import './menu.css'

export default function Home() {
  return (
    <div class="body">
      <div class="menu">
          <h1>Меню</h1>
          
          <div class="section">
              <h2>Кальяны</h2>
              <ul>
                  <li>Классический кальян <span class="price">1000 руб.</span></li>
                  <li>Кальян на сигарном листе <span class="price">1100 руб.</span></li>
                  <li>Кальян на фрукте <span class="price">1400 руб.</span></li>
              </ul>
          </div>
          
          <div class="section">
              <h2>Чай</h2>
              <ul>
                  <li>Молочный улун зеленый <span class="price">300 руб.</span></li>
                  <li>Озорной фрукт красный <span class="price">300 руб.</span></li>
                  <li>Индийский черный <span class="price">300 руб.</span></li>
                  <li>Пуэр черный <span class="price">300 руб.</span></li>
                  <li>Молочный пуэр черный, зеленый <span class="price">300 руб.</span></li>
              </ul>
          </div>
          
          <div class="section">
              <h2>Лимонады</h2>
              <ul>
                  <li>Классический лимонад <span class="price">скоро будет</span></li>
                  <li>Малиновый лимонад <span class="price">скоро будет</span></li>
                  <li>Мятный лимонад <span class="price">скоро будет</span></li>
              </ul>
          </div>
      </div>
    </div>
  );
}
