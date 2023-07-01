import './index.css';
import AccueilAR from './ar/AccueilAR';
import Principale from './fr/Principale.js';
import Page from './fr/Page.js'
import Evenements from './fr/Evenements.js';
import AlbumAR from './ar/AlbumAR.js';
import EvenementsAR from './ar/EvenementsAR.js';
import EvenementsECAR from './ar/EvenementsECAR.js'
import UFA from './ar/UFA.js'
import Presentationar from './ar/Presentationar.js'
import Presentation from './fr/Presentation.js'
import UploadEvenementsComplets from './admin/UploadEvenementsComplets.js';
import UploadNewsAR from './admin/UploadNewsAR';
import UploadEvenementsENAR from './admin/UploadEvenementsENAR';
import UploadAlbums from './admin/UploadAlbums';
import UploadEvenementsCompletsFR from './admin/UplaodEvenementsCompletsFR';
import UploadNewsFR from './admin/UploadNewsFR';
import UploadEvenementsEN from './admin/UploadEvenementsEN';
import Auth from './ar/AuthAR'
import EvenementsEN from './fr/EvenmentsEN.js'
import {Routes,Route} from 'react-router-dom'
import Album from './fr/Album.js'


function App() {
  const presentation = '/Présentation'
  return (
    <div className="App">
      <Routes>
        <Route path='/admin/UploadEvenementsComplets' element={<UploadEvenementsComplets/>} />
        <Route path='/admin/UploadNewsAR' element={<UploadNewsAR/>} />
        <Route path='/admin/UploadEvenementsENAR' element={<UploadEvenementsENAR/>} />
        <Route path='/admin/UploadAlbums' element={<UploadAlbums/>} />
        <Route path='/' element={<Principale />} />
        <Route path='/ar/Accueil' element={<AccueilAR/>} />
        <Route path='/ar/Presentation' element={<Presentationar/>} />
        <Route path='/ar/Album' element={<AlbumAR/>} />
        <Route path='/ar/evenements-completes' element={<EvenementsAR/>} />
        <Route path='/ar/evenements-en-cours-de-construction' element={<EvenementsECAR/>} />
        <Route path='/fr/evenements-en-cours-de-construction' element={<EvenementsEN/>} />
        <Route path='/ar/evenements-en-cours/UFA' element={<UFA/>} />
        <Route path='/fr/Accueil' element={<Page />} />
        <Route path='/fr/Presentation' element={<Presentation />} />
        <Route path='/fr/Album' element={<Album/>} />
        <Route path='/fr/evenements-completes' element={<Evenements/>} />
        <Route path='/admin/UploadEvenementsCompletsFR' element={<UploadEvenementsCompletsFR/>} />
        <Route path='/admin/UploadEvenementsEN' element={<UploadEvenementsEN/>} />
        <Route path='/admin/UploadNewsFR' element={<UploadNewsFR/>} />
        <Route path='/Auth' element={<Auth/>} />
      </Routes>
    </div>
  );
}

export default App;