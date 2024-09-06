import { Typography } from '@mui/material';
import { DetailedData } from './DetailedData';
import { red } from '@mui/material/colors';

export const SubsystemDetailedData = ({ sysName, subsysName }) => {
    const { getSubsystemData } = userDataStore();
    const { titulo, tipo, dato_inicial, dato_final, datos: dataList } = getSubsystemData(sysName, subsysName);

    // en dataList se almacena en cada componente de la lista el objeto correspondiente a "dato_x" y se agrega la propiedad "values" con la lista de valores para dicho "dato_x".
    //todo: verificar y eleiminar
    for (let i = subsystem.dato_inicial; i <= subsystem.dato_final; i++) {
        const dataKey = `dato_${i}`;
        const data = systemData[dataKey];
        data.valores = systemDataValues[dataKey];
        if (data) {
            dataList.push(data);
        }
    }

    return (
        <>
            <Typography variant="h6" marginBottom={0} color="secondary">
                Subsistema: {titulo}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Tipo: {tipo}
            </Typography>
            <Typography variant="h6" marginBottom={2}>
                dato_inicial: {dato_inicial}&nbsp;&nbsp;&nbsp; dato_final: {dato_final}
            </Typography>
            {dataList.map((data, index) => (
                <DetailedData key={index} sysName={sysName} subsysName={subsysName} />
            ))}
        </>
    );
};

//formato de "subsystem":
// {
//       nombre: "molino norte",
//       tipo: "molino",
//       dato_inicial: 1,
//       dato_final: 2
// }

//formato de "systemDataValues", continene todos los datos de un sistema particular, por ejemplo "sistema_1"
// {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//   }

//El valor de "systemData" es:
//   {
//     "canal_1": "1687674",
//     "cant_canales_asignados": 1,
//     "cant_datos": 4,
//     "cant_subsistemas": 2,
//     "readAPIkey_1": "K0118S8SRR1ZNXK1",
//     "subtitulo": "Bebedero sobre parcela norte",
//     "tipo": "bebedero",
//     "titulo": "Bebedero Vacas",
//     "dato_1": {
//       "descripcion_alerta": "Molino posiblemente con problemas",
//       "estado_alerta": 1,
//       "tipo": "estado",
//       "titulo": "Estado",
//       "unidad": ""
//     },
//     "dato_2": {
//       "descripcion_alerta": "Molino con poca agua de salida",
//       "estado_alerta": 0,
//       "tipo": "caudal",
//       "titulo": "Caudal",
//       "unidad": "l/s"
//     },
//     "dato_3": {
//       "descripcion_alerta": "Tanque con poca agua",
//       "estado_alerta": 0,
//       "tipo": "nivel",
//       "titulo": "Nivel agua",
//       "unidad": "%"
//     },
//     "dato_4": {
//       "descripcion_alerta": "Temperatura del agua muy alta",
//       "estado_alerta": 0,
//       "tipo": "temperatura",
//       "titulo": "Temperatura",
//       "unidad": "°C"
//     },
//     "subsistema_1": {
//       "nombre": "molino norte",
//       "tipo": "molino",
//       "dato_inicial": 1,
//       "dato_final": 2
//     },
//     "subsistema_2": {
//       "nombre": "tanque norte",
//       "tipo": "tanque",
//       "dato_inicial": 3,
//       "dato_final": 4
//     },
//   }
