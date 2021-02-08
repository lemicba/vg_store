import { Menu } from 'antd';
import CarWidget from '../CarWidget'
import logo from '../../images/logo.png';
import './styles.scss';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;

const Navbar = () => {
	return (
		<nav className="menuBar">
			<div className="logo">
				<Link to={"/"}>
					<img src={ logo } alt="VGStore logo"/>
				</Link>
			</div>
			<div className="menuCon">
				<div className="leftMenu">
					<Menu theme="dark" mode={"horizontal"}>
						<Menu.Item key="home">
							<Link to={"/"}>
								Home
							</Link>
						</Menu.Item>
						<SubMenu key="sub1" title={<span>Categorias</span>}>
								<Menu.Item key="setting:1"><Link to={"/categoria/rpg"}>RPG</Link></Menu.Item>
								<Menu.Item key="setting:2"><Link to={"/categoria/aventura"}>Aventura</Link></Menu.Item>
								<Menu.Item key="setting:3"><Link to={"/categoria/accion"}>Acción</Link></Menu.Item>
								<Menu.Item key="setting:4"><Link to={"/categoria/plataformas"}>Plataformas</Link></Menu.Item>
						</SubMenu>
					</Menu>
				</div>
			</div>
			<div className="menuCart">
				<CarWidget />
			</div>
		</nav>
	);
}

export default Navbar;
