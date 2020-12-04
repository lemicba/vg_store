import { Menu } from 'antd';
import logo from '../../images/logo.png';
import './styles.scss';
const SubMenu = Menu.SubMenu;

const Navbar = () => {
	return (
		<nav className="menuBar">
			<div className="logo">
				<img src={ logo } alt="VGStore logo"/>
			</div>
			<div className="menuCon">
				<div className="leftMenu">
					<Menu theme="dark" mode={"horizontal"}>
						<Menu.Item key="home">
							<a href="#">Home</a>
						</Menu.Item>
						<SubMenu key="sub1" title={<span>Categorias</span>}>
							<Menu.Item key="setting:1">Categoria 1</Menu.Item>
							<Menu.Item key="setting:2">Categoria 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="contacto">
							<a href="#">Contacto</a>
						</Menu.Item>
					</Menu>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
