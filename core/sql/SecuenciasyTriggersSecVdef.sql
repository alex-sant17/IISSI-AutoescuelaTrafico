-- SECUENCIAS 

CREATE SEQUENCE SEC_WebTests
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_PagoClases
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_Ordenadores
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_UsoPC
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_ExamPractCirc
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;

CREATE SEQUENCE SEC_ExamPractPista
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_ExamTeoricos
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;

CREATE SEQUENCE SEC_Oferta
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_Matriculas
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_PagoTasas
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_Clases
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_SegurosTurismos
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;

CREATE SEQUENCE SEC_SegurosMotocicletas
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_ITVTurismos
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;

CREATE SEQUENCE SEC_ITVMotocicletas
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;
    
CREATE SEQUENCE SEC_ReparacionesTurismos
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;

CREATE SEQUENCE SEC_ReparacionesMotocicletas
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;

CREATE SEQUENCE SEC_Anuncios
INCREMENT BY 1
START WITH 1
MAXVALUE 99999;

-- Triggers asociados a secuencias

CREATE OR REPLACE TRIGGER TR_SEC_WebTests
BEFORE INSERT ON WebTests
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_WebTests.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_W:= valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_PagoClases
BEFORE INSERT ON PagoClases
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_PagoClases.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_PaC := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_Ordenadores
BEFORE INSERT ON Ordenadores
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_Ordenadores.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_PC := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_UsoPC
BEFORE INSERT ON UsoPC
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_UsoPC.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_U := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_ExamPractCirc
BEFORE INSERT ON ExamenesPracticoCirculacion
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_ExamPractCirc.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_EPC :=CONCAT('EPC',TO_CHAR(valorSecuencia));
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_ExamPractPista
BEFORE INSERT ON ExamenesPracticoPista
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_ExamPractPista.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_EPP :=CONCAT('EPP',TO_CHAR(valorSecuencia));
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_ExamTeoricos
BEFORE INSERT ON ExamenesTeoricos
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_ExamTeoricos.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_ET :=CONCAT('ET',TO_CHAR(valorSecuencia));
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_Oferta
BEFORE INSERT ON Oferta
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_Oferta.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_O := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_Matriculas
BEFORE INSERT ON Matriculas
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_Matriculas.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_M := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_PagoTasas
BEFORE INSERT ON PagoTasas
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_PagoTasas.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_PaT := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_Clases
BEFORE INSERT ON Clases
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_Clases.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_C := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_SegurosTurismos
BEFORE INSERT ON SegurosTurismos
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_SegurosTurismos.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_ST := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_SegurosMotocicletas
BEFORE INSERT ON SegurosMotocicletas
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_SegurosMotocicletas.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_SM := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_ITVTurismos
BEFORE INSERT ON ITVTurismos
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_ITVTurismos.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_IT := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_ITVMotocicletas
BEFORE INSERT ON ITVMotocicletas
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_ITVMotocicletas.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_IM := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_ReparacionesT
BEFORE INSERT ON ReparacionesTurismos
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_ReparacionesTurismos.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_RT := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_ReparacionesM
BEFORE INSERT ON ReparacionesMotocicletas
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_ReparacionesMotocicletas.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_RM := valorSecuencia;
END;
/

CREATE OR REPLACE TRIGGER TR_SEC_Anuncios
BEFORE INSERT ON Anuncios
FOR EACH ROW
DECLARE
    valorSecuencia NUMBER := 0;
BEGIN
    SELECT SEC_Anuncios.NEXTVAL INTO valorSecuencia FROM DUAL;
    :NEW.OID_ANUN := valorSecuencia;
END;
/
INSERT INTO Anuncios VALUES (0,to_date('17/11/2019','DD/MM/YYYY'),'Esto es un anuncio','Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Aliquam nec orci a metus iaculis cursus. Nullam gravida nulla non finibus 
        condimentum. Ut eget metus fringilla, luctus diam ac, fringilla metus. Praesent pharetra, ligula at dignissim 
        egestas, ipsum dolor varius tortor, vel malesuada tellus metus id erat. Aenean id malesuada sapien, id ultricies neque. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla malesuada accumsan 
        libero, ac sodales odio sollicitudin quis. Vestibulum lacinia egestas efficitur. Curabitur consectetur nibh mauris, in 
        ultricies turpis aliquam quis. Etiam ut nunc eget urna tempor dictum. Proin congue at lectus sit amet tincidunt.');

INSERT INTO Anuncios VALUES (1,to_date('19/01/2020','DD/MM/YYYY'),'Esto es otro anuncio','Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Aliquam nec orci a metus iaculis cursus. Nullam gravida nulla non finibus  
        ultricies turpis aliquam quis. Etiam ut nunc eget urna tempor dictum. Proin congue at lectus sit amet tincidunt.');