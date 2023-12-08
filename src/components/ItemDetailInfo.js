import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {  useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './ItemDetailInfo.css';


import pagos from '../components/img/pagos.jpg';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box div={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function ItemDetailInfo(desc) {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const descProduct = desc.desc
  const keyProduct = desc.id

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div key={keyProduct} className="container-detailInfo"  >
      
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab  className="item-info-button" label="Detalle" {...a11yProps(0)} />
          <Tab label="Medios De Pago" {...a11yProps(1)} />
          <Tab label="Envios" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          <div className="container-detailInfo">
          {descProduct} Ideal para todo tipo de piel.
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="container-detailInfo">
          <div className="container-pagos">
          Pagos a través de
          <img src={pagos} alt="pagoslogos"></img>
          Con tarjetas de crédito
          </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="container-detailInfo">
          LOS ENVIOS SON A TRAVES DE STARKEN A DOMICILIO O AGENCIA
          SUCURSAL STARKEN	PUEDEN IR POR PAGAR O PAGADOS CON VALOR FIJO RM $4.000 VALPARAISO $6.000, OTRAS $7.000
         Los envíos a domicilio se realizan a través de Starken. El horario de entrega es de 9 a 18hs. Starken te va enviar un link de seguimiento de tu pedido a través de un mail.
         También puedes elegir como opción retiro por la sucursal mas cercana. Hay locales de punto de entrega en todo Santiago. Ver listado completo de sucursales habilitadas acá.
         Vas a recibir notificaciones del estado de tu pedido vía mail o puedes ver el seguimiento de tu pedido desde tu perfil.
         </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}