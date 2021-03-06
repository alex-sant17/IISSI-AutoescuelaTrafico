<?php

class Persona extends BaseEntity{

	public $dni;
	public $nombre;
	public $apellidos;
	public $telefono;

	public function __construct($child){
		parent::__construct($child);
	}

	public function getDni() {
		return $this -> dni;
	}

	public function setDni($dni) {
		$this -> dni = $dni;
	}

	public function getNombre() {
		return $this -> nombre;
	}

	public function setNombre($nombre) {
		$this -> nombre = $nombre;
	}

	public function getApellidos() {
		return $this -> apellidos;
	}

	public function setApellidos($apellidos) {
		$this -> apellidos = $apellidos;
	}

	public function getTelefono() {
		return $this -> telefono;
	}

	public function setTelefono($telefono) {
		$this -> telefono = $telefono;
	}

}
?>