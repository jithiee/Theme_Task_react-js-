import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
    const {theme} = useContext(ThemeContext)

  return (
    <div  style={{backgroundColor:theme,color : theme=='black'? 'white'  : '' }}>
      <h2 >Content page</h2> <hr />
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem. Repellat alias ullam non qui et! Velit, iusto perferendis? Amet qui pariatur dolor accusantium similique nostrum distinctio facere numquam. Dolore.
      Vitae quae dignissimos aspernatur perspiciatis, distinctio incidunt praesentium libero iusto, veniam eos quam enim nobis sapiente dolor ducimus corporis. Facilis vitae minus optio, ipsa sapiente magnam quidem sint at inventore?
      Magnam adipisci autem tempora blanditiis illo quam voluptate, aut in exercitationem modi sint sunt. Sit ullam natus optio, odit inventore ut, quibusdam quae tempore rerum, laboriosam nihil fugit blanditiis? Cum?
      Recusandae molestias corrupti unde exercitationem vel magni. Placeat alias distinctio eaque qui ad quod dolore, sunt non eos modi repellat ipsa asperiores temporibus magnam molestiae, error eligendi nostrum? Error, illum.
      Ullam laudantium tenetur nobis temporibus, nisi voluptas ea, pariatur vitae nemo quisquam labore animi eum! Vero explicabo ducimus numquam! Eligendi sit dignissimos reiciendis libero doloribus perspiciatis rem eius autem culpa?
      Laudantium dolorem ad consectetur asperiores illum debitis. Ipsum, error. Ad ipsa libero repudiandae dignissimos omnis facilis, excepturi quo? Suscipit nihil asperiores hic repudiandae amet esse culpa non odio aspernatur accusantium.
      Consequuntur dolore asperiores quisquam, eligendi possimus illum minima velit nulla soluta reprehenderit. Est, velit ratione assumenda porro sed pariatur culpa, quis aliquam, similique repellendus itaque quae qui totam eum officia?
      Possimus voluptatibus quas veniam asperiores, labore iste tempore dolore fuga accusamus eum eius sit autem blanditiis fugit voluptates quibusdam, vero, perferendis culpa voluptate. Doloribus libero incidunt quam harum autem quo?
      Possimus, porro! Fugiat fuga pariatur a dignissimos ratione! Quam illum eaque impedit excepturi, eos aspernatur, in minima, expedita enim quos pariatur debitis! Maiores pariatur incidunt quos ea nulla a quibusdam?
      Inventore facere repudiandae unde iusto in iure, eveniet nulla, id accusamus exercitationem maxime. Minus explicabo praesentium esse facilis officiis fugit architecto! Vero modi eius mollitia laboriosam recusandae provident. Qui, quasi.</p>
    </div>
  );
}

export default Content;
