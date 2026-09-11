// ==================== GENERADOR DE CSO EN PDF ====================
// Tamaño: Hoja Carta (21.59cm x 27.94cm) | Márgenes: 1.5cm
// DISEÑO IDÉNTICO AL HTML CON LAS MISMAS SECCIONES
// Dependencias necesarias en el HTML:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

// MAPEO DE NOMBRES DE PLANTILLA (del desplegable) a TIPOS DE CSO
const mapeoNombresPlantilla = {
  "Conformidad Sanitaria De Ocupación De Empresas, Colegios.docx": "Conformidad Sanitaria De Ocupación De Empresas, Colegios",
  "Conformidad Sanitaria De Perforación De Pozos.docx": "Conformidad Sanitaria De Perforación De Pozos",
  "Conformidad Sanitaria Para Variable Sanitarias De Sistemas De Tratamiento De Aguas Residuales Revisión.docx": "Conformidad Sanitaria Para Variable Sanitarias De Sistemas De Tratamiento De Aguas Residuales Revisión",
  "Conformidad Sanitaria De Contaminación Atmosférica.docx": "Conformidad Sanitaria De Contaminación Atmosférica",
  "Conformidad Sanitaria Para Camiones Cisterna.docx": "Conformidad Sanitaria Para Camiones Cisterna",
  "Conformidad Sanitaria De Ocupación Para Aplicadora Expendio Y Deposito Plaguicidas.docx": "Conformidad Sanitaria De Ocupación Para Aplicadora Expendio Y Deposito Plaguicidas",
  "Conformidad Sanitaria De Ocupación Para Granjas.docx": "Conformidad Sanitaria De Ocupación Para Granjas",
  "Conformidad Sanitaria De Ocupación Para Urbanismos Y Edificaciones.docx": "Conformidad Sanitaria De Ocupación Para Urbanismos Y Edificaciones",
  "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares Que Transporten Desechos Generados En Establecimientos De Salud Y Desechos Cárnicos.docx": "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares Que Transporten Desechos Generados En Establecimientos De Salud Y Desechos Cárnicos",
  "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares De Transporte Funerario.docx": "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares De Transporte Funerario",
  "Conformidad Sanitaria De Permiso Del Uso Del Agua Proveniente De Pozo Perforado.docx": "Conformidad Sanitaria De Permiso Del Uso Del Agua Proveniente De Pozo Perforado",
  "Conformidad Sanitaria De Permiso De Operación De Sistemas De Tratamiento De Aguas Residuales.docx": "Conformidad Sanitaria De Permiso De Operación De Sistemas De Tratamiento De Aguas Residuales",
  "Conformidad Sanitaria Para Revisión De Proyectos De Urbanismo Y Edificaciones.docx": "Conformidad Sanitaria Para Revisión De Proyectos De Urbanismo Y Edificaciones",
  "Conformidad Sanitaria De Ocupación Para Dotación.docx": "Conformidad Sanitaria De Ocupación Para Dotación",
  "Conformidad Sanitaria de Revisión De Proyectos (Variables Sanitarias) De Equipos De Incineración Para Desechos Generados En Establecimiento De Salud.docx": "Conformidad Sanitaria de Revisión De Proyectos (Variables Sanitarias) De Equipos De Incineración Para Desechos Generados En Establecimiento De Salud",
  "(DENUNCIAS) Requisitos Para Solicitud De Inspección Por Denuncias.docx": "(DENUNCIAS) Requisitos Para Solicitud De Inspección Por Denuncias",
  // NUEVOS: Salud Radiológica
  "Requisitos Salud Radiologica (Conformidad Sanitaria De Ambiente Radiologico).docx": "Conformidad Sanitaria De Ambiente Radiologico",
  "Requisitos Salud Radiologica (Conformidad Sanitaria De Funcionamiento Radiologico).docx": "Conformidad Sanitaria De Funcionamiento Radiologico",
  "Requisitos Salud Radiologica (Rimfri).docx": "Requisitos Para La Solicitud De RIMFRI",
  // Sin extensión (fallback)
  "Conformidad Sanitaria De Ocupación De Empresas, Colegios": "Conformidad Sanitaria De Ocupación De Empresas, Colegios",
  "Conformidad Sanitaria De Perforación De Pozos": "Conformidad Sanitaria De Perforación De Pozos",
  "Conformidad Sanitaria Para Variable Sanitarias De Sistemas De Tratamiento De Aguas Residuales Revisión": "Conformidad Sanitaria Para Variable Sanitarias De Sistemas De Tratamiento De Aguas Residuales Revisión",
  "Conformidad Sanitaria De Contaminación Atmosférica": "Conformidad Sanitaria De Contaminación Atmosférica",
  "Conformidad Sanitaria Para Camiones Cisterna": "Conformidad Sanitaria Para Camiones Cisterna",
  "Conformidad Sanitaria De Ocupación Para Aplicadora Expendio Y Deposito Plaguicidas": "Conformidad Sanitaria De Ocupación Para Aplicadora Expendio Y Deposito Plaguicidas",
  "Conformidad Sanitaria De Ocupación Para Granjas": "Conformidad Sanitaria De Ocupación Para Granjas",
  "Conformidad Sanitaria De Ocupación Para Urbanismos Y Edificaciones": "Conformidad Sanitaria De Ocupación Para Urbanismos Y Edificaciones",
  "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares Que Transporten Desechos Generados En Establecimientos De Salud Y Desechos Cárnicos": "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares Que Transporten Desechos Generados En Establecimientos De Salud Y Desechos Cárnicos",
  "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares De Transporte Funerario": "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares De Transporte Funerario",
  "Conformidad Sanitaria De Permiso Del Uso Del Agua Proveniente De Pozo Perforado": "Conformidad Sanitaria De Permiso Del Uso Del Agua Proveniente De Pozo Perforado",
  "Conformidad Sanitaria De Permiso De Operación De Sistemas De Tratamiento De Aguas Residuales": "Conformidad Sanitaria De Permiso De Operación De Sistemas De Tratamiento De Aguas Residuales",
  "Conformidad Sanitaria Para Revisión De Proyectos De Urbanismo Y Edificaciones": "Conformidad Sanitaria Para Revisión De Proyectos De Urbanismo Y Edificaciones",
  "Conformidad Sanitaria De Ocupación Para Dotación": "Conformidad Sanitaria De Ocupación Para Dotación",
  "Conformidad Sanitaria de Revisión De Proyectos (Variables Sanitarias) De Equipos De Incineración Para Desechos Generados En Establecimiento De Salud": "Conformidad Sanitaria de Revisión De Proyectos (Variables Sanitarias) De Equipos De Incineración Para Desechos Generados En Establecimiento De Salud",
  "(DENUNCIAS) Requisitos Para Solicitud De Inspección Por Denuncias": "(DENUNCIAS) Requisitos Para Solicitud De Inspección Por Denuncias",
};

function determinarTipoCSO(nombrePlantilla) {
  if (!nombrePlantilla) return "Conformidad Sanitaria De Ocupación Para Granjas";
  const nombreOriginal = nombrePlantilla;
  const nombreUpper = nombrePlantilla.toUpperCase();
  
  // Primero buscar coincidencia exacta en el mapeo
  for (const [clave, valor] of Object.entries(mapeoNombresPlantilla)) {
    if (nombreOriginal === clave) return valor;
  }
  
  // Búsqueda parcial
  for (const [clave, valor] of Object.entries(mapeoNombresPlantilla)) {
    if (clave.length > 5 && nombreUpper.includes(clave.toUpperCase())) return valor;
  }
  
  // Detección específica para Salud Radiológica
  if (nombreUpper.includes("AMBIENTE RADIOLOGICO") || nombreUpper.includes("AMBIENTE RADIOLÓGICO")) {
    return "Conformidad Sanitaria De Ambiente Radiologico";
  }
  if (nombreUpper.includes("FUNCIONAMIENTO RADIOLOGICO") || nombreUpper.includes("FUNCIONAMIENTO RADIOLÓGICO")) {
    return "Conformidad Sanitaria De Funcionamiento Radiologico";
  }
  if (nombreUpper.includes("RIMFRI")) {
    return "Requisitos Para La Solicitud De RIMFRI";
  }
  
  // Detecciones existentes
  if (nombreUpper.includes("GRANJA")) return "Conformidad Sanitaria De Ocupación Para Granjas";
  if (nombreUpper.includes("VEHICULO") || nombreUpper.includes("TRANSPORTE")) {
    if (nombreUpper.includes("FUNERARIO")) return "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares De Transporte Funerario";
    return "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares Que Transporten Desechos Generados En Establecimientos De Salud Y Desechos Cárnicos";
  }
  if (nombreUpper.includes("URBANISMO") || nombreUpper.includes("EDIFICACION")) return "Conformidad Sanitaria De Ocupación Para Urbanismos Y Edificaciones";
  if (nombreUpper.includes("AGUA") || nombreUpper.includes("RESIDUAL")) return "Conformidad Sanitaria De Permiso De Operación De Sistemas De Tratamiento De Aguas Residuales";
  if (nombreUpper.includes("POZO") && nombreUpper.includes("USO")) return "Conformidad Sanitaria De Permiso Del Uso Del Agua Proveniente De Pozo Perforado";
  if (nombreUpper.includes("PERFORACIÓN") || nombreUpper.includes("PERFORACION")) return "Conformidad Sanitaria De Perforación De Pozos";
  if (nombreUpper.includes("CISTERNA")) return "Conformidad Sanitaria Para Camiones Cisterna";
  if (nombreUpper.includes("REVISION") || nombreUpper.includes("REVISIÓN")) return "Conformidad Sanitaria Para Revisión De Proyectos De Urbanismo Y Edificaciones";
  if (nombreUpper.includes("VARIABLE")) return "Conformidad Sanitaria Para Variable Sanitarias De Sistemas De Tratamiento De Aguas Residuales Revisión";
  if (nombreUpper.includes("ATMOSFERICA") || nombreUpper.includes("ATMOSFÉRICA")) return "Conformidad Sanitaria De Contaminación Atmosférica";
  if (nombreUpper.includes("PLAGUICIDA")) return "Conformidad Sanitaria De Ocupación Para Aplicadora Expendio Y Deposito Plaguicidas";
  if (nombreUpper.includes("DOTACION") || nombreUpper.includes("DOTACIÓN")) return "Conformidad Sanitaria De Ocupación Para Dotación";
  if (nombreUpper.includes("DENUNCIA") || nombreUpper.includes("INSPECCIÓN")) return "(DENUNCIAS) Requisitos Para Solicitud De Inspección Por Denuncias";
  if (nombreUpper.includes("EMPRESAS") || nombreUpper.includes("COLEGIOS")) return "Conformidad Sanitaria De Ocupación De Empresas, Colegios";
  if (nombreUpper.includes("INCINERACIÓN") || nombreUpper.includes("INCINERACION")) return "Conformidad Sanitaria de Revisión De Proyectos (Variables Sanitarias) De Equipos De Incineración Para Desechos Generados En Establecimiento De Salud";
  
  return "Conformidad Sanitaria De Ocupación Para Granjas";
}

// ==================== RECAUDOS POR TIPO DE CSO ====================
const recaudosPorTipo = {
  "Conformidad Sanitaria De Ocupación Para Granjas": {
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
      "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro.",
    ],
  },
  "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares Que Transporten Desechos Generados En Establecimientos De Salud Y Desechos Cárnicos": {
    titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE OCUPACIÓN PARA UNIDADES VEHICULARES QUE TRANSPORTEN DESECHOS GENERADOS EN ESTABLECIMIENTOS DE SALUD Y DESECHOS CÁRNICOS",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Inscripción de la empresa propietaria de la unidad vehicular, en el registro de actividades capaces de degradar el ambiente (RACDA) como empresa manejadora de desechos peligrosos en las actividades de recolección y transporte terrestre en todo el territorio nacional.",
      "Título o certificado de propiedad de la unidad vehicular autorizada para tal transporte.",
      "Memoria descriptiva que contenga: descripción de la unidad vehicular referida a las especificaciones indicadas en el DECRETO Nº 2.218 del 23/04/92 publicado en Gaceta oficial Nª 4.418 de fecha 27/04/92., fotos de la unidad vehicular que abarque rotulados, placas, depósito de lixiviados, depósito de equipos de protección personal, termostato., describir el proceso de limpieza y desinfección del vehículo, donde lo realiza y productos utilizados, hoja de seguridad del transporte, hoja de seguimiento desde la recolección hasta la disposición final.",
      "Copia del convenios y/o contratos para la disposición final de los desechos transportados.",
      "Anexar el listado de las empresas a las cuales suministra el servicio de transporte.",
      "Copia del permiso anterior en caso de ser Renovación.",
      "Para retirar, consignar (2) timbres fiscales de 1 U.T.",
      "NOTA: La unidad vehicular deberá ser presentada previa planificación con la autoridad sanitaria de esta dirección para realizar la correspondiente inspección.",
    ],
  },
  "Conformidad Sanitaria De Ocupación Para Unidades Vehiculares De Transporte Funerario": {
    titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE OCUPACIÓN PARA UNIDADES VEHICULARES DE TRANSPORTE FUNERARIO",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Cedula de Identidad del propietario.",
      "Título de propiedad del vehículo o traspaso.",
      "Cedula de Identidad y licencia del chofer del vehículo.",
      "RIF de la empresa.",
      "Registro de la Empresa.",
      "Cedula de Identidad del Representante Legal de la empresa.",
      "Constancia de Fumigación.",
      "Conformidad Sanitaria de Ocupación de la Funeraria Adscrita.",
      "Fotos del vehículo.",
      "Para retirar, consignar (2) timbres fiscales de 1 U.T.",
      "NOTA: La unidad vehicular deberá ser presentada previa planificación con la autoridad sanitaria de esta dirección para realizar la correspondiente inspección.",
    ],
  },
  "Conformidad Sanitaria De Ocupación Para Urbanismos Y Edificaciones": {
    titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE OCUPACIÓN PARA URBANISMOS Y EDIFICACIONES",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbres de 0,15 U.T dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con ganchos y separadores.",
      "Memoria descriptiva de la edificación o urbanismo.",
      "Copia de planos: de planta de la edificación acotado y a escala a 1:50 (ó a escala legible).",
      "Consignar copia de variables urbanas fundamentales expedidas por la alcaldía correspondiente.",
      "Presentar copia de garantía de servicios: acueducto y cloacas, expedido por HIDROLARA.",
      "Copia de constancia de bomberos municipales.",
      "Copia del documento de propiedad del terreno.",
      "Fotografías que describan el proceso constructivo y la obra terminada en orden secuencial.",
      "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro de la conformidad.",
    ],
  },
  "Conformidad Sanitaria De Permiso De Operación De Sistemas De Tratamiento De Aguas Residuales": {
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
      "Consignar timbres fiscales por un valor de (0,5) U.T, al momento de retiro.",
    ],
  },
  "Conformidad Sanitaria De Permiso Del Uso Del Agua Proveniente De Pozo Perforado": {
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
      "Consignar los análisis bacteriológicos y físicos químicos correspondientes a muestras captadas en el pozo. Estos análisis deberán ser practicados por laboratorios de análisis de agua reconocidos y autorizados (artículo 63).",
      "Copia de la autorización del Ministerio del poder popular para el Ambiente para la perforación del pozo y para el uso explotación del recurso hídrico.",
      "Copia de documento de propietario o contrato de arrendamiento de la edificación en la cual funciona la empresa o la cooperativa.",
      "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro.",
    ],
  },
  "Conformidad Sanitaria Para Camiones Cisterna": {
    titulo: "REQUISITOS PARA SOLICITAR POR PRIMERA VEZ AUTORIZACIÓN SANITARIA PARA CAMIONES CISTERNAS",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbres de 0,15 U.T dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con ganchos y separadores.",
      "Copia del título de propiedad del camión cisterna. Si el propietario posee documento notariado deberá anexar la copia del mismo.",
      "Si la unidad en su título de propiedad tiene una tipología diferente a: cisterna y/o tanque, deberá anexarse fotocopias de constancia emitida por el INTTT dando el cambio de tipología.",
      "Copia de cédula de identidad del propietario y conductor.",
      "Copia de certificado de salud del conductor y del propietario si este labora en el transporte del agua.",
      "Copia de la autorización sanitaria anterior en caso de ser Renovación.",
      "Consignar timbres fiscales por un valor de (2) U.T, al momento de retiro de la conformidad.",
      "NOTA: La unidad vehicular deberá ser presentada previa planificación con la autoridad sanitaria de esta dirección para realizar la correspondiente inspección.",
    ],
  },
  "Conformidad Sanitaria Para Revisión De Proyectos De Urbanismo Y Edificaciones": {
    titulo: "REQUISITOS PARA REVISIÓN DE PROYECTOS DE URBANISMO Y EDIFICACIONES (VARIABLES SANITARIAS)",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Copia de documento de propiedad de terreno.",
      "Variables urbanas fundamentales del proyecto.",
      "Acreditación técnica del estudio de impacto ambiental.",
      "Solvencia del profesional responsable del proyecto.",
      "Garantía de servicio de HIDROLARA.",
      "Juego de planos de los servicios del urbanismo: acueducto (planta, detalle de nodos y toma domiciliaria, detalles de hidrante), cloacas (planta y perfiles cloacales), drenaje (planta y en caso de tener sub-drenaje anexar plano de perfiles). Importante indicar una vez revisado y corregido por el servicio de ingeniería sanitaria se consignarán dos juegos iguales al revisado y aprobado.",
      "Juego de planos de la vivienda o edificación: planos de arquitectura: planta de distribución, cortes, fachadas y planta techo; plano de instalaciones sanitarias aguas blancas y aguas negras, (planta, detalles e isometría), planos drenaje. Importante indicar una vez revisado y corregido por el servicio de ingeniería sanitaria se consignarán dos juegos iguales al revisado y aprobado.",
      "Memoria descriptiva arquitectónica que describa distribución de espacios, ventilación e iluminación de la edificación.",
      "Autorización de la descarga del drenaje del proyecto emitida por la autoridad competente.",
      "Consignar timbres fiscales por un valor de (0,5) U.T, al momento de retiro.",
    ],
  },
  "Conformidad Sanitaria Para Variable Sanitarias De Sistemas De Tratamiento De Aguas Residuales Revisión": {
    titulo: "REQUISITOS PARA SOLICITAR DEL PROYECTO (VARIABLE SANITARIAS) DE SISTEMAS DE TRATAMIENTO DE AGUAS RESIDUALES REVISIÓN",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbres de 0,15 U.T dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con ganchos y separadores.",
      "Consignar los requisitos estipulados en el capítulo XI: del tratamiento requerido y del sistema para el tratamiento de las aguas residuales de origen doméstico e industrial estipulados en las normas sanitarias para el proyecto, construcción, ampliación, reforma y mantenimiento de las instalaciones sanitarias para desarrollo urbanísticos, G.O Nº 4.103 de fecha 02/06/1989.",
      "Autorización de la descarga del drenaje del proyecto emitida por la autoridad competente.",
      "Consignar timbres fiscales por un valor de (5) U.T, al momento de retiro.",
    ],
  },
  "Conformidad Sanitaria De Contaminación Atmosférica": {
    titulo: "AUTORIZACIÓN SANITARIA DE LA CONTAMINACIÓN ATMOSFÉRICA",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Copia de cédula de identidad del representante legal de la razón social.",
      "Copia del Rif de la empresa (Vigente).",
      "Copia del Registro mercantil de la empresa.",
      "Permiso vencido de año anterior (En caso de Renovación).",
      "Copia de la Certificación Urbanística expedida por la Alcaldía que corresponda (Vigente).",
      "Memoria Descriptiva: a. Medidas de control implantada para el (los) contaminantes generados, describiendo: I. Criterio de selección de equipos de control. II. Especificaciones y funcionamiento de equipos de control. III. Plan de mantenimiento de equipos de control. IV. Descripción de procedimientos y/o acciones coadyuvantes dentro de las medidas de control, diferentes al uso de equipos. b. Cantidades esperadas de emisiones de contaminantes a generar. c. Especificaciones sobre el medio(s) a utilizar para la descarga de emisiones atmosféricas.",
      "Caracterización de las emisiones, cuya fecha de realización no sea mayor a 6 meses.",
      "Previsiones de descarga de emisiones, conforme a los límites de calidad del aire establecidos en las leyes y normas regulatorias en la materia.",
      "Planos de situación y ubicación de las instalaciones donde se desarrolla la actividad generadora de emisiones contaminantes al aire, con respecto a comunidades circundantes.",
      "Planos de ubicación de maquinaria que integran el proceso generador de emisiones contaminantes del aire.",
      "Planos de ubicación de control.",
      "Información bibliográfica técnica y científica de fuentes reconocidas, sobre posibles efectos o molestias que los contaminantes involucrados en sus emisiones, puedan tener sobre la salud o bienestar de las personas.",
      "Para retirar, consignar (2) timbres fiscales de 1 U.T.",
    ],
  },
  "Conformidad Sanitaria De Ocupación Para Aplicadora Expendio Y Deposito Plaguicidas": {
    titulo: "REQUISITOS DE CONFORMIDAD SANITARIA DE OCUPACIÓN PARA APLICADORAS, EXPENDIO Y DEPÓSITOS DE PLAGUICIDAS",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Copia de la cédula de identidad del representante legal de la razón social.",
      "Copia del Rif de la empresa (Vigente).",
      "Certificado de Fumigación por empresa acreditada (excepto aplicadoras).",
      "Copia del Registro mercantil de la empresa.",
      "Memoria Descriptiva (Datos generales de la empresa, dirección de oficina y depósito, N° trabajadores por género y por área, horario, objeto de la empresa, descripción de áreas con que cuenta, proceso o actividad, medidas de prevención y seguridad para el personal, productos y equipos).",
      "Conformidad Sanitaria de Ocupación (CSO) vencido de año anterior (En caso de Renovación).",
      "Copia de la Certificación Urbanística expedida por la Alcaldía que corresponda (Vigente).",
      "El depósito deberá contar con las condiciones de ubicación establecidas.",
      "Consignar timbres fiscales por un valor de (2) U.T, al momento del retiro.",
    ],
  },
  "Conformidad Sanitaria De Ocupación Para Dotación": {
    titulo: "REQUISITOS PARA SOLICITUD DOTACIÓN SANITARIA",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Copia de la cédula de identidad del representante legal de la razón social.",
      "Copia del documento de propiedad del terreno.",
      "Teléfono, dirección, correo electrónico.",
      "Copia de plano de planta (parcelamiento con cuadro de áreas, planta de la edificación acotado y a escala a 1:50 o a escala legible).",
      "Memoria descriptiva de arquitectura con cuadro de áreas (áreas verdes, áreas recreacionales, entre otros).",
      "Copia de los cálculos.",
      "Consignar el impuesto en timbres fiscales según sea el caso, 10 U.T, por actividad para uso doméstico y comercial 20 U.T para uso industrial, al momento de retirar la dotación sanitaria.",
      "NOTA: Cálculo basado en las normas sanitarias para proyecto, construcción, reparación, reforma y mantenimiento de edificaciones, G.O Nº 4.044 del 08/09/88.",
    ],
  },
  "Conformidad Sanitaria De Ocupación De Empresas, Colegios": {
    titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE OCUPACIÓN PARA EMPRESAS Y COLEGIOS",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Copia de cedula de identidad del representante legal de la razón social.",
      "Copia del Rif de la empresa (Vigente).",
      "Certificado de Fumigación por empresa acreditada.",
      "Copia del Registro mercantil de la empresa.",
      "Memoria Descriptiva (Datos generales de la empresa, dirección, N° trabajadores por género y por área, horario, objeto de la empresa, descripción de áreas con que cuenta, proceso o actividad, fuente de abastecimiento de agua).",
      "Permiso vencido de año anterior (En caso de Renovación).",
      "Copia de la Certificación Urbanística expedida por la Alcaldía que corresponda (Vigente).",
      "Para retirar, consignar (2) timbres fiscales de 1 U.T.",
    ],
  },
  "Conformidad Sanitaria De Perforación De Pozos": {
    titulo: "REQUISITOS DE CONFORMIDAD SANITARIA DE PERFORACIÓN DE POZOS, REALIZACIÓN DE SONDEOS O DE PERFORACIONES DE PRUEBA",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Memoria descriptiva que contenga: identificación previa de la ubicación del terreno donde se proyecta perforar el pozo: entidad federal, municipio, sector o vía de acceso, uso o destino que se pretende dar a las aguas.",
      "Copia de la autorización del Ministerio del poder popular para el Ambiente para la perforación del pozo.",
      "Constancia expedida por la empresa responsable del abastecimiento público de agua potable de que no se encuentran en condiciones de prestar dicho servicio o aval del consejo comunal.",
      "Plano topográfico de situación, a escala conveniente, de los terrenos donde se ejecutará la perforación, donde se marcará el sitio escogido para la misma, señalándolo con toda precisión y exactitud en la hoja para plano de ubicación de un pozo.",
      "Copia de documento de propietario o contrato de arrendamiento de la edificación en la cual funciona la empresa o cooperativa.",
      "Consignar timbres fiscales por un valor de (3) U.T, al momento del retiro.",
      "NOTA: Los requisitos se encuentran en las Normas Sanitarias para la ubicación, construcción, protección, operación y mantenimiento de pozos perforados destinados al abastecimiento de agua potable publicadas en Gaceta Oficial Nº 36.298 de fecha 24/09/97.",
    ],
  },
  "Conformidad Sanitaria de Revisión De Proyectos (Variables Sanitarias) De Equipos De Incineración Para Desechos Generados En Establecimiento De Salud": {
    titulo: "REQUISITOS PARA REVISIÓN DE PROYECTOS (VARIABLES SANITARIAS) DE EQUIPOS DE INCINERACIÓN PARA DESECHOS GENERADOS EN ESTABLECIMIENTOS DE SALUD",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Tres copias del proyecto de incineración compuesto de los siguientes elementos: justificación de que los equipos son de uso única y exclusivamente para el tratamiento de los desechos infectocontagiosos por incineración provenientes de establecimientos de salud, memoria descriptiva detallada del proceso de incineración, duración y descripción funcional de cada ciclo del tratamiento, incluyendo condiciones y especificaciones técnicas del incinerador y de las instalaciones. De igual forma de los materiales y demás equipos conexos para el manejo de los desechos infectocontagiosos (embalajes, recipientes, carros transportador, cuartos de almacenamiento, entre otros), catálogos del equipo incinerador, cavas de refrigeración o de enfriamiento, recipientes, carros transportador, control de contaminantes atmosféricos y demás accesorios que lo conforman, planos isométricos del proceso, planos de planta y de ubicación del lugar donde se instalará el incinerador.",
      "Deberá anexar al proyecto igualmente los manuales de operación y de mantenimiento del incinerador, manual de normas y procedimientos para el manejo de desechos a ser tratados por incineración.",
      "Registro de actividades capaces de degradar el ambiente (RACDA)",
      "Anexar acreditación técnica del estudio de impacto ambiental del proyecto.",
      "Programas de capacitación del personal que operará el equipo incinerador.",
      "Riesgos para la salud y el ambiente como consecuencia del impacto producido por las emisiones al medio ambiente y en los casos de fallas durante los procesos de combustión de los equipos de incineración.",
      "Medidas de mitigación necesarias en caso de acciones de emergencia o desastres en los sitios de tratamiento de desechos.",
      "Combustible que necesita en cada ciclo y tipos de insumos a usar (establecer los volúmenes y por cada ciclo).",
      "Determinación de la efectividad, eficacia y de la eficiencia de los métodos de tratamiento por incineración.",
      "Frecuencia de mantenimiento y de calibración de los equipos de incineración.",
      "Garantía de la empresa fabricante del incinerador contra imperfecciones en el diseño, reparaciones, mantenimiento, controles de contaminantes atmosférica y mano de obra.",
      "Documento de propiedad del terreno.",
      "Solvencia del profesional a cargo del proyecto.",
      "Consignar timbres fiscales por un valor de (2) U.T, al momento del retiro.",
    ],
  },
  "(DENUNCIAS) Requisitos Para Solicitud De Inspección Por Denuncias": {
    titulo: "REQUISITOS PARA SOLICITUD DE INSPECCIÓN POR DENUNCIAS",
    lista: [
      "Realizar la solicitud en papel simple con (1) timbre de 0,15 U.T. dirigida a la Dra. Alexandra González. Directora de Salud Ambiental.",
      "Consignar todos los documentos debidamente foliados en carpeta marrón tipo oficio con gancho, separadores.",
      "Copia de cédula de identidad del denunciante.",
      "Descripción detallada de los hechos denunciados, incluyendo dirección exacta, horarios y cualquier información relevante.",
      "Fotografías, videos o cualquier evidencia que soporte la denuncia (si aplica).",
      "Nombre y dirección del presunto infractor (si se conoce).",
      "Relación de posibles testigos con sus datos de contacto (si aplica).",
      "Cualquier documento adicional que respalde la denuncia.",
    ],
  },

  // ==================== NUEVOS: SALUD RADIOLÓGICA ====================
  "Conformidad Sanitaria De Ambiente Radiologico": {
    titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE AMBIENTE RADIOLÓGICO",
    // Usamos el mismo título para la tabla de recaudos
    tituloTabla: "REQUISITOS PARA CONFORMIDAD SANITARIA DE AMBIENTE RADIOLÓGICO",
    lista: [
      "Ordenar 2 carpetas con separadores debidamente identificados.",
      "Presentar la solicitud por escrito timbre fiscal de 0,02 u.t. Dirigida a la Dra. Alexandra González directora de la dirección de salud ambiental del estado Lara, con copia a la coordinación de salud radiológica.",
      "Copia de la cédula de identidad del representante legal.",
      "Copia del registro mercantil con sus modificaciones si las hubiera o copia de la gaceta oficial de la designación correspondiente.",
      "Copia de RIF.",
      "Conformidad sanitaria de ocupación otorgada por ingeniería sanitaria. Gaceta oficial nº 4044 extraordinaria del 08-09-88.",
      "Presentación de la MEMORIA DESCRIPTIVA según capítulo 7 resolución nº 401 de fecha 24 de noviembre de 2006:",
      "  a) Datos del responsable del ambiente, del jefe del servicio y el oficial de seguridad radiológica.",
      "  b) Plano de ubicación del servicio a escala adecuada (1:50), donde se definan los locales vecinos y sus funciones, así como la ubicación de las fuentes, equipos y demás accesorios.",
      "  c) Ambientes existentes e identificación de las áreas.",
      "  d) Materiales de construcción y espesores de paredes, pisos, techos, puertas y cabinas.",
      "  e) Cálculo de blindaje.",
      "  f) Informe de levantamiento radiométricos de las barreras de protección.",
      "  g) Sistemas de seguridad radiológica y física existentes en la instalación: i. Extintor de incendios, ii. Detector de humo, iii. Alarmas, panta de luz eléctrica.",
      "  h) Sistemas de ventilación y extracción: i. Aire acondicionado u otros, ii. Especificaciones técnicas del extractor y velocidad de recambio por unidad de tiempo.",
      "Timbre fiscal por un valor de tres (3) unidades tributarias."
    ],
  },
  "Conformidad Sanitaria De Funcionamiento Radiologico": {
    titulo: "REQUISITOS PARA CONFORMIDAD SANITARIA DE FUNCIONAMIENTO RADIOLÓGICO",
    // Usamos el mismo título para la tabla de recaudos
    tituloTabla: "REQUISITOS PARA CONFORMIDAD SANITARIA DE FUNCIONAMIENTO RADIOLÓGICO",
    lista: [
      "Ordenar 2 carpetas con separadores debidamente identificados. Ambas carpetas deben contener:",
      "Presentar la solicitud por escrito timbre fiscal de 0,02 u.t. Dirigida a la Dra. Alexandra González directora de la dirección de salud ambiental del estado Lara, con copia a la coordinación de salud radiológica.",
      "Permiso de importación del equipo otorgado por el Ministerio de Energía y Petróleo.",
      "Certificado de origen del equipo.",
      "Presentación de la MEMORIA DESCRIPTIVA según capítulo 7 resolución nº 401 de fecha 24 de noviembre de 2006.",
      "MEMORIA DESCRIPTIVA QUE CONTENGA: Datos Administrativos: a. Datos de la Institución: Nombre, Dirección, Teléfono, Fax, e-mail. b. Responsable de la Institución. c. Responsable del equipo. d. Profesional responsable del Servicio. e. Profesional responsable de la Protección Radiológica. f. Datos del Equipo: g. Tipo de equipo y sus características. (Según NVC 218/I vigente). h. Accesorios de protección que dispone el equipo. i. Período de garantía del equipo. j. Aplicaciones médicas. k. Documentación técnica del equipo (copia).",
      "PROGRAMA DE PROTECCIÓN RADIOLÓGICA QUE CONTENGA: (SEGÚN NORMAS VENEZOLANAS COVENIN 3299 Y 218/I VIGENTES): a. Evaluación de la Seguridad. b. Descripción de las responsabilidades de todo el personal del servicio.",
      "VIGILANCIA RADIOLÓGICA: a. Dosimetría: tipo, laboratorio o empresa que lo realiza; periodicidad. b. Vigilancia de zona: equipo utilizado. c. Medios protectores para personal y pacientes. d. Exámenes médicos: quien los realiza y la periodicidad, establecido en la NVC 2274 vigente.",
      "MANUAL DE PROCEDIMIENTOS.",
      "PROGRAMA DE ASEGURAMIENTO DE LA CALIDAD, SEGÚN NORMA VENEZOLANA COVENIN 218/I VIGENTE: a. Nombre de la empresa que realiza calibración y mantenimiento: Dirección y teléfono. b. Periodicidad del servicio. c. Presentación de los protocolos de calibración y mantenimiento. d. Especifique si el Servicio Radiológico realiza control de calidad al equipo. e. Presentación de los protocolos del aseguramiento de la calidad.",
      "DATOS DEL PERSONAL OCUPACIONALMENTE EXPUESTO: a. Apellidos y Nombre. b. Profesión u oficio. Especialidad (Registro del Ministerio de Salud, SACS). c. Cursos realizados en protección radiológica: denominación del curso e institución que lo dictó. d. Otras instituciones donde se desempeña actualmente. e. Currículum vitae de los POE, con copias de los títulos y certificados en protección radiológica.",
      "Timbre fiscal de cinco (05) Unidades Tributarias."
    ],
  },
  "Requisitos Para La Solicitud De RIMFRI": {
    titulo: "REQUISITOS PARA LA SOLICITUD DE RIMFRI",
    // Usamos el mismo título para la tabla de recaudos
    tituloTabla: "REQUISITOS PARA LA SOLICITUD DE RIMFRI",
    lista: [
      "Conformidad sanitaria de ocupación empresas.",
      "Carta de Solicitud de RIMFRI a la Dra. Alexandra González Directora de Salud Ambiental / 2 timbres fiscales de 0.01 U.T.",
      "Planilla del RIMFRI.",
      "Fotocopia de la Cédula del representante legal.",
      "RIF. Vigente.",
      "DPCU.",
      "Registro mercantil.",
      "Factura de compra.",
      "Última Declaración de ISLR.",
      "Conformidad sanitaria de ocupación empresas.",
      "Los documentos se deben consignar en 2 carpetas, 2 marrones tipo oficio debidamente identificadas y con sus respectivos separadores."
    ],
  },
};

// ==================== GENERAR HTML DEL DOCUMENTO IDÉNTICO AL DISEÑO ORIGINAL ====================
function generarHTMLDocumento(datos, data, modoCompacto = false) {
  const fecha = new Date().toLocaleDateString("es-ES");
  const solicitudTipo = datos.solicitud || "SOLICITUD";
  const representante = datos.representante || "_________________________";
  const cedula = datos.cedula || "_________________________";
  const empresa = datos.empresa || "_________________________";
  const rif = datos.rif || "_________________________";
  const direccion = datos.direccion || "_________________________";

  // Configurar tamaños según modo (mismo que el HTML)
  let fontSize = 8;
  let padding = "2px 4px";
  let marginTop = 20;
  let lineHeight = 1.5;
  let titleSize = 8;
  
  if (modoCompacto) {
    fontSize = 6.5;
    padding = "2px 3px";
    marginTop = 10;
    lineHeight = 1.3;
    titleSize = 7.5;
  }

  // Verificar si es Dotación para la nota especial
  const esDotacion = data.titulo === "REQUISITOS PARA SOLICITUD DOTACIÓN SANITARIA";

  // ==================== DETERMINAR EL TEXTO DEL PERMISO PARA SALUD RADIOLÓGICA ====================
  // Obtener el tipo de CSO a partir del título de la tabla (data.titulo)
  const tituloTabla = data.titulo || data.tituloTabla || "";
  let textoPermiso = "de la Conformidad Sanitaria de Ocupación del establecimiento (CSO):";
  
  // Detectar si es Salud Radiológica y cambiar el texto según corresponda
  if (tituloTabla.includes("AMBIENTE RADIOLÓGICO") || tituloTabla.includes("AMBIENTE RADIOLOGICO")) {
    textoPermiso = "de la Conformidad Sanitaria de Ambiente Radiologico:";
  } else if (tituloTabla.includes("FUNCIONAMIENTO RADIOLÓGICO") || tituloTabla.includes("FUNCIONAMIENTO RADIOLOGICO")) {
    textoPermiso = "de la Conformidad Sanitaria de Funcionamiento Radiologico:";
  } else if (tituloTabla.includes("RIMFRI")) {
    textoPermiso = "del RIMFRI:";
  }

  let filasTabla = "";
  data.lista.forEach((item) => {
    filasTabla += `
      <tr>
        <td style="padding: ${padding}; border: 1px solid #000; font-size: ${fontSize}pt; line-height: ${lineHeight};">${escapeHtml(item)}</td>
        <td style="padding: ${padding}; border: 1px solid #000; text-align: center; width: 35px; font-size: ${fontSize}pt;">&nbsp;&nbsp;&nbsp;</td>
        <td style="padding: ${padding}; border: 1px solid #000; text-align: center; width: 35px; font-size: ${fontSize}pt;">&nbsp;&nbsp;&nbsp;</td>
      </tr>
    `;
  });

  // NOTA CONDICIONAL: Solo para el tipo "Conformidad Sanitaria De Ocupación Para Dotación"
  let notaHtml = "";
  if (esDotacion) {
    notaHtml = `
      <tr>
        <td colspan="3" style="padding: 4px 4px;">
          <strong>NOTA:</strong> Cálculo basado en las normas sanitarias para proyecto,
          construcción, reparación, reforma y mantenimiento de edificaciones,
          G.O Nº 4.044 del 08/09/88.
        </td>
      </tr>
    `;
  }

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>CSO - ${escapeHtml(data.titulo)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background: white;
      margin: 0;
      padding: 0;
      font-size: 8pt;
    }
    .container {
      max-width: 21.59cm;
      margin: 0 auto;
      background: white;
      padding: 1.5cm;
    }
    .center { text-align: center; }
    .right { text-align: right; }
    .justify { text-align: justify; }
    
    /* Líneas */
    .line {
      display: inline-block;
      border-bottom: 1px solid #000;
      min-width: 220px;
      height: 18px;
      vertical-align: bottom;
    }
    .line-small {
      display: inline-block;
      border-bottom: 1px solid #000;
      min-width: 120px;
      height: 18px;
      vertical-align: bottom;
    }
    .line-print {
      display: inline-block;
      border-bottom: 1px solid #000;
      min-width: 180px;
      width: auto;
    }
    .campo-vacio {
      display: inline-block;
      border-bottom: 1px solid #000;
      min-width: 120px;
      font-weight: normal;
    }
    .linea-completa {
      border-bottom: 1px solid #000;
      width: 100%;
      margin-top: 5px;
    }
    
    /* Títulos de impresión */
    .print-title {
      font-size: ${titleSize}pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 15px;
    }
    .fecha-line {
      text-align: right;
      font-size: 8pt;
      margin-bottom: 15px;
    }
    .destinatario {
      font-size: 8pt;
      margin-bottom: 15px;
      line-height: 1.5;
    }
    .solicitud-texto {
      font-size: 8pt;
      text-align: justify;
      margin-bottom: 15px;
    }
    
    /* Tabla de recaudos */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: ${marginTop}px;
      font-size: ${fontSize}pt;
    }
    th, td {
      border: 1px solid #000;
      vertical-align: top;
    }
    th, td {
      padding: ${padding};
    }
    th {
      background: #f2f2f2;
      text-align: center;
    }
    
    /* Declaración jurada */
    .declaracion-jurada {
      margin-top: 2px;
      margin-bottom: 2px;
      font-size: 8pt;
      text-align: justify;
    }
    
    /* Nota adicional */
    .nota-adicional {
      border: 1px solid #000;
      padding: 2px 4px;
      margin-top: 10px;
      font-size: 8pt;
      text-align: justify;
    }
    
    /* Firma */
    .signature {
      margin-top: 50px;
      text-align: center;
    }
    .signature-line {
      width: 250px;
      border-top: 1px solid #000;
      margin: 0 auto 10px auto;
      padding-top: 5px;
    }
    
    /* Tabla de pie */
    .footer-table td {
      height: 120px;
      padding: 8px;
    }
  </style>
</head>
<body>
<div class="container">
  <!-- ==================== SECCIÓN MEMBRETE ==================== -->
  <div class="print-title">${escapeHtml(data.titulo)}</div>
  
  <div class="fecha-line">
    Barquisimeto, <span class="line-print">_________________________</span>
  </div>
  
  <div class="destinatario">
    Dra. Alexandra González<br>
    Directora de Salud Ambiental del Estado Lara<br>
    Su despacho.
  </div>
  
  <div class="solicitud-texto">
    <p class="justify">
      Reciba un cordial saludo la presente es para solicitar ante su despacho la 
      <strong class="campo-vacio">${escapeHtml(solicitudTipo)}</strong> 
      ${textoPermiso}
      <strong class="campo-vacio">${escapeHtml(empresa)}</strong><br>
      cuyo Rif: 
      <strong class="campo-vacio">${escapeHtml(rif)}</strong> 
      y su representante legal: 
      <strong class="campo-vacio">${escapeHtml(representante)}</strong><br>
      C.I.N°: 
      <strong class="campo-vacio">${escapeHtml(cedula)}</strong> 
      ubicado en:
    </p>
    <div class="linea-completa">${escapeHtml(direccion)}</div>
  </div>
  
  <!-- ==================== SECCIÓN RECAUDO ==================== -->
  <table>
    <thead>
      <tr>
        <th style="width:auto">Recaudos</th>
        <th colspan="2" style="width:70px">Verificado</th>
      </tr>
      <tr>
        <th style="width:auto"></th>
        <th style="width:35px; text-align:center;">Sí</th>
        <th style="width:35px; text-align:center;">No</th>
      </tr>
    </thead>
    <tbody>
      ${filasTabla}
      ${notaHtml}
    </tbody>
  </table>
  
  <!-- ==================== SECCIÓN JURAMENTO ==================== -->
  <div class="declaracion-jurada">
    DECLARO BAJO JURAMENTO la veracidad de la información suministrada
    y que los documentos entregados en esta solicitud de Permiso
    <span class="line"></span>,
    son copia fiel y exacta de los originales, de probarse lo contrario,
    asumo la responsabilidad civil, penal y administrativa que corresponda.
    No me ha sido solicitado ningún pago o colaboración adicional
    a los timbres fiscales.
  </div>
  
  <!-- ==================== NOTA ADICIONAL ==================== -->
  <div class="nota-adicional">
    <strong>Nota:</strong> Los recaudos deben ser consignados por el representante legal, por una persona autorizada mediante poder notariado o, en su defecto, por un trabajador de la organización que presente los soportes que acrediten su vínculo laboral.
  </div>
  
  <!-- ==================== SECCIÓN FIRMA FINAL ==================== -->
  <div class="signature">
    <div class="signature-line"></div>
    Representante Legal
  </div>
  
  <table class="footer-table">
    <tr>
      <th>Taquilla Única DSA</th>
      <th>Ingeniería Sanitaria</th>
      <th>Dirección</th>
    </tr>
    <tr>
      <td>
        Recibido/Verificado Por<br><br>
        Nombre:<br>
        Fecha:<br>
        Sello:
      </td>
      <td>
        Recibido/Verificado Por:<br><br>
        Nombre:<br>
        Fecha:<br>
        Sello:
      </td>
      <td>
        Autorizado Por:<br><br>
        Nombre:<br>
        Fecha:<br>
        Sello:
      </td>
    </tr>
  </table>
</div>
</body>
</html>`;
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ==================== FUNCIÓN PRINCIPAL PARA GENERAR PDF ====================
async function generarCSOPDF(datosFormulario, nombrePlantilla) {
  const claveCSO = determinarTipoCSO(nombrePlantilla);
  const data = recaudosPorTipo[claveCSO];

  if (!data) {
    console.error("Tipo de CSO no encontrado:", claveCSO);
    alert(`Error: No se encontraron los requisitos para "${nombrePlantilla}". Se generará con el formato por defecto.`);
    const dataDefault = recaudosPorTipo["Conformidad Sanitaria De Ocupación Para Granjas"];
    await generarPDFConDatos(datosFormulario, dataDefault);
    return;
  }

  await generarPDFConDatos(datosFormulario, data);
}

async function generarPDFConDatos(datosFormulario, data) {
  const tieneMuchosItems = data.lista.length > 12;
  const modoCompacto = tieneMuchosItems;
  
  console.log(`📊 Tipo: ${data.titulo.substring(0, 50)}... | Items: ${data.lista.length} | Modo compacto: ${modoCompacto}`);
  
  const contenidoHTML = generarHTMLDocumento(datosFormulario, data, modoCompacto);
  
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = contenidoHTML;
  tempDiv.style.position = "absolute";
  tempDiv.style.top = "-9999px";
  tempDiv.style.left = "-9999px";
  document.body.appendChild(tempDiv);

  try {
    const canvas = await html2canvas(tempDiv, {
      scale: 3,
      backgroundColor: "#ffffff",
      logging: false,
      useCORS: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({
      unit: "mm",
      format: "letter",
      orientation: "portrait",
    });

    const pageWidthMM = 215.9;
    const pageHeightMM = 279.4;
    
    const imgWidthMM = pageWidthMM;
    const imgHeightMM = (canvas.height * imgWidthMM) / canvas.width;
    
    let finalHeightMM = imgHeightMM;
    let yPositionMM = 0;
    
    if (imgHeightMM > pageHeightMM) {
      const scale = pageHeightMM / imgHeightMM;
      finalHeightMM = imgHeightMM * scale;
      yPositionMM = 0;
      console.log(`📄 Imagen más alta (${imgHeightMM.toFixed(1)}mm), escalando a ${finalHeightMM.toFixed(1)}mm`);
    } else if (imgHeightMM < pageHeightMM) {
      yPositionMM = (pageHeightMM - imgHeightMM) / 2;
    }
    
    pdf.addImage(imgData, "PNG", 0, yPositionMM, imgWidthMM, finalHeightMM);
    
    const nombreArchivo = `CSO_${datosFormulario.empresa?.replace(/[^a-z0-9]/gi, "_") || "solicitud"}.pdf`;
    pdf.save(nombreArchivo);
    
    console.log(`✅ PDF generado - Modo compacto: ${modoCompacto}`);
    
  } catch (error) {
    console.error("Error al generar PDF:", error);
    alert("Error al generar el PDF. Verifique la consola para más detalles.");
  } finally {
    document.body.removeChild(tempDiv);
  }
}

// ==================== EXPORTAR FUNCIÓN GLOBAL ====================
window.generarCSOPDF = generarCSOPDF;
console.log("✅ pdf-generator.js cargado correctamente - DISEÑO IDÉNTICO AL HTML");
console.log("📋 Secciones: MEMBRETE, RECAUDO, JURAMENTO, DECLARO, FIRMA FINAL");