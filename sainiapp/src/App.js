import './App.css';
import React from 'react';
import Project from './Components/Project';
import amritsar from "./Components/Proj_img/amritsar.jpg"
import chd from "./Components/Proj_img/chd.jpg"
import ooty from "./Components/Proj_img/ooty.jpg"
import jaipur from "./Components/Proj_img/jaipur.jpg"
import redfort from "./Components/Proj_img/redfort.jpg"
import delhi from "./Components/Proj_img/delhi.jpg"
import taj from "./Components/Proj_img/taj.jpg"
import himachal from "./Components/Proj_img/himachal.jpg"
import jammu from "./Components/Proj_img/jammu.jpg"


function App(){
  
  return(
    <div>
      <center>
        <Project />
     <Project placename="Amritsar" desc="The city is situated 217 km (135 mi) northwest of state capital Chandigarh, 455 km (283 miles) northwest of New Delhi, the national capital, and 47 km (29.2 miles) northeast of Lahore, Pakistan, with the Indo-Pak Border (Wagah) being only 28 km (17.4 mi) away." img={amritsar} />
      <Project placename="Chandigarh" desc="It was one of the early planned cities in post-independence India and is internationally known for its architecture and urban design.[11] The master plan of the city was prepared by Swiss-French architect Le Corbusier, which transformed from earlier plans created by the Polish architect Maciej Nowicki and the American planner Albert Mayer. " img={chd} />
      <Project placename="Ooty" desc="Originally occupied by the Badaga people and Toda people, the area came under the rule of the East India Company at the end of the 18th century. The economy is based on tourism and agriculture, along with the manufacture of medicines and photographic film" img={ooty} />
      <Project placename="Jaipur" desc="aipur is a popular tourist destination in India and forms a part of the west Golden Triangle tourist circuit along with Delhi and Agra (240 km, 149 mi).[12] It also serves as a gateway to other tourist destinations in Rajasthan such as Jodhpur (348 km, 216 mi)," img={jaipur} />
      <Project placename="RedFort" desc="On 15 August 1947, the first Prime Minister of India, Jawaharlal Nehru, raised the Indian flag above the Lahori Gate. Every year on India's Independence Day (15 August), the Prime Minister hoists the Indian tricolour flag at the fort's main gate and delivers a nationally broadcast speech from its ramparts." img={redfort} />
      <Project placename="Delhi" desc="Delhi is one of the oldest cities in the world, and has been continuously inhabited since the 6th century BCE.[22] Through most of its history, Delhi has served as a capital of various kingdoms and empires, most notably the Tomars, Chahamanas, Delhi Sultanate and Mughals." img={delhi} />
      <Project placename="Taj Mehel" desc="The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/;[4] lit. 'Crown of the Palace', [taːdʒ ˈmɛːɦ(ə)l]),[5] is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal" img={taj} />
      <Project placename="himachal" desc="Himachal Pradesh (/hɪˌmɑːtʃəl prəˈdɛʃ/; Hindi: [ɦɪˈmɑːtʃəl pɾəˈd̪eːʃ] (About this soundlisten);lit. Province of the Snowladen Mountains[18]) is a state in the northern part of India. Situated in the Western Himalayas " img={himachal} />
      <Project placename="Jammu & Kashmir" desc="Jammu and Kashmir[b] is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962.[15][16] " img={jammu} />
    </center>
  
    </div>  
  )
}

export default App
