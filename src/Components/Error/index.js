import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';

const errorPage = () => {
  return (
    <>
    <Result
    status="404"
    title="404"
    subTitle="Esta página no existe"
    extra={<Link to={"/"}><Button type="primary">Volver</Button></Link>}
    />
    </>
  );
};

export default errorPage;