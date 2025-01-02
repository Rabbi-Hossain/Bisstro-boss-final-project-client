<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import drinksImg from '../../../assets/menu/360_F_369560255_ze7zKUVKic1yQKzmXOSym2shcEyGqKPg.jpg'



const Menu = () => {


    const [menu] = useMenu()
    const dessert = menu.filter(item=>item.category === 'dessert')
    const salad = menu.filter(item=>item.category === 'salad')
    const drinks = menu.filter(item=>item.category === 'drinks')
    const soup = menu.filter(item=>item.category === 'soup')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const offered = menu.filter(item=>item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bisstro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='OUR MENU'></Cover>
            <SectionTitle heading="TODAY'S OFFER" subheading="Don't miss">
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title='dessert' img={dessertImg} ></MenuCategory>
            <MenuCategory items={pizza} title='pizza' img={pizzaImg} ></MenuCategory>
            <MenuCategory items={salad} title='salad' img={saladImg} ></MenuCategory>
            <MenuCategory items={soup} title='soup' img={soupImg} ></MenuCategory>
            <MenuCategory items={drinks} title='drinks' img={drinksImg} ></MenuCategory>
            
=======

const Menu = () => {
    return (
        <div>
            <h3>This is menu session</h3>
>>>>>>> dc53488c086e08d8c3e17d695d81a052889e3da9
        </div>
    );
};

export default Menu;