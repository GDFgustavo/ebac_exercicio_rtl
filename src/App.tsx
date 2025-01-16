import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/747391/miniatura_batmovel_tumbler_2008_com_boneco_1_24_jada_toys_9622_1_47e81544d2a364bc23e177aab0205c28.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
