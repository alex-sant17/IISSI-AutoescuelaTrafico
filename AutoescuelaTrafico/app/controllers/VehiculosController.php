<?php
class VehiculosController extends BaseController{
	public $conectar;
	public $adapter;

	public function __construct() {
		parent::__construct();

		$this -> conectar = new Connection();
		$this -> adapter = $this -> conectar -> conexion();
	}
	
	//	ADMINISTRADOR
	
	public function getUsosYTalleres(){
		//	Usos por alumno
		$usos = new VehiculosModel($this->adapter);
		$usos = $usos->getUsosPorAlumno();
		
		$usosPorAlumno = array();
		foreach($usos as $uso){
			$id = $uso -> APELLIDOS . ", " . $uso -> NOMBRE;
			$usosPorAlumno[$id][] = $uso;
		}
		
		//	Talleres
		$talleres = new VehiculosModel($this->adapter);
		$talleres = $talleres->getTalleres();
		
		$this -> view("/vehiculos/usosYTalleres", array("usosPorAlumno" => $usosPorAlumno, "talleres" => $talleres));
	}
	
	public function addTaller(){
		$talleres = new VehiculosModel($this->adapter);
		$addTaller = $talleres->addTaller($_POST["nombreTaller"], $_POST["direccionTaller"], $_POST["telefonoTaller"]);
		funciones::redirect("Vehiculos", "getUsosYTalleres");
	}
	
	public function deleteTaller(){
		$talleres = new VehiculosModel($this->adapter);
		$deleteTaller = $talleres->deleteTaller($_POST["nombreTaller"], $_POST["direccionTaller"], $_POST["telefonoTaller"]);
		funciones::redirect("Vehiculos", "getUsosYTalleres");
	}
	
}
?>