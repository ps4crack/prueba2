// ==================== GENERADOR DE CSO EN PDF ====================
// Este script genera un documento PDF con el formato oficial de CSO
// basado en el archivo v4s.html

// MAPEO DE NOMBRES DE PLANTILLA (del desplegable) a TIPOS DE CSO
// Estos nombres deben coincidir con los que aparecen en el select del index.html
const mapeoNombresPlantilla = {
    // Mapeo exacto para nombres comunes que aparecen en el desplegable
    "GRANJAS": "granjas",
    "GRANJA": "granjas",
    "CONFORMIDAD SANITARIA DE OCUPACIÓN PARA GRANJAS": "granjas",
    "VEHICULOS": "vehiculos",
    "UNIDADES VEHICULARES": "vehiculos",
    "TRANSPORTE DE DESECHOS": "vehiculos",
    "URBANISMOS": "urbanismos",
    "URBANISMO": "urbanismos",
    "EDIFICACIONES": "urbanismos",
    "AGUAS RESIDUALES": "aguas_residuales",
    "TRATAMIENTO DE AGUAS": "aguas_residuales",
    "POZO": "pozo",
    "PERFORADO": "pozo",
    "CISTERNA": "cisterna",
    "CAMIONES CISTERNA": "cisterna",
    "REVISION DE PROYECTOS": "revision_proyectos",
    "VARIABLES SANITARIAS": "variables_sta",
    "ATMOSFERICA": "atmosfera",
    "CONTAMINACION ATMOSFERICA": "atmosfera",
    "PLAGUICIDAS": "plaguicidas",
    "APLICADORA": "plaguicidas",
    "DOTACION": "dotacion",
    "DOTACIÓN": "dotacion"
};

// Función para determinar el tipo de CSO basado en el nombre de la plantilla del select
function determinarTipoCSO(nombrePlantilla) {
    if (!nombrePlantilla) return "granjas";
    
    const nombreUpper = nombrePlantilla.toUpperCase();
    
    // Buscar coincidencia exacta en el mapeo
    for (const [clave, valor] of Object.entries(mapeoNombresPlantilla)) {
        if (nombreUpper.includes(clave)) {
            console.log(`✅ Plantilla "${nombrePlantilla}" mapeada a tipo: ${valor}`);
            return valor;
        }
    }
    
    // Si no hay coincidencia, intentar con palabras clave
    if (nombreUpper.includes("GRANJA")) return "granjas";
    if (nombreUpper.includes("VEHICULO") || nombreUpper.includes("TRANSPORTE")) return "vehiculos";
    if (nombreUpper.includes("URBANISMO") || nombreUpper.includes("EDIFICACION")) return "urbanismos";
    if (nombreUpper.includes("AGUA") || nombreUpper.includes("RESIDUAL")) return "aguas_residuales";
    if (nombreUpper.includes("POZO")) return "pozo";
    if (nombreUpper.includes("CISTERNA")) return "cisterna";
    if (nombreUpper.includes("REVISION") || nombreUpper.includes("PROYECTO")) return "revision_proyectos";
    if (nombreUpper.includes("VARIABLE")) return "variables_sta";
    if (nombreUpper.includes("ATMOSFERA")) return "atmosfera";
    if (nombreUpper.includes("PLAGUICIDA")) return "plaguicidas";
    if (nombreUpper.includes("DOTACION")) return "dotacion";
    
    console.warn(`⚠️ No se encontró mapeo para: "${nombrePlantilla}", usando tipo por defecto: granjas`);
    return "granjas"; // Por defecto
}

// ==================== RECAUDOS EXACTOS SEGÚN CADA WORD ORIGINAL ====================
const recaudosPorTipo = {
    granjas: {
        titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE OCUPACIÓN PARA GRANJAS",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
            "Copia de cedula de identidad del representante legal de la razón social.",
            "Copia de documento de propietario o contrato de arrendamiento de la parcela en la cual funciona la granja.",
            "Copia del documento de registro de la empresa o acta constitutiva de la cooperativa.",
            "Copia de conformidad de uso expedida por la Alcaldía que corresponda, si se encuentra ubicado en el área urbana y por el Ministerio de Ambiente si esta ubicado en área rural.",
            "Copia de constancia de aprobación de la localización de la granja expedida por el Servicio Autónomo de Sanidad Agropecuaria (INSAI).",
            "Copia de los planos actualizados de arquitectura debidamente acotados, indicando medios de ventilación e iluminación natural, dimensiones de los ambientes, tanto de áreas de los trabajadores como de los animales, planos de ubicación y situación de la granja, indicando los puntos resaltantes de la misma (abastecimiento, recolección, tratamiento y disposición de aguas negras y residuales), facilidades sanitarias para empleados y obreros, disposición de desechos peligrosos (estiércol, lodos, envases de plaguicidas, entre otros).",
            "Memoria Descriptiva (Datos generales de la empresa, dirección, N° trabajadores por género y por área, horario, objeto de la empresa, descripción de áreas con que cuenta, proceso o actividad, fuente de abastecimiento de agua, Tipo de granja, número de animales, numero de galpones y dimensiones, disposición final de los desechos).",
            "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro."
        ]
    },
    vehiculos: {
        titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE OCUPACIÓN PARA UNIDADES VEHICULARES QUE TRANSPORTEN DESECHOS GENERADOS EN ESTABLECIMIENTOS DE SALUD Y DESECHOS CÁRNICOS",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
            "Inscripción de la empresa propietaria de la unidad vehicular, en el registro de actividades capaces de degradar el ambiente (RACDA) como empresa manejadora de desechos peligrosos en las actividades de recolección y transporte terrestre en todo el territorio nacional.",
            "Título o certificado de propiedad de la unidad vehicular autorizada para tal transporte.",
            "Memoria descriptiva que contenga: descripción de la unidad vehicular referida a las especificaciones indicadas en el DECRETO Nº 2.218 del 23/04/92 publicado en Gaceta oficial Nª 4.418 de fecha 27/04/92., fotos de la unidad vehicular que abarque rotulados, placas, depósito de lixiviados, depósito de equipos de protección personal, termostato., describir el proceso de limpieza y desinfección del vehículo, donde lo realiza y productos utilizados, hoja de seguridad del transporte, hoja de seguimiento desde la recolección hasta la disposición final.",
            "Copia del convenios y/o contratos para la disposición final de los desechos transportados.",
            "Anexar el listado de las empresas a las cuales suministra el servicio de transporte.",
            "Copia del permiso anterior en caso d ser Renovación.",
            "Para retirar, consignar (2) timbres fiscales de 1 U.T.",
            "NOTA: La unidad vehicular deberá ser presentadas previa planificación con la autoridad sanitaria de esta dirección para realizar la correspondiente inspección."
        ]
    },
    urbanismos: {
        titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE OCUPACIÓN PARA URBANISMOS Y EDIFICACIONES",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbres de 0,15 U.T dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con ganchos y separadores.",
            "Memoria descriptiva de la edificación o urbanismo.",
            "Copia de planos: de planta de la edificación acotado y a escala a 1:50 (ò a escala legible).",
            "Consignar copia de variables urbanas fundamentales expedidas por la alcaldía correspondiente.",
            "Presentar copia de garantía de servicios: acueducto y cloacas, expedido por HIDROLARA.",
            "Copia de constancia de bomberos municipales.",
            "Copia del documento de propiedad del terreno.",
            "Fotografías que describan el proceso constructivo y la obra terminada en orden secuencial.",
            "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro de la conformidad."
        ]
    },
    aguas_residuales: {
        titulo: "REQUISITOS PARA SOLICITAR EL PERMISO DE OPERACIÓN DE SISTEMAS DE TRATAMIENTO DE AGUAS RESIDUALES",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
            "Copia de cedula de identidad del representante legal de la razón social.",
            "Registro de la empresa o condominio a la cual pertenece el sistema de tratamiento de aguas residuales.",
            "Copia del documento de propiedad o de ocupación del territorio que identifique la propiedad de los terrenos donde se construyó y funciona dicho sistema.",
            "Copia de la cedula de identidad del representante legal de la empresa o condominio a la cual pertenece el sistema.",
            "Oficio donde se establezca el responsable de la operación y mantenimiento del sistema, en caso de ser operado por terceros, deberá anexar copia del contrato existente para tal operación, estableciendo el alcance, objetivos y responsabilidades de los contratantes.",
            "Copia del oficio emitido por Minec, trimestralmente a propósito de la entrega de la caracterización trimestral del sistema, anexar dicha caracterización en forma similar ante este despacho.",
            "Del sistema consignar: memoria de funcionamiento, complementando con flujo grama de operación, descripción de cada uno de los componentes, entregar plano de planta del sistema, plano detalle de cada componente. Si el permiso de operación es tramitado por primera vez deberá entregar juego de planos del sistema: plano de planta del sistema, detalle de la obra civil de la descarga.",
            "Manual de mantenimiento y operación del sistema de tratamiento de aguas servidas.",
            "Copia del permiso de operación anterior emanado por este servicio.",
            "Consignar timbres fiscales por un valor de (0,5) U.T, al momento de retiro."
        ]
    },
    pozo: {
        titulo: "REQUISITOS PARA SOLICITAR EL PERMISO DEL USO DEL AGUA PROVENIENTE DE POZO PERFORADO",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbres de 0,15 U.T dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con ganchos y separadores.",
            "Curvas de aforos tomados a cinco (5) niveles como mínimo (ver anexos 7 y 8 de la norma citada).",
            "Perfiles geológicos acotados de las formaciones encontradas, indicando la posición y tamaño de la rejilla y de la tubería de revestimiento ciego y la perforada (ver anexo 10 y 11).",
            "Curvas características de la bomba instalada.",
            "Dibujo esquemático de la instalación del pozo, indicando la posición de rejillas o de las ranuras de la tubería de revestimiento, del equipo de bombeo y de las instalaciones adicionales requeridas escala conveniente, indicando las medidas de protección adoptada: placa de concreto, drenaje de pisos, pendiente, drenaje de los alrededores, caseta de protección, área de terreno para la ubicación del pozo, cerca, puerta de protección, acceso y otros.",
            "Planilla con los datos técnicos del pozo. Completada con la información indicada en los anexos 12 y 13.",
            "Copia de planos acotados indicando el sistema de bombeo y sus etapas respectivas.",
            "Consignar los análisis bacteriológicos y físicos químicos correspondientes a muestras captadas en el pozo. Estos análisis deberán ser practicados por laboratorios de análisis de agua reconocidos y autorizados (articulo 63).",
            "Copia de la autorización del Ministerio del poder popular para el Ambiente para la perforación del pozo y para el uso explotación del recurso hídrico.",
            "Copia de documento de propietario o contrato de arrendamiento de la edificación en la cual funciona la empresa o la cooperativa.",
            "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro."
        ]
    },
    cisterna: {
        titulo: "REQUISITOS PARA SOLICITAR POR PRIMERA VEZ AUTORIZACIÓN SANITARIA PARA CAMIONES CISTERNAS",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbres de 0,15 U.T dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con ganchos y separadores.",
            "Copia del titulo de propiedad del camión cisterna. Si el propietario posee documento notariado deberá anexar la copia del mismo.",
            "Si la unidad en su titulo de propiedad tiene una tipología diferente a: cisterna y/o tanque, deberá anexarse fotocopias de constancia emitida por el INTTT dando el cambio de tipología.",
            "Copia de cédula de identidad del propietario y conductor.",
            "Copia de certificado de salud del conductor y del propietario si este labora en el transporte del agua.",
            "Copia de la autorización sanitaria anterior en caso de ser Renovación.",
            "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro de la conformidad.",
            "NOTA: La unidad vehicular deberá ser presentadas previa planificación con la autoridad sanitaria de esta dirección para realizar la correspondiente inspección."
        ]
    },
    revision_proyectos: {
        titulo: "REQUISITOS PARA REVISIÓN DE PROYECTOS DE URBANISMO Y EDIFICACIONES (VARIABLES SANITARIAS)",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
            "Copia de documento de propiedad de terreno.",
            "Variables urbanas fundamentales del proyecto.",
            "Acreditación técnica del estudio de impacto ambiental.",
            "Solvencia del profesional responsable del proyecto.",
            "Garantía de servicio de HIDROLARA.",
            "Juego de planos de los servicios del urbanismo: acueducto (planta, detalle de nodos y toma domiciliaria, detalles de hidrante), cloacas (planta y perfiles cloacales), drenaje (planta y en caso de tener sub-drenaje anexar plano de perfiles). Importante indicar una vez revisado y corregido por el servicio de ingeniería sanitaria se consignarán dos juegos iguales el revisado y aprobado.",
            "Juego de planos de la vivienda o edificación: planos de arquitectura: planta de distribución, cortes, fachadas y planta techo; plano de instalaciones sanitarias aguas blancas y aguas negras, (planta, detalles e isometría), planos drenaje, importante indicar una vez revisado y corregido por el servicio de ingeniería sanitaria se consignarán dos juegos iguales al revisado y aprobado.",
            "Memoria descriptiva arquitectónica que describa distribución de espacios, ventilación e iluminación de la edificación.",
            "Autorización de la descarga del drenaje del proyecto emitida por la autoridad competente.",
            "Consignar timbres fiscales por un valor de (0,5) U.T, al momento de retiro."
        ]
    },
    variables_sta: {
        titulo: "REQUISITOS PARA SOLICITAR DEL PROYECTO (VARIABLE SANITARIAS) DE SISTEMAS DE TRATAMIENTO DE AGUAS RESIDUALES REVISIÓN",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbres de 0,15 U.T dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con ganchos y separadores.",
            "Consignar los requisitos estipulados en el capítulo XI: del tratamiento requerido y del sistema para el tratamiento de las aguas residuales de origen domestico e industrial estipulados en las normas sanitarias para el proyecto, construcción, ampliación, reforma y mantenimiento de las instalaciones sanitarias para desarrollo urbanísticos, G.O Nº 4.103 de fecha 02/06/1989.",
            "Autorización de la descarga del drenaje del proyecto emitida por la autoridad competente.",
            "Consignar timbres fiscales por un valor de (5) U.T, al momento de retiro."
        ]
    },
    atmosfera: {
        titulo: "AUTORIZACIÓN SANITARIA DE LA CONTAMINACIÓN ATMOSFÉRICA",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
            "Copia de cedula de identidad del representante legal de la razón social.",
            "Copia del Rif de la empresa (Vigente).",
            "Copia del Registro mercantil de la empresa.",
            "Permiso vencido de año anterior (En caso de Renovación).",
            "Copia de la Certificación Urbanística expedida por la Alcaldía que corresponda (Vigente).",
            "Memoria Descriptiva: a) Medidas de control implantada para el (los) contaminantes generados, describiendo: I. Criterio de selección de equipos de control. II. Especificaciones y funcionamiento de equipos de control. III. Plan de mantenimiento de equipos de control. IV. Descripción de procedimientos y/o acciones coadyuvantes dentro de las medidas de control, diferentes al uso de equipos. b) Cantidades esperadas de emisiones de contaminantes a generar. c) Especificaciones sobre el medio(s) a utilizar para la descarga de emisiones atmosféricas.",
            "Caracterización de las emisiones, cuya fecha de realización no sea mayor a 6 meses.",
            "Previsiones de descarga de emisiones, conforme a los limites de calidad del aire establecidos en las leyes y normas regulatorias en la materia.",
            "Planos de situación y ubicación de las instalaciones donde se desarrolla la actividad generadora de emisiones contaminantes al aire, con respecto a comunidades circundantes.",
            "Planos de ubicación de maquinaria que integran el proceso generador de emisiones contaminantes del aire.",
            "Planos de ubicación de control.",
            "Información bibliográfica técnica y científica de fuentes reconocidas, sobre posibles efectos o molestias que los contaminantes involucrados en sus emisiones, puedan tener sobre la salud o bienestar de las personas.",
            "Para retirar, consignar (2) timbres fiscales de 1 U.T."
        ]
    },
    plaguicidas: {
        titulo: "REQUISITOS DE CONFORMIDAD SANITARIA DE OCUPACIÓN PARA APLICADORAS, EXPENDIO Y DEPÓSITOS DE PLAGUICIDAS",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
            "Copia de la cedula de identidad del representante legal de la razón social.",
            "Copia del Rif de la empresa (Vigente).",
            "Certificado de Fumigación por empresa acreditada. (excepto aplicadoras).",
            "Copia del Registro mercantil de la empresa.",
            "Memoria Descriptiva (Datos generales de la empresa, dirección de oficina y deposito, N° trabajadores por género y por área, horario, objeto de la empresa, descripción de áreas con que cuenta, proceso o actividad, medidas de prevención y seguridad para el personal, productos y equipos).",
            "Conformidad Sanitaria de Ocupación (CSO) vencido de año anterior (En caso de Renovación).",
            "Copia de la Certificación Urbanística expedida por la Alcaldía que corresponda (Vigente).",
            "El depósito deberá contar con las condiciones de ubicación establecidas.",
            "Consignar timbres fiscales por un valor de (2) U.T, al momento del retiro."
        ]
    },
    dotacion: {
        titulo: "REQUISITOS PARA SOLICITUD DOTACIÓN SANITARIA",
        lista: [
            "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
            "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
            "Copia de la cedula de identidad del representante legal de la razón social.",
            "Copia del documento de propiedad del terreno.",
            "Teléfono, dirección, correo electrónico.",
            "Copia de plano de planta (parcelamiento con cuadro de áreas, planta de la edificación acotado y a escala a 1:50 o a escala legible).",
            "Memoria descriptiva de arquitectura con cuadro de áreas (áreas verdes, áreas recreacionales, entre otros).",
            "Copia de los cálculos.",
            "Consignar el impuesto en timbres fiscales según sea el caso, 10 U.T, por actividad para uso doméstico y comercial 20 U.T para uso industrial, al momento de retirar la dotación sanitaria."
        ]
    }
};

// Función principal para generar el PDF del CSO
function generarCSOPDF(datosFormulario, nombrePlantilla) {
    // Determinar el tipo de CSO basado en el nombre de la plantilla seleccionada
    const tipoCSO = determinarTipoCSO(nombrePlantilla);
    const data = recaudosPorTipo[tipoCSO];
    
    if (!data) {
        console.error("Tipo de CSO no encontrado:", tipoCSO);
        alert(`Error: No se encontraron los requisitos para "${nombrePlantilla}". Se generará con el formato por defecto.`);
        // Usar formato por defecto (granjas)
        const dataDefault = recaudosPorTipo.granjas;
        generarPDFConDatos(datosFormulario, dataDefault, nombrePlantilla);
        return;
    }
    
    generarPDFConDatos(datosFormulario, data, nombrePlantilla);
}

// Función que genera el PDF con los datos específicos
function generarPDFConDatos(datosFormulario, data, nombrePlantillaOriginal) {
    // Crear el contenido HTML del documento
    const contenidoHTML = generarHTMLDocumento(datosFormulario, data);
    
    // Abrir ventana de impresión para guardar como PDF
    const ventanaPDF = window.open('', '_blank');
    if (!ventanaPDF) {
        alert("Por favor, permita las ventanas emergentes para generar el PDF");
        return;
    }
    
    ventanaPDF.document.write(contenidoHTML);
    ventanaPDF.document.close();
    
    // Esperar a que cargue el contenido y abrir diálogo de impresión
    ventanaPDF.onload = function() {
        setTimeout(function() {
            ventanaPDF.print();
        }, 500);
    };
}

// Función para generar el HTML completo del documento
function generarHTMLDocumento(datos, data) {
    const fecha = new Date().toLocaleDateString('es-ES');
    const solicitudTipo = datos.solicitud || "SOLICITUD";
    const representante = datos.representante || "_________________________";
    const cedula = datos.cedula || "_________________________";
    const empresa = datos.empresa || "_________________________";
    const rif = datos.rif || "_________________________";
    const direccion = datos.direccion || "_________________________";
    
    // Generar filas de la tabla de recaudos
    let filasTabla = '';
    data.lista.forEach(item => {
        filasTabla += `
            <tr>
                <td style="padding: 5px 6px; border: 1px solid #111; font-size: 7.8pt;">${escapeHtml(item)}</td>
                <td style="padding: 5px 6px; border: 1px solid #111; text-align: center; width: 35px;">☐</td>
                <td style="padding: 5px 6px; border: 1px solid #111; text-align: center; width: 35px;">☐</td>
            </tr>
        `;
    });
    
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSO Oficio - ${escapeHtml(data.titulo)}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background-color: #dbdfe3;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px 20px;
            font-family: 'Calibri', 'Segoe UI', 'Times New Roman', serif;
            font-size: 8pt;
        }
        
        .oficio-paper {
            max-width: 1000px;
            width: 100%;
            background: white;
            box-shadow: 0 12px 35px rgba(0,0,0,0.2);
            padding: 1.2cm 1.5cm;
            border-radius: 2px;
            margin: 0 auto;
            font-size: 8pt;
        }
        
        @media print {
            body { padding: 0; margin: 0; background: white; }
            .oficio-paper { max-width: 100%; padding: 0.8cm 1.2cm; box-shadow: none; }
            .recaudos-table, .signature-section { break-inside: avoid; }
        }
        
        .titulo-principal {
            text-align: center;
            font-weight: 700;
            font-size: 11pt;
            text-decoration: underline;
            margin-bottom: 4px;
        }
        .subtitulo {
            text-align: center;
            font-size: 7.5pt;
            margin-top: 2px;
            margin-bottom: 18px;
            color: #2c3e4e;
        }
        .fecha-ciudad { text-align: right; margin-bottom: 16px; }
        .destinatario { margin-bottom: 14px; line-height: 1.35; }
        
        .datos-empresa-horizontal {
            margin: 8px 0 12px 0;
            line-height: 1.3;
        }
        .linea-dato { margin: 3px 0; white-space: normal; word-wrap: break-word; }
        .linea-combinada { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px; margin: 4px 0; }
        .campo-horizontal { display: inline-flex; align-items: baseline; flex-wrap: wrap; gap: 4px; }
        .etiqueta { font-weight: normal; white-space: nowrap; }
        .linea-punteada { border-bottom: 1px dotted #000; display: inline-block; min-width: 80px; }
        .campo-medio { min-width: 150px; }
        .campo-rif { min-width: 80px; }
        .campo-ci { min-width: 70px; }
        .campo-ubicacion { min-width: 200px; flex: 1; }
        .saludo-linea { display: flex; flex-wrap: wrap; align-items: baseline; gap: 5px; margin: 3px 0; }
        
        .recaudos-table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0 12px;
        }
        .recaudos-table th, .recaudos-table td {
            border: 1px solid #111;
            padding: 5px 6px;
            vertical-align: top;
        }
        .recaudos-table th {
            background-color: #f0f2f5;
            font-weight: 700;
            text-align: center;
        }
        .recaudos-table td:first-child {
            width: auto;
            text-align: left;
            font-size: 7.8pt;
        }
        
        .declaracion-jurada {
            margin: 8px 0 6px;
            padding: 6px 8px;
            background-color: #f9f6ef;
            border-left: 3px solid #8b5a2b;
            text-align: justify;
        }
        .nota-adicional {
            margin: 6px 0 4px;
            padding: 5px 8px;
            background-color: #f0f7ff;
            border-left: 3px solid #2c6e9e;
            text-align: justify;
        }
        .observaciones-firma { margin: 30px 0 0px; display: flex; justify-content: center; }
        .firma-centrada { display: flex; justify-content: center; width: 100%; }
        .recuadro-firma { width: 65%; text-align: center; }
        .firma-linea { font-size: 9pt; border-bottom: 1px solid #000; display: inline-block; width: 80%; margin-bottom: 3px; }
        .firma-texto-pequeno { font-size: 7.5pt; color: #2d3e50; }
        .signature-section { display: flex; flex-wrap: wrap; justify-content: space-between; margin: 10px 0 10px; gap: 12px; }
        .sign-box { flex: 1; border: 1px solid #aaa; padding: 5px 4px; background: #fefefe; }
        .sign-box p { margin: 2px 0; }
        .sign-box .label { font-weight: bold; border-bottom: 1px solid #ccc; display: inline-block; margin-bottom: 3px; }
        .small-line { border-bottom: 1px solid #000; margin: 3px 0 4px 0; width: 100%; }
        .pie-simple { margin-top: 16px; }
        hr.dashed { border: none; border-top: 1px dashed #aaa; margin: 8px 0 4px; }
        .text-center { text-align: center; font-size: 7.5pt; color: #4a627a; }
        
        @media screen and (max-width: 800px) {
            .oficio-paper { padding: 0.8rem; }
            .signature-section { flex-direction: column; }
        }
    </style>
</head>
<body>
    <div class="oficio-paper">
        <div class="titulo-principal">${escapeHtml(data.titulo)}</div>
        <div class="subtitulo">(Solicitud y Verificación de Recaudos - Formato CSO)</div>
        
        <div class="fecha-ciudad">Barquisimeto, ${fecha}</div>
        <div class="destinatario">
            Dra. Alexandra González<br>
            Directora de Salud Ambiental del Estado Lara<br>
            Su despacho.
        </div>
        
        <div class="datos-empresa-horizontal">
            <div class="saludo-linea">
                <span>Reciba un cordial saludo. La presente es para solicitar ante su despacho la</span>
                <span class="linea-punteada" style="min-width: 60px;">${escapeHtml(solicitudTipo)}</span>
                <span>de la Conformidad Sanitaria de Ocupación del establecimiento (CSO):</span>
            </div>
            <div class="linea-dato"><span class="linea-punteada" style="width:100%; display:inline-block;">${escapeHtml(empresa)}</span></div>
            <div class="linea-dato"><span class="etiqueta">Cuyo RIF:</span> <span class="linea-punteada campo-rif">${escapeHtml(rif)}</span></div>
            <div class="linea-combinada">
                <div class="campo-horizontal"><span class="etiqueta">y su representante legal:</span> <span class="linea-punteada campo-medio">${escapeHtml(representante)}</span></div>
                <div class="campo-horizontal"><span class="etiqueta">C.I.N°:</span> <span class="linea-punteada campo-ci">${escapeHtml(cedula)}</span></div>
            </div>
            <div class="linea-dato"><span class="etiqueta">Ubicado en:</span> <span class="linea-punteada campo-ubicacion">${escapeHtml(direccion)}</span></div>
        </div>
        
        <table class="recaudos-table">
            <thead>
                <tr><th>Recaudos (Documentos exigidos según el tipo de CSO - Texto original del Word)</th><th colspan="2">Verificado</th></tr>
                <tr><th style="background:#e9ecef;">Requisitos específicos (texto íntegro)</th><th style="width:35px;">Sí</th><th style="width:35px;">No</th></tr>
            </thead>
            <tbody>
                ${filasTabla}
            </tbody>
        </table>
        
        <div class="declaracion-jurada">
            <strong>DECLARO BAJO JURAMENTO</strong> la veracidad de la información suministrada y que los documentos entregados en esta solicitud de CSO, son copia fiel y exacta de los originales, de probarse lo contrario, asumo la responsabilidad civil, penal y administrativa que corresponda. No me ha sido solicitado ningún pago o colaboración adicional a los timbres fiscales.
        </div>
        <div class="nota-adicional">
            <strong>Nota:</strong> Los recaudos deben ser consignados por el representante legal, por una persona autorizada mediante poder notariado o, en su defecto, por un trabajador de la organización que presente los soportes que acrediten su vínculo laboral.
        </div>
        
        <div class="observaciones-firma">
            <div class="firma-centrada"><div class="recuadro-firma"><div class="firma-linea"></div><div class="firma-texto-pequeno">Firma y sello del solicitante / Representante legal</div></div></div>
        </div>
        
        <div class="signature-section">
            <div class="sign-box"><p class="label"><strong>Taquilla Única DSA</strong></p><p><strong>Recibido/Verificado Por:</strong></p><div class="small-line"></div><p>Nombre: _________________________________</p><div class="small-line"></div><p>Fecha: _________________________________</p><div class="small-line"></div><p>Sello: __________________________________</p></div>
            <div class="sign-box"><p class="label"><strong>Ingeniería Sanitaria</strong></p><p><strong>Recibido/Verificado Por:</strong></p><div class="small-line"></div><p>Nombre: _________________________________</p><div class="small-line"></div><p>Fecha: _________________________________</p><div class="small-line"></div><p>Sello: __________________________________</p></div>
            <div class="sign-box"><p class="label"><strong>Dirección</strong></p><p><strong>Autorizado Por:</strong></p><div class="small-line"></div><p>Nombre: _________________________________</p><div class="small-line"></div><p>Fecha: _________________________________</p><div class="small-line"></div><p>Sello: __________________________________</p></div>
        </div>
        <div class="pie-simple"><hr class="dashed"><div class="text-center">CSO - Conformidad Sanitaria de Ocupación | Formato oficial D.S.A. Lara</div></div>
    </div>
</body>
</html>`;
}

// Función para escapar caracteres HTML
function escapeHtml(text) {
    if (!text) return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Exponer la función globalmente
window.generarCSOPDF = generarCSOPDF;

console.log("✅ pdf-generator.js cargado correctamente");
console.log("📋 Tipos de CSO disponibles:", Object.keys(recaudosPorTipo));